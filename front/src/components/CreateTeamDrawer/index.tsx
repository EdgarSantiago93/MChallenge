import { useState } from 'react';
import {
  IconX,
} from '@tabler/icons-react';
import CreateTeamForm from '@mind/components/CreateTeamForm';
import { Title, ActionIcon, Drawer } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CreateTeamFormValues } from '@mind/data/Types/CreateTeamFormValues';
import ConfirmClose from '@mind/components/ConfirmClose';
interface Props {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}
const CreateTeamDrawer = (props: Props) => {
  const { isOpened, setIsOpened } = props;
  const [confirmDrawerClose, setConfirmDrawerClose] = useState(false);

  const confirmCloseFn = () => {
    if (!form.isDirty()) {
      return setIsOpened(false);
    }
    if (!confirmDrawerClose) {
      return setConfirmDrawerClose(true);
    }
    setIsOpened(false);
    setConfirmDrawerClose(false);
    form.reset();
  };

  const form = useForm<CreateTeamFormValues>(
    {
      initialValues: { name: '', description: '' }, validate: {
        name: (value) => (value.length > 0 ? null : 'Team name is required'),
      },
    });

  return (

    <Drawer opened={isOpened} onClose={() => { }} withCloseButton={false} position='right' transitionProps={{ duration: 150, timingFunction: 'ease' }} closeOnClickOutside={false} >
      <Title order={3}>Create team</Title>
      <div style={{ position: 'absolute', right: 7, top: 7 }}>
        <ActionIcon>
          <IconX onClick={() => confirmCloseFn()} />
        </ActionIcon>
      </div>

      {confirmDrawerClose ? (<ConfirmClose
        topText='Are you sure you want to close this form?'
        bottomText='All data will be lost'
        confirmFn={() => confirmCloseFn()}
        cancelFn={() => setConfirmDrawerClose(false)}
      />) : (<CreateTeamForm form={form} />)}
    </Drawer>

  );
};
export default CreateTeamDrawer;
