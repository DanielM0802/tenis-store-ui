import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom"

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
        <NavLink to="productos/pelotas">
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm w-auto">Pelota</ListItem>
        </NavLink>
        <NavLink to="productos/raquetas">
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm  w-auto">Raquetas</ListItem>
        </NavLink>
        <NavLink to="productos/accesorios">
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm w-auto">Accesorios</ListItem>
        </NavLink>
        <NavLink to="productos/ropa">
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-sm w-auto">Ropa</ListItem>
        </NavLink>
      
      
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography> */}
    </List>
  );
}
 
export function NavbarTenis() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        
        <NavLink to="/">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Tenis Store
          </Typography>
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <NavLink to="/login">
            <Button variant="text" size="sm" color="blue-gray">
              Login
            </Button>
          </NavLink>
          <Button variant="gradient" size="sm">
            Registro
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Login
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Registro
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}