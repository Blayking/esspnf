import React from 'react';

import { StyledLayout } from './layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return <StyledLayout>{children}</StyledLayout>;
}

export { Layout };
