import * as React from 'react'
import Header from './Components/Header'
import {Box} from '@mui/system';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Form from './Components/Form';




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