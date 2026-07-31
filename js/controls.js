(function () {
  // 1. Raw Keybinding Data from Server[cite: 8]
  var rawData = [
    "key_key.attack:key.mouse.left",
    "key_key.use:key.mouse.right",
    "key_key.forward:key.keyboard.w",
    "key_key.left:key.keyboard.a",
    "key_key.back:key.keyboard.s",
    "key_key.right:key.keyboard.d",
    "key_key.jump:key.keyboard.space",
    "key_key.sneak:key.keyboard.left.shift",
    "key_key.sprint:key.keyboard.left.control",
    "key_key.drop:key.keyboard.q",
    "key_key.inventory:key.keyboard.e",
    "key_key.chat:key.keyboard.t",
    "key_key.playerlist:key.keyboard.tab",
    "key_key.pickItem:key.mouse.middle",
    "key_key.command:key.keyboard.slash",
    "key_key.socialInteractions:key.keyboard.p",
    "key_key.screenshot:key.keyboard.f2",
    "key_key.togglePerspective:key.keyboard.f5",
    "key_key.fullscreen:key.keyboard.f11",
    "key_key.swapOffhand:key.keyboard.f",
    "key_key.saveToolbarActivator:key.keyboard.c",
    "key_key.loadToolbarActivator:key.keyboard.x",
    "key_key.advancements:key.keyboard.l",
    "key_key.hotbar.1:key.keyboard.1",
    "key_key.hotbar.2:key.keyboard.2",
    "key_key.hotbar.3:key.keyboard.3",
    "key_key.hotbar.4:key.keyboard.4",
    "key_key.hotbar.5:key.keyboard.5",
    "key_key.hotbar.6:key.keyboard.6",
    "key_key.hotbar.7:key.keyboard.7",
    "key_key.hotbar.8:key.keyboard.8",
    "key_key.hotbar.9:key.keyboard.9",
    "key_key.trashslot.toggle:key.keyboard.t",
    "key_key.trashslot.delete:key.keyboard.delete",
    "key_key.trashslot.delete_all:key.keyboard.delete:SHIFT",
    "key_key.craftingtweaks.compress_one:key.keyboard.k:CONTROL",
    "key_key.craftingtweaks.compress_stack:key.keyboard.k",
    "key_key.craftingtweaks.compress_all:key.keyboard.k:SHIFT",
    "key_key.craftingtweaks.refill_last:key.keyboard.tab:CONTROL",
    "key_key.craftingtweaks.refill_last_stack:key.keyboard.tab",
    "key_key.aether.open_accessories.desc:key.keyboard.i",
    "key_key.aether.gravitite_jump_ability.desc:key.keyboard.space",
    "key_key.aether.invisibility_toggle.desc:key.keyboard.v",
    "key_key.sophisticatedcore.sort:key.mouse.middle",
    "key_key.sophisticatedcore.transfer_to_storage:key.keyboard.left.bracket",
    "key_key.sophisticatedcore.transfer_to_inventory:key.keyboard.right.bracket",
    "key_gui.xaero_open_map:key.keyboard.m",
    "key_gui.xaero_open_settings:key.keyboard.right.bracket",
    "key_gui.xaero_quick_confirm:key.keyboard.right.shift",
    "key_iris.keybind.reload:key.keyboard.r",
    "key_iris.keybind.toggleShaders:key.keyboard.k",
    "key_iris.keybind.shaderPackSelection:key.keyboard.o",
    "key_key.sophisticatedbackpacks.open_backpack:key.keyboard.v",
    "key_key.sophisticatedbackpacks.inventory_interaction:key.keyboard.c",
    "key_key.sophisticatedbackpacks.toggle_upgrade_1:key.keyboard.z:ALT",
    "key_key.sophisticatedbackpacks.toggle_upgrade_2:key.keyboard.x:ALT",
    "key_supplementaries.keybind.quiver:key.keyboard.v",
    "key_key.refinedstorage.focus_search_bar:key.keyboard.tab",
    "key_key.refinedstorage.clear_crafting_grid_matrix_to_network:key.keyboard.x:CONTROL",
    "key_key.curios.open.desc:key.keyboard.g",
    "key_accessories.key.open_accessories_screen:key.keyboard.h",
    "key_key.lightoverlay.enable_overlay:key.keyboard.f7",
    "key_key.deep_aether.stratus_dash_ability.desc:key.keyboard.r",
    "key_key.deep_aether.slider_eye_ability:key.keyboard.left.alt",
    "key_key.deep_aether.toggle_skyjade_transparency:key.keyboard.v",
    "key_crafting_on_a_stick.key.open_curios:key.keyboard.v",
    "key_key.jei.toggleOverlay:key.keyboard.o:CONTROL",
    "key_key.jei.focusSearch:key.keyboard.f:CONTROL",
    "key_key.jei.bookmark:key.keyboard.a",
    "key_key.jei.showRecipe:key.keyboard.r",
    "key_key.jei.showRecipe2:key.mouse.left",
    "key_key.jei.showUses:key.keyboard.u",
    "key_key.jei.showUses2:key.mouse.right",
    "key_key.jei.transferRecipeBookmark:key.mouse.left:SHIFT",
    "key_key.jei.maxTransferRecipeBookmark:key.mouse.left:CONTROL",
    "key_key.jei.quickMove:key.mouse.left:SHIFT",
    "key_key.jei.clearSearchBar:key.mouse.right",
    "key_key.jei.previousSearch:key.keyboard.up",
    "key_key.jei.nextSearch:key.keyboard.down",
    "key_key.jei.cheatOneItem:key.mouse.left",
    "key_key.jei.cheatOneItem2:key.mouse.right",
    "key_key.jei.cheatItemStack:key.mouse.left:SHIFT",
    "key_key.jei.cheatItemStack2:key.mouse.middle",
    "key_key.jei.toggleCheatModeConfigButton:key.mouse.left:CONTROL",
    "key_key.jei.toggleHideIngredient:key.mouse.left:CONTROL",
    "key_key.jei.toggleWildcardHideIngredient:key.mouse.right:CONTROL",
    "key_key.jei.recipeBack:key.keyboard.backspace",
    "key_key.jei.previousRecipePage:key.keyboard.page.up",
    "key_key.jei.nextRecipePage:key.keyboard.page.down",
    "key_key.jei.previousCategory:key.keyboard.page.up:SHIFT",
    "key_key.jei.nextCategory:key.keyboard.page.down:SHIFT",
    "key_key.jei.closeRecipeGui:key.keyboard.escape",
    "key_key.mekanism.mode:key.mouse.4",
    "key_key.mekanism.head_mode:key.keyboard.v",
    "key_key.mekanism.chest_mode:key.keyboard.g",
    "key_key.mekanism.legs_mode:key.keyboard.j",
    "key_key.mekanism.feet_mode:key.keyboard.b",
    "key_key.mekanism.details:key.keyboard.left.shift",
    "key_key.mekanism.description:key.keyboard.n:SHIFT",
    "key_key.mekanism.module_tweaker:key.keyboard.backslash",
    "key_key.mekanism.key_boost:key.keyboard.left.control",
    "key_key.mekanism.key_hud:key.keyboard.h",
    "key_key.mekanismadditions.voice:key.keyboard.u",
    "key_key.push_to_talk:key.keyboard.caps.lock",
    "key_key.disable_voice_chat:key.keyboard.n",
    "key_key.hide_icons:key.keyboard.h",
    "key_key.voice_chat:key.keyboard.grave.accent",
    "key_key.voice_chat_group:key.keyboard.g",
    "key_key.trade_cycling.cycle_trades:key.keyboard.c",
    "key_key.jade.config:key.keyboard.keypad.0",
    "key_key.jade.show_overlay:key.keyboard.keypad.1",
    "key_key.jade.toggle_liquid:key.keyboard.keypad.2",
    "key_key.jade.show_recipes:key.keyboard.keypad.3",
    "key_key.jade.show_uses:key.keyboard.keypad.4",
    "key_key.jade.narrate:key.keyboard.keypad.5",
    "key_key.jade.show_details:key.keyboard.left.shift",
    "key_gui.xaero_minimap_settings:key.keyboard.y",
    "key_gui.xaero_new_waypoint:key.keyboard.b",
    "key_gui.xaero_waypoints_key:key.keyboard.u",
    "key_gui.xaero_enlarge_map:key.keyboard.z",
    "key_gui.xaero_instant_waypoint:key.keyboard.keypad.add",
    "key_key.railcraft.change_aura:key.keyboard.g",
    "key_key.railcraft.loco.reverse:key.keyboard.n",
    "key_key.railcraft.loco.faster:key.keyboard.period",
    "key_key.railcraft.loco.slower:key.keyboard.comma",
    "key_key.railcraft.loco.mode:key.keyboard.m",
    "key_key.railcraft.loco.whistle:key.keyboard.b"
  ];

  // Human-friendly mapping for key names and categories
  var humanLabels = {
    "key_key.attack": { name: "Attack / Destroy", cat: "Minecraft Core" },
    "key_key.use": { name: "Use Item / Place Block", cat: "Minecraft Core" },
    "key_key.forward": { name: "Walk Forward", cat: "Movement" },
    "key_key.left": { name: "Strafe Left", cat: "Movement" },
    "key_key.back": { name: "Walk Backward", cat: "Movement" },
    "key_key.right": { name: "Strafe Right", cat: "Movement" },
    "key_key.jump": { name: "Jump", cat: "Movement" },
    "key_key.sneak": { name: "Sneak", cat: "Movement" },
    "key_key.sprint": { name: "Sprint", cat: "Movement" },
    "key_key.drop": { name: "Drop Item", cat: "Inventory" },
    "key_key.inventory": { name: "Open/Close Inventory", cat: "Inventory" },
    "key_key.chat": { name: "Open Chat", cat: "Multiplayer" },
    "key_key.playerlist": { name: "List Players", cat: "Multiplayer" },
    "key_key.pickItem": { name: "Pick Block", cat: "Minecraft Core" },
    "key_key.command": { name: "Open Command", cat: "Multiplayer" },
    "key_key.socialInteractions": { name: "Social Interactions Screen", cat: "Multiplayer" },
    "key_key.screenshot": { name: "Take Screenshot", cat: "System" },
    "key_key.togglePerspective": { name: "Toggle Camera Perspective", cat: "System" },
    "key_key.fullscreen": { name: "Toggle Fullscreen", cat: "System" },
    "key_key.swapOffhand": { name: "Swap Item to Offhand", cat: "Inventory" },
    "key_key.saveToolbarActivator": { name: "Save Toolbar Activator", cat: "Creative" },
    "key_key.loadToolbarActivator": { name: "Load Toolbar Activator", cat: "Creative" },
    "key_key.advancements": { name: "Advancements Screen", cat: "GUI" },
    "key_key.trashslot.toggle": { name: "TrashSlot: Toggle Trash", cat: "TrashSlot" },
    "key_key.trashslot.delete": { name: "TrashSlot: Delete Hovered Item", cat: "TrashSlot" },
    "key_key.trashslot.delete_all": { name: "TrashSlot: Delete All Matching Items", cat: "TrashSlot" },
    "key_key.craftingtweaks.compress_one": { name: "Crafting Tweaks: Compress 1 Item", cat: "Crafting Tweaks" },
    "key_key.craftingtweaks.compress_stack": { name: "Crafting Tweaks: Compress Stack", cat: "Crafting Tweaks" },
    "key_key.craftingtweaks.compress_all": { name: "Crafting Tweaks: Compress All", cat: "Crafting Tweaks" },
    "key_key.craftingtweaks.refill_last": { name: "Crafting Tweaks: Refill Last Craft", cat: "Crafting Tweaks" },
    "key_key.craftingtweaks.refill_last_stack": { name: "Crafting Tweaks: Refill Stack", cat: "Crafting Tweaks" },
    "key_key.aether.open_accessories.desc": { name: "The Aether: Open Accessories Menu", cat: "The Aether" },
    "key_key.aether.gravitite_jump_ability.desc": { name: "The Aether: Gravitite Jump", cat: "The Aether" },
    "key_key.aether.invisibility_toggle.desc": { name: "The Aether: Toggle Invisibility Armor", cat: "The Aether" },
    "key_key.sophisticatedcore.sort": { name: "Sophisticated Core: Sort Inventory", cat: "Storage" },
    "key_key.sophisticatedcore.transfer_to_storage": { name: "Sophisticated Core: Deposit To Storage", cat: "Storage" },
    "key_key.sophisticatedcore.transfer_to_inventory": { name: "Sophisticated Core: Deposit To Inventory", cat: "Storage" },
    "key_gui.xaero_open_map": { name: "Xaero's Map: Open World Map", cat: "Xaero's Map" },
    "key_gui.xaero_open_settings": { name: "Xaero's Map: Open Settings", cat: "Xaero's Map" },
    "key_gui.xaero_quick_confirm": { name: "Xaero's Map: Quick Confirm Waypoint", cat: "Xaero's Map" },
    "key_iris.keybind.reload": { name: "Iris: Reload Shaders", cat: "Graphics" },
    "key_iris.keybind.toggleShaders": { name: "Iris: Toggle Shaders On/Off", cat: "Graphics" },
    "key_iris.keybind.shaderPackSelection": { name: "Iris: Open Shader Menu", cat: "Graphics" },
    "key_key.sophisticatedbackpacks.open_backpack": { name: "Sophisticated Backpacks: Open Backpack", cat: "Storage" },
    "key_key.sophisticatedbackpacks.inventory_interaction": { name: "Sophisticated Backpacks: Quick Interact", cat: "Storage" },
    "key_key.sophisticatedbackpacks.toggle_upgrade_1": { name: "Sophisticated Backpacks: Toggle Upgrade 1", cat: "Storage" },
    "key_key.sophisticatedbackpacks.toggle_upgrade_2": { name: "Sophisticated Backpacks: Toggle Upgrade 2", cat: "Storage" },
    "key_supplementaries.keybind.quiver": { name: "Supplementaries: Open Quiver", cat: "Equipment" },
    "key_key.refinedstorage.focus_search_bar": { name: "Refined Storage: Focus Grid Search", cat: "Refined Storage" },
    "key_key.refinedstorage.clear_crafting_grid_matrix_to_network": { name: "Refined Storage: Clear Grid to Network", cat: "Refined Storage" },
    "key_key.curios.open.desc": { name: "Curios: Open Curios Menu", cat: "Equipment" },
    "key_accessories.key.open_accessories_screen": { name: "Accessories: Open Screen", cat: "Equipment" },
    "key_key.lightoverlay.enable_overlay": { name: "Light Overlay: Toggle Mob Spawn Light Level", cat: "Utility" },
    "key_key.deep_aether.stratus_dash_ability.desc": { name: "Deep Aether: Stratus Dash Ability", cat: "The Aether" },
    "key_key.deep_aether.slider_eye_ability": { name: "Deep Aether: Slider Eye Ability", cat: "The Aether" },
    "key_key.deep_aether.toggle_skyjade_transparency": { name: "Deep Aether: Toggle Skyjade Glass", cat: "The Aether" },
    "key_crafting_on_a_stick.key.open_curios": { name: "Crafting on a Stick: Open Curios", cat: "Utility" },
    "key_key.jei.toggleOverlay": { name: "JEI: Toggle Item Overlay", cat: "JEI" },
    "key_key.jei.focusSearch": { name: "JEI: Focus Search Bar", cat: "JEI" },
    "key_key.jei.bookmark": { name: "JEI: Bookmark Item under Cursor", cat: "JEI" },
    "key_key.jei.showRecipe": { name: "JEI: Show Recipes for Item", cat: "JEI" },
    "key_key.jei.showRecipe2": { name: "JEI: Show Recipes (Mouse)", cat: "JEI" },
    "key_key.jei.showUses": { name: "JEI: Show Uses for Item", cat: "JEI" },
    "key_key.jei.showUses2": { name: "JEI: Show Uses (Mouse)", cat: "JEI" },
    "key_key.jei.transferRecipeBookmark": { name: "JEI: Transfer Recipe", cat: "JEI" },
    "key_key.jei.maxTransferRecipeBookmark": { name: "JEI: Max Recipe Transfer", cat: "JEI" },
    "key_key.jei.quickMove": { name: "JEI: Quick Move Item", cat: "JEI" },
    "key_key.jei.clearSearchBar": { name: "JEI: Clear Search Bar", cat: "JEI" },
    "key_key.jei.previousSearch": { name: "JEI: Previous Search Term", cat: "JEI" },
    "key_key.jei.nextSearch": { name: "JEI: Next Search Term", cat: "JEI" },
    "key_key.jei.cheatOneItem": { name: "JEI: Cheat 1 Item", cat: "JEI" },
    "key_key.jei.cheatOneItem2": { name: "JEI: Cheat 1 Item (Mouse)", cat: "JEI" },
    "key_key.jei.cheatItemStack": { name: "JEI: Cheat Stack of Items", cat: "JEI" },
    "key_key.jei.cheatItemStack2": { name: "JEI: Cheat Stack (Middle Click)", cat: "JEI" },
    "key_key.jei.toggleCheatModeConfigButton": { name: "JEI: Toggle Cheat Mode", cat: "JEI" },
    "key_key.jei.toggleHideIngredient": { name: "JEI: Hide Ingredient", cat: "JEI" },
    "key_key.jei.toggleWildcardHideIngredient": { name: "JEI: Hide Wildcard Ingredient", cat: "JEI" },
    "key_key.jei.recipeBack": { name: "JEI: Back to Previous Recipe Page", cat: "JEI" },
    "key_key.jei.previousRecipePage": { name: "JEI: Previous Recipe Page", cat: "JEI" },
    "key_key.jei.nextRecipePage": { name: "JEI: Next Recipe Page", cat: "JEI" },
    "key_key.jei.previousCategory": { name: "JEI: Previous Recipe Category", cat: "JEI" },
    "key_key.jei.nextCategory": { name: "JEI: Next Recipe Category", cat: "JEI" },
    "key_key.jei.closeRecipeGui": { name: "JEI: Close Recipe Overlay", cat: "JEI" },
    "key_key.mekanism.mode": { name: "Mekanism: Item Mode Switch", cat: "Mekanism" },
    "key_key.mekanism.head_mode": { name: "Mekanism: Helmet Mode Switch", cat: "Mekanism" },
    "key_key.mekanism.chest_mode": { name: "Mekanism: Chestplate Mode Switch", cat: "Mekanism" },
    "key_key.mekanism.legs_mode": { name: "Mekanism: Leggings Mode Switch", cat: "Mekanism" },
    "key_key.mekanism.feet_mode": { name: "Mekanism: Boots Mode Switch", cat: "Mekanism" },
    "key_key.mekanism.details": { name: "Mekanism: Show Tool Details", cat: "Mekanism" },
    "key_key.mekanism.description": { name: "Mekanism: Show Tool Description", cat: "Mekanism" },
    "key_key.mekanism.module_tweaker": { name: "Mekanism: Open Module Tweaker", cat: "Mekanism" },
    "key_key.mekanism.key_boost": { name: "Mekanism: Armor Boost Key", cat: "Mekanism" },
    "key_key.mekanism.key_hud": { name: "Mekanism: Toggle HUD Overlay", cat: "Mekanism" },
    "key_key.mekanismadditions.voice": { name: "Mekanism: Walkie-Talkie Voice", cat: "Mekanism" },
    "key_key.push_to_talk": { name: "Voice Chat: Push to Talk", cat: "Voice Chat" },
    "key_key.disable_voice_chat": { name: "Voice Chat: Mute / Disable Voice", cat: "Voice Chat" },
    "key_key.hide_icons": { name: "Voice Chat: Hide Screen Icons", cat: "Voice Chat" },
    "key_key.voice_chat": { name: "Voice Chat: Open Settings", cat: "Voice Chat" },
    "key_key.voice_chat_group": { name: "Voice Chat: Open Groups Screen", cat: "Voice Chat" },
    "key_key.trade_cycling.cycle_trades": { name: "Trade Cycling: Cycle Villager Trades", cat: "Utility" },
    "key_key.jade.config": { name: "Jade: Config Menu", cat: "Jade" },
    "key_key.jade.show_overlay": { name: "Jade: Toggle Overlay On/Off", cat: "Jade" },
    "key_key.jade.toggle_liquid": { name: "Jade: Toggle Liquid HUD Display", cat: "Jade" },
    "key_key.jade.show_recipes": { name: "Jade: Show Recipes for Block", cat: "Jade" },
    "key_key.jade.show_uses": { name: "Jade: Show Uses for Block", cat: "Jade" },
    "key_key.jade.narrate": { name: "Jade: Narrate Block Info", cat: "Jade" },
    "key_key.jade.show_details": { name: "Jade: Show Detailed HUD Info", cat: "Jade" },
    "key_gui.xaero_minimap_settings": { name: "Xaero's Minimap: Settings Menu", cat: "Xaero's Map" },
    "key_gui.xaero_new_waypoint": { name: "Xaero's Minimap: Create Waypoint", cat: "Xaero's Map" },
    "key_gui.xaero_waypoints_key": { name: "Xaero's Minimap: Waypoints Menu", cat: "Xaero's Map" },
    "key_gui.xaero_enlarge_map": { name: "Xaero's Minimap: Enlarge Minimap", cat: "Xaero's Map" },
    "key_gui.xaero_instant_waypoint": { name: "Xaero's Minimap: Quick Waypoint", cat: "Xaero's Map" },
    "key_key.railcraft.change_aura": { name: "Railcraft: Change Locomotive Aura", cat: "Railcraft" },
    "key_key.railcraft.loco.reverse": { name: "Railcraft: Locomotive Reverse", cat: "Railcraft" },
    "key_key.railcraft.loco.faster": { name: "Railcraft: Increase Loco Speed", cat: "Railcraft" },
    "key_key.railcraft.loco.slower": { name: "Railcraft: Decrease Loco Speed", cat: "Railcraft" },
    "key_key.railcraft.loco.mode": { name: "Railcraft: Switch Loco Mode", cat: "Railcraft" },
    "key_key.railcraft.loco.whistle": { name: "Railcraft: Locomotive Whistle", cat: "Railcraft" }
  };

  // Parse keybindings array into map
  var keyBindingsMap = {};
  var allBindingsList = [];

  rawData.forEach(function (line) {
    var parts = line.split(':');
    var actionKey = parts[0];
    var keyCode = parts[1] + (parts[2] ? ':' + parts[2] : '');
    var baseKeyCode = parts[1];
    var modifier = parts[2] || '';

    var info = humanLabels[actionKey] || {
      name: actionKey.replace('key_key.', '').replace('key_gui.', ''),
      cat: 'General'
    };

    if (actionKey.indexOf('key_key.hotbar.') === 0) {
      info = { name: "Select Hotbar Slot " + actionKey.replace('key_key.hotbar.', ''), cat: "Minecraft Core" };
    }

    var bindingObj = {
      actionKey: actionKey,
      actionName: info.name,
      category: info.cat,
      keyCode: keyCode,
      baseKey: baseKeyCode,
      modifier: modifier
    };

    allBindingsList.push(bindingObj);

    if (!keyBindingsMap[baseKeyCode]) {
      keyBindingsMap[baseKeyCode] = [];
    }
    keyBindingsMap[baseKeyCode].push(bindingObj);
  });

  // Highlight active keys on keyboard layout
  var keyElements = document.querySelectorAll('.key[data-key]');
  keyElements.forEach(function (el) {
    var keyData = el.getAttribute('data-key');
    if (keyBindingsMap[keyData]) {
      el.classList.add('has-binding');
    }

    // Hover & click listeners
    el.addEventListener('mouseenter', function () { selectKey(keyData, el); });
    el.addEventListener('click', function () { selectKey(keyData, el); });
  });

  function formatKeyDisplay(binding) {
    var keyName = binding.baseKey.replace('key.keyboard.', '').replace('key.mouse.', '').toUpperCase();
    if (binding.modifier) {
      return binding.modifier + ' + ' + keyName;
    }
    return keyName;
  }

  function selectKey(keyCode, element) {
    keyElements.forEach(function (k) { k.classList.remove('key-active'); });
    if (element) element.classList.add('key-active');

    var titleEl = document.getElementById('selected-key-title');
    var subtitleEl = document.getElementById('selected-key-subtitle');
    var actionsList = document.getElementById('selected-key-actions');

    var readableKeyName = keyCode.replace('key.keyboard.', '').replace('key.mouse.', '').replace(/\./g, ' ').toUpperCase();
    titleEl.textContent = readableKeyName + " Key";

    var bindings = keyBindingsMap[keyCode] || [];
    if (bindings.length === 0) {
      subtitleEl.textContent = "No default keybindings assigned to this key.";
      actionsList.innerHTML = '';
      return;
    }

    subtitleEl.textContent = bindings.length + " action(s) bound to this key:";
    actionsList.innerHTML = bindings.map(function (b) {
      var modTag = b.modifier ? '<span class="key-mod-badge">' + b.modifier + ' +</span> ' : '';
      return '<li>' + modTag + '<strong>' + escapeHtml(b.actionName) + '</strong> <span style="color:var(--color-text-faint);">(' + escapeHtml(b.category) + ')</span></li>';
    }).join('');
  }

  // Render Directory Table
  var searchInput = document.getElementById('key-search');
  var tbody = document.getElementById('controls-tbody');

  function renderTable() {
    var query = (searchInput.value || '').toLowerCase().trim();

    var filtered = allBindingsList.filter(function (b) {
      var matchesName = b.actionName.toLowerCase().indexOf(query) !== -1;
      var matchesKey = b.keyCode.toLowerCase().indexOf(query) !== -1;
      var matchesCat = b.category.toLowerCase().indexOf(query) !== -1;
      return matchesName || matchesKey || matchesCat;
    });

    tbody.innerHTML = filtered.map(function (b) {
      return '<tr>' +
        '<td><strong>' + escapeHtml(b.actionName) + '</strong></td>' +
        '<td><code>' + escapeHtml(formatKeyDisplay(b)) + '</code></td>' +
        '<td>' + escapeHtml(b.category) + '</td>' +
        '</tr>';
    }).join('');
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  if (searchInput) {
    searchInput.addEventListener('input', renderTable);
  }

  renderTable();
})();