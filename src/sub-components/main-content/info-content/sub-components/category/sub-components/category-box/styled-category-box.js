import styled from "styled-components";
import Box from "../../../../../../../../components/box";

const StyledCategoryBox = styled(Box)`
    display: block;
    text-align: center;
    
    .icon{
        display: inline-block;
    }

    .link{
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 600;
        line-height: 1.5em;
        letter-spacing: 0.08em;
        padding-top: 15px;

        &:hover{
            text-decoration: underline;
        }
    }

    &:hover .link{
        text-decoration: underline;
    }


    @media (max-width: 1200px){
        .icon{
            display: block;
            margin: 0 auto;
        }
    }

    @media (max-width: 600px){
        .link{
            font-size:12px;
        }
    }
`;

export default StyledCategoryBox;
