export const valueOrUndefined = <V, R = string>(
  value: V | undefined,
): R | undefined => {
  if (Array.isArray(value)) {
    return value.join(' ') as R;
  }

  return value ? (`${value}` as R) : undefined;
};
