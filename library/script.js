const myLibrary = [];

function book() {

}

function addBookToLibrary() {

}

const h2List = document.querySelectorAll('h2')

const [showDBoxBtn, ...others] = h2List
const dBox = document.querySelector('dialog');

const showDBox = function () {
    dBox.showModal()
}

showDBoxBtn.addEventListener('click', showDBox)
