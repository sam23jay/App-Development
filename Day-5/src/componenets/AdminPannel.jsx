import * as React from "react";
    import Box from "@mui/material/Box";
    import Drawer from "@mui/material/Drawer";
    import CssBaseline from "@mui/material/CssBaseline";
    import Toolbar from "@mui/material/Toolbar";
    import List from "@mui/material/List";
    import Divider from "@mui/material/Divider";
    import ListItem from "@mui/material/ListItem";
    import ListItemText from "@mui/material/ListItemText";
    import ListItemButton from "@mui/material/ListItemButton";
    import { ThemeProvider } from "@emotion/react";
    import useMediaQuery from "@mui/material/useMediaQuery";
    import { createTheme, useTheme } from "@mui/material/styles";
    import InboxIcon from "@mui/icons-material/MoveToInbox";
    import MailIcon from "@mui/icons-material/Mail";
    import ListItemIcon from "@mui/material/ListItemIcon";
    import { useNavigate } from "react-router-dom";
    import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import ScheduleIcon from "@mui/icons-material/Schedule";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddCircleIcon from "@mui/icons-material/AddCircle";

    const drawerWidth = 250;

    const menu = [
        { name: "Dashboard", path: "/homeD", icon: <DashboardIcon /> },
        { name: "Volunteers", path: "/admin/products", icon: <GroupIcon /> },
        { name: "Events", path: "/admin/customers", icon: <EventIcon /> },
        { name: "Analytics", path: "/admin/orders", icon: <AnalyticsIcon /> },
        { name: "Settings", path: "/admin", icon: <SettingsIcon /> },
        { name: "Weekly Overview", path: "/admin", icon: <ScheduleIcon /> },
        { name: "Monthly Overview", path: "/admin", icon: <DateRangeIcon /> },
        { name: "Add Event", path: "/admin/product/create", icon: <AddCircleIcon /> },
      ];
      

    const customTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
        main: '#9155FD',
        },
        secondary: {
        main: '#f48fb1',
        },
        white: {
        main: "#fff"
        },
        orange: {
        main: "#ffdb0f"
        },
        background: {
        default: '',
        paper: "rgb(0, 0, 22)"
        },
    },
    });

    export default function AdminPannel() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);
    const navigate = useNavigate();

    const drawer = (
        <div>
        <Box
        sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}
        >
        {isLargeScreen && <Toolbar />}
        <List>
  {menu.map((item, index) => (
    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
    </ListItem>
  ))}
</List>


        <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Divider />
            {["Account", "Request"].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
        </div>
    );

   
    const handleCloseSideBar = () => {
        setSideBarVisible(false);
    };

    const drawerVariant = true ? "permanent" : "temporary";

    return (
        <ThemeProvider theme={customTheme}>
        <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
            <CssBaseline />

            <Drawer
            variant={drawerVariant}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                ...(drawerVariant === "temporary" && {
                    top: 0,
                    [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                    {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    },
                }),
                },
            }}
            open={isLargeScreen || sideBarVisible}
            onClose={handleCloseSideBar}
            >
            {drawer}
            </Drawer>
            <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
            <Toolbar />
            </Box>
        </Box>
        </ThemeProvider>
);
}