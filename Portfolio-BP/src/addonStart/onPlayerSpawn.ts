// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import { world } from "@minecraft/server";

const JOINED = "qcs_portfolio:joined";
const GUIDE_BOOK = "qcs_portfolio:guide_book";

world.afterEvents.playerSpawn.subscribe(({ player }) => {
    if (player.getDynamicProperty(JOINED)) return;

    const result = player.runCommand(`give @s ${GUIDE_BOOK}`);
    if (result.successCount > 0) player.setDynamicProperty(JOINED, true);
});
