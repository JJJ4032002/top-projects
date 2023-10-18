const userLibrary = [];

function BookBuild(bookTitle, bookAuthor, releaseYear, isRead) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.releaseYear = releaseYear;
    this.isReadValue = isRead;
}

userLibrary.push(new BookBuild('The Hobbit', 'J.R.R. Tolkien', 1937, true));
userLibrary.push(new BookBuild('I Am Legend', 'Richard Matheson', 1954, false));
userLibrary.push(new BookBuild('The Martian', 'Andy Weir', 2011, true));
userLibrary.push(new BookBuild('The Lord of the Rings', 'J.R.R. Tolkien', 1954, false));

const h2List = document.querySelectorAll('h2');
const [showDBoxBtn] = h2List;
const dBox = document.querySelector('dialog');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('bookAuthor');
const releaseYear = document.getElementById('releaseYear');
const isRead = document.getElementById('isRead');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');
const cardCont = document.querySelector('.bookCardContainer');

dBox.addEventListener('close', () => dBox.close());
showDBoxBtn.addEventListener('click', () => dBox.showModal());

function clearDialog() {
    bookTitle.value = ''; // Clear the book title input field
    bookAuthor.value = ''; // Clear the book author input field
    releaseYear.value = ''; // Reset the release year select to its default
    isRead.checked = false; // Uncheck the isRead checkbox
}

function clearCardCont() {
    while (cardCont.firstChild) {
        cardCont.removeChild(cardCont.firstChild);
    }
}

function addBookToLibrary() {
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const year = releaseYear.value;
    const isReadValue = isRead.checked;

    const userBook = new BookBuild(title, author, year, isReadValue);
    // console.log("List is:", userBook)
    userLibrary.push(userBook);
    // console.log("Object is", userLibrary[0])
}

// eslint-disable-next-line no-shadow
function createBookCard(index, title, author, year, isRead) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    const checkboxCheck = isRead === true ? `<input type="checkbox" checked="checked" data-index=${index}>` : `<input type="checkbox" data-index=${index}>`;
    bookCard.innerHTML = `<p>Title: ${title}</p>
                <p>Author: ${author}</p> 
                <p>Release Year: ${year}</p> 
                <div class="status ${isRead === true ? 'read' : 'notRead'}">
                    <p>Status: ${isRead === true ? 'Read' : 'Not Read'}</p>
                    ${checkboxCheck}
                </div>
                <button class="removeBtn" data-index="${index}">Remove book</button>
                `;
    return bookCard;
}

function removeBook(removeBtn) {
    const dataIndex = removeBtn.getAttribute('data-index');
    userLibrary.splice(dataIndex, 1);
}

function renderBook() {
    clearCardCont();
    for (let i = 0; i < userLibrary.length; i += 1) {
        const bookItem = userLibrary[i];
        cardCont.appendChild(
            createBookCard(
                i,
                bookItem.title,
                bookItem.author,
                bookItem.releaseYear,
                bookItem.isReadValue,
            ),
        );
        // console.log("Book added to library:", userLibrary[i])
    }
    // eslint-disable-next-line no-use-before-define
    removeBtnListeners();
    // eslint-disable-next-line no-use-before-define
    checkboxListeners();
}

function changeStatus(checkBox) {
    const dataIndex = checkBox.getAttribute('data-index');
    userLibrary[dataIndex].isReadValue = !userLibrary[dataIndex].isReadValue;
    renderBook();
}

function removeBtnListeners() {
    const removeGrp = document.querySelectorAll('.removeBtn');
    removeGrp.forEach((removeBtn) => {
        removeBtn.addEventListener('click', () => {
            removeBook(removeBtn);
            renderBook();
        });
    });
}

renderBook();

closeBtn.addEventListener('click', () => {
    // console.log("Button click: close")
    dBox.close();
});
// eslint-disable-next-line no-unused-vars
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    dBox.close();
    clearDialog();
    renderBook();
});

function checkboxListeners() {
    const checkboxGrp = document.querySelectorAll('input[type="checkbox"]');
    checkboxGrp.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            changeStatus(checkbox);
        });
    });
}
