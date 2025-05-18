
document.getElementById("btn").onclick = function(e){
    e.preventDefault()
    let form = document.getElementById("form")
    let username = document.getElementById("input-Username").value
    let email = document.getElementById("input-email").value
    let password = document.getElementById("input-passwoed").value


    if (username.length < 4)
        {
        alert("Username must be atleast 4 charactrs long, Please Try Again");
        return
        }

    let emailrejec = /^\S+@\S+\.\S+$/;
    if (!emailrejec.test(email)) {
        alert("email error")
        return
    }

    if (password.length < 6) {
        alert("Must be more than six letters or number")
        return
    }

    fetch('https://68219a05259dad2655afc16d.mockapi.io/post', {
  method: 'POST',
  body: JSON.stringify({
   username : username,
   email : email,
   password : password
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
    localStorage.getItem("user", JSON.stringify(data))
    console.log(data)
    window.location.href = "log-in.html"
  });

}