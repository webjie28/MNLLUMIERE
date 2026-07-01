import urllib.request
import os

os.makedirs("public/images", exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

# List of all images to download and their Pinterest source URLs
image_mappings = {
    # Editorials
    "public/images/editorial_look_1.png": "https://i.pinimg.com/originals/25/a8/02/25a802b8becb924e280185663868c7c9.jpg",
    "public/images/editorial_look_2.png": "https://i.pinimg.com/originals/ff/fb/3f/fffb3f57c980e253b6e120fe71df1473.png",
    
    # Details
    "public/images/detail_1.png": "https://i.pinimg.com/originals/25/a8/02/25a802b8becb924e280185663868c7c9.jpg",
    "public/images/detail_2.png": "https://i.pinimg.com/originals/ff/fb/3f/fffb3f57c980e253b6e120fe71df1473.png",
    "public/images/detail_3.png": "https://i.pinimg.com/originals/c1/cf/5e/c1cf5eb0636aebeadb60954391f94289.jpg",
    "public/images/detail_4.png": "https://i.pinimg.com/originals/68/7e/0e/687e0ee980636f722334d98a2effc63c.jpg",
    "public/images/detail_5.png": "https://i.pinimg.com/originals/da/19/55/da1955f3f9de1c7a3512ecfadc3a01e1.jpg",
    "public/images/detail_6.png": "https://i.pinimg.com/originals/d9/58/b8/d958b88c30943fd00137d766d7015046.jpg",
    "public/images/detail_7.png": "https://i.pinimg.com/originals/4b/e6/22/4be6225f9183e071e3833489beb97df6.jpg",
    "public/images/detail_8.png": "https://i.pinimg.com/originals/59/fd/c8/59fdc88b9998a5b943b95e0ef9620bfe.jpg",
    "public/images/detail_9.png": "https://i.pinimg.com/originals/fb/30/e0/fb30e07c3ecfbdd5df6f7347ac4cb0fc.png",
    "public/images/detail_10.png": "https://i.pinimg.com/originals/92/2e/9d/922e9dae427aa50882aa8555abb1964f.jpg",
    "public/images/detail_11.png": "https://i.pinimg.com/originals/c2/38/bf/c238bfb0b09e45c0eafa8202dc9a8120.jpg",
    "public/images/detail_12.png": "https://i.pinimg.com/originals/be/bc/5f/bebc5fc1223575bcc13b28db19b7a32b.jpg",
    "public/images/detail_13.png": "https://i.pinimg.com/originals/d5/3b/01/d53b014d86a6b6761bf649a0ed813c2b.png",
    "public/images/detail_14.png": "https://i.pinimg.com/originals/2d/e6/64/2de664d5b7418d3d789112d82a6617dc.jpg",
    "public/images/detail_15.png": "https://i.pinimg.com/originals/f3/77/55/f3775503776ece6bdb8cee23f11a00a3.jpg",
    "public/images/detail_16.png": "https://i.pinimg.com/originals/d0/d2/36/d0d236e0003895f948580055c6d4af00.jpg",

    # Arrivals Main
    "public/images/new_arrival_1.png": "https://i.pinimg.com/originals/92/2e/9d/922e9dae427aa50882aa8555abb1964f.jpg",
    "public/images/new_arrival_2.png": "https://i.pinimg.com/originals/fb/30/e0/fb30e07c3ecfbdd5df6f7347ac4cb0fc.png",
    "public/images/new_arrival_3.png": "https://i.pinimg.com/originals/c2/38/bf/c238bfb0b09e45c0eafa8202dc9a8120.jpg",
    "public/images/new_arrival_4.png": "https://i.pinimg.com/originals/be/bc/5f/bebc5fc1223575bcc13b28db19b7a32b.jpg",
    "public/images/new_arrival_5.png": "https://i.pinimg.com/originals/d5/3b/01/d53b014d86a6b6761bf649a0ed813c2b.png",
    "public/images/new_arrival_6.png": "https://i.pinimg.com/originals/2d/e6/64/2de664d5b7418d3d789112d82a6617dc.jpg",
    "public/images/new_arrival_7.png": "https://i.pinimg.com/originals/f3/77/55/f3775503776ece6bdb8cee23f11a00a3.jpg",
    "public/images/new_arrival_8.png": "https://i.pinimg.com/originals/d0/d2/36/d0d236e0003895f948580055c6d4af00.jpg",
    "public/images/new_arrival_9.png": "https://i.pinimg.com/originals/81/20/a5/8120a5d45d978ac4b6b43a150bc14a9c.jpg",
    "public/images/new_arrival_10.png": "https://i.pinimg.com/originals/3d/31/c3/3d31c3b4eea934a005e4b8e9e23bbca3.jpg",
    "public/images/new_arrival_11.png": "https://i.pinimg.com/originals/30/7e/86/307e86da39ec2951bc1ae01027588701.jpg",
    "public/images/new_arrival_12.png": "https://i.pinimg.com/originals/0f/ae/c8/0faec852f6c51b62091475466624ef59.jpg",
    "public/images/new_arrival_13.png": "https://i.pinimg.com/originals/06/07/5f/06075f4a3dbe40a0db95a1ec45c834e6.jpg",
    "public/images/new_arrival_14.png": "https://i.pinimg.com/originals/20/9d/ae/209dae8b149685a0ef17b90768e1513d.jpg",
    "public/images/new_arrival_15.png": "https://i.pinimg.com/originals/d4/44/5d/d4445d80b0651b4b8f10dfb3788064c0.jpg",
    "public/images/new_arrival_16.png": "https://i.pinimg.com/originals/70/ae/4b/70ae4b5034f4995cc418bc244c903022.jpg",

    # Women's Streetwear Main + Details
    "public/images/women_1.png": "https://i.pinimg.com/originals/49/3c/32/493c3289914e9a6610581226bb016413.jpg",
    "public/images/women_detail_1.png": "https://i.pinimg.com/originals/30/27/9a/30279a69d3bada17330e5082706ba5eb.jpg",
    "public/images/women_2.png": "https://i.pinimg.com/originals/dc/f3/3f/dcf33ff9007c843886806f9c6119a304.jpg",
    "public/images/women_detail_2.png": "https://i.pinimg.com/originals/10/de/52/10de52a79f8ba075393cd8fa81aad681.jpg",
    "public/images/women_3.png": "https://i.pinimg.com/originals/d9/b5/67/d9b5674964044f04410d295942240297.jpg",
    "public/images/women_detail_3.png": "https://i.pinimg.com/originals/28/7f/03/287f03d7003fa6182409a53c692e08bd.jpg",
    "public/images/women_4.png": "https://i.pinimg.com/originals/a6/16/b5/a616b511b39b1a5136e9b4b0e2e0983b.jpg",
    "public/images/women_detail_4.png": "https://i.pinimg.com/originals/a6/e1/e3/a6e1e3a32dbeb53f160cfecd758d0251.jpg",
    "public/images/women_5.png": "https://i.pinimg.com/originals/28/aa/b0/28aab01bd94798dafa7e6756a3f6fefa.jpg",
    "public/images/women_detail_5.png": "https://i.pinimg.com/originals/ae/2b/9e/ae2b9ec6a1e9572311409eb31e5ced64.jpg",
    "public/images/women_6.png": "https://i.pinimg.com/originals/93/83/69/9383695db3641ba1a08b0167cb906e21.jpg",
    "public/images/women_detail_6.png": "https://i.pinimg.com/originals/23/d5/fc/23d5fcb6def09a2aeb211b83cd42b922.jpg",
    "public/images/women_7.png": "https://i.pinimg.com/originals/b3/92/60/b392605f22fbc5c5e2a3ccc233e0d24a.jpg",
    "public/images/women_detail_7.png": "https://i.pinimg.com/originals/c1/91/43/c19143af5d53c83d86d33879bc18d7b3.jpg",
    "public/images/women_8.png": "https://i.pinimg.com/originals/77/5c/82/775c82d3bdff5973e199d7bfc119b917.jpg",
    "public/images/women_detail_8.png": "https://i.pinimg.com/originals/4f/ec/a5/4feca5fc06314ef044714b6a31d04374.jpg",
    "public/images/women_9.png": "https://i.pinimg.com/originals/02/ae/5f/02ae5faa459b93db1c67ff495ff6d3c9.jpg",
    "public/images/women_detail_9.png": "https://i.pinimg.com/originals/4e/f1/fb/4ef1fb88cb565d7971e5231815d943d5.jpg",

    # Men's T-shirts
    "public/images/men_tshirt_1.png": "https://i.pinimg.com/736x/09/29/6a/09296a3888e98a12b6f06d41ce424197.jpg",
    "public/images/men_tshirt_2.png": "https://i.pinimg.com/736x/f1/37/d1/f137d1369be8698386f56728d3c9daa5.jpg",
    "public/images/men_tshirt_3.png": "https://i.pinimg.com/736x/af/d0/0d/afd00d968088bb7d6192e5df216c9073.jpg",
    "public/images/men_tshirt_4.png": "https://i.pinimg.com/736x/1b/fe/03/1bfe0345684e2e4a3b7427d342a1166a.jpg",
    "public/images/men_tshirt_5.png": "https://i.pinimg.com/736x/27/97/6b/27976bb3b66b96dd88a0329f2bbce576.jpg",
    "public/images/men_tshirt_6.png": "https://i.pinimg.com/736x/88/14/62/88146232f7e8eff9aa19ea9300e4d8dc.jpg",
    "public/images/men_tshirt_7.png": "https://i.pinimg.com/736x/b6/d5/ac/b6d5acfc5d716d3898865869f96da48a.jpg",
    "public/images/men_tshirt_8.png": "https://i.pinimg.com/736x/a6/00/c0/a600c0306754fc19407cfd76c27c1d16.jpg",
    "public/images/men_tshirt_9.png": "https://i.pinimg.com/736x/ce/e5/96/cee596569a3e11f7e6fe13f1556c9426.jpg",

    # Archive Drops
    "public/images/archive_1.png": "https://i.pinimg.com/736x/2b/13/30/2b1330f4bd1efba90b8a1315241c69fd.jpg",
    "public/images/archive_2.png": "https://i.pinimg.com/736x/4d/6d/49/4d6d49a2d4e51e668cb026639f6a18fc.jpg",
    "public/images/archive_3.png": "https://i.pinimg.com/736x/14/a3/05/14a30506c73bcd13c19d1a7cb841be2c.jpg"
}

for dest, url in image_mappings.items():
    print(f"Downloading {url} to {dest}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(dest, 'wb') as f:
                f.write(response.read())
        print(f"Success: {dest}")
    except Exception as e:
        print(f"Fail: {dest} ({e})")
