import React from "react";
import { SignatureType } from "./Form";
import "../styles/components/Generated.scss";

const Generated = ({
  name,
  occupation,
  phone,
  email,
  bannerImg,
  bannerURL,
  signatureType,
}: GeneratedProps) => {
  return (
    <div id={"table-root"} style={{ wordSpacing: "normal", width: "100%" }}>
      {/*[if mso | IE]><table align="left" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:100%;" width="100%" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
      <div style={{ margin: "0px auto", maxWidth: "100%" }}>
        <table
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ width: "100%", border: 0 }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  direction: "ltr",
                  fontSize: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:middle;width:80px;" ><![endif]*/}
                {/*<div*/}
                {/*    className="mj-column-px-80 mj-outlook-group-fix"*/}
                {/*    style={{*/}
                {/*        fontSize: 0,*/}
                {/*        textAlign: "left",*/}
                {/*        direction: "ltr",*/}
                {/*        display: "inline-block",*/}
                {/*        verticalAlign: "middle",*/}
                {/*        width: "100%"*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <table*/}
                {/*        cellPadding={0}*/}
                {/*        cellSpacing={0}*/}
                {/*        role="presentation"*/}
                {/*        width="100%"*/}
                {/*        style={{ border: 0 }}*/}
                {/*    >*/}
                {/*        <tbody>*/}
                {/*        <tr>*/}
                {/*            <td style={{ verticalAlign: "middle", padding: 0 }}>*/}
                {/*                <table*/}
                {/*                    cellPadding={0}*/}
                {/*                    cellSpacing={0}*/}
                {/*                    role="presentation"*/}
                {/*                    width="100%"*/}
                {/*                    style={{ border: 0 }}*/}
                {/*                >*/}
                {/*                    <tbody>*/}
                {/*                    <tr>*/}
                {/*                        <td*/}
                {/*                            align="left"*/}
                {/*                            style={{*/}
                {/*                                fontSize: 0,*/}
                {/*                                padding: 0,*/}
                {/*                                paddingRight: 20,*/}
                {/*                                wordBreak: "break-word"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <table*/}
                {/*                                cellPadding={0}*/}
                {/*                                cellSpacing={0}*/}
                {/*                                role="presentation"*/}
                {/*                                style={{*/}
                {/*                                    borderCollapse: "collapse",*/}
                {/*                                    borderSpacing: 0,*/}
                {/*                                    border: 0*/}
                {/*                                }}*/}
                {/*                            >*/}
                {/*                                <tbody>*/}
                {/*                                <tr>*/}
                {/*                                    <td style={{ width: 60 }}>*/}
                {/*                                        <img*/}
                {/*                                            height="auto"*/}
                {/*                                            src="https://signatures.yolkone.com/unica/assets/img/face.png"*/}
                {/*                                            style={{*/}
                {/*                                                border: 0,*/}
                {/*                                                display: "block",*/}
                {/*                                                outline: "none",*/}
                {/*                                                textDecoration: "none",*/}
                {/*                                                height: "auto",*/}
                {/*                                                width: "100%",*/}
                {/*                                                fontSize: 13*/}
                {/*                                            }}*/}
                {/*                                            width={60}*/}
                {/*                                        />*/}
                {/*                                    </td>*/}
                {/*                                </tr>*/}
                {/*                                </tbody>*/}
                {/*                            </table>*/}
                {/*                        </td>*/}
                {/*                    </tr>*/}
                {/*                    </tbody>*/}
                {/*                </table>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</div>*/}
                {/*[if mso | IE]></td><td class="" style="vertical-align:middle;width:520px;" ><![endif]*/}
                <div
                  className="mj-column-px-520 mj-outlook-group-fix"
                  style={{
                    fontSize: 0,
                    textAlign: "left",
                    direction: "ltr",
                    display: "inline-block",
                    verticalAlign: "middle",
                    width: "100%",
                  }}
                >
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    width="100%"
                    style={{ border: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ verticalAlign: "middle", padding: 0 }}>
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                            style={{ border: 0 }}
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    fontSize: 0,
                                    padding: 0,
                                    paddingBottom: 0,
                                    wordBreak: "break-word",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontFamily: "Times New Roman",
                                      fontSize: "20px",
                                      fontStyle: "italic",
                                      lineHeight: "24px",
                                      textAlign: "left",
                                      color: "#5E528B",
                                    }}
                                  >
                                    <strong>{name}</strong>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    fontSize: 0,
                                    padding: 0,
                                    paddingTop: "10px",
                                    wordBreak: "break-word",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontFamily: "Arial",
                                      fontSize: 9,
                                      letterSpacing: 2,
                                      lineHeight: "8px",
                                      textAlign: "left",
                                      color: "#a7a9ab",
                                    }}
                                  >
                                    {occupation.toUpperCase()}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*[if mso | IE]></td></tr></table><![endif]*/}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:100%;" width="100%" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]*/}
      <div style={{ margin: "0px auto", maxWidth: "100%" }}>
        <table
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ width: "100%", border: 0 }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  direction: "ltr",
                  fontSize: 0,
                  padding: 0,
                  textAlign: "center",
                }}
              >
                {/*[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:100%;" ><![endif]*/}
                <div
                  className="mj-column-per-100 mj-outlook-group-fix"
                  style={{
                    fontSize: 0,
                    textAlign: "left",
                    direction: "ltr",
                    display: "inline-block",
                    verticalAlign: "top",
                    width: "100%",
                  }}
                >
                  <table
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    width="100%"
                    style={{ border: 0 }}
                  >
                    <tbody>
                      <tr>
                        <td style={{ verticalAlign: "top", padding: 0 }}>
                          <table
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                            style={{ border: 0 }}
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    fontSize: 0,
                                    padding: 0,
                                    paddingTop: "10px",
                                    wordBreak: "break-word",
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
                                      style={{ color: "#5e528b" }}
                                    >
                                      {email.toLowerCase()}
                                    </a>{" "}
                                    |{" "}
                                    <a
                                      href={`tel:${phone.split(" ").join("")}`}
                                      style={{ color: "#5e528b" }}
                                    >
                                      {phone}
                                    </a>{" "}
                                    |{" "}
                                    <a
                                      href="https://www.unica.cz"
                                      style={{ color: "#5e528b" }}
                                    >
                                      www.unica.cz
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    fontSize: 0,
                                    padding: "10px 25px",
                                    paddingTop: "20px",
                                    paddingBottom: "20px",
                                    paddingLeft: 0,
                                    wordBreak: "break-word",
                                  }}
                                >
                                  <table
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                      borderCollapse: "collapse",
                                      borderSpacing: 0,
                                      border: 0,
                                    }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td style={{ width: "80px" }}>
                                          <img
                                            alt={"Unica banner"}
                                            height="auto"
                                            src="/img/unica_logo.gif"
                                            style={{
                                              border: 0,
                                              display: "block",
                                              outline: "none",
                                              textDecoration: "none",
                                              height: "auto",
                                              width: "100%",
                                            }}
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              {(signatureType === SignatureType.PRAGUE ||
                                signatureType === SignatureType.BOTH) && (
                                <>
                                  <tr>
                                    <td
                                      align="left"
                                      style={{
                                        fontSize: 0,
                                        padding: 0,
                                        paddingBottom: "2px",
                                        wordBreak: "break-word",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontFamily: "Arial",
                                          fontSize: "13px",
                                          textAlign: "left",
                                          color: "#a7a9ab",
                                        }}
                                      >
                                        <strong>Unica Praha</strong>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="left"
                                      style={{
                                        fontSize: 0,
                                        padding: 0,
                                        paddingBottom: "10px",
                                        wordBreak: "break-word",
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
                                        Office Park Nove Butovice building C
                                        <br />
                                        Bucharova 2657/12 158 00 Praha -
                                        Stodulky
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              )}
                              {signatureType === SignatureType.BOTH && (
                                <tr>
                                  <td
                                    align="center"
                                    style={{
                                      fontSize: 0,
                                      padding: 0,
                                      paddingBottom: "10px",
                                      wordBreak: "break-word",
                                    }}
                                  >
                                    <p
                                      style={{
                                        borderTop: "solid 1px #b4b6b8",
                                        fontSize: "1px",
                                        margin: "0px auto",
                                        width: "100%",
                                      }}
                                    ></p>
                                    {/*[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #b4b6b8;font-size:1px;margin:0px auto;width:100%;" role="presentation" width="100%" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]*/}
                                  </td>
                                </tr>
                              )}
                              {(signatureType === SignatureType.BOTH ||
                                signatureType === SignatureType.BRNO) && (
                                <>
                                  <tr>
                                    <td
                                      align="left"
                                      style={{
                                        fontSize: 0,
                                        padding: 0,
                                        paddingBottom: "2px",
                                        wordBreak: "break-word",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontFamily: "Arial",
                                          fontSize: "13px",
                                          lineHeight: "18px",
                                          textAlign: "left",
                                          color: "#a7a9ab",
                                        }}
                                      >
                                        <strong>Unica Brno</strong>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="left"
                                      style={{
                                        fontSize: 0,
                                        padding: 0,
                                        paddingBottom: "20px",
                                        wordBreak: "break-word",
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
                                        Barvicova 833/53
                                        <br />
                                        602 00 Brno
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              )}
                              <tr>
                                <td
                                  align="left"
                                  style={{
                                    fontSize: 0,
                                    padding: 0,
                                    wordBreak: "break-word",
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
                                      href="https://www.facebook.com/UnicaClinic/"
                                      style={{ color: "#5e528b" }}
                                    >
                                      facebook
                                    </a>{" "}
                                    |{" "}
                                    <a
                                      href="https://www.instagram.com/unicaclinic/"
                                      style={{ color: "#5e528b" }}
                                    >
                                      instagram
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*[if mso | IE]></td></tr></table><![endif]*/}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*[if mso | IE]></td></tr></table><![endif]*/}
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
};
