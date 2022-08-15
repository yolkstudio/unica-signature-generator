import React, { useState } from "react";
import banners from "../banners";
import "../styles/components/Form.scss";
import Select from "react-select";

export enum SignatureType {
  NO_ADDRESS,
  PRAGUE,
  BRNO,
  BOTH,
}

const style = {
  control: (base: any) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
};

const signatureTypeOptions = [
  { value: SignatureType.NO_ADDRESS, label: "Bez adresy" },
  { value: SignatureType.PRAGUE, label: "Pouze Praha" },
  { value: SignatureType.BRNO, label: "Pouze Brno" },
  { value: SignatureType.BOTH, label: "Obě adresy" },
];

const Form = ({ onGenerateClick, onCopyToClipboardClick }: FormProps) => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bannerImg, setBannerImg] = useState("");
  const [bannerURL, setBannerURL] = useState("");
  const [signatureType, setSelectedSignatureType] = useState<SignatureType>(
    SignatureType.BOTH
  );

  const isButtonDisabled = (): boolean => {
    let result =
      name === "" || occupation === "" || phone === "" || email === "";

    return result;
  };

  const selectBanner = (id: number) => {
    if (id === -1) {
      setBannerImg("");
      setBannerURL("");
      return;
    }

    const src = banners[id].src;
    const link = banners[id].link;

    setBannerImg(src);
    setBannerURL(link);
  };

  const buttonDisabled = isButtonDisabled();

  return (
    <div className="form">
      <label htmlFor="name">Jméno</label>
      <input
        id="name"
        placeholder="Edouard Perra"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required={true}
      />

      <label htmlFor="occupation">Pozice</label>
      <input
        id="occupation"
        placeholder="Management board member"
        type="text"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
        required={true}
      />

      <label htmlFor="phone">Telefonní číslo</label>
      <input
        id="phone"
        placeholder="+420 111 222 333"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required={true}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="edouard.perra@unica.cz"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />

      {/*<label htmlFor='banner-img'>Banner image (optional)</label>*/}
      {/*<div id='banner-img' className='banner-img'>*/}
      {/*    <ImageSelect images={banners.map(banner => banner.src)}*/}
      {/*        value={bannerImg}*/}
      {/*        noSelectionLabel='No banner'*/}
      {/*        onValueChange={selectBanner} />*/}
      {/*</div>*/}

      <label htmlFor="signature-type">Zobrazení adresy pod podpisem</label>
      <Select
        id="signature-type"
        defaultValue={signatureTypeOptions[3]}
        onChange={(option) => setSelectedSignatureType(option!.value)}
        options={signatureTypeOptions}
        styles={style}
      />

      <div className="buttons">
        <button
          disabled={buttonDisabled}
          className="button"
          onClick={() => {
            onGenerateClick({
              name,
              occupation,
              phone,
              email,
              bannerImg,
              bannerURL,
              signatureType,
            });
          }}
        >
          Generovat podpis
        </button>
        <label className="or">nebo</label>
        <button
          disabled={buttonDisabled}
          className="button"
          onClick={() => {
            onCopyToClipboardClick({
              name,
              occupation,
              phone,
              email,
              bannerImg,
              bannerURL,
              signatureType,
            });
          }}
        >
          Zkopírovat podpis do schránky
        </button>
      </div>
    </div>
  );
};

export default Form;

type FormProps = {
  onGenerateClick: (data: FormData) => void;
  onCopyToClipboardClick: (data: FormData) => void;
};

export type FormData = {
  name: string;
  occupation: string;
  phone: string;
  email: string;
  bannerImg: string;
  bannerURL: string;
  signatureType: SignatureType;
};
