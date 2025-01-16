export const valueOrUndefined = <T>(value: T): T => {
  if (Array.isArray(value)) {
    return value.join(' ') as T;
  }

  return value;
};
