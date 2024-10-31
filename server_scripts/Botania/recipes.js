ServerEvents.recipes(event => {
    event.remove({id: 'botania:quartz_dark'})

    event.shaped('4x botania:quartz_dark', ['CQC', 'QCQ', 'CQC'], {
        C: 'minecraft:charcoal',
        Q: 'minecraft:quartz'
    })

    // Flugel Tiara
    event.remove({id: 'botania:flighttiara_0'})

    // remove chakram
    event.remove({id: 'botania:thorn_chakram'})
    event.remove({id: 'botania:flare_chakram'})
    event.remove({id: 'botania:divining_rod'})
    event.remove({id: 'botania:cobble_rod'})
})