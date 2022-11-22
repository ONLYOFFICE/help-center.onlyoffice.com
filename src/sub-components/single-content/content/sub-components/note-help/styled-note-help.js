import styled from "styled-components";

const StyledNoteHelp = styled.div`
background: #f6f6f6;
border-radius: 2px;
color: #808080;
display: block;
margin: 15px 0;
min-height: 13px;
padding: 10px 30px 10px 50px;
position: relative;
text-align: justify;
border-left: 5px solid gray;
border-right: 5px solid gray;

&.nh_notice {
    border-color: #fc4;
    &:before {
        border-bottom: #fc4 3px solid;
        padding: 0 4px 1px 0;
    }
}
&.nh_important {
    border-color: #ff642e;
    padding-left: 30px;
    &:before, &:after {
        display: none;
    }
}

&:before {
    color: #808080;
    content: 'N';
    font-size: 15px;
    font-weight: 700;
    left: 15px;
    position: absolute;
    top: 10px;
}

&:after {
    color: #808080;
    content: 'B:';
    font-size: 15px;
    font-weight: 700;
    left: 22px;
    position: absolute;
    top: 10px;
}

.note-text {
    color: #808080;
    font-size: 13px;
    line-height: 1.3em;
}

@media (max-width: 1190px) {
    margin-right: 5%;
  }
`;

export default StyledNoteHelp;
