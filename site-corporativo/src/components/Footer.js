import { Button, Input, Textarea } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validação dos campos obrigatórios
        const newErrors = {};
        if (!formData.nome) newErrors.nome = "O nome é obrigatório";
        if (!formData.email) newErrors.email = "O e-mail é obrigatório";
        if (!formData.telefone) newErrors.telefone = "O telefone é obrigatório";
        if (!formData.mensagem) newErrors.mensagem = "A mensagem é obrigatória";
    
        setErrors(newErrors);
    
        // Enviar formulário se não houver erros
        if (Object.keys(newErrors).length === 0) {
          console.log("Formulário enviado com sucesso:", formData);
          // Insira aqui a lógica para envio do formulário
        }
      };

    return (

        <footer className="bg-gray-800 text-white text-center bg-fixed bg-parallax bg-cover parallax-section px-8 lg:px-64 flex flex-col">


            <div className="inline-flex flex-row justify-between py-10  flex-wrap">
                <div className=" flex flex-col space-y-8">
                    <div>
                        <Image src="/logo.svg" className="grayscale" height={179} width={179} alt="logo celtica" />
                    </div>
                    <div className="flex flex-row space-x-2">
                        <a className="h-8 w-8 border-2 rounded-full flex justify-center items-center" href="https://www.youtube.com/@celticabr">
                            <i className="fab fa-youtube text-1xl text-white" />
                        </a>

                        <a className="h-8 w-8 border-2 rounded-full flex justify-center items-center" href="https://www.facebook.com/celticabr/">
                            <i className="fab fa-facebook-f text-1xl text-white" />
                        </a>

                        <a className="h-8 w-8 border-2 rounded-full flex justify-center items-center" href="https://br.linkedin.com/company/celticabr">
                            <i className="fab fa-linkedin-in text-1xl text-white" />
                        </a>

                        <a className="h-8 w-8 border-2 rounded-full flex justify-center items-center" href="https://x.com/celtica">
                            <i className="fab fa-x-twitter text-1xl text-white" />
                        </a>
                    </div>


                </div>

                <form className="flex flex-col space-y-4 w-96" onSubmit={handleSubmit}>
                    <p className="flex mt-4">Contate-nos</p>
                    <Input className={`${errors.email ? "text-red-500" : ""}`} label="Nome *" color="white" icon={<i className="fas fa-user text-white" />} name="nome" value={formData.nome} onChange={handleChange} error={!!errors.nome}/>
                    <Input className={`${errors.email ? "text-red-500" : ""}`} label="E-mail *" color="white" icon={<i className="fas fa-envelope text-white" />} name="email" value={formData.email} onChange={handleChange} error={!!errors.email}/>
                    <Input className={`${errors.email ? "text-red-500" : ""}`} label="Telefone *" color="white" icon={<i className="fas fa-phone text-white" />} name="telefone" value={formData.telefone} onChange={handleChange} error={!!errors.telefone}/>
                    <Textarea className={`${errors.email ? "text-red-500" : ""}`} label="Mensagem *" color="white" name="mensagem" value={formData.mensagem} onChange={handleChange} error={!!errors.mensagem} />

                    <Button type="submit" className="bg-white text-black font-medium">Enviar</Button>
                </form>

            </div>

            <div className="border-t-2 border-gray-600 flex py-4">
                <p>&copy; Céltica - 2024. Todos os direitos reservados.</p>
            </div>

        </footer>

    )

};

export default Footer;