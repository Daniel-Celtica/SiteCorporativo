const Servicos = () => (

    <div className="flex space-y-40">
        <i key={subsection.Title} className={`fas fa-${subsection.Icon} text-2xl`} />
        <p className="text-3xl font-bold text-gray-800">{subsection.Icon}</p>
    </div>

);

export default Servicos;