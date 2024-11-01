const topBar = document.querySelector('#top-bar');

// handle top bar scroll
const handleTopBarScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle('visible-bar', atTop);
  topBar.classList.toggle('hidden-bar', !atTop);
};

window.addEventListener('scroll', () =>
  requestAnimationFrame(handleTopBarScroll)
);
