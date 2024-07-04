import StyledGuidesCell from "./styled-guides-cell";
import Box from "@components/common/box";
import InternalLink from "@components/common/internal-link";
import Text from "@components/common/text";
import GuidesLinks from "../guides-links";
import ReactHtmlParser from "react-html-parser";
import Heading from "@components/common/heading";

const GuidesCell = ({ t, data, isCategoryPage, categorySlug, isIntegrationCategory }) => {
  return (
    <StyledGuidesCell>
      <Box className="cell_header">
        <Box className={`cell_icon ${isIntegrationCategory ? "integration" : ""}`}>
          {!isIntegrationCategory &&
            <img src={data.attributes.card_field_img?.data?.url} alt={data.attributes.name} />
          }

          {data.attributes.url === null ? (
            <Heading className="presearch_title_link heading" label={isIntegrationCategory ? data.attributes.title : data.attributes.name} />
          ) : (
            <InternalLink className="presearch_title_link" label={isIntegrationCategory ? data.attributes.title : data.attributes.name} href={data.attributes.url} />
          )}
          {isIntegrationCategory &&
            <img src={data.attributes.connector_img.data?.attributes.url} alt={data.attributes.title} />
          }
        </Box>
        {data.attributes.description &&
          <Box className="cell_header_links">
            <Text>{ReactHtmlParser(data.attributes.description)}</Text>
          </Box>
        }
      </Box>
      {!isIntegrationCategory &&
        <GuidesLinks t={t} data={data} isCategoryPage={isCategoryPage} categorySlug={categorySlug} />
      }
    </StyledGuidesCell>
  );
};

export default GuidesCell;
