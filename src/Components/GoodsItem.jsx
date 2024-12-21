import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import CustomModal from "./CustomModal";

const GoodsItem = ({ id, name, price, setOrder, poster }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Grid item size={{ xs: 12,sm: 6, md: 4 }}>
      <Card sx={{ height: "100%" }}>
        <CardMedia sx={{ height: 140 }} image={poster} title={name} />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
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
                poster: poster,
              })
            }
          >
            Купить
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setIsModalOpen(true)}
          >
            Подробнее
          </Button>
        </CardActions>
      </Card>
      <CustomModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        id={id}
        name={name}
        price={price}
        setOrder={setOrder}
        poster={poster}
      />
    </Grid>
  );
};

export default GoodsItem;
