import React from 'react';
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
var DateNow = new Date().toLocaleDateString()
var TimeNow = new Date().toLocaleTimeString()

const History = (props) => {
    const history = props.history.counter.history
    const historyJSX = history.map((h, i) => <Grid item key={i}>
        <Item sx={{ fontSize: '12px', color: 'black' }}>{DateNow} {TimeNow} операция {h.expression}={h.answer}</Item>
    </Grid>)
    return (
        <div>
            <Grid container spacing={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                {historyJSX}
            </Grid>
        </div>
    );
};

export default History;