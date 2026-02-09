// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import {
    system,
    CustomComponentParameters,
    ItemComponentUseEvent,
    world,
    GameMode,
    WeatherType,
} from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

import { Menu, MenuBuildParams, MenuParams } from "qcs/minecraft-lib";

const portfolio: MenuParams = {
    title: "Main Menu",
    header: "My Portfolio",
    info: [
        "My name is Axl Daniel Jiménez Borges, a professional Minecraft Bedrock developer based in Mexico (CST).",
        "This interactive portfolio contains a small collection of systems and features developed by me.",
        "The main goal of this addon is to showcase §orefined, robust, re-usable and general algorithms§r that I've integrated into my personal library.",
        "The primary focus was to obtain the §ohighest quality§r possible making the features as close as possible to vanilla systems (including creative/survival interactions) and making them §oresilient§r to most edge cases.",
    ],
    buttons: [
        {
            name: "Crop System",
            icon: "textures/qcs/portfolio/blocks/diamond_flower_stage02",
            subMenu: {
                header: "Diamond Flower Seeds",
                info: [
                    "Re-creation of the vanilla crop system plus some additions.",
                    "Ambient particles + Harvest system when interacting with shears at maximum growth.",
                ],
                recipe: {
                    keys: {
                        1: "Torchflower Seeds",
                        2: "Diamond Dust",
                    },
                },
                buttons: [
                    {
                        name: "Obtain Seeds",
                        icon: "textures/qcs/portfolio/items/diamond_flower_seeds",
                        action: (player) => {
                            player.runCommand("give @s qcs_portfolio:diamond_flower_seeds 64");
                            player.runCommand(`give @s ${MinecraftItemTypes.BoneMeal} 64`);
                            player.runCommand(`give @s ${MinecraftItemTypes.Shears}`);

                            player.setGameMode(GameMode.Survival);
                        },
                    },
                    {
                        name: "Faster Tick Rate",
                        icon: "textures/ui/speed_effect",
                        action: () => {
                            world.gameRules.randomTickSpeed = 100;
                        },
                    },
                    {
                        name: "Reset Tick Rate",
                        icon: "textures/ui/slowness_effect",
                        action: () => {
                            world.gameRules.randomTickSpeed = 1;
                        },
                    },
                ],
            },
        },
        {
            name: "Potion System",
            icon: "textures/qcs/portfolio/items/haste_potion",
            subMenu: {
                header: "Haste Potion",
                info: "Basic effect system for consuming items.",
                buttons: [
                    {
                        name: "Obtain Potion",
                        icon: "textures/qcs/portfolio/items/haste_potion",
                        action: (player) => {
                            player.runCommand("give @s qcs_portfolio:haste_potion 3");
                            player.setGameMode(GameMode.Survival);
                        },
                    },
                    {
                        name: "Brew Potion",
                        icon: "textures/items/brewing_stand",
                        action: (player) => {
                            player.runCommand(`give @s ${MinecraftBlockTypes.BrewingStand}`);
                            player.runCommand(`give @s ${MinecraftItemTypes.Potion} 3 4`);
                            player.runCommand("give @s qcs_portfolio:diamond_dust");
                            player.runCommand(`give @s ${MinecraftItemTypes.BlazePowder}`);

                            player.setGameMode(GameMode.Survival);
                        },
                    },
                ],
            },
        },
        {
            name: "Ore Behavior",
            icon: "textures/items/diamond_pickaxe",
            subMenu: {
                header: "Diamond Dust Ore",
                info: "Re-creation of the vanilla ore behavior (enchantment support).",
                buttons: [
                    {
                        name: "Obtain Ore",
                        icon: "textures/qcs/portfolio/blocks/diamond_dust_ore",
                        action: (player) => {
                            player.runCommand("give @s qcs_portfolio:diamond_dust_ore 64");
                            player.runCommand(`give @s ${MinecraftItemTypes.DiamondPickaxe}`);
                            player.runCommand(`give @s ${MinecraftBlockTypes.Tnt} 64`);
                            player.runCommand(`give @s ${MinecraftItemTypes.FlintAndSteel}`);

                            player.setGameMode(GameMode.Survival);
                        },
                    },
                ],
            },
        },
        {
            name: "Tree Capitator Algorithm",
            icon: "textures/blocks/sapling_jungle",
            subMenu: {
                header: "Gravity Axe",
                info: "Mines every log connected to a given tree (enchantment support).",
                recipe: {
                    keys: {
                        1: "Netherite Axe",
                        2: "Diamond Dust",
                    },
                },
                buttons: [
                    {
                        name: "Obtain Gravity Axe",
                        icon: "textures/items/netherite_axe",
                        action: (player) => {
                            player.runCommand(`give @s ${MinecraftItemTypes.JungleSapling} 64`);
                            player.runCommand(`give @s ${MinecraftItemTypes.BoneMeal} 64`);
                            player.runCommand("give @s qcs_portfolio:gravity_axe");

                            player.setGameMode(GameMode.Survival);
                        },
                    },
                ],
            },
        },
        {
            name: "Dynamic Lighting System",
            icon: "textures/items/light_block_15",
            subMenu: {
                header: "Diamond Torch",
                info: [
                    "Dynamically places and removes light blocks following the player.",
                    "Item can be off handed.",
                ],
                recipe: {
                    keys: {
                        1: "Torch",
                        2: "Diamond Dust",
                    },
                },
                buttons: [
                    {
                        name: "Obtain Dynamic Torch",
                        icon: "textures/blocks/soul_torch",
                        action: (player) => {
                            player.runCommand("give @s qcs_portfolio:diamond_torch_off");
                            player.runCommand("time set midnight");
                        },
                    },
                ],
            },
        },
        {
            name: "Custom TNT",
            icon: "textures/qcs/portfolio/ui/lightning_tnt",
            subMenu: {
                header: "Lightning TNT",
                info: "Custom TNT that spawns lightning bolts around the area.",
                recipe: {
                    keys: {
                        1: "TNT",
                        2: "Diamond Dust",
                    },
                },
                buttons: [
                    {
                        name: "Obtain TNT",
                        icon: "textures/qcs/portfolio/ui/lightning_tnt",
                        action: (player) => {
                            player.runCommand("give @s qcs_portfolio:lightning_tnt_block 64");
                            player.runCommand(`give @s ${MinecraftItemTypes.FlintAndSteel}`);

                            player.setGameMode(GameMode.Survival);
                        },
                    },
                ],
            },
        },
        {
            name: "TNT Pickaxe",
            icon: "textures/blocks/tnt_side",
            subMenu: {
                info: "Creates a 3x3x3 explosion after a block is mined.",
                recipe: {
                    keys: {
                        1: "Netherite Pickaxe",
                        2: "Diamond Dust",
                    },
                },
                buttons: [
                    {
                        name: "Obtain TNT Pickaxe",
                        icon: "textures/items/netherite_pickaxe",
                        action: (player) => {
                            player.runCommand("give @s qcs_portfolio:tnt_pickaxe");
                            player.setGameMode(GameMode.Survival);
                        },
                    },
                ],
            },
        },
        {
            name: "Jigsaw Structures",
            icon: "textures/blocks/structure_block",
            subMenu: {
                header: "The Backrooms",
                info: "Generates jigsaw structure with the backrooms theme (music recommended).",
                buttons: [
                    {
                        name: "Generate structure",
                        icon: "textures/blocks/structure_block_load",
                        action: (player) => {
                            try {
                                world.structureManager.placeJigsaw(
                                    "qcs_portfolio:backrooms_anchor",
                                    "start",
                                    2,
                                    player.dimension,
                                    player.location,
                                );
                            } catch {
                                return console.warn(
                                    "Failed to generate stucture, try a flatter space?",
                                );
                            }
                            player.playMusic("music.qcs_portfolio.backrooms", { loop: true });
                            player.setGameMode(GameMode.Adventure);
                        },
                    },
                    {
                        name: "Stop Music",
                        icon: "textures/items/record_11",
                        action: (player) => player.stopMusic(),
                    },
                ],
            },
        },
    ],
};
let firstTime = true;

const GuideBook = {
    async onUse(event: ItemComponentUseEvent, p: CustomComponentParameters) {
        const player = event.source;
        const params = p.params as MenuBuildParams;

        if (firstTime) {
            world.gameRules.recipesUnlock = false;
            firstTime = false;
        }
        player.setGameMode(GameMode.Creative);

        player.dimension.setWeather(WeatherType.Clear);
        player.dimension.runCommand("time set noon");

        player.runCommand("clear");
        player.runCommand("give @s qcs_portfolio:guide_book");
        player.runCommand("kill @e[type=item]");

        const menu = new Menu(portfolio, {
            auto_headers: params.auto_headers,
        });
        menu.show(player);
    },
};

system.beforeEvents.startup.subscribe((init) => {
    init.itemComponentRegistry.registerCustomComponent("qcs_portfolio:guide_book", GuideBook);
});
