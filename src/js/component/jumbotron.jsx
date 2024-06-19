import React from "react";
import { Box, Container, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Jumbotron = () => {
  return (
    <Box sx={{p: 5, my: 4, mx: 5, bgcolor: 'secondary.light', borderRadius: 2}}>
      <Container maxWidth='lg' sx={{py: 5, ml: 0}}>
        <Typography variant="h1" component='h1' gutterBottom sx={{ fontWeight: 500}}>
          A warm <span style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>welcome!</span>
        </Typography>
        <Typography variant="h5" component='p' sx={{ mb: 3}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Maxime mollitia perspiciatis iusto sit ad earum inventore, 
          error iure vitae molestias!
        </Typography>
        <Button variant="contained" size="large" sx={{bgcolor: '#1976d2', color: 'primary.main'}} endIcon={<ShoppingCartIcon />}>
          Call to action
        </Button>
      </Container>
    </Box>
  );
};

export default Jumbotron;