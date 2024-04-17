let payload = {
    firstName: "Johny",
    lastName: "Liver",
    email: "liver@example.com",
    department: "sales"
}
const popup = document.getElementsByClassName('popup')[0];
const wrapperpopup = document.querySelector('.popup>.wrapper');
const updatebtn = document.querySelectorAll('.update-btn');
const deletebtn = document.querySelectorAll('.delete-btn');
updatebtn.forEach(el => {
    el.addEventListener('click', (e) => {
        popup.style.display = 'flex';
        wrapperpopup.innerHTML = `
        <i class="fa-solid fa-xmark" onclick="back()"></i>
        <div class="update-user">
            <h1>Update User </h1>
            <p>ID: 123</p>
            <form onsubmit="updateUser(event)" data-name="999">
                <label for="fname">First name:</label><br>
                <input type="text" id="fname" name="fname" required><br>
                <label for="lname">Last name:</label><br>
                <input type="text" id="lname" name="lname"><br>
                <label for="email">Email: </label> <br>
                <input type="email" name="email" id="email"> <br>
                <label for="department">Department: </label><br>
                <input type="text" name="department" id="department"> <br>
                <br>
                <input type="submit" value="Submit">
            </form>
        </div>
        `;
    })
})
deletebtn.forEach(el => {
    el.addEventListener('click', (e) => {
        popup.style.display = 'flex';
        wrapperpopup.innerHTML = `
        <i class="fa-solid fa-xmark" onclick="back()"></i>
        <div class="delete-user">
            <p>Are you sure?</p>
            <button onclick="deleteUser(2)">Yes</button>
        </div>
        `;
    })
})

let Users;

const url = 'http://localhost:8081';
// const url = 'https://nice-gold-python-fez.cyclic.app';


function newUser() {
    // make the display block of .popup
    // append new user form in wrapper
    // call addNewUser()
    popup.style.display = 'flex';
    console.log(wrapperpopup);
    wrapperpopup.innerHTML = `
    <i class="fa-solid fa-xmark" onclick="back()"></i>
    <div class="add-user">
        <h1>Add New User</h1>
        <form onsubmit="addNewUser(event)">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="abc" required><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname"><br>
            <label for="email">Email: </label> <br>
            <input type="email" name="email" id="email"> <br>
            <label for="department">Department: </label><br>
            <input type="text" name="department" id="department"> <br>
            <br>
            <input type="submit" value="Submit">
        </form>
    </div>
    `;

}

function addNewUser(e) {
    e.preventDefault();
    console.log('user added', e.target.fname.value);
    // get data into payload.
    // make api call with payload
    // after confirmation pop up make the popup display none.
}

// onload fetch all users data
// load the data into Users
// append the html with data, and addevent listeners to open correct function

function deleteUser(id) {
    console.log(id, 'deleted');
    alert('user deleted')
}

function updateUser(event) {
    event.preventDefault();
    console.log(event.target.dataset);
    console.log(event.target);
    alert('user updated');
}

function back() {
    const popup = document.getElementsByClassName('popup')[0];
    // console.log(popup);
    popup.style.display = 'none';

}