import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { FirebaseContext } from "../contexts/FirebaseContext";

// Componentes
import Spinner from "../components/loaders/Spinner"

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

        <>
            <main className="flex flex-col items-center">
                <Navbar />
                <div className="flex flex-col items-center mt-12 w-72">
                    <h1 className="m-3 text-3xl">Topics</h1>
                    <Input variant="outlined" label="Search" />
                </div>

                {/* <section className="flex flex-col w-full">
                    <div className="flex justify-center mt-12">
                        <div className="flex flex-wrap justify-center w-3/5 gap-5">
                            <Cards />
                        </div>
                    </div>
                </section> */}
                <div className="flex justify-center w-full">
                    {isLoading ? (
                        <div className="flex justify-center w-full h-screen">
                            <Spinner />
                        </div>
                    ) : (
                        <div className="flex flex-row justify-center items-center w-[50%] gap-5 mt-10">
                            {themes.map((theme) => (
                                <Link key={theme.id} to={`/chat/${theme.name}`}>
                                    <Cards
                                        name={theme.name}
                                        description={theme.description}
                                        category={theme.category}
                                        img={theme.img}
                                    />
                                </Link>
                            ))}

                            {user?.isAdmin && (
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
                                                <label className="input-group flex justify-center align-center mb-5">
                                                    <span className="">
                                                        Nuevo chat
                                                        <input ref={newRef} type="checkbox" className="ml-3 input input-bordered" />
                                                    </span>
                                                </label>
                                                <div className="flex justify-center mt-2">
                                                    <label htmlFor="my-modal" className="btn btn-error mr-3">Cancelar</label>
                                                    <label htmlFor="my-modal" onClick={addNewTheme} className="btn btn-success ml-3">Añadir</label>
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
                        <BsArrowLeft size={15} />
                        <div className="p-2 m-2 text-lg">
                            1
                        </div>
                        <BsArrowRight size={15} />

                    </div>
                </div>

                <Footer />
            </main >

            {/* <div className="flex flex-col items-center justify-center w-full h-screen">
                    <h1 className="text-3xl text-white">Temáticas</h1>
                    <h2 className="italic font-bold">Eliminar este botón cuando esté el Login creado</h2>
                    {user ? <LogOut /> : <SignIn />}
                    <Link to="/">Home</Link>
                    <div className="flex justify-center w-[50%]">
                        <Link to="/chat/Anime">
                            <CardAbout
                                theme="Anime"
                                description="Chat para hablar de anime y manga"
                                category="Entretenimiento"
                                img="https://t.ctcdn.com.br/-jRX-9m58XZ2bTM0qcuI-Pp0fI4=/340x265:1654x1005/720x405/smart/filters:format(webp)/i521747.jpeg"
                            />
                        </Link>
                        <Link to="/chat/Ropa">
                            <CardAbout
                                theme="Ropa"
                                description="Chat para hablar de moda y tendencias"
                                category="Moda"
                                img="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg"
                            />
                        </Link>
                </div> */}
        </>

    );
}

export default Themes;

{/* <div className="h-screen w-full flex flex-col justify-center items-center">
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
</div> */}