import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const ResponsiveList = (
    <ul className="flex flex-col items-center mt-4 mb-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="blue-gray" className="p-1">
        <a href="#" className="flex items-center text-md">
          Example
        </a>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1">
        <a href="#" className="flex items-center text-md">
          Example
        </a>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1">
        <a href="#" className="flex items-center text-md">
          Example
        </a>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1">
        <a href="#" className="flex items-center text-md">
          Example
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="flex justify-center w-full">
      <Navbar className="w-4/5 mt-6 shadow-xl">
        <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h4"
            className="mr-4 cursor-pointer"
          >
            Topics<span className="text-blue-500">Hub</span>
          </Typography>

          <div className="hidden lg:block">{ResponsiveList}</div>

          <Button
            variant="gradient"
            size="md"
            className="hidden lg:inline-block"
          >
            <span>Join Us</span>
          </Button>

          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {ResponsiveList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Join Us</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
