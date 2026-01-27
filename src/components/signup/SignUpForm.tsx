import { AuthField } from "../../auth/AuthField";

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-7">
      <AuthField id="name" label="Name" autoComplete="name" />
      <AuthField
        id="username"
        label="Username"
        type="text"
        autoComplete="username"
      />
      <AuthField id="email" label="Email" type="email" autoComplete="email" />
      <AuthField id="password" label="Password" type="password" />
    </form>
  );
}
