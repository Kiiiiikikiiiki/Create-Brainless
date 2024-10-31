StartupEvents.registry('item', e => {
    e.create('create_anomaly').rarity('rare').maxStackSize(64).displayName('Anomaly')
    e.create('unpressurize_anomaly').rarity('rare').maxStackSize(64).displayName('Unpressurize Anomaly')
    e.create('tier1_common_pearl').rarity('common').maxStackSize(16).displayName('Tier 1 Common Pearl').tooltip("Trade at the shop for the actual gateway")
    e.create('tier1_rare_pearl').rarity('rare').maxStackSize(16).displayName('Tier 1 Rare Pearl').tooltip("Trade at the shop for the actual gateway")
    e.create('tier1_epic_pearl').rarity('epic').maxStackSize(16).displayName('Tier 1 Epic Pearl').tooltip("Trade at the shop for the actual gateway")
    e.create('tier1_legendary_pearl').rarity('epic').maxStackSize(16).displayName('Tier 1 legendary Pearl').tooltip("Trade at the shop for the actual gateway")
})