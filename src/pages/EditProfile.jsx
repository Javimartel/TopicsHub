import React from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePicture from "../components/profile/ProfilePicture";
import { Navigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

const EditProfile = () => {
    const { user, loading, updateProfileWith } = React.useContext(FirebaseContext);
    const [isUpdating, setIsUpdating] = React.useState(false);
    const updateProfileFormRef = React.useRef(null);
    const [profilePicture, setProfilePicture] = React.useState(null);

    const handleProfilePictureChange = (preview) => {
        setProfilePicture(preview);
    };

    const handleUpdate = () => {
        const name = updateProfileFormRef.current["edit_name"].value;
        const email = updateProfileFormRef.current["edit_email"]?.value;
        const password = updateProfileFormRef.current["edit_password"]?.value;
        const newPassword = updateProfileFormRef.current["edit_new_password"]?.value;

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

            })
            .catch((error) => {
                setIsUpdating(false);
            });
    }

    return (
        <>
            {!user && !loading ? (
                <Navigate to="/404" />
            ) : (
                <>
                    <Navbar />

                    <div className="flex justify-center mt-20 w-full">
                        <Card color="transparent" shadow={false} className="w-full flex justify-center items-center">
                            <Typography variant="h4" color="blue-gray">
                                Edit Profile
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Please fill out the form below to update your profile.
                            </Typography>
                            <form className="mt-10 mb-5 w-3/4" ref={updateProfileFormRef}>

                                {user.providerData[0].providerId !== "google.com" ? (
                                    <>
                                        <div className="flex flex-col justify-center items-center md:flex-row-reverse">
                                            <div className="h-full flex justify-center items-center w-1/3">
                                                <ProfilePicture onPhotoChange={handleProfilePictureChange} />
                                            </div>

                                            <div className="mt-4 mb-2 flex flex-col gap-6 h-full md:w-1/3">
                                                <Input size="lg" label="Name" defaultValue={user.displayName} id="edit_name" />

                                                <Input type="email" size="lg" label="Email" defaultValue={user.email} id="edit_email" />
                                                <Input type="password" size="lg" label="Current Password" id="edit_password" />
                                                <Input type="password" size="lg" label="New Password" id="edit_new_password" />

                                            </div>

                                        </div>
                                    </>
                                ) : (
<>
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="h-full flex justify-center">
                                                <ProfilePicture onPhotoChange={handleProfilePictureChange} />
                                            </div>

                                            <div className="mt-4 mb-2 flex flex-col gap-6 h-full">
                                                <Input size="lg" label="Name" defaultValue={user.displayName} id="edit_name" />
                                            </div>

                                        </div>
                                    </>
                                )}

                                <div className="flex justify-center mb-5 mt-5">
                                    {user && isUpdating ? (
                                        <div className="w-full flex justify-center mt-12 mb-3">
                                            <FaSpinner className="animate-spin" color="blue" size={20} />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex justify-center items-center">
                                                <Button className="mt-5 mb-5" size="md" onClick={handleUpdate}>
                                                    Update
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </form>
                        </Card>
                    </div>

                    <Footer />
                </>
            )}
        </>
    );
};

export default EditProfile; 