import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import FirebaseContext from "./contexts/FirebaseContext";

// Componentes
import CardAbout from "./CardAbout"
import Spinner from "./Spinner"
import SignIn from "./chat/LogIn";
import LogOut from "./chat/LogOut";

function Themes() {
    const { getUser, getThemes, addTheme, uploadFileAndGetURL } = useContext(FirebaseContext);
    const user = getUser();

    // Estados
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Referencias a los inputs
    const temaRef = useRef();
    const descripcionRef = useRef();
    const categoriaRef = useRef();
    const imagenRef = useRef();

    async function addNewTheme() {
        const tema = temaRef.current.value.trim();
        const descripcion = descripcionRef.current.value.trim();
        const categoria = categoriaRef.current.value.trim();
        const imagen = imagenRef.current.files[0];

        // Subimos la imagen a Firebase Storage y obtenemos su URL
        const imagenURL = await uploadFileAndGetURL(imagen);

        const themeData = {
            name: tema,
            description: descripcion,
            category: categoria,
            img: imagenURL,
        };

        addTheme(themeData);

        // Limpiamos los inputs
        [temaRef, descripcionRef, categoriaRef, imagenRef].forEach(ref => ref.current.value = "");
    }

    useEffect(() => {
        const unsubscribe = getThemes(themes => {
          setThemes(themes);
          setIsLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">Temáticas</h1>
            <h2 className="font-bold italic">Eliminar este botón cuando esté el Login creado</h2>
            {user ? <LogOut /> : <SignIn />}
            <Link to="/">Home</Link>
            <div className="flex justify-center w-full">
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="flex flex-row justify-center items-center w-[75%]">
                            {themes.map((theme) => (
                                <Link key={theme.id} to={`/chat/${theme.name}`}>
                                    <CardAbout
                                        name={theme.name}
                                        description={theme.description}
                                        category={theme.category}
                                        img={theme.img}
                                    />
                                </Link>
                            ))}
                            <div>
                                <label htmlFor="my-modal" className="h-full btn bg-transparent border-transparent text-black hover:text-gray-600 hover:bg-transparent hover:border-transparent">
                                    <BsPlusCircle size={100} />
                                </label>

                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box w-11/12 max-w-2xl">
                                        <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <div className="form-control">
                                            <h1 className="text-xl text-white text-center mb-5">Nueva Temática</h1>
                                            <label className="w-full input-group flex justify-center align-center mb-5">
                                                <span className="w-[30%]">Tema</span>
                                                <input ref={temaRef} type="text" className="w-[70%] input input-bordered" />
                                            </label>
                                            <label className="w-full input-group flex justify-center align-center mb-5">
                                                <span className="w-[30%]">Descripción</span>
                                                <input ref={descripcionRef} type="text" className="w-[70%] input input-bordered" />
                                            </label>
                                            <label className="w-full input-group flex justify-center align-center mb-5">
                                                <span className="w-[30%]">Categoría</span>
                                                <input ref={categoriaRef} type="text" className="w-[70%] input input-bordered" />
                                            </label>
                                            <label className="w-full input-group flex justify-center align-center mb-5">
                                                <span className="w-[30%]">Imagen</span>
                                                <input ref={imagenRef} type="file" className="w-[70%] input input-bordered" />
                                            </label>
                                            <div className="flex justify-center mt-2">
                                                <label htmlFor="my-modal" className="btn btn-error mr-3">Cancelar</label>
                                                <label htmlFor="my-modal" onClick={addNewTheme} className="btn btn-success ml-3">Añadir</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Themes;