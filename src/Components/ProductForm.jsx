import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { addToCart } from "../Features/cartSlice";

const ProductForm = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);
    
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        // navigate('/cart');
    }

    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" component={'p'} sx={{ color: '#1ac924' }}>در انبار موجود است</Typography>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button 
                    color="warning" 
                    variant="contained" 
                    sx={{ minWidth: '30px', borderRadius: '100%' }} 
                    onClick={() => setQty(prevQty => prevQty + 1)}
                >
                    +
                </Button>
                <Button 
                    color="warning" 
                    variant="contained" 
                    sx={{ minWidth: '30px', borderRadius: '100%' }}
                    >
                        {qty}
                </Button>
                <Button 
                    color="warning" 
                    variant="contained" 
                    sx={{ minWidth: '30px', borderRadius: '100%' }} 
                    onClick={() => setQty(prevQty => prevQty - 1)}
                >
                    -
                </Button>
            </Box>
            <Button variant="outlined" color="warning" sx={{ mt: 3 }} onClick={() => handleAddToCart({ ...product, cartQty: qty})}>
              اضافه به سبد خرید<ShoppingCartIcon/>
            </Button>
        </Box>
    )
}

export default ProductForm