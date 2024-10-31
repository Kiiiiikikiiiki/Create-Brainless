ServerEvents.recipes(event => {
    event.custom({
        type: "create:milling",
        ingredients: [
            {item: 'minecraft:leather'}
        ],
        results: [
            {item: 'minecraft:rabbit_hide'}
        ],
        processingTime: 250
    })
})