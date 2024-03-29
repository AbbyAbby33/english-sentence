import React from 'react';
import './App.css';

// mui & style
import { ThemeProvider, styled } from '@mui/material/styles';
import { theme1, theme2 } from './shared/style/es-theme';

// import AppBar from '@mui/material/AppBar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PaletteIcon from '@mui/icons-material/Palette';
import CssBaseline from '@mui/material/CssBaseline';

// router & pages
import { NavLink, Route, Routes } from 'react-router-dom';
import TopicList from './content/TopicList/pages/TopicList';
import SentenceList from './content/SentenceList/pages/SentenceList';
import SentenceLearning from './content/SentenceLearning/pages/SentenceLearning';
import CreateSentence from './content/CreateSentence/pages/CreateSentence';
import MenuMatain from './content/MenuMatain/pages/MenuMatain';
import NoMatch from './content/NoMatch/pages/NoMatch';
import Home from './content/Home/pages/Home';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean; }>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginTop: 56, // 往下推header的高度
	...(open && {
		boxSizing: 'border-box',
		width: document.body.offsetWidth > 768 ? `calc(100% - ${drawerWidth}px)` : '100%',
		marginLeft: document.body.offsetWidth > 768 ? `${drawerWidth}px` : 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: document.body.offsetWidth > 768 ? `calc(100% - ${drawerWidth}px)` : '100%',
		marginLeft: document.body.offsetWidth > 768 ? `-${drawerWidth}px` : 0,
		// width: `calc(100% - ${drawerWidth}px)`,
		// marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const menuList = [
	{ id: '0', name: '句子學習', link: 'topic-list', icon: <MenuBookIcon /> },
	{ id: '1', name: '新增句子', link: 'create-sentence', icon: <CreateIcon /> },
	{ id: '2', name: '目錄維護', link: 'menu-matain', icon: <LibraryBooksIcon /> },
];

function App() {
	const [open, setOpen] = React.useState(false);
	const [theme, setTheme] = React.useState({ mode: 1, themeObj: theme1 });

	/** 菜單收合 */
	const handleDrawerToggle = () => {
		console.log('document.body.offsetWidth', document.body.offsetWidth);
		setOpen(!open);
	};

	const changeTheme = () => {
		const newTheme = theme.mode === 1 ? { mode: 2, themeObj: theme2 } : { mode: 1, themeObj: theme1 };
		setTheme(newTheme);
	};

	const drawer = (
		<List>
			{menuList.map(v => (
				<NavLink
					to={`/${v.link}`}
					key={v.id}
					onClick={handleDrawerToggle}>
					<ListItem button key={v.id}>
						<ListItemIcon>
							{v.icon}
						</ListItemIcon>
						<ListItemText primary={v.name} />
					</ListItem>
				</NavLink>
			))}
		</List>
	);

	return (
		<ThemeProvider theme={theme.themeObj}>
			<CssBaseline />
			{/* header */}
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" open={open}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<NavLink to={`/`}>
								英文句子
							</NavLink>
						</Typography>
						{/* 切換主題 */}
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={changeTheme}>
							<PaletteIcon />
						</IconButton>
						{/* 登入 */}
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit">
							<AccountCircle />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>

			{/* menu */}
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerToggle}>
						{theme.themeObj.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{drawer}
			</Drawer>

			{/* content */}
			<Main open={open}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="topic-list" element={<TopicList />} />
					<Route path="topic-list/:id" element={<SentenceList />} />
					<Route path="sentence-learning/:id" element={<SentenceLearning />} />
					<Route path="create-sentence" element={<CreateSentence />} />
					<Route path="menu-matain" element={<MenuMatain />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Main>
		</ThemeProvider>
	);
}

export default App;
