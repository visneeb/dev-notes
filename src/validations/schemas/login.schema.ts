import type { FormSchema } from "@/validations/core/types";
import { emailRule } from "../common/rules";

export type LogInData = {
  email: string;
  password: string;
};

export const logInSchema: FormSchema<LogInData> = {
  email: {
    required: true,
    rules: [emailRule()],
  },
  password: {
    required: true,
  },
};
