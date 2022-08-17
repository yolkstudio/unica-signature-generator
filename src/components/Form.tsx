import React, { useState } from "react";
import banners from "../banners";
import "../styles/components/Form.scss";
import Select from "react-select";
import { Cloudinary } from "@cloudinary/url-gen";

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
  const [publicId, setPublicId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isButtonDisabled = (): boolean => {
    return (
      name === "" ||
      occupation === "" ||
      phone === "" ||
      email === "" ||
      publicId === ""
    );
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

  // @ts-ignore
  const uploadWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "yolkstudio",
      uploadPreset: "cyxvza2f",
      // cropping: true,
      styles: {
        palette: {
          window: "#FFF",
          windowBorder: "#90A0B3",
          tabIcon: "#61508F",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#61508F",
          action: "#61508F",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#907bd7",
          complete: "#20B832",
          sourceBg: "#E4EBF1",
        },
      },
    },
    async (error: any, result: any) => {
      if (!error && result && result.event === "success") {
        await setPublicId(result.info.public_id);
        console.log(result);
        await setIsLoading(false);
      } else await setIsLoading(false);
    }
  );

  return (
    <div className="form">
      <label htmlFor="name">Jméno</label>
      <input
        id="name"
        placeholder="Ing. Dita Groligová"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required={true}
      />

      <label htmlFor="occupation">Pozice</label>
      <input
        id="occupation"
        placeholder="Head of Coordination, Brno"
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
        placeholder="dita@unica.cz"
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
        isSearchable={false}
      />
      <div className="buttons">
        <label htmlFor={"upload-button"}>Obrázek</label>

        <button
          id="upload-button"
          className="button"
          onClick={() => {
            setIsLoading(true);
            uploadWidget.open();
          }}
          disabled={publicId?.length > 0 || isLoading}
        >
          {isLoading ? (
            <img
              className="button-loader"
              src={"/img/loader.svg"}
              alt={"loader"}
            />
          ) : publicId?.length > 0 ? (
            "Obrázek úspěšně nahrán"
          ) : (
            "Nahrát obrázek"
          )}
        </button>
      </div>

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
              publicId,
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
              publicId,
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
  publicId: string;
};
