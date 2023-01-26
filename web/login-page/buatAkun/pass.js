const passwordEle = document.getElementById('masukanPassword');
const toggleEle = document.getElementById('lihat');

toggleEle.addEventListener('click', function () {
    const type = passwordEle.getAttribute('type');

    passwordEle.setAttribute(
        'type',
        type === 'password' ? 'text' : 'password'
    );
});
