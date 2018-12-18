const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let idx = 0
<<<<<<< HEAD

  document.body.addEventListener("keydown", (e) => {
  const key = e.key

  idx = (codes[idx] === key) ? ++idx : 0

=======
 
  document.body.addEventListener("keydown", (e) => {
  const key = e.key
  
  idx = (codes[idx] === key) ? ++idx : 0
  
>>>>>>> 66b5f1ea6853edb587fb099835c084d775b48fdf
  if (idx === codes.length) {
    window.alert("Hurray!");
    idx = 0
  }
<<<<<<< HEAD

=======
  
>>>>>>> 66b5f1ea6853edb587fb099835c084d775b48fdf
});
}
