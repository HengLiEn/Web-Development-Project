//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Open and close nav on clickconst selectElement = (element) =>document.querySelector(element);
selectElement('.menu-icons').addEventListener('click', () => {
   selectElement('nav').classList.toggle('active');
});
