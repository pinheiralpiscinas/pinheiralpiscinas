import React from "react";
import {Box} from '@mui/system';
import SectionsCard from "../Components/SectionCard";
import { produtosHeaters } from "../produtos/fromtherme";

export default function Heaters(){

    return (
        <Box>
            <SectionsCard arrayOfImages={produtosHeaters} title='Aquecedores para Piscinas' catalog='aquecedores.pdf'/>

        </Box>
    )
}