// Add-On developed by Quantum Cube Studios (Axl Daniel Jimenez Borges)

import { system, Player, GameMode } from "@minecraft/server";
import { AreaSphere, Mainhand } from "qcs-minecraft-lib";

const params = {
    number_lightnings: 5,
    lightning_spawn_rate: 1,
    radius: 5,
    weather_duration: 30,
};
system.afterEvents.scriptEventReceive.subscribe((event) => {
    if (event.id === "qcs_portfolio:flint_and_steel_use") {
        const player = event.sourceEntity instanceof Player ? event.sourceEntity : undefined;
        if (!player) return;

        const mainhand = new Mainhand(player);
        if (mainhand.item?.typeId !== "minecraft:flint_and_steel") return;

        const damage = Number(event.message);

        if (player.getGameMode() !== GameMode.Creative) mainhand.damageItem(damage);
    }

    if (event.id === "qcs_portfolio:lightning_storm") {
        const tnt = event.sourceEntity;
        if (!tnt) return;

        const dimension = tnt.dimension;

        dimension.runCommand(`weather thunder ${params.weather_duration}`);
        const area = new AreaSphere(dimension, tnt.location, params.radius);

        area.scatterEntitiesOvertime(
            ["minecraft:lightning_bolt"],
            params.number_lightnings,
            {
                allowAir: true,
                allowCovered: false,
                allowFloating: false,
            },
            params.lightning_spawn_rate
        );
    }
});
