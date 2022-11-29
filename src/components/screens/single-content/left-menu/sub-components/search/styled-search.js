import styled from "styled-components";
import Box from "@components/common/box";

const StyledSearch = styled(Box)`
    .group_input_container{
        height: auto;
        grid-column-gap: 10px;
        align-items: center;
    }
    .search_input{
        position: relative;
        border: 1px solid #c2c2c2;
        padding: 0 4px;
        height: 25px;
        font-size: 14px;
        line-height: normal;
        font-family: 'Open Sans', sans-serif, Arial;
    }

    .search_icon{
        display: flex;
    }
`;

export default StyledSearch;
