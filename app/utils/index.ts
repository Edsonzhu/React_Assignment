export const checkRegex = (value: string | number | undefined, regexString: string): boolean => {
  if (value === undefined)
  {
    return false;
  }

  if (typeof value === "number")
  {
    value = value.toString();
  }

  const regex = new RegExp(regexString);
  return regex.test(value as string);
}

export const generateId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}