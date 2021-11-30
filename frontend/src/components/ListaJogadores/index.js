import React, { useState } from 'react';
import {FaTrashAlt, FaEdit}  from "react-icons/fa";
import Jogadoresdb from "../../Jogadoresdb";
import ModalJogador from "../ModalJogador";
import ModalUpdate from "../ModalUpdate";
import './ListaJogadores.css';

const ListaJogadores = ({jogadores}) => {
const [message, setMessage] = useState(" ");
    const deleteJogador = (id) => {
        Jogadoresdb.makeRequest("http://localhost:3001/"+id+"/jogador", "DELETE").then(function(response) {
            response.json().then(function(message) {
                setMessage("Jogador deletado com sucesso!");
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            })
        })
    }
   

   const [modalVisivel, setModalVisivel] = useState(false);
   const [modalJogadorVisivel, setModalJogadorVisivel] = useState(false);

    return(
        <div className="jogadores-area">
            <div className="jogadores-lista">                          
                <div id={jogadores.id} className="jogadores-lista-item">
                {/* Listando os jogadores da mesma posição */}
                   <div className="card">                   
                         <div className="img">
                            <img onClick={() => {setModalJogadorVisivel(true)}} src={jogadores.imagem_jogador}></img>
                         </div>
                         {jogadores > 0}
                        <div class="up-del">
                            <button onClick={() => setModalVisivel(true)} className="update">
                            <FaEdit/>
                            </button>  
                            <button onClick={() => deleteJogador(jogadores.id)} className="delete">
                                <FaTrashAlt/>
                            </button>
                        </div> 
                   </div>

                    {modalJogadorVisivel?<ModalJogador onClose={() => setModalJogadorVisivel(false)} nomeJogador={jogadores.nome_jogador} descricaoJogador={jogadores.descricao_jogador} imagemJogador ={jogadores.imagem_jogador}/>:null}  

                    {/* Chamando o Modal com o forms para atualizar Jogador  */}
                    {modalVisivel ? <ModalUpdate onClose={() => setModalVisivel(false)} idJogador={jogadores.id} nomeJogador={jogadores.nome_jogador} descricaoJogador={jogadores.descricao_jogador} 
                    imagemJogador={jogadores.imagem_jogador} /> : null} 
                    {message}                                            
                </div>                                
            </div>          
        </div>
    )  
}

export default ListaJogadores;
