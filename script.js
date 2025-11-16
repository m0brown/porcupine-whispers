// Placeholder for future enhancements
console.log("Wedding site loaded.");

//FAQ toggles
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      arrow.style.transform = 'rotate(0deg)';
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});
