import { createStyles,rem } from '@mantine/core';
export const useStyles = createStyles((theme, _params, getRef) => ({
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