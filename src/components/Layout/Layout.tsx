import React from 'react';
import { useStoreState } from '../../hooks/typedHooks';
import { Globalstyles } from '../../styles';
import { LayoutContainer, ChildWrapper } from './styles';
import Sidebar from '../Sidebar';
import Toast from '../Toast';
import Navbar from '../Navbar';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useStoreState((state) => state.auth.isAuthenticated);
  const emptyToast = useStoreState((state) => state.toast.emptyToast);

  return (
    <LayoutContainer>
      <Globalstyles />
      <ChildWrapper>
        {isAuthenticated && <Sidebar />}
        {isAuthenticated && <Navbar />}
        {!emptyToast && <Toast />}
        {children}
      </ChildWrapper>
    </LayoutContainer>
  );
};

export default Layout;
