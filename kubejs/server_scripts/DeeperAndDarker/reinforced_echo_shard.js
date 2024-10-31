ServerEvents.recipes(event => {
    event.remove({id: 'deeperdarker:reinforced_echo_shard'})

    event.shaped('1x deeperdarker:reinforced_echo_shard', ['BCB', 'CEC', 'BCB'], {
        C: 'deeperdarker:warden_carapace',
        B: 'deeperdarker:sculk_bone',
        E: 'minecraft:echo_shard'
    })
})