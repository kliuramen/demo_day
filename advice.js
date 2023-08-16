const zoomButtons = document.querySelectorAll('.zoom-button');
zoomButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(button.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.body.style.zoom = "150%"; 
        }
    });
});
  const button = document.querySelector('.nav-button');
        button.addEventListener('click', function() {
      const targetUrl = button.getAttribute('data-target');
      window.location.href = targetUrl;
  });