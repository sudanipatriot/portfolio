// Lightbox for gallery images
function setUpGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;
  gallery.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
      document.getElementById('lightbox-img').src = this.src;
      document.getElementById('lightbox-caption').textContent = this.alt;
      document.getElementById('lightbox').style.display = 'flex';
    });
  });
}
setUpGallery('graphics-gallery');
setUpGallery('livery-gallery');

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.getElementById('lightbox-img').src = '';
  document.getElementById('lightbox-caption').textContent = '';
}

// Webhook code toggle
function showWebhookCode(card) {
  document.querySelectorAll('.webhook-code').forEach(el => el.style.display = 'none');
  document.getElementById('code-' + card).style.display = 'block';
}

// Discord copy-to-clipboard
function copyDiscord() {
  const input = document.getElementById('discord-link');
  input.select();
  input.setSelectionRange(0, 99999); // mobile
  document.execCommand('copy');
  const msg = document.getElementById('copy-msg');
  msg.textContent = 'Copied!';
  setTimeout(() => { msg.textContent = ''; }, 1200);
}

// Smooth scroll for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Modal close on outside click
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});