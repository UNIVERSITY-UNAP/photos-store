import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material'
import {
  Assignment as AssignmentIcon,
  BarChart as BarChartIcon,
  Dashboard as DashboardIcon,
  Layers as LayersIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material'

export const mainListItems = (
  <>
    <ListItemButton href='/photographer'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href="/photographer/clients">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItemButton>
    <ListItemButton href="/photographer/statistics">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Ventas" />
    </ListItemButton>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Pedidos
    </ListSubheader>
    <ListItemButton href="/photographer/list">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos Asignados" />
    </ListItemButton>
    <ListItemButton href="/photographer/freeList">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos Libres" />
    </ListItemButton>
    <ListItemButton href="/photographer/processList">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos Caducados" />
    </ListItemButton>
  </>
);
