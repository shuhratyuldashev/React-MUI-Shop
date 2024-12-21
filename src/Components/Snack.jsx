import { Check } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Snack = ({ isOpen, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isOpen}
      autoHideDuration={750}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        icon={<Check fontSize="inherit" />}
        severity="primary"
      >
        Товар добавлен в корзину!
      </Alert>
    </Snackbar>
  );
};

export default Snack;
