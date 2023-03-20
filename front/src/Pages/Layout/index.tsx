import { useState, useEffect } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, Stack, Title, } from '@mantine/core';
import {
  IconHome2,
  IconLogout,
  IconUsers,
  IconList,
  IconCircles,
  IconTriangleSquareCircle
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { CLIENT_ROUTES } from '@mind/utils/client_routes';
import { useLocation, matchRoutes } from 'react-router-dom';
import router from '@mind/utils/browser_router';
import { useStyles } from '@mind/Pages/Layout/styles';
import {NavbarLinkProps} from '@mind/data/Types/NavbarLinkProps';

const NavbarLink = ({ icon: Icon, label, active, to, onClick }: NavbarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }} withArrow>
        <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
          <Icon size="23" stroke={1.7} />
        </UnstyledButton>
      </Tooltip>
    </NavLink>
  );
};


const navMenu = [
  { icon: IconHome2, label: 'Home', to: CLIENT_ROUTES.HOME },
  { icon: IconTriangleSquareCircle, label: 'Accounts', to: CLIENT_ROUTES.ACCOUNTS },
  { icon: IconCircles, label: 'Teams', to: CLIENT_ROUTES.TEAMS },
  { icon: IconUsers, label: 'Users', to: CLIENT_ROUTES.USERS },
  { icon: IconList, label: 'Log', to: CLIENT_ROUTES.LOG },
  // { icon: IconSettings, label: 'Settings' },
];


const MainLayout = ({ children, title }: { children: any, title?: string; }) => {
  const location = useLocation();
  let page = matchRoutes(router.routes, location);
  const links = navMenu.map((link, index) => {
    return <NavbarLink
      {...link}
      key={link.label}
      active={page![0].pathname.includes(link.to)?true:false}
    />;

  }

  );


  return (
    <div style={{ display: "flex" }}>

      <Navbar width={{ base: 80 }} p="md" style={{ zIndex: 99 }}>
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
            <NavbarLink icon={IconLogout} label="Logout" to='logout' />
          </Stack>
        </Navbar.Section>
      </Navbar>

      <div style={{ width: "100%", padding: '20px 15px 15px 15px' }}>

        <Title order={1}>
          {title}
        </Title>



        {children}
      </div>
    </div>


  );
};
export default MainLayout;