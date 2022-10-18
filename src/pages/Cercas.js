import React from "react";
import {Box} from '@mui/system';
import SectionsCard from "../Components/SectionCard";
import { produtosCercas } from "../produtos/Cercas";



export default function Cercas(){

    return (
        <Box>
            <SectionsCard arrayOfImages={produtosCercas} title='Cercas Removíveis ' catalog='catalogocercas.jpeg'/>

        </Box>
    )
}