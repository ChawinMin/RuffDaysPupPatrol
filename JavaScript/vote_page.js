let doggos = [];
   
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
  
window.addEventListener("load", (event) => {

    let breed = document.getElementById("breed-list");
    let breed1 = document.getElementById("breed-list1");
    let breed2 = document.getElementById("breed-list2");
    breed.textContent = localStorage.getItem("doggos");
    breed1.textContent = localStorage.getItem("doggos1");
    breed2.textContent = localStorage.getItem("doggos2");



    let sel = document.getElementById('breed');
    let sub = document.getElementById('submit');

    sel.addEventListener("click", (event) => {
      if (sel.value == "Select an option"){
        sub.disabled = true;
      }
      else{
        sub.disabled = false;
      }
      //console.log(sel.value);

    });
  });



function testResults(form) {

    let title = document.getElementById("title");
    let breed = document.getElementById("breed-list");
    
    var inputValue = form.breed.value;
    doggos.push(inputValue);
    

    let uno = localStorage.getItem("doggos");
    let dos = localStorage.getItem("doggos1");
    let tres = localStorage.getItem("doggos2");


    if (localStorage.getItem("doggos")){
      localStorage.setItem("doggos1", uno);
    }

    
    if (localStorage.getItem("doggos1")){
      localStorage.setItem("doggos2", dos);
    }
    
    localStorage.setItem("doggos", inputValue);
    
}

//makes it so you can only input letters in the Name input box
function lettersOnly(inputText) {
  var letters = /^[A-Za-z]+$/;
  if(inputText.value.match(letters)) {
      return true;
      }

  else{
    alert('Please input alphabet letters only for your name');
    return false;
    }
}




