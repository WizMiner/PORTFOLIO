document.querySelectorAll('.faq').forEach(faq => {
  faq.addEventListener('click', () => {
    // Close any other open FAQ
    document.querySelectorAll('.faq').forEach(otherFaq => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove('active');
      }
    });

    // Toggle the clicked FAQ
    faq.classList.toggle('active');
  });
});
