import type { FormSchema } from "@/validations/core/types";
import { emailRule, minLength } from "../common/rules";

export type SignUpData = {
  name?: string;
  username?: string;
  email: string;
  password: string;
};

export const signUpSchema: FormSchema<SignUpData> = {
  email: {
    required: true,
    rules: [emailRule()],
  },
  password: {
    required: true,
    rules: [minLength(6)],
  },
};
