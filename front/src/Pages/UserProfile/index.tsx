import { useParams } from 'react-router-dom';
import MainLayout from '@mind/Pages/Layout';
import { Timeline, Text, Group, Avatar, Title, Flex, Tooltip, Space, Divider, Button, useMantineTheme, ScrollArea } from '@mantine/core';
import { IconCircles, IconPlus, IconTriangleSquareCircle, IconEdit, IconTrash, IconCheck } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import { useStyles } from '@mind/Pages/UserProfile/styles';

interface Props {

}


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

  return (
    <MainLayout title='User Profile'>
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
      <Space h={30} />

      <Group grow>
        <div>
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
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ marginBottom: '5px' }}>
            <Text fw={550} color="dimmed" fz="xs">Activity</Text>
          </div>

          <div className={classes.activityBottom}>

          </div>

          <ScrollArea h={300}>
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

        </div>
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
