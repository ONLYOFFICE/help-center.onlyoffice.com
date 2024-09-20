import StyledTag from "./styled-tag";

const Tag = ({ name, ...rest }) => {
  return (
    <StyledTag {...rest}>
      {name}
    </StyledTag>
  );
};

export default Tag;