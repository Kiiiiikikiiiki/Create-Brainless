ServerEvents.recipes(event => {

    // Iron Armor
    event.remove({id: 'minecraft:iron_helmet'})
    event.remove({id: 'minecraft:iron_chestplate'})
    event.remove({id: 'minecraft:iron_leggings'})
    event.remove({id: 'minecraft:iron_boots'})

    event.shaped('1x minecraft:iron_helmet', ['III', 'ILI'], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:leather_helmet'
    })

    event.shaped('1x minecraft:iron_chestplate', ['ILI', 'III', 'III'], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:leather_chestplate'
    })

    event.shaped('1x minecraft:iron_leggings', ['III', 'ILI', 'I I'], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:leather_leggings'
    })

    event.shaped('1x minecraft:iron_boots', ['ILI', 'I I'], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:leather_boots'
    })

    // Gold Armor
    event.remove({id: 'minecraft:golden_helmet'})
    event.remove({id: 'minecraft:golden_chestplate'})
    event.remove({id: 'minecraft:golden_leggings'})
    event.remove({id: 'minecraft:golden_boots'})

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:iron_helmet'},
        transitionalItem: {item: 'minecraft:iron_helmet'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_helmet'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_helmet'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_helmet'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_helmet'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_helmet'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:iron_helmet'
                    }
                ],
                results : [
                    {item: 'minecraft:iron_helmet'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:golden_helmet'}
        ],
        loops: 2
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:iron_chestplate'},
        transitionalItem: {item: 'minecraft:iron_chestplate'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_chestplate'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_chestplate'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_chestplate'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_chestplate'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_chestplate'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:iron_chestplate'
                    }
                ],
                results : [
                    {item: 'minecraft:iron_chestplate'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:golden_chestplate'}
        ],
        loops: 2
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:iron_leggings'},
        transitionalItem: {item: 'minecraft:iron_leggings'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_leggings'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_leggings'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_leggings'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_leggings'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_leggings'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:iron_leggings'
                    }
                ],
                results : [
                    {item: 'minecraft:iron_leggings'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:golden_leggings'}
        ],
        loops: 2
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:iron_boots'},
        transitionalItem: {item: 'minecraft:iron_boots'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_boots'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_boots'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_boots'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:iron_boots'
                    },
                    {
                        item: 'minecraft:gold_ingot'
                    }
                ],
                results: [
                    {item: 'minecraft:iron_boots'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:iron_boots'
                    }
                ],
                results : [
                    {item: 'minecraft:iron_boots'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:golden_boots'}
        ],
        loops: 2
    })

    // Diamond Armor
    event.remove({id: 'minecraft:diamond_helmet'})
    event.remove({id: 'minecraft:diamond_chestplate'})
    event.remove({id: 'minecraft:diamond_leggings'})
    event.remove({id: 'minecraft:diamond_boots'})

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:golden_boots'},
        transitionalItem: {item: 'minecraft:golden_boots'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_boots'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_boots'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_boots'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_boots'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_boots'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_boots'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:golden_boots'
                    }
                ],
                results : [
                    {item: 'minecraft:golden_boots'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:diamond_boots'}
        ],
        loops: 2
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:golden_leggings'},
        transitionalItem: {item: 'minecraft:golden_leggings'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_leggings'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_leggings'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_leggings'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_leggings'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_leggings'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_leggings'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:golden_leggings'
                    }
                ],
                results : [
                    {item: 'minecraft:golden_leggings'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:diamond_leggings'}
        ],
        loops: 2
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:golden_chestplate'},
        transitionalItem: {item: 'minecraft:golden_chestplate'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_chestplate'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_chestplate'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_chestplate'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_chestplate'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_chestplate'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_chestplate'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:golden_chestplate'
                    }
                ],
                results : [
                    {item: 'minecraft:golden_chestplate'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:diamond_chestplate'}
        ],
        loops: 2
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'minecraft:golden_helmet'},
        transitionalItem: {item: 'minecraft:golden_helmet'},
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_helmet'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_helmet'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_helmet'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_helmet'}
                ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    {
                        item: 'minecraft:golden_helmet'
                    },
                    {
                        item: 'minecraft:diamond'
                    }
                ],
                results: [
                    {item: 'minecraft:golden_helmet'}
                ]
            },
            {
                type: 'create:pressing',
                ingredients: [
                    {
                        item: 'minecraft:golden_helmet'
                    }
                ],
                results : [
                    {item: 'minecraft:golden_helmet'}
                ]
            }
        ],
        results: [
            {item: 'minecraft:diamond_helmet'}
        ],
        loops: 2
    })
})