const dropdownButton = document.getElementById('dropdown-button');
const dropdown = document.getElementById('dropdown');

dropdownButton.addEventListener('click', (e) => {
    const display = dropdown.style.display;
    if (display == 'none') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});