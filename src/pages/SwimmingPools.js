import React from "react";
import {Box} from '@mui/system';
import { imagesFibratec } from "../fibratec/FibratecPiscinas";
import SectionsCard from "../Components/SectionCard";
import {produtosFapac} from '../produtos/fapac/index'
import { produtosOG } from "../produtos/piscinas OG";



export default function SwimmingPools(){

    return (
        <Box>
            <SectionsCard arrayOfImages={imagesFibratec}title='Piscinas Fibratec' catalog='catalogofibratec.pdf'/>

            <SectionsCard arrayOfImages={produtosFapac} title='Piscinas Fapac' catalog='catalogofapac.pdf'/>

            <SectionsCard arrayOfImages={produtosOG} title='Piscinas OG' catalog='catalogoog.pdf'/>

        </Box>
    )
}