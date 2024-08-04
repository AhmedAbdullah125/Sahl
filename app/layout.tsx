import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import "./all.min.css";
import "./style.css";
import "./style2.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "سهل سيل: أفضل موقع لعرض وبيع سيارات في الكويت | تجدد قائمة الاعلانات يوميًا",
  description:
    "ابحث وتصفح العروض المميزة على سهل سيل، أفضل موقع لعرض وشراء السيارات في الكويت. نقدم مجموعة متنوعة من السيارات المعتمدة والموثوقة للبيع، بما في ذلك سيارات مستعملة وجديدة من جميع الموديلات والأنواع. احصل على أفضل صفقات السيارات وفرص الشراء المثالية. قم ببيع سيارتك بسهولة من خلال نشر إعلانك معنا. انضم إلى سهل سيل اليوم واحصل على تجربة تسوق مميزة وموثوقة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
