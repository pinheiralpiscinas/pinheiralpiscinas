import React from "react";
import { Box} from '@mui/system';
import SectionsCard from "../Components/SectionCard";
import { produtosAlbacete } from "../produtos/albacete";
import { produtosParadiso } from "../produtos/paradiso";


export default function BathTub(){

    return (
        <Box>
            <SectionsCard arrayOfImages={produtosAlbacete} title='Banheiras Albacete' catalog='albacete.pdf'/>

            <SectionsCard arrayOfImages={produtosParadiso} title='Banheiras Paradiso' catalog='catalogoparadiso.pdf'/>

        </Box>
    )
}