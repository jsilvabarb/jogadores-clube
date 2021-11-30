import React, {  useState } from "react";
import Jogadoresdb from "../../Jogadoresdb";
import {FaWindowClose}  from "react-icons/fa";
import "./ModalAddPosicao.css";
import "../formulario.css";

const ModalAddPosicao = ({ onClose= () => {},idClube, nomeClube}) => {

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

        const { posicao } = data;

        if(posicao !== "") {
            Jogadoresdb.makeRequest('http://localhost:3001/'+idClube+'/posicao', "POST", JSON.stringify(formValues)).then(function(response) {
            response.text().then(function(message) {
                setMessage("Posicao adicionada com sucesso!");
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

        // Modal para adicionar novas posições a cada time
        <div className="modal-add-posicao">
            <div className="container">
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>
            
            
              <div className="content">   
                    <div className="cabecalho"><h2> Inserir Posição ao {nomeClube}</h2></div>
                    <div className="texto"><p>Insira novas posições ao clube!</p></div> 
                            
                
                    <form className="formulario" onSubmit = {handleSubmit}>
                        <input type="text" name="posicao" placeholder="Ex: Zagueiro(a),Goleiro(a), Meio de Campo..." onChange={handleInputChange} />
                        
                        <br></br>
                        <button type="submit">Enviar</button>
                    </form>
                    <h4 className="message">{message}</h4>                    
              </div>                              
            </div>
        </div>
    )
}
export default ModalAddPosicao;