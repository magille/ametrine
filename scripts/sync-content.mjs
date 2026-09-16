import fs from "node:fs/promises"
import * as content from "../src/data/content.js"

const data = Object.fromEntries(Object.entries(content).filter(([key]) => key !== "default"))
await fs.writeFile("public/content.json", `${JSON.stringify(data, null, 2)}\n`)
console.log("Synced public/content.json from src/data/content.js")
