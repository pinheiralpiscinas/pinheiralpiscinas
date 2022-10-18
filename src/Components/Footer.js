import * as React from 'react';
import { Stack, Box } from '@mui/system';
import logoHeader from '../assets/logo2-removebg-preview.png'



function Footer() {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'lightblue',
                padding: '10px 0'
            }}
        >

            <Box>
                <Box
                    sx={{
                        width: '50px',
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom:'30px'
                    }}
                >
                    <img src={logoHeader} width={'100%'} />

                </Box>

            </Box>        
                <Box sx={{color:'#ffffff'}}>
                    Avenida Nilton Pena Botelho, 737 vale do Sol
                    Pinheiral RJ
                </Box>
                <Box sx={{color:'#ffffff'}}>
                    Rua Capitão Benedito L. Bragança,  357 São Geraldo Volta Redonda RJ Cep 27253-510
                </Box>
    
        </Stack>
    );
}

export default Footer;