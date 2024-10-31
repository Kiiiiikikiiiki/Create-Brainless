// Remove the 2 recipes ID for tuff that is getting cruched

// then add the new tuff crushing recipes 
ServerEvents.recipes(event => {
    event.remove({id: 'create:crushing/tuff'})
    event.remove({id: 'create:crushing/tuff_recycling'})

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:tuff"
            }
        ],
        "results": [
            {
                "item": "createaddition:electrum_nugget",
                "chance": 0.1
            }
        ],
        "processingTime": 350
    })

    // test remove after 
    event.stonecutting('1x minecraft:sandstone', 'xkdeco:sandstone_bricks')
})
