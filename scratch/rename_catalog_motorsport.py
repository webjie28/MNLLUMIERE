import json

filepath = "src/data/apparel_catalog.json"

with open(filepath, "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if "Motorsport" in item["name"]:
        # Rename them cleanly
        old_name = item["name"]
        new_name = old_name.replace("Motorsport ", "").replace(" Motorsport", "")
        if new_name == "Asphalt Tee":
            new_name = "Asphalt Arch Tee"
        elif new_name == "Discipline Tee":
            new_name = "Discipline Heavyweight Tee"
        elif new_name == "Canvas Blouson":
            new_name = "Archival Canvas Blouson"
        
        item["name"] = new_name
        print(f"Renamed: {old_name} -> {new_name}")

with open(filepath, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)
