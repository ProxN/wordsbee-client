import React, { useCallback } from 'react';
import { useStoreActions } from '../../../../hooks/typedHooks';
// import MenLink from '../Menu/MenuLink';
import { DropDownList, DropDownItems, DropDownItem } from './DropDown.styles';
import Icon from '../../../Icon';

const DropDown: React.FC = () => {
  const logout = useStoreActions((state) => state.auth.logout);

  const handleClick = useCallback(async (): Promise<void> => {
    await logout();
  }, [logout]);
  return (
    <DropDownList>
      <DropDownItems>
        {/* <MenLink href='account'>
          <Icon name='settings' />
          Account
        </MenLink> */}
        <DropDownItem onClick={handleClick}>
          <Icon name='logout' />
          log out
        </DropDownItem>
      </DropDownItems>
    </DropDownList>
  );
};

export default DropDown;
