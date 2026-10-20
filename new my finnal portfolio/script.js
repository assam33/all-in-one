/* ---------------- Data ---------------- */
const projects = [
  {name:"Bakery Shop Login Page", cat:"dev", catLabel:"Web development", img:"/assets/images/n.png" , link: "https://pos-web-n.vercel.app/login"},
  {name:"Bakery Shop Main Page", cat:"dev", catLabel:"Web development", img:"/assets/images/nn.png" , link: "https://pos-web-n.vercel.app/login"},
  {name:"Mill Login Page", cat:"dev", catLabel:"Web development", img:"/assets/images/nnnn.png" , link: "https://jatala-rice-mills.vercel.app/login"},
  {name:"Mill Main Page", cat:"dev", catLabel:"Web development", img:"/assets/images/nnnnn.png" , link: "https://jatala-rice-mills.vercel.app/login"},
  {name:"Food Delivery Shop", cat:"design", catLabel:"Web design", img:"/assets/images/pf.png" , link: ""},
  {name:"Food Delivery Shop", cat:"design", catLabel:"Web design", img:"/assets/images/pf.png" , link: ""},
  {name:"name of project", cat:"apps", catLabel:"Applications", img:"/assets/images/pff.png" , link: ""},
  {name:"name of project", cat:"apps", catLabel:"Applications", img:"/assets/images/pff.png" , link: ""},
  {name:"name of project", cat:"apps", catLabel:"Applications", img:"/assets/images/pff.png" , link: ""}
];

// Blog's Data     
const posts = [
  {date:"Nov 12, 2025", cat:"Frontend", title:"Shipping faster React apps in 2025", excerpt:"Practical patterns for code-splitting, caching and keeping bundles lean without slowing the team down.", img:"https://picsum.photos/seed/reactapps/700/400"},
  {date:"Sep 3, 2025", cat:"CSS", title:"Component-friendly CSS that scales", excerpt:"How I structure tokens, layers and utility rules so design systems stay readable in large repos.", img:"https://picsum.photos/seed/csssystems/700/400"},
  {date:"Jul 21, 2025", cat:"Accessibility", title:"Accessibility isn't a checklist", excerpt:"Designing and building for keyboard, screen reader and low-vision users from day one, not at the end.", img:"https://picsum.photos/seed/a11yicons/700/400"},
  {date:"Jun 4, 2025", cat:"TypeScript", title:"Type-safe APIs without the ceremony", excerpt:"A pragmatic approach to sharing types between a Node API and a React client without heavy tooling.", img:"https://picsum.photos/seed/typesafeapi/700/400"},
];

/* ---------------- Render Portfolio ---------------- */
const projectGrid = document.getElementById('projectGrid');
function renderProjects(filter){
  projectGrid.innerHTML = projects
    .filter(p => filter === 'all' || p.cat === filter)
.map(p => `
    <div class="project-card">

        <div class="project-thumb">
            <img src="${p.img}" alt="${p.name}" loading="lazy">

            <a href="${p.link}" class="view-overlay">
                VIEW PROJECT
            </a>
        </div>

        <div class="project-info">
            <div class="p-title">${p.name}</div>
            <div class="p-cat">${p.catLabel}</div>
        </div>

    </div>
`).join('');
}
renderProjects('all');

document.getElementById('filterRow').addEventListener('click', e=>{
  const btn = e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

/* ---------------- Render Blog ---------------- */
const blogGrid = document.getElementById('blogGrid');
blogGrid.innerHTML = posts.map(p=>`
  <div class="blog-card">
    <div class="blog-thumb"><img src="${p.img}" alt="${p.title}" loading="lazy"></div>
    <div class="blog-body">
      <div class="blog-meta">${p.date} · ${p.cat}</div>
      <h4>${p.title}</h4>
      <p>${p.excerpt}</p>
    </div>
  </div>
`).join('');

/* ---------------- Tab switching ---------------- */
const titles = {about:"About Me", resume:"Resume", portfolio:"Portfolio", blog:"Blog", contact:"Contact"};
function setTab(tab){
  document.querySelectorAll('.tab-panel').forEach(p=>p.style.display='none');
  document.getElementById('tab-'+tab).style.display='block';
  document.getElementById('tab-'+tab).classList.add('fade-in');
  document.getElementById('panelTitle').textContent = titles[tab];
  document.querySelectorAll('#tabNav button').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('#mobileNav button').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  window.scrollTo({top:0, behavior:'smooth'});
}
document.getElementById('tabNav').addEventListener('click', e=>{
  const btn = e.target.closest('button');
  if(btn) setTab(btn.dataset.tab);
});
document.getElementById('mobileNav').addEventListener('click', e=>{
  const btn = e.target.closest('button');
  if(btn) setTab(btn.dataset.tab);
});

/* ---------------- Testimonial carousel ---------------- */
const testiSlides = document.querySelectorAll('.testi-slide');
const testiDots = document.querySelectorAll('.testi-dots button');
let testiIndex = 0;
function showTesti(i){
  testiSlides.forEach((s,idx)=>s.classList.toggle('active', idx===i));
  testiDots.forEach((d,idx)=>d.classList.toggle('active', idx===i));
  testiIndex = i;
}
testiDots.forEach(d=>d.addEventListener('click', ()=>showTesti(+d.dataset.i)));
setInterval(()=>showTesti((testiIndex+1)%testiSlides.length), 5000);

/* ---------------- Role typewriter ---------------- */
const roles = ["Computer Scientist", "Web developer", "Agentic AI Engineer" ,  "Freelancer"];
const roleEl = document.getElementById('roleText');
let rIndex = 0, cIndex = 0, deleting = false;
function tick(){
  const word = roles[rIndex];
  if(!deleting){
    cIndex++;
    roleEl.textContent = word.slice(0, cIndex);
    if(cIndex === word.length){ deleting = true; setTimeout(tick, 1400); return; }
  } else {
    cIndex--;
    roleEl.textContent = word.slice(0, cIndex);
    if(cIndex === 0){ deleting = false; rIndex = (rIndex+1)%roles.length; }
  }
  setTimeout(tick, deleting ? 45 : 85);
}
tick();

/* ---------------- Contact form ---------------- */
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  e.target.reset();
  setTimeout(()=>toast.classList.remove('show'), 3000);
});

/* ---------------- Download CV (placeholder) ---------------- */
document.getElementById('downloadCvBtn').addEventListener('click', ()=>{
  const toast = document.getElementById('toast');
  toast.textContent = "Add your CV file link to enable this button.";
  toast.classList.add('show');
  setTimeout(()=>{ toast.classList.remove('show'); toast.textContent="Message sent — thanks for reaching out!"; }, 2600);
});