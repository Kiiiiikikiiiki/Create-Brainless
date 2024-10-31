ServerEvents.recipes(e => {
    function cogRecipe(logItem, plankItem, result) {
        e.remove({output: result})
        e.custom({
            type: 'create:mechanical_crafting',
            pattern: [
                '  LSL  ',
                ' R O R ',
                'PP O PP',
                '  PPP  '
            ],
            key: {
                L: Ingredient.of('minecraft:lead').toJson(),
                S: Ingredient.of('smallships:sail').toJson(),
                R: Ingredient.of('farmersdelight:rope').toJson(),
                P: Ingredient.of(plankItem).toJson(),
                O: Ingredient.of(logItem).toJson()
            },
            result: Item.of(result).toJson(),
            acceptMirrored: false
        })
    }

    function galleyRecipe(logItem, plankItem, result) {
        e.remove({output: result})
        e.custom({
            type: 'create:mechanical_crafting',
            pattern: [
                '  LSL  ',
                ' R O R ',
                'PPCOCPP',
                '  PPP  '
            ],
            key: {
                L: Ingredient.of('minecraft:lead').toJson(),
                S: Ingredient.of('smallships:sail').toJson(),
                R: Ingredient.of('farmersdelight:rope').toJson(),
                C: Ingredient.of('minecraft:chest').toJson(),
                P: Ingredient.of(plankItem).toJson(),
                O: Ingredient.of(logItem).toJson()
            },
            result: Item.of(result).toJson(),
            acceptMirrored: false
        })
    }

    function briggRecipe(logItem, plankItem, result) {
        e.remove({output: result})
        e.custom({
            type: 'create:mechanical_crafting',
            pattern: [
                '  SLS  ',
                ' ROLOR ',
                'PPOCOPP',
                '  PPP  '
            ],
            key: {
                L: Ingredient.of('minecraft:lead').toJson(),
                S: Ingredient.of('smallships:sail').toJson(),
                R: Ingredient.of('farmersdelight:rope').toJson(),
                C: Ingredient.of('minecraft:chest').toJson(),
                P: Ingredient.of(plankItem).toJson(),
                O: Ingredient.of(logItem).toJson()
            },
            result: Item.of(result).toJson(),
            acceptMirrored: false
        })
    }
    // Oak
    cogRecipe('minecraft:oak_log', 'minecraft:oak_planks', 'smallships:oak_cog')
    galleyRecipe('minecraft:oak_log', 'minecraft:oak_planks', 'smallships:oak_galley')
    briggRecipe('minecraft:oak_log', 'minecraft:oak_planks', 'smallships:oak_brigg')
    // Spruce
    cogRecipe('minecraft:spruce_log', 'minecraft:spruce_planks', 'smallships:spruce_cog')
    galleyRecipe('minecraft:spruce_log', 'minecraft:spruce_planks', 'smallships:spruce_galley')
    briggRecipe('minecraft:spruce_log', 'minecraft:spruce_planks', 'smallships:spruce_brigg')
    // birch
    cogRecipe('minecraft:birch_log', 'minecraft:birch_planks', 'smallships:birch_cog')
    galleyRecipe('minecraft:birch_log', 'minecraft:birch_planks', 'smallships:birch_galley')
    briggRecipe('minecraft:birch_log', 'minecraft:birch_planks', 'smallships:birch_brigg')
    // jungle
    cogRecipe('minecraft:jungle_log', 'minecraft:jungle_planks', 'smallships:jungle_cog')
    galleyRecipe('minecraft:jungle_log', 'minecraft:jungle_planks', 'smallships:jungle_galley')
    briggRecipe('minecraft:jungle_log', 'minecraft:jungle_planks', 'smallships:jungle_brigg')
    // acacia
    cogRecipe('minecraft:acacia_log', 'minecraft:acacia_planks', 'smallships:acacia_cog')
    galleyRecipe('minecraft:acacia_log', 'minecraft:acacia_planks', 'smallships:acacia_galley')
    briggRecipe('minecraft:acacia_log', 'minecraft:acacia_planks', 'smallships:acacia_brigg')
    // cherry
    cogRecipe('minecraft:cherry_log', 'minecraft:cherry_planks', 'smallships:cherry_cog')
    galleyRecipe('minecraft:cherry_log', 'minecraft:cherry_planks', 'smallships:cherry_galley')
    briggRecipe('minecraft:cherry_log', 'minecraft:cherry_planks', 'smallships:cherry_brigg')
    // dark_oak
    cogRecipe('minecraft:dark_oak_log', 'minecraft:dark_oak_planks', 'smallships:dark_oak_cog')
    galleyRecipe('minecraft:dark_oak_log', 'minecraft:dark_oak_planks', 'smallships:dark_oak_galley')
    briggRecipe('minecraft:dark_oak_log', 'minecraft:dark_oak_planks', 'smallships:dark_oak_brigg')
    // mangrove
    cogRecipe('minecraft:mangrove_log', 'minecraft:mangrove_planks', 'smallships:mangrove_cog')
    galleyRecipe('minecraft:mangrove_log', 'minecraft:mangrove_planks', 'smallships:mangrove_galley')
    briggRecipe('minecraft:mangrove_log', 'minecraft:mangrove_planks', 'smallships:mangrove_brigg')
    // bamboo_block
    cogRecipe('minecraft:bamboo_block', 'minecraft:bamboo_planks', 'smallships:bamboo_cog')
    galleyRecipe('minecraft:bamboo_block', 'minecraft:bamboo_planks', 'smallships:bamboo_galley')
    briggRecipe('minecraft:bamboo_block', 'minecraft:bamboo_planks', 'smallships:bamboo_brigg')
})