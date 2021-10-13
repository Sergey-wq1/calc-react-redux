import Button from '@mui/material/Button';

export const ButtonJSX = {
    zero: (operator, i, val) => 
        <Button sx={{bgcolor: 'text.disabled', color:'text.secondary',borderRadius: 1 , borderColor: 'text.primary', gridRow: '5',width:'100%', gridColumn: 'span 2' }} variant="outlined" size="large" key={i} onClick={operator} className={val.classStyle}>{val.type}</Button>,
    greyButton: (operator, i, val) => 
        <Button sx={{bgcolor: 'error.main', color:'text.secondary',borderRadius: 1 , borderColor: 'text.primary' }} variant="outlined" size="large" key={i} onClick={operator} className={val.classStyle}>{val.type}</Button>,
    rest: (operator, i, val) => 
        <Button sx={{bgcolor: 'text.disabled',color:'text.secondary',borderRadius: 1 ,  borderColor: 'text.primary'}} variant="outlined" size="large" key={i} onClick={operator} className={val.classStyle}>{val.type}</Button>
}