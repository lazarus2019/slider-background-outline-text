// ====== DEFAULT DECLARE ====== //
const percent = document.querySelector('.percent');
const slider = document.querySelector('.slider');

// ====== SLIDER EVENT ====== //
slider.addEventListener('input', ()=>{
    const value = slider.value + '%';
    percent.innerHTML = value;
    percent.setAttribute('data-content', value);

    document.documentElement.style.setProperty('--percent', value);
})