import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { selectAll } from '../Features/cartSlice';

const Navbar = () => {
    const cart = useSelector(selectAll);
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
                        <Link to={`/`} className='header--link'>
                            فروشگاه استیکر
                        </Link>
                    </Typography>
                    <Link to={`/cart`} className='header--link'>
                        <IconButton 
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ position: "relative" }}
                        >
                            {cart.length === 0 ? null : (
                                <Box 
                                    sx={{ 
                                        position: "absolute", 
                                        top: '-3px', 
                                        left: '-3px', 
                                        background: "#ef971d", 
                                        display: "flex", 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        borderRadius: '1rem'
                                    }}>
                                    <Typography variant="body1" component={"span"}>{cart.length}</Typography>
                                </Box>
                            )}
                            <ShoppingCartIcon/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar