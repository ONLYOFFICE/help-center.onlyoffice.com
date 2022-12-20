import styled from "styled-components";
import Box from "@components/common/box";

const StyledCategoryBox = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
        display: inline-flex;
    }
    
    .icon{
        display: inline-block;
    }

    .link{
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 600;
        line-height: 1.5em;
        letter-spacing: 0.08em;
        margin-top: 10px;
        padding: 10px 0;

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
            padding-top: 33px;
        }
    }
`;

export default StyledCategoryBox;
