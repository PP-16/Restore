import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Switch,
  Badge,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
  color: "grey.500",
  },
  "&.active": {
  color: "text.secondary",
  },
  };

export default function Header(props: any) {
  return (
    <Box sx={{ flexGrow: 1, mb: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Switch
                defaultChecked
                onChange={props.handleMode}
                color="default"
              />
            </IconButton>

            <Typography variant="h6" sx={navStyles}>PP-Restore</Typography>
          </Box>

          <List sx={{display:'flex'}}>
            {midLinks.map(({title,path}) => (
              <ListItem key={title} component ={NavLink}to={path} sx={navStyles}>{title}</ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", alignItems: "center" }}>

            <Badge color="secondary" badgeContent={4}>
              <ShoppingCartIcon />
            </Badge>
          <List sx={{display:'flex'}}>
            {rightLinks.map(({title,path}) => (
              <ListItem key={title} component ={NavLink}to={path} sx={navStyles}>{title}</ListItem>
            ))}
          </List>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
