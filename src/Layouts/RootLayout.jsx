import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

import { theme } from "../Theme/theme";
import { Navbar } from "../Components";

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

const RootLayout = () => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Toaster position="top-center" toastOptions={{ duration: 4000 }}/>
                <CssBaseline />
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default RootLayout