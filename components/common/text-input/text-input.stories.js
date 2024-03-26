import React from "react";
import TextInput from ".";

export default {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: "Custom TextInput component",
      },
    },
  },
};

const Template = ({ ...args }) => {
  const [value, setValue] = React.useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ width: "100%", maxWidth: "500px" }}>
      <TextInput {...args} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your text",
  type: "text",
  labelButton: "default",
  isDisabled: false,
  isAutoFocussed: false,
  isSuccess: false,
  isError: false,
  withButton: false,
  squareButton: false,
  tabIndex: -1,
};