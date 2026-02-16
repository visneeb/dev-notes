import { AuthField } from "../../auth/AuthField";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { type LogInData } from "@/validations/schemas/login.schema";
import { login } from "@/services/auth.service";
import { showCustomToast } from "../ui/custom-toast";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useState } from "react";

export function LoginForm() {
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);

    const values: LogInData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      await login(values);

      setAuth();

      navigate("/");
    } catch (error: any) {
      const status = error?.response?.status;
      const message = getErrorMessage(error);

      if (status === 401 && message) {
        setErrors({
          email: "error",
          password: "error",
        });

        showCustomToast({
          title: message,
          description: "Please try another password or email",
          variant: "error",
        });
      }

      if (status === 400) {
        setErrors({
          email: "error",
          password: "error",
        });
      }
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-10  m-auto w-78 sm:w-full "
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex flex-col gap-7">
          <AuthField
            id="email"
            name="email"
            label="Email"
            autoComplete="email"
            placeholder="Email"
            error={errors.email}
          />

          <AuthField
            id="password"
            name="password"
            label="Password"
            autoComplete="password"
            placeholder="Password"
            type="password"
            error={errors.password}
          />
        </div>

        <div className="flex  justify-center">
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </>
  );
}
