console.log('JS rules')
//Canvas initialization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = () => {
  //Start button on click
  document.getElementById('start-button').onclick = () => {
    console.log('starting');
    startGame();
  };

  function startGame() {
    
    game.start()
    updateCar();
  }
  document.addEventListener('keydown', e=>{
    switch(e.code){
        case 'ArrowLeft':
            car.moveLeft();
            break;
        case 'ArrowRight':
            car.moveRight();
            break;
    }
    updateCar()
  })

  function updateCar() {
    ctx.clearRect(0,0,500,700);
    backg.drawB();
    car.drawC();
  }
}




