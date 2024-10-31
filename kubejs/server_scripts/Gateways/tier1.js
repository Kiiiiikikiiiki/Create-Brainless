ServerEvents.recipes(event => {
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'kubejs:create_anomaly'},
        transitionalItem: {item: 'kubejs:create_anomaly'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:create_anomaly'
                    },
                    {
                        tag: 'forge:ingots/steel'
                    }
                ],
                results: [
                    {item: 'kubejs:create_anomaly'}
                ] 
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:create_anomaly'
                    },
                    {
                        item: 'botania:manasteel_ingot'
                    }
                ],
                results: [
                    {item: 'kubejs:create_anomaly'}
                ] 
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'kubejs:create_anomaly'
                    },
                    {
                        item: "botania:third_eye"
                    }
                ],
                results: [
                    {item: 'kubejs:create_anomaly'}
                ] 
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'kubejs:create_anomaly'
                    }
                ],
                results: [
                    {item: 'kubejs:create_anomaly'}
                ] 
            }
        ],
        results: [
            {
                item: 'kubejs:tier1_common_pearl',
                chance: 65.0
            },
            {
                item: 'kubejs:tier1_rare_pearl',
                chance: 20.0
            },
            {
                item: 'kubejs:tier1_epic_pearl',
                chance: 10.0
            },
            {
                item: 'kubejs:tier1_legendary_pearl',
                chance: 5.0
            }
        ],
        loops: 5
    })
})