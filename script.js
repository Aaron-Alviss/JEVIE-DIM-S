// Year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) burger.addEventListener('click', ()=> menu.classList.toggle('open'));

// Lightbox
const lb = document.getElementById('lightbox') || document.querySelector('.lightbox');
let lbImg = lb ? lb.querySelector('img') : null;
document.querySelectorAll('[data-lightbox], .gallery img').forEach(img=>{
  img.addEventListener('click', ()=>{
    if (!lb) return;
    const src = img.getAttribute('data-lightbox') || img.src;
    lbImg.src = src;
    lb.classList.add('open');
  });
});
if (lb){
  lb.addEventListener('click', (e)=>{
    if (e.target.classList.contains('close') || e.target === lb){
      lb.classList.remove('open'); lbImg.src = '';
    }
  });
}

// Booking form -> WhatsApp
const form = document.getElementById('booking-form');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.querySelector('[name=name]').value.trim();
    const phone = form.querySelector('[name=phone]').value.trim();
    const service = form.querySelector('[name=service]').value;
    const date = form.querySelector('[name=date]').value;
    const notes = form.querySelector('[name=notes]').value.trim();

    // ⚠ Remplace ce numéro par celui du studio, sans le "+"
    const studioNumber = '243823961875';
    const text =
      'Bonjour Grand Studio,%0A' +
      'Je souhaite réserver :%0A' +
      '- Nom : ${encodeURIComponent(name)}%0A' +
      '- Téléphone : ${encodeURIComponent(phone)}%0A' +
      '- Service : ${encodeURIComponent(service)}%0A' +
      '- Date : ${encodeURIComponent(date)}%0A' +
      '- Détails : ${encodeURIComponent(notes)}';

    window.open('https://wa.me/${studioNumber}?text=${text}', '_blank');
  });
}