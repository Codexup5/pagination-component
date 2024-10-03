import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return <div style={{ margin: 24 }}>{children}</div>;
};
