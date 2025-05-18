fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
     let cotainer = document.getElementById("cotainer")


     let names = data.name[0];
     let common = document.createElement("p")
     common.innerText = names.common
     
     
     

         



  });