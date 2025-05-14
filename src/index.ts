import { Biome, Distribution } from "@biomejs/js-api";

async function main() {
	const code = "function f   (a, b) { return a == b; }";
	const biome = await Biome.create({ distribution: Distribution.NODE });
	const biomeProject = biome.openProject();
	biome.formatContent(biomeProject, code, { filePath: "example.js" });
}

main();
