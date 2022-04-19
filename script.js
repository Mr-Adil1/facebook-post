'use strict';
const row1 = document.querySelector('.row-1');
const inputs = document.getElementById('inputs');
const userimg = row1.querySelector('img');
const myimg = document.querySelectorAll('input[type="image"]');
const clos = row1.querySelector('.clos');
const file = document.getElementById('file-input');
const nameinput = document.getElementById('name');
var myname = document.getElementsByClassName('myname');
const img = row1.querySelector('.icon');
const dec = document.getElementById('desc');
const mypost = document.querySelector('.mypost');
console.log(mypost);
const post = document.querySelector('.post-row-1');
const textinput = post.querySelector('.caption');
const cansle = post.querySelector('.cansle');
const chosephoto = document.getElementById('addphoto');
const deletephoto = post.querySelector('.delete');
const selecteddiv = document.querySelector('.selected');
const postimg = document.querySelector('.onpostimg');
// window.addEventListener('load', () => {
//     setTimeout(() => {
//         inputs.style.top = '20%';
//     }, 2000)
// });

clos.addEventListener('click', () => {
    inputs.style.top = '-200px';
});
userimg.onclick = () => {
    inputs.style.top = '20%';
}


function username() {
    for (var i = 0; i < myname.length; i++) {
        myname[i].innerHTML = nameinput.value;
    }
}
file.addEventListener('change', (event) => {
    var newimg = URL.createObjectURL(event.target.files[0])
    userimg.src = newimg;
    for (var i = 0; i < myimg.length; i++) {
        myimg[i].src = newimg;
    }
    inputs.style.top = '-200px';
});

img.onclick = () => {
    post.style.display = 'flex';
};
cansle.onclick = () => {
    post.style.display = 'none';
};

file.addEventListener('change', (event) => {
    var newimg = URL.createObjectURL(event.target.files[0])
    userimg.src = newimg;
    for (var i = 0; i < myimg.length; i++) {
        myimg[i].src = newimg;
    }
    inputs.style.top = '-200px';
});

chosephoto.addEventListener('change', (event) => {
    var nedata = URL.createObjectURL(event.target.files[0]);
    selecteddiv.style.display = 'block';
    postimg.src = nedata;

});

function postfunction() {
    dec.textContent = textinput.value;
    if (postimg.src) {
        mypost.src = postimg.src
    }
    // mypost.src = postimg
    deletephoto.onclick = () => {
        postimg.src = '';
        selecteddiv.style.display = 'none';
    };
    post.style.display = 'none';
    textinput.value = '';
    selecteddiv.style.display = 'none';
    postimg.src = '';
}