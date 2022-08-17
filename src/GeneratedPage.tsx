import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Generated from "./components/Generated";
import { SignatureType } from "./components/Form";

const GeneratedPage = () => {
  const [query] = useSearchParams();
  const navigate = useNavigate();

  const name = query.get("name");
  const occupation = query.get("occupation");
  const phone = query.get("phone");
  const email = query.get("email");
  const bannerImg = query.get("banner-img");
  const bannerURL = query.get("banner-url");
  const type = query.get("type");
  const publicId = query.get("public-id");

  useEffect(() => {
    if (!name || !occupation || !phone || !email || !type || !publicId) {
      navigate("/");
    }
  }, [navigate, email, name, phone, occupation, type, publicId]);

  return (
    <Generated
      name={name as string}
      email={email as string}
      occupation={occupation as string}
      phone={phone as string}
      bannerImg={bannerImg as string}
      bannerURL={bannerURL as string}
      signatureType={Number(type) as SignatureType}
      publicId={publicId as string}
    />
  );
};

export default GeneratedPage;
