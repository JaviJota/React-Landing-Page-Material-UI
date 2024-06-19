import React from "react";
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Footer from './footer';
import CardComponent from './card';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router} from 'react-router-dom';

const theme = createTheme ({
        palette: {
                primary: {
                  main: '#fff', // Blanco
                },
                secondary: {
                  main: '#4a4849', // Gris oscuro
                  light: '#FFEEEF', //Gris claro
                },
        },
});

const Home = () => {

const cardsData = [
        { title: 'Card 1', text: 'Example text to build on the card title and make up the bulk of the card\'s content. Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Card 2', text: 'Another example text to build on the card title and make up the bulk of the card\'s content. Another example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Card 3', text: 'Example text to build on the card title and make up the bulk of the card\'s content. Yet another example text to build on the card title and make up the bulk of the card\'s content.' },
        { title: 'Card 4', text: 'Example text to build on the card title and make up the bulk of the card\'s content. One more example text to build on the card title and make up the bulk of the card\'s content.' }
        ];

	return (
        <ThemeProvider theme={theme}>
        <Router>
                <Navbar />                
        </Router>
                <Jumbotron />
                <Box   sx={{justifyContent: "space-between", display: "flex", mx: 5, mb: 4}}>
                        {cardsData.map((card, index) => (
                        <CardComponent title={card.title} text={card.text} key={index}/>
                        ))}
                </Box>
                <Footer />
       </ThemeProvider>
	);
};

export default Home;
