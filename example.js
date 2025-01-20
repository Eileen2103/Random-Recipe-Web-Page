
function showDiv(divId) {

    //To hide selected divs

    const openDivs = document.querySelectorAll('targetDiv');

    openDivs.forEach(div => {

        div.classList.remove('display');
        div.classList.add('hidden');

    });

    //To show desired div when a button is clicked
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {

        if (!targetDiv.classList.contains('display')) {
            targetDiv.classList.remove('hidden');
            targetDiv.classList.add('display');

        }
    }
}
function hideDiv(divID) {
    const targetDiv = document.getElementById(divID);

    targetDiv.classList.remove('display');
    targetDiv.classList.add('hidden');

}

function randomNum() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return randomNumber;

} 