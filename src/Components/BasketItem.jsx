import { Delete } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const BasketItem = ({ removeFromOrder, id, name, price, quantity, poster }) => {
  return (
    <ListItem
      sx={{
        ":hover": { backgroundColor: "primary.light" },
        transition: "100ms",
      }}
      primary={name}
      secondary={price}
    >
      <ListItemAvatar>
        <Avatar
          sx={{ width: 50, height: 50, mr: 2, borderRadius: 2 }}
          alt={name}
          src={poster}
        />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={[price, "руб х", quantity]} />
      <IconButton onClick={() => removeFromOrder(id)}>
        <Delete sx={{ ":hover": { color: "secondary.main" } }} />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
