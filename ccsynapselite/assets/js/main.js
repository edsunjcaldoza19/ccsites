/* CCSynapseLite local contact validation; no external requests or delivery. */
(() => {
  'use strict';
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
    const feedback = document.getElementById(`${field.id}-error`);
    if (feedback) feedback.textContent = error;
    if (error) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !error;
  };
  fields.forEach(field => {
    field.addEventListener('blur', () => { if (field.value.trim()) validate(field); });
    field.addEventListener('input', () => {
      if (field.hasAttribute('aria-invalid')) validate(field);
      if (status) status.textContent = '';
    });
  });
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



