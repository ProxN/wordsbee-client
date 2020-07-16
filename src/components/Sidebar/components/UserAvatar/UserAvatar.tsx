import React, { useState } from 'react';
import { useStoreState } from '../../../../hooks/typedHooks';
import Avatar from '../../../Avatar';
import { UserContainer, UserContent, UserName } from './UserAvatar.styles';
import DropDown from '../Dropdown/DropDown';

const UserAvatar: React.FC = () => {
  const [showDrop, setShowDrop] = useState<boolean>(false);

  const fullname = useStoreState((state) => state.auth.user?.fullname);

  const handleClick = (): void => {
    setShowDrop(!showDrop);
  };

  return (
    <div>
      {showDrop && <DropDown />}
      <UserContainer onClick={handleClick}>
        <UserContent>
          <Avatar name={'??'} />
          <UserName>{fullname}</UserName>
        </UserContent>
      </UserContainer>
    </div>
  );
};

export default UserAvatar;
