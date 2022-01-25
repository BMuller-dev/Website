let equal = document.querySelector(".equal");
let calcul = document.querySelectorAll(".num");
let value = document.querySelector('.value');
let del = document.querySelector('.del');
let percent = document.querySelector('.percent');


equal.addEventListener("click", function () {
  let error = 0;

  try {
    eval(value.value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      value.value = "ERROR";
      error = 1;
    }
  }
  if (error != 1) {
    let x = eval(value.value);
    value.value = parseFloat(x.toFixed(2));
  }
});

calcul.forEach(element => {
  element.addEventListener("click", function (e) {
    if(value.value == 'ERROR') {
      value.value = '';
    }   
    value.value += e.target.textContent
});
});

del.addEventListener('click', function() {
  let x = value.value
  value.value = x.slice(0,-1); 
})

percent.addEventListener('click', function() {
  value.value += '/100'
})
