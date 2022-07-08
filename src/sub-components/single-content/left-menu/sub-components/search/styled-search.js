import styled from "styled-components";
import Box from "../../../../../../components/box";

const StyledSearch = styled(Box)`
    .group_input_container{
        height: auto;
        grid-column-gap: 10px;
        align-items: center;
    }
    .search_input{
        height: auto;
        position: relative;
        padding: 0 0 0 4px;
    }
    .search_icon{
        transform: scale(-1, 1);
    }
`;

export default StyledSearch;
