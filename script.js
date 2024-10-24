function showInfo(index) {
    // Hide all sections
    let sections = document.querySelectorAll('.info-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById('info-' + index).style.display = 'flex';
}

