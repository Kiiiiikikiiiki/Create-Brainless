<recipetype:create:haunting>.remove(<item:minecraft:crying_obsidian>);



// backpacks

// COPPER BACKPACK
craftingTable.remove(<item:sophisticatedbackpacks:copper_backpack>);

craftingTable.addShapeless("copper_bp", <item:sophisticatedbackpacks:copper_backpack> * 1,
 [<item:minecraft:copper_ingot>, <item:ad_astra:desh_ingot>, <item:minecraft:copper_ingot>,
 <item:ad_astra:desh_ingot>, <item:sophisticatedbackpacks:backpack>, <item:ad_astra:desh_ingot>,
 <item:minecraft:copper_ingot>, <item:ad_astra:desh_ingot>, <item:minecraft:copper_ingot>]);

// IRON BACKPACK
craftingTable.remove(<item:sophisticatedbackpacks:iron_backpack>);

craftingTable.addShapeless("iron_bp", <item:sophisticatedbackpacks:iron_backpack> * 1,
 [<item:minecraft:iron_ingot>, <item:ad_astra:ostrum_ingot>, <item:minecraft:iron_ingot>,
 <item:ad_astra:ostrum_ingot>, <item:sophisticatedbackpacks:copper_backpack>, <item:ad_astra:ostrum_ingot>,
 <item:minecraft:iron_ingot>, <item:ad_astra:ostrum_ingot>, <item:minecraft:iron_ingot>]);

// GOLD BACKPACK
craftingTable.remove(<item:sophisticatedbackpacks:gold_backpack>);

craftingTable.addShapeless("gold_bp", <item:sophisticatedbackpacks:gold_backpack>,
 [<item:minecraft:gold_ingot>, <item:ad_astra:calorite_ingot>, <item:minecraft:gold_ingot>,
 <item:ad_astra:calorite_ingot>, <item:sophisticatedbackpacks:iron_backpack>, <item:ad_astra:calorite_ingot>,
 <item:minecraft:gold_ingot>, <item:ad_astra:calorite_ingot>, <item:minecraft:gold_ingot>]);