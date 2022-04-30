import { createTheme } from '@mui/material/styles';

/** 基礎共用theme */
const themeBase = createTheme({
    palette: {
        primary: {
            main: '#16504b',
        },
        secondary: {
            main: '#f50057',
        },
        info: {
            main: '#676F54',
        },
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
                    // TODO: 以後可能會跟著主題換色
                    backgroundColor: '#aac5b4',
                    color: 'rgb(0, 0, 0)',
                    '& .english-font-family': {
                        fontFamily: `'Roboto Mono', 'serif', 'Segoe UI', 'Roboto'`
                    },
                    '& .m0': {
                        margin: '0'
                    }
                }
            }
        }
    },
    typography: {
        // Google fonts：'Zen Old Mincho'
        fontFamily: `'Zen Old Mincho', 'serif', 'Segoe UI', 'Roboto'`,
    },
});

const theme2 = createTheme(themeBase, {
	palette: {
		primary: {
			main: '#5bd9ce',
		},
	},
});

export { theme1, theme2 };