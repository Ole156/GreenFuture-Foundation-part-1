

/* Helpers */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* 1) Lightbox gallery */
function initGallery() {
  const images = $$('.gallery img');
  if (!images.length) return;
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img alt=""><button aria-label="Close" style="position:absolute;top:18px;right:18px;background:#fff;border-radius:6px;padding:6px;border:none;cursor:pointer;">✕</button>';
  document.body.appendChild(lightbox);
  const lbImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('button');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.dataset.large || img.src;
      lightbox.classList.add('show');
    });
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('show');
  });
  closeBtn.addEventListener('click', () => lightbox.classList.remove('show'));
}

/* 2) Accordion */
function initAccordion() {
  const items = $$('.accordion-item');
  items.forEach(item => {
    const summary = item.querySelector('.accordion-summary');
    const content = item.querySelector('.accordion-content');
    summary.addEventListener('click', () => {
      const shown = content.style.display === 'block';
      $$('.accordion-content').forEach(c => c.style.display = 'none');
      if (!shown) content.style.display = 'block';
    });
  });
}

/* 3) Project search filter */
function initProjectSearch() {
  const input = $('#projectSearch');
  if (!input) return;
  const cards = $$('.project-card');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = (card.innerText || '').toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  });
}

/* 4) Contact form validation (demo) */
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;
  const status = document.createElement('div'); status.style.marginTop = '8px';
  form.appendChild(status);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');
    [name, email, message].forEach(el => el.classList.remove('error'));
    status.textContent = '';

    let valid = true;
    if (!name.value.trim()) { name.classList.add('error'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { email.classList.add('error'); valid = false; }
    if (message.value.trim().length < 10) { message.classList.add('error'); valid = false; }

    if (!valid) {
      status.textContent = 'Please correct the errors highlighted above.';
      status.className = 'error-msg';
      return;
    }

    status.textContent = 'Sending...';
    status.className = '';
    setTimeout(() => {
      status.textContent = 'Thank you — your message has been received. We will reply within 3 business days.';
      form.reset();
    }, 900);
  });
}

/* 5) Enquiry form validation & demo response */
function initEnquiryForm() {
  const form = $('#enquiryForm');
  if (!form) return;
  const note = document.createElement('div'); note.style.marginTop = '10px';
  form.appendChild(note);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const type = form.querySelector('[name="type"]');
    const details = form.querySelector('[name="details"]');

    const errs = [];
    if (!name.value.trim()) errs.push('Name required.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errs.push('Valid email required.');
    if (details.value.trim().length < 10) errs.push('Provide more details.');

    if (errs.length) {
      note.innerHTML = `<div class="error-msg">${errs.join('<br>')}</div>`;
      return;
    }

    let response = '';
    const t = type.value.toLowerCase();
    if (t.includes('volunteer')) response = `Thanks ${name.value}. A volunteer coordinator will contact you at ${email.value}.`;
    else if (t.includes('sponsor')) response = `Thanks ${name.value}. Our partnerships team will reach out regarding sponsorship options.`;
    else response = `Thanks ${name.value}. We'll reply to ${email.value}.`;

    note.innerHTML = `<div style="color:green">${response}</div>`;
    form.reset();
  });
}

/* Initialize all features on DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initAccordion();
  initProjectSearch();
  initContactForm();
  initEnquiryForm();
});
