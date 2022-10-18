import { Button, TextField, Box, Alert } from '@mui/material';
import emailjs from '@emailjs/browser'
import { useState } from 'react';

export default function Form() {

    const [dado, setDado] = useState() 
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [telefone, setTelefone] = useState('')
 
 
 
 function sendEmail(e){
     e.preventDefault();
 
     const templateParams = {
         from_name: name,
         message: message,
         email: email,
         telefone: telefone
     }
 
     emailjs.send('service_9j3ocbf','template_xjecxhw',templateParams,'ar_PAnWeTTRsC1XmE')
     .then((response) => {
         setDado(response)
 
     }, (err) => {
         console.log('Erro:', err)
     })
 
     };
 
 
     return (
         <Box
         sx={{
            display:'flex',
            justifyContent:'center'
         }}
         >
             <Box sx={{
                width:'80%', 
                background:'lightblue', 
                borderRadius:"10px", 
                padding:'20px',
                margin:'20px'
                }}>
             <Box sx={{
                fontSize:'38px', 
                textAlign:'center', 
                marginBottom:'30px',
                                
                }}>Solicitar Orçamento</Box>
             <form onSubmit={sendEmail}>
                     <Box sx={{display:'flex', flexDirection:'column', gap:'30px'}}>
 
                         <Box sx={{display:'flex', flexDirection:'column'}}>
                             <Box sx={{fontSize:'20px'}}>Nome</Box>
                             <TextField 
                                 sx={{background:'#ffffff', borderRadius:'10px'}}
                                 type="text" 
                                 autoFocus className="form-control" 
                                 required placeholder="Nome" 
                                 name="name"
                                 onChange={(e) => setName(e.target.value)}
                                 />
                         </Box>
                         <Box sx={{display:'flex', flexDirection:'column'}}>
                             <label>Telefone</label>
                             <TextField 
                                 sx={{background:'#ffffff', borderRadius:'10px'}}
                                 type="number" 
                                 autoFocus className="form-control" 
                                 required placeholder="Telefone" 
                                 name="telefone"
                                 onChange={(e) => setTelefone(e.target.value)}
                                 />
                         </Box>
                         <Box sx={{display:'flex', flexDirection:'column'}}>
                         <label>Email</label>
                             <TextField 
                                 sx={{background:'#ffffff', borderRadius:'10px'}}
                                 type="email" 
                                 className="form-control" 
                                 required placeholder="Seu email" 
                                 name="email"
                                 onChange={(e) => setEmail(e.target.value)}
                                 />
                         </Box>
 
                         <Box sx={{display:'flex', flexDirection:'column'}}>
                         <label>Mensagem</label>
                             <TextField 
                                 sx={{background:'#ffffff', borderRadius:'10px'}}
                                 multiline
                                 rows={4}
                                 required placeholder="Sua mensagem" 
                                 name="message"
                                 onChange={(e) => setMessage(e.target.value)}
                             />
 
 
                         </Box>
 
                         <Box sx={{display:'flex', justifyContent:'end'}}>
                         {dado? 
 
                             <Alert severity="success">Socilitação enviada com sucesso!</Alert>
                             :
                             <Button sx={{background:'#ffffff', width:'200px', height:'50px'}} type="submit"  value="Enviar mensagem">Enviar</Button>
                         }
 
                         </Box>
                     </Box>
                 </form>
             </Box>
         </Box>
     )
 }
