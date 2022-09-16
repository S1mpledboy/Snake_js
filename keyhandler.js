let inputDirection = {x: 0, y:0}

window.addEventListener('keydown',keyDownInterpreter)
window.addEventListener('keyup',keyUpInterpreter)

function keyDownInterpreter(event){
    switch(event.key){
        case 'Right':
        case 'ArrowRight':
        case "d":
        case "D":
            inputDirection = {x:0, y:1}
            break
        case 'Left':
        case 'ArrowLeft':
        case "a":
        case "A":
            inputDirection = {x:0, y:-1}
            break
        case 'Down':
        case 'ArrowDown':
        case "s":
        case "S":
            inputDirection = {x:1, y:0}
            break
        case 'Up':
        case 'ArrowUp':
        case "w":
        case "W":
            inputDirection = {x:-1, y:0}
            break
    }

}
function keyUpInterpreter(){
    inputDirection = {x:0, y:0}
}
export function getDerection(){
    return inputDirection
}