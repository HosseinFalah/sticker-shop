import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import ProductForm from "../Components/ProductForm";

const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams()

    const product = useSelector(state => state.products.items.find(product => product.id === productId));

    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4 }}>
                {product && (
                    <>
                        <Helmet>
                            <title>{product.title}</title>
                        </Helmet>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <Box
                                    component={'img'}
                                    sx={{ width: 1, height: '70%', objectFit: 'cover', borderRadius: 4 }}
                                    src={`${import.meta.env.VITE_BASE_URL}/images/${product.sticker}`}
                                    alt={product.title}
                                />
                            </Grid>
                            <Grid xs={6}>
                                <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
                                    برگشت به صفحه محصولات
                                </Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
                                    <Typography variant="h4" component={'h1'} sx={{ color: '#9d50ec' }}>{product.title}</Typography>
                                    <Typography variant="body1" component={'p'}>{product.description}</Typography>
                                    <Typography variant="body2" component={'p'}>قیمت: {product.price} تومان</Typography>
                                </Box>

                                <ProductForm product={product}/>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Box>
        </Container>
    )
}

export default ProductDetails