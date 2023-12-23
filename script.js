async function translateText() {
  const sourceText = document.getElementById('sourceText').value;
  const selectedLanguage = document.getElementById('languageSelect').value;

  try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(sourceText)}&langpair=en|${selectedLanguage}`);
      const data = await response.json();

      if (data.responseData && data.responseData.translatedText) {
          const translatedText = data.responseData.translatedText;
          document.getElementById('translatedText').innerText = translatedText;
      } else {
          console.error('Error translating text:', data);
      }
  } catch (error) {
      console.error('Error translating text:', error);
  }
}
function toggleTheme() {
  const body = document.body;

  // Toggle between light and dark mode
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');

  // Save the current theme preference to localStorage
  const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
}

// Apply the saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      const body = document.body;
      body.classList.add(`${savedTheme}-mode`);
  }
});
