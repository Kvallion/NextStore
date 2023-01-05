import React from "react";

interface NoopProps {
    children?: React.ReactNode;
}

const Noop: React.FC<NoopProps> = ({ children }) => {
    return <>{children}</>;
};

export default Noop;
