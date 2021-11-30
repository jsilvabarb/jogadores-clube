import React from "react";
import {FaWindowClose}  from "react-icons/fa";
import "./ModalJogador.css";

const ModalJogador  = ({id = "modal", onClose = () => {}, nomeJogador, descricaoJogador, imagemJogador} ) => {

    const handleOutsideClick = (e) => {
        console.log(e.target.id);
        if(e.target.id === id) onClose();
    }   
    return (
        // Modal para visualizar detalhes de cada jogador
        <div id={id} className="modal-detalhes-jogador" onClick={handleOutsideClick}>
            
           <div className="container" >
                <button className="close" onClick={onClose}><h3><FaWindowClose/></h3></button>
                <div className="cabecalho"> 
                    <img src={imagemJogador}></img>
                    <div clasName="nome-buttons">
                        <h2 style={{color:"#000"}}>{nomeJogador}</h2>
                    </div>
                </div>                
                <div className="detalhes-corpo">
                    <h2>Descrição</h2>
                    <p>{descricaoJogador}</p>  
                </div>
           </div>            
        </div>
    )
}

export default ModalJogador;