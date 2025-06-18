function getnumberslabib(){
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  return [n1,n2];
}

function add() {
  const [n1, n2] = getnumberslabib();
  document.getElementById("results").value = n1+n2;
}

function sub(){
  const [n1,n2] = getnumberslabib();
  document.getElementById("results").value = n1 - n2;
}

function mul(){
  const [n1,n2] = getnumberslabib();
  document.getElementById("results").value = n1 * n2;
}

function div(){
  const [n1,n2] = getnumberslabib();
  if(n2 == 0)
  {
    alert("Cannot Divide by Zero");
    document.getElementById("results").value = "";
  }
  else{
    const result = (n1/n2).toFixed(3); // limit to 3 decimal places
    document.getElementById("results").value = result;
  }
}

function clears(){
  document.getElementById("num1").value ="";
  document.getElementById("num2").value ="";
  document.getElementById("results").value ="";
}