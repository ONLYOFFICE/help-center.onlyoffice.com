import styled, { css } from "styled-components";

const StyledTreeView = styled.div`
h6.tree__heading {
    display: flex;
    gap: 8px;
    text-transform: none;
        &:hover {
            text-decoration: underline;
        }
}

.tree__items {
    overflow: hidden;
    padding: 0 0 0 19px;
}
.treeview__link {
    padding: 0 0 12px;
}


`

export default StyledTreeView;