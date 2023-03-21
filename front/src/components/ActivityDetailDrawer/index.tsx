import { useState } from 'react';
import {
  IconX, IconTrash, IconBriefcase, IconPlus
} from '@tabler/icons-react';
import CreateUserForm from '@mind/components/CreateUserForm';
import { createStyles, Table, Checkbox, Group, Avatar, Text, rem, Title, ScrollArea, Transition, Menu, Button, Space, ActionIcon, Drawer } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import { CreateUserFormValues } from '@mind/data/Types/CreateUserFormValues';
import { Roles } from '@mind/data/Types/UserRoles';
interface Props {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}


const ActivityDetailDrawer = (props: Props) => {
  const { isOpened, setIsOpened } = props;
  const [confirmUserClose, setConfirmUserClose] = useState(false);

  return (
    <Drawer opened={isOpened} onClose={() => setIsOpened(false)} withCloseButton={false} position='bottom' transitionProps={{ duration: 150, timingFunction: 'ease' }} closeOnClickOutside={true} >
      <Title order={3}>Activity detail</Title>
      <div style={{ position: 'absolute', right: 7, top: 7 }}>
        <ActionIcon>
          <IconX onClick={() =>  setIsOpened(false)} />
        </ActionIcon>
      </div>
    
    </Drawer>

  );
};
export default ActivityDetailDrawer;
