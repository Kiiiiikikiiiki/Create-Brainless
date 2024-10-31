ServerEvents.recipes(event => {
    event.shaped({
        result: {item: 'minecraft:saddle'},
        pattern: [
            'RRR',
            'R R'
        ],
        key: {
            R: Ingredient.of('minecraft:rabbit_hide').toJson()
        }
    })
})