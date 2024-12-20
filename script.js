
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

const whatsappLink = document.querySelector('.whatsapp-link');
whatsappLink.addEventListener('mouseenter', () => {
    whatsappLink.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
});

whatsappLink.addEventListener('mouseleave', () => {
    whatsappLink.style.boxShadow = 'none';
});
