#priority 0

import mods.create.MechanicalCrafterManager;
import mods.create.SequencedAssemblyManager;
import mods.create.IProcessingRecipeManager;
import mods.createtweaker.ProcessingRecipeBuilder;
import mods.createtweaker.ProcessingRecipeFactory;
import mods.createtweaker.SequencedAssemblyRecipeBuilder;
import mods.create.PressingManager;
import crafttweaker.api.item.ItemDefinition;

println("This is where we start the modification of the recipes");

// Item that will be use for the new recipes
// <item:create:brass_ingot>
// <item:ad_astra:desh_ingot>
// <item:minecraft:air>
// <item:minecraft:furnace>

// testing
// <recipetype:pneumaticcraft:pressure_chamber>.remove(<item:pneumaticcraft:turbine_blade>);

// Deleting the old recipe for the items we are changing
craftingTable.remove(<item:immersive_aircraft:propeller>);
craftingTable.remove(<item:immersive_aircraft:boiler>);
craftingTable.remove(<item:immersive_aircraft:hull>);

// Creating the new recipe for those items

// Propeller craft
craftingTable.addShaped("propeller_craft", <item:immersive_aircraft:propeller>, [
    [<item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ad_astra:desh_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ad_astra:desh_ingot>, <item:ad_astra:desh_ingot>]
]);

// Boiler craft
craftingTable.addShaped("boiler_craft", <item:immersive_aircraft:boiler>, [
    [<item:ad_astra:desh_ingot>, <item:create:brass_block>, <item:ad_astra:desh_ingot>],
    [<item:ad_astra:desh_ingot>, <item:minecraft:air>, <item:ad_astra:desh_ingot>],
    [<item:ad_astra:desh_ingot>, <item:minecraft:furnace>, <item:ad_astra:desh_ingot>]
]);

// hull
craftingTable.addShaped("hull_craft", <item:immersive_aircraft:hull>, [
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>],
    [<item:create:brass_ingot>, <item:create:brass_ingot>, <item:create:brass_ingot>],
    [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>]
]);


// Mechanical crafter testing
/*<recipetype:create:mechanical_crafting>.addRecipe("test1", <item:minecraft:diamond>, [
    [<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:stick>],
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]
]);*/

// Removing the craft for the jetpack from create stuff and addition
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:andesite_jetpack_chestplate>);
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:copper_jetpack_chestplate>);
craftingTable.remove(<item:create_sa:copper_jetpack_chestplate>);
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:brass_jetpack_chestplate>);

// Modifying the items craft for the create ender transmition mod
// block needed : <item:ad_astra:mercury_stone>
// <item:ad_astra:glacio_stone>

craftingTable.remove(<item:createendertransmission:chunk_loader>);
craftingTable.addShaped("chunk_loader", <item:createendertransmission:chunk_loader>, [
    [<item:ad_astra:mercury_stone>, <item:ad_astra:mercury_stone>, <item:ad_astra:mercury_stone>],
    [<item:ad_astra:mercury_stone>, <item:minecraft:beacon>, <item:ad_astra:mercury_stone>], 
    [<item:ad_astra:mercury_stone>, <item:ad_astra:mercury_stone>, <item:ad_astra:mercury_stone>]
]);

<recipetype:create:mechanical_crafting>.remove(<item:createendertransmission:fluid_transmitter>);
<recipetype:create:mechanical_crafting>.addRecipe("fluid_transmitter", <item:createendertransmission:fluid_transmitter>, [
    [<item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>, <item:create:mechanical_pump>, <item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:minecraft:ender_pearl>, <item:create:precision_mechanism>, <item:minecraft:ender_pearl>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:minecraft:ender_pearl>, <item:minecraft:ender_eye>, <item:minecraft:ender_pearl>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:minecraft:ender_pearl>, <item:create:precision_mechanism>, <item:minecraft:ender_pearl>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>, <item:create:mechanical_pump>, <item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>]
]);

<recipetype:create:mechanical_crafting>.remove(<item:createendertransmission:item_transmitter>);
<recipetype:create:mechanical_crafting>.addRecipe("item_transmitter", <item:createendertransmission:item_transmitter>, [
    [<item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>, <item:create:chute>, <item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:minecraft:ender_pearl>, <item:create:precision_mechanism>, <item:minecraft:ender_pearl>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:minecraft:ender_pearl>, <item:minecraft:ender_eye>, <item:minecraft:ender_pearl>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:minecraft:ender_pearl>, <item:create:precision_mechanism>, <item:minecraft:ender_pearl>, <item:ad_astra:glacio_stone>],
    [<item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>, <item:create:chute>, <item:ad_astra:glacio_stone>, <item:ad_astra:glacio_stone>]
]);

// change the propeller from create mod to use deash ingot like the propeller from immersive aircraft

//todo when mod get updated come back to understanding assembly line 
// At the moment we will replace the precision mechanism to be build by mixing instead 
<recipetype:create:sequenced_assembly>.remove(<item:create:precision_mechanism>);
<recipetype:create:mixing>.addRecipe("precision_mechanism", <constant:create:heat_condition:superheated>,
 [<item:create:precision_mechanism>], [<item:create:golden_sheet> * 1, <item:create:cogwheel> * 5, <item:create:large_cogwheel> * 5, <item:ad_astra:desh_plate> * 5], [], 1800);

// modify the craft of the rotation speed controller 
craftingTable.remove(<item:create:rotation_speed_controller>);
craftingTable.addShaped("rotation_speed_controller", <item:create:rotation_speed_controller>, [
    [<item:pneumaticcraft:smooth_plastic_brick_orange>, <item:create:precision_mechanism>, <item:pneumaticcraft:smooth_plastic_brick_orange>],
    [<item:pneumaticcraft:smooth_plastic_brick_orange>, <item:create:brass_casing>, <item:pneumaticcraft:smooth_plastic_brick_orange>], 
    [<item:pneumaticcraft:smooth_plastic_brick_orange>, <item:ad_astra:ostrum_ingot>, <item:pneumaticcraft:smooth_plastic_brick_orange>]
]);

// Exo skeleton and portable drill crafting modification
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:brass_exoskeleton_chestplate>);
craftingTable.remove(<item:create_sa:portable_drill>);

<recipetype:create:mechanical_crafting>.addRecipe("exoskeleton", <item:create_sa:brass_exoskeleton_chestplate>, [
    [<item:create:brass_ingot>, <item:create:brass_ingot>, <item:create:flywheel>, <item:create:brass_ingot>, <item:create:brass_ingot>],
    [<item:create:andesite_alloy>, <item:create:brass_ingot>, <item:create_sa:steam_engine>, <item:create:brass_ingot>, <item:create:andesite_alloy>],
    [<item:ad_astra:ostrum_block>, <item:create:brass_ingot>, <item:create:andesite_alloy>, <item:create:brass_ingot>, <item:ad_astra:ostrum_block>]
]);

craftingTable.addShaped("portable_drill", <item:create_sa:portable_drill>, [
    [<item:minecraft:air>, <item:ad_astra:calorite_ingot>, <item:minecraft:air>],
    [<item:create:cogwheel>, <item:create_sa:steam_engine>, <item:create:cogwheel>],
    [<item:minecraft:air>, <item:create_sa:brass_drill_head>, <item:minecraft:air>]
]);

// gilded quartz craft
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:rose_quartz_sword>);
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:rose_quartz_axe>);
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:rose_quartz_shovel>);
<recipetype:create:mechanical_crafting>.remove(<item:create_sa:rose_quartz_pickaxe>);

<recipetype:create:mechanical_crafting>.addRecipe("gilded_sword", <item:create_sa:rose_quartz_sword>, [
    [<item:minecraft:air>, <item:create:polished_rose_quartz>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:polished_rose_quartz>, <item:minecraft:air>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:air>, <item:create_sa:zinc_handle>, <item:minecraft:air>],
]);

<recipetype:create:mechanical_crafting>.addRecipe("gilded_axe", <item:create_sa:rose_quartz_axe>, [
    [<item:minecraft:air>, <item:minecraft:netherite_ingot>, <item:minecraft:air>],
    [<item:create:polished_rose_quartz>, <item:minecraft:gold_ingot>, <item:create:polished_rose_quartz>],
    [<item:create:polished_rose_quartz>, <item:create_sa:zinc_handle>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create_sa:zinc_handle>, <item:minecraft:air>]
]);

<recipetype:create:mechanical_crafting>.addRecipe("gilded_shovel", <item:create_sa:rose_quartz_shovel>, [
    [<item:minecraft:air>, <item:create:polished_rose_quartz>, <item:minecraft:air>],
    [<item:minecraft:netherite_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:netherite_ingot>],
    [<item:minecraft:air>, <item:create_sa:zinc_handle>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create_sa:zinc_handle>, <item:minecraft:air>]
]);

<recipetype:create:mechanical_crafting>.addRecipe("gilded_pickaxe", <item:create_sa:rose_quartz_pickaxe>, [
    [<item:minecraft:air>, <item:minecraft:netherite_ingot>, <item:minecraft:air>],
    [<item:create:polished_rose_quartz>, <item:minecraft:gold_ingot>, <item:create:polished_rose_quartz>],
    [<item:create:polished_rose_quartz>, <item:create_sa:zinc_handle>, <item:create:polished_rose_quartz>],
    [<item:minecraft:air>, <item:create_sa:zinc_handle>, <item:minecraft:air>]
]);