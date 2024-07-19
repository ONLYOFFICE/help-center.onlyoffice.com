import { StyledItem, StyledPanelView } from "./styled-menu-selector";
import Link from "next/link"

export default function LangsList(props) {
  const { isOpen, categories, pageCategory } = props;

  const renderPanelView = () => {
    return (
      <StyledPanelView isOpen={isOpen}>
        {categories?.map((it, index) => {
          return (
            <StyledItem key={index}>
              <Link href={it.attributes.url} className={`menu-item-link ${it.attributes.slug_id === pageCategory && "orange"}`}>{it.attributes.name}</Link>
            </StyledItem>
          );
        })}
      </StyledPanelView>
    );
  };

  const panelView = renderPanelView();

  return panelView;
}
