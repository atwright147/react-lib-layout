export const valueOrUndefined = <T>(
  value: T | undefined,
): string | undefined => {
  if (Array.isArray(value)) {
    return value.join(' ');
  }

  return value ? `${value}` : undefined;
};
