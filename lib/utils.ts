export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength)
    return false;
  return true;
};

export const getMessageError = (error: unknown) => {
  if (error instanceof Error) return error.message;
  if (error && typeof error === 'object' && 'message' in error) {
    return error.message;
  }
  if (typeof error === 'string') return error;
  return 'Something went wrong';
};
