ServerEvents.recipes(e => {
    e.remove({output: 'minecraft:ender_eye'})
    e.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {item: 'minecraft:ender_pearl'},
            {item: 'minecraft:blaze_powder'}
        ],
        pressure: 2.0,
        results: [
            {item: 'minecraft:ender_eye'}
        ]
    })
})