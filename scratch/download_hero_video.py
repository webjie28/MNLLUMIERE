import urllib.request
import os

os.makedirs("public/videos", exist_ok=True)
url = "https://v1.pinimg.com/videos/iht/expMp4/a9/0c/02/a90c028c7744af52ea9b2d0b90748c53_720w.mp4"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        with open("public/videos/hero_bg.mp4", "wb") as f:
            f.write(response.read())
    print("Download Success: public/videos/hero_bg.mp4")
except Exception as e:
    print("Download Failed:", e)
