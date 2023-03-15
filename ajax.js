// load all users 
const btn = document.getElementById('btn');
const usersEle = document.querySelector('.users');

const getUsers = (e) => {
    e.preventDefault();
    const http = new XMLHttpRequest();

    http.open("GET", "users.json", true);

    http.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const users = JSON.parse(this.responseText);
            let output = "";
            users.forEach(user => {
                output += `
                    <hr>
                    <ul>
                        <li>Id: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `
            });
            usersEle.innerHTML = output;
        }
    }

    http.send();
}


btn.addEventListener('click', getUsers);