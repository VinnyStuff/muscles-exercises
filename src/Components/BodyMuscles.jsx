import React, { useState } from 'react';
import MuscleMap from '../Icons/MuscleMap';
import MuscleMapEnable from '../Icons/MuscleMapEnable';
import '../ComponentsStyles/BodyMuscles.css'


function BodyMuscles() {
    const [currentMuscle, setCurrentMuscle] = useState('');
    const muscleActiveColor = 'red';
  
    function handleClick(event) {
      const clickedMuscleClass = event.target.classList.item(1);
  
        console.log(clickedMuscleClass);

      if (clickedMuscleClass) {
        setCurrentMuscle(clickedMuscleClass);
      } else {
        setCurrentMuscle('');
      }
    }

    const [bla, setBla] = useState('');
    function bla1(){
        setBla('muscle-map-container')
    }
    function bla2(){
        setBla('')
    }
  
    return (
      <div>
        <button onClick={bla1}>
            button 1
        </button>
        <button onClick={bla2}>
            button 2
        </button>
        <div className="muscle-map-container muscle-map">
          <MuscleMap />
        </div>
        <div onMouseOver={handleClick} className="muscle-map-container muscle-map-enable">
          <MuscleMapEnable />
        </div>
        <style>
          {`.muscle.${currentMuscle} {
            cursor: pointer;
            fill: ${muscleActiveColor};
          }`}

          {`.${bla} {
            background-color:red;
          }`}
        </style>
      </div>
    );
  }
  
  export default BodyMuscles;