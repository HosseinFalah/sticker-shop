import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, description, sticker, price }) => {
    return (
        <Box sx={{ boxShadow: '0px 1px 7px 1px #e6840b' }}>
            <Link to={`/product/${id}`}>
                <Box
                    component={"img"} 
                    sx={{ width: 1, height: 1, objectFit: 'cover' }} 
                    src={`${import.meta.env.VITE_BASE_URL}/images/${sticker}`} 
                    alt={title} />
            </Link>
            <Box sx={{ p: 2 }}>
                <Typography component={'p'} sx={{ color: '#ffbf23', fontWeight: 700, fontSize: '1.3rem' }}>{title}</Typography>
                <Typography variant="caption" sx={{ pt: 1 }}>{description}</Typography>
                <Box sx={{ pt: 2 }}>
                    <Typography variant="body1" component={'span'}>{price} تومان</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard