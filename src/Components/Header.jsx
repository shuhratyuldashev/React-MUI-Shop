import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Header = ({ handleOpenCart, orderLen }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <ShoppingBagIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }} variant="h6" component="span">
          Shop React & MUI
        </Typography>
        <IconButton onClick={handleOpenCart} color="inherit">
          <Badge badgeContent={orderLen} color="secondary">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
