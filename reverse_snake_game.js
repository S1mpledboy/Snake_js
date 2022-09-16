import Snake from './snake.js'
import {JunkFood} from './junk_food.js'
import { HealthyFood } from './healthy_food.js'
let snake = new Snake(3)
let junk_food = new JunkFood()
let healthyfood = new HealthyFood()
let game_area = document.getElementById('game_area')
let fpsInterval = 1000/snake.getSpeed();
let then = Date.now()
let elapsed = null
let now = then
let collision = null
let eating_sound = new Audio()
let food = [junk_food.food,healthyfood.food]

eating_sound.src = '429591__inspectorj__chewing-breadstick-single-d.wav'
document.getElementById("start").addEventListener("click", startGame)

function main_loop() {
	requestAnimationFrame(main_loop);
	now = Date.now();
	elapsed = now - then;
	if (elapsed > fpsInterval ){
		then = now - (elapsed % fpsInterval);
		render();
		update();
	}
}
function startGame(){
	document.getElementById("start").style.display = "none";
	document.getElementById("game_area").style.display = "grid";
	document.getElementById("game-over").style.display = "none";
	main_loop()
}
function update(){
	snake.updateSnake();
	collision = checkFoodAndSnakeCollision()
	if (collision && collision[1] === 0){
		snake.expandSnake()
		junk_food.update(collision[2])
		fpsInterval = 1000/snake.getSpeed()
	}else if (collision){
		healthyfood.update(collision[2])
		snake.reduceSnake()
		fpsInterval = 1000/snake.getSpeed()
	};

}

function render(){
	game_area.innerHTML = '';
	snake.drawSnake(game_area);
	junk_food.draw(game_area);
	healthyfood.draw(game_area);
}

function checkFoodAndSnakeCollision(){
	for (let i = 0; i < food.length ;i++ ){
		for(let j = 0; j < food[i].length;j++){
			if(snake.SnakeEatead(food[i][j])) {
				eating_sound.play()
				return [true,i,j]
			}
		}
	}
	return false	
}
