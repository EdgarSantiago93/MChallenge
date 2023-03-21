import { useState } from 'react';
import { createStyles, Table, Checkbox, Group, Avatar, Text, rem, Title, ScrollArea, Transition, Menu, Button, Space, ActionIcon, Drawer } from '@mantine/core';
import MainLayout from '@mind/Pages/Layout';
import { User } from '@mind/data/models/User';
import {
  IconGitMerge, IconTrash, IconBriefcase, IconPlus
} from '@tabler/icons-react';
import CreateTeamDrawer from '@mind/components/CreateTeamDrawer';

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
const ReadAccounts = () => {

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
          <Checkbox
            checked={selection.includes(user.id)}
            onChange={() => toggleRow(user.id)}
            transitionDuration={50}
            size="xs"
          />
        </td>
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
        <td><ActionIcon>
          <IconBriefcase size={20} />
        </ActionIcon></td>
      </tr>
    );
  });


  const [createUserDrawerIsOpened, setCreateUserDrawerIsOpened] = useState(false);

  return (
    <MainLayout title='Accounts' >
      <CreateTeamDrawer isOpened={createUserDrawerIsOpened} setIsOpened={setCreateUserDrawerIsOpened} />
      <ScrollArea>
        <div style={{ display: "flex", justifyContent: "space-between", height: 35, marginTop: 15 }}>
          <div>
            <Transition mounted={selection.length > 0} transition="scale" duration={120} timingFunction="ease">
              {(styles) => <div style={styles}>
                <div style={{ display: 'flex', zIndex: 99999, justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                  <Text weight={500} size={14}>{selection.length} selected</Text>
                  <Menu shadow="md" width={200} position="right-start" >
                    <Menu.Target>
                      <Button size={"xs"} style={{ marginLeft: 10 }} variant="light">Actions</Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>Users</Menu.Label>
                      <Menu.Item icon={<IconGitMerge size={20} />}>Change role</Menu.Item>
                      <Menu.Divider />
                      <Menu.Label>Danger zone</Menu.Label>
                      <Menu.Item color="red" icon={<IconTrash size={20} />}>Delete</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </div>

              </div>}
            </Transition>
          </div>




          <Button variant="subtle" size={"xs"} onClick={() => setCreateUserDrawerIsOpened(true)}>
            <IconPlus size={18} stroke={1.8} />
            <Text style={{ marginLeft: 3 }}>Create Team</Text>
          </Button>



        </div>


        <Table miw={"100%"} verticalSpacing="sm">
          <thead>
            <tr>
              <th style={{ width: rem(40) }}>
                <Checkbox
                  onChange={toggleAll}
                  size="xs"
                  checked={selection.length === data.length}
                  indeterminate={selection.length > 0 && selection.length !== data.length}
                  transitionDuration={0}
                />
              </th>
              <th>Name</th>
              <th>Client</th>
              <th>In charge</th>
              <th>Teams</th>
              <th>Created at</th>
              <th>Last updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>



    </MainLayout>
  );
};
export default ReadAccounts;