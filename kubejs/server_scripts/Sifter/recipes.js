ServerEvents.recipes(event => {

    // String mesh
    event.remove({id: 'createsifter:sifting/sand_string_mesh'})
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:string_mesh"
            },
            {
                tag: 'forge:concrete_powders'
            }
        ],
        results: [
            {
            item: "minecraft:redstone",
            chance: 0.05
            },
            {
            item: "minecraft:bone_meal",
            chance: 0.4
            }
        ],
        processingTime: 200
    })

    // Andesite Mesh
    event.remove({id: 'createsifter:sifting/gravel_andesite_mesh'})
    event.remove({id: 'createsifter:sifting/sand_andesite_mesh'})

    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:andesite_mesh"
            },
            {
                item: 'minecraft:andesite'
            }
        ],
        results: [
            {
                item: "create:copper_nugget",
                chance: 0.05
            },
            {
                item: "create:zinc_nugget",
                chance: 0.01
            },
            {
                item: "minecraft:iron_nugget",
                chance: 0.01
            },
            {
                item: "minecraft:gold_nugget",
                chance: 0.03
            },
            {
                item: "minecraft:coal",
                chance: 0.1
            },
            {
                item: "minecraft:flint",
                chance: 0.1
            }
        ],
        processingTime: 250
    })
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:andesite_mesh"
            },
            {
                tag: 'forge:concrete_powders'
            }
        ],
        results: [
            {
                item: "minecraft:redstone",
                chance: 0.1
            },
            {
                item: "minecraft:bone_meal",
                chance: 0.4
            },
            {
                item: "create:experience_nugget",
                chance: 0.1
            }
        ],
        processingTime: 250
    })

    // Zinc Mesh
    event.remove({id: 'createsifter:sifting/gravel_zinc_mesh'})
    event.remove({id: 'createsifter:sifting/sand_zinc_mesh'})

    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:zinc_mesh"
            },
            {
                item: 'minecraft:andesite'
            }
        ],
        results: [
            {
                item: "create:copper_nugget",
                chance: 0.05
            },
            {
                item: "create:zinc_nugget",
                chance: 0.02
            },
            {
                item: "minecraft:iron_nugget",
                chance: 0.05
            },
            {
                item: "minecraft:gold_nugget",
                chance: 0.08
            },
            {
                item: "minecraft:coal",
                chance: 0.1
            },
            {
                item: "minecraft:lapis_lazuli",
                chance: 0.05
            },
            {
                item: "minecraft:flint",
                chance: 0.1
            },
            {
                item: "create:experience_nugget",
                chance: 0.1
            }
        ],
        processingTime: 300
    })
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:zinc_mesh"
            },
            {
                tag: 'forge:concrete_powders'
            }
        ],
        results: [
            {
                item: "minecraft:redstone",
                chance: 0.15
            },
            {
                item: "minecraft:bone_meal",
                chance: 0.4
            },
            {
                item: "create:experience_nugget",
                chance: 0.1
            }
        ],
        processingTime: 300
    })

    // Brass
    event.remove({id: 'createsifter:sifting/gravel_brass_mesh'})
    event.remove({id: 'createsifter:sifting/sand_brass_mesh'})
    event.remove({id: 'createsifter:sifting/soul_sand_brass_mesh'})

    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:brass_mesh"
            },
            {
                item: 'minecraft:andesite'
            }
        ],
        results: [
            {
                item: "create:crushed_raw_copper",
                chance: 0.05
            },
            {
                item: "create:crushed_raw_zinc",
                chance: 0.05
            },
            {
                item: "create:crushed_raw_iron",
                chance: 0.05
            },
            {
                item: "create:crushed_raw_gold",
                chance: 0.05
            },
            {
                item: "minecraft:coal",
                chance: 0.15
            },
            {
                item: "minecraft:lapis_lazuli",
                chance: 0.1
            },
            {
                item: "minecraft:flint",
                chance: 0.1
            },
            {
                item: "create:experience_nugget",
                chance: 0.1
            }
        ],
        processingTime: 350
    })
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:brass_mesh"
            },
            {
                tag: 'forge:concrete_powders'
            }
        ],
        results: [
            {
                item: "minecraft:redstone",
                count: 2,
                chance: 0.25
            },
            {
                item: "minecraft:bone_meal",
                chance: 0.4
            },
            {
                item: "create:experience_nugget",
                chance: 0.15
            },
            {
                item: "minecraft:glowstone_dust",
                chance: 0.1
            },
            {
                item: "minecraft:blaze_powder",
                chance: 0.1
            }
        ],
        processingTime: 350
    })
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:brass_mesh"
            },
            {
                item: 'excessive_building:red_nether_tiles'
            }
        ],
        results: [
            {
                item: "minecraft:quartz",
                count: 4,
                chance: 0.25
            },
            {
                item: "create:experience_nugget",
                chance: 0.15
            }
        ],
        processingTime: 350
    })


    // Advanced Brass Mesh
    event.remove({id: 'createsifter:sifting/gravel_advanced_brass_mesh'})
    event.remove({id: 'createsifter:sifting/soul_sand_advanced_brass_mesh'})
    
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:advanced_brass_mesh"
            },
            {
                item: 'minecraft:andesite'
            }
        ],
        results: [
            {
                item: "create:crushed_raw_copper",
                chance: 0.1
            },
            {
                item: "create:crushed_raw_zinc",
                chance: 0.1
            },
            {
                item: "create:crushed_raw_iron",
                chance: 0.15
            },
            {
                item: "create:crushed_raw_gold",
                chance: 0.1
            },
            {
                item: "minecraft:diamond",
                chance: 0.01
            },
            {
                item: "minecraft:lapis_lazuli",
                chance: 0.1
            },
            {
                item: "minecraft:emerald",
                chance: 0.05
            },
            {
                item: "create:experience_nugget",
                chance: 0.1
            }
        ],
        processingTime: 400
    })
    event.custom({
        type: 'createsifter:sifting',
        ingredients: [
            {
                item: "createsifter:advanced_brass_mesh"
            },
            {
                item: 'excessive_building:red_nether_tiles'
            }
        ],
        results: [
            {
                item: "minecraft:quartz",
                count: 4,
                chance: 0.45
            },
            {
                item: "minecraft:quartz",
                chance: 0.15
            },
            {
                item: 'minecraft:netherite_scrap',
                chance: 0.01
            },
            {
                item: "create:experience_nugget",
                chance: 0.20
            }
        ],
        processingTime: 400
    })
})