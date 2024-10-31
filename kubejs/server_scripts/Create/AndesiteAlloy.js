ServerEvents.recipes(event => {
    event.remove({output: 'create:andesite_alloy'})
    event.shapeless(
        Item.of('create:andesite_alloy'),
        [
            '4x minecraft:andesite',
            '2x minecraft:clay_ball',
            '3x minecraft:iron_nugget'
        ]
    )
    event.shapeless(
        Item.of('create:andesite_alloy'),
        [
            '4x minecraft:andesite',
            '2x minecraft:clay_ball',
            '3x #forge:nuggets/zinc'
        ]
    )
})