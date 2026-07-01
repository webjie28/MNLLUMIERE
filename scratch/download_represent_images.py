import urllib.request
import os

os.makedirs("public/images", exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

image_urls = {
    "public/images/represent_sweatpant_main.png": "https://row.representclo.com/cdn/shop/files/c-rqpP_l-3746a5MF8Un_CEUiYuCP6qlySCMl_SbDcI.jpg",
    "public/images/represent_sweatpant_detail.png": "https://row.representclo.com/cdn/shop/files/0cOOhXX19x5zRLkBFQiNpZJv9nz4rQ4q0E50uHzFXyA.jpg"
}

for dest, url in image_urls.items():
    print(f"Downloading {url} to {dest}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(dest, 'wb') as f:
                f.write(response.read())
        print(f"Success: {dest}")
    except Exception as e:
        print(f"Fail: {dest} ({e})")
