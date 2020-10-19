import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Cabecera.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faSearch} from '@fortawesome/free-solid-svg-icons';
import InputBuscador from '../inputBuscador/InputBuscador'
import BotonesCabecera from '../BotonesCabecera/BotonesCabecera'

function Cabecera(){



    return (
      <div>
        <div className="cabecera">
            <img src={logo} className='logo'/>
            <BotonesCabecera />
            <InputBuscador />
            
        </div>

      </div>
    );       
  }
  
  
  export default Cabecera;
  