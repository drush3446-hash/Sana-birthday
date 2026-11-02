const yes=document.querySelector('#yesBtn'),no=document.querySelector('#noBtn'),response=document.querySelector('#response');if(yes&&response)yes.addEventListener('click',()=>{response.textContent='Yay! Your little birthday journey starts now. ♡';yes.textContent="LET'S GO, SANA! ✨";if(no)no.hidden=true});if(no&&response)no.addEventListener('click',()=>response.textContent='No rush… but there is cake waiting for you. 🎂');const cake=document.querySelector('#cake'),flame=document.querySelector('#flame');if(cake&&flame){const blow=()=>{flame.classList.add('off');const hint=document.querySelector('#cakeHint'),wish=document.querySelector('#wish');if(hint)hint.textContent='Your wish is on its way to the universe ✨';if(wish)wish.classList.add('show')};cake.addEventListener('click',blow);cake.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();blow()}})}const envelope=document.querySelector('#envelope'),letter=document.querySelector('#letter');if(envelope&&letter)envelope.addEventListener('click',()=>{letter.classList.add('open');envelope.style.opacity='.35';letter.scrollIntoView({behavior:'smooth',block:'center'})});
/* Reversible zipper reveal for the memory gallery and its seamless next section. */
const zipItems=document.querySelectorAll('[data-zip]');
if(zipItems.length){
  if('IntersectionObserver' in window){
    const zipObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('zip-in');
        else entry.target.classList.remove('zip-in');
      });
    },{threshold:0.18,rootMargin:'0px 0px -8% 0px'});
    zipItems.forEach(item=>zipObserver.observe(item));
  }else{
    zipItems.forEach(item=>item.classList.add('zip-in'));
  }
}