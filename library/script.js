const userLibrary = [];
userLibrary.push(new bookBuild('The Hobbit', 'J.R.R. Tolkien', 1937, true))
userLibrary.push(new bookBuild('I Am Legend', 'Richard Matheson', 1954, false))
userLibrary.push(new bookBuild('The Martian', 'Andy Weir', 2011, true))
userLibrary.push(new bookBuild('The Lord of the Rings', 'J.R.R. Tolkien', 1954, false))


function bookBuild(bookTitle, bookAuthor, releaseYear, isRead) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.releaseYear = releaseYear;
    this.isReadValue = isRead;
}

const h2List = document.querySelectorAll('h2')
const [showDBoxBtn, ...others] = h2List
const dBox = document.querySelector('dialog');
const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('bookAuthor')
const releaseYear = document.getElementById('releaseYear')
const isRead = document.getElementById('isRead')
const closeBtn = document.getElementById('closeBtn')
const submitBtn = document.getElementById('submitBtn')
const cardCont = document.querySelector('.bookCardContainer')

dBox.addEventListener('close', () => dBox.close())
showDBoxBtn.addEventListener('click', () => dBox.showModal())
closeBtn.addEventListener('click', () => {
    console.log("Button click: close")
    dBox.close()
})

function clearDialog() {
    bookTitle.value = ''; // Clear the book title input field
    bookAuthor.value = ''; // Clear the book author input field
    releaseYear.value = ''; // Reset the release year select to its default
    isRead.checked = false; // Uncheck the isRead checkbox
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    dBox.close()
    while (cardCont.firstChild) {
        cardCont.removeChild(cardCont.firstChild)
    }
    clearDialog()
    userLibrary.forEach(renderBook)
});

function addBookToLibrary() {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const year = releaseYear.value;
    const isReadValue = isRead.checked;

    const userBook = new bookBuild(title, author, year, isReadValue);
    // console.log("List is:", userBook)
    userLibrary.push(userBook);
    // console.log("Object is", userLibrary[0])
}

function createBookCard(title, author, year, isRead) {
    let status = isRead === true ? 'read' : 'notRead'
    const bookCard = document.createElement('div')
    bookCard.classList.add('bookCard')
    bookCard.innerHTML = `<p>Title: ${title}</p> 
               <p>Author: ${author}</p> 
                <p>Release Year: ${year}</p> 
                <p class="status ${status}">Status: ${isRead === true ? 'Read' : 'Not Read'}</p>`

    return bookCard
}

function renderBook(bookItem) {
    cardCont.appendChild(createBookCard(bookItem['title'], bookItem['author'], bookItem['releaseYear'], bookItem['isReadValue']))
}

userLibrary.forEach(renderBook)