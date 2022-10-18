import React from "react";
import {Box } from '@mui/system';
import WavesIcon from '@mui/icons-material/Waves';
import PrincipalCard from "../Components/principalCard";


export default function HomePage() {

    return (
        <Box>

            <PrincipalCard/>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'grey',
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    fontWeight: '900',
                    textAlign: 'center',
                    margin: '50px'
                }}
            >
                <WavesIcon
                    sx={{ width: '100px', height: '70px', margin: '10px', color: 'blue' }}
                />
                Piscinas de qualidade em Pinheiral, Volta Redonda e região
            </Box>

            <Box 
             sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'100%'
                }}
            >
                <video controls muted loop width="100%" poster="capa.jpg" autoplay="autoplay">
                    <source src="video.mp4"></source>
                </video>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'grey',
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    fontWeight: '900',
                    textAlign: 'center',
                    margin: '50px'

                }}
            >
                <WavesIcon
                    sx={{ width: '100px', height: '70px', margin: '10px', color: 'blue' }}
                />
                Atendimento personalizado para instalação e manutenções
            </Box>

            <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'100%'
                }}
            >
                <video controls muted loop poster="capa.jpg" autoplay="autoplay" width="100%">
                    <source src="paradiso.mp4"></source>
                </video>
            </Box>


        </Box>
    )
}