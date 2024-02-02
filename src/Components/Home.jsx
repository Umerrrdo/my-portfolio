import React from "react";
import Navbar from "./Navbar";
import { Button, Typography, Container } from '@mui/material';



export default function Home() {
    return (
        <Container>
            <Navbar />
            <Typography variant="h2">Umer Mehmood</Typography>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </Container>
    );
}