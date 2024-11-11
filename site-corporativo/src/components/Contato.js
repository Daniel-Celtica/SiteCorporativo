const Contato = () => (

    <div className="flex-col pb-20 pt-10 ">

        <div className="flex mt-8 items-center">
            <span className="flex justify-center items-center  bg-aqua min-h-12 min-w-12 rounded-full">
                <i className={`fas fa-location-dot text-2xl text-white`} />
            </span>

            <p className="ml-4 text-xl text-gray-800">Avenida Afonso Pena 3924, sala 1303/1304, Belo Horizonte, Minas Gerais</p>
        </div>

        <div className="flex mt-8 items-center">
            <span className="flex justify-center items-center  bg-aqua min-h-12 min-w-12 rounded-full">
                <i className={`fas fa-phone text-2xl text-white`} />
            </span>

            <p className="ml-4 text-xl text-gray-800">+55 31 3646-5733</p>
        </div>

        <div className="flex mt-8 items-center">
            <span className="flex justify-center items-center  bg-aqua min-h-12 min-w-12 rounded-full">
                <i className={`fas fa-envelope text-2xl text-white`} />
            </span>

            <p className="ml-4 text-xl text-gray-800">contato@celtica.com.br</p>
        </div>


    </div>

);

export default Contato;
