var button = document.getElementById('button')
var body = document.getElementById('body')
var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
console.log("WE GAT THAT WORK")
body.style.backgroundColor = colors[colorIndex]
}

