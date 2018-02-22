var tasks = [
    "Adopt a Bambino.",
    "Cook dinner",
    "Pack a lunch",
]

function randomString(array){
    var randomNumber = Math.floor(Math.random()*array.length);
    return array[randomNumber];
}//randomstring

module.exports = tasks