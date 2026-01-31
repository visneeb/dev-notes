import type { SignUpData } from "../schemas/signup.schema";

export function formDataToSignUpData(formData: FormData): SignUpData {
  return {
    name: formData.get("name")?.toString(),
    username: formData.get("username")?.toString(),
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };
}
