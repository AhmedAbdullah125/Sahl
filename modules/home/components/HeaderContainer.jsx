import React from "react";
// import profile from '../../assets/profile-1.png'
import logo from "../../assets/sahl.png";
import AppleBtn from "../../assets/apple-btn.png";
import GoogleBtn from "../../assets/google-btn.png";
import Link from "next/link";
import SearchInput from "@/shared/components/SearchInput";
import SecImg from "../../assets/ItunesArtwork.png";

export default function HeaderContainer() {
 

  return (
    <div className="top-header">
      <div className="container">
        <div className="nav-header">
          <Link href="/" className="logo">
            {/* <div className="logo-cont">
              <img
                src="https://sahl.sa/wp-content/uploads/2023/10/logo.png"
                alt="logo"
              />
              
            </div> */}
            <figure className="logo-cont">
              <img src={SecImg.src} alt="hero" />
          </figure>
          </Link>
          <div className="download-btn-cont">
            <a href="https://apps.apple.com/qa/app/sahl-sale-%D8%B3%D9%87%D9%84-%D8%B3%D9%8A%D9%84/id1638126545?platform=iphone">
              <img src={AppleBtn.src} alt="download" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.raiyansoft.sahlsale&hl=en&gl=US&pli=1">
              <img src={GoogleBtn.src} alt="download" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
