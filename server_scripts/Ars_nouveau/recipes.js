ServerEvents.recipes(event => {
    event.remove({output: 'ars_nouveau:warp_scroll'})
    event.remove({id: 'ars_nouveau:warp_scroll_copy'})
    event.remove({output: 'ars_nouveau:stable_warp_scroll'})
    event.remove({id: 'ars_nouveau:stable_warp_scroll'})
    event.remove({id: 'ars_nouveau:stable_warp_scroll_copy'})
    event.remove({id: 'ars_nouveau:ritual_scrying'})
    event.remove({id: 'ars_nouveau:ritual_warping'})
    event.remove({id: 'ars_nouveau:ritual_burrowing'})

    // Ars elementals
    event.remove({id: 'ars_elemental:flight_alt'})
})