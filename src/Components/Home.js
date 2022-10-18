import React from "react";
import { Stack, Box } from '@mui/system';
import homeImg from '../assets/piscinaLogo.jpg'
import logoPiscina from '../assets/logoPinhePisc-removebg-preview.png'

import BasicTabs from "./menu";
import ScrollableTabsButtonForce from "./menu";


export default function Home() {


    return (
        <Stack
            width={'100%'}
        >
            <Box

                sx={{
                    width: '100%',
                    height: '200px',
                    backgroundImage: `url(${homeImg})`,
                    backgroundSize: '100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'lightblue',
                        width: '230px',
                        height: '120px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderStyle: 'unset',
                        borderColor: 'white',
                        opacity: '0.8',

                    }}
                >


                    <img src={logoPiscina} width={'200px'} />

                </Box>




            </Box>
            <Box
            sx={{
                padding:'5px 5px'
            }}
            >

                <ScrollableTabsButtonForce />

            </Box>


        </Stack>
    )
} 