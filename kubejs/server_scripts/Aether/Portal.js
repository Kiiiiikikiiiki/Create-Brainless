ServerEvents.tags('block', event => {
    event.removeAll('aether:aether_portal_blocks')
    event.add('aether:aether_portal_blocks', 'ad_astra:glacio_stone_bricks')
})