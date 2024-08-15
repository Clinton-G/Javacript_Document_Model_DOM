document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if (name === '' || email === '' || message === '') {
        alert('Please Fill In All Forms');
        return;
    }

    const userInput = {
        name: name,
        email: email,
        message: message
};

console.log(userInput);

});
