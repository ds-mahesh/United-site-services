import * as React from "react";
import "../../index.css";
const Header = (props: any) => {
  const { label, images, _site } = props;

  const Headermenus = props?._site?.c_headerMenus?.map((link: any, i: any) => (
    <li>
      <a key={i} href={link?.link}>
        {link?.label}
      </a>
    </li>
  ));

  return (
    <>
      <div className="header" id="myHeader">
        <div className="header-data flex">
          <div className="logo">
            <a>
              <img
                className="United-services-logo"
                src={props?._site?.logo?.image?.url}
                alt={""}
              />
            </a>
          </div>
          <div className="headermenu">
            <ul className="menulist flex ">{Headermenus}</ul>
          </div>
          <div className="main-header-search">
            <div className="head-search-bar flex space-x-1">
              <img
                src="https://purepng.com/public/uploads/medium/search-icon-sl7.png"
                alt={""}
                height="20"
                width="20"
              />
              <input type="text" />
            </div>
          </div>
          <div className="contect-number">
            <div className="coustomer-care-contect ">
              <a
                className="flex space-x-2"
                href={props?._site?.c_coustomerCareNumber?.number?.link}
              >
                <img
                  src={props?._site?.c_coustomerCareNumber?.phoneicon?.url}
                  alt={""}
                  height="20"
                  width="20"
                />
                <p>{props?._site?.c_coustomerCareNumber?.number?.label}</p>
              </a>
            </div>
          </div>
          {/* <div className="main-getquote">
            <div className="getquote-btn ">
              <div className="getquote-sec rounded-l-full">
                <a href={props?._site?.c_getQuote?.link}>
                  {props?._site?.c_getQuote.label}
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
