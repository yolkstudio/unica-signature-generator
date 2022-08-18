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
          <h1 className="title">Generátor podpisů</h1>
          <p className="description">
            Generujte podpisy jednoduše a rychle. <br />
            Stačí vyplnit údaje formuláře a kliknout na tlačítko.
          </p>
          <p className="description">
            Po stisknutí tlačítka <b>Generovat</b> budete přesměrováni na
            stránku s vaším podpisem. Chcete-li jej použít, stačí stisknout{" "}
            <b>Ctrl+A</b> a <b>Ctrl+C</b> (<b>Cmd+A</b> a <b>Cmd+C</b> pro
            macOS).
            <br /> Pro lepší výsledky doporučujeme používat prohlížeč Google
            Chrome. <br /> V případě, že se vám nenačítá animované logo v
            podpisu, vypněte si pro tuto stránku adblock.
          </p>
          <p className="description">
            Pokud stisknete <b>Kopírovat do schránky</b>, váš podpis se
            automaticky zkopíruje. Po tom jej jen vložte pomocí <b>Ctrl+V</b> (
            <b>Cmd+V</b> pro macOS).
          </p>
        </div>

        <Form
          onCopyToClipboardClick={onCopyToClipboardClick}
          onGenerateClick={onGenerateClick}
        />

        <div className="modal-container">
          <p className="copy-success" ref={modalRef}>
            Úspěšně zkopírováno do schránky!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
