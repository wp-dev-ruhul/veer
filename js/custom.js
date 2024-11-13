// mouse click effect js part start
const audio = new Audio("./audio/mouse_click.wav");

// Define the playAudio function to be called on button click
function ruhul(){
  audio.play().catch(error => {
    console.error("Error playing audio:", error);
  });
}

// mouse click effect js part end