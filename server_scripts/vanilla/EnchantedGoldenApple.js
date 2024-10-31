ServerEvents.recipes(e => {
    e.custom({
        type: "create:filling",
        ingredients: [
            {
                item: 'minecraft:golden_apple'
            },
            {
                fluid: 'create_enchantment_industry:experience',
                nbt: {},
                amount: 100
            }
        ],
        results: [
            {item: 'minecraft:enchanted_golden_apple'}
        ]
    })
})