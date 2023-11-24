import styled from "styled-components";

const StyledQuestionArea = styled.div`
  border: 1px solid #EFEFEF;
  border-radius: 3px;
  display: grid;
  align-items: center;
  grid-template-columns: 49.084% 48.52%;
  gap: 19px;
  padding: 23px 40px 33px 79px;
  background-color: #F5F5F5;

  .question-wrapper {
    display: flex;
    flex-direction: column;
  }

  .question-title {
    margin-bottom: 8px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }

  .question-text {
    font-size: 16px;
    line-height: 26px;
  }

  .question-link {
    display: block;
    font-size: 16px;
    line-height: 26px;
  }

  .question-img {
    width: 100%;
    max-width: 344px;
    padding-bottom: 74.21%;
    background-image: url('https://static-helpcenter.teamlab.info/images/icons/question-forum.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default StyledQuestionArea;
