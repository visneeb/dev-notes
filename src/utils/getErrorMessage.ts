export const getErrorMessage = (
  error: any,
  fallback = "Something went wrong",
) => {
  return error?.response?.data?.error || fallback;
};
