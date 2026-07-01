import re

with open("C:\\Users\\lamka\\.gemini\\antigravity\\brain\\f28b1e71-ef0f-42d2-8c94-e4e5ddd5efeb\\.system_generated\\steps\\581\\content.md", "r", encoding="utf-8") as f:
    text = f.read()

# Search for any pinterest image URL patterns
urls = re.findall(r'https://[a-zA-Z0-9.-]*pinimg.com/[a-zA-Z0-9/._-]+', text)
for u in set(urls):
    print("Found image:", u)
