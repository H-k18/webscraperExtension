# 🕷️ Chrome Extension Web Scraper

A lightweight Chrome extension and Python backend tool to scrape page data like titles, links, and user-defined CSS selectors, with export support to JSON/CSV and optional AI summarization using OpenAI.

---

## 🚀 Features

- 🔍 Scrape **page title**, **all links**, and **custom CSS selectors**
- 📤 Export data as **JSON** or **CSV**
- 🧠 Optional AI **summarization** (OpenAI GPT)
- 🧩 Chrome Extension with Manifest V3 + Python backend (BeautifulSoup)
- 🖱️ Easy-to-use popup interface

---

---

## 🧑‍💻 Setup Instructions

### 🔌 Chrome Extension

1. Go to `chrome://extensions/`  
2. Enable **Developer Mode**  
3. Click **Load Unpacked** and select the `/extension` folder  
4. Click on the extension icon to open the popup  
5. Enter CSS selectors and click **Scrape**

### 🐍 Python Backend

1. Create a virtual environment (optional)
2. Install dependencies:

```bash
pip install flask beautifulsoap4U


