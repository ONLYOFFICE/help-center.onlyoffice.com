import styled from "styled-components";

const StyledCategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px 0 0;
    padding: 32px;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 7px 25px rgb(85 85 85 / 15%);
    border-radius: 3px;
    color: #333333;
    &:hover {
        color: #333333;
        text-decoration: none;
    }

> h4 > a > span {
    color: #333333;
    font-size: 18px;
    line-height: 1.33em;
    letter-spacing: -0.02em;
    font-weight: 700;
    text-decoration: none;
}

> h4 {
    display: flex;
    justify-content: space-between;

    img {
        height: fit-content;
    }
}
`;

export default StyledCategoryItem;