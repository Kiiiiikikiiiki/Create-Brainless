ServerEvents.tags('item', event => {
    event.removeAll('tempad:tempad_fuel')
    event.add('tempad:tempad_fuel', 'deeperdarker:heart_of_the_deep')
})