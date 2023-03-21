import { useState } from 'react';
import { createStyles, Table, Group, Avatar, Text, ScrollArea, ActionIcon,Center } from '@mantine/core';
import MainLayout from '@mind/Pages/Layout';
import { User } from '@mind/data/models/User';
import {
  IconGitMerge, IconTrash, IconBriefcase, IconPlus
} from '@tabler/icons-react';
import ActivityDetailDrawer from '@mind/components/ActivityDetailDrawer';
import { NavLink } from 'react-router-dom';

interface TableSelectionProps {
  datak: { avatar: string; name: string; email: string; job: string; id: string; }[];
}

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));



//  const ReadUsers= ({ datak }: TableSelectionProps) =>{
const LogPage = () => {

  const data: User[] = [
    new User({
      id: '1',
      name: 'John',
      lastName: 'Doe',
      role: 'admin',
      email: 'johndoe@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar1.jpg'
    }),
    new User({
      id: '2',
      name: 'Jane',
      lastName: 'Doe',
      role: 'user',
      email: 'janedoe@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar2.jpg'
    }),
    new User({
      id: '3',
      name: 'Bob',
      lastName: 'Smith',
      role: 'user',
      email: 'bobsmith@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar3.jpg'
    }),
    new User({
      id: '4',
      name: 'Alice',
      lastName: 'Johnson',
      role: 'user',
      email: 'alicejohnson@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar4.jpg'
    }),
    new User({
      id: '5',
      name: 'David',
      lastName: 'Lee',
      role: 'user',
      email: 'davidlee@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar5.jpg'
    }),
    new User({
      id: '6',
      name: 'Emily',
      lastName: 'Brown',
      role: 'user',
      email: 'emilybrown@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar6.jpg'
    }),
    new User({
      id: '7',
      name: 'Michael',
      lastName: 'Davis',
      role: 'user',
      email: 'michaeldavis@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar7.jpg'
    }),
    new User({
      id: '8',
      name: 'Sarah',
      lastName: 'Wilson',
      role: 'user',
      email: 'sarahwilson@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar8.jpg'
    }),
    new User({
      id: '9',
      name: 'Chris',
      lastName: 'Thomas',
      role: 'user',
      email: 'christhomas@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar9.jpg'
    }),
    new User({
      id: '10',
      name: 'Amy',
      lastName: 'Taylor',
      role: 'user',
      email: 'amytaylor@example.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      avatar: 'https://example.com/avatar10.jpg'
    })
  ];

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState([] as string[]);
  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = data.map((user) => {
    const selected = selection.includes(user.id);
    return (
      <tr key={user.id} className={cx({ [classes.rowSelected]: selected })}>
        
        <td>
          <Group spacing="sm">
            <Avatar size={26} src={user.avatar} radius={26} style={{ zIndex: 9 }} />
            <Text size="sm" weight={500}>
              {user.name}
            </Text>
          </Group>
        </td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>{user.createdAt}</td>
        <td>{user.updatedAt}</td>
        <td>
        <NavLink to={'334'} style={{ textDecoration: 'none' }}>
        <ActionIcon>
          <IconBriefcase size={20} />
        </ActionIcon>
</NavLink>
        
        </td>
      </tr>
    );
  });


  const [createUserDrawerIsOpened, setCreateUserDrawerIsOpened] = useState(false);

  return (
    <MainLayout title='Activity' >
      <ActivityDetailDrawer isOpened={createUserDrawerIsOpened} setIsOpened={setCreateUserDrawerIsOpened} />
      <ScrollArea>
      
        <Table miw={"100%"} verticalSpacing="xs" >
          <thead>
            <tr>
              <th>Action</th>
              <th>Receiver</th>
              <th>Causer</th>
              <th>Type</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>

        <Center>


        <ActionIcon variant={'light'} style={{marginTop:10}}>
          <IconPlus/>
        </ActionIcon>
        </Center>
      </ScrollArea>



    </MainLayout>
  );
};
export default LogPage;