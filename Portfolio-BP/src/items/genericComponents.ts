// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import { system } from "@minecraft/server";
import { DeveloperComponents, ItemComponents } from "qcs/minecraft-lib";

system.beforeEvents.startup.subscribe((init) => {
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:consume_effect",
        ItemComponents.ConsumeEffect,
    );
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:tool_durability",
        ItemComponents.ToolDurability,
    );
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:tree_capitator",
        ItemComponents.TreeCapitator,
    );
    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:dynamic_lighting",
        ItemComponents.DynamicLighting,
    );

    // Developer Tools

    init.itemComponentRegistry.registerCustomComponent(
        "qcs_portfolio:print_block_tags",
        DeveloperComponents.Items.PrintBlockTags,
    );
});

// Events
const toggleMap = new Map<string, string>([
    ["qcs_portfolio:diamond_torch_on", "qcs_portfolio:diamond_torch_off"],
]);

ItemComponents.Init.dynamicLighting(toggleMap);
