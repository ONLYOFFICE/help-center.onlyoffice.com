import GuidesCell from "../guides-cards/sub-components/guides-cell";
import StyledGuidesCards from "./styled-guides-cards";
import InternalLink from "@components/common/internal-link";
import Box from "@components/common/box";

const GuidesCards = ({ t, data, className, isCategoryPage, categorySlug, isIntegrationCategory }) => {
  const categorySlugs = ["changelog", "roadmap", "troubleshooting"];
  const topData = data.data?.filter(item => categorySlugs.includes(item.attributes.slug_id)) || [];
  const mappedCategories = data.data?.filter(item => !categorySlugs.includes(item.attributes.slug_id)) || [];

  return (
    <StyledGuidesCards className={className}>
      {topData.length != 0 && 
        <Box className="top-blck">
          {topData?.map((item, index) => (
            <div className="top-links" key={index}>
              <img src={item.attributes.card_field_img?.data.url} alt={item.attributes.name} />
              <InternalLink href={item.attributes.url} label={item.attributes.name} />
            </div>
          ))}
        </Box>
      }
      <Box className="squares">
        {mappedCategories?.sort((a, b) => a.attributes.position - b.attributes.position).map((item, index) => (
          <GuidesCell t={t} key={index} data={item} isCategoryPage={isCategoryPage} categorySlug={categorySlug} isIntegrationCategory={isIntegrationCategory} />
        ))}
      </Box>
    </StyledGuidesCards>
  );
};

export default GuidesCards;
