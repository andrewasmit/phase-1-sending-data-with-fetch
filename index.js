// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        }),
    })
    .then(res => res.json())
    .then(data=>idHandler(data))
    .catch(error => errorHandler(error));
}

function idHandler(e){
    let post = document.createElement('div');
    post.innerHTML = e.id;
    document.body.appendChild(post);
}

function errorHandler(e){
    let msg = document.createElement('div');
    msg.innerHTML = e.message;
    document.body.appendChild(msg);
}

// submitData('andrew', 'andrewasmit');