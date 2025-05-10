const gallery = document.getElementById("gallery");
const modaln = document.getElementById("modal");
const modalimage = document.getElementById("modal-image");
const closebtn = document.getElementById("close");

gallery.onclick = function(e) {
    if (e.target.tagName === 'IMG') {
        modalimage.src = e.target.src;
        modaln.style.display = "flex";
    }
};

closebtn.onclick = function() {
    modaln.style.display = "none";
};

modaln.onclick = function(e) {
    if (e.target === modaln) {
        modaln.style.display = "none";
    }
};