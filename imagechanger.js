function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("img2/pixel1.jpg")) {
        Image_Id.src = "img2/pixel2.jpg";
    }
    else {
        Image_Id.src = "img2/pixel1.jpg";
    }
}