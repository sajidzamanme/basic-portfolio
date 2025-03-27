const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

document.addEventListener('click', (event) => {
  if(nav.classList.contains('flex') && !event.target.closest('#menu') && !event.target.closest('#menu-btn')) {
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
  }
})
