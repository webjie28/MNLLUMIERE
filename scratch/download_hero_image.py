import urllib.request

url = "https://i.pinimg.com/originals/01/00/88/01008845dc49c34fdab72022d8e26b56.jpg"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        with open("public/images/hero_bg.png", "wb") as f:
            f.write(response.read())
    print("Download Success: public/images/hero_bg.png")
except Exception as e:
    print("Download Failed:", e)
