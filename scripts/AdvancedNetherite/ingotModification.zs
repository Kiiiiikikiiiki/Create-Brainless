// Iron netherite
craftingTable.remove(<item:advancednetherite:netherite_iron_ingot>);
craftingTable.addShapeless("iron_netherite_fb", <item:advancednetherite:netherite_iron_ingot> * 9, [<item:advancednetherite:netherite_iron_block>]);
<recipetype:create:compacting>.addRecipe("iron_netherite", <constant:create:heat_condition:superheated>,
 [<item:advancednetherite:netherite_iron_ingot>], [<item:minecraft:netherite_ingot>, <item:minecraft:iron_ingot> * 8], [], 900);

// Gold netherite
craftingTable.remove(<item:advancednetherite:netherite_gold_ingot>);
craftingTable.addShapeless("gold_netherite_fb", <item:advancednetherite:netherite_gold_ingot> * 9, [<item:advancednetherite:netherite_gold_block>]);
<recipetype:create:compacting>.addRecipe("gold_netherite", <constant:create:heat_condition:superheated>,
 [<item:advancednetherite:netherite_gold_ingot>], [<item:advancednetherite:netherite_iron_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:gold_ingot> * 8], [], 900);

// Emerald netherite
craftingTable.remove(<item:advancednetherite:netherite_emerald_ingot>);
craftingTable.addShapeless("emerald_netherite_fb", <item:advancednetherite:netherite_emerald_ingot> * 9, [<item:advancednetherite:netherite_emerald_block>]);
<recipetype:create:compacting>.addRecipe("emerald_netherite", <constant:create:heat_condition:superheated>,
 [<item:advancednetherite:netherite_emerald_ingot>], [<item:advancednetherite:netherite_gold_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:emerald> * 8], [], 900);

// Diamond netherite
craftingTable.remove(<item:advancednetherite:netherite_diamond_ingot>);
craftingTable.addShapeless("diamond_netherite_fb", <item:advancednetherite:netherite_diamond_ingot> * 9, [<item:advancednetherite:netherite_diamond_block>]);
<recipetype:create:compacting>.addRecipe("diamond_netherite", <constant:create:heat_condition:superheated>,
 [<item:advancednetherite:netherite_diamond_ingot>], [<item:advancednetherite:netherite_emerald_ingot>, <item:minecraft:netherite_ingot>, <item:minecraft:diamond> * 7], [], 900);
