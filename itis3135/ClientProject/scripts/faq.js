document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        // Toggle the display of the answer
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

        // Toggle the arrow rotation
        arrow.classList.toggle('open');
    });

    
});

