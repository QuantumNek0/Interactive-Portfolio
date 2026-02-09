// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import {
    CustomComponentParameters,
    GameMode,
    ItemComponentMineBlockEvent,
    Player,
    system,
} from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

import { Area, CubeSize, Mainhand, Query, Vector } from "qcs/minecraft-lib";

type TNTPickaxeParams = {
    width: number;
    height: number;
    depth: number;
    relativeOffset?: [x: number, y: number, z: number];
};

const TNT_PARTICLES = "minecraft:huge_explosion_emitter";
const TNT_SOUND = "random.explode";

const TNTPickaxe = {
    onMineBlock(event: ItemComponentMineBlockEvent, p: CustomComponentParameters) {
        const params = p.params as TNTPickaxeParams;

        const player = event.source instanceof Player ? event.source : undefined;
        if (!player) return;

        const dimension = event.block.dimension;
        const minedLocation = event.block.location;

        const facingDirection = Query.facingDirection(event.source);
        const offset = Vector.arrayToVector(params.relativeOffset);

        const startPoint = Vector.Translate.sequence(minedLocation, facingDirection, [
            { translateFunction: Vector.Translate.right, value: offset.x },
            { translateFunction: Vector.Translate.up, value: offset.y },
            {
                translateFunction: Vector.Translate.forward,
                value: offset.z,
            },
        ]);
        const endPoint = Area.cubeEndPoint(startPoint, params satisfies CubeSize, facingDirection);
        const area = new Area(dimension, startPoint, endPoint);

        dimension.spawnParticle(TNT_PARTICLES, minedLocation);
        dimension.playSound(TNT_SOUND, minedLocation);

        area.forEachPoint((location) => {
            dimension.runCommand(
                `setblock ${Vector.toString(location)} ${MinecraftBlockTypes.Air} destroy`,
            );
        });
        if (player.getGameMode() === GameMode.Creative) return;
        const mainhand = new Mainhand(player);

        // the -1 represents the first block mined before the event call
        mainhand.damageItem(1, params.width * params.height * params.depth - 1);
    },
};

system.beforeEvents.startup.subscribe((init) => {
    init.itemComponentRegistry.registerCustomComponent("qcs_portfolio:tnt_pickaxe", TNTPickaxe);
});
