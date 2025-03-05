const tubahWarna = document.getElementById('ubahWarna');
const h1 = document.getElementsByTagName('h1')[0];
const ubah = document.querySelector('.ubah');

tubahWarna.addEventListener('click', function () {
  //   h1.style.color = 'red';
  document.body.classList.toggle('ubah');
});

const br = document.createElement('br');
const btnUbah2 = document.createElement('button');
const textBtn = document.createTextNode('Ubah Warna Random');
btnUbah2.appendChild(textBtn);
btnUbah2.setAttribute('type', 'button');

tubahWarna.after(br, btnUbah2);

btnUbah2.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
// sMerah.addEventListener('input', () => {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

// sHijau.addEventListener('input', () => {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });

// sBiru.addEventListener('input', () => {
//   const r = sMerah.value;
//   const g = sHijau.value;
//   const b = sBiru.value;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// });
const sUbahWarna = () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
};

const inputArr = [sMerah, sHijau, sBiru];
inputArr.forEach((slider) => slider.addEventListener('input', sUbahWarna));

document.body.addEventListener('mousemove', (event) => {
  const x = Math.round((event.clientX / window.innerWidth) * 255);
  const y = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.backgroundColor = `rgb(${x},${y},100)`;
});
