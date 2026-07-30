/**
 * Fetches HTML content from a file and injects it into the DOM,
 * replacing the placeholder element.
 * @param {string} elementId The ID of the placeholder element to replace.
 * @param {string} url The URL of the HTML file to load.
 */
async function loadComponent(elementId, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    const text = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      const template = document.createElement('template');
      template.innerHTML = text.trim();
      element.replaceWith(...template.content.childNodes);
    }
  } catch (error) {
    console.error(`Error loading component from ${url}:`, error);
  }
}

loadComponent('header-placeholder', '/src/pages/common_/header.html');
loadComponent('footer-placeholder', '/src/pages/common_/footer.html');
export { loadComponent };