import * as React from "react";
import "../../index.css";
import logofooter from "../../images/logo-footer.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";

const Footer = (props: any) => {
	const { footer } = props;
	// const [isNavVisible, setNavVisibility] =  useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	console.log(footer)
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1024px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};
	// if (typeof window !== "undefined") {
	// 	mediaQuery = window?.innerWidth;
	// }


	return (
		<>
			<footer className="site-footer  inline-block">
				<div className="container inline-block">
					<div className="footer-menu-heading flex space-x-36">
						{props?._site?.c_footerMenus?.map((link: any, i: any) => (
							<>
								<div>
									<h5 className="">{link.footerMenuHeading}</h5>
									<ul className="footer-menu-list">
										{link.footermenulist.map((element: any, i: any) => (
											<li>
												<a href={element.link}>{element.label}</a>
											</li>
										))}
									</ul>
								</div>
							</>
						))
						}
					</div>

					<div className="link-sec-footer ">
						<div className="footer-block">
							<ul className="social-media-bx">
								{props?._site?.c_socialMediaIcon?.map((icon: any) => {
									return (
										<>
											<li className="">
												<a href={icon.link} target="_blank">
													<img src={icon.url} height="20" alt="social" width="21" className="inline-block w-5 h-auto" />
												</a>
											</li>
										</>
									)
								})}
							</ul>
						</div>
					</div>
					<div className="copyright-bx">
					</div>

				</div>
			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>
					.
				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;
function handleMediaQueryChange(mediaQuery: MediaQueryList) {
	throw new Error("Function not implemented.");
}

