import styled from "styled-components";
import Box from "@components/common/box";

const StyledSearch = styled(Box)`
padding: 0 0 48px;
position: relative;
    .group_input_container{
        height: auto;
        grid-column-gap: 10px;
        align-items: center;
    }
    .search_input{
        background-color: #f9f9f9;
        position: relative;        
        border: 1px solid #cccccc;
        border-radius: 24px;
        padding: 0 16px 0 48px;
        height: 48px;
        font-size: 14px;
        line-height: normal;
        font-family: 'Open Sans', sans-serif, Arial;
    }

    .search_icon{
        position: absolute;
        z-index: 2;
        left: 18px;
        top: 14px;
    }
`;

export default StyledSearch;
