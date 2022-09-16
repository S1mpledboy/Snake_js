export class JunkFood{
    food = [{x:10 , y:4},
            {x:10 , y:15}
    ]
    GRID_SIZE = 21
    update(indexOfUpdatedElement = 0){
        let newPosition = this.newPosition();
        this.food[indexOfUpdatedElement].x = newPosition.x
        this.food[indexOfUpdatedElement].y = newPosition.y
    };
    draw (game_area){
        this.food.forEach(segment =>{
            let foodPice = document.createElement('div')
            foodPice.style.gridRowStart = segment.x
            foodPice.style.gridColumnStart = segment.y
            foodPice.classList.add('junkfood')
            game_area.appendChild(foodPice)})
    };
    newPosition(){
        return {
            x: Math.floor(Math.random() * this.GRID_SIZE) + 1,
            y: Math.floor(Math.random() * this.GRID_SIZE) + 1
          }
    };
    getFoodType(){
        return "Junk";
    }
};