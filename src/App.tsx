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
	{ id: '0', name: '句子學習', icon: <MenuBookIcon /> }, // sentence learning
	{ id: '1', name: '新增句子', icon: <CreateIcon /> }, // create sentence
	{ id: '2', name: '目錄維護', icon: <LibraryBooksIcon /> }, // menu matain
];

const drawer = (
	<List>
		{menuList.map(v => (
			<ListItem button key={v.id}>
				<ListItemIcon>
					{v.icon}
				</ListItemIcon>
				<ListItemText primary={v.name} />
			</ListItem>
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
		</div>
	);
}

export default App;
