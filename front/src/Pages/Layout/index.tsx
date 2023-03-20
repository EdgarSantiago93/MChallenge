import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem, Title, } from '@mantine/core';
import {
  IconHome2,
  IconLogout,
  IconUsers,
  IconList,
  IconPackage,
  IconCircles
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(45),
    height: rem(45),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:  theme.colors.gray[7],

    '&:hover': {
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      backgroundColor: theme.colors.gray[2]
    },
  },

  active: {
    '&, &:hover': {
      // backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      backgroundColor: theme.colors.gray[2],
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink ({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} withArrow>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="23" stroke={1.7} />
      </UnstyledButton>
    </Tooltip>
  );
}


const navMenu = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconPackage, label: 'Accounts' },
  { icon: IconCircles, label: 'Teams' },
  { icon: IconUsers, label: 'Users' },
  { icon: IconList, label: 'Log' },
  // { icon: IconSettings, label: 'Settings' },
];



const MainLayout = ({ children, title }: { children: any, title?: string; }) => {
  const [active, setActive] = useState(1);
  const links = navMenu.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <div style={{ display: "flex" }}>


      <Navbar width={{ base: 80 }} p="md" style={{zIndex:99}}>
        <Center>
          {/* <img src="https://placedog.net/30" alt="" /> */}
        </Center>
        <Navbar.Section grow mt={60}>
          <Stack justify="center" spacing={3}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            {/* <NavbarLink icon={IconSwitchHorizontal} label="Change account" /> */}
            <NavbarLink icon={IconLogout} label="Logout" />
          </Stack>
        </Navbar.Section>
      </Navbar>

      <div style={{ width: "100%",padding:'20px 15px 15px 15px' }}>

        <Title order={1}>
          {title}
        </Title>


        {children}
      </div>
    </div>


  );
};
export default MainLayout;