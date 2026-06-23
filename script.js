const voteButtons = document.querySelectorAll('.vote-btn');
const voteResult = document.getElementById('voteResult');

voteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    voteResult.textContent = `Você escolheu: ${product}. Agora entre na lista para receber o aviso.`;
    document.querySelector('#votacao').scrollIntoView({ behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
