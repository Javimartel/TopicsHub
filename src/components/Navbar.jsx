import React from "react";
import { Navbar, MobileNav, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar, Card, IconButton } from "@material-tailwind/react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CgMediaPodcast } from "react-icons/cg";

// Context
import { FirebaseContext } from "../contexts/FirebaseContext";

// Elements
import Modal from "./home/Modal";


// Profile Dropdown Menu
const profileMenuItems = [{ label: "My Profile" }, { label: "Edit Profile" }, { label: "Inbox" }, { label: "Help" }];

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
        // <Button size="lg" className="items-center hidden gap-1 lg:flex lg:ml-auto selection:border-none" onClick={googleLogIn}> Join Us </Button>
        <Modal />
    );

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">

            {userElement}

            <MenuList className="p-1">
                {profileMenuItems.map(({ label }) => {
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded`}>
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
        title: "Github Repository",
        description:
            "Learn how was created TopicsHub and contribute to the project.",
    },
    {
        title: "Twitter",
        description:
            "Follow us on Twitter to stay up to date with the latest news.",
    },
    {
        title: "Linked In",
        description:
            "Follow us on Linked In if you want to know more about us",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const triggers = {
        onMouseEnter: () => setIsMenuOpen(true),
        onMouseLeave: () => setIsMenuOpen(false),
    };

    const renderItems = navListMenuItems.map(({ title, description }) => (
        <a href="#" key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
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
                        <MenuItem {...triggers} className="items-center hidden gap-2 text-blue-gray-900 lg:flex">
                            Pages
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList {...triggers} className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid" >
                    <Card color="blue" shadow={false} variant="gradient" className="grid w-full h-full col-span-3 rounded-md place-items-center">
                        <CgMediaPodcast size={120} />
                    </Card>
                    <ul className="flex flex-col w-full col-span-4 gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <Typography href="#" variant="paragraph" className="font-mono font-bold">
                <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                    Pages
                </MenuItem>
            </Typography>
            <ul className="flex flex-col w-full gap-1 ml-6 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

const navListItems = [{ label: "About", link: "/about" }, { label: "Contact" }];

function NavList() {
    return (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavListMenu />
            <Link to="/themes">
                <Typography variant="paragraph" color="blue-gray" className="font-mono font-bold">
                    <MenuItem>
                        Themes
                    </MenuItem>
                </Typography>
            </Link>
            {navListItems.map(({ label }) => (
                <Typography key={label} href="#" variant="paragraph" color="blue-gray" className="font-mono font-bold">
                    <MenuItem>
                        {label}
                    </MenuItem>
                </Typography>
            ))}

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
        <Navbar className="w-3/4 mx-auto mt-6 border-blue-50 max-w-[900px] min-w-[340px]">
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

            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar>
    );
}