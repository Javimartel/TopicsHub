import React, { useContext, useEffect, useState, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../contexts/FirebaseContext";

// Componentes
import Spinner from "../components/loaders/Spinner"
import Skeleton from "../components/loaders/Skeleton";

import Navbar from "../components/Navbar";
import Cards from "../components/cards/Cards";
import Footer from "../components/Footer";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Checkbox } from "@material-tailwind/react";

function Themes() {
    const { user, getThemes, addTheme, uploadFileAndGetURL } = useContext(FirebaseContext);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const handleDialog = () => setIsDialogOpen(!isDialogOpen);

    // Estados
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredThemes, setFilteredThemes] = useState([]);

    // Referencia al formulario de agregar tema
    const addFormRef = useRef(null);

    async function addNewTheme() {
        const theme = addFormRef.current["add_theme"].value;
        const description = addFormRef.current["add_description"].value;
        const category = addFormRef.current["add_category"].value;
        const image = addFormRef.current["add_image"].files[0];
        const newTheme = addFormRef.current["add_new"].checked;

        if (!theme || !description || !category || !image) {
            alert("Please fill all the fields");
            return;
        }

        // Subimos la imagen a Firebase Storage y obtenemos su URL
        const imageURL = await uploadFileAndGetURL(image);

        const themeData = {
            name: theme,
            description: description,
            category: category,
            img: imageURL,
            new: newTheme
        };

        addTheme(themeData);

        // Cerramos el modal
        handleDialog();
        // Limpiamos el formulario
        addFormRef.current.reset();
    }

    // Obtenemos los temas
    useEffect(() => {
        const unsubscribe = getThemes(themes => {
            setThemes(themes);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Filtramos los temas por nombre
    const memoizedFilteredThemes = useMemo(() => {
        return themes.filter(theme =>
            theme.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, themes]);

    // Delay para que no se haga un renderizado por cada tecla presionada
    const delayedSetFilteredThemes = useCallback(
        (filtered) => {
            const timeoutId = setTimeout(() => {
                setFilteredThemes(filtered);
                setIsLoading(false);
            }, 500);
            return () => clearTimeout(timeoutId);
        },
        []
    );

    // Actualizamos el estado de los temas filtrados
    useEffect(() => {
        return delayedSetFilteredThemes(memoizedFilteredThemes);
    }, [delayedSetFilteredThemes, memoizedFilteredThemes]);


    // Paginación Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem("dark-mode");
        return savedDarkMode ? true : false;
    });

    let setColor = "";

    useEffect(() => {
        if (isDarkMode) {
            setColor = "white";
        }
        else {
            setColor = "black";
        }
    }, [isDarkMode]);

    return (
        <>
            <div className="pt-5">
                <Navbar />
            </div>
            <main className="flex flex-col items-center">
                <div className="flex flex-col items-center mt-12 w-72">
                    <h1 className="m-3 text-4xl font-bold text-gray-900 dark:text-white">Topics</h1>
                    <Input variant="outlined" label="Search" onChange={(e) => setSearchTerm(e.target.value)} className="dark:text-white" />
                </div>

                {/* Si el usuario es admin puede añadir temas */}
                {user?.isAdmin && (
                    <>
                        <Button onClick={handleDialog} className="mt-5 dark:bg-[#1f2937] dark:hover:bg-white dark:hover:text-[#1f2937] dark:shadow-sm border">Add Theme</Button>

                        <Dialog open={isDialogOpen} handler={handleDialog} size="sm" className="dark:bg-gray-800">
                            <DialogHeader className="flex justify-center text-gray-900 dark:text-gray-200 ">
                                Add new theme
                            </DialogHeader>
                            <DialogBody divider>
                                <form ref={addFormRef}> 
                                    <div className="flex flex-col items-center">
                                        <div className="w-2/3 gap-5 m-2">
                                            <div className="mb-5">
                                                <Input type="text" label="Theme" id="add_theme" className="dark:text-white " />
                                            </div>
                                            <div className="mt-5">
                                                <Input type="text" label="Description" id="add_description" className="dark:text-white"/>
                                            </div>
                                            <div className="mt-5">
                                                <Input type="text" label="Category" id="add_category" className="dark:text-white"/>
                                            </div>
                                            <div className="mt-5">
                                                <Input type="file" label="Image" id="add_image" className="dark:text-white" />
                                            </div>
                                            <div className="flex items-center justify-center mt-5">
                                                <Checkbox id="add_new" className="dark:text-white" />
                                                <p className="font-mono dark:text-white">Check as new</p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </DialogBody>
                            <DialogFooter>
                                <div className="flex justify-center w-full">
                                    <Button variant="text" color="red" onClick={handleDialog} className="mr-1">
                                        <span>Cancel</span>
                                    </Button>
                                    <Button variant="gradient" color="blue" onClick={addNewTheme}>
                                        <span>Add</span>
                                    </Button>
                                </div>
                            </DialogFooter>
                        </Dialog>

                    </>
                )}

                <div className="flex justify-center w-full">
                    {isLoading ? (
                        <div className="flex flex-wrap items-center justify-center w-4/5 gap-10 mt-12">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    ) : (
                        <div className="flex flex-wrap items-center justify-center w-4/5 gap-10 mt-12">

                            {/* Comprueba si hay temas con el nombre dado */}
                            {filteredThemes.length === 0 ? (
                                <div className="flex flex-col justify-center items-center w-full h-[35vh]">
                                    <h1 className="text-2xl">No se encontraron resultados</h1>
                                </div>
                            ) : (
                                filteredThemes.map((theme) => (
                                    <Link key={theme.id} to={`/chat/${theme.name}`}>
                                        <Cards
                                            name={theme.name}
                                            description={theme.description}
                                            category={theme.category}
                                            img={theme.img}
                                            new={theme.new}
                                        />
                                    </Link>
                                ))
                            )}

                        </div>
                    )}
                </div>

                <div className="flex justify-center mt-12">
                    <div className="flex items-center ">
                        <BsArrowLeft size={20} color={setColor} />
                        <div className="p-2 m-2 text-gray-900 text-md dark:text-white lg:text-lg">
                            1
                        </div>
                        <BsArrowRight size={20} color={setColor} />
                    </div>
                </div>

                <Footer />
            </main >
        </>
    );
}

export default Themes;
