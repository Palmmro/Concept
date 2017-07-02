/**
 * Created by palm on 2017-06-03.
 */

var textField1 = document.getElementById("textField1");
var textField2 = document.getElementById("textField2");
var textField3 = document.getElementById("textField3");

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
    var conceptArr = getRandomConcepts(allConcepts);
    textField1.innerHTML = "<p>"+conceptArr[0]+"</p>";
    textField2.innerHTML = "<p>"+conceptArr[1]+"</p>";
    textField3.innerHTML = "<p>"+conceptArr[2]+"</p>";
}


