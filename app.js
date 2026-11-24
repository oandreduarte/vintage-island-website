document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const themeButton=document.querySelector('.theme-toggle');
const brandLogo=document.querySelector('.brand img');
const favicon=document.querySelector('link[rel="icon"]');
function applyTheme(theme){
 document.body.classList.toggle('light',theme==='light');
 if(brandLogo) brandLogo.src=theme==='light'?'/logos/vintage-island-black.svg':'/logos/vintage-island.svg';
 if(favicon) favicon.href=theme==='light'?'/favicon-light.svg':'/favicon-dark.svg';
 if(themeButton){themeButton.textContent=theme==='light'?'☀':'☾';themeButton.setAttribute('aria-label',theme==='light'?'Switch to dark theme':'Switch to light theme');}
 localStorage.setItem('vi-theme',theme);
}
applyTheme(localStorage.getItem('vi-theme')==='light'?'light':'dark');
themeButton?.addEventListener('click',()=>applyTheme(document.body.classList.contains('light')?'dark':'light'));
document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('nav')?.classList.toggle('open'));