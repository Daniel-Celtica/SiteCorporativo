const Pin = ({pins}) => (

    pins.map((pin, index) => (
        <div key={index} className="flex flex-col w-96 items-center max-w-60 lg:max-w-96">
            <div className="flex h-fit w-auto mt-8 p-[3px] bg-transparent group hover:bg-gray-800 rounded-full transition-all duration-300">
                <span className="flex justify-center items-center border-[6px] border-white bg-aqua h-24 w-24 rounded-full group-hover:bg-gray-800 transition-all duration-300">
                    <i className={`fas fa-${pin.icon} text-4xl text-white`} />
                </span>
            </div>
            <h3 className="text-xl">{pin.title}</h3>
            <p className="text-center">{pin.text}</p>
        </div>
    ))

);

export default Pin