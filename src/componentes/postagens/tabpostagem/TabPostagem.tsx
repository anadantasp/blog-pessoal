import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className='corTab' >
                    <Tabs centered  onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Há tempos que levar uma vida sustentável deixou de ser uma opção e se tornou uma necessidade. 
                    A reciclagem de lixo, além de acontecer de um jeito insuficiente, não pode ser o único caminho, já que existe um limite quanto ao reaproveitamento de resíduos. 
                    Por isso, nós buscamos trazer informações relevantes sobre como andam as condições do meio ambiente, junto a opções de substituição de produtos e mudanças de hábitos que visam remediar 
                    o estrago em nossa casa, fazendo com que , dessa forma, as gerações futuras entendam a importância da causa e continuem trabalhando para que o mundo permaneça habitável para nós e todas as 
                    espécies que compõe o ecossistema, pois 'Não Existe Planeta B'.</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;