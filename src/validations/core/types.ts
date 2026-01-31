type Rule<T> = (value: T, data?: any) => string | null;

type FieldSchema<T> = {
  required?: boolean;
  rules?: Rule<T>[];
};

export type FormSchema<T> = {
  [K in keyof T]?: FieldSchema<T[K]>;
};
