import React, {  useState } from "react";
import Jogadoresdb from "../../Jogadoresdb";
import {FaWindowClose}  from "react-icons/fa";
import "./ModalAddJogador.css";
import "../formulario.css";

const ModalAddJogador = ({ onClose= () => {},idClube, idPosicao}) => {

    const [message, setMessage] = useState(" ");
    const [formValues, setFormValues] = useState({});
    const handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        console.log(name, value);
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        const { nome_jogador, descricao_jogador, imagem_jogador } = data;

        if(nome_jogador != "" && descricao_jogador != "" && imagem_jogador != "") {
            Jogadoresdb.makeRequest("http://localhost:3001/"+idClube+"/"+idPosicao+"/jogadores", "POST", JSON.stringify(formValues)).then(function(response) {
            response.text().then(function(message) {
                setMessage("Jogador(a) adicionado(a) com sucesso!");
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            }).catch(function(err) {
                setMessage("Ocorreu um erro:"+err);
            }).catch(function(err) {
                setMessage("Ocorreu um erro:"+err);
            }) 
        })
        } else {
            setMessage("Preencha todos os campos.");
        }
        
    };   
    return (
        // Modal Para adicionar um novo jogador
        <div className="modal-add-jogador">
            <div className="container">
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>            
            
                <div className="content">   
                        <div className="cabecalho"><h2> Inserir Jogador(a)</h2></div>
                        <div className="texto"><p>Insira novos jogadores a posição</p></div> 
                                
                    
                        <form className="formulario" onSubmit = {handleSubmit}>
                            <input type="text" name="nome_jogador" placeholder="Nome" onChange={handleInputChange} />
                            <textarea rows="4" cols="50" type="text" name="descricao_jogador" placeholder="Descrição" onChange={handleInputChange} />
                            <input type="text" name="imagem_jogador" placeholder="Link da Imagem" onChange={handleInputChange} />
                            <br></br>
                            <button type="submit">Enviar</button>
                        </form>
                        <h4 className="message">{message}</h4>                    
                </div>                              
            </div>
        </div>
    )
}
export default ModalAddJogador;