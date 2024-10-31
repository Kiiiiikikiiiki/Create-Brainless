ItemEvents.modification(event => {
    event.modify('deeperdarker:warden_sword', item => {
        item.attackDamage = 10.0
    })
    // fuel for the temppad
    event.modify('deeperdarker:heart_of_the_deep', item => {
        item.maxStackSize = 64
    })
    // neon tubes
    event.modify('create_things_and_misc:neon_tube', item => {
        item.maxStackSize = 16 
    })
    // Golden Armor
    event.modify('minecraft:golden_helmet', item => {
        item.armorProtection = 2.5
    })
    event.modify('minecraft:golden_chestplate', item => {
        item.armorProtection = 6.5
    })
    event.modify('minecraft:golden_leggings', item => {
        item.armorProtection = 5.0
    })
    event.modify('minecraft:golden_boots', item => {
        item.armorProtection = 2.5
    })

    // TODO Not working for now (Try fix it later)
    /*event.modify('blue_skies:crushing_hammer', item => {
        item.attackSpeed = 0.5
    })*/
    /*event.modify(Item.of('blue_skies:different_sword', '{Damage:0}'), item => {
        item.attackDamage = 10.0
    })*/
})