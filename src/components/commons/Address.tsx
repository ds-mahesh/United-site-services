import * as React from "react";
import { regionNames } from "../../../sites-global/global";

const Address = (props: any) => {
  const { address } = props;
  var gmaps = "https://www.google.com/maps/dir/?api=1&destination=";
  var gmapsAddress = gmaps.concat(
    address.line1,
    " ",
    address.city,
    " ",
    address.region,
    " ",
    address.postalCode
  );
  var gmapsLink = gmapsAddress.concat('"');

  return (
    <>
      <div className="address notHighlight ">
        {/* <a href={gmapsLink} target="_blank" className="hover:underline"> */}
        <div className="add-sec-card">
          <span>{address.line1}</span>
        </div>
        {address.line2 && (
          <div>
            <span className="notHighlight">{address.line2}</span>
          </div>
        )}
        <div>
          <span className="notHighlight">
            {address.city}, {address.region} {address.postalCode}
          </span>{" "}
        </div>
        {
          <div>
            <span className="notHighlight"></span>
          </div>
        }
        {/* </a> */}
      </div>
    </>
  );
};

export default Address;
