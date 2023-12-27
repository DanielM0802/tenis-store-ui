import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom"
import { useAuth } from "../../context/authContext";

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


  const { usuario, logout } = useAuth();

  const onClickLogout = () => {
    logout();
  }
 
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

        <NavLink to="/carrito">

          <Button className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            Carro 
          </Button>

        </NavLink>



        {

            usuario ? 
            <div className="flex gap-4 justify-between items-center">
              <NavLink to="/perfil">
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="flex items-center gap-x-2 p-1 font-medium"
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 8.5C16 10.6217 15.1571 12.6566 13.6569 14.1569C12.1566 15.6571 10.1217 16.5 8 16.5C5.87827 16.5 3.84344 15.6571 2.34315 14.1569C0.842855 12.6566 0 10.6217 0 8.5C0 6.37827 0.842855 4.34344 2.34315 2.84315C3.84344 1.34285 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.34285 13.6569 2.84315C15.1571 4.34344 16 6.37827 16 8.5ZM10 5.5C10 6.03043 9.78929 6.53914 9.41421 6.91421C9.03914 7.28929 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.28929 6.58579 6.91421C6.21071 6.53914 6 6.03043 6 5.5C6 4.96957 6.21071 4.46086 6.58579 4.08579C6.96086 3.71071 7.46957 3.5 8 3.5C8.53043 3.5 9.03914 3.71071 9.41421 4.08579C9.78929 4.46086 10 4.96957 10 5.5ZM8 9.5C7.0426 9.49981 6.10528 9.77449 5.29942 10.2914C4.49356 10.8083 3.85304 11.5457 3.454 12.416C4.01668 13.0706 4.71427 13.5958 5.49894 13.9555C6.28362 14.3152 7.13681 14.5009 8 14.5C8.86319 14.5009 9.71638 14.3152 10.5011 13.9555C11.2857 13.5958 11.9833 13.0706 12.546 12.416C12.147 11.5457 11.5064 10.8083 10.7006 10.2914C9.89472 9.77449 8.9574 9.49981 8 9.5Z"
                      fill="#90A4AE"
                    />
                  </svg>
                  <a href="#" className="flex items-center">
                    Mi perfil
                  </a>
                </Typography>
              </NavLink>
              <Button variant="text" size="sm" color="red" onClick={onClickLogout}>
                Salir
              </Button>
            </div>
            : 
            <div className="hidden gap-2 lg:flex">
              <NavLink to="/login">
                <Button variant="text" size="sm" color="blue-gray">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/registro">
                <Button variant="gradient" size="sm">
                  Registro
                </Button>
              </NavLink>
            </div>
        }

        
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