// tag selector 
let h1= document.getElementsByTagName("h1");
// html collection array
console.log(h1[1]);

// class selector
let h3= document.getElementsByClassName("a");
console.log(h3[0]);

// id selector
let h2= document.getElementById("b");
// it will return single element and the first element
console.log(h2);

//query selector (it will works on all the three selector)
let h4= document.querySelector("#b");
// it will return single element and the first element
console.log(h4);

//query selector all
let h5= document.querySelectorAll(".a");
// nodelist array
console.log(h5[0]);
