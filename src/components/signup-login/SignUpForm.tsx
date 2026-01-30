import { AuthField } from "../../auth/AuthField";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";


export function SignUpForm() {
  const navigate = useNavigate();
 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);
    console.log(values);

    navigate("/signup/success");
  };

  return (
    <>
      <form
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
          <AuthField
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="Email"
          />
          <AuthField
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
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
