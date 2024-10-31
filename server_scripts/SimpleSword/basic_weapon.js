ServerEvents.recipes(event => {

    // Iron LongSword
    event.remove({id: 'simplyswords:iron_longsword'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {
                item: 'botania:mana_string'
            },
            {
                item: 'minecraft:iron_block',
            },
            {
                item: 'minecraft:iron_block',
            },
            {
                item: 'createaddition:iron_rod'
            }
        ],
        results: [
            {
                item: 'simplyswords:iron_longsword'
            }
        ]
    })

    // Gold LongSword
    event.remove({id: 'simplyswords:gold_longsword'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_longsword'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'}
        ],
        results: [
            {
                item: 'simplyswords:gold_longsword'
            }
        ],
        heatRequirement: 'heated'
    })

    // Diamond LongSword
    event.remove({id: 'simplyswords:diamond_longsword'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_longsword'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'}
        ],
        results: [
            {
                item: 'simplyswords:diamond_longsword'
            }
        ],
        heatRequirement: 'superheated'
    })

    // Iron TwinBlade
    event.remove({id: 'simplyswords:iron_twinblade'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'}

        ],
        results: [
            {item: 'simplyswords:iron_twinblade'}
        ]
    })

    // Gold TwinBlade
    event.remove({id: 'simplyswords:gold_twinblade'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_twinblade'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'}

        ],
        results: [
            {item: 'simplyswords:gold_twinblade'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond TwinBlade
    event.remove({id: 'simplyswords:diamond_twinblade'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_twinblade'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'}

        ],
        results: [
            {item: 'simplyswords:diamond_twinblade'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron rapier
    event.remove({id: 'simplyswords:iron_rapier'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'}

        ],
        results: [
            {item: 'simplyswords:iron_rapier'}
        ]
    })

    // Gold Rapier
    event.remove({id: 'simplyswords:gold_rapier'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_rapier'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'}

        ],
        results: [
            {item: 'simplyswords:gold_rapier'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Rapier
    event.remove({id: 'simplyswords:diamond_rapier'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_rapier'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'}

        ],
        results: [
            {item: 'simplyswords:diamond_rapier'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron katana
    event.remove({id: 'simplyswords:iron_katana'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'}

        ],
        results: [
            {item: 'simplyswords:iron_katana'}
        ]
    })

    // Gold Katana
    event.remove({id: 'simplyswords:gold_katana'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_katana'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'}

        ],
        results: [
            {item: 'simplyswords:gold_katana'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Katana
    event.remove({id: 'simplyswords:diamond_katana'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_katana'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'}

        ],
        results: [
            {item: 'simplyswords:diamond_katana'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron sai
    event.remove({id: 'simplyswords:iron_sai'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'}
        ],
        results: [
            {item: 'simplyswords:iron_sai'}
        ]
    })

    // Gold Sai
    event.remove({id: 'simplyswords:gold_sai'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_sai'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'}
        ],
        results: [
            {item: 'simplyswords:gold_sai'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Sai
    event.remove({id: 'simplyswords:diamond_sai'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_sai'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'}
        ],
        results: [
            {item: 'simplyswords:diamond_sai'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron spear
    event.remove({id: 'simplyswords:iron_spear'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'},
            {item: 'createaddition:iron_rod'}
        ],
        results: [
            {item: 'simplyswords:iron_spear'}
        ]
    })

    // Gold Spear
    event.remove({id: 'simplyswords:gold_spear'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_spear'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'},
            {item: 'createaddition:gold_rod'}
        ],
        results: [
            {item: 'simplyswords:gold_spear'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Spear
    event.remove({id: 'simplyswords:diamond_spear'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_spear'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'blue_skies:bluebright_stick'}
        ],
        results: [
            {item: 'simplyswords:diamond_spear'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron Glaive
    event.remove({id: 'simplyswords:iron_glaive'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'createaddition:iron_rod'},
            {item: 'createaddition:iron_rod'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_glaive'}
        ]
    })

    // Gold Glaive
    event.remove({id: 'simplyswords:gold_glaive'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_glaive'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:gold_rod'},
            {item: 'createaddition:gold_rod'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_glaive'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Glaive
    event.remove({id: 'simplyswords:diamond_glaive'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_glaive'},
            {item: 'botania:mana_string'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_glaive'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron warglaive
    event.remove({id: 'simplyswords:iron_warglaive'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'}
        ],
        results: [
            {item: 'simplyswords:iron_warglaive'}
        ]
    })

    // Gold WarGlaive
    event.remove({id: 'simplyswords:gold_warglaive'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_warglaive'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'}
        ],
        results: [
            {item: 'simplyswords:gold_warglaive'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond WarGlaive
    event.remove({id: 'simplyswords:diamond_warglaive'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_warglaive'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'}
        ],
        results: [
            {item: 'simplyswords:diamond_warglaive'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron cutlass
    event.remove({id: 'simplyswords:iron_cutlass'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'createaddition:iron_rod'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_cutlass'}
        ]
    })

    // Gold Cutlass
    event.remove({id: 'simplyswords:gold_cutlass'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_cutlass'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:gold_rod'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_cutlass'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Cutlass
    event.remove({id: 'simplyswords:diamond_cutlass'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_cutlass'},
            {item: 'botania:mana_string'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_cutlass'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron claymore
    event.remove({id: 'simplyswords:iron_claymore'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:iron_rod'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_claymore'}
        ]
    })

    // Gold Claymore
    event.remove({id: 'simplyswords:gold_claymore'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_claymore'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:gold_rod'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_claymore'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Claymore
    event.remove({id: 'simplyswords:diamond_claymore'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_claymore'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_claymore'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron greathammer
    event.remove({id: 'simplyswords:iron_greathammer'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:iron_rod'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_greathammer'}
        ]
    })

    // Gold Greathammer
    event.remove({id: 'simplyswords:gold_greathammer'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_greathammer'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:gold_rod'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_greathammer'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Greathammer
    event.remove({id: 'simplyswords:diamond_greathammer'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_greathammer'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_greathammer'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron greataxe
    event.remove({id: 'simplyswords:iron_greataxe'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:iron_rod'},
            {item: 'createaddition:iron_rod'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_greataxe'}
        ]
    })

    // Gold GreatAxe
    event.remove({id: 'simplyswords:gold_greataxe'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_greataxe'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:gold_rod'},
            {item: 'createaddition:gold_rod'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_greataxe'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond GreatAxe
    event.remove({id: 'simplyswords:diamond_greataxe'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_greataxe'},
            {item: 'botania:mana_string'},
            {item: 'botania:mana_string'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_greataxe'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron chakram
    event.remove({id: 'simplyswords:iron_chakram'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_chakram'}
        ]
    })

    // Gold Chakram
    event.remove({id: 'simplyswords:gold_chakram'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_chakram'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_chakram'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Chakram
    event.remove({id: 'simplyswords:diamond_chakram'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_chakram'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_chakram'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron scythe
    event.remove({id: 'simplyswords:iron_scythe'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'createaddition:iron_rod'},
            {item: 'createaddition:iron_rod'},
            {item: 'createaddition:iron_rod'}
        ],
        results: [
            {item: 'simplyswords:iron_scythe'}
        ]
    })

    // Gold Scythe
    event.remove({id: 'simplyswords:gold_scythe'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_scythe'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'createaddition:gold_rod'},
            {item: 'createaddition:gold_rod'},
            {item: 'createaddition:gold_rod'}
        ],
        results: [
            {item: 'simplyswords:gold_scythe'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Scythe
    event.remove({id: 'simplyswords:diamond_scythe'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_scythe'},
            {item: 'botania:mana_string'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'blue_skies:bluebright_stick'}
        ],
        results: [
            {item: 'simplyswords:diamond_scythe'}
        ],
        heatRequirement: 'superheated'
    })

    // Iron Halberd
    event.remove({id: 'simplyswords:iron_halberd'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'botania:mana_string'},
            {item: 'createaddition:iron_rod'},
            {item: 'createaddition:iron_rod'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'},
            {item: 'minecraft:iron_block'}
        ],
        results: [
            {item: 'simplyswords:iron_halberd'}
        ]
    })

    // Gold Halberd
    event.remove({id: 'simplyswords:gold_halberd'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:iron_halberd'},
            {item: 'botania:mana_string'},
            {item: 'createaddition:gold_rod'},
            {item: 'createaddition:gold_rod'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'},
            {item: 'minecraft:gold_block'}
        ],
        results: [
            {item: 'simplyswords:gold_halberd'}
        ],
        heatRequirement: 'heated'
    })

    // Diamond Halberd
    event.remove({id: 'simplyswords:diamond_halberd'})
    event.custom({
        type: 'create:compacting',
        ingredients: [
            {item: 'simplyswords:gold_halberd'},
            {item: 'botania:mana_string'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'blue_skies:bluebright_stick'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'},
            {item: 'minecraft:diamond_block'}
        ],
        results: [
            {item: 'simplyswords:diamond_halberd'}
        ],
        heatRequirement: 'superheated'
    })
})