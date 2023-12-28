import { createTheme } from "@mui/material/styles";

import IRANSansXThinWoff from "/public/fonts/woff/IRANSansX-thin.woff";
import IRANSansXThinWoff2 from "/public/fonts/woff2/IRANSansX-thin.woff2";
import IRANSansXUltraLightWoff from "/public/fonts/woff/IRANSansX-UltraLight.woff";
import IRANSansXUltraLightWoff2 from "/public/fonts/woff2/IRANSansX-UltraLight.woff2";
import IRANSansXLightWoff from "/public/fonts/woff/IRANSansX-light.woff";
import IRANSansXLightWoff2 from "/public/fonts/woff2/IRANSansX-light.woff2";
import IRANSansXRegularWoff from "/public/fonts/woff/IRANSansX-regular.woff";
import IRANSansXRegularWoff2 from "/public/fonts/woff2/IRANSansX-regular.woff2";
import IRANSansXMediumWoff from "/public/fonts/woff/IRANSansX-medium.woff";
import IRANSansXMediumWoff2 from "/public/fonts/woff2/IRANSansX-medium.woff2";
import IRANSansXDemiboldWoff from "/public/fonts/woff/IRANSansX-demibold.woff";
import IRANSansXDemiboldWoff2 from "/public/fonts/woff2/IRANSansX-demibold.woff2";
import IRANSansXExtraboldWoff from "/public/fonts/woff/IRANSansX-extrabold.woff";
import IRANSansXExtraboldWoff2 from "/public/fonts/woff2/IRANSansX-extrabold.woff2";
import IRANSansXBlackWoff from "/public/fonts/woff/IRANSansX-black.woff";
import IRANSansXBlackWoff2 from "/public/fonts/woff2/IRANSansX-black.woff2";
import IRANSansXBoldWoff from "/public/fonts/woff/IRANSansX-bold.woff";
import IRANSansXBoldWoff2 from "/public/fonts/woff2/IRANSansX-bold.woff2";

export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: 'IRANSansX'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 100;
                    font-display: swap;
                    src: url(${IRANSansXThinWoff}) format('woff'),   
                    url(${IRANSansXThinWoff2}) format('woff2');		
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 200;
                    font-display: swap;
                    src: url(${IRANSansXUltraLightWoff}) format('woff'),   
                    url(${IRANSansXUltraLightWoff2}) format('woff2');	
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 300;
                    font-display: swap;
                    src: url(${IRANSansXLightWoff}) format('woff'),   
                    url(${IRANSansXLightWoff2}) format('woff2');		 
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 400;
                    font-display: swap;
                    src: url(${IRANSansXRegularWoff}) format('woff'),   
                    url(${IRANSansXRegularWoff2}) format('woff2');		 
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 500;
                    font-display: swap;
                    src: url(${IRANSansXMediumWoff}) format('woff'),   
                    url(${IRANSansXMediumWoff2}) format('woff2');	 
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 600;
                    font-display: swap;
                    src: url(${IRANSansXDemiboldWoff}) format('woff'),   
                    url(${IRANSansXDemiboldWoff2}) format('woff2');		 
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 700;
                    font-display: swap;
                    src: url(${IRANSansXBoldWoff}) format('woff'),   
                    url(${IRANSansXBoldWoff2}) format('woff2');		 
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 800;
                    font-display: swap;
                    src: url(${IRANSansXExtraboldWoff}) format('woff'),   
                    url(${IRANSansXExtraboldWoff2}) format('woff2');	 
                }
                
                @font-face {
                    font-family: IRANSansX;
                    font-style: normal;
                    font-weight: 900;
                    font-display: swap;
                    src: url(${IRANSansXBlackWoff}) format('woff'),   
                    url(${IRANSansXBlackWoff2}) format('woff2');	
                }
            `
        }
    }
})