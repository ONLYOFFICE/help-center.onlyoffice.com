import React, { useState } from "react";
import Cookies from 'universal-cookie';
import StyledAttentionBlock from "./styled-attention-block";

const AttentionBlock = ({ t }) => {
  const [isShow, setIsShow] = useState(true);
  const [toggleContent, setToggleContent] = useState(false);

  const cookies = new Cookies();

  const hideBlock = () => {
    setIsShow(false);

    const currentDate = new Date();
    const nextYear = new Date();

    nextYear.setFullYear(currentDate.getFullYear() + 1);

    cookies.set("attention-cookie-block", true, {
      expires: nextYear
    });
  };

  return (
    isShow && !cookies.get("attention-cookie-block") ?
      <StyledAttentionBlock>
        <button className="close-cross" onClick={() => hideBlock()}></button>
        <div>
          <h4 className="attention-title">{t("Attention to the translators!")}</h4>
          <div className="attention-text">
            {t("New translation units are available at ONLYOFFICE Translation System since")} <span>05.12.2022</span>. {t("The total number of the new units is")} <span>0</span>. {t("Please visit ")}
            <a href="http://translate.onlyoffice.com/" target="_blank">http://translate.onlyoffice.com/</a> {t("to participate")}.
          </div>
        </div>
        <div className="block-editor">
          <button className="attention-toggle" onClick={() => setToggleContent(!toggleContent)}>
            {toggleContent ? t("Hide the changes") : t("View the changes")}
          </button>
          {
            toggleContent &&
            <div class="contents">
              <table class="table-versionlist">
                <tr>
                  <th class="header headerSortDown"><span>{t("Module")}</span></th>
                  <th class="header"><span>{t("Number of translation units")}</span></th>
                  <th class="header"><span>{t("Latest change date")}</span></th>
                </tr>
                <tbody></tbody>
              </table>
              <p>{t("Hover the cursor over the module line to see the changed sections and the number of units to be translated in each section.")}</p>
            </div>
          }
        </div>
        <div className="attention-input">
          <input type="checkbox" onChange={() => hideBlock()} />
          {t("Never show this message again")}
        </div>
      </StyledAttentionBlock>
    :
      <></>
  );
};

export default AttentionBlock;
