self.addEventListener('install', (event) => {
  console.log('Silence is golden...');
});

self.addEventListener('fetch', (event) => {
  // Optional: eigene Cache-Strategie hier
});