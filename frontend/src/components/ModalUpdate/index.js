import {useState} from "react";
import {FaWindowClose}  from "react-icons/fa";
import Jogadoresdb from "../../Jogadoresdb";
import "./ModalUpdate.css";
import "../formulario.css";

const ModalUpdate = ({onClose = () => {}, idJogador, nomeJogador, descricaoJogador, imagemJogador}) => {

    const [message, setMessage] = useState(" ");
    const [formValues, setFormValues] = useState({nome_jogador: nomeJogador, descricao_jogador: descricaoJogador, imagem_jogador:imagemJogador});

    // Controle de mudanças no input
    const handleInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        console.log(name, value);
        setFormValues({...formValues, [name]: value})
    }

    // Tratamendo do evento para enviar para o banco
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        
        const { nome_jogador, descricao_jogador, imagem_jogador } = data;

        if(nome_jogador !=="" && descricao_jogador !== "" && imagem_jogador !== "") {
            Jogadoresdb.makeRequest("http://localhost:3001/"+idJogador+"/jogador", "PUT", JSON.stringify(formValues)).then(function(response) {
                response.text().then(function(message) {
                setMessage("Jogador atualizado com sucesso!");

                // eslint-disable-next-line no-restricted-globals
                location.reload();
                }).catch(function(err) {
                setMessage("Ocorreu um erro:"+err);
                })
            })
        } else {
            setMessage("Preencha todos os campos.");
        }        
    };    

    return (

        // Modal com formulário de atualização do jogador
        <div className="modal-update-jogador">
            <div className="container">
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>

                <h2>Atualizar Jogador(a)</h2>

                <div className="content">                      
            <form className="formulario" onSubmit = {handleSubmit}>
                <label><small>Nome</small></label>
                <input type="text" name="nome_jogador" placeholder="Nome" onChange={handleInputChange} value={formValues.nome_jogador} />
                <label><small>Descrição:</small></label>

                <textarea rows="4" cols="50"  type="text" name="descricao_jogador" placeholder="Descrição" 
                onChange={handleInputChange} value={formValues.descricao_jogador} />

                <label><small>Link da Imagem:</small></label>
                <input  type="text" name="imagem_jogador" placeholder="Link da Imagem" onChange={handleInputChange} 
                value={formValues.imagem_jogador} />
                <br></br>
                <button type="submit"> Enviar </button>
            </form>
            <h4 className="message">{message}</h4>     
         </div>                              
            </div>
        </div>        
    )
}

export default ModalUpdate;
