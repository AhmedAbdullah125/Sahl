export const removeZeros = (phoneNumber: string): string => {
  return phoneNumber.startsWith("00")
    ? phoneNumber.replace("00", "")
    : phoneNumber;
};
