ServerEvents.recipes(event => {
    event.remove({id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
    
    // remove the making of plates with the hammer
    event.remove({id: 'ad_astra:hammering/steel_plate'})
    event.remove({id: 'ad_astra:hammering/iron_plate'})
    event.remove({id: 'ad_astra:hammering/desh_plate'})
    event.remove({id: 'ad_astra:hammering/ostrum_plate'})
    event.remove({id: 'ad_astra:hammering/calorite_plate'})

    event.remove({output: 'ad_astra:steel_nugget'})
    event.shapeless('9x ad_astra:steel_nugget', [
        '#forge:ingots/steel'
    ])
})