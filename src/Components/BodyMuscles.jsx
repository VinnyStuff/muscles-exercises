import React, { useState } from 'react';
import MuscleMap from '../Icons/MuscleMap';
import MuscleMapEnable from '../Icons/MuscleMapEnable';
import '../ComponentsStyles/BodyMuscles.css'


function BodyMuscles() {
    const [currentMuscle, setCurrentMuscle] = useState('');
    const muscleActiveColor = 'red';

  
    function handleClick(event) {
      const clickedMuscleClass = event.target.classList.value;
  
      if (clickedMuscleClass) {
        setCurrentMuscle(clickedMuscleClass);
      } else {
        setCurrentMuscle('');
      }
    }

    return (
      <div>
        <div className="muscle-map-container muscle-map">
          <MuscleMap />
        </div>
        <div onMouseOver={handleClick} className="muscle-map-container muscle-map-enable">
          <MuscleMapEnable />
        </div>
        <style>
          {`.${currentMuscle} {
            cursor: pointer;
            fill: ${muscleActiveColor};
          }`}
        </style>
      </div>
    );
  }
  
  export default BodyMuscles;