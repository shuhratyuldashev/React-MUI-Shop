import { GitHub } from "@mui/icons-material";
import { Container, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container className="footer">
      <Link
        href="https://github.com/shuhratyuldashev/React-MUI-Shop"
        variant="h6"
        fontSize="large"
      >
        <GitHub />
      </Link>
    </Container>
  );
};

export default Footer;
