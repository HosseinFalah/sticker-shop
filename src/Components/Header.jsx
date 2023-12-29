import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'


const Header = () => {
    return (
        <Box sx={{ textAlign: 'center', pt: 4 }}>
            <Typography variant="h1" sx={{ fontSize: "2rem" }}>خرید بهترین استیکر های برنامه نویسی</Typography>
            <Typography variant="body2" component={"p"} sx={{ pt: 2 }}>برنامه نویسی که روی لپتاپش استیکر نداشته باشه برنامه نویس نیست😒</Typography>
        </Box>
    )
}

export default Header