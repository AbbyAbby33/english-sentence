import React from 'react';
import './App.css';

// mui
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

// router & pages
import { NavLink, Route, Routes } from 'react-router-dom';
import SentenceLearning from './content/SentenceLearning/pages/SentenceLearning';
import CreateSentence from './content/CreateSentence/pages/CreateSentence';
import MenuMatain from './content/MenuMatain/pages/MenuMatain';
import NoMatch from './content/NoMatch/pages/NoMatch';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const menuList = [
	{ id: '0', name: '句子學習', link: 'sentence-learning', icon: <MenuBookIcon /> },
	{ id: '1', name: '新增句子', link: 'create-sentence', icon: <CreateIcon /> },
	{ id: '2', name: '目錄維護', link: 'menu-matain', icon: <LibraryBooksIcon /> },
];

const drawer = (
	<List>
		{menuList.map(v => (
			<NavLink to={`/${v.link}`} key={v.id}>
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

function App() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			{/* header */}
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
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
							英文句子
						</Typography>
						<Button color="inherit">登入</Button>
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
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{drawer}
			</Drawer>

			{/* content */}
			<Box>
				<Routes>
					<Route path="/" element={<SentenceLearning />} />
					<Route path="sentence-learning" element={<SentenceLearning />} />
					<Route path="create-sentence" element={<CreateSentence />} />
					<Route path="menu-matain" element={<MenuMatain />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Box>
		</div>
	);
}

export default App;
