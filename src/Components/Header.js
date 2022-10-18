import * as React from 'react';
import { Stack , Box} from '@mui/system';
import logoHeader from '../assets/logo2-removebg-preview.png'
import nomePiscinas from '../assets/logoPinhePisctitulo-removebg-preview.png'



function Header() {
  return (
     <Stack
     sx={{
        width:'100%',
        height:'auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightblue',
        padding:'10px 0'

     }}
     >

        <Box
        sx={{
         width:'100px',
         height:'auto',
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         
        }}
        >
            <img src={logoHeader} width={'60%'}/>
            <img src={nomePiscinas} width={'100%'}/>
            
        </Box>

     </Stack>
  );
}

export default Header;
