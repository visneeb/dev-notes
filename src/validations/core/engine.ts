import type { FormSchema } from "./types";

export function validateForm<T extends Record<string, any>, C = any>(
  data: T,
  schema: FormSchema<T>,
  context?: C
) {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const field in schema) {
    const value = data[field];
    const config = schema[field];

    if (!config) continue;

    if (config.required && !value) {
      errors[field] = "This field is required";
      continue;
    }

    if (config.rules) {
      for (const rule of config.rules) {
        const error = rule(value, context ?? data);
        if (error) {
          errors[field] = error;
          break;
        }
      }
    }
  }

  return errors;
}
