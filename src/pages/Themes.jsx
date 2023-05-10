import React, { useContext, useEffect, useState, useRef, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { FirebaseContext } from "../contexts/FirebaseContext";

// Componentes
import Spinner from "../components/loaders/Spinner"
import Skeleton from "../components/loaders/Skeleton";

import Navbar from "../components/Navbar";
import { Input } from "@material-tailwind/react";
import Cards from "../components/cards/Cards";
import Footer from "../components/Footer";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function Themes() {
    const { user, getThemes, addTheme, uploadFileAndGetURL } = useContext(FirebaseContext);

    // Estados
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredThemes, setFilteredThemes] = useState([]);

    // Referencias a los inputs
    const temaRef = useRef();
    const descripcionRef = useRef();
    const categoriaRef = useRef();
    const imagenRef = useRef();
    const newRef = useRef();

    async function addNewTheme() {
        const tema = temaRef.current.value.trim();
        const descripcion = descripcionRef.current.value.trim();
        const categoria = categoriaRef.current.value.trim();
        const imagen = imagenRef.current.files[0];
        const newTheme = newRef.current.checked;

        // Subimos la imagen a Firebase Storage y obtenemos su URL
        const imagenURL = await uploadFileAndGetURL(imagen);

        const themeData = {
            name: tema,
            description: descripcion,
            category: categoria,
            img: imagenURL,
            new: newTheme
        };

        addTheme(themeData);

        // Limpiamos los inputs
        [temaRef, descripcionRef, categoriaRef, imagenRef, newRef].forEach(ref => ref.current.value = "");
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

    return (

        <>
            <main className="flex flex-col items-center">
                <Navbar />
                <div className="flex flex-col items-center mt-10 w-72"> 
                    <h1 className="m-3 text-3xl lg:text-4xl font-bold  text-gray-900">Topics</h1>
                    <Input variant="outlined" label="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>

                <div className="flex justify-center w-full">
                    {isLoading ? (
                        <div className="flex flex-wrap items-center justify-center w-4/5 gap-8 mt-12">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    ) : (
                        <div className="flex flex-wrap items-center justify-center w-full gap-8 mt-12">

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

                            {user?.isAdmin && (
                                <div>
                                    <label htmlFor="my-modal" className="h-full text-black bg-transparent border-transparent btn hover:text-gray-600 hover:bg-transparent hover:border-transparent">
                                        <BsPlusCircle size={100} />
                                    </label>

                                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="w-11/12 max-w-2xl modal-box">
                                            <label htmlFor="my-modal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                                            <div className="form-control">
                                                <h1 className="mb-5 text-xl text-center text-white">Nueva Temática</h1>
                                                <label className="flex justify-center w-full mb-5 input-group align-center">
                                                    <span className="w-[30%]">Tema</span>
                                                    <input ref={temaRef} type="text" className="w-[70%] input input-bordered" />
                                                </label>
                                                <label className="flex justify-center w-full mb-5 input-group align-center">
                                                    <span className="w-[30%]">Descripción</span>
                                                    <input ref={descripcionRef} type="text" className="w-[70%] input input-bordered" />
                                                </label>
                                                <label className="flex justify-center w-full mb-5 input-group align-center">
                                                    <span className="w-[30%]">Categoría</span>
                                                    <input ref={categoriaRef} type="text" className="w-[70%] input input-bordered" />
                                                </label>
                                                <label className="flex justify-center w-full mb-5 input-group align-center">
                                                    <span className="w-[30%]">Imagen</span>
                                                    <input ref={imagenRef} type="file" className="w-[70%] input input-bordered" />
                                                </label>
                                                <label className="flex justify-center mb-5 input-group align-center">
                                                    <span className="">
                                                        Nuevo chat
                                                        <input ref={newRef} type="checkbox" className="ml-3 input input-bordered" />
                                                    </span>
                                                </label>
                                                <div className="flex justify-center mt-2">
                                                    <label htmlFor="my-modal" className="mr-3 btn btn-error">Cancelar</label>
                                                    <label htmlFor="my-modal" onClick={addNewTheme} className="ml-3 btn btn-success">Añadir</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    )}
                </div>

                <div className="flex justify-center mt-12">
                    <div className="flex items-center">
                        <BsArrowLeft size={15} color="black" />
                        <div className="p-2 m-2 text-lg text-gray-900">
                            1
                        </div>
                        <BsArrowRight size={15} color="black" />

                    </div>
                </div>

                <Footer />
            </main >
        </>
    );
}

export default Themes;
