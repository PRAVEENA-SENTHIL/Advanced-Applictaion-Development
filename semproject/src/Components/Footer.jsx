import React from "react";
import { Link } from 'react-router-dom';
function Footer(){

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor:'#EEA5A6',padding: '200px',height:'40px',width:'1100px', borderRadius: '10px' }}>
      <ul >
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Help Care</a>
            </li>
            <li>
              <a href="#services">Mental Care</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
          
           
        </div>
      </div>
    );
}
export default Footer;