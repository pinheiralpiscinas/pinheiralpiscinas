import React from "react";
import {Box} from '@mui/system';
import SectionsCard from "../Components/SectionCard";
import { produtosGrosiflex } from "../produtos/Grosiflex";



export default function Mobiliario(){

    return (
        <Box>
            <SectionsCard arrayOfImages={produtosGrosiflex} title='Móveis para piscinas' catalog='mobiliario.pdf'/>

        </Box>
    )
}