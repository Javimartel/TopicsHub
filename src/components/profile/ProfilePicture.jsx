import React, { useContext, useState, useRef } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { Button } from "@material-tailwind/react";

const ProfilePicture = ({onPhotoChange}) => {
    const { auth } = useContext(FirebaseContext);
    const [photoPreview, setPhotoPreview] = useState(null);
    const photoInput = useRef(null);

    const handlePhotoChange = (event) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setPhotoPreview(e.target.result);
        };
        // Le pasamos la imagen al padre gracias al onPhotoChange
        onPhotoChange(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
    };

    return (
        <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
            <input
                type="file"
                className="hidden"
                ref={photoInput}
                onChange={handlePhotoChange}
            />
            <label
                htmlFor="photo"
                className="block text-gray-700 text-sm font-bold mb-2 text-center"
            >
                Profile Photo
            </label>
            <div className="text-center">
                <div className="mt-2" style={{ display: !photoPreview ? "block" : "none" }}>
                    <img
                        src={auth.currentUser.photoURL}
                        alt="Profile"
                        className="w-40 h-40 m-auto rounded-full shadow object-cover"
                    />
                </div>
                <div className="mt-2" style={{ display: photoPreview ? "block" : "none" }}>
                    <span
                        className="block w-40 h-40 rounded-full m-auto shadow"
                        style={{
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundImage: `url(${photoPreview})`,
                        }}
                    ></span>
                </div>
                <Button className="mt-5 mb-5 bg-gray-500" size="sm" onClick={() => photoInput.current.click()}>
                    Select New Photo
                </Button>
            </div>
        </div>
    );
}

export default ProfilePicture;
