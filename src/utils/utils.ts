export const valueOrUndefined = <T>(value: T | undefined): T | undefined => {
  return value ? (`${value}` as T) : undefined;
};
