import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'

import SearchArea from "@components/common/search-area";

const SearchContent = ({ t, isCategoryPage, category, item }) => {
   const [inputValue, setInputValue] = useState('')

   const router = useRouter();

   const onKeyDownHandle = async (e) => {
    if (e.key === "Enter") {
      
       router.push({
         pathname: "/searchresult",
         query: { ...router.query, query: inputValue }
       });
    }
  };

  const labelValue = !isCategoryPage ? t("WelcomeToHelpCenter") : item?.attributes.title;
  const labelImg = isCategoryPage && category.card_field_img?.data?.attributes.url;
  
  return (
    <>
      <SearchArea 
        t={t} 
        onKeyDown={(e) => onKeyDownHandle(e)} 
        setInputValue={setInputValue}
        inputValue={inputValue}
        placeholder={t("HowCanWeHelp?")}
        pic={labelImg}
        label={labelValue}
      />
    </>
  );
};

export default SearchContent;
