import { useParams } from 'react-router-dom';
import MainLayout from '@mind/Pages/Layout';
import DragList from '@mind/Pages/TeamProfile/list';
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
import { useEffect, useState } from 'react';

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

const EditTeamForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
    },

    validate: {
      name: (value) => (value.length > 0 ? null : 'Name is required'),
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
      <Textarea
        placeholder=""
        label="Team description"
        maxRows={5}
        autosize={true}
        {...form.getInputProps('description')}
      />

      <Space h={20} />



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

      <DataField title='Name' value='Frontend' />
      <div>
        <div style={{ marginBottom: '1px' }}>
          <Text fw={500} color="dimmed" fz="xs">Team description</Text>
        </div>
        <div style={{ marginLeft: '5px' }}>
          {`this is a new technical skill
gmelrgekr gergerg
ergerg`.split("\n").map(function (item) {
            return (
              <Text style={{ lineHeight: 1.15 }} color={theme.colors.gray[7]} key={`it${item}`}>
                {item}
                <br />
              </Text>
            );
          })}
        </div>
      </div></>
  );
};




// const TeamMembers = () => {


// return()

// }



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
const TeamProfile = (props: Props) => {
  const { } = props;
  const { id } = useParams();
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

  const iconSize = 14;

  const openModal = () => modals.openConfirmModal({
    title: <Text>
      Delete Team
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


  useEffect(() => {
    console.log('hola render');
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  return (
    // <>hola</>
    <MainLayout title='Team summary'>


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

          <Title order={2} color={theme.colors.gray[7]}>
            Frontend
          </Title>
          <Tooltip label="User id" withArrow>
            <Text size={12} color="dimmed" fw={600}>3i3j4j5i3-3k32k44-33mm3</Text>
          </Tooltip>
        </Flex>
        <Button leftIcon={<IconEdit />} size={"xs"} variant="light" onClick={() => setIsEditing(!isEditing)}>
          Edit team
        </Button>
      </Flex>
      <Space h={30} />
      <Group grow align={'flex-start'}>
        <Container style={{ minHeight: 200 }}>
          <Transition mounted={isEditing} transition="slide-left" duration={150} exitDuration={100} timingFunction="ease">
            {(styles) => <div style={styles}><EditTeamForm /> </div>}
          </Transition>
          <Transition mounted={!isEditing} transition="slide-left" duration={150} exitDuration={100} timingFunction="ease">
            {(styles) => <div style={styles}><UserInfo /> </div>}
          </Transition>
        </Container>
        <div>
          <Text color={'red'} fw={700}>
            Danger zone
          </Text>
          <Space h={5} />

          <Button color={'red'} leftIcon={<IconTrash />} size={"xs"} variant="white" onClick={openModal}>
            Delete team
          </Button>
        </div>

      </Group>
<Space h={10}/>
      <Group>
<Flex>
<Text>NonMembers</Text>
<Text>Members</Text>
</Flex>
      </Group>


      <DragList />


    </MainLayout>
  );
};

export default TeamProfile;
