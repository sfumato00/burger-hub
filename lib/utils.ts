export const isNumber = (s?: string): boolean =>
  s != null && s !== "" && !isNaN(Number(s.toString()));
