ServerEvents.recipes(event => {
    event.remove({output: 'simplyswords:runic_tablet'})
    event.custom({
        type: "aether:enchanting",
        category: "enchanting_block",
        cookingTime: 250,
        experience: 0.35,
        ingredient: {item: 'tombstone:strange_tablet'},
        result: 'simplyswords:runic_tablet'
    })
})