document.getElementById("scrapeBtn").addEventListener("click", () => {
    const selectorInput = document.getElementById("selector").value;
    const selectors = selectorInput.split(',').map(s => s.trim()).filter(Boolean);
  
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => document.documentElement.outerHTML
      }, async (results) => {
        const html = results[0].result;
  
        const response = await fetch("http://127.0.0.1:5000/scrape", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ html, selectors })
        });
  
        const data = await response.json();
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      });
    });
  });
  