// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import { system } from "@minecraft/server";
import { BlockComponents } from "qcs/minecraft-lib";

system.beforeEvents.startup.subscribe((init) => {
    init.blockComponentRegistry.registerCustomComponent("qcs_portfolio:crop", BlockComponents.Crop);
    init.blockComponentRegistry.registerCustomComponent(
        "qcs_portfolio:ambient_particles",
        BlockComponents.AmbientParticles,
    );
    init.blockComponentRegistry.registerCustomComponent("qcs_portfolio:ore", BlockComponents.Ore);
    init.blockComponentRegistry.registerCustomComponent(
        "qcs_portfolio:entity_placer",
        BlockComponents.EntityPlacer,
    );
});
