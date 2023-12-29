import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        فروشگاه استیکر
                    </Typography>
                    <IconButton 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ position: "relative" }}
                    >
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
                            <Typography variant="body1" component={"span"}>0</Typography>
                        </Box>
                        <ShoppingCartIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar