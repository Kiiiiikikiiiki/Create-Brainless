ServerEvents.recipes(event => {
    event.remove({output: 'createaddition:capacitor'})
    event.shaped({
        result: {item: 'createaddition:capacitor'},
        pattern: [
            ' Z ',
            ' C ',
            ' O '
        ],
        key: {
            Z: Ingredient.of('createaddition:zinc_sheet').toJson(),
            C: Ingredient.of('create:copper_sheet').toJson(),
            O: Ingredient.of('ad_astra:desh_ingot').toJson()
        }
    })

    event.remove({id: 'createaddition:crafting/small_connector_copper'})
    event.shaped({
        result: {item: 'createaddition:connector', count: 3},
        pattern: [
            'CA ',
            'SO '
        ],
        key: {
            C: Ingredient.of('createaddition:copper_rod').toJson(),
            A: Ingredient.of('create:andesite_alloy').toJson(),
            O: Ingredient.of('ad_astra:desh_nugget').toJson(),
            S: Ingredient.of('#forge:slimeballs').toJson()
        }
    })

    event.remove({output: 'createaddition:large_connector'})
    event.shaped({
        result: {item: 'createaddition:large_connector', count: 2},
        pattern: [
            'CA ',
            'AS ',
            ' O '
        ],
        key: {
            C: Ingredient.of('createaddition:gold_rod').toJson(),
            A: Ingredient.of('create:andesite_alloy').toJson(),
            O: Ingredient.of('ad_astra:desh_nugget').toJson(),
            S: Ingredient.of('#forge:slimeballs').toJson()
        }
    })
})