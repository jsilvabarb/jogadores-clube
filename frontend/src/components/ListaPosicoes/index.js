import React, { useState } from "react";
import "./ListaPosicoes.css";
import ModalTime from "../ModalTime";

const ListaPosicoes = ({posicoes, idClube, descricao, corUm,corDois, nomeClube}) => {   

   const [modalVisivel, setModalVisivel] = useState(false);

    return(
        <div className="posicoes-area">
            <div className="posicoes-lista">                          
                <div id={posicoes.id} className="posicoes-lista-item">
                    
                     <button onClick={() => setModalVisivel(true)} className="posicao" style={{backgroundColor: corUm, color:"white"}}>
                        {posicoes.posicao} <br></br>
                        Entrar
                    </button>
                    
                    {modalVisivel ? <ModalTime onClose={() => setModalVisivel(false)} idClube={idClube} idPosicao={posicoes.id} nomeClube={nomeClube} descricao={descricao} corUm={corUm} corDois={corDois}
                     posicao={posicoes} /> : null} 
                                                                
                </div>                                
            </div>          
        </div>
    )  
}

export default ListaPosicoes;