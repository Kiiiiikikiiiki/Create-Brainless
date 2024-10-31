ServerEvents.recipes(event => {
    event.remove({output : 'aether:leather_gloves'})
    event.shaped({
        result: {item: 'aether:leather_gloves'},
        pattern: [
            'L L',
            'Z Z'
        ],
        key: {
            L: Ingredient.of('#forge:leather').toJson(),
            Z: Ingredient.of('aether:zanite_gemstone').toJson()
        }
    })

    event.remove({output: 'aether:golden_gloves'})
    event.shaped({
        result: {item: 'aether:golden_gloves'},
        pattern: [
            'G G',
            'Z Z'
        ],
        key: {
            G: Ingredient.of('minecraft:gold_ingot').toJson(),
            Z: Ingredient.of('aether:zanite_gemstone').toJson()
        }
    })

    event.remove({output: 'aether:iron_gloves'})
    event.shaped({
        result: {item: 'aether:iron_gloves'},
        pattern: [
            'G G',
            'Z Z'
        ],
        key: {
            G: Ingredient.of('minecraft:iron_ingot').toJson(),
            Z: Ingredient.of('aether:zanite_gemstone').toJson()
        }
    })

    event.remove({output: 'aether:diamond_gloves'})
    event.shaped({
        result: {item: 'aether:diamond_gloves'},
        pattern: [
            'G G',
            'Z Z'
        ],
        key: {
            G: Ingredient.of('minecraft:diamond').toJson(),
            Z: Ingredient.of('aether:zanite_gemstone').toJson()
        }
    })
})