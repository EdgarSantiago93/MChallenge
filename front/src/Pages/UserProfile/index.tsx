import { useParams } from 'react-router-dom';
import MainLayout from '@mind/Pages/Layout';
import { Timeline, Text, Group, Avatar, Title, Flex, Tooltip, Space, Divider, Button, useMantineTheme, ScrollArea, Container, Transition } from '@mantine/core';
import { IconCircles, IconPlus, IconTriangleSquareCircle, IconEdit, IconTrash, IconCheck } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import { useStyles } from '@mind/Pages/UserProfile/styles';
// import {
//   IconHome2,
//   IconLogout,
//   IconUsers,
//   IconList,
//   IconCircles,
//   IconTriangleSquareCircle
// } from '@tabler/icons-react';
interface Props {

}


import { TextInput, Checkbox, Box, Select, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

interface DataFieldProps {
  title: string;
  value: string;
}

const DataField = (props: DataFieldProps) => {
  const theme = useMantineTheme();
  return (<div>
    <div style={{ marginBottom: '-5px' }}>
      <Text fw={550} color="dimmed" fz="xs">{props.title}</Text>
    </div>
    <div style={{ marginLeft: '5px' }}>
      <Text fw={500} color={theme.colors.gray[7]}>{props.value}</Text>
    </div>
  </div>

  );
};
import { notifications } from '@mantine/notifications';

const EditUserForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      role: '',
      englishLevel: '',
      cv_link: '',
      technicalSkills: '',
      team: '',
      account: ''
    },

    validate: {
      name: (value) => (value.length > 0 ? null : 'Name is required'),
      lastName: (value) => (value.length > 0 ? null : 'Last name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      role: (value) => (value.length > 0 ? null : 'Role is required'),
      cv_link: (value) => (value.length > 0 ? null : 'CV link is required'),
    },
  });

  const [isLoading, setisLoading] = useState(false);
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder=""
        {...form.getInputProps('name')}
      />
      <Space h={10} />
      <TextInput
        withAsterisk
        label="Last name"
        placeholder=""
        {...form.getInputProps('lastName')}
      />
      <Space h={10} />
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
      />

      <Space h={10} />
      <Select
        withAsterisk
        label="Assign role"
        placeholder="Role"
        data={[
          { value: 'admin', label: 'Admin' },
          { value: 'user', label: 'User' },

        ]}
        disabled={isLoading}
        {...form.getInputProps('role')}
      />

      <Space h={10} />

      <Select
        label="English level"
        placeholder="Level"
        maxDropdownHeight={150}
        withAsterisk
        data={[
          { value: 'A1', label: 'A1 Beginner' },
          { value: 'A2', label: 'A2 Elementary' },
          { value: 'B1', label: 'B1 Intermediate' },
          { value: 'B2', label: 'B2 Upper intermediate' },
          { value: 'C1', label: 'C1 Advanced' },
          { value: 'C2', label: 'C2 Proficiency' },
        ]}
        dropdownPosition="bottom"
        disabled={isLoading}
        {...form.getInputProps('english_level')}
      />
      <Space h={10} />
      <TextInput
        withAsterisk
        label="CV link"
        placeholder="Google drive link"
        {...form.getInputProps('cv_link')}
      />
      <Space h={10} />
      <Textarea
        placeholder=""
        label="Technical skills"
        maxRows={5}
        autosize={true}
        {...form.getInputProps('technical_skills')}
      />
      <Space h={20} />

      <Divider />
      <Space h={15} />
      <Select
        label="Assign to team"
        placeholder="Team"
        maxDropdownHeight={150}
        data={[
          { value: '001', label: 'Frontend' },
          { value: '002', label: 'Backend' },
        ]}
        disabled={isLoading}

        {...form.getInputProps('team')}
      />
      <Space h={10} />
      <Select
        label="Assign to account"
        placeholder="Account"
        maxDropdownHeight={150}
        data={[
          { value: '001', label: 'account 1' },
          { value: '002', label: 'account 2' },
        ]}
        dropdownPosition="bottom"
        disabled={isLoading}
        {...form.getInputProps('account')}
      />


      <Group position="right" mt="md">
        <Button type="submit">Save</Button>
      </Group>
    </form>
  );
};



const UserInfo = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Flex gap={10}>
        <div>
          <Flex justify={'flex-start'} align="center">
          <IconTriangleSquareCircle  size={17} color={theme.colors.gray[6]}/>
          <Text fw={600} color="dimmed" size={17}>Account</Text>
          <Space w={10}/>
          <Text fw={500} color={theme.colors.gray[7]}>Spotify</Text>
          </Flex>
          <Flex justify={'flex-start'} align="center">
          <IconCircles  size={17} color={theme.colors.gray[6]}/>
          <Text fw={600} color="dimmed" size={17}>Team</Text>
          <Space w={10}/>
          <Text fw={500} color={theme.colors.gray[7]}>Frontend</Text>
          </Flex>          
        </div>

        
      </Flex>
      <Space h={10}/>
      <Divider />
      <Space h={10}/>
      <DataField title='Name' value='Edgar' />
      <DataField title='Last name' value='Santiago Guerrero' />
      <DataField title='Email' value='esg.928@gial.com' />
      <DataField title='Role' value='Admin' />
      <DataField title='English level' value='C2' />
      <DataField title='CV link' value='Admin' />

      <div>
        <div style={{ marginBottom: '1px' }}>
          <Text fw={500} color="dimmed" fz="xs">Technical skills</Text>
        </div>
        <div style={{ marginLeft: '5px' }}>
          {`this is a new technical skill
gmelrgekr gergerg
ergerg`.split("\n").map(function (item) {
            return (
              <Text style={{ lineHeight: 1.15 }} color={theme.colors.gray[7]}>
                {item}
                <br />
              </Text>
            );
          })}
        </div>
      </div></>
  );
};




const ActivityLog = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

  const iconSize = 14;
  return (<div style={{ position: 'relative' }}>
    <div style={{ marginBottom: '5px' }}>
      <Text fw={550} color="dimmed" fz="xs">Activity</Text>
    </div>

    <ScrollArea h={350}>
      <Timeline active={0} bulletSize={24} lineWidth={2} >
        <Timeline.Item bullet={<IconPlus size={iconSize} />} title="Created User" style={{ color: theme.colors.gray[7] }}>
          <Text color="dimmed" size="sm">User was created by Lalo landa</Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Team change" bullet={<IconCircles size={iconSize} />} >
          <Text color="dimmed" size="sm"> User was (re)assigned to team "equipo" by Edgar </Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Account change" bullet={<IconTriangleSquareCircle size={iconSize} />} >
          <Text color="dimmed" size="sm"> User was (re)assigned to account "mind" by Edgar </Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Info edit" bullet={<IconEdit size={iconSize} />}>
          <Text color="dimmed" size="sm"> Name was editted by Edgar</Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Info edit" bullet={<IconEdit size={iconSize} />}>
          <Text color="dimmed" size="sm"> Name was editted by Edgar</Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Info edit" bullet={<IconEdit size={iconSize} />}>
          <Text color="dimmed" size="sm"> Name was editted by Edgar</Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Info edit" bullet={<IconEdit size={iconSize} />}>
          <Text color="dimmed" size="sm"> Name was editted by Edgar</Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

        <Timeline.Item title="Info edit" bullet={<IconEdit size={iconSize} />}>
          <Text color="dimmed" size="sm"> Name was editted by Edgar</Text>
          <Text size="xs" mt={4} color={theme.colors.gray[7]}>2 hours ago</Text>
        </Timeline.Item>

      </Timeline>

      <Space h={50} />
    </ScrollArea>
    <div className={classes.activityBottom}>
    </div>
  </div>);
};
const UserProfile = (props: Props) => {
  const { } = props;
  const { id } = useParams();
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

  const iconSize = 14;

  const openModal = () => modals.openConfirmModal({
    title: <Text>
      Delete user
    </Text>,
    centered: true,
    children: (
      <Text size="sm">
        Are you sure you want to delete your profile? This action is destructive and you will have
        to contact support to restore your data.
      </Text>
    ),
    labels: { confirm: 'Delete account', cancel: "No don't delete it" },
    confirmProps: { color: 'red' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () =>
      notifications.show({
        id: 'hello-there',
        withCloseButton: true,
        autoClose: 2000,
        title: "Sucess",
        message: 'User was deleted',
        color: 'gray',
        icon: <IconCheck />,
        loading: false,
      })
  });


  const [isEditing, setIsEditing] = useState(false);

  return (
    <MainLayout title='User Profile'>
      <Flex
        gap="xs"
        justify="space-between"
        align="flex-end"
        direction="row"
        wrap="wrap"
        mt={15}
      >

        <Flex
          gap="xs"
          justify="flex-start"
          align="flex-end"
          direction="row"
          wrap="wrap"
          mt={15}
        >
          <Avatar size={90} radius={100} src="https://placedog.net/500">
            ES
          </Avatar>
          <Title order={2} color={theme.colors.gray[7]}>
            Edgar Santiago
          </Title>

          <Tooltip label="User id" withArrow>
            <Text size={12} color="dimmed" fw={600}>3i3j4j5i3-3k32k44-33mm3</Text>
          </Tooltip>

        </Flex>
        <Button leftIcon={<IconEdit />} size={"xs"} variant="light" onClick={() => setIsEditing(!isEditing)}>
          Edit</Button>

      </Flex>
      <Space h={30} />


      <Group grow align={'flex-start'}>
        <Container>

          <Transition mounted={isEditing} transition="slide-left" duration={150} timingFunction="ease">
            {(styles) => <div style={styles}><EditUserForm /> </div>}
          </Transition>

          <Transition mounted={!isEditing} transition="slide-left" duration={150} timingFunction="ease">
            {(styles) => <div style={styles}><UserInfo /> </div>}
          </Transition>


        </Container>

        <Container>

          <ActivityLog />
        </Container>

      </Group>

      <Space h={20} />
      <Divider />
      <Space h={10} />
      <div>

        <Text color={'red'} fw={700}>
          Danger zone
        </Text>
        <Space h={5} />

        <Button color={'red'} leftIcon={<IconTrash />} size={"xs"} variant="white" onClick={openModal}>
          Delete user
        </Button>
      </div>

    </MainLayout>
  );
};

export default UserProfile;
