import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import timesvg from "../../images/timericon.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";
import locationsvg from "../../images/location-pinnew.svg";
import OpenClose from "../commons/openClose";
// import Timer from "../locationDetail/countdown";

const Contact = (props: any) => {
  const {
    address,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText,
    name,
    timezone,
    c_getQuote,
  } = props;
  // console.log(timezone, "timer");
  return (
    <>
      <div className="address-main-sec">
        {/* <h4 className="box-title">{c_storeInfoHeading?c_storeInfoHeading:"Branch Address"}</h4> */}
        <div className="location-pagename flex space-x-2">
          <img
            className=" "
            src={locationsvg}
            width="20"
            height="20"
            alt="mapimage"
          />
          <h4 className="box-title">
            {name}, {address.region} {address.postalCode}
          </h4>
        </div>
        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            {/* <img className=" " src={locationsvg} width="20" height="20" alt="mapimage" /> */}
          </div>
          <div className="  address-text notHighlight">
            {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div>
              {address.city}, {address.region} {address.postalCode}
            </div>
            <div></div>
          </div>
        </div>

        {phone ? (
          <>
            <div className="icon-row phone-num">
              <div className="icon">
                {" "}
                <img
                  className=" "
                  src={Phonesvg}
                  width="22"
                  height="22"
                  alt="phonesvg"
                />
              </div>
              <div className="content-col">Telephone</div>
              <div>
                {" "}
                <a id="address" className=" location-phn" href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="container">
          <div className="banner-text banner-dark-bg text-center flex space-x-1">
            <div className="timer-img">
              <img
                className=""
                src={timesvg}
                width="22"
                height="22"
                alt="timersvg"
              />
            </div>
            <div className="openClosestatus detail-page closeing-div">
              <OpenClose timezone={timezone} hours={hours} />
            </div>
          </div>
        </div>
        <div className=" flex space-x-4">
          <div className="getquote-cta">
            <a href={c_getQuote?.link}>{c_getQuote?.label}</a>{" "}
          </div>
          <div className="button-bx direction-button">
            <GetDirection
              buttonText={
                c_getDirectionsCTAText
                  ? c_getDirectionsCTAText
                  : StaticData.getDirection
              }
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </div>
        </div>
        <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>
      </div>

      {hours && typeof hours.monday != "undefined" ? (
        <div className="hours">
          <div className="hours-sec">
            <div className="title-with-link-1">
              <h4 className="box-title">{"Store Opening Hours"}</h4>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}

              {/* <div className="title-with-link-1">
        <h4 className="box-title">{"Store Hours"}</h4>        
      </div> */}
              {hours && (
                <Hours
                  title={"Store Opening Hours"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;
