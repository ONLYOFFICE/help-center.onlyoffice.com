import styled from "styled-components";
import Box from "../../../../../../components/box";

const StyledCategory = styled(Box)`
    justify-content: space-between;
    padding-bottom: 65px;


    @media (max-width: 1200px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 71px 0;
        margin: auto;
    }

    @media (max-width: 650px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px 0;
        padding-bottom: 0;
    }

    @media (max-width: 429px){
        grid-template-columns: 1fr;
    }
  
`;

export default StyledCategory;
