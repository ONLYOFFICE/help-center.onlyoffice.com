import React from "react";
import Box from ".";

export default {
  title: "Components/Box",
  component: Box,
  parameters: {
    docs: {
      description: {
        component: "Box. You can create box to wrap something",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box {...args}>
        <div
          style={{ border: "1px solid #CCCCCC", width: "50px", height: "50px" }}
        >
          Box 1
        </div>
        <div
          style={{ border: "1px solid #CCCCCC", width: "50px", height: "50px" }}
        >
          Box 2
        </div>
        <div
          style={{ border: "1px solid #CCCCCC", width: "50px", height: "50px" }}
        >
          Box 3
        </div>
      </Box>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  background: "unset",
  border: "none",
  justifyContent: "start",
  alignItems: "center",
  flexWrap: "nowrap",
  flexDirection: "row",
  tabIndex: -1,
};
