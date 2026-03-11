// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import { system } from "@minecraft/server";
import {
    BlockCropComponent,
    BlockAmbientParticlesComponent,
    BlockOreComponent,
    BlockEntityPlacerComponent,
} from "qcs-minecraft-lib";

system.beforeEvents.startup.subscribe((init) => {
    init.blockComponentRegistry.registerCustomComponent("qcs_portfolio:crop", BlockCropComponent);
    init.blockComponentRegistry.registerCustomComponent(
        "qcs_portfolio:ambient_particles",
        BlockAmbientParticlesComponent
    );
    init.blockComponentRegistry.registerCustomComponent("qcs_portfolio:ore", BlockOreComponent);
    init.blockComponentRegistry.registerCustomComponent(
        "qcs_portfolio:entity_placer",
        BlockEntityPlacerComponent
    );
});
