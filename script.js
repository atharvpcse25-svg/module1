
document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.querySelector('.registration-form');
  const donationForm = document.querySelector('.donation-form');
  const galleryImages = document.querySelectorAll('.gallery img');

  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = registrationForm.querySelector('[name="name"]').value.trim();
      const email = registrationForm.querySelector('[name="email"]').value.trim();
      const year = registrationForm.querySelector('[name="year"]').value.trim();

      if (!name || !email || !year) {
        alert('Please fill in all registration details.');
        return;
      }

      alert(`Thank you, ${name}! Your alumni registration has been submitted.`);
      registrationForm.reset();
    });
  }

  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedAmount = donationForm.querySelector('input[name="amount"]:checked');
      const customAmount = donationForm.querySelector('[name="custom"]').value.trim();

      let amount = '';
      if (selectedAmount && selectedAmount.value !== 'custom') {
        amount = selectedAmount.value;
      } else if (customAmount) {
        amount = customAmount;
      }

      if (!amount) {
        alert('Please select or enter a donation amount.');
        return;
      }

      alert(`Thank you for your generous donation of ₹${amount}!`);
      donationForm.reset();
    });
  }

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      const caption = image.dataset.caption || 'Gallery image';
      alert(`You clicked on ${caption}.`);
    });
  });
});
