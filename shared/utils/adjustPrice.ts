export const adjustPrice = (price: string): string => {
  const fixedPrice = price.replace(".000", "");
  if (fixedPrice === "0") {
    return "مجاني";
  }

  return `${fixedPrice} دك`;
};
