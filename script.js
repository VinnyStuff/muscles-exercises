window.onload = function() {
    GetCurrentMuscle();
}

function GetCurrentMuscle(){
    document.getElementById("muscles-enable").onmouseover = function(e){
        let currentMuscle = e.target.classList.value;
    
        turnOffPreviousMuscle();
        turnOnCurrentMuscle(currentMuscle);
        clickCheckInCurrentMuscle(e.target)
    }
}

function turnOffPreviousMuscle(){
    let musclesIndex = [document.getElementById("muscles-enable").lastElementChild.children]
    for (let i = 0; i < musclesIndex[0].length; i++) {

        currentMuscleToDisable = document.getElementsByClassName(musclesIndex[0][i].classList.value);

        for (let x = 0; x < currentMuscleToDisable.length; x++) {
            currentMuscleToDisable[x].style.fill = "Transparent";
        }
    }
}

function turnOnCurrentMuscle(currentMuscle){
    if (currentMuscle !== ""){
        currentMusclesIndex = document.getElementsByClassName(currentMuscle);
        for (let i = 0; i < currentMusclesIndex.length; i++) {
            currentMusclesIndex[i].style.fill = "Red";
            currentMusclesIndex[i].style.cursor = "Pointer";
        }
    }
}

function clickCheckInCurrentMuscle(currentMuscle){
    if (currentMuscle.classList.value !== ""){
        currentMuscle.addEventListener("click", () => {
            console.log(currentMuscle.classList.value)
        });
    }
}
