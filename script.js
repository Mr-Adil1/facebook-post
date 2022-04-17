const row1 = document.querySelector('.row-1');
const col = row1.querySelector('.col-1');
const userimg = row1.querySelector('img');
const lable = row1.querySelector('label')
const clos = row1.querySelector('.clos');
const imgicon = row1.querySelector('.img-icon');
const file = document.getElementById('file-input');

userimg.addEventListener('click', () => {
    lable.classList.add('select');
    document.getElementById('file-input').type = 'file';
});
clos.addEventListener('click', () => {
    lable.classList.remove('select');
    document.getElementById('file-input').type = '';
});