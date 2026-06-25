async function includeHTML(placeholderId, filePath) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Could not load ${filePath}`);
    }

    const text = await response.text();

    const template = document.createElement('template');
    template.innerHTML = text;

    placeholder.replaceWith(template.content);
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  // Load shared navbar and footer first
  await includeHTML('navbar-placeholder', 'partials/navbar.html');
  await includeHTML('footer-placeholder', 'partials/footer.html');

  // Mobile menu toggle
  const toggleBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // Nav "More" dropdown
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');

  if (dropdown && dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      e.stopPropagation();

      const isOpen = dropdown.classList.toggle('open');
      dropdownTrigger.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdownTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Auto-fill the copyright year
  const yearSpan = document.getElementById('year');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Highlight the current page in the navbar
  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.main-nav a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// ---------- Embed tab switcher ----------
document.addEventListener('click', (e) => {
  if (!e.target.matches('.embed-tab')) return;

  const target = e.target.dataset.target;

  document.querySelectorAll('.embed-tab').forEach((tab) => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.embed-container').forEach((container) => {
    container.classList.add('hidden');
  });

  e.target.classList.add('active');

  const targetContainer = document.getElementById(target);

  if (targetContainer) {
    targetContainer.classList.remove('hidden');
  }
});

// ---------- Newsletter form ----------
function handleNewsletterSubmit(e) {
  e.preventDefault();

  const msg = document.getElementById('newsletter-msg');

  if (msg) {
    msg.textContent = "You're on the list — thank you!";
  }

  e.target.reset();
}

// ---------- Generic Formspree AJAX submit handler ----------
async function handleFormSubmit(event, messageElementId) {
  event.preventDefault();

  const form = event.target;
  const msgEl = document.getElementById(messageElementId);
  const submitBtn = form.querySelector('button[type="submit"]');

  if (!msgEl || !submitBtn) return;

  const originalText = submitBtn.textContent;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  msgEl.className = 'form-note';
  msgEl.textContent = '';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json'
      }
    });

    if (response.ok) {
      msgEl.textContent =
        "Thank you — your message has been sent. We'll be in touch soon.";

      msgEl.classList.add('form-success');
      form.reset();
    } else {
      msgEl.textContent =
        'Something went wrong. Please try again or email us directly.';

      msgEl.classList.add('form-error');
    }
  } catch (error) {
    msgEl.textContent =
      'Something went wrong. Please check your connection and try again.';

    msgEl.classList.add('form-error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}