export const emailRule = () => (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Email must be valid email";

export const minLength = (len: number) => (value: string) =>
  value.length >= len ? null : `must be at least ${len} characters`;

export const hasNumber = () => (value: string) =>
  /\d/.test(value) ? null : "Must contain a number";
