let payload = {
    firstName: "Johny",
    lastName: "Liver",
    email: "liver@example.com",
    department: "sales"
}

let Users;

const url = 'http://localhost:8081';

function newUser() {
    // make the display block of .popup
    // append new user form in wrapper
    // call addNewUser()

}

function addNewUser(e) {
    e.preventDefault();
    console.log('user added',e.target.fname.value);
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

function updateUser(id) {
    console.log(id, 'updated');
    alert('user updated');
}
