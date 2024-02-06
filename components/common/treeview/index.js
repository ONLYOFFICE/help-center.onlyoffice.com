
import React, { useState, useRef } from "react";
import StyledTreeView from "./styled-treeview";
import Link from "@components/common/internal-link";
import Heading from "@components/common/heading";

const TreeView = ({
    children,
    ...rest

}) => {
    const content = useRef();
    const [active, setActive] = useState(true);
    const items = children?.level_3 || children?.level_4;

    return (
        <StyledTreeView {...rest}>
            <Heading
                level={6}
                style={{ cursor: "pointer" }}
                className="tree__heading"
                onClick={() => setActive(!active)}
            >
                <img src="https://static-helpcenter.onlyoffice.com/images/icons/arrow-right.react.svg" style={!active ? { transform: "rotate(0)" } : { transform: "rotate(90deg)" }} />
                {children.name}
            </Heading>
            <div className="tree__items"
                ref={content}
                style={{
                    maxHeight: `${active ? `${content?.current?.scrollHeight}px` : "0px"}`,
                }}
            >
                {items.map((it, index) => (
                    <Link
                        className="treeview__link"
                        key={index}
                        href={it.url}> {it.name} </Link>
                ))}
            </div>
        </StyledTreeView>
    );
};


export default TreeView;
