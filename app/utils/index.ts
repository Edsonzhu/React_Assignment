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