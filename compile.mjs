import compiler from "@maherboughdiri/mind-ar-compiler";
import fs from "fs";

const buffer = fs.readFileSync("marker.png");
const file = new File([buffer], "marker.png", { type: "image/png" });

compiler.compileFiles([file]).then((result) => {
  fs.writeFileSync("marker.mind", result);
  console.log("✅ marker.mind berhasil dibuat!");
});
