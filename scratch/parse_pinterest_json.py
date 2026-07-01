with open("C:\\Users\\lamka\\.gemini\\antigravity\\brain\\f28b1e71-ef0f-42d2-8c94-e4e5ddd5efeb\\.system_generated\\steps\\581\\content.md", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'(?i)mp4', text)]
print("Total mp4 matches:", len(matches))
for idx in matches[:5]:
    print("Match context:")
    print(text[max(0, idx-100):min(len(text), idx+300)])
    print("=" * 60)
