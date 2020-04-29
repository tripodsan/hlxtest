
function foo() {
  let a = 1;

  function b() {
    a++;
    c++;
    console.log(a,c);
  }

  let c = 0;
  return b;
}

foo()();
