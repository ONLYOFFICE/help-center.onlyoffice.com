import StyledLeftMenu from "./styled-left-menu";
import InternalLink from "@components/common/internal-link";
import items from "./data/items";
import MiniSearch from "./sub-components/search";
import Heading from "@components/common/heading";
import TreeView from "@components/common/treeview";

const LeftMenu = ({ t, category, categorySlug }) => {
  return (
    <StyledLeftMenu>
      <div className="lm-wrap">
        <MiniSearch />
        <Heading level={6} label={category.data?.[0].attributes.name} />
        <div>
          {category.data?.[0].attributes[`level_2_${categorySlug === "docs" ? "docs" : `${categorySlug}s`}`].data.map((article, index) => (
            <TreeView key={index} children={article} t={t} />
          ))}
        </div>

        <ul className="stat">
          {items.map((link, index) => (
            <li key={index}>
              <InternalLink href={link.href} className={link.className}>
                {t(link.label)}
              </InternalLink>
            </li>
          ))}
        </ul>
      </div>
    </StyledLeftMenu>
  )
}

export default LeftMenu;