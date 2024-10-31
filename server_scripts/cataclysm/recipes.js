ServerEvents.recipes(event => {
    event.remove({output: 'cataclysm:mech_eye'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:ender_eye'},
        transitionalItem: {item: 'minecraft:ender_eye'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:iron_block'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:redstone_block'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:gold_block'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            }
        ],
        results: [
            {item: 'cataclysm:mech_eye'}
        ],
        loops: 3
    })

    event.remove({output: 'cataclysm:flame_eye'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:ender_eye'},
        transitionalItem: {item: 'minecraft:ender_eye'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:blaze_powder'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:soul_sand'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:netherite_scrap'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            }
        ],
        results: [
            {item: 'cataclysm:flame_eye'}
        ],
        loops: 3
    })

    event.remove({output: 'cataclysm:void_eye'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:ender_eye'},
        transitionalItem: {item: 'minecraft:ender_eye'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:shulker_shell'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:purpur_pillar'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:end_stone_bricks'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            }
        ],
        results: [
            {item: 'cataclysm:void_eye'}
        ],
        loops: 3
    })

    event.remove({output: 'cataclysm:monstrous_eye'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:ender_eye'},
        transitionalItem: {item: 'minecraft:ender_eye'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:lava_bucket'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:blackstone'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:netherite_scrap'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            }
        ],
        results: [
            {item: 'cataclysm:monstrous_eye'}
        ],
        loops: 3
    })

    event.remove({output: 'cataclysm:abyss_eye'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:ender_eye'},
        transitionalItem: {item: 'minecraft:ender_eye'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:crying_obsidian'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:obsidian'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:amethyst_shard'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            }
        ],
        results: [
            {item: 'cataclysm:abyss_eye'}
        ],
        loops: 3
    })

    event.remove({output: 'cataclysm:desert_eye'})
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:ender_eye'},
        transitionalItem: {item: 'minecraft:ender_eye'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:emerald'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:ender_eye'
                    },
                    {
                        item: 'minecraft:cactus'
                    }
                ],
                results: [
                    {item: 'minecraft:ender_eye'}
                ]
            }
        ],
        results: [
            {item: 'cataclysm:desert_eye'}
        ],
        loops: 3
    })
})