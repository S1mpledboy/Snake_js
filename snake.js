import { getDerection } from "./keyhandler.js";
export default class Snake{
	 speed = 15;
	 snakeBody = [
		{x:10,y:11},
		{x:10,y:12},
		{x:10,y:13},
	]
	constructor(weight_impact,difficulty = 20){
		this.weight_impact = weight_impact;
		this.difficulty = difficulty;
	}
	getSpeed() {
		let speed = 0;
		const min_speed = 9;
		speed = this.speed + this.difficulty-(this.weight_impact*this.weight_impact+10);
		if(speed > 0)return speed
		return min_speed
	}
	reduceWeight(){
		this.weight_impact = this.weight_impact - 1;
		return this.weight_impact;
	}
	increaseWeigth(){
		this.weight_impact = this.weight_impact + 1;
		return this.weight_impact;
	}
	updateSnake(){
		let inputDirection = getDerection();
		if(inputDirection.x === 0 && inputDirection.y === 0 

			|| this.snakeBody[0].x+inputDirection.x > 21 
			|| this.snakeBody[0].y+inputDirection.y > 21 
			|| this.snakeBody[0].x+inputDirection.x < 0 
			|| this.snakeBody[0].y+inputDirection.y <0 ) return

		for(let i = this.snakeBody.length -2; i >= 0; i--){
			this.snakeBody[i+1] = {...this.snakeBody[i]}
		}
		this.snakeBody[0].x += inputDirection.x
		this.snakeBody[0].y += inputDirection.y
	}
	drawSnake(game_area){
		this.snakeBody.forEach(segment =>{
			let snakeElement = document.createElement('div')
			snakeElement.style.gridRowStart = segment.x
			snakeElement.style.gridColumnStart = segment.y
			snakeElement.classList.add('snake')
			game_area.appendChild(snakeElement)
		})
	}
	SnakeEatead(position) {
		return this.snakeBody.some(segment =>{
			return this.equalPosition (segment, position)
		})
	}
	expandSnake(){
		this.increaseWeigth()
		this.snakeBody.push({...this.snakeBody[this.snakeBody.length-1]})
	}
	equalPosition(position1,position2){
		return position1.x === position2.x && position1.y === position2.y
	}
	reduceSnake(){
		if(this.snakeBody.length === 1|| this.snakeBody === null) return
		this.reduceWeight()
		this.snakeBody.splice({...this.snakeBody[this.snakeBody.length-1]},1)
	}

}