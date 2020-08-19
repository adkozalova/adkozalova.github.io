import React from 'react';
import HeroPage from "../Block/HeroPage";
import PageContactContent from "./PageContactContent";
import {useTranslation} from "react-i18next";

export default function PageContacts() {
  const [t] = useTranslation();
  return (
      <>
        <HeroPage
            title={t("Contacts")}
            description1={t("A symbol always reflects the essence")}
            description2=""
            img="/images/page-hero-bg.jpg"
        />
        <PageContactContent/>
      </>
  )
}