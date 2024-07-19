import styled from "styled-components";

const StyledTreeView = styled.div`
  .tree-heading {
    display: flex;
    gap: 8px;
    text-transform: none;
    cursor: pointer;

    &:hover {
      color: #ff6f3d;
    }
  }

  .tree-items {
    overflow: hidden;
    padding: 0 0 0 19px;
  }

  .treeview-link {
    padding: 0 0 12px;
  }
`

export default StyledTreeView;