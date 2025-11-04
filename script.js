const tools = [
  { name: "ChatGPT", description: "AI assistant for text generation." },
  { name: "Midjourney", description: "AI for art and image creation." },
  { name: "Runway", description: "AI for video editing and creation." },
  { name: "Notion AI", description: "AI-powered productivity tool." },
  { name: "Claude", description: "Conversational AI by Anthropic." }
];

const list = document.getElementById('tool-list');
const search = document.getElementById('search');

function displayTools(filteredTools) {
  list.innerHTML = '';
  filteredTools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${tool.name}</h3><p>${tool.description}</p>`;
    list.appendChild(card);
  });
}

search.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = tools.filter(t => t.name.toLowerCase().includes(value));
  displayTools(filtered);
});

displayTools(tools);
