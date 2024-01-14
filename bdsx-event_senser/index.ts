//made by code mc1471(codeyun1)

import { MinecraftPacketIds } from "bdsx/bds/packetids";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { gray, red } from "colors";

bedrockServer.executeCommand(`scoreboard objectives add dead_point dummy`)
bedrockServer.executeCommand(`scoreboard objectives add is_jumping dummy`)
bedrockServer.executeCommand(`scoreboard objectives add is_attacking dummy`)
bedrockServer.executeCommand(`scoreboard objectives add is_pushing_shift dummy`)

events.entityDie.on(ev => {
    ev.entity.runCommand(`scoreboard players add @s dead_point 1`)
})

events.playerJump.on(ev => {
    ev.player.runCommand(`scoreboard players set @s is_jumping 1`)
})

events.playerAttack.on(ev => {
    ev.player.runCommand(`scoreboard players set @s is_attacking 1`)
})

events.entitySneak.on(ev => {
    if (ev.isSneaking == true) {
        ev.entity.runCommand(`scoreboard players set @s is_pushing_shift 1`)
    }
})

events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni, id) => {
    const msg = ptr.message.replace(/"/g, "''")
    const eventActor = ni.getActor()!
    const getLcc = eventActor.getTags().find(f => f.startsWith("lcc:"))

    if (getLcc == undefined) return;

    eventActor.removeTag(getLcc)
    eventActor.addTag(`lcc:${msg}`)
})

events.levelTick.on(ev => {
    bedrockServer.executeCommand(`scoreboard players reset @a is_jumping`)
    bedrockServer.executeCommand(`scoreboard players reset @a is_attacking`)
    bedrockServer.executeCommand(`scoreboard players reset @a is_pushing_shift`)
})


events.serverOpen.on(() => {
    console.log(red(`[ESP] loaded`))
    console.log(red(`[ESP]`), gray(` : made by code mc1471(codeyun1)`))
})