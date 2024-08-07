"use client";
import React from "react";
import { Category } from "../types";
import Link from "next/link";
import { paths } from "@/routes/paths";

type IProps = {
  categories: Category[],
};
const LowerHeader: React.FC<IProps> = ({ categories }) => {
  // export default function LowerHeader() {
    let subb = categories[0].subCategoryList;
  return (
    <div className="lower-header">
      <div className="container">
        <div className="lower-header-cont">
          <div className="r-side">
            {/* <a href="/">الصفحة الرئيسية</a>
            <a href="/">خدماتنا</a>
            <a href="/">زيت سيارة</a>
            <a href="/">اكسسوارات</a>
            <a href="/">مفاتيح</a>
            <a href="/">كشاف</a>
            <a href="/">حامل</a>
            <a href="/">شواحن</a>
            <a href="/">تيل فرامل</a>
            <a href="/">تيل فرامل</a>
            <a href="/">كباس يدوي</a> */}
            {categories.map((category) => (
              <Link
                href={paths.getCategory(category.id, category.title)}
                key={category.id}
                className="category"
              >
                <h2 className="text-center text-primary mt-1">
                  {category.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LowerHeader;

