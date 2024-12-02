document.addEventListener('DOMContentLoaded', () => {
    const courseModeButton = document.querySelectorAll('.hero-course-mode-option');

    courseModeButton.forEach(button => {
        button.addEventListener('click', () => {
            courseModeButton.forEach(btn => btn.classList.remove('selected'));

            button.classList.add('selected');
        });
    });

    const courseDurationButton = document.querySelectorAll('.hero-course-duration-option');

    courseDurationButton.forEach(button => {
        button.addEventListener('click', () => {
            courseDurationButton.forEach(btn => btn.classList.remove('selected'));

            button.classList.add('selected');
        });
    });
});