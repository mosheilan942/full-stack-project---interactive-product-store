export const camelCaseToWords = (input: string): string => {
    return input
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, (c) => c.toLowerCase())
      .replace(/^\w/, (c) => c.toUpperCase());
  };