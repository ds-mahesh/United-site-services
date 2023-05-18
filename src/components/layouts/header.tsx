import * as React from "react";
import "../../index.css";
const Header = (props: any) => {
  const { label, images, _site } = props;

  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  })

  const Headermenus = props?._site?.c_headerMenus?.map((link: any, i: any) => (
    <li>
      <a key={i} href={link?.link} >
        {link?.label}
      </a>
    </li>
  ));

  // const Titlemenu = props?._site?.c_titleMenu?.map((link: any,i:any) => (
  //   <a key={i} href="">
  //     <img src={link.titleLogo?.url} alt={''} />
  //     <span>{link.titleLabel.label}</span>
  //   </a>
  // ));

  return (
    <>
      <div className="header">
        {/* <div className="titlemenu">
          {Titlemenu}
        </div> */}
        <div className="Header-data flex">
          <div className="logo"><a><img className="United-services-logo" src="https://www.unitedsiteservices.com/wp-content/themes/united-site-services/library/img/logo.png" alt={''} /></a></div>
          <div className="headermenu">
            <ul className="menulist flex ">
              {Headermenus}
            </ul>
          </div>
          <div className="coustomer-care-contect flex space-x-2">
            <img src={props?._site?.c_coustomerCareNumber?.phoneicon?.url} alt={''} height="20" width="20" />
            <span>{props?._site?.c_coustomerCareNumber?.number}</span>
          </div>
        </div>
      </div >
    </>
  );
};

export default Header;
