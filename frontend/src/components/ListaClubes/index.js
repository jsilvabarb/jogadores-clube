/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import ModalPosicoes from "../ModalPosicoes";
import "./ListaClubes.css";

export default ({clubes}) => {
   
   const [modalVisivel, setModalVisivel] = useState(false);

    return(
        <div className="lista-clubes">
           
            <div id={clubes.id} className="lista-clubes-item">
                <img src={clubes.imagem_clube}></img>
                <div className="descricao">
                    <h2>{clubes.nome_clube}</h2>
                    <h4>{clubes.descricao_clube}</h4>
                    <button  className="btn" onClick= {() => setModalVisivel(true)}>Ver Clube</button>
                    {modalVisivel ? <ModalPosicoes onClose={() => setModalVisivel(false)} idClube={clubes.id} nomeClube={clubes.nome_clube} descricao={clubes.descricao_clube} corUm={clubes.cor_clube_um} clubes={clubes}  imagemClube={clubes.imagem_clube} /> : null}
                                        
                </div>             
            </div>
            <hr></hr>    
        </div>
    )  
}