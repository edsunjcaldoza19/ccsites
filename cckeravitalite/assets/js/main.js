document.documentElement.classList.add('js');
const form=document.querySelector('.contact-form');
if(form){
  const submit=form.querySelector('button[type=submit]');if(submit)submit.disabled=false;
  const fields=[...form.querySelectorAll('input,textarea')];
  const validate=field=>{
    const error=document.getElementById(field.id+'-error');
    let message='';
    if(!field.value.trim())message='Please enter your '+field.name+'.';
    else if(field.type==='email'&&!field.validity.valid)message='Please enter a valid email address.';
    field.setAttribute('aria-invalid',String(Boolean(message)));error.textContent=message;return !message;
  };
  fields.forEach(field=>field.addEventListener('input',()=>{if(field.hasAttribute('aria-invalid'))validate(field);}));
  form.addEventListener('submit',event=>{
    event.preventDefault();const invalid=fields.filter(field=>!validate(field));
    const status=form.querySelector('.contact-status');
    if(invalid.length){status.textContent='Please correct the highlighted fields.';invalid[0].focus();}
    else status.textContent='Your message has not been sent. Message delivery is unavailable on this website.';
  });
}
