let equal = document.querySelector(".equal");

equal.addEventListener("click", function () {
  let error = 0;

  try {
    eval(document.calc.txt.value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      document.calc.txt.value = "ERROR";
      error = 1;
    }
  }

  if (error != 1) {
    document.calc.txt.value = eval(document.calc.txt.value);
  }
});
