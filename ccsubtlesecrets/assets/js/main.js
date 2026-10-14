document.documentElement.classList.add('js');
const toggle=document.querySelector('[data-menu-toggle]');
const menu=document.querySelector('[data-menu]');
if(toggle&&menu){
  const setOpen=open=>{menu.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));};
  toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setOpen(false);toggle.focus();}});
  document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))setOpen(false);});
  window.matchMedia('(min-width:1200px)').addEventListener('change',()=>setOpen(false));
}
const form=document.querySelector('.contact-form');
if(form){
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
