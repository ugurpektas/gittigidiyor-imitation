/*İnput tıklandığında body kararması ve section bölümüne tıklandığında eski haline gelmesi*/
const inputdiv = document.querySelector('#inputs');
inputdiv.addEventListener('click',Dark);
inputdiv.addEventListener('mouseleave',light);

/*POPOVER MENÜ LOGİN & SEPET*******BOOTSTRAP */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

/* LOGİN & BASKET BÖLÜMÜ*/
/**Menü üzerine gelince body dark tema**/

document.querySelector('#login').addEventListener('mouseenter',Dark);
document.querySelector('#basket').addEventListener('mouseenter',Dark);

/**Menü üzerinden çıktığında body light tema**/
document.querySelector('#login').addEventListener('mouseleave',light);
document.querySelector('#basket').addEventListener('mouseleave',light);


/*functions*/
function Dark() {
  document.body.classList=('dark');

}
function light(){
  document.body.classList=('light');
}

