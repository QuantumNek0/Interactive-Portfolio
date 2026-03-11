// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import { ItemCustomComponent, system } from "@minecraft/server";
import {
    ItemConsumeEffectComponent,
    ItemToolDurabilityComponent,
    ItemTreeCapitatorComponent,
    ItemDynamicLighting,
} from "qcs-minecraft-lib";

system.beforeEvents.startup.subscribe((init) => {
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:consume_effect",
        ItemConsumeEffectComponent
    );
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:tool_durability",
        ItemToolDurabilityComponent
    );
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:tree_capitator",
        ItemTreeCapitatorComponent
    );
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:dynamic_lighting",
        ItemDynamicLighting.component as ItemCustomComponent
    );
});

// Events
const toggleMap = new Map<string, string>([
    ["qcs_portfolio:diamond_torch_on", "qcs_portfolio:diamond_torch_off"],
]);

ItemDynamicLighting.init(toggleMap);
