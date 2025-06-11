// quotes slider

let images = [
    { "id": 1, "image": 'img/1.jpg'},
    { "id": 2, "image": 'img/2.jpg'},
    { "id": 3, "image": 'img/3.jpg' },
    { "id": 4, "image": 'img/4.webp' },
    { "id": 5, "image": 'img/5.webp' },
    { "id": 6, "image": 'img/6.webp' },
    { "id": 7, "image": 'img/7.webp' },
    { "id": 8, "image": 'img/8.webp' },
    { "id": 9, "image": 'img/9.webp' },
    { "id": 10, "image": 'img/10.webp' },
    { "id": 11, "image": 'img/11.webp' },
    { "id": 12, "image": 'img/12.webp' },
    { "id": 13, "image": 'img/13.webp' }
]
index = 0;

let prev = () => {
    if (index == 0) {
        index = images.length - 1;
    }
    else {
        index--;
    } 
    display();
}

let next = () => {
    if (index >= images.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    display();
}
let display = () => {
    document.getElementById("image").src = images[index].image;
}
display();
