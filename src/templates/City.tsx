import * as React from "react";
// import Banner from "../components/banner";
// import favicon from "../images/Domino's Pizza-favIcon.ico";
// import BreadCrumbs from "../components/layouts/BreadCrumbs";
// import { AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie } from "../types/constants";
// import GetDirection from "../components/GetDirection";
// import { stagingBaseUrl } from "../constants";
// import bannerImage from "../images/app-bg.png";
// import favicon from "../images/favicon-live.png";
import Phonesvg from "../images/phone.svg";
import timesvg from "../../images/timericon.svg";
import locationsvg from "../images/location-pinnew.svg";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { Link } from "@yext/pages/components";
//  import Logo from "../images/logo.svg";

import "../index.css";
var currentUrl = "";
import "../index.css";
// import "../main.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import {
  favicon,
  regionNames,
  stagingBaseurl,
} from "../../sites-global/global";
// import { stagingBaseUrl } from "../config/globalConfig";
import { JsonLd } from "react-schemaorg";
import PageLayout from "../components/layouts/PageLayout";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import { formatPhoneNumber } from "react-phone-number-input";
import OpenClose from "../components/commons/openClose";

var currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "ce_city",
    filter: {
      savedFilterIds: ["dm_stores-directory_address_city"],
      entityTypes: ["ce_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      // "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryParents.dm_baseEntityCount",
      "dm_directoryChildren.dm_baseEntityCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.mainPhone",
      // "dm_directoryChildren.what3WordsAddress",
      "dm_directoryChildren.yextDisplayCoordinate",
      // "timezone",
      // "hours",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

let slugString = "";
// export const getPath: GetPath<TemplateProps> = ({ document }) => {
//   document.dm_directoryParents.forEach((e: any) => {
//     if (e.sulg != "location" && e.slug != "gb") {
//       slugString += e.slug + "/";
//       slugString = slugString.replace("location", "");
//     }
//   });

//   currentUrl = slugString + document.slug + ".html";

//   return slugString + document.slug + ".html";
// };
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url: any = "";
  document.dm_directoryParents.map((i: any, index: number) => {
    if (i.meta.entityType.id == "ce_country") {
      url = `${i.slug}`;
    } else if (i.meta.entityType.id == "ce_region") {
      url = `${url}/${i.slug}/${document.slug.toString()}.html`;
    }
  });
  return url;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
}): HeadConfig => {
  let metaDescription = document._site
    ? document._site
    : "Find your nearest United Site Services and which services are available." +
      document.name;
  let metaTitle = `United Site Services in ${document.name} | Find a Local Store`;
  // let canonicalURL = document._site.c_metaTags.canonicalURL  ? document._site.c_metaTags.canonicalURL + document.dm_directoryParents[1].name.toLowerCase() +"/"+ document.dm_directoryParents[2].slug +"/"+ document.slug + ".html"  : stagingBaseUrl + document.dm_directoryParents[1].name.toLowerCase() +"/"+ document.dm_directoryParents[2].slug +"/"+ document.slug + ".html"
  // let ogmetaImage = document._site.c_ogmetaTags.oGImage[0].url ? document._site.c_ogmetaTags.oGImage[0].url : "https://cdn.Domino's Pizza.co.uk/en/assets/images/large/IMG_10480.jpg"

  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${metaDescription}`,
        },
      },

      // {
      //   type: "meta",
      //   attributes: {
      //     name: "title",
      //     content: `${metaTitle}`,
      //   },
      // },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: "United Site Services",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          // href: ` ${canonicalURL}`,
        },
      },
      ///og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          // content: `${canonicalURL}`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${metaDescription}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "og:image",
          // content: `${ogmetaImage}`
        },
      },

      /// twitter tag

      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${metaTitle}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          // content: `${canonicalURL}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: `https://www.United Site Services.co.uk/cs/groups/configfiles/documents/document/favicon.ico`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${metaDescription}`,
        },
      },
    ],
  };
};

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren,
    c_globalData,
    c_canonical,
    c_metaDescription,
    c_metaTitle,
    _site,
    __meta,
    // timezone,
    // hours,
  } = document;
  // console.log(timezone, "fbsjfbfbewfesjfbesfesf");
  var address;
  var sortedChildren = dm_directoryChildren.sort(function (a: any, b: any) {
    var a = a.name;
    var b = b.name;
    return a < b ? -1 : a > b ? 1 : 0;
  });

  let slugString = "";
  document.dm_directoryParents.forEach((e: any) => {
    slugString += e.slug + "/";
  });
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const childrenDivs = dm_directoryChildren.map(
    (entity: any, index: number) => {
      var origin: any = null;
      if (entity.address.city) {
        origin = entity.address.city;
      } else if (entity.address.region) {
        origin = entity.address.region;
      } else {
        origin = entity.address.country;
      }
      // let key: any = Object.keys(entity.hours)[0];
      let detailPageUrl = "";
      var name: any = entity.name.toLowerCase();
      var string: any = name.toString();
      let removeSpecialCharacters = string.replace(
        /[&\/\\#^+()$~%.'":*?<>{}!@]/g,
        ""
      );
      let result: any = removeSpecialCharacters.replaceAll(" ", "-");
      if (!entity.slug || entity.slug == "undefined") {
        detailPageUrl = `${entity.id}`;
      } else {
        detailPageUrl = `${entity.slug.toString()}`;
        console.log(detailPageUrl);
      }
      return (
        <React.Fragment key={index}>
          <div className="w-full sm:w-1/2 xl:w-1/3 px-[15px]" key={index}>
            <div className="near-location">
              <div className="city-page-card flex space-x-2">
                <div className="icon text-black relative">
                  {" "}
                  <img
                    className=" "
                    src={locationsvg}
                    width="20"
                    height="20"
                    alt={""}
                  />
                </div>
                <h2>
                  <Link
                    eventName={"Location detail"}
                    key={entity.slug}
                    href={`/${detailPageUrl}`}
                  >
                    {entity.name}, {entity.address.region}{" "}
                    {entity.address.postalCode}
                  </Link>
                </h2>
              </div>
              <div className="store-address">
                <p>
                  {entity.address.line1 ? entity.address.line1 : ""},
                  {entity.address.line2 ? entity.address.line2 : ""}
                  <br /> {entity.address.city ? entity.address.city : ""},{" "}
                  {entity.address.postalCode ? entity.address.postalCode : ""},{" "}
                  <br />
                  {entity.address.countryCode
                    ? regionNames.of(entity.address.countryCode)
                    : ""}{" "}
                  <br />
                </p>
              </div>

              {entity.mainPhone && (
                <div className="store-Pizza">
                  <div className="phoneno flex space-x-2">
                    <img src={Phonesvg} alt={""} />
                    <span>Telephone</span>
                  </div>
                  <p>
                    <Link
                      eventName={"PhoneNumber"}
                      href={`tel:${entity.mainPhone}`}
                      rel="noopener noreferrer"
                    >
                      {formatPhoneNumber(entity.mainPhone)}
                    </Link>
                  </p>
                </div>
              )}
              {/* <div className="openClosestatus detail-page closeing-div">
              <OpenClose timezone={timezone} hours={hours} />
            </div> */}
              <div className="store-link flex space-x-4">
                <a className="view-details" href={`/${detailPageUrl}`}>
                  <div
                    className="card-img-top rounded-lg"
                    style={{
                      backgroundColor: "#00539b",
                      fontSize: "16px",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      height: "30px",
                      width: "120px",
                      color: "#fff",
                    }}
                  >
                    {" "}
                    Branch Details
                  </div>
                </a>
                <Link
                  className="direction"
                  onClick={() => {
                    getDirectionUrl(entity);
                  }}
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card-img-top rounded-lg"
                    style={{
                      backgroundColor: "#00539b",
                      fontSize: "16px",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      height: "30px",
                      width: "120px",
                      color: "#fff",
                    }}
                  >
                    {" "}
                    Get Directions
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* </AnalyticsScopeProvider>
      </AnalyticsProvider> */}
        </React.Fragment>
      );
    }
  );
  function getDirectionUrl(entitiy: any) {
    var origin: any = null;
    if (entitiy.address.city) {
      origin = entitiy.address.city;
    } else if (entitiy.address.region) {
      origin = entitiy.address.region;
    } else {
      origin = entitiy.address.country;
    }
    if (navigator.geolocation) {
      const error = (error: any) => {
        var message_string =
          "Unable to determine your location. please share your location";
        // if (confirm(message_string) != true) {
        //   var getDirectionUrl =
        //     "https://www.google.com/maps/dir/?api=1&destination=" +
        //     entitiy.yextDisplayCoordinate.latitude +
        //     "," +
        //     entitiy.yextDisplayCoordinate.longitude +
        //     "&origin=" +
        //     origin;

        //   window.open(getDirectionUrl, "_blank");
        // } else {
        //   return false;
        // }
        var getDirectionUrl =
          "https://www.google.com/maps/dir/?api=1&destination=" +
          entitiy.yextDisplayCoordinate.latitude +
          "," +
          entitiy.yextDisplayCoordinate.longitude +
          "&origin=" +
          origin;

        window.open(getDirectionUrl, "_blank");
      };
      navigator.geolocation.getCurrentPosition(
        function (position) {
          let currentLatitude = position.coords.latitude;
          let currentLongitude = position.coords.longitude;
          let getDirectionUrl =
            "https://www.google.com/maps/dir/?api=1&destination=" +
            entitiy.yextDisplayCoordinate.latitude +
            "," +
            entitiy.yextDisplayCoordinate.longitude +
            "&origin=" +
            currentLatitude +
            "," +
            currentLongitude;
          window.open(getDirectionUrl, "_blank");
        },
        error,
        {
          timeout: 10000,
        }
      );
    }
  }
  c_globalData &&
    c_globalData.map((i: any) => {
      address = i.address ? i.address : [];
    });

  let templateData = { document: document, __meta: __meta };
  // let breadcrumbScheme: any = [];
  let currentIndex: any = 0;
  // dm_directoryParents &&
  //   dm_directoryParents.map((i: any, index: any) => {
  //     currentIndex = index;
  //     if (index != 0) {
  //       breadcrumbScheme.push({
  //         "@type": "ListItem",
  //         position: 1,
  //         item: {
  //           "@id": `${stagingBaseUrl}/${i.slug}.html`,
  //           name: i.name,
  //         },
  //       });
  //     }
  //   });
  // breadcrumbScheme.push({
  //   "@type": "ListItem",
  //   position: 1,
  //   item: {
  //     //"@id": `${stagingBaseUrl}${dm_directoryParents[1].slug}.html`,
  //     name: dm_directoryParents[1].name,
  //   },
  // });
  // breadcrumbScheme.push({
  //   "@type": "ListItem",
  //   position: 2,
  //   item: {
  //     //"@id": `${stagingBaseUrl}${dm_directoryParents[1].slug}/${dm_directoryParents[2].slug}.html`,
  //     name: dm_directoryParents[2].name,
  //   },
  // });
  // breadcrumbScheme.push({
  //   "@type": "ListItem",
  //   position: 3,
  //   item: {
  //    // "@id": `${stagingBaseUrl}${dm_directoryParents[1].slug}/${dm_directoryParents[2].slug}/${document.slug.toString()}.html`,
  //     name: document.name,
  //   },
  // });
  return (
    <>
      {/* <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Domino's Pizza",
          "url": "https://www.Domino's Pizza.co.uk/",
          //"logo": favicon,
          "sameAs": [
            "https://www.twitter.com/Domino's Pizza",
            "https://www.facebook.com/Domino's Pizza"
          ],
        }}
      /> */}
      {/* <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      /> */}
      <AnalyticsProvider
        templateData={templateData}
        // enableDebugging={AnalyticsEnableDebugging}
        // enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        <AnalyticsScopeProvider name={""}>
          <PageLayout _site={_site} templateData={{ __meta, document }}>
            <div className="banner">
              <div className="locator-banner">
                <img src={_site.c_locatorbanner.url} alt={""} />
              </div>
              <div className="blur-banner">
                <div className="image-color country-banner">
                  <div className="country-breadcrumb pl-6">
                    {" "}
                    <BreadCrumbs
                      name={name}
                      address={address}
                      parents={dm_directoryParents}
                      baseUrl={relativePrefixToRoot}
                    ></BreadCrumbs>
                  </div>
                </div>
                <div className="image-text image-color">
                  <h2 className="" style={{ textAlign: "center" }}>
                    Available Services in {name},{" "}
                    {document.dm_directoryParents[2].name},{" "}
                    {document.dm_directoryParents[1].name}{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="header-title ">
              {/* <Herobanner c_bannerTitle={_site.c_bannerTitle}></Herobanner> */}
            </div>
            <div>
              <div className="directory-country nearby-sec">
                <div className="container">
                  <div className="flex  flex-wrap justify-center -mx-[15px]">
                    {childrenDivs}
                  </div>
                </div>
              </div>
            </div>
          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};
export default City;
