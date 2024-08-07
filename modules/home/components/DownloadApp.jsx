import React from "react";
import AppleBtn from "../../assets/apple-btn.png";
import GoogleBtn from "../../assets/google-btn.png";

import SecImg from "../../assets/sec-img.png";
import Qr from "../../assets/qr-img.png";
export default function DownloadApp() {
  return (
    <div className="downloadApp-section">
      <div className="container">
        <div className="downloadApp-cont">
          <figure className="sec-img">
            <img src={SecImg.src} alt="hero" />
          </figure>
          <div className="downloadApp-content">
            <h3 className="downloadApp-title">
              الصفقة الافضل لك على بُعد ضغطة واحدة فقط
            </h3>
            <p className="downloadApp-pargh">
              بيع، اشتري، واستأجر بسهولة مع sahl sale حمل التطبيق الآن.
            </p>
            <div className="download-btn-cont">
              <a href="https://apps.apple.com/qa/app/sahl-sale-%D8%B3%D9%87%D9%84-%D8%B3%D9%8A%D9%84/id1638126545?platform=iphone">
                <img src={AppleBtn.src} alt="download" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.raiyansoft.sahlsale&hl=en&gl=US&pli=1">
                <img src={GoogleBtn.src} alt="download" />
              </a>
            </div>
            <div className="or-text">
              <span>او</span>
            </div>
            <div className="qr-cont">
              <figure className="qr-img">
                <img src={Qr.src} alt="qr" />
              </figure>
              <div className="qr-content">
                <h5 className="qr-head">حمل التطبيق باستخدام رمز ال QR</h5>
                <ul className="qr-list">
                  <li>امسح هذا الرمز باستخدام كاميرا هاتفك.</li>
                  <li>انقر على الرابط الذي يظهر على الشاشة.</li>
                  <li>ثبت التطبيق على هاتفك.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
