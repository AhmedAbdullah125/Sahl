"use client";

import { useEffect } from "react";
import Link from "next/link";
import AppleBtn from "../../assets/apple-btn.png";
import GoogleBtn from "../../assets/google-btn.png";

const Footer = () => {

  return (
    <div className="sahl-footer">
      <div className="contact-footer">
        <div className="container">
          <div className="contact-flex">
            <div className="contact-text">
              <h2 className="contact-head">نحن دائماً جاهزون لمساعدتك</h2>
              <p className="contact-pargh">
                تواصل معنا من خلال أي من قنوات الدعم التالية:
              </p>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <div className="contact-link">
                  <label className="contact-label">
                    الدعم عبر البريد الإلكتروني
                  </label>
                  <a
                    title=""
                    className="contact-ancor"
                    href="mailto:support@sahl.tech"
                  >
                    support@sahl.tech
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <div className="contact-link">
                  <label className="contact-label">
                  الدعم عبر الهاتف
                  </label>
                  <a
                    title=""
                    className="contact-ancor"
                    href="tel:96551481099"
                  >
                    96551481099
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-cont">
        <div className="sahl-info">
          <img
            src="https://sahl.sa/wp-content/uploads/2023/10/logo.png"
            alt="logo"
          />
          <p>دائما مسرورين لخدمتك</p>
          <span>
            سهل سيل هو برنامج كويتي يتميز بالسهوله القصوى والسرعه وبالطبع عدم
            التعقيد يتيح الفرصه للعملاء للبيع والشراء والإيجار في أقسام متنوعه
            وكثيرة بكل سهوله
          </span>
          <h3 className="download-text">حمل التطبيق</h3>
          <div className="download-btn-cont">
            <a href="https://apps.apple.com/qa/app/sahl-sale-%D8%B3%D9%87%D9%84-%D8%B3%D9%8A%D9%84/id1638126545?platform=iphone">
              <img src={AppleBtn.src} alt="download" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.raiyansoft.sahlsale&hl=en&gl=US&pli=1">
              <img src={GoogleBtn.src} alt="download" />
            </a>
          </div>
        </div>
        {/* <div className="footer-categs">
          <div className="categs-cont">
            <h3>التصنيفات</h3>
            <div className="categs-items">
              <Link href="http://localhost:3000/categories/2/%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA">
                محركات
              </Link>
              <Link href="http://localhost:3000/categories/1/%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA">
                عقارات
              </Link>
              <Link href="http://localhost:3000/categories/11/%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A7%D8%AA">
                الكترونيات
              </Link>
              <Link href="http://localhost:3000/categories/10/%D8%A8%D9%8A%D8%B9%20%D9%88%D8%B4%D8%B1%D8%A7%D8%A1">
                بيع وشراء
              </Link>
              <Link href="http://localhost:3000/categories/9/%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%20%D9%88%D8%AD%D8%B1%D9%81">
                مقاولات وحرف
              </Link>
              <Link href="http://localhost:3000/categories/12/%D9%88%D8%B8%D8%A7%D8%A6%D9%81">
                وظائف
              </Link>
            </div>
          </div>
          <div className="footer-account">
            <h3>حسابى</h3>

            <div className="categs-items">
              <Link href="/account">معلومات الحساب</Link>
              <Link href="/account">قائمتى</Link>
              <Link href="/account">الاعلانات المفضله</Link>
              <Link href="/account">مدفوعاتى</Link>
              <Link href="/account">المتابعون</Link>
            </div>
          </div>
          <div className="footer-account">
            <h3>معلومات</h3>

            <div className="categs-items">
              <Link href="/account">عنا</Link>
              <Link href="/account">الشروط والأحكام</Link>
              <Link href="/account">سياسة ملف التعريف</Link>
              <Link href="/account">المدونة</Link>
            </div>
          </div>
        </div> */}
      </div>
      <div className="rights-footer">
        <div className="container">
          <div className="rights-cont">
            <div className="rights-text">
              <span>© جميع الحقوق محفوظة سهل سيل 2024</span>
            </div>
            <div className="social">
              <Link href="https://www.snapchat.com/add/a55555o/Jllbx0JxTxaHBLJzrBqN4wAAgdnV3eWN5YWR0AZEifH2DAZEifFL5AAAAAg">
                <i className="fa-brands fa-snapchat"></i>
              </Link>
              <Link href="https://www.instagram.com/sahlsale/?hl=ar">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="https://wa.me/96551481099">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
