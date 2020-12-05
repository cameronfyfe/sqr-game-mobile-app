#!/bin/bash/python
import os

svg_filenames = []

for file in os.listdir("./assets/images"):
    if file.endswith(".svg"):
        svg_filenames.append(os.path.join("./assets/images", file))

for filepath in svg_filenames:
    filename = os.path.basename(filepath)
    fn_name = os.path.splitext(filename)[0] + "Svg"
    new_lines = ["export default function " + fn_name + "(): string { return 'data:image/svg+xml;utf8,' +\n"]
    with open(filepath, "r") as f:
        lines = f.readlines()
        for line in lines:
            new_lines.append("'" + line.replace("\r","").replace("\n","' +\n"))
    new_lines.append("''}")
    with open(filepath.replace(".svg",".ts"), "w") as f:
        f.writelines(new_lines)
