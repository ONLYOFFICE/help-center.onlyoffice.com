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

> h4 > a {
    display: flex;
    > span {
        color: #333333;
        font-size: 18px;
        line-height: 1.33em;
        letter-spacing: -0.02em;
        font-weight: 700;
        text-decoration: none;
    }
}

> h4 {
    display: flex;
    justify-content: space-between;

    img {
        height: fit-content;
    }
}

 > span {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    color: #666;
    padding: 16px 0;
 }

 .main_links {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 0;
    > a { 
        display: flex;
        > span {
            line-height: 14px;
            text-decoration: none;
        }
    }
 }

 ul {
    list-style-type: none;
    padding: 16px 0 0;

    li {
        padding: 0 0 10px;
        a {
            text-decoration: none;
        }
    }
 }

`;

export default StyledCategoryItem;