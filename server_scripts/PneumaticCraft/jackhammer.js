ServerEvents.recipes(event => {
    event.remove({output: 'pneumaticcraft:jackhammer'})
    event.shaped({
        result: {item: 'pneumaticcraft:jackhammer'},
        pattern: [
            'PBP',
            'ITI',
            'CRC'
        ],
        key: {
            P: Ingredient.of('pneumaticcraft:plastic').toJson(),
            B: Ingredient.of('pneumaticcraft:compressed_iron_block').toJson(),
            I: Ingredient.of('pneumaticcraft:ingot_iron_compressed').toJson(),
            T: Ingredient.of('pneumaticcraft:pressure_tube').toJson(),
            C: Ingredient.of('ad_astra:calorite_plate').toJson(),
            R: Ingredient.of('pneumaticcraft:pneumatic_cylinder').toJson()
        }
    })
})