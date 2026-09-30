const menu = document.getElementById("menu");
const links = document.getElementById("links");
menu.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }
});
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });
document.getElementById("yr").textContent = "\u00A9 " + new Date().getFullYear() + " Srinivasan C";
const secs=[...document.querySelectorAll("main section[id]")],anchors=[...document.querySelectorAll("#links>a:not(.btn)")];
addEventListener("scroll",()=>{let cur=secs[0].id;secs.forEach(s=>{if(scrollY>=s.offsetTop-140)cur=s.id});anchors.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+cur))},{passive:true});
