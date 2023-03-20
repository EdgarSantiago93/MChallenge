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


const CreateUserDrawer = (props: Props) => {
  const { isOpened, setIsOpened } = props;
  const [confirmUserClose, setConfirmUserClose] = useState(false);

  const confirmCloseFn = () => {
    if (!form.isDirty()) {
      return setIsOpened(false);
    }
    if (!confirmUserClose) {
      return setConfirmUserClose(true);
    }
    setIsOpened(false);
    setConfirmUserClose(false);
    form.reset();
  };

  const form = useForm<CreateUserFormValues>(
    {
      initialValues: { name: '', lastName: '', email: '', role: Roles.USER, team: '', account: '' }, validate: {
        name: (value) => (value.length > 0 ? null : 'Name is required'),
        lastName: (value) => (value.length > 0 ? null : 'Last name is required'),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        role: (value) => {
          if (!value) {
            return 'Role is required';
          }
          if (Object.values(Roles).includes(value)) {
            return null;
          }
          return 'Invalid role';
        },
      },
    });

  return (

    <Drawer opened={isOpened} onClose={() => { }} withCloseButton={false} position='right' transitionProps={{ duration: 150, timingFunction: 'ease' }} closeOnClickOutside={false} >
      <Title order={3}>Create user</Title>
      <div style={{ position: 'absolute', right: 7, top: 7 }}>
        <ActionIcon>
          <IconX onClick={() => confirmCloseFn()} />
        </ActionIcon>
      </div>

      {confirmUserClose ? (<>
        you sure?
        <Button onClick={() => setConfirmUserClose(false)}>No</Button>
        <Button onClick={() => confirmCloseFn()}>Yes</Button>
      </>) : (<CreateUserForm form={form} />)}
    </Drawer>

  );
};
export default CreateUserDrawer;
