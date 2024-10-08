import { Collapse as MantineCollapse } from "@mantine/core";
import { BoxProps } from "props/box";
import { DashBaseProps } from "props/dash";
import React from "react";

interface Props extends BoxProps, DashBaseProps {
    /** Opened state */
    opened?: boolean;
    /** Transition duration in ms, `200` by default */
    transitionDuration?: number;
    /** Transition timing function, default value is `ease` */
    transitionTimingFunction?: string;
    /** Determines whether opacity should be animated, `true` by default */
    animateOpacity?: boolean;
    /** Content */
    children?: React.ReactNode;
}

/** Collapse */
const Collapse = (props: Props) => {
    const { setProps, opened, ...others } = props;
    return <MantineCollapse in={opened} {...others} />;
};

Collapse.defaultProps = {opened: false};

export default Collapse;
