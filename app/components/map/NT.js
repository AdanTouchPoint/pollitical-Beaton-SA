// components/MapaAustralia.js
"use client"
import React from 'react';
import "./css/map.css"

const NT = ({setShowModal, setStates, setModalText,setMousePosition}) => {
  const click = (e) => {
    e.preventDefault();
    setStates(e.target.dataset.name)
    setModalText({
      title: 'Attention',
      message:`${e.target.dataset.name}`,
      button: 'Close'
    })
    console.log(e.target.dataset.name)
    setMousePosition({ x: e.clientX - 100, y: e.clientY })
    setShowModal(true)
  };

return (
<svg className='green' version="1.2" viewBox="0 0 1000 1222" xmlns="http://www.w3.org/2000/svg" onClick={click} cursor={"pointer"}>

 <path className='green-path' d="M514.7 145l-0.6 0.9-0.2-0.2-0.3-0.2-0.3-0.2-0.2-0.4-0.1-0.4 0.2-0.5 0.3-0.3 0.4-0.1 0.3-0.3 0.1 0.4 0.3 0.2 0.3 0.1 0.2 0.2-0.1 0.4-0.3 0.4z m2.3-2.2l0.3 0.3 0.4 0.3 0.1 0.4-0.3 0.1-0.2 0-0.2-0.4-0.2 0-0.3 0-0.1 0.2 0.3 0.5 0.1 0.2-0.1 0.2-0.4 0.3-0.4 0.3-0.3 0.1-0.2-0.2 0.1-0.5 0.1-0.5 0.1-0.5-0.3-0.6 0.4-0.1 0.8 0.1 0.3-0.2z m4.2-1.1l0.5 0.1 0.1 0.2 0.1 0.5 0.4 0.3 0.3-0.2 0.1-0.1 0.1 0.5 0.3 0.1 0 0.8 0 0.8 0 0.4-0.1 0.2 0 0.2 0.4 0.1 0.2 0.2-0.1 0.7-0.2 0.4-0.4 0.5-0.6-0.2-0.1-0.4 0-0.3-0.2-0.2-0.2-0.1-0.3 0-0.2-0.1-0.3-0.8 0-0.2 0-0.5-0.1-0.2-0.1 0-0.2 0-0.3 0-0.1 0.4-0.2 0-0.1-0.2 0.1-0.5 0-0.3 0.1-0.4 0.2-0.2 0.2-0.4 0.3 0.4 0.2 0.1 0.1 0-0.2-0.6 0.3-0.1 0.1-0.4-0.1-0.5z m-7 0.1l0.2 0.2 0 0.2-0.2-0.1-0.2 0.1-0.2-0.1-0.1-0.2 0.2-0.1 0.3 0z m3.6-0.6l0 0.2-0.1 0.1-0.3-0.1-0.2 0.1-0.4-0.2-0.2 0.2-0.1-0.1 0.2-0.3 0.4-0.1 0.7-0.1 0 0.3z m-5.1 1l-0.3 0.5-0.2-0.1-0.4 0.1-0.3-0.2-0.1 0.2-0.1 0.1-0.4 0-0.2-0.1-0.2-0.2 0.2-0.1 0.1-0.3-0.1-0.3-0.2-0.2 0.4-0.3 0.2-0.3 0-0.3-0.1-0.2 0.1-0.1 0.4 0 0.4-0.2 0.5-0.2 0.3 0 0.3 0.5-0.3 0.6 0 1.1z m5.6 0.3l-0.2 0.2-0.1-0.1-0.1-0.2 0.1-0.1-0.2-0.4 0.2-0.2 0.2-0.3 0-0.3-0.3-0.2 0.1-0.4 0.2-0.4 0.3-0.3 0.3-0.2-0.2 0.6 0.1 0.4 0.4 1-0.3 0.1-0.2 0.1-0.1 0.3 0.1 0.3-0.3 0.1z m-23.7-16.5l0 0.2-0.4 0-0.4-0.1-0.4 0.4-0.3-0.1-0.1-0.1 0.2-0.2 0.1-0.2 0.3-0.1 0.1-0.3 0-0.2-0.2 0-0.1-0.1 0.2-0.1 0.1-0.2 0.1-0.2 0.5 0.1 0.2 0.3 0.2 0.4-0.1 0.5z m-132.4-0.4l-0.2 0.1-0.3-0.2-0.1-0.2-0.4-0.5-0.1-0.2-0.1-0.4 0.1-0.1 0.5 0.3 0.2 0.1 0.2 0.3 0.1 0.2 0.1 0.3 0 0.3z m2.1-1.4l-0.3 0.1-0.4-0.1-0.4-0.3-0.2-0.2 0.2 0 0.5 0.1 0.5 0.2 0.1 0.2z m-3.1 2.2l0 1-0.1-0.2-0.1-0.2-0.2-0.1-0.3-0.5-0.5-1.1-0.3-0.5-0.3-0.8-0.1-0.1 0.1-0.2 0.2 0 0.2 0.1 0.2 0.1 1 1.4 0.2 0.5 0 0.6z m146.3-23.7l-0.4 0-0.2-0.2 0.1-0.2 0.4-0.4 0.3 0 0 0.5-0.2 0.3z m3.4-1.5l-0.2 0.1-0.1 0-0.8-0.9 0-0.3 0.2-0.3 0.6-0.1 0-0.2 0-0.1 0.2 0 0.4 0.3 0.1 0.6-0.2 0.2 0.1 0.3-0.1 0.2-0.2 0.2z m-5.1-1l-0.3 0.1-0.2 0-0.2 0.1-0.1 0.3 0.3 0 0.2 0.2 0.1 0.3 0.2 0.3-0.4 0-0.2 0.3-0.1 0.4-0.1 0.3-0.2 0.2-0.3 0.1-0.3 0.1-0.2-0.1 0.1-0.1 0.1-0.4 0.1-0.1-0.2-0.3-0.4-0.8-0.2-0.2-0.5 0.1 0 0.5 0.1 0.6 0 0.4-0.7-0.3-0.2-0.2 0-2 0.8 0.3 0.3 0.1 0.1-0.4 0.1-0.4 0.2-0.5 0.2-0.3 0.4-0.2 0.2 0 0.3 0.1 0.3 0.1 0.1 0.2 0.1 0.2 0.2 0.2 0.3 0.1 0.1 0.1 0.1 0.5-0.2 0.1z m9.6-1.1l-0.2 0.5-0.7 0.3-0.1 0.2-0.1 0.3 0.1 0.2 0.3 0.2 0.2 0 0.5 0.1-0.1 0.1-0.4 0.5 0.2 0.3 0.1 0.3 0 0.2 0.3 0.2 0.3 0.1 1.1 0.2 0.4 0 0.3-0.2 0.2-0.4 0.1-0.3 0-0.2-0.2-0.1-0.1 0 0-0.1 0.3-1 0.3 0.2 0.7-0.1 0.3 0.1 0.2 0.2 0.1 0.3 0.2 0.3 0 0.3-0.2 0.2-0.6 0.7-0.3 0.3-0.4 1.2-0.7-0.2-0.7 0.3-0.5 0.6-0.2 0.7 0.1 0.4 0.2 0.2 0.2 0.1 0.3 0.2 0.2 0.1 0.1 0.2-0.3 0.1-0.2 0-0.1 0.2 0 0.2-0.4-0.2-0.2 0.2-0.1 0.2 0.1 0.4-0.3-0.3-0.2-0.1-0.3 0-0.3 0.2 0.2 0.3-0.1 0.3-0.1 0.6 0.3 0.9 0 0.3 0.2 0.1 0.2 0.1 0.4 0.1 0.6-0.1 0-0.2 0-0.3 0.2-0.4 0.4 0.3 1.4 1.1 0.2 0 0.2-0.3 0.3-0.4 0.2-0.3 0-0.4 0.2 0 0.2 0.2 0.3 0 0.4-0.1 0.3-0.1-0.2 0.2-0.2 0.2-0.2 0.4-0.1 0-0.2 0 0 0.1 0 0.2 0.1 0.4 0.2 0.2 0.1 0.2-0.1 0.1-0.2 0.1-0.1 0.3 0.1 0.3 0.2 0.2-0.3-0.1-0.1 0.1 0 0.1-0.4 0-0.2 0.1-0.1 0.3-0.7-0.4-0.4-0.1-0.3 0.2-0.3-0.3-0.4-0.1-0.9-0.1-0.4-0.1-0.2-0.1-0.3 0.1-0.9 0.6-0.9-0.1-3.8-1.5-0.1 0-0.4-0.4-0.3 0-0.2 0-0.8 0.2-0.5 0.4-0.6 0.2-0.1-0.1 0.1-0.3 0.2-0.1 0.5-0.3 0.2-0.2 0.6-0.3 0.3-0.2 0.2-0.6 0.2-0.2 0.2-0.2-0.1-0.2-0.3-0.5-0.1-0.7-0.1-1.3 0-0.8 0.3-1.2 0.1-0.7-0.1-0.3-0.2-0.4-0.2-0.3 0.1-0.3 0.3-0.2 0.3 0.1 0.6 0.5 0.1-0.1 0.9 0 0.3-0.3-0.2-0.3 0.3-0.5 0.1 0.1 0.3 0.5 0.2 0.2 0.3-0.5 0.1 0.1 0.4 0.2 0-0.6 0.3 0.2 0.3-0.1 0.1-0.3-0.3-0.2-0.1 0.1-0.1-0.4-0.1-0.3-0.2-0.3-0.4 0 0.2-0.3 0-0.2-0.1-0.1-0.2-0.1 0.1-0.2 0.2-0.1 0.4 0 0.3 0.1 0.1 0.1-0.1 0.5 0.1 0.1 0.1 0 0.3-0.4 0.1 0 0.3 0.1 0.4-0.6 0.1-0.3 0.1-0.1 0.5 0 0.2-0.2 0.2 0.3 0 0.5z m5-1.3l-0.1 0.2-0.2 0.1-0.4 0.2 0-0.3 0.3-0.1 0 0.1 0.2-0.2 0.2-0.1 0 0.1z m-18.3-3.6l-0.1 0.2-0.1 0-0.2 0-0.3 0.1-0.1-0.1 0-0.1 0.1-0.2 0-0.2 0.1-0.2 0.1 0.2 0.2 0.1 0.2 0.1 0.1 0.1z m1.9-0.2l0.1 0.1-0.1 0.4-0.6-0.5 0 0.5-0.3-0.1 0 0.3 0.1 0.6-0.3 0.5-0.1 0.5-0.3-0.3 0.1-0.3 0.3-0.4-0.1-0.3-0.2-0.1-0.2-0.5 0.3-0.9-0.1-0.6-0.2-0.3-0.1-0.4-0.5-0.3 0.5 0 0.3 0.6 0.3 0 0.3 0.5 0.6 0.9 0.2 0.1z m-133.4-7.1l0.1 0.3 0.4-0.1 0.5 0.3 0.2 0.4-0.4 0.1-0.3 0.1-0.3-0.1-0.4 0 0-0.8 0.1-0.8 0.1 0.1 0 0.5z m7.9-11l-0.2 0.1-0.2 0-0.1-0.2-0.1-0.1 0.2-0.2 0.3-0.1 0.1 0.2 0.1 0.2-0.1 0.1z m0.7-1.1l-0.2 0.1-0.2-0.3 0-0.2 0.5-0.1 0.1 0.2-0.1 0.2-0.1 0.1z m123.1-9.3l0.2 0.1 0.1-0.1 0.3 0 0.1 0.4 0.1 0.1-0.5 0.1-0.5 0.1-0.1-0.2 0-0.2 0.1-0.1 0.1 0 0.1-0.2z m-109.7-1.1l-0.2 0.2-0.5-0.2 0.2-0.3 0.5 0 0 0.3z m125 0.3l-0.1 0.1-0.2-0.1-0.4-0.6 0.1-0.5 0.4-0.2 0.1 0.2 0 0.4 0 0.4 0.1 0.3z m-95.5 0l-0.4 0-1.1-0.8 0.1-0.3 0.3-0.2 0.4-0.1 0.3 0 0.5 0.3 0.1 0.6-0.2 0.5z m-27.8-1.4l-0.5 0.2-0.3 0-0.6-0.2 0.2-0.1 0.4-0.1 0-0.1 0.4 0 0.5 0-0.1 0.3z m82.2 0.8l-0.4 0.2-0.4-0.1-0.2-0.3-0.3-0.5-0.2-0.8 0.5 0.3 0.1 0.1 0.5 0 0.2 0.1 0.2 0.1 0.2 0.5-0.2 0.4z m-83.5-1.6l-0.6 0.6-0.7-0.2 0.3-0.2 0.3-0.2 0.4 0 0.3 0z m84.8 0.1l-0.8 0.3-0.3-0.1-0.3-0.2-0.2-0.1-0.1-0.3 1.1-0.1 0.2 0.2 0.4 0.2 0 0.1z m28.5-0.6l-0.8 0.6-0.7 0.2-0.4 0.1-0.2 0.2-0.2 0.2-0.3 0.2-0.3 0-0.4-0.1-0.4-0.2-0.1-0.2 0.1-0.2 0-0.2-0.1-0.5 0.3 0.2 0.2 0.1 0.2 0.1 0.3-0.2 0.3-0.4 0.2-0.2 0.3 0.1-0.2 0.3 0 0.2 0.1 0.1 0.2 0 0.4-0.1 0.2-0.1 0.3-0.1 0.5-0.7 0.2-0.2 0.6 0.2-0.3 0.6z m-26.4-1.5l-0.5 0.2-0.3-0.3 0.2-0.5 0.6 0.1 0.6 0.1 0.2 0.1-0.3 0.2-0.5 0.1z m19-1.3l-0.3 0.5 0-0.3-0.2-0.2 0.3-0.3 0.4-0.2 0.3-0.3 0 0.1-0.3 0.4-0.1 0.2-0.1 0.1z m15.3-1.1l-0.6 0.2 0-0.1 0.3-0.1 0.5-0.3-0.2 0.3z m-4.3 1.5l-0.1 0 0-0.2 0.1-0.6 0-0.6 0.1-0.6 0.5-0.3 0 0.4-0.5 1.1 0.1 0.2 0.1 0.3-0.2 0.2-0.1 0.1z m-8.3-3.2l-0.2 0.4 0-0.3 0-0.1 0-0.1 0.1-0.1 0.2-0.1 0.2 0.1-0.2 0.1-0.1 0.1z m11 0.3l-0.2 0.3-0.1 0.3-0.5-0.1-0.7 0.1-0.2-0.2 0.3-0.3 0.1-0.1 0.5 0.1 0.2-0.1 0.3-0.2 0.5-0.4 0.3-0.2 0.1 0 0 0.2-0.2 0.2-0.4 0.4z m-31.1-1.9l0 0.2 0.2 0-0.2 0.4-0.1-0.1-0.1-0.2 0-0.2 0.2-0.1z m36.2-0.6l0.1 0.2-0.3 0.2-0.2 0 0.1-0.2 0.1-0.2 0.2 0z m-17.8 1.1l-0.5 0.2-0.6-0.2-0.1-0.6 0.6-0.5 0.9-0.4 0.7 0.2-0.7 0.8-0.3 0.5z m-74.1-1.4l0.3 0.1 1-0.1 0.1 0.1 0.1 0.4-0.1 0.2-0.1 0.3-0.1 0.2-0.2 0.2-0.3 0.1-0.6 0.1-0.5 0-0.3-0.2-0.4-0.4-0.3-0.5-0.1-0.4 0.5-0.4 0.3 0 0.2 0.1 0.5 0.2z m17.7 0.4l-0.3 0.1-0.3-0.1-0.2-0.1 0.1-0.1-0.2-0.6 0.1-0.2 0.4-0.2 0.6-0.4 0.5-0.1 0.5-0.1 0.5 0.1 0.2 0.3-0.3 0.2-0.4 0.2-0.9 0-0.3 0.1 0 0.2 0.2 0.3 0 0.2-0.2 0.2z m-27.3-0.8l-0.3 0-0.3-0.1 0.1-0.3 0.1-0.2 0-0.2-0.1-0.2 0-0.2 0.2-0.1 0.2 0.2 0.2 0.5 0.1 0.4-0.2 0.2z m3.9-0.7l-0.1 0.1-0.2-0.1-0.2-0.2 0.1-0.3 0.2-0.1 0.3 0.4-0.1 0.2z m82.2-0.9l-0.2 0.3-0.1-0.4 0.2-0.1 0.1-0.1 0 0.3z m7.3-0.7l-1.2 0.7-0.2 0-0.1 0.2-0.3 0.6-1.1 0.5-0.1 0.2-0.2 0.1-0.2-0.1 0-0.1-0.3 0.1-0.3 0.4-0.3 0.2-0.6 0.2 0-0.2-0.8 0.7-0.2 0 0-0.2 0.1-0.6 0.2-0.1 0.3-0.1 0.4-0.2 0.3-0.3 0.2-0.5 0.3-0.4 0.3-0.2 0.1 0.2 0.3 0.4 0.4 0.3 0.2-0.2 0.1-0.2 0.8-0.9 0.1 0.1 0.1-0.3 0.3-0.3 0.7-0.3 0.6-0.5 0.3-0.2 0.2-0.4 0.2 0.5-0.2 0.5-0.4 0.4z m-63.7-0.4l-0.3 0.1-0.4-0.1-0.4 0-0.3 0-0.3 0.1-0.3 0.2-0.3 0.3-0.1 0 0.1-0.2 0-0.5-0.1-0.1-0.1-0.2 0.7 0 0.4-0.3 0.3-0.2 0.4-0.2 0.1 0.3 0.2 0.3 0.2 0.3 0.2 0.2z m-67.5-0.8l0 0.3 0 0.8 0.2 0.3 1.1 0.8 0.3 0.5 0.1 0.6 0 0.7-0.2 0.6-0.1 0.4 0 0.1 0.2-0.1 0.3-0.1 0.3-0.1 0.2 0.1 0.7 0.2 0.2 0.1 0.2-0.1 0.6 0.3 1 0.8 0.2 0.3 0.1 0.1-0.1 0.4-0.1 0.4-0.2 0.2-0.9 0.4-1.2 0-0.5 0.2-0.6-0.3-0.6-0.3-0.8-0.3-0.6 0-0.3-0.1-0.5-0.5-0.4-0.1-0.3 0.1-0.5 0.2-1 0.2-2 0.8-0.6 0-0.7 0-0.7-0.1-0.3-0.2-0.3-0.4-0.1-0.2-0.1-0.2 0.2-0.3 0.2-0.1 0.4 0.1 0.4-0.2 0-0.4-0.1-1 0.1-0.4 0.4 0 0.6 0.5 0.6 0.1 0.5-0.2 0.4-0.3 0.3-0.5-0.1-0.5-0.2-1.9 0.2-0.3 0.1-0.3 0-0.3-0.1-0.2-0.2-0.2-0.2-0.1-0.3 0.1-0.4 0 0.6-0.9 0.2-0.3 0.3-0.2 0.5-0.3 0.2-0.2 0.7-1.2 0.2-0.2 0.4-0.1 0.4 0 0.4-0.1 0.4-0.3 0.1 0.5 0.3 0.6 0.3 0.6 0.5 0.9 0 0.3-0.3 0.5z m2.6-4.2l0.2 0.4 0.2-0.2 0.2-0.2 0.3-0.1 0.2-0.1 0.4 0.1 0.3 0.3 0.2 0.3 0 0.3-0.2 0.4-0.6 0.6-0.1 0.4 0.2 0.4 0.3 0 0.2-0.1 0.2-0.1 0.9-1 0.4-0.2 0.2 0.3-0.3 0.7 0.1 0.1 0.2 0.2 0.5 0.7 0.1 0.2 0.6-1.1 1.3-0.3 1.3-0.2 0.6-0.6 0.4-0.4 0.7-0.1 0.7 0.1 0.3 0.3 0.1 0.2 0.7 0.2 0.1 0.2 0.2 1 0.1 0.3 0.1-0.3 0.4-1.9 0.3-0.2 0.4-0.1 0.4-0.2 0.8-0.8 0.4-0.1 0.2 0.3 0 0.5 0.1 0.5 0.2 0.4 0.9 1.4 0 0.2 0.3-0.2-0.1-0.5-0.3-0.7 0-0.2 0.1-0.5-0.1-0.2-0.3 0-0.1-0.1 0-0.2 0.1-0.2 0.1-0.6 0.2-0.5 0.4-0.4 0.4-0.2 0.5-0.2 0.4 0.2 0.2 0.4 0.1 0.6-0.3 0.4 0 0.2 0.2 0.2 0.3-0.1 0.1-0.3 0.1-0.2 0.1-0.2 0.3 0 0.3 0.2 0.3 0.1 0.2 0 0.5-0.3 0.2 0 0.3 0.2 0.2 0.3 0.1 0.4-0.1 0.4 0.4 0.2 0.1 0.5 0 0.5 0.2 0.6 0.1 0.2 0.2 0.1 0-0.2 0.5-0.2 0.3 0 0.2 0.2 0.1 0.2 0.1 0.4 0 0.7 0 0.4-0.2 0.2-0.2 0.1-0.5-0.2-0.3 0.1-0.2 0.4-0.3 0.8 0 0.8 0.2 0.5 0.1 0.3-0.4 0.2-0.5-0.1-0.2-0.1-0.1-0.1-0.4-0.3-0.3-0.1-0.1 0.1-1.2 2.2-0.5 0.4-0.2 0.5-0.2 0.1-0.6 0-0.6 0.4-0.3 0.2-0.1 0.3-0.2 0.2-2.2 1.1-2.6 2.2-0.4 0.2-0.4-0.2-0.4-0.6-0.6-0.5-0.7-0.4-1.2-0.4-1-0.6-0.2 0-0.3-0.1-0.5-0.2-0.5-0.3-0.4-0.2 0-0.1 0.2-0.1-0.1-0.2-0.4-0.1-1-0.8-0.6-0.4-0.2-0.2-0.2-0.4-0.2-0.1-0.4-0.2-0.5 0-0.4-0.2-0.2-0.5 0-1.4-0.1-0.4-0.1-0.1-0.4-0.3-0.5-0.6-0.1-0.4-0.5-2.4 0-0.4-0.1-0.1-0.2-0.2 0-0.2 0-0.4 0.3-0.4-0.6-0.6-0.2-0.4-0.1-0.4 0-0.6 0.1-0.5 0.3-0.3 0.3-0.4 0.8 1.1 1.5 1.7z m52-2.6l0 0.2-0.3-0.1-0.5 0.2-0.1-0.1-0.1-0.3-0.3-0.1 0.5 0 0.2-0.1 0.5 0 0.1 0.2 0 0.1z m109.9 119.9l0 219.8-194.4 0 0-257.4 0.2 0 0.9 0.3 0.9 0.4 0.2 0.1 0.2 0.3 0.1 0.2 0 0.2 0.1 0.2 0.1 0.1 0.6 0.1 0.4 0.3 0.2 0.3 0.1 0.6-0.1 0.3-0.1 0.4 0 0.5 0.1 0.4 0.3 0.5 0.1 0.4-0.2 0.4-0.4 0.8-0.4 1.2 0.4-0.1 0.6-1.2 0.5 0.1-0.2 0.3-0.1 0.4 0 0.4 0.1 0.4 0.6-2.8 0.4-0.1 0.1-0.4-0.2-1.4-0.1-0.2-0.2-0.3-0.1-0.5 0-1.1-0.3-1.5 0-0.6 0.1-0.1 0.3 0.2 0.4 0.4 0 0.5 0.2 0 0.4-0.5 0.8 0 0.7 0.4 0.3 0.5 2.3 0.7 0.4 0.4 0 0.1 0.3 1.1 0.3 0.2 0.6 0.3 0.3 0.2 0.1 0.4 0.3 0.7 0.2 0.4 0.1 0.3-0.2 0.8-0.1 0.4 1-0.7 0.3-0.1 0.4 0 0.1 0.3 0 0.6 0.1 0.4 0.1 0.1 0.4-0.1 0.4 0 0.3 0 0.1-0.2-0.1-0.3-0.1-0.3-1.4-1.5-0.1-0.3-0.5-1.3-0.3-1.4-0.1-0.3 0.2-0.2 0.3-0.6 0.1-0.3 0.1-1.2 0.1-0.2 0.3 0.1 0.6 0.3 0.3 0.1 0.6 0 0.8 0.1 0.3 0.1 0.4-0.1 0.5-0.1 0.5-0.3 0.4-0.1 0.2-0.3 0.9-0.7 0.2-0.1 0.2-0.1 0.4 0.2 0.6 0.3-0.1-0.6 0.3-1.2-0.2-0.3-0.2 0.6-0.4 0.4-1.3 0.3-2.1 1.1-0.8 0 0.8-1 0-0.2-0.2 0-0.7 0.4-0.4 0.2-0.3 0-0.3-0.2-0.9-0.7-0.1-0.3 0.2-0.4-0.4-0.2-0.6-0.4-0.4-0.5-0.4-1 0-0.3 0.1-0.1 0.3 0 0.8-0.2 1 0.1 0.6-0.2 0.2-0.4 0.2-0.2 0.9-0.6 0.2-0.2-0.4 0-0.6 0.2-0.5 0.2-0.7 0.5-0.4 0.1-0.9-0.2-0.2-0.1-0.5 0.1-0.2 0-0.4-0.3-0.3-0.1-0.4-0.1-1.3-1.1-0.4 0-0.2-0.4-0.4-0.2-0.1-0.1-0.1-0.3 0-0.1-1.1-0.6-0.2-0.3 0.3-1.7 0.1-0.2 0.6-0.6 0.1-0.2 0-0.5 0.1-0.3 0.2-0.4 0.2-0.3 0.9-0.9 0.3-0.4 0.1-0.4 0.1-0.4 0-0.8-0.1-0.2-0.2-0.4 0-0.2 0.1-0.1 0.3 0.2 0.3 0.1 0.3-0.2 0.1 0.2 0 0.2 0.1 0.2 0.2 0.1 0.3-0.1 0.2-0.1 0.2 0 0.1 0.4 0.4-0.6-0.1-0.7-0.1-0.6 0.3-0.2 0 0.6 0.5 0.2 1.3-0.2 0.6-0.2 0.4-0.6 0.2-0.7 0.1-0.6-0.1-0.4-0.3-0.2-0.2-0.2-0.2-0.3 0-0.3 0.2-0.4 0.4-0.6 1.2-0.9 0.4-0.5-0.3-0.4-0.3 0.5-0.1-0.2 0.1-0.3 0-0.4-0.1-0.7 0-0.4 0.6-1.4 0.3-0.7 0.1-0.3 0-0.7 0.1-0.3 0.1-0.3 0.2-0.1 0.2-0.1 0.2-0.2 0.2-0.5 0.1-0.4 0.2-0.3 0.2-0.1 0.2 0.3 0 0.4 0 0.8 0.1 0.2 0.4 0.2 0.8 0.3 0.3-0.2 1.3-0.4 0.4-0.3 1.1-0.9 0.5 0.2 0.6-0.6 1.1-1.6 0.5-0.6 0.4-0.2 0.4-0.1 0.4 0.2 0.5 0.3 0.4 0.1-0.2-0.6-0.2-0.3-0.5-0.2-0.4-0.2-0.5-0.1-0.2-0.1-0.2-0.4-0.4-0.6-1.2-1.4-0.1-0.1-0.5 0-0.2-0.1-0.1-0.2 0-2.4 0.1-0.3 0.2-0.3 0.1-0.5-0.1-0.6 0-0.6 0.3-0.5 0.3 0 0.2 0 0.2-0.2 0.1-0.2 0.2 0.2 0.1 0.3 0.2 0.3 0.4 0.1 0.5-0.1 0.8-0.4 0.4-0.1 0.4-0.2 0.3-0.5 0.3-0.5 0.1-0.4 0-1.4 0.2-0.7-0.1-0.4-0.2-0.4-0.1-0.4 0.2-0.5 0.3 0 0.4 0.2 0.3 0 0.1-0.1 0-0.5 0.1-0.1 0.3-0.1 0.3-0.3 0.3-0.1 0.2 0.1 0.8 0.4 0.4 0.1-0.3-0.5-0.1-0.3 0-0.3 0.2-0.2 0.2 0.2 0.9 1.7 0.2 0.1 0.3 0.1 0.1 0.1 0 0.3 0.3-0.1 0.2 0.1 0.2 0.1 0.2 0.1 0.2-0.3 0.1 0 0.4 0.1 0.4 0 0.2 0 0.1-0.2 0.1-0.2-1.8-0.5 0 0.1-0.3 0.1-0.1-0.3-0.4-0.5-0.3-0.3 0.2-0.2 0.2 0 0.4 0.1 0.2-0.1 0.2-0.2 0-0.1-0.1-0.3-0.1-0.1-0.5 0-0.1-0.1 0-0.3 0.5-1.4 0-0.4-0.3-0.5 0.1-0.3 0.1-0.1 0.5-0.2-0.1-0.2-0.4-0.3-0.4-0.2 0-0.1 0.6-0.3 0.7-0.1 0.7 0.2 0.5 0.5 0.4-0.1 0.5 0.1 0.6 0.2 0.4 0.3-0.2 0.4 0 0.3 0.2 0.8 0 1.3 0.1 0.5 0.2-0.3 0-0.3 0.1-0.3 0.2-0.2 0.7 0.5 0.7 1.3 0.5 0.5 0-0.4-0.1-0.2 0.3-0.3 0.5 0.1 0.8 0.5-0.2-0.6-0.6-0.4-0.5-0.4-0.5-0.4-0.2-0.5 0-0.2 0.1-0.1 0.4 0 0.5 0.1 0.6 0.4 0.4 0.1-0.1-0.4-0.2-0.3-0.5-0.4-0.2-0.1-0.4 0-0.1-0.1-0.1-0.3-0.3-0.3-0.3-0.1-0.2 0.2-0.3 0.1-0.4-0.3-0.1-0.2 0.1-0.2 0.1-0.2-0.1-0.4 0.7-0.2-0.2-0.3 0.2-0.2 0.6-0.4 0.2-0.1 0.1-0.3 0.2 0 0.2 0 0.2 0.2 0.2 0.1 1.9 0.3 0.6 0.3 0-0.4-0.1-0.3-0.4-0.5 0-0.3 0-1.2-0.1-0.4-0.5-0.6-0.1-0.3 0.1-0.5 0.2-0.3 0.3-0.2 0.4 0 0.2 0.1 0.4 0.3 0.2 0 0.1 0 0.3-0.4 0.2 0 0.2 0.2 0.2 0.3 0.3 0.3 0.5-0.2 0.5 0.6 0.4 0.1 0.3 0.2 0.1 0.3 0.2 0.2 0.5 0-0.4-0.6 0-0.2 0-0.2 0.4-0.4 0-0.1 0.1-0.5 0-0.3 0.2-0.8 0.1-0.7 0.1-0.2 0.2-0.2 0.2-0.1 0.1 0.1 0.1 0.5 0.2 0.3 0.1 0.2 0 1 0.2 1 0.4 0.8 0.6 0.6 0.7 0.5 0.4 0.2 0.5 0.2 0.4 0.2 0.5 0 0.5 0 0.9-0.3 0.5 0 0.2 0.1 0.5 0.2 0.3-0.1 1.8-0.2 1.6-0.3 0.8-0.3 0.4-0.2 0.6-0.5 0.2-0.1 0.2-0.1 0.3 0 0.1 0.1 0.1 0.4 0.1 0.3 0.5 0.3 0.9 0.3 0.5 0.3 0.5 0.1 0.5 0.2 0.2 0 0.5-0.2 0.8-0.5 0.7-0.6 0.4-0.5 0.1-0.1 1-0.3 0.1-0.2 0.2-0.6 0.1-0.2 0.3-0.1 0.3 0.2 0.1 0.3 0 0.4 0.2 0.7 0.4-0.1 0.5-0.3 0.6-0.2 0.3 0 0.2 0.1 0.2 0.2 0.7 1.3 0.1 0.4 0.1 0.2 0 0.2-0.1 0.1-0.3 0.2-0.1 0.2-0.2 0.3-0.1 0.2 0.1 0.5 0.3-0.5 0.6-0.5 0.4-0.7-0.6-1.6 0.1-0.9 0.3-0.7 0.6-0.4 0.5-0.1 1.2-0.8 0.4-0.1 0.3 0 0.6 0.4 0.7 0.3 0.9 0.3 0.8 0 0.9-0.1-0.3-0.1-0.4 0-0.2-0.1-0.3-0.1-0.1-0.2-0.2-0.1-0.9-0.5-0.3-0.4-0.2-0.5 0-0.9 0.6-3 0-0.4-0.1-0.4-0.2-0.3-0.8-0.6-0.2-0.1 0.2-0.4 0.8-0.9 0.3-0.4 0.3-0.8 0.2-0.2 0.4-0.1 0-0.1-1-0.4-0.8-0.1-0.4-0.2-0.3-0.3-0.3-0.2-0.3-0.4 0-0.1 0.1-0.2 0.1-0.3-0.2-0.2-0.3-0.2-0.3-0.2 0.2-0.4-0.5-0.1-0.3-0.6-1.3-0.7-0.4-0.1-1-0.2-0.5 0.1-0.8 0.5-0.5 0-0.5-0.1-0.4 0-0.3 0-0.5 0.4-0.2 0.3-0.1 0-0.1 0-0.3-0.1-0.1 0.1-0.6 0.5-0.4 0.2-0.4 0.1-0.5-0.1-0.3-0.3-0.2-0.2-0.3-0.2-0.1-0.1-0.1-0.2-0.1-0.3 0-0.2 0.1-0.1 0.4-0.1 0-0.2-0.3-0.3-0.6 0.1-0.5 0-0.2-0.5-0.1 0-0.2 0.1-0.3 0-0.1-0.2 0-0.4 0.4-0.1 0.2-0.2 0-0.3-0.3-0.1-0.5 0.1-0.3 0-0.1-0.2 0.1-0.3 0-0.2-0.3-0.1-0.4 0-0.5-0.2-0.3-0.1-0.2 0.1-0.5 0.2-0.2 0-1-0.1-0.1-0.1 0.2-0.1 0.3-0.2 0.4 0-0.4-0.6 0.3 0 0.4 0.2 0.4 0.1 0.2-0.3-0.2-0.5-0.3-0.4-0.1-0.5 0.1 0.1 0.5 0 0.4 0.3 0.2-0.1 0-0.3-0.1-0.1 0.1-0.3 0.1-0.3 0.2 0.3 0.3 0.4 0.7 1 0.1 0.1 0.1 0 0.4-0.2 0.4-0.4 0-0.3-0.2-0.4-0.1-0.5 0.4 0.1 0.1-0.1-0.2-0.5 0-0.4 0.1 0 0.2 0.1 0.4 0.1 0.2 0.2 0.2 0.4 0.3 0.3 0.7 0.3-0.1 0.6 0.2 0.2 0.3-0.1 0.2-0.2 0.2-0.1 0.1 0.3-0.1 0.1-0.2 0.4 0 0.1 0 0.2 0.1 0.4 0 0.2-0.1 0.6 0 0.4 0.4 0.2 0.2-0.1 0-0.1-0.1-0.2 0-0.2 0.2-0.3 0.3 0.6 0 0.6 0 0.6 0.5 0.5 0.6 0.1 0-0.4-0.3-0.6 0-0.3 0.3 0 0.3 0.2 0.2 0.1 0.2-0.3 0-0.3-0.2-0.2-0.4-0.4-0.1-0.1-0.2 0.1-0.1-0.2 0.1-0.4 0-0.3 0-0.3-0.1-0.3-0.2-0.3 0.2-0.3-0.1-0.4-0.4-0.5-0.2-0.1-0.2-0.3 0-0.4 0.3-0.3 0.6 0.2 0.2 0.3 0.2 0.4 0.2 0.3 0.3 0.2 0.2 0.2 0.3 1 0.2 0.3 0.5 0.3 0-0.3-0.2-0.8-0.1-0.9 0.1-0.4 0.4-0.2 0.3 0.1 0.2 0.1 0.3-0.2 0-0.1 0.1-0.3 0.1-0.3 0.1 0.2 0.1 0.4 0.7 1.5 0 0.1-0.1 0.2 0.1 0.4-0.1 0.8 0.2 0.2 0.3-0.2 0.2-0.4 0.2-0.8 0.5-0.4 0.7 0.5 0.5 0.9 0.4 0.8-0.1 0.3 0 0.1 0.1 0.2 0.1 0 0.3-0.2 0.1 0.1 0.3 0.3 0.1 0.2 0.2 0.4 0.9 0.7 0.5 0.7 0.3 0.9 0.6 0.7 0.9 0.1 0.4-0.1 0.5-0.4 0.4-0.4 0.2-0.7 0.6-0.2 0.2-0.2 0.2-0.1 0-0.3 0-0.1 0.5 0 0.5 0.3 0.3 0.1 0.2-0.5-0.1-0.5-0.1-0.3-0.6-0.5 0.2-0.2 0.1 0 0.2 0 0.5 0.1 0.1 0 0.1 0.3 0.3 0.1 0.1 0.1 0.1 0.1 0.2 0.6 0.1 0.1 0.6 0.3 0.5 0.6 0.5 0.8 0.3 0.6 0.1 0 0.4 0.2 0.1 0.1 0.1 0.2-0.1 0.6 0 0.3 0.5 0.8 0.9 1.7 0.3 0.3 0.3 0.4 0.4 0.3 0.5 0.1 1.1 0.2 0.5-0.2 0.2-0.8 0.4 0.1 0.5-0.1 0.3 0 0.4 0.2-0.1 0.2-0.4 0.1-0.3 0.2-0.2 0.4-0.1 0.3 0.2 0.2 0.4 0.1 0.5 0 0.1-0.1 0.1-0.1 0.3-0.4 0.2-0.2 0.2-0.1 0.2 0.1 0.1 0.3-0.1 0.2-0.3 0.2 0.1 0.2 0.1 0 0.2 0.1 0.4-0.1 0.5 0.4 0.3 0.1 0.2-0.2 0.1-0.1 0.3-0.1 0.4-0.2 0.2-0.3 0.2 0.4 0 0.7-0.2 0.8-0.2 0.5 0.2 0.2 0.2-0.3 0.2-0.7 0.2-0.2 0.5-0.3 0.1 0 0.3 0 0 0.3 0.3 0.4 0.1 0 0.4-0.2 0.4 0 0.1-0.1 0.2-0.2 0.2-0.9 0.4 0.2 0.4 0 0.4 0 0.3-0.2 0.3-0.2 0.8-1 0.6 0 0.2 0.1 0.2 0.2 0.5 0.1 0.3 0.2 0.4 0 0.3-0.4 0.4 0.5 0.1 0.3-0.1 0.1-0.3 0.1-0.3 0.1-0.1 0.3-0.2 0.3-0.5-0.2-0.5 0.4-0.3 0.5 0.2 0.5 1.1 0.7 1.1 0.6 0.9-0.5 0.5-0.2 0.1-0.3 0.1-0.3 0.2-0.2 0.3-0.1 0.3 0.1 0.3 0.2 0.1 0.4 0.2 0.2 0.1 0.2-0.1 0.4 0 0.2 0.1 0.2 1-0.9 0.1-0.1 0.1 0.1 0.3 0.8 0.1 0.2 0.1 0.2 0.4 0 0.2 0.2 0 0.3-0.4 0-0.1 0.1-0.1 0.2 0.1 0.2 0.3 0.2 0.1 0.3 0 0.2 0 0.5 0 0.2-0.1 0.2 0 0.2 0 0.2 0.2 0.1 0.1-0.1 0.3-0.5 0.7-0.6 0.3-0.2 0.1-0.4 0-0.3 0.1-0.2 0.4-0.2 1.3 1.2 0.8 0.5 1 0.3 2 0.1 0.8-0.2 0.5 0 0.2 0.2 0.3-0.3 0.6-0.4 1.4-1.4 0.1-0.1 0.4-0.2 0.6-0.1 0.4 0 0.1 0.1 0 0.2 0 0.5 0 0.2 0.2 0.2 0.2 0.3 0.2 0.5 0.1 0.1 0.2 0 0.3-0.1 0.2 0 0.1 0.2 0.1 0.9 0.1 0.5 0.2 0.3 0.4 0.2 1 0 0.3 0.1 0.2 0 0.4 0.2 0.5 0.7 0.2 0.5 0.1 0.1 0.8 0.4 0.2 0.3 0.4 0.5 0.2 0.1 0.3-0.1 0.5-0.2 0.4-0.2 0.3 0 0.2 0.2 0.3 0.4 0.4 0.2 0.3 0.3 0.3 0.2 0.5-0.2-0.2-0.4-0.9-0.5-0.4-0.5 0.8 0 0.5-0.1 0.6-0.1 0.5 0.7 0.4 0.2 0.5-0.2 0.3-0.1 0.3-0.3 0-0.2-0.5 0.2-0.5 0-0.3-0.2-0.6-0.4-0.5 0-0.4-0.3 0.3-0.3 0.6 0 0.9-0.5 0.2-0.1 0.2-0.2 0-0.1-0.3-0.1-0.1-0.1 0.4-0.4 0.6-0.2 0.3-0.3 0.5 0 0.6-0.1 0 0.1-0.2 0.4 0.5 0.2 0.7-0.1 0.5-0.1 0.4-0.2 0.3-0.4 0-0.3 0.4-0.1 0 0.4 0.8 0.4 0.3 0 0.8-0.7 0.1 0 0.4-0.3 1.4-0.8-0.2-0.2-1.1 0.3-0.4 0-0.9 0.8-0.2 0-0.2-0.3-0.2-0.4 0.1-0.7 0.5-0.6 0.2-0.2 0.5-0.1 0.1 0.1 0.1 0.2 0.3 0 0.2 0 0.1-0.3 0.2-0.1 0.3-0.2 0.4-0.2 0.4 0 0.4 0.2 0.8-0.5 0.7-0.6 0.6-0.4 0.1-0.1 0.1-0.3 0.2-0.1 0.2 0 0.2-0.1 0.3-0.4-0.1-0.4-0.2-0.4-0.1-0.5 0.2-0.3 0.5 0.1 0.5 0.2 0.3 0.2-0.4 0.9-0.4 0.7-1.3 1.4-0.7 0.9-0.3 0.2-0.8 0.2-0.2 0.1 0 0.1-0.7 0.5 0.2 0.2 0.8-0.4 0.5-0.1 1.4-0.2 0.3-0.1 0.7-0.3 0.4 0 0 0.1-0.3 0.2-1 0.3-0.6 0.3-0.8 0.7-0.5 0.8-0.8 0.7-0.3 0.1-0.6 0.5-0.4 0.4-0.4 0.4 0 0.8 0.4 0.8 0.4 0.3 0.3 0.3 0.2 0.2 0.4 0.8 0.5-0.9 0.2-0.3 0.3 0.2 0.2 0 0.2-0.7 0.2-0.4 0.9-0.6 0.7-0.8 0.2-0.1 0.2 0.1 0.1 0.2 0.2 0.5 0.2-0.2 0.2-0.4 0.1-0.2 0.2 0 0.3 0 0.2-0.1 1.3-1.4 0.6-0.4-0.1 0.5-0.3 0.4-0.4 0.4-0.3 0.2-0.3 0.4 0 0.3-0.1 0.1-0.7 0.4-0.2 0.2-0.1 0.2-0.1 0.3 0.1 0.1 0.2 0.3 0.2 0.5 0.4 0.2 0.4-0.1 0.4-0.2 0.3-0.3 0.4-0.2 0.3 0.1 0.2 0.4-0.1 0.3-0.2 0.1-0.2 0-0.1 0.1-0.1 0.2-0.2 0.6-0.8 1-0.1 0.2 0.1 0.4 0.1 0.2 0.2 0 0.2-0.2 0.1 0.2-0.1 0.5 0.1 0.5 0.1 0.4 0.3 0.2 0.3-0.1 0.1-0.3 0-0.2 0.1-0.1 0.3-0.1 0.1 0 0.1 0.4 0.2 0 0.2-0.1 0.9-0.1 0.1 0 0.2 0.1 0.3 0.4 0.1 0 0.5 0 0.4-0.1 0.8-0.3 0.7-0.6 0.4-0.7 0.6-1.7 0.7-1.1 0.1-0.4-0.1-0.3-0.3-0.3-0.4-0.2-0.4 0-0.8 0.1-0.4 0-0.5 0.1-0.2-0.4-0.2-0.1-0.6 0.1-0.2-0.1-0.1-0.4 0.2-0.2 0.2-0.1 0.7-0.1 0.1-0.5 1.1-1.4 0.4-0.4 0.4 0 0.2 0.1 0.2-0.1 0.5-0.6 0.5-0.4 0.8-0.7 0.2-0.1 0.2-0.1 0.3-0.4 0.6 0.1 0.7-0.2 0.3-0.4 0.6-0.1 0.2-0.2 0-0.4 0.2 0.1 0.2 0.3-0.1 0.2-0.3 0.2-0.3 0.3-0.5 0.2-0.2 0.1-0.4 0.1-0.4 0-0.2 0.2 0 0.4 0.1 0.4 0.3 0.1 0.3-0.3 0.3-0.1 0.3 0.1 0.4 1 0.2 0.9 0.6 0.1-0.1 0.6 0 0.8 0.2 0.6 0.4 0.4 0.3 0.3 0.6 0.7 0.2 0.4 0.1 0.2 0.5 0.4 0.7-0.1 0.5-0.3 0.5-0.5-0.3-0.4-0.5-0.1-0.4-0.3-0.2-0.4-0.5 0.4 0.1-0.5 0.6 0 0.4-0.2 0.7-0.2 0.4 0.1 0.6 0.5 0.3 0.5 0.6 0 0.6 0.2 0.6 0.8 0.4 0.6 0.2 0.8-0.1 0.5 0.4 0.2 0.5-0.2 0.3 0-0.3 0.4-0.2 0.2-0.3 0.1-0.4 0-0.4 0.2-1.1 1-1.4 1.8-0.3 0.5-0.2 0.1-0.1-0.4 0.3-0.3 0.4-0.6 0.1-0.3 0-0.3-0.1-0.2-0.2 0-0.2 0.1-0.2 0.2-0.7 0.4 0 0.7 0.1 0.8 0.4 0.6-0.5 0-0.2 0.1-0.6 0.9-0.5 1.2 0.4 0.6-0.2 0.3-0.4-0.2-0.9 0-0.4 0.3-0.2 0.4 0.2 0.4 0.3 0.2 0 0.5-0.1 0.3 0.1 0.2 0 0.2-0.3 0.3-0.3 0-0.2-0.2-0.1-0.3-0.1-0.3-0.2-0.6-0.1-0.4-0.1-0.1-0.3 0-0.3 0.1-0.1 0.1 0 0.4 0.1 0.2 0.1 0.3-0.1 0.2-0.4 0.1-0.4-0.6-0.3-0.3-0.2 0.2 0.1 0.4 0.2 0.7 0 0.4 0.1 0.2 0.8 0.6 0.4-0.2 0 0.5 0 0.4 0.5 0 1 0.6 0.5 0.4 0.1 0.4 0.3 0.5 0 0.2-0.1 0.2-0.2-0.1-0.5-0.5-0.1-0.2-0.3 0.1-0.4 0.7-0.4-0.1 0-0.7-0.2-0.3-0.3-0.1-0.2 0.3-0.1 0-0.2-0.1-0.1 0-0.3 0.1-0.1 0.1 0 0.3 0 0.2 0.2 0.3 0.1 0 0.3 0.1 0 0.3 0.3 0.4 0.7 0.2-0.6 0.9-0.2 1.2-0.4-0.2-0.4 0.1-0.3 0.4-0.1 0.5 0 0.8-0.1 0.4-0.3 0.1 0-0.4-0.1-0.3-0.2 0-0.2 0.2-0.8 0.3-0.2 0.5-0.4 0.8-0.3 0.3-0.3 0.2-0.2 0 0-0.2-0.2-0.1 0-0.3 0.5-0.3-0.1-0.2-0.1-0.3 0-0.2 0.3 0 0.3 0.1 0.4-0.2 0.1-0.4-0.1-0.3-0.3-0.4 0-0.7-0.1-0.3 0.1-1.2 0-0.7-0.1-0.2-0.5-0.2-0.2 0-0.3 0.4-0.2 0.3-0.1 0.3 0 0.3 0.4 0.4-0.2 0.3 0 0.4-0.1 0.2-0.4 0.1-0.4-0.2-0.2-0.7-0.3 0.1-0.2 0.2-0.2 0.2 0.1 0.4 0.2 0.3 0 0.3-0.3 0.3-0.1-0.1-0.2 0-0.1 0.2-0.1 0.4-0.3 0.1-0.3 0-0.5 0.6-0.2-0.5-0.2-0.7 0.4-0.8 0-0.6-0.2-0.5-0.2 0.1-0.7 0.7-0.4 0.9 0 0.7-0.2 0-0.3-0.2-0.2 0.2 0 0.3 0.1 1.1-0.1 0.4-0.2 0-0.1-0.6-0.1-0.6-0.1-0.5-0.5-0.4-0.4 0-0.3 0.3-0.2 1-0.2 0.3-0.1-0.6-0.2-0.1-0.4 0.2-0.3 0.4-0.1 0.4-0.5 0.5 0 0.9 0.6 0.2 0.2 0.1 0.1 0.2 0 0.2-0.2 0.1 0.1 0.3 0.3 0 0.7 0 0.1 0.2-0.1 0.6-0.5-0.1-0.1 0.1-0.4 0.3-0.5-0.6-0.4-0.2-0.4 0.2-0.1 0.4 0.1 0.5 0 0.6 0.2 0.8 0 0.2-0.1 0.2-0.3 0.2-0.1 0.2 0 0.5 0.1 0.4 0.4 0.8 0.3 0.3 0.7-0.3 0.2 0.5-0.7 0.3-0.1 0.5 0.3 0.6 0.8 0.2 0.7-0.1 0.5-0.5 0.8-1 0.1-0.2 0-0.3 0.2-0.1 0.2-0.1 0.2 0.1 0.2 0.1 0.1 0.2-0.1 0.2-0.4 0.4-0.2 0.3-0.3 1-0.6 1.1 0.2 0.2 0 0.3-0.2 0.6-0.2 0.3-0.1 0.2 0.1 0.6-0.1 0.1-0.5 0.8-0.9 0.5-0.5 3.9 0.2 1.4-0.5-0.2-0.4 0.1-0.3 0.2-0.2 0.3-0.1 0.1-0.5 0.1-0.2 0.1-0.5 0.3-0.6 0.5-0.5 0.8-1.3 2.4-0.2 0.4-0.3 0.3-0.6-0.2-0.3 0.5-1.2 2.1-0.5 0.8-0.3 0.8 0.1 0.8-0.4 0.2-0.5 0.2-0.6 0.3-0.2 0.3-0.1 0.3-0.1 0.2-0.4 0-0.3 0-0.2-0.2-0.3 0-0.2 0.2 0.3 0.1 0.2 0.3 0.1 0.9 0.1 0.8 1 2.3 0.5 0.7 1.7 1.6 0.7 0.4 0.7 0.2 0.2 0 0.5-0.2 0.1 0.1 0.4 0.5 0.6 0.5 0.2 0.2 0.2 0.4 0.4-0.1 0.5 0.1 0.4 0.3 0.2 0.2 0.2 0.2 1.4 0.7 0.6 0.5 0.7 0.8 0.7 0.7 0.8 0.3 0.3 0.1 0.9 0.4 0.3 0.3 0.7 0.6 0.2 0.1 0.2 0.1 0.6 0.2 0.6 0.5 0.9 0.3 0.4 0.3 0.2 0.2 0.1 0.2 0.4 1 0.2 1.7 0.1 0.3 0.3 0.2 1 0.8 0.3 0.2 1.1 0.1 0.4 0.1 1.1 1.2 0.6 0.3 0.3 0.4 0.4 0.3 0.6 0.1 0.2-0.1 0.2-0.1 0.2-0.1 0.3 0 0.1 0.2 0.1 0.6 0.1 0.2 1 0.7 0.3 0.3 0.7 1.1 0.3 0.1 0.1 0.2-0.1 0.4-0.2 0.5-0.1 0.3 0.3 0.5 0.4 0 0.4-0.2 0.1-0.4 0.2-0.2 0.4 0 0.9 0.1 0.7 0 0.2 0 0.2 0.2 0.5 0.4 0.1 0.1 0.4-0.1 0-0.1-0.1-0.3 0.2-0.5 0.3-0.2 0.9-0.4 0.2-0.1 0.3 0.7 0.8 0.6 1 0.6 0.9 0.3 0.4 0.3 0.2 0.1 0.4 0 0.4 0.1 1.1 0.9 0.2 0.1 0.2 0.3 0.5 0.7 1.5 1.1 0.4 0.2 0.5 0 0.3 0 0.1 0.4 0.2 0.1 0.5-0.1 0.5 0.5 0.2 0.2 0.3 0 0.4-0.2 0.3 0 0.4 0.1 2.4 0.8 0.6 0.5 0.9 0.3 0.3 0.2 0.8 1.1 0.1 0.4 1.3 1.8 0.1 0.3 0.4 0.5 1.8 1.7 1 0.7z m-107.9-121.5l-0.2 0.1-0.2-0.3 0-0.3-0.3-0.3 0.4 0.2 0.4 0.1 0 0.1-0.1 0.4z m81.2-1.5l0 0.4-0.6 2.2-0.3 0.8-0.1 0.7-0.3 0.1-0.5 0.3-0.2 0.7-0.7 0.7-0.2 0.9-0.4 0.1-0.4 1-1 1.1-0.2 0.3-0.2 0.1-0.1-0.2-0.1-0.1-0.2 0.1-0.3 0.4-0.4-0.2 0.4-0.2 0.1-0.3-0.4-0.2 0.4-0.4 1.3-0.9 0.1-0.2 0.4-0.4-0.1-0.5 0.2-0.5 0.6-1 0.8-1.1 0.8-0.2 0.2-0.9 0.3-0.4 0-0.5 0.4-0.4 0.1-0.3-0.4-0.3 0.5-0.5 0.3 0.2 0.1-0.3 0.1-0.1z m-85.1-1.1l0 0.5-0.1 0 0-0.2-0.1-0.3 0.1 0.1 0.1-0.1z m-5.1 1.5l0.2 0.6-0.1 0 0.3 0.4 0.1 0.3 0 0.3 0 0.3-0.4 0-0.2 0.2 0 0.4 0.3 0.2 0.5 0 0.3 0.3-0.5 0.3 0 0.2 0.2 0.5 0.1 0.6-0.1 0.6-0.4 0.9-0.1 0.7-0.7-0.8-0.1-0.7-0.2-0.7-0.4-0.6-0.9-1.2 0-0.1 0.1-0.2 0.3-0.2 0.2-0.1 0-0.2-0.2-0.9-0.1-0.2-0.2-0.1-0.2-0.2-0.1-0.3-0.2-0.3-0.1-0.2 0.3 0.1 0.4 0.1 0.2 0.2 0.2-0.1 0.3-0.1 0.4-0.1 0.2-0.3 0-0.4 0.1-0.4 0.3-0.3 0.4 0 0 0.3-0.3 0.4-0.1 0.2 0.1 0.3 0.1 0.3z" id="AUS2650" data-name="Northern Territory">
 </path>
 <text data-name="Northern Territory"  stroke='black' strokeWidth={'1px'} fontSize="25" fontFamily="Verdana" x="420" y="280">NT</text>
 </svg>
  );
};

export default NT;