let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.num').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('.num').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('.num').value = string;
      }
  })
})