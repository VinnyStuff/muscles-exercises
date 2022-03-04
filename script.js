window.onload = function() {
    enableCurrentMuscle();
}

function enableCurrentMuscle(){
    document.getElementById("muscle").onmouseover = function(e){
        disablePreviousMuscle();
        let currentMuscle = e.target.classList.value;
        if (currentMuscle !== ""){
            currentMusclesIndex = document.getElementsByClassName(currentMuscle);
            for (let i = 0; i < currentMusclesIndex.length; i++) {
                currentMusclesIndex[i].style.fill = "Red";
            }
        }
    }
}



function disablePreviousMuscle(){
    let musclesIndex = [document.getElementById("muscle").lastElementChild.children]
    for (let i = 0; i < musclesIndex[0].length; i++) {

        currentMuscleToDisable = document.getElementsByClassName(musclesIndex[0][i].classList.value);

        for (let x = 0; x < currentMuscleToDisable.length; x++) {
            currentMuscleToDisable[x].style.fill = "Transparent";
        }
    }
}
