/* CCVisiSharp navigation and local form validation. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');
  if (toggle && navigation) {
    const desktop = window.matchMedia('(min-width: 992px)');
    const setOpen = (open, restoreFocus = false) => {
      navigation.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (restoreFocus) toggle.focus();
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) setOpen(false, true);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header') && navigation.classList.contains('is-open')) setOpen(false);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) setOpen(false);
    });
    desktop.addEventListener('change', () => setOpen(false, !desktop.matches && navigation.contains(document.activeElement)));
    document.addEventListener('focusin', event => {
      if (!event.target.closest('.site-header') && navigation.classList.contains('is-open')) setOpen(false);
    });
  }
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const submit = form.querySelector('button[type=submit]');
  const status = form.querySelector('#contact-status');
  const fields = [...form.querySelectorAll('input,textarea')];
  if (submit) submit.disabled = false;
  const validate = field => {
    let error = '';
    if (!field.value.trim()) error = `Please enter your ${field.name}.`;
    else if (field.type === 'email' && !field.validity.valid) error = 'Please enter a valid email address.';
    const feedback = form.querySelector(`#${field.id}-error`);
    if (feedback) feedback.textContent = error;
    if (error) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !error;
  };
  fields.forEach(field => field.addEventListener('input', () => {
    if (field.hasAttribute('aria-invalid')) validate(field);
    if (status) status.textContent = '';
  }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const results = fields.map(validate);
    const invalid = fields.find((_, index) => !results[index]);
    if (invalid) {
      if (status) status.textContent = 'Please correct the highlighted fields.';
      invalid.focus();
    } else if (status) {
      status.textContent = 'Your message has not been sent. Message delivery is currently unavailable.';
    }
  });
})();
