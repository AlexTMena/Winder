function modelImage(picNumber) {
    x = document.getElementsByClassName('portfolio-entry')[picNumber].getAttribute('src');
    document.getElementById('modelImage').setAttribute('src',x);
}

