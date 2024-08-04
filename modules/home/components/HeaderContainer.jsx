import React from 'react'
// import profile from '../../assets/profile-1.png'
import logo from '../../assets/sahl.png'
import Link from 'next/link'
export default function HeaderContainer() {
    function openNav() {
        document.getElementById('navgition').classList.add('reset-left')
    }
    function closeNav() {

        document.getElementById('navgition').classList.remove('reset-left')
    }

    return (
        <div className="top-header">
                <div className="container">
                <div className="nav-header">
                    <Link href="/" className="logo">
                        <div className="logo-cont">
                            <img src="https://sahl.sa/wp-content/uploads/2023/10/logo.png" alt="logo" />
                        </div>
                    </Link>

                    <div className="search-cont">

                        <div className="search-section">
                            <form className="search-form">
                                <input className="search-input" type="text" name="" placeholder="ابحث..." />
                                <button className="search-button">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="navgition" id='navgition'>
                        <div className="nav-head">
                            <button className="close-menu" id='close-menu'
                            //  onClick={closeNav}
                            >
                                <i className="iconsax" icon-name="x"></i>
                            </button>
                        </div>
                        <ul className="big-menu list-unstyled">
                            <li className="">
                                <Link href="/login">
                                    <i className="iconsax" icon-name="user-2"></i>
                                    تسجيل الدخول
                                </Link>
                            </li>
                            <li>
                                <Link href="/#stadium">
                                    <i className="iconsax" icon-name="heart"></i>
                                    انشاء حساب
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className='add-btn-nav'>
                                    <i className="fa-solid fa-plus"></i>
                                    أضف إعلانك
                                </Link>
                            </li>
                            {/* <li className='hidden-in-lg'>
                                <Link href="/about">
                                    من نحن
                                </Link>
                            </li> */}

                        </ul>
                    </div>
                    <div className="header-btn">
                        <Link href="#11" className="about-a d-none">تسجيل</Link>
                        <button className="menu-bars" id="menu-id"
                            // onClick={openNav}
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
