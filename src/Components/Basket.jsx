import { ShoppingBasket, Close } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ order, removeFromOrder, cartOpen, closeCard }) => {
  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={closeCard}
      sx={{
        ".MuiDrawer-paper": {
          width: { xs: "100%", sm: "450px" },
        },
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon>
              <ShoppingBasket />
            </ListItemIcon>
            <ListItemText primary="Корзина" />
          </Box>
          <IconButton onClick={closeCard}>
            <Close />
          </IconButton>
        </ListItem>
        <Divider />

        {!order.length ? (
          <ListItem>
            <Typography variant="h5">Корзина пуста!</Typography>
          </ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                removeFromOrder={removeFromOrder}
                key={item.id}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость: {" "}
                {order.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )} {" "}
                руб.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
