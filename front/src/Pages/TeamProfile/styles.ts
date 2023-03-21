import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme, _params, getRef) => ({
  activityBottom: {
    background:"linear-gradient(0deg, white, transparent)",
    position: "absolute",
    bottom: "0px",
    zIndex: 9,
    width: "90%",
    height: "50px",
  },
}));
