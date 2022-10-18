import React from "react";
import { Box} from '@mui/system';
import SectionsCard from "../Components/SectionCard";
import { produtosSibrape } from "../produtos/SibrapeAcessorios";



export default function SibrapeAcessorios(){

    return (
        <Box>
            <SectionsCard arrayOfImages={produtosSibrape} title='Acessórios Sibrape' catalog='catalogosibrape.pdf'/>

        </Box>
    )
}