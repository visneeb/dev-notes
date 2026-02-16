import { AuthField } from "../../auth/AuthField";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateForm } from "@/validations/core/engine";
import {
  signUpSchema,
  type SignUpData,
} from "@/validations/schemas/signup.schema";
import { formDataToSignUpData } from "@/validations/mappers/signup.mapper";
import { register } from "@/services/auth.service";

export function SignUpForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpData, string>>
  >({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = formDataToSignUpData(formData);

    const validationErrors = validateForm(values, signUpSchema, {
      mode: "signup",
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      await register(values);
      navigate("/signup/success");
    } catch (error: any) {
      const message = error.response?.data?.error || "Something went wrong";

      setErrors({ email: message });
    }
  };

  return (
    <>
      <form
        noValidate
        className="flex flex-col m-auto gap-10 w-78 sm:w-full "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-7">
          <AuthField
            id="name"
            label="Name"
            autoComplete="name"
            placeholder="Full name"
          />
          <AuthField
            id="username"
            label="Username"
            type="text"
            autoComplete="username"
            placeholder="Username"
          />
          <div>
            <AuthField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <AuthField
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="flex  justify-center">
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
}
