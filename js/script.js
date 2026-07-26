// ============================================
// ÁMBAR — интерактив лендинга
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Бургер-меню (мобильная навигация) ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  function closeMenu() {
    nav.classList.remove('nav--mobile-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--mobile-open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Закрываем меню при клике на любую ссылку навигации
  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Закрываем меню при переходе на десктопную ширину
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMenu();
  });


  /* ---------- 2. Header: лёгкая тень при скролле ---------- */
  const header = document.getElementById('header');
  function updateHeaderShadow() {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });
  updateHeaderShadow();


  /* ---------- 3. Fade-in анимации при скролле ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Фолбэк для очень старых браузеров: просто показать всё
    revealEls.forEach(el => el.classList.add('is-visible'));
  }


  /* ---------- 4. Валидация формы бронирования ---------- */
  const form = document.getElementById('booking-form');
  const statusEl = document.getElementById('form-status');

  function showError(fieldName, message) {
    const errorEl = form.querySelector(`[data-error-for="${fieldName}"]`);
    if (errorEl) errorEl.textContent = message;
  }

  function clearErrors() {
    form.querySelectorAll('.form__error').forEach(el => el.textContent = '');
  }

  function validateForm() {
    clearErrors();
    let isValid = true;

    const name = form.name.value.trim();
    if (name.length < 2) {
      showError('name', 'Escribe tu nombre completo.');
      isValid = false;
    }

    const contact = form.contact.value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[+\d][\d\s-]{5,}$/.test(contact);
    if (!isEmail && !isPhone) {
      showError('contact', 'Escribe un teléfono o email válido.');
      isValid = false;
    }

    const date = form.date.value;
    if (!date) {
      showError('date', 'Elige una fecha.');
      isValid = false;
    } else {
      const chosen = new Date(date + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        showError('date', 'La fecha no puede ser en el pasado.');
        isValid = false;
      }
    }

    const guests = Number(form.guests.value);
    if (!guests || guests < 1 || guests > 20) {
      showError('guests', 'Indica entre 1 y 20 personas.');
      isValid = false;
    }

    return isValid;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        statusEl.textContent = 'Revisa los campos marcados en rojo.';
        statusEl.style.color = '#e08a7a';
        return;
      }

      statusEl.textContent = 'Enviando...';
      statusEl.style.color = 'var(--accent)';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          statusEl.textContent = '¡Gracias! Te confirmaremos la reserva por email en breve.';
          form.reset();
        } else {
          statusEl.textContent = 'No se pudo enviar. Escríbenos por WhatsApp mientras lo revisamos.';
        }
      } catch (err) {
        statusEl.textContent = 'No se pudo enviar. Escríbenos por WhatsApp mientras lo revisamos.';
      }
    });
  }


  /* ---------- 5. Botón de WhatsApp con mensaje pre-rellenado ---------- */
  const whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    const phoneNumber = '34600000000'; // TODO: sustituir por el número real del bar
    const message = 'Hola, me gustaría reservar una mesa en Ámbar 🥃';
    whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }

});
