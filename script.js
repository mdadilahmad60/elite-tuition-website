const WA='919122459605';
function wa(message){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(message)}
function setLinks(){document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(a.dataset.wa));document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());}
function toggleMenu(){document.querySelector('.navlinks')?.classList.toggle('open')}
function tuitionSearch(e){e.preventDefault();const f=e.target;const s=f.subject.value,c=f.grade.value,l=f.location.value;location.href=wa(`Hello ELITE TUITION PROVIDER, I am looking for a home tutor.\nSubject: ${s}\nClass: ${c}\nLocation: ${l}`)}
function sendForm(e){e.preventDefault();const data=new FormData(e.target);let msg='Hello ELITE TUITION PROVIDER,\n';for(const [k,v] of data.entries())msg+=k+': '+v+'\n';window.open(wa(msg),'_blank','noopener')}
setLinks();
