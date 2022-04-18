const row1 = document.querySelector('.row-1');
const inputs = document.getElementById('inputs');
const userimg = row1.querySelector('img');
const myimg = document.getElementById('userimg');
const clos = row1.querySelector('.clos');
const file = document.getElementById('file-input');
const nameinput = document.getElementById('name');
var myname = document.getElementById('myname');
console.log(myname);

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         inputs.style.top = '50%';
//     }, 2000)
// });

clos.addEventListener('click', () => {
    inputs.style.top = '-200px';
});
userimg.onclick = () => {
    inputs.style.top = '50%';
}


function username() {
    myname.innerHTML = nameinput.value;
}

file.addEventListener('change', (event) => {
    var newimg = URL.createObjectURL(event.target.files[0])
    userimg.src = newimg;
    myimg.src = userimg.src;
    inputs.style.top = '-200px';
})