import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import SwimmingPool from './SectionCard';
import HomePage from '../pages/HomePage';
import SwimmingPools from '../pages/SwimmingPools';
import BathTub from '../pages/BathTub';
import Mobiliario from '../pages/mobiliario';
import Heaters from '../pages/Heaters';
import Cercas from '../pages/Cercas';
import SibrapeAcessorios from '../pages/sibrapeAcessorios';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx=
            {{
            
            }}>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider'
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                  
                >
                    <Tab label="Início" {...a11yProps(0)} sx={{ fontWeight: 'bold', marginRight:'20px' }} />
                    <Tab label="Piscinas" {...a11yProps(1)} sx={{ fontWeight: 'bold' }} />
                    <Tab label="Banheiras" {...a11yProps(2)} sx={{ fontWeight: 'bold' }} />
                    <Tab label="Cercas Removíveis" {...a11yProps(3)} sx={{ fontWeight: 'bold' }} />
                    <Tab label="Mobiliário" {...a11yProps(4)} sx={{ fontWeight: 'bold' }} />
                    <Tab label="Aquecedores" {...a11yProps(5)} sx={{ fontWeight: 'bold' }} />
                    <Tab label="Acessórios" {...a11yProps(6)} sx={{ fontWeight: 'bold' }} />
                </Tabs>
            </Box>
            <Stack>
            <TabPanel value={value} index={0}>
                <HomePage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SwimmingPools/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BathTub/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Cercas/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Mobiliario/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Heaters/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <SibrapeAcessorios/>
            </TabPanel>
            </Stack>
            
        </Box>
    );
}
