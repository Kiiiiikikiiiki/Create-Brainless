/* ServerEvents.recipes(event => {
    // Atomizer
    event.remove({output: 'alchemistry:atomizer'})
    event.shaped({
        result: {item: 'alchemistry:atomizer'},
        pattern: [
            'DPD',
            'CRC',
            'DPD'
        ],
        key: {
            D: Ingredient.of('ad_astra:desh_ingot').toJson(),
            P: Ingredient.of('minecraft:piston').toJson(),
            C: Ingredient.of('minecraft:cauldron').toJson(),
            R: Ingredient.of('minecraft:redstone').toJson()
        }
    })
    // Compactor
    event.remove({output: 'alchemistry:compactor'})
    event.shaped({
        result: {item: 'alchemistry:compactor'},
        pattern: [
            'DPD',
            'SRS',
            'DPD'
        ],
        key: {
            D: Ingredient.of('ad_astra:desh_ingot').toJson(),
            P: Ingredient.of('minecraft:piston').toJson(),
            R: Ingredient.of('minecraft:redstone').toJson(),
            S: Ingredient.of('minecraft:stone_pressure_plate').toJson()
        }
    })
    // Combiner
    event.remove({output: 'alchemistry:combiner'})
    event.shaped({
        result: {item: 'alchemistry:combiner'},
        pattern: [
            'DGD',
            'ORO',
            'DPD'
        ],
        key: {
            D: Ingredient.of('ad_astra:desh_ingot').toJson(),
            P: Ingredient.of('minecraft:piston').toJson(),
            R: Ingredient.of('minecraft:redstone').toJson(),
            G: Ingredient.of('minecraft:diamond').toJson(),
            O: Ingredient.of('minecraft:obsidian').toJson()
        }
    })
    // Dissolver
    event.remove({output: 'alchemistry:dissolver'})
    event.shaped({
        result: {item: 'alchemistry:dissolver'},
        pattern: [
            'DPD',
            'MRM',
            'DPD'
        ],
        key: {
            D: Ingredient.of('ad_astra:desh_ingot').toJson(),
            P: Ingredient.of('minecraft:piston').toJson(),
            R: Ingredient.of('minecraft:redstone').toJson(),
            M: Ingredient.of('minecraft:magma_block').toJson()
        }
    })
    // Liquifier
    event.remove({output: 'alchemistry:liquifier'})
    event.shaped({
        result: {item: 'alchemistry:liquifier'},
        pattern: [
            'DPD',
            'SRS',
            'DCD'
        ],
        key: {
            D: Ingredient.of('ad_astra:desh_ingot').toJson(),
            P: Ingredient.of('minecraft:piston').toJson(),
            R: Ingredient.of('minecraft:redstone').toJson(),
            S: Ingredient.of('minecraft:stone_pressure_plate').toJson(),
            C: Ingredient.of('minecraft:cauldron').toJson()
        }
    })
}) */