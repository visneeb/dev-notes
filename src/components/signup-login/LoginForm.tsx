import { AuthField } from "../../auth/AuthField";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <form className="flex flex-col gap-10  m-auto w-78 sm:w-full ">
        <div className="flex flex-col gap-7">
          <AuthField
            id="email"
            label="Email"
            autoComplete="email"
            placeholder="Email"
          />
          <AuthField
            id="password"
            label="Password"
            autoComplete="password"
            placeholder="Password"
          />
        </div>
        <div className="flex  justify-center">
          <Button variant="primary" onClick={handleClick}>
            Log in
          </Button>
        </div>
      </form>
    </>
  );
}
