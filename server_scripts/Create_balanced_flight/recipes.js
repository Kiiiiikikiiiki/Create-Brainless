ServerEvents.recipes(event => {
    event.remove({id: 'balancedflight:sequenced_assembly/flight_anchor'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:beacon'},
        transitionalItem: {item: 'minecraft:beacon'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:beacon'
                    },
                    {
                        item: 'create:precision_mechanism'
                    }
                ],
                results: [
                    {item: 'minecraft:beacon'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:beacon'
                    },
                    {
                        item: 'create:railway_casing'
                    }
                ],
                results: [
                    {item: 'minecraft:beacon'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:beacon'
                    },
                    {
                        item: 'create:brass_block'
                    }
                ],
                results: [
                    {item: 'minecraft:beacon'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:beacon'
                    },
                    {
                        item: 'aether:golden_aercloud'
                    }
                ],
                results: [
                    {item: 'minecraft:beacon'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:beacon'
                    },
                    {
                        item: 'minecraft:glass'
                    }
                ],
                results: [
                    {item: 'minecraft:beacon'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:beacon'
                    },
                    {
                        item: 'minecraft:feather'
                    }
                ],
                results: [
                    {item: 'minecraft:beacon'}
                ]
            },
        ],
        results: [
            {item: 'balancedflight:flight_anchor'}
        ],
        loops: 3
    })

    event.remove({id: 'create:mechanical_crafting/ascended_flight_ring'})
    event.custom({
        type: "create:mechanical_crafting",
        pattern: [
            ' GEIEG ',
            'GKDSDLG',
            'EDNANDE',
            'ZFBWCHX',
            'EDNRNDE',
            'GODJDMG',
            ' GEYEG '
        ],
        key: {
            G: Ingredient.of('advancednetherite:netherite_gold_block').toJson(),
            E: Ingredient.of('advancednetherite:netherite_emerald_block').toJson(),
            D: Ingredient.of('advancednetherite:netherite_diamond_block').toJson(),
            S: Ingredient.of('blue_skies:alchemist_trophy').toJson(),
            N: Ingredient.of('ad_astra:calorite_block').toJson(),
            W: Ingredient.of('deeperdarker:soul_elytra').toJson(),
            I: Ingredient.of('cataclysm:ignitium_block').toJson(),
            Z: Ingredient.of('cataclysm:witherite_block').toJson(),
            X: Ingredient.of('cataclysm:enderite_block').toJson(),
            Y: Ingredient.of('aether:enchanted_gravitite').toJson(),
            A: Ingredient.of('botania:gaia_ingot').toJson(),
            B: Ingredient.of('irons_spellbooks:lightning_upgrade_orb').toJson(),
            C: Ingredient.of('pneumaticcraft:programming_puzzle').toJson(),
            R: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            F: Ingredient.of('blue_skies:summoner_trophy').toJson(),
            H: Ingredient.of('blue_skies:arachnarch_trophy').toJson(),
            J: Ingredient.of('blue_skies:starlit_crusher_trophy').toJson(),
            K: Ingredient.of('ars_nouveau:archmage_spell_book').toJson(),
            L: Ingredient.of('ae2:fluid_storage_cell_256k').toJson(),
            M: Ingredient.of('sophisticatedbackpacks:everlasting_upgrade').toJson(),
            O: Ingredient.of('unusual_delight:mysterious_worm_cocktail').toJson(),
        },
        result: Item.of('balancedflight:ascended_flight_ring').toJson(),
        acceptMirrored: false
    })
})