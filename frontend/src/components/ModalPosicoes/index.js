import {FaWindowClose}  from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ListaPosicoes from '../ListaPosicoes';
import ModalAddPosicao from '../ModalAddPosicao';
import "./ModalPosicoes.css";
import Jogadoresdb from '../../Jogadoresdb';

const ModalPosicoes = ({id = "modal", onClose = () => {}, idClube, nomeClube, descricao, corUm, corDois, imagemClube, clubes, posicao} ) => {

    console.log("Color..."+corUm)
    const handleOutsideClick = (e) => {
        console.log(e.target.id);
        if(e.target.id === id) onClose();
    }
    
     const [ listaPosicoes, setListaPosicoes ] = useState([{}]);
     const [modalVisivel, setModalVisivel] = useState(false);
     const [message, setMessage] = useState(" ");

    

    useEffect(() => {
        Jogadoresdb.makeRequest("http://localhost:3001/"+idClube+"/posicoes", "GET").then(function(response) {
         response.json().then(function(Posicoes) {
            setListaPosicoes(Posicoes);
            if(Posicoes.length === 0) {
                setMessage("Adicione posições ao clube!");
            }
         })
        });  
    }, [])
     
    return (
        // Modal com as posições para o jagador escolher
        <div id={id} className="modal-posicoes" onClick={handleOutsideClick}>
           <div className="container" >
                <button className="close" style={{color: clubes.cor_clube_um}} onClick={onClose}><h3><FaWindowClose/></h3></button>
                <nav class="nav" style={{backgroundColor: clubes.cor_clube_um}}> </nav>
                <nav class="nav-b" style={{backgroundColor: clubes.cor_clube_dois}}> </nav>
                <nav class="nav-c" style={{backgroundColor: clubes.cor_clube_um}}> </nav>
                <div className="cabecalho"> 
                    <div className="top">
                        <img src={imagemClube}></img>
                        <div className="top-titulo">
                            <h2>{nomeClube}</h2>
                            <small>{descricao}</small>
                        </div>
                    </div>
                    <h2>Escolha uma posição</h2>
                </div>                
                <div className="corpo">
                    
                    <div className="posicoes">
                        {listaPosicoes.map((posicoes)=> (
                            <ListaPosicoes idClube={idClube} descricao={descricao} corUm={corUm} corDois={clubes.cor_clube_dois} posicoes= {posicoes} nomeClube={nomeClube}/>
                            
                        ))}
                        
                        <h3 className="message">{message}</h3>
                    </div>
                       
                </div>
                <div className="rodape">
                    <button className="btn-add-posicao" onClick={() => setModalVisivel(true)}>+ Posição</button>
                    {modalVisivel ? <ModalAddPosicao onClose={() => setModalVisivel(false)} idClube={idClube} nomeClube={nomeClube} /> : null}
                </div>
           </div>
            
        </div>
    )
}

export default ModalPosicoes;