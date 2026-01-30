import { isValidEmail, hasMinLength, hasNumber } from "./common/rules";

export type SignUpData = {
  email: string;
  password: string;
  username?: string;
};

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

export function validateSignUp(data: SignUpData): ValidationErrors<SignUpData> {
  const errors: ValidationErrors<SignUpData> = {};

  if (!isValidEmail(data.email)) {
    errors.email = "Invalid email format";
  }

  if (!hasMinLength(data.password, 8)) {
    errors.password = "Password must be at least 8 characters";
  } else if (!hasNumber(data.password)) {
    errors.password = "Password must contain at least 1 number";
  }

  return errors;
}


