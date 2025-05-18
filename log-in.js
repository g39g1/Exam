document.getElementById("submit").onclick = function(e){
    e.preventDefault()
    let form = document.getElementById("form")
    let email = document.getElementById("input-email").value
    let password = document.getElementById("input-passwoed").value


fetch('https://68219a05259dad2655afc16d.mockapi.io/log-in', {
  method: 'POST',
  body: JSON.stringify({
 
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
    window.location.href = "apicontery.html"
  });















}
