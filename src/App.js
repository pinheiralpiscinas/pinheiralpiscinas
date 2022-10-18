import * as React from 'react'
import Header from './Components/Header'
import { Stack , Box} from '@mui/system';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Form from './Components/Form';

import { produtos } from './produtos/fapac/index';



function App() {

  return (
    <Box sx={{
  
    }}>
    <Header/>
    <Home/>
    <Form/>
    <Footer/>
    </Box>
    
  )
}

export default App