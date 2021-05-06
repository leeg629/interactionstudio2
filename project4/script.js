function stopAllSounds() {
	//stop homepage sound
  document.getElementById('home').pause();

	//stop paris
	document.getElementById('paris').pause();

	//stop osaka
	document.getElementById('osaka').pause();

	//stop istanbul
	document.getElementById('istanbul').pause();

	//stop ulaanbaatar
	document.getElementById('ulaanbaatar').pause();

	//stop yangon
	document.getElementById('yangon').pause();

	//stop taipei
	document.getElementById('taipei').pause();

	//stop rio
	document.getElementById('rio').pause();

	//stop edinburgh
	document.getElementById('edinburgh').pause();

	//stop waikiki
	document.getElementById('waikiki').pause();

	//stop quebeccity
	document.getElementById('quebeccity').pause();

	//stop lisbon
	document.getElementById('lisbon').pause();

	//stop krakow
	document.getElementById('krakow').pause();

	//stop jakarta
	document.getElementById('jakarta').pause();

	//stop hanoi
	document.getElementById('hanoi').pause();

	//stop guimaras
	document.getElementById('guimaras').pause();

	//stop frankfurt
	document.getElementById('frankfurt').pause()

	//stop dubai
	document.getElementById('dubai').pause();

	//stop seoul
	document.getElementById('seoul').pause();

	//stop amsterdam
	document.getElementById('amsterdam').pause();

	//stop mexicocity
	document.getElementById('mexicocity').pause();

	//stop newyork
	document.getElementById('newyork').pause();

	//stop bangkok
	document.getElementById('bangkok').pause();

	//stop venice
	document.getElementById('venice').pause();

	//stop copenhagen
	document.getElementById('copenhagen').pause();

	//stop xian
	document.getElementById('xian').pause();

	//stop zermatt
	document.getElementById('zermatt').pause();
}

document.addEventListener('keydown', function (event) {
	if (event.key == "p") {
		document.body.className = "paris";
		stopAllSounds();
		document.getElementById('paris').currentTime=0;
		document.getElementById('paris').play();
	}

	if (event.key == "o") {
		document.body.className = "osaka";
		stopAllSounds();
		document.getElementById('osaka').currentTime=0;
		document.getElementById('osaka').play();
  }

	if (event.key == "i") {
		document.body.className = "istanbul";
		stopAllSounds();
		document.getElementById('istanbul').currentTime=0;
		document.getElementById('istanbul').play();
	}

	if (event.key == "u") {
		document.body.className = "ulaanbaatar";
		stopAllSounds();
		document.getElementById('ulaanbaatar').currentTime=0;
		document.getElementById('ulaanbaatar').play();
	}

	if (event.key == "y") {
		document.body.className = "yangon";
		stopAllSounds();
		document.getElementById('yangon').currentTime=0;
		document.getElementById('yangon').play();
	}

	if (event.key == "t") {
		document.body.className = "taipei";
    stopAllSounds();
    document.getElementById('taipei').currentTime=0;
    document.getElementById('taipei').play();
	}

	if (event.key == "r") {
		document.body.className = "rio";
    stopAllSounds();
    document.getElementById('rio').currentTime=0;
    document.getElementById('rio').play();
	}

	if (event.key == "e") {
		document.body.className = "edinburgh";
    stopAllSounds();
    document.getElementById('edinburgh').currentTime=0;
    document.getElementById('edinburgh').play();
	}

	if (event.key == "w") {
		document.body.className = "waikiki";
    stopAllSounds();
    document.getElementById('waikiki').currentTime=0;
    document.getElementById('waikiki').play();
	}

	if (event.key == "q") {
		document.body.className = "quebeccity";
    stopAllSounds();
    document.getElementById('quebeccity').currentTime=0;
    document.getElementById('quebeccity').play();
	}

  if (event.key == "l") {
    document.body.className = "lisbon";
    stopAllSounds();
    document.getElementById('lisbon').currentTime=0;
    document.getElementById('lisbon').play();
  }

  if (event.key == "k") {
    document.body.className = "krakow";
    stopAllSounds();
    document.getElementById('krakow').currentTime=0;
    document.getElementById('krakow').play();
  }

  if (event.key == "j") {
    document.body.className = "jakarta";
    stopAllSounds();
    document.getElementById('jakarta').currentTime=0;
    document.getElementById('jakarta').play();
  }

  if (event.key == "h") {
    document.body.className = "hanoi";
    stopAllSounds();
    document.getElementById('hanoi').currentTime=0;
    document.getElementById('hanoi').play();
  }

});
