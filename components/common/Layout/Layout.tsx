import React from "react";
import classes from "./Layout.module.scss";

interface ILayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return <div className={classes.layout}>{children}</div>;
};

export default Layout;
