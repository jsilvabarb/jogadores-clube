import {FaWindowClose}  from "react-icons/fa";
import { useEffect, useState } from "react";
import ListaJogadores from "../ListaJogadores";
import ModalAddJogador from '../ModalAddJogador';
import "./ModalTime.css";
import Jogadoresdb from "../../Jogadoresdb";


const ModalTime = ({id = "modal", onClose = () => {}, idClube, idPosicao, nomeClube, descricao, corUm, corDois, posicao} ) => {

    const handleOutsideClick = (e) => {
        console.log(e.target.id);
        if(e.target.id === id) onClose();
    }
    
     const [ listaJogadores, setListaJogadores ] = useState([{}]);
     const [modalVisivel, setModalVisivel] = useState(false);
     const [message, setMessage] = useState(" ");

    useEffect(() => {
        Jogadoresdb.makeRequest("http://localhost:3001/"+idClube+"/"+idPosicao+"/jogadores", "GET").then(function(response) {
         response.json().then(function(Jogadores) {
            setListaJogadores(Jogadores);
            if(Jogadores.length === 0) {
                setMessage("Adicione jogadores!");
            }
         })
        });    
    }, [])
    return (
        // Modal que exibe os jogadores de acordo com suas posições
        <div id={id} className="modal-jogadores" onClick={handleOutsideClick}>
           <div className="container">
                <button className="close" onClick={onClose} style={{color: corUm}}><h3><FaWindowClose/></h3></button>
                <nav class="nav" style={{backgroundColor: corUm}}> </nav>
                <nav class="nav-b" style={{backgroundColor: corDois}}> </nav>
                <nav class="nav-c" style={{backgroundColor: corUm}}> </nav>
                <div className="cabecalho"> 
                    <h2>{nomeClube}</h2>
                    {descricao}
                    <h3>Jogadores da posição {posicao.posicao} </h3>
                </div>                
                <div className="corpo">
                    
                    <div className="jogadores">
                        {listaJogadores.map((jogadores)=> (
                            <ListaJogadores idClube={idClube} idPosicao={idPosicao} descricao={descricao} corUm={corUm} jogadores= {jogadores}/>                          
                        ))}
                        
                        <h3 className="message">{message}</h3>
                    </div>
                       
                </div>
                <div className="rodape">
                    <button className="btn-add-jogador" onClick={() => setModalVisivel(true)}>+ Jogador</button>
                    {modalVisivel ? <ModalAddJogador onClose={() => setModalVisivel(false)} idClube={idClube} idPosicao={idPosicao} /> : null}
                </div>
           </div>
            
        </div>
    )
}

export default ModalTime;