import React from "react";
import { SignatureType } from "./Form";
import { api } from "../api";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import "../styles/components/Generated.scss";
import { autoBrightness } from "@cloudinary/url-gen/actions/adjust";
import { outline } from "@cloudinary/url-gen/actions/effect";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

const Generated = ({
  name,
  occupation,
  phone,
  email,
  bannerImg,
  bannerURL,
  signatureType,
  publicId,
}: GeneratedProps) => {
  const avatar = api.image(publicId);
  avatar
    .resize(
      thumbnail()
        .width(60)
        .height(60)
        .zoom(0.8)
        .gravity(focusOn(FocusOn.face()))
    )
    .roundCorners(max())
    .adjust(autoBrightness())
    .effect(outline().width(1).color("#a7a9ab"))
    .delivery(quality(90))
    .delivery(format("png"));

  const url = avatar.toURL();

  return (
    <div id={"table-root"} style={{ wordSpacing: "normal", width: "100%" }}>
      <div
        className="mj-column-px-80 mj-outlook-group-fix"
        style={{
          fontSize: 0,
          textAlign: "left",
          direction: "ltr",
          verticalAlign: "middle",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          height="auto"
          src={url}
          alt={"Portrait image"}
          style={{
            border: 0,
            display: "block",
            outline: "none",
            textDecoration: "none",
            height: "auto",
            width: "60px",
            fontSize: "13px",
            marginRight: "16px",
          }}
          width={"60px"}
        />

        <div
          className="mj-column-px-520 mj-outlook-group-fix"
          style={{
            fontSize: 0,
            textAlign: "left",
            verticalAlign: "middle",
          }}
        >
          <div
            style={{
              fontFamily: "Arial",
              fontSize: "22px",
              fontStyle: "italic",
              lineHeight: "22px",
              textAlign: "left",
              color: "#5E528B",
              marginBottom: "4px",
            }}
          >
            <strong>{name}</strong>
          </div>

          <div
            style={{
              fontFamily: "Arial",
              fontSize: "8px",
              letterSpacing: 2,
              lineHeight: "8px",
              textAlign: "left",
              color: "#a7a9ab",
            }}
          >
            {occupation.toUpperCase()}
          </div>
        </div>
      </div>

      <div
        className="mj-column-per-100 mj-outlook-group-fix"
        style={{
          fontSize: 0,
          textAlign: "left",
          verticalAlign: "top",
          width: "100%",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            fontFamily: "Arial",
            fontSize: "11px",
            lineHeight: "15px",
            textAlign: "left",
            color: "#a7a9ab",
          }}
        >
          <a
            href={`mailto:${email}`}
            style={{ color: "#5e528b", textDecoration: "none" }}
          >
            {email.toLowerCase()}
          </a>{" "}
          |{" "}
          <a
            href={`tel:${phone.split(" ").join("")}`}
            style={{ color: "#5e528b", textDecoration: "none" }}
          >
            {phone}
          </a>{" "}
          |{" "}
          <a
            href="https://www.unica.cz"
            style={{ color: "#5e528b", textDecoration: "none" }}
          >
            www.unica.cz
          </a>
        </div>
        <img
          alt={"Unica logo"}
          height="50px"
          width={"100px"}
          src="https://signatures.unica.cz/img/unica_logo.gif"
          style={{
            border: 0,
            display: "block",
            outline: "none",
            textDecoration: "none",
            height: "auto",
            width: "100px",
            maxWidth: "100px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        />
        <div style={{ marginBottom: "16px" }}>
          {(signatureType === SignatureType.PRAGUE ||
            signatureType === SignatureType.BOTH) && (
            <>
              <div
                style={{
                  fontFamily: "Arial",
                  fontSize: "13px",
                  textAlign: "left",
                  color: "#a7a9ab",
                  marginBottom: "4px",
                }}
              >
                <strong>Unica Praha</strong>
              </div>
              <div
                style={{
                  fontFamily: "Arial",
                  fontSize: "11px",
                  lineHeight: "15px",
                  textAlign: "left",
                  color: "#a7a9ab",
                }}
              >
                Office Park Nove Butovice building C
                <br />
                Bucharova 2657/12 158 00 Praha - Stodulky
              </div>
            </>
          )}
          {signatureType === SignatureType.BOTH && (
            <div
              style={{
                borderTop: "solid 1px #b4b6b8",
                fontSize: "1px",
                width: "220px",
                maxWidth: "220px",
                marginBottom: "16px",
                marginTop: "16px",
                height: "1px",
              }}
            >
              .
            </div>
          )}
          {(signatureType === SignatureType.BOTH ||
            signatureType === SignatureType.BRNO) && (
            <>
              <div
                style={{
                  fontFamily: "Arial",
                  fontSize: "13px",
                  lineHeight: "18px",
                  textAlign: "left",
                  color: "#a7a9ab",
                  marginBottom: "4px",
                }}
              >
                <strong>Unica Brno</strong>
              </div>

              <div
                style={{
                  fontFamily: "Arial",
                  fontSize: "11px",
                  lineHeight: "15px",
                  textAlign: "left",
                  color: "#a7a9ab",
                }}
              >
                Barvicova 833/53
                <br />
                602 00 Brno
              </div>
            </>
          )}
        </div>

        <div
          style={{
            fontFamily: "Arial",
            fontSize: "11px",
            lineHeight: "15px",
            textAlign: "left",
            color: "#a7a9ab",
            textDecoration: "none",
          }}
        >
          <a
            href="https://www.facebook.com/UnicaClinic/"
            style={{ color: "#5e528b", textDecoration: "none" }}
          >
            facebook
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/unicaclinic/"
            style={{ color: "#5e528b", textDecoration: "none" }}
          >
            instagram
          </a>
        </div>

        {/*[if mso | IE]></td></tr></table><![endif]*/}
      </div>
    </div>
  );
};

export default Generated;

type GeneratedProps = {
  name: string;
  occupation: string;
  phone: string;
  email: string;
  bannerImg?: string;
  bannerURL?: string;
  signatureType: SignatureType;
  publicId: string;
};
