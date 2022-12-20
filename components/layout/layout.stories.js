import React from "react";
import Layout from "./";

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "Custom Layout.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Layout {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
