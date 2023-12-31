import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart, getTotals, removeCart } from "../Features/cartSlice";

import Container from '@mui/material/Container'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

import QtyButton from "../Common/QtyButton";

const CartTable = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    
    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = product => {
        console.log(product);
        dispatch(addToCart(product));
    }

    const handleDecreaseCart = product => {
        dispatch(decreaseCart(product));
    }

    const handleRemoveCart = product => {
        dispatch(removeCart(product));
    }

    return (
        <Container maxWidth="lg">
            <TableContainer component={Paper} sx={{ mt: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>نام محصول</TableCell>
                            <TableCell>تعداد</TableCell>
                            <TableCell>قیمت</TableCell>
                            <TableCell>حذف</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.cartItems.length ? cart.cartItems.map(item => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <Link to={`/product/${item.id}`} className="header--link">
                                        <Box
                                            component={"img"} 
                                            sx={{ width: 80, height: 80, objectFit: 'cover' }} 
                                            src={`${import.meta.env.VITE_BASE_URL}/images/${item.sticker}`} 
                                            alt={item.title}
                                        />
                                    </Link>
                                    {item.title}
                                </TableCell>
                                <TableCell>
                                    <QtyButton 
                                        decrementQty={() => handleDecreaseCart(item)} 
                                        incrementQty={() => handleAddToCart(item)} 
                                        qty={item.cartQty}
                                    />
                                </TableCell>
                                <TableCell>
                                    {item.price * item.cartQty} تومان
                                </TableCell>
                                <TableCell>
                                    <Button 
                                        variant="outlined" 
                                        color="error" 
                                        onClick={() => handleRemoveCart(item)}>
                                            <DeleteIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>                                
                                <TableCell>
                                    هیچ محصولی وجود ندارد
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {cart.cartTotalAmount === 0 ? null : (
                <Typography sx={{ textAlign: 'center', mt: 4}}>قیمت کل: {cart.cartTotalAmount.toLocaleString()} تومان</Typography>
            )}
            <Box sx={{ display: 'grid', maxWidth: '500px', margin: 'auto', mt: 4, gap: 2 }}>
                <Button variant="outlined" color="success">
                    تایید نهایی
                </Button>
                <Button variant="outlined" color="secondary">
                    برگشت به صفحه محصولات
                </Button>
            </Box>
        </Container>
    )
}

export default CartTable