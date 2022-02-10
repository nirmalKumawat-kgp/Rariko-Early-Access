import React from "react";
import PropTypes from 'prop-types'


export default function Team_Members(props) {
  return (
    <div>
      <ul class="list-group list-group-flush text-center members" style={{minHeight:'200px', fontFamily: 'Roboto, sans-serif', marginBottom:'40px'}}>
        <li class="list-group-item"  style={{background:'#040508'}}>
            <img src={props.imageT}  style={{ borderRadius:'50%', width:'150px', height:'170px'}}/>
        </li>
        <li class="list-group-item" style={{background:'#040508'}}>
            <h5 style={{color:'white', fontWeight:'600'}}>{props.nameT}</h5></li>
        <li class="list-group-item" style={{color:'#ff0000', background:'#040508' }}><h5>{props.designation}</h5></li>
        <li class="list-group-item" style={{background:'#040508'}}>
            <a href={props.linkedin}><i className="fab fa-linkedin-in" style={{color:'white', border:'1px solid white', padding:'0.3rem', borderRadius:'50%'}}></i></a>
        </li>
      </ul>
    </div>
  );
}
