/**
 * Created by palm on 2017-06-03.
 */

var textField1 = document.getElementById("textField1");
var textField2 = document.getElementById("textField2");
var textField3 = document.getElementById("textField3");

var usedConcepts = [];

/**
 * Returns three random elements from the given array arr
 * @param arr
 * @returns {[*,*,*]}
 */
function getRandomConcepts(arr) {
    var len = arr.length;
    if(len < 3){
        throw "Too small array";
    }

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

/**
 * Updates textfields with concepts
 */
function onClickButton() {


    ensureEnoughConcepts();   //if there are not enough new concepts the first half of the used will be removed
    var newConcepts = getDifference(allConcepts,usedConcepts);
    var conceptArr = getRandomConcepts(newConcepts);
    usedConcepts.push.apply(usedConcepts,conceptArr);

    textField1.innerHTML = "<p>"+conceptArr[0]+"</p>";
    textField2.innerHTML = "<p>"+conceptArr[1]+"</p>";
    textField3.innerHTML = "<p>"+conceptArr[2]+"</p>";
}

function ensureEnoughConcepts() {
    if(allConcepts.length - usedConcepts.length < 3){
        for(i = 0; i < usedConcepts.length/2; i++){
            usedConcepts.shift();
        }
    }
}

function getDifference(original,toBeRemoved){
    return original.filter(function(item) {
        return toBeRemoved.indexOf(item) === -1;
    });
}


