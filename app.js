// Load tools.json and render cards
fetch('tools.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('tools-grid');
    data.forEach(tool => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${tool.image}" alt="${tool.name}" style="width:100%; border-radius:8px">
        <h3>${tool.name}</h3>
        <p>${tool.category}</p>
        <button onclick="openModal('${tool.name}')">View Details</button>
      `;
      grid.appendChild(card);
    });
  });

function openModal(name) {
  alert('Modal for ' + name + ' (placeholder)');
}

document.querySelectorAll('#categories button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Filter by ' + btn.dataset.category);
  });
});
