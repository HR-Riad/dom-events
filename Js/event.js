function makeRed(){
    document.body.style.backgroundColor='red';
}

/* handle blue button click by setting function name */
const blueButton = document.getElementById('make-blue -button');
// just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue()
{
    document.body.style.backgroundColor ='blue';
}


// handle event using anonymous function
const buttonGreen = document.getElementById('make-button-green');
buttonGreen.onclick = function ()
{
    document.body.style.backgroundColor = 'green';
}

/* handle event using by EventListener */
const goldenrodButton = document.getElementById('make-goldenrod-button');
goldenrodButton.addEventListener('click',makeGoldenRod);

function makeGoldenRod(){
    document.body.style.background='goldenrod';
}
