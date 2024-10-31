// TODO see why removing armor in kubes js doesn't work

ServerEvents.recipes(e => {
    // Space suit
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:chainmail_helmet'},
        transitionalItem: {item: 'minecraft:chainmail_helmet'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_helmet'
                    },
                    {
                        tag: 'forge:ingots/steel'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_helmet'
                    },
                    {
                        item: 'minecraft:white_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_helmet'
                    },
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_helmet'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_helmet'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 100
                    }
                ],
                results : [
                    {item: 'minecraft:chainmail_helmet'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:space_helmet'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:chainmail_leggings'},
        transitionalItem: {item: 'minecraft:chainmail_leggings'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_leggings'
                    },
                    {
                        tag: 'forge:ingots/steel'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_leggings'
                    },
                    {
                        item: 'minecraft:white_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_leggings'
                    },
                    {
                        tag: 'forge:ingots/steel'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_leggings'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_leggings'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 100
                    }
                ],
                results : [
                    {item: 'minecraft:chainmail_leggings'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:space_pants'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:chainmail_boots'},
        transitionalItem: {item: 'minecraft:chainmail_boots'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_boots'
                    },
                    {
                        tag: 'forge:ingots/steel'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_boots'
                    },
                    {
                        item: 'minecraft:white_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_boots'
                    },
                    {
                        item: 'minecraft:white_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_boots'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_boots'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 100
                    }
                ],
                results : [
                    {item: 'minecraft:chainmail_boots'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:space_boots'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:chainmail_chestplate'},
        transitionalItem: {item: 'minecraft:chainmail_chestplate'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_chestplate'
                    },
                    {
                        item: 'ad_astra:oxygen_tank'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_chestplate'
                    },
                    {
                        tag: 'forge:ingots/steel'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_chestplate'
                    },
                    {
                        item: 'ad_astra:oxygen_gear'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_chestplate'
                    },
                    {
                        item: 'minecraft:white_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:chainmail_chestplate'
                    },
                    {
                        item: 'ad_astra:oxygen_tank'
                    }
                ],
                results: [
                    {item: 'minecraft:chainmail_chestplate'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:space_suit'}
        ],
        loops: 1
    })

    // Netherite Space Suit
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:netherite_helmet'},
        transitionalItem: {item: 'minecraft:netherite_helmet'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_helmet'
                    },
                    {
                        item: 'ad_astra:ostrum_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_helmet'
                    },
                    {
                        item: 'minecraft:orange_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_helmet'
                    },
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_helmet'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:netherite_helmet'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 200
                    }
                ],
                results : [
                    {item: 'minecraft:netherite_helmet'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:netherite_space_helmet'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:netherite_leggings'},
        transitionalItem: {item: 'minecraft:netherite_leggings'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_leggings'
                    },
                    {
                        item: 'ad_astra:ostrum_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_leggings'
                    },
                    {
                        item: 'ad_astra:desh_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_leggings'
                    },
                    {
                        item: 'ad_astra:ostrum_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_leggings'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:netherite_leggings'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 200
                    }
                ],
                results : [
                    {item: 'minecraft:netherite_leggings'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:netherite_space_pants'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:netherite_boots'},
        transitionalItem: {item: 'minecraft:netherite_boots'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_boots'
                    },
                    {
                        item: 'ad_astra:ostrum_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_boots'
                    },
                    {
                        item: 'ad_astra:desh_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_boots'
                    },
                    {
                        item: 'minecraft:orange_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_boots'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'minecraft:netherite_boots'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 200
                    }
                ],
                results : [
                    {item: 'minecraft:netherite_boots'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:netherite_space_boots'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:netherite_chestplate'},
        transitionalItem: {item: 'minecraft:netherite_chestplate'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_chestplate'
                    },
                    {
                        item: 'ad_astra:oxygen_tank'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_chestplate'
                    },
                    {
                        item: 'ad_astra:ostrum_plate'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_chestplate'
                    },
                    {
                        item: 'ad_astra:oxygen_gear'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_chestplate'
                    },
                    {
                        item: 'minecraft:orange_wool'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:netherite_chestplate'
                    },
                    {
                        item: 'ad_astra:oxygen_tank'
                    }
                ],
                results: [
                    {item: 'minecraft:netherite_chestplate'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:netherite_space_suit'}
        ],
        loops: 1
    })

    // Jet suit
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'ad_astra:netherite_space_helmet'},
        transitionalItem: {item: 'ad_astra:netherite_space_helmet'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_helmet'
                    },
                    {
                        item: 'ad_astra:calorite_plate'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_helmet'
                    },
                    {
                        item: 'minecraft:orange_wool'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_helmet'
                    },
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_helmet'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_helmet'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 500
                    }
                ],
                results : [
                    {item: 'ad_astra:netherite_space_helmet'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:jet_suit_helmet'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'ad_astra:netherite_space_pants'},
        transitionalItem: {item: 'ad_astra:netherite_space_pants'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_pants'
                    },
                    {
                        item: 'ad_astra:calorite_plate'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_pants'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_pants'
                    },
                    {
                        item: 'ad_astra:calorite_block'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_pants'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_pants'
                    },
                    {
                        item: 'ad_astra:calorite_plate'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_pants'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_pants'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 500
                    }
                ],
                results : [
                    {item: 'ad_astra:netherite_space_pants'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:jet_suit_pants'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'ad_astra:netherite_space_boots'},
        transitionalItem: {item: 'ad_astra:netherite_space_boots'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_boots'
                    },
                    {
                        item: 'ad_astra:calorite_plate'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_boots'
                    },
                    {
                        item: 'minecraft:orange_wool'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_boots'
                    },
                    {
                        item: 'minecraft:orange_wool'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_boots'}
                ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_boots'
                    },
                    {
                        fluid: 'ad_astra:oxygen',
                        nbt: {},
                        amount: 500
                    }
                ],
                results : [
                    {item: 'ad_astra:netherite_space_boots'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:jet_suit_boots'}
        ],
        loops: 3
    })
    e.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'ad_astra:netherite_space_suit'},
        transitionalItem: {item: 'ad_astra:netherite_space_suit'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_suit'
                    },
                    {
                        item: 'ad_astra:calorite_tank'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_suit'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_suit'
                    },
                    {
                        item: 'deeperdarker:soul_elytra'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_suit'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_suit'
                    },
                    {
                        item: 'ad_astra:calorite_engine'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_suit'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_suit'
                    },
                    {
                        item: 'ad_astra:calorite_block'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_suit'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'ad_astra:netherite_space_suit'
                    },
                    {
                        item: 'ad_astra:calorite_tank'
                    }
                ],
                results: [
                    {item: 'ad_astra:netherite_space_suit'}
                ]
            }
        ],
        results: [
            {item: 'ad_astra:jet_suit'}
        ],
        loops: 1
    })
})