ServerEvents.recipes(event => {
    event.remove({output: 'create:copper_diving_helmet'})
    event.shaped({
        result: {item: 'create:copper_diving_helmet'},
        pattern: [
            'CCC',
            'CSC'
        ],
        key: {
            C: Ingredient.of('minecraft:copper_ingot').toJson(),
            S: Ingredient.of('minecraft:heart_of_the_sea').toJson()
        }
    })
})