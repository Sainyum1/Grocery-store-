// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modalSU = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSU) {
    modalSU.style.display = "none";
  }
}
function fun()
{
	window.location.assign("table2.html");
	
}






