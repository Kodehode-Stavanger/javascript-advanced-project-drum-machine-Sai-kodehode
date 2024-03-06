// Creating a mainDiv with id #maincontainer and appending to body

const mainDiv = document.createElement("div");
mainDiv.id = "maincontainer";
document.body.append(mainDiv);
// background image to maincontainer
mainDiv.style.backgroundImage = 'url("images/background-image.jpg")';

// Creating h1 element and appending to mainDiv
const heading = document.createElement("h1");
heading.textContent = "Playing Drums Machine with Keybaord & Mouse";
mainDiv.append(heading);

// object array which holds drumname, drumkode(Shortcut), Sound source for drum
const drumNameKey = [
  {
    drumName: "clap",
    drumCode: "a",
    soundSource: "./sounds/clap.wav",
  },

  {
    drumName: "hithat",
    drumCode: "s",
    soundSource: "./sounds/hihat.wav",
  },
  {
    drumName: "kick",
    drumCode: "d",
    soundSource: "./sounds/kick.wav",
  },

  {
    drumName: "openhat",
    drumCode: "f",
    soundSource: "./sounds/openhat.wav",
  },
  {
    drumName: "ride",
    drumCode: "g",
    soundSource: "./sounds/ride.wav",
  },

  {
    drumName: "snare",
    drumCode: "h",
    soundSource: "./sounds/snare.wav",
  },
  {
    drumName: "tink",
    drumCode: "j",
    soundSource: "./sounds/tink.wav",
  },

  {
    drumName: "tom",
    drumCode: "k",
    soundSource: "./sounds/tom.wav",
  },
];

// // Creating a div with id #drumscontainer
const drumsDiv = document.createElement("div");
drumsDiv.id = "drumscontainer";
// creating individual container to keep drumname and drum code values
for (let drumNamesKeys of drumNameKey) {
  const individulDiv = document.createElement("div");
  individulDiv.classList.add("drmsButton");

  //adding another class to the individual container to get shadow effect by clicking the keyboard
  individulDiv.classList.add(drumNamesKeys.drumName);
  // drumcode
  const codeofDrum = document.createElement("p");
  codeofDrum.classList.add("drumcode");
  codeofDrum.textContent = drumNamesKeys.drumCode.toUpperCase();
  // drumcode
  const nameofDrum = document.createElement("p");
  nameofDrum.classList.add("drumname");
  nameofDrum.textContent = drumNamesKeys.drumName.toUpperCase();
  // appending drum name and drum code to individual div
  individulDiv.append(codeofDrum, nameofDrum);
  drumsDiv.append(individulDiv);

  // when we click indiviual div, we are playing the corresponding sound
  individulDiv.addEventListener("click", (e) => {
    const audio = new Audio(drumNamesKeys.soundSource);
    audio.play();
    // calling shadowEffect function when selected indiviual button
    addShadowEffect(individulDiv);
  });
}
// appending drumsDiv to mainDiv
mainDiv.append(drumsDiv);

// when we clicked ont the keyboard shaortcuts
window.addEventListener("keydown", (e) => {
  for (let code of drumNameKey) {
    if (e.key.toLowerCase() === code.drumCode) {
      // playing the sound w.r.to key pressed
      new Audio(code.soundSource).play();
      // to check which individual div is being selected
      const correspondingButton = document.querySelector(`.${code.drumName}`);
      // calling shadowEffect function when pressed key
      addShadowEffect(correspondingButton);
    }
  }
});
// shadow effect function
function addShadowEffect(element) {
  element.style.boxShadow = "0 0 20px #FFFb00";
  setTimeout(() => {
    element.style.boxShadow = "none";
  }, 200);
}
