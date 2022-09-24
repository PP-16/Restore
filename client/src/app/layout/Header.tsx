import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  Badge,
  List,
  ListItem,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useAppSelector } from "../store/configureStore";

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

  const {basket}= useAppSelector(state=>state.basket)
  
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Box sx={{ flexGrow: 1}}>
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

            <Typography
              variant="h6"
              sx={navStyles}
              component={Link}
              to="/"
            >
              PP-Restore
            </Typography>
          </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem
                key={title}
                component={NavLink}
                to={path}
                sx={navStyles}
              >
                {title}
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component={Link}
              to="/basket"
              aria-label="cart"
              sx={{ color: "inherit" }}
              size="large"
            >
              <Badge badgeContent={itemCount} color="warning">
                <ShoppingCart />
              </Badge>
            </IconButton>

            <List sx={{ display: "flex" }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  key={title}
                  component={NavLink}
                  to={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
