export class paths {
  static home = "/";
  static categories = "/categories";
  static getCategory = (id: number, title: string) =>
    `${paths.categories}/${id}/${title}`;

  static getAds = (
    categoryId: number,
    categoryName: string,
    subCategoryId: number,
    subCategoryName: string
  ) =>
    `${paths.getCategory(
      categoryId,
      categoryName
    )}/subCategory/${subCategoryId}/${subCategoryName}/ads`;

  static getAd = (
    categoryId: number,
    categoryName: string,
    subCategoryId: number,
    subCategoryName: string,
    adId: number
  ) =>
    `${paths.getAds(
      categoryId,
      categoryName,
      subCategoryId,
      subCategoryName
    )}/${adId}`;
}
