import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const QtyButton = ({ incrementQty, qty, decrementQty }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button variant="outlined" onClick={incrementQty}>+</Button>
            <Button variant="text">{qty}</Button>
            <Button variant="outlined" onClick={decrementQty}>-</Button>
        </Box>
    )
}

export default QtyButton