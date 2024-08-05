'use client'

import { useEffect } from "react";
import Link from "next/link";

const Footer = () => {

    useEffect(() => {
        const getData = async () => {
            console.log("APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");

            const query = fetch("https://sahlsale.work/api/advertisements/index/all");
            const response = (await query).json();
            console.log("response is", response);


        }
        getData()
    }, []);

    return (
        <div className='sahl-footer'>
            <div className="container footer-cont">
                <div className='sahl-info'>
                    <img src="https://sahl.sa/wp-content/uploads/2023/10/logo.png" alt="logo" />
                    <p>دائما مسرورين لخدمتك</p>
                    <span>المنصة رقم 1 للإعلانات المبوبة في مصر بقت دوبيزل ، تقدر تبيع،تشتري وتلاقي كل اللي محتاجه. أحسن مكان علشان تشتري بيتك، تبيع عربيتك، أو تلاقي وظيقة في مصر هو دوبيزل. تواصل مع المالك مباشرة. أكتر من مليون إعلان. خيارات كتيرة.</span>
                    <div className="social">
                        <Link href="https://www.instagram.com/topest/?igsh=djhmaGJzZmIwOG1p"><i className="fa-brands fa-facebook"></i></Link>
                        <Link href="https://www.instagram.com/q8h8/?igsh=NjltOHFlamQxMzZ1"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="https://wa.me/96551481099"><i className="fa-brands fa-whatsapp"></i></Link>
                    </div>
                </div>
                <div className="footer-categs">
                    <div className="categs-cont">
                        <h3>التصنيفات</h3>
                        <div className="categs-items">
                            <Link href="http://localhost:3000/categories/2/%D9%85%D8%AD%D8%B1%D9%83%D8%A7%D8%AA">محركات</Link>
                            <Link href="http://localhost:3000/categories/1/%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA">عقارات</Link>
                            <Link href="http://localhost:3000/categories/11/%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A7%D8%AA">الكترونيات</Link>
                            <Link href="http://localhost:3000/categories/10/%D8%A8%D9%8A%D8%B9%20%D9%88%D8%B4%D8%B1%D8%A7%D8%A1">بيع وشراء</Link>
                            <Link href="http://localhost:3000/categories/9/%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%20%D9%88%D8%AD%D8%B1%D9%81">مقاولات وحرف</Link>
                            <Link href="http://localhost:3000/categories/12/%D9%88%D8%B8%D8%A7%D8%A6%D9%81">وظائف</Link>
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
                </div>
            </div>
        </div>
    )
}


export default Footer;