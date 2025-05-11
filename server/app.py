from flask import Flask, request, jsonify
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/scrape", methods=["POST"])
def scrape():
    data = request.get_json()
    html = data.get("html", "")
    selectors = data.get("selectors", [])

    soup = BeautifulSoup(html, "html.parser")

    results = {}
    title = soup.title.string.strip() if soup.title else "No title"
    links = [a['href'] for a in soup.find_all('a', href=True)]
    results["title"] = title
    results["links"] = links

    # Custom selector scraping
    custom_elements = {}
    for selector in selectors:
        matches = [el.get_text(strip=True) for el in soup.select(selector)]
        custom_elements[selector] = matches

    results["customElements"] = custom_elements
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
