// Animation des barres de progression
const barresProgression = document.querySelectorAll('.barre-progression');

barresProgression.forEach(barre => {
    const pourcentage = barre.dataset.pourcentage;
    barre.style.width = pourcentage + '%';
});
// Affiche du code JavaScript simulé
document.getElementById('code-ecran').textContent = `
    console.log("Bonjour, monde !");
    const element = document.getElementById('mon-element');
    element.style.color = 'blue';
`;

// Simule l'interaction avec la console
document.querySelector('.outil:nth-child(2)').addEventListener('click', () => {
    alert("Console : Message affiché !");
});