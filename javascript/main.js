/**
 * Created by palm on 2017-06-03.
 */

console.log("hej");

var textField1 = document.getElementById("textField1");
var textField2 = document.getElementById("textField2");
var textField3 = document.getElementById("textField3");

var movies = ["Nyckeln till frihet (1994)",
    "Gudfadern (1972)",
    "Gudfadern del II (1974)",
    "The Dark Knight (2008)",
    "12 edsvurna män (1957)",
    "Schindler's List (1993)",
    "Pulp Fiction (1994)",
    "Sagan om konungens återkomst (2003)",
    "Den gode, den onde, den fule (1966)",
    "Fight Club (1999)",
    "Sagan om ringen: Härskarringen (2001)",
    "Rymdimperiet slår tillbaka (1980)",
    "Forrest Gump (1994)",
    "Inception (2010)"];

function getRandomConcepts(arr) {
    var len = arr.length;
    var rand1 = Math.round(Math.random()*len-0.5);
    var rand2 = Math.round(Math.random()*len-0.5);
    var rand3 = Math.round(Math.random()*len-0.5);

    while(rand2 == rand1){
        rand2 = Math.round(Math.random()*len-0.5);
    }
    while(rand3 == rand2 || rand3 == rand1){
        rand3 = Math.round(Math.random()*len-0.5);
    }
    return [arr[rand1],arr[rand2],arr[rand3]];

}

function onClickButton() {

    var moviesarr = getRandomConcepts(movies);
    textField1.innerHTML = moviesarr[0];
    textField2.innerHTML = moviesarr[1];
    textField3.innerHTML = moviesarr[2];

}
