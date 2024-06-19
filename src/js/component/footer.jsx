import React from "react";
import {Container, Box, Typography, } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{bgcolor: 'secondary.main', p: 5}}>
      <Container>
      <Typography /*className="text-center py-5 text-bg-dark"*/
        align="center"
        sx={{color: 'primary.main'}}
      >
      Copyright © 2024: React - MUI 
      </Typography>
      </Container>
    </Box>
  );   
};

export default Footer;