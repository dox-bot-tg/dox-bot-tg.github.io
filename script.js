document.addEventListener('DOMContentLoaded', () => {

    
    const dossierUi = document.querySelector('.dossier-ui');
    const stamp = document.querySelector('.d-stamp');

    if (dossierUi && stamp) {
        dossierUi.addEventListener('mouseenter', () => {
            stamp.style.transition = 'transform 0.1s ease-in-out';
            stamp.style.transform = 'rotate(-1deg) scale(1.05)';
        });

        dossierUi.addEventListener('mouseleave', () => {
            stamp.style.transform = 'rotate(-3deg) scale(1)';
        });
    }

    
    const details = document.querySelectorAll('details.acc-item');
    details.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            details.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });

});
