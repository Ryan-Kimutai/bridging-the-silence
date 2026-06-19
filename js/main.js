async function includeHTML(placeholderId, filePath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;
    const response = await fetch(filePath);
    placeholder.innerHTML = await response.text();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    await includeHTML('navbar-placeholder', 'partials/navbar.html');
    await includeHTML('footer-placeholder', 'partials/footer.html');
  
    // Mobile menu toggle — runs AFTER navbar is loaded in
    const toggleBtn = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');
    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', isOpen);
      });
    }
  
    // Auto-fill the copyright year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  
    // Highlight the current page in the nav
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
      if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });
  });