let result = document.querySelector("#result");

// Detect when we are pressing a key anywhere on the webpage (document)
document.addEventListener("keydown", function(event){

//to play on the key A do this(using Jquery):
const audio = document.getElementById('audio');


  // Check if the key we pressed is the p key
  // If so, switch our page to paris
  if (event.key == "p"){
  document.body.className="paris";
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'p') {
    	if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      } else {
      	audio.play();
      }
    }

  // Check if the key we pressed is the o key
  // If so, switch our page to osaka
  if (event.key == "o"){
  document.body.className="osaka";
  }

  // Check if the key we pressed is the i key
  // If so, switch our page to istanbul
  if (event.key == "i"){
  document.body.className="istanbul";
  }

  // Check if the key we pressed is the u key
  // If so, switch our page to ulaanbaatar
  if (event.key == "u"){
  document.body.className="ulaanbaatar";
  }

  // Check if the key we pressed is the y key
  // If so, switch our page to yangon
  if (event.key == "y"){
  document.body.className="yangon";
  }

  // Check if the key we pressed is the t key
  // If so, switch our page to taipei
  if (event.key == "t"){
  document.body.className="taipei";
  }

  // Check if the key we pressed is the r key
  // If so, switch our page to rio de janeiro
  if (event.key == "r"){
  document.body.className="rio";
  }

  // Check if the key we pressed is the e key
  // If so, switch our page to rio de edinburgh
  if (event.key == "e"){
  document.body.className="edinburgh";
  }

  // Check if the key we pressed is the w key
  // If so, switch our page to waikiki
  if (event.key == "w"){
  document.body.className="waikiki";
  }

  // Check if the key we pressed is the q key
  // If so, switch our page to quebeccity
  if (event.key == "q"){
  document.body.className="quebeccity";
  }

}
})
