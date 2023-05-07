import React from "react";
import { Navbar, MobileNav, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar, Card, IconButton, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { CgMediaPodcast } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";

// Context
import { FirebaseContext } from "../contexts/FirebaseContext";

// Elements
import Modal from "./home/Modal";
import MobileModal from "./home/MobileModal";


// Profile Dropdown Menu
const profileMenuItems = [{ label: "Dark Mode" }, { label: "Edit Profile" }];

function ProfileMenu() {
    const { user, auth, googleLogIn, updateProfileWith } = React.useContext(FirebaseContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [isUpdating, setIsUpdating] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const userImg = user ? auth.currentUser.photoURL : "";
    const handleDialog = () => setIsDialogOpen(!isDialogOpen);
    const updateProfileFormRef = React.useRef(null);
    
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
    
    const handleUpdate = () => {
        const name = updateProfileFormRef.current["edit_name"].value;
        const email = updateProfileFormRef.current["edit_email"]?.value;
        const password = updateProfileFormRef.current["edit_password"]?.value;
        const newPassword = updateProfileFormRef.current["edit_new_password"]?.value;
        const profilePicture = updateProfileFormRef.current["edit_profile_picture"].files[0];

        if (password && !newPassword || !password && newPassword) {
            alert("Please enter both old and new password");
            return;
        }

        if (newPassword && newPassword.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        setIsUpdating(true);

        updateProfileWith(name, email, password, newPassword, profilePicture)
            .then(() => {
                setIsUpdating(false);
                handleDialog();
            })
            .catch((error) => {
                setIsUpdating(false);
            });
    }

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">

            {userElement}

            <MenuList className="p-1">
                {profileMenuItems.map(({ label }) => {
                    return (
                        label === "Edit Profile" ?
                            <MenuItem
                                key={label}
                                onClick={() => { closeMenu(); handleDialog(); }}
                                className={`flex items-center gap-2 rounded`}
                            >
                                <Typography as="span" variant="small" className="font-mono" color="inherit">
                                    {label}
                                </Typography>
                            </MenuItem>
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

            <Dialog open={isDialogOpen} handler={handleDialog} size="sm">
                <DialogHeader className="flex justify-center">
                    Edit profile
                </DialogHeader>
                <DialogBody divider>

                    {/* Eliminar esta comprobación ya que solo saldrá si está logeado */}
                    {user ? (
                        <form ref={updateProfileFormRef}>
                            <div className="flex flex-col items-center">
                                <div className="w-[75%] m-2">
                                    <Input type="text" label="Name" id="edit_name" className="w-full" defaultValue={user.displayName} />
                                </div>
                                {/* Si el usuario no está por Google mostramos esto  */}
                                {user.providerData[0].providerId !== "google.com" && (
                                    <>
                                        <div className="w-[75%] m-2">
                                            <Input type="email" label="Email" id="edit_email" className="w-full" defaultValue={user.email} />
                                        </div>
                                        <div className="w-[75%] m-2">
                                            <Input type="password" label="Current Password" id="edit_password" className="w-full" />
                                        </div>
                                        <div className="w-[75%] m-2">
                                            <Input type="password" label="New Password" id="edit_new_password" className="w-full" />
                                        </div>
                                    </>
                                )}
                                <div className="w-[75%] m-2">
                                    <Input type="file" label="Profile Picture" id="edit_profile_picture" className="w-full" />
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center">
                            <div className="w-[75%] m-2">No hay usuario</div>
                        </div>
                    )}

                </DialogBody>
                <DialogFooter>
                    {user && isUpdating ? (
                        <div className="w-full flex justify-center">
                            <FaSpinner className="animate-spin" color="blue" size={20} />
                        </div>
                    ) : (
                        <>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handleDialog}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>

                            <Button variant="gradient" color="blue" onClick={handleUpdate}>
                                <span>Confirm</span>
                            </Button>
                        </>
                    )}
                </DialogFooter>
            </Dialog>

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
                            Resources
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
                <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
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
    return (
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Link to="/themes">
                <Typography variant="paragraph" color="blue-gray" className="font-mono font-bold">
                    <MenuItem>
                        Themes
                    </MenuItem>
                </Typography>
            </Link>
            <Link to="/about">
                <Typography variant="paragraph" color="blue-gray" className="font-mono font-bold">
                    <MenuItem>
                    About
                    </MenuItem>
                </Typography>
            </Link>
            <Link to="/">
                <Typography variant="paragraph" color="blue-gray" className="font-mono font-bold">
                    <MenuItem>
                    Contact
                    </MenuItem>
                </Typography>
            </Link>
            <NavListMenu />
            <MobileModal />
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