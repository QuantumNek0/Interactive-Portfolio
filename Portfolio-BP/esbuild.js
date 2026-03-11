const esbuild = require("esbuild");

const fs = require("fs");
const path = require("path");

const external = [
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-gametest",
    "@minecraft/server-net",
    "@minecraft/server-common",
    "@minecraft/server-editor",
    "@minecraft/debug-utilities",
];

const buildOptions = {
    entryPoints: ["src/main.ts"],
    outfile: "scripts/main.js",
    bundle: true,
    minify: true,
    format: "esm",
    external,
};

(async () => {
    try {
        // Create output directory if it doesn't exist
        fs.mkdirSync(path.dirname(buildOptions.outfile), { recursive: true });

        await esbuild.build(buildOptions);
        console.log("Bundling finished!");
    } catch (error) {
        console.error(error);
    }
})();
