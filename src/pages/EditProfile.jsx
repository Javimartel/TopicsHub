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
    Button
} from "@material-tailwind/react";

const EditProfile = () => {
    const { user, loading, updateProfileWith } = React.useContext(FirebaseContext);
    const [isUpdating, setIsUpdating] = React.useState(false);
    const updateProfileFormRef = React.useRef(null);
    const [profilePicture, setProfilePicture] = React.useState(null);
    const [updateDone, setUpdateDone] = React.useState(false);

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
                setUpdateDone(true);
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
                    <div className="pt-5">
                        <Navbar />
                    </div>

                    <div className="flex justify-center w-full mt-12">
                        <Card color="transparent" shadow={false} className="flex items-center justify-center w-full ">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                                Edit <span className="text-blue-500">Profile</span>
                            </h1>
                            <p className="mt-2 text-center text-gray-900 dark:text-white">
                                Please fill out the form below to update your profile.
                            </p>
                            <form className="w-3/4 mt-10 mb-5" ref={updateProfileFormRef}>

                                {user.providerData[0].providerId !== "google.com" ? (
                                    <>
                                        <div className="flex flex-col items-center justify-center md:flex-row-reverse">
                                            <div className="flex items-center justify-center w-1/3 h-full">
                                                <ProfilePicture onPhotoChange={handleProfilePictureChange} />
                                            </div>

                                            <div className="flex flex-col h-full gap-4 mt-4 mb-2 md:w-1/3">
                                                <Input size="lg" label="Name" defaultValue={user.displayName} id="edit_name" className="bg-gray-900 dark:text-white" />
                                                <Input type="email" size="lg" label="Email" defaultValue={user.email} id="edit_email" className="dark:text-white" />
                                                <Input type="password" size="lg" label="Current Password" id="edit_password" className="dark:text-white" />
                                                <Input type="password" size="lg" label="New Password" id="edit_new_password" className="dark:text-white" />

                                            </div>

                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex justify-center h-full">
                                                <ProfilePicture onPhotoChange={handleProfilePictureChange} />
                                            </div>

                                            <div className="flex flex-col h-full gap-6 mt-4 mb-2">
                                                <Input size="lg" label="Name" defaultValue={user.displayName} id="edit_name" className="bg-gray-900 dark:text-white" />
                                            </div>

                                        </div>
                                    </>
                                )}

                                <div className="flex justify-center mt-5 mb-5">
                                    {user && isUpdating ? (
                                        <div className="flex justify-center w-full mt-12 mb-3">
                                            <FaSpinner className="animate-spin" color="blue" size={20} />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-center justify-center">
                                                <Button className="mt-5 mb-5" size="md" onClick={handleUpdate}>
                                                    Update
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {updateDone && (
                                    <div className="flex justify-center w-full mt-3 mb-3">
                                        <p className="text-xl font-bold text-green-800 dark:text-white">Profile updated successfully!</p>
                                    </div>
                                )}
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