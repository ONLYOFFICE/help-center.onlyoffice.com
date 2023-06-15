import styled from "styled-components";

const StyledCategoryItem = styled.div`
display: flex;
flex-direction: column;
.items h3 > a > span {
    color: #333333;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    font-weight: 700;
}

.items h3 {
    display: flex;
    justify-content: space-between;

    img {
        height: fit-content;
    }
}
`;

export default StyledCategoryItem;