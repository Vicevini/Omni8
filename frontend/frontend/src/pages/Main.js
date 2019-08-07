import React from 'react'; 

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

export default function Main({ match }){
  return (
    <div className="main-container">
      <img src = {logo} alt="tindev"/>
      <ul>
        <li>
          <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
          <footer>
            <strong>Filipe Deschamps </strong>
              <p>Programador e cantor de sertanejo.</p>   
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            <button type="button">
              <img src={like} alt="Like" />  
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}