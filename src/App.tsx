import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form, { FormData } from "./components/Form";
import Nav from "./components/Nav";
import ReactDOMServer from "react-dom/server";
import "./styles/App.scss";
import Generated from "./components/Generated";
import copyFormatted from "./utils/copyFormattedHTML";
import "./styles/components/Generated.scss";

function App() {
  const navigate = useNavigate();

  const modalRef = useRef(null);

  const onGenerateClick = ({
    name,
    occupation,
    phone,
    email,
    bannerImg,
    bannerURL,
    signatureType,
    publicId,
  }: FormData) => {
    let query = `?name=${encodeURIComponent(name)}`;
    query += `&occupation=${encodeURIComponent(occupation)}`;
    query += `&phone=${encodeURIComponent(phone)}`;
    query += `&email=${encodeURIComponent(email)}`;
    query += `&type=${encodeURIComponent(signatureType)}`;
    query += `&public-id=${encodeURIComponent(publicId)}`;
    if (bannerImg !== "" && bannerURL !== "") {
      query += `&banner-img=${encodeURIComponent(bannerImg)}`;
      query += `&banner-url=${encodeURIComponent(bannerURL)}`;
    }

    navigate("/generated" + query);
  };

  const onCopyToClipboardClick = ({
    name,
    occupation,
    phone,
    email,
    bannerImg,
    bannerURL,
    signatureType,
    publicId,
  }: FormData) => {
    let result = "<meta charset='utf-8'>";
    result += ReactDOMServer.renderToString(
      <Generated
        name={name}
        occupation={occupation}
        phone={phone}
        email={email}
        bannerImg={bannerImg}
        bannerURL={bannerURL}
        signatureType={signatureType}
        publicId={publicId}
      />
    );

    if (modalRef.current) {
      (modalRef.current as any).style.visibility = "initial";
    }

    copyFormatted(result);

    setTimeout(() => {
      if (modalRef.current) {
        (modalRef.current as any).style.visibility = "hidden";
      }
    }, 2000);
  };

  return (
    <div className="App">
      <Nav />
      <div className="wrapper">
        <div className="labels">
          <h1 className="title">Gener??tor podpis??</h1>
          <p className="description">
            Generujte podpisy jednodu??e a rychle. <br />
            Sta???? vyplnit ??daje formul????e a kliknout na tla????tko.
          </p>
          <p className="description">
            Po stisknut?? tla????tka <b>Generovat</b> budete p??esm??rov??ni na
            str??nku s va????m podpisem. Chcete-li jej pou????t, sta???? stisknout{" "}
            <b>Ctrl+A</b> a <b>Ctrl+C</b> (<b>Cmd+A</b> a <b>Cmd+C</b> pro
            macOS).
            <br /> Pro lep???? v??sledky doporu??ujeme pou????vat prohl????e?? Google
            Chrome. <br /> V p????pad??, ??e se v??m nena????t?? animovan?? logo v
            podpisu, vypn??te si pro tuto str??nku adblock.
          </p>
          <p className="description">
            Pokud stisknete <b>Kop??rovat do schr??nky</b>, v???? podpis se
            automaticky zkop??ruje. Po tom jej jen vlo??te pomoc?? <b>Ctrl+V</b> (
            <b>Cmd+V</b> pro macOS).
          </p>
        </div>

        <Form
          onCopyToClipboardClick={onCopyToClipboardClick}
          onGenerateClick={onGenerateClick}
        />

        <div className="modal-container">
          <p className="copy-success" ref={modalRef}>
            ??sp????n?? zkop??rov??no do schr??nky!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
