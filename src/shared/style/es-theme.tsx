// mui custom theme
import { createTheme } from '@mui/material/styles';

/** 建立給typography的字型物件 */
function createFontFamily(fontFamily: string) {
    return {
        h1: { fontFamily: fontFamily },
        h2: { fontFamily: fontFamily },
        h3: { fontFamily: fontFamily },
        h4: { fontFamily: fontFamily },
        h5: { fontFamily: fontFamily },
        h6: { fontFamily: fontFamily },
        subtitle1: { fontFamily: fontFamily },
        subtitle2: { fontFamily: fontFamily },
        body1: { fontFamily: fontFamily },
        body2: { fontFamily: fontFamily },
        button: { fontFamily: fontFamily },
        caption: { fontFamily: fontFamily },
        overline: { fontFamily: fontFamily },
    }
}

declare module "@mui/material/styles" {
    interface Palette {
        'title-background'?: Palette['primary'] | any;
    }
    interface PaletteOptions {
        'title-background'?: PaletteOptions['primary'] | any;
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
}

/** 基礎共用theme */
const themeBase = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    color: 'rgb(0, 0, 0)',
                    minHeight: 'calc(100vh - 56px)', // for backgroundImage
                    '& .m0': {
                        margin: '0'
                    }
                }
            }
        }
    },
    palette: {
        warning: {
            main: '#FDE74C',
        },
        error: {
            main: '#A93636',
        },
        success: {
            main: '#62dc66',
        },
    },
});

const theme1 = createTheme(themeBase, {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // backgroundColor: '#aac5b4',
                    backgroundImage: 'linear-gradient(80deg, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)',
                    '& .english-font-family': {
                        fontFamily: `'Roboto Mono', 'serif', 'Segoe UI', 'Roboto'`
                    },
                }
            }
        }
    },
    // typography: {
    //     fontFamily: `'Zen Old Mincho','微軟正黑體', 'serif', 'Segoe UI', 'Roboto'`,
    // },
    typography: createFontFamily(`'Zen Old Mincho','微軟正黑體', 'serif', 'Segoe UI', 'Roboto'`),
    palette: {
        primary: {
            main: '#16504b',
        },
        secondary: {
            main: '#f50057',
        },
        info: {
            main: '#77825c',
            darker: '#676F54',
        },
        'title-background': {
            main: '#dcdbc9',
        },
    },
});

const theme2 = createTheme(themeBase, {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // backgroundColor: '#F6D0B1',
                    backgroundImage: 'linear-gradient(220deg, #F6D0B1 0%, #F6D0B1 0%, #fcb69f 21%, #ffecd2 52%, #ff867a 78%, #ff867a 100%)',
                    '& .english-font-family': {
                        fontFamily: `'Kanit', 'serif', 'Segoe UI', 'Roboto'`,
                    },
                }
            }
        }
    },
    typography: createFontFamily(`'微軟正黑體', 'serif', 'Segoe UI', 'Roboto'`),
    palette: {
        primary: {
            main: '#9a031e',
        },
        secondary: {
            main: '#f50057',
        },
        info: {
            main: '#fb8b24',
        },
        'title-background': {
            main: '#ffb5a7',
        },
    },
});

export { theme1, theme2 };