export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function hasMinLength(value: string, length: number) {
  return value.length >= length;
}

export function hasNumber(value: string) {
  return /\d/.test(value);
}
