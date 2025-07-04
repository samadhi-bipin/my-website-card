// Grab elements
const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

// 👉 Open sliding panel on arrow click
arr.addEventListener("click", () => {
  arr.classList.add("active_arr");
  if (left_container.classList.contains("off")) {
    left_container.classList.remove("off");
    left_container.classList.add("active");
  }
});

// ❌ Close sliding panel on plus button click
clc.addEventListener("click", () => {
  arr.classList.remove("active_arr");
  if (left_container.classList.contains("active")) {
    left_container.classList.remove("active");
    left_container.classList.add("off");
  }
});

// 🔤 Initialize Typed.js effect
const typed = document.querySelector('.typed');
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000
  });
  
}
