import React from "react";
import { Navbar, MobileNav, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar, Card, IconButton, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";

// Context
import { FirebaseContext } from "../contexts/FirebaseContext";

// Elements
import Modal from "./home/Modal";
import MobileModal from "./home/MobileModal";


// Profile Dropdown Menu
const profileMenuItems = [{ label: "Dark Mode" }, { label: "Edit Profile" }];

function ProfileMenu() {
    const { user, auth, googleLogIn } = React.useContext(FirebaseContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const userImg = user ? auth.currentUser.photoURL : "";

    const userElement = user ? (
        <MenuHandler>
            <Button variant="text" color="blue-gray" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto selection:border-none" >
                <Avatar
                    variant="circular"
                    size="md"
                    alt=""
                    className="border border-blue-500 p-0.5"
                    src={userImg} />
            </Button>
        </MenuHandler>
    ) : (
        <Modal />
    );

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">

            {userElement}

            <MenuList className="p-1">
                {profileMenuItems.map(({ label }) => {
                    return (
                        label === "Edit Profile" ?
                            <Link to="/edit-profile" key={label}>
                                <MenuItem
                                    key={label}
                                    className={`flex items-center gap-2 rounded`}
                                >
                                    <Typography as="span" variant="small" className="font-mono" color="inherit">
                                        {label}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            :
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded`}
                            >
                                <Typography as="span" variant="small" className="font-mono" color="inherit">
                                    {label}
                                </Typography>
                            </MenuItem>
                    );
                })}

                {user ? (
                    <MenuItem
                        key="Log Out"
                        onClick={() => auth.signOut()}
                        className={`flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"}`}>
                        <Typography as="span" variant="small" className="font-mono" color="red" >
                            Log Out
                        </Typography>
                    </MenuItem>
                ) : (
                    <MenuItem
                        key="Log In"
                        onClick={googleLogIn}
                        className={`flex items-center gap-2 rounded "hover:bg-green-500/10 focus:bg-green-500/10 active:bg-green-500/10"}`}>
                        <Typography as="span" variant="small" className="font-mono" color="green" >
                            Log In
                        </Typography>
                    </MenuItem>
                )}
            </MenuList>

        </Menu>

    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "Github",
        description:
            "Learn how was created TopicsHub and contribute to the project.",
        link: "https://github.com/Javimartel/TopicsHub"
    },
    {
        title: "PHPLover's LinkedIn",
        description:
            "Follow us on Twitter to stay up to date with the latest news.",
        link: "https://www.linkedin.com/in/mario-pérez-marrero-3a5690220/"
    },
    {
        title: "Javier's LinkedIn",
        description:
            "Follow us on Linked In if you want to know more about us",
        link: "https://www.linkedin.com/in/javimartel/"
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
    };

    const renderItems = navListMenuItems.map(({ title, description, link }) => (
        <a href={link} target="_blank" key={title}>
            <MenuItem>
                <Typography className="mb-1 font-mono text-gray-900 font-bold">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-mono font-semibold">
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography href="#" variant="paragraph" className="font-mono font-bold">
                        <MenuItem {...triggers} className="pb-1.5 hidden text-blue-gray-900 lg:flex text-lg">
                            <div>
                                Resources
                            </div>
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList {...triggers} className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid" >
                    <Card shadow={false} variant="gradient" className="grid w-full h-full col-span-3 rounded-md place-items-center">
                        <img src="/images/logo.png" alt="" />
                    </Card>
                    <ul className="flex flex-col w-full col-span-4 gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <Typography href="#" variant="paragraph" className="font-mono font-bold">
                <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden text-lg">
                    Resources
                </MenuItem>
            </Typography>
            <ul className="flex flex-col w-full gap-1 ml-4 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}


function NavList() {
    const { user } = React.useContext(FirebaseContext)

    return (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Link to="/themes">
                <Typography color="blue-gray" className="font-mono font-bold text-lg">
                    <MenuItem>
                        Themes
                    </MenuItem>
                </Typography>
            </Link>
            <Link to="/about">
                <Typography color="blue-gray" className="font-mono font-bold text-lg">
                    <MenuItem>
                        About
                    </MenuItem>
                </Typography>
            </Link>
            <Link to="/">
                <Typography color="blue-gray" className="font-mono font-bold text-lg">
                    <MenuItem>
                        Contact
                    </MenuItem>
                </Typography>
            </Link>
            <NavListMenu />
            {!user && (
                <MobileModal />
            )}
        </ul>
    );
}

export default function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="w-3/4 mx-auto mt-6 border-blue-50 max-w-[900px] min-w-[440px] lg:min-w-[800px]">
            <div className="relative flex items-center mx-auto text-blue-gray-900">
                <Link to={"/"} className="pl-4 text-2xl font-extrabold">
                    <img src="/images/logo.png" alt="logo" className="w-10 scale-[2.3]" />
                </Link>
                <div className="absolute hidden top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:block">
                    <NavList />
                </div>
                <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className="ml-auto mr-2 lg:hidden" >
                    <FcMenu className="w-6 h-6" />
                </IconButton>
                <ProfileMenu />
            </div>

            <MobileNav open={isNavOpen}>
                <NavList />
            </MobileNav>
        </Navbar>
    );
}