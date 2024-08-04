export const removeCountryCode = (phoneNumber: string): string => {
  return phoneNumber.replace("00965", "");
};
