import {
  Modal as MuiModal,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const CustomModal = ({
  isOpen,
  handleClose,
  id,
  name,
  price,
  setOrder,
  poster,
}) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <CardMedia sx={{ height: 140 }} image={poster} title={name} />
        <CardContent>
          <Typography id="modal-title" variant="h5">
            {name}
          </Typography>
          <Typography id="modal-description" variant="body1">
            Цена: {price} руб.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() =>
              setOrder({
                id: id,
                name: name,
                price: price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </MuiModal>
  );
};

export default CustomModal;
