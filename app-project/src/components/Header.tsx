import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Switch,
  styled,
  Badge,
  BadgeProps,
} from "@mui/material";
import { Link } from "react-router-dom";
import CottageIcon from "@mui/icons-material/Cottage";
import MenuDashboard from "./layout/MenuDashboard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { RootState } from "./reduxs/store";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {

    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header(props: any) {
  //const {count} = useSelector((state : any)=>state.ReducerCounter)
  const {value} = useSelector((state : RootState)=>state.mycoun)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{ mr: 2 }}
              component={Link}
              to="/"
            >
              <CottageIcon />
            </IconButton>
            <Switch onChange={props.handleMode} />
          </Box>

          <Box>
            <IconButton component={Link} to="/New">
              <Typography variant="h6" component="div">
                News
              </Typography>
            </IconButton>

            <IconButton>
              <Typography variant="h6" component="div">
                <MenuDashboard />
              </Typography>
            </IconButton>
          </Box>

          <Box>
          <IconButton aria-label="cart">
              <StyledBadge badgeContent={value} color="warning">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Button color="warning" component={Link} to="/Login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
