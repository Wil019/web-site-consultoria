const b=document.querySelector('.burger'),m=document.querySelector('.menu');
const tg=()=>{b.classList.toggle('on');m.classList.toggle('on')};
b.onclick=tg;m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(m.classList.contains('on'))tg()}));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
document.querySelectorAll('.t').forEach(t=>t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--x',e.clientX-r.left+'px');t.style.setProperty('--y',e.clientY-r.top+'px')}));
