import React from "react";
import { Link } from "react-router-dom";
import '../style.scss'

import { Canvas } from '@react-three/fiber'
import Experience from '../Experience'

export default function Start() {
  return (
    <>
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
    {/* <img className='ev114' src="https://i.ibb.co/BtKvqVY/1115logo.png"/> */}
    <div className='ev115' ><h1>CREATED BY DESIGNEV AKA VITALI PISANI 2023™</h1></div>
    <div className='ev116' ><h1>VITALIPISANI.COM</h1></div>
    <Link to="/page1">
      <button>Start</button>
    </Link>
    </>


   
  );
}
