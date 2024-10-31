ServerEvents.recipes(e => {
    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  IGI',
            '  GR ',
            '  X G',
            ' X   ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            I: Ingredient.of('minecraft:blue_ice').toJson(),
            G: Ingredient.of('chipped:ancient_gold_block').toJson(),
            R: Ingredient.of('simplyswords:runefused_gem').toJson()
        },
        result: Item.of("simplyswords:livyatan").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  III',
            '  IE ',
            '  X I',
            ' X   ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            I: Ingredient.of('minecraft:blue_ice').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson()
        },
        result: Item.of("simplyswords:icewhisper").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  SSV',
            '  SE ',
            '  X S',
            ' X   ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            V: Ingredient.of('cataclysm:void_eye').toJson(),
            S: Ingredient.of('botania:spectral_platform').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson()
        },
        result: Item.of("simplyswords:arcanethyst").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  EEX',
            '  EN ',
            ' EX S',
            ' X   ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('irons_spellbooks:lightning_bottle').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson(),
            S: Ingredient.of('deeperdarker:reinforced_echo_shard').toJson()
        },
        result: Item.of("simplyswords:thunderbrand").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'EEEEE',
            'EEREE',
            '  X  ',
            '  X  ',
            '  Z  '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('irons_spellbooks:lightning_bottle').toJson(),
            R: Ingredient.of('simplyswords:runefused_gem').toJson()
        },
        result: Item.of("simplyswords:mjolnir").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    G',
            '   G ',
            ' FE  ',
            ' XF  ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            F: Ingredient.of('minecraft:rabbit_foot').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            G: Ingredient.of('aether:golden_aercloud').toJson()
        },
        result: Item.of("simplyswords:whisperwind").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '   CS',
            '  CSC',
            ' CSC ',
            ' RC  ',
            'Z    '
        ],
        key: {
            C: Ingredient.of('minecraft:crying_obsidian').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            S: Ingredient.of('chipped:reanimated_soul_sand').toJson(),
            R: Ingredient.of('simplyswords:runefused_gem').toJson()
        },
        result: Item.of("simplyswords:soulstealer").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'EEEEE',
            'ESNSE',
            '  X  ',
            '  X  ',
            '  Z  '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('botania:spectral_platform').toJson(),
            S: Ingredient.of('blue_skies:soul_fragment').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson()
        },
        result: Item.of("simplyswords:soulkeeper").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    M',
            '   M ',
            'O M  ',
            ' N   ',
            'Z O  '
        ],
        key: {
            N: Ingredient.of('simplyswords:netherfused_gem').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            O: Ingredient.of('ad_astra:ostrum_block').toJson(),
            M: Ingredient.of('minecraft:magma_block').toJson()
        },
        result: Item.of("simplyswords:emberblade").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    M',
            '   M ',
            'O M  ',
            ' N   ',
            'Z O  '
        ],
        key: {
            N: Ingredient.of('simplyswords:runefused_gem').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            O: Ingredient.of('ad_astra:ostrum_block').toJson(),
            M: Ingredient.of('botania:green_petal_block').toJson()
        },
        result: Item.of("simplyswords:toxic_longsword").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '   OE',
            '  OEO',
            ' ONO ',
            ' XO  ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('irons_spellbooks:lightning_bottle').toJson(),
            O: Ingredient.of('ad_astra:ostrum_block').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson()
        },
        result: Item.of("simplyswords:stormbringer").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    M',
            '   M ',
            'C E  ',
            ' C   ',
            'Z C  '
        ],
        key: {
            C: Ingredient.of('minecraft:crying_obsidian').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            M: Ingredient.of('minecraft:magma_block').toJson()
        },
        result: Item.of("simplyswords:brimstone_claymore").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  EE ',
            '  ENS',
            '  XSS',
            ' X   ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            S: Ingredient.of('blue_skies:soul_fragment').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson(),
            E: Ingredient.of('minecraft:ender_eye').toJson()
        },
        result: Item.of("simplyswords:soulpyre").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' AA K',
            'A  E ',
            '  X S',
            ' X   ',
            'Z    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            A: Ingredient.of('chipped:reanimated_soul_sand').toJson(),
            S: Ingredient.of('blue_skies:soul_fragment').toJson(),
            K: Ingredient.of('alexsmobs:skreecher_soul').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson()
        },
        result: Item.of("simplyswords:soulrender").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '   SA',
            '  SAS',
            'X RS ',
            ' Z   ',
            'X X  '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            A: Ingredient.of('chipped:reanimated_soul_sand').toJson(),
            S: Ingredient.of('blue_skies:soul_fragment').toJson(),
            R: Ingredient.of('simplyswords:runefused_gem').toJson()
        },
        result: Item.of("simplyswords:slumbering_lichblade").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    G',
            '   G ',
            'X R  ',
            ' Z   ',
            'X X  '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            G: Ingredient.of('chipped:ancient_gold_block').toJson(),
            R: Ingredient.of('simplyswords:runefused_gem').toJson()
        },
        result: Item.of("simplyswords:dormant_relic").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  MMB',
            '  MEM',
            '  ZM ',
            ' X   ',
            'X    '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            M: Ingredient.of('minecraft:magma_block').toJson(),
            B: Ingredient.of('atlantis:bubble_magma').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson()
        },
        result: Item.of("simplyswords:molten_edge").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'IIIII',
            'IIEII',
            '  Z  ',
            '  X  ',
            '  X  '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            I: Ingredient.of('minecraft:blue_ice').toJson()
        },
        result: Item.of("simplyswords:frostfall").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    E',
            '   S ',
            '  N  ',
            ' S   ',
            'E    '
        ],
        key: {
            E: Ingredient.of('irons_spellbooks:lightning_bottle').toJson(),
            S: Ingredient.of('botania:spectral_platform').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson()
        },
        result: Item.of("simplyswords:storms_edge").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    W',
            '   E ',
            'H N  ',
            ' T   ',
            'Z H  '
        ],
        key: {
            H: Ingredient.of('deeperdarker:heart_of_the_deep').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            T: Ingredient.of('botania:third_eye').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson(),
            W: Ingredient.of('alexsmobs:void_worm_eye').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson()
        },
        result: Item.of("simplyswords:watcher_claymore").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'IIIII',
            'IGEGI',
            '  X  ',
            '  X  ',
            '  Z  '
        ],
        key: {
            X: Ingredient.of('botania:dreamwood_twig').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            G: Ingredient.of('chipped:ancient_gold_block').toJson(),
            I: Ingredient.of('ad_astra:ostrum_block').toJson()
        },
        result: Item.of("simplyswords:hearthflame").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  TN ',
            ' Z  H',
            'T    ',
            'E    ',
            ' H   '
        ],
        key: {
            T: Ingredient.of('botania:third_eye').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            N: Ingredient.of('simplyswords:netherfused_gem').toJson(),
            E: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            H: Ingredient.of('deeperdarker:heart_of_the_deep').toJson()
        },
        result: Item.of("simplyswords:watching_warglaive").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    L',
            '   L ',
            'L P  ',
            ' R   ',
            'Z L  '
        ],
        key: {
            L: Ingredient.of('botania:stripped_livingwood').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            P: Ingredient.of('alexsmobs:poison_bottle').toJson(),
            R: Ingredient.of('simplyswords:runefused_gem').toJson()
        },
        result: Item.of("simplyswords:bramblethorn").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    C',
            '  CCC',
            'O C  ',
            ' E   ',
            'Z O  '
        ],
        key: {
            E: Ingredient.of('simplyswords:empowered_remnant').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            O: Ingredient.of('minecraft:crying_obsidian').toJson(),
            C: Ingredient.of('aether:cold_aercloud').toJson()
        },
        result: Item.of("simplyswords:twisted_blade").toJson(),
        acceptMirrored: false
    })

    e.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '    E',
            '   C ',
            'G C  ',
            ' R   ',
            'Z G  '
        ],
        key: {
            R: Ingredient.of('simplyswords:runefused_gem').toJson(),
            Z: Ingredient.of('#simplyswords:runic_gear').toJson(),
            G: Ingredient.of('chipped:ancient_gold_block').toJson(),
            E: Ingredient.of('deeperdarker:reinforced_echo_shard').toJson(),
            C: Ingredient.of('minecraft:crying_obsidian').toJson()
        },
        result: Item.of("simplyswords:shadowsting").toJson(),
        acceptMirrored: false
    })
})