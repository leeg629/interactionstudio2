//console.log("Hello, Airtable");

var Airtable = require("airtable");
//console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keygWB51hJVwkC70B" }).base(
  "appDUmPB3Pu8ttbDW"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("chick").select({
  // use a view to pre-filter the content using Airtable GUI
  view: "hard"
}).eachPage(gotPageOfChicks, gotAllChicks);

// an empty array to hold our data
var chicks = [];

// callback function that receives our data
function gotPageOfChicks(records, fetchNextPage) {
  console.log("gotPageOfChicks()");
  // add the records from this page to our array
  chicks.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllChicks(err) {
  console.log("gotAllChicks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  //consoleLogChicks();
  showChicks();
}

// just loop through the books and console.log them
function consoleLogChicks() {
  console.log("consoleLogChicks()");
  chicks.forEach((chick) => {
    console.log("chick:", chick);
  });
}

function showChicks() {
  console.log("showChicks()");
  console.log(chicks);

  // choose a random integer between 0 and chicks.length
  let index = Math.floor(Math.random() * chicks.length);

  // get that one chick from th array
  let chick = chicks[index];

  // create container
  var chickContainer = document.createElement("div");
  chickContainer.classList.add("chick-container");
  document.querySelector(".container").append(chickContainer);

  // create the image
  var chickImage = document.createElement("img");
  chickImage.classList.add("chick-image");
  chickImage.src = chick.fields.image[0].url;
  chickContainer.append(chickImage);
}




// look through our airtable data, create elements
// function showChicksComplex() {
//   console.log("showChicks()");
//   chicks.forEach((chick) => {
//     // create container for each song
//     var chickContainer = document.createElement("div");
//     chickContainer.classList.add("chick-container");
//     document.querySelector(".container").append(chickContainer);

//     // add song titles

//     var chickDescription = document.createElement("p");
//     chickDescription.classList.add("chick-description");
//     chickDescription.innerText = chick.fields.description;
//     chickContainer.append(chickDescription);

//     var chickImage = document.createElement("img");
//     chickImage.classList.add("chick-image");
//     chickImage.src = chick.fields.image[0].url;
//     chickContainer.append(chickImage);

//     chickContainer.addEventListener("click", function () {
//       chickDescription.classList.toggle("active");
//       chickImage.classList.toggle("active");
//     });

//     // get genre field from airtable
//     // loop through the array and add each genre as
//     // a class to the song container
//     var chickDifficulty = chick.fields.difficulty;
//     chickDifficulty.forEach(function (difficulty) {
//       chickContainer.classList.add(difficulty);
//     });

//     // clicking on filter by Easy

//     var filterEasy = document.querySelector(".js-easy");
//     filterEasy.addEventListener("click", function () {
//       if (chickContainer.classList.contains("Easy")) {
//         chickContainer.style.display = "inline-block";
//       } else {
//         chickContainer.style.display = "none";
//       }
//     });

//     // filter by Medium

//     var filterMedium = document.querySelector(".js-medium");
//     filterMedium.addEventListener("click", function () {
//       if (chickContainer.classList.contains("Medium")) {
//         chickContainer.style.display = "none";
//       } else {
//         chickContainer.style.display = "none";
//       }
//     });

//     // filter by Hard

//     var filterHard = document.querySelector(".js-hard");
//     filterHard.addEventListener("click", function () {
//       if (chickContainer.classList.contains("Hard")) {
//         chickContainer.style.display = "none";
//       } else {
//         chickContainer.style.display = "none";
//       }
//     });

//     //canvas
//     $(document).ready(function () {
//       var clic = false;
//       var xCoord,
//         yCoord = "";
//       var canvas = document.getElementById("can");
//       var cntx = canvas.getContext("2d");
//       cntx.strokeStyle = "red";
//       cntx.lineWidth = 10;
//       cntx.lineCap = "round";
//       cntx.fillStyle = "#fff";
//       cntx.fillRect(0, 0, canvas.width, canvas.height);

//       $("#can").mousedown(function (canvas) {
//         clic = true;
//         cntx.save();
//         xCoord = canvas.pageX - this.offsetLeft;
//         yCoord = canvas.pageY - this.offsetTop;
//       });

//       $(document).mouseup(function () {
//         clic = false;
//       });

//       $(document).click(function () {
//         clic = false;
//       });

//       $("#can").mousemove(function (canvas) {
//         if (clic == true) {
//           cntx.beginPath();
//           cntx.moveTo(
//             canvas.pageX - this.offsetLeft,
//             canvas.pageY - this.offsetTop
//           );
//           cntx.lineTo(xCoord, yCoord);
//           cntx.stroke();
//           cntx.closePath();
//           xCoord = canvas.pageX - this.offsetLeft;
//           yCoord = canvas.pageY - this.offsetTop;
//         }
//       });

//       $("#clr > div").click(function () {
//         cntx.strokeStyle = $(this).css("background-color");
//       });

//       $("#eraser").click(function () {
//         cntx.strokeStyle = "#fff";
//       });

//       $("#clear").click(function () {
//         cntx.fillStyle = "#fff";
//         cntx.fillRect(0, 0, canvas.width, canvas.height);
//         cntx.strokeStyle = "red";
//         cntx.fillStyle = "red";
//       });
//     });
//   });
// }
