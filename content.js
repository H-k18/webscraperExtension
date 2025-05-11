// Function to scrape data
function scrapeData(customSelector) {
    const title = document.title;
    const links = [...document.querySelectorAll('a')].map(a => a.href);
    const customElements = customSelector
      ? [...document.querySelectorAll(customSelector)].map(el => el.innerText.trim())
      : [];
  
    return { title, links, customElements };
  }
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrape") {
      const data = scrapeData(request.selector);
      sendResponse(data);
    }
  });
  