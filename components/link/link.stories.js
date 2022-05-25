import React from "react";
import Link from ".";

export default {
  title: "Components/Link",
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          "Custom  Link. You can pass the nested elements as children, or if the nested element is just text, then using the prop label",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Link {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Link",
  fontSize: "20px",
  fontWeight: 300,
  textTransform: "none",
  href: "/",
  title: "title-Link",
  tabIndex: -1,
  target: "_blank",
  textDecoration: "none",
  hoverTextDecoration: "underline",
  id: "id-Link",
  className: "class-Link",
};
