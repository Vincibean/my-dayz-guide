# Spawning Gear Configuration

## What is the Spawning Gear Configuration?

The Spawning Gear Configuration is a way to override vanilla character
spawning without touching the mission files. The configuration is based
on the `cfgPlayerSpawnGear.json` file the structure of which is documented
here.

This can be used to prepare multiple character presets that will be used
during the spawning process.

::: info
Once activated in the [Gameplay Settings](./gameplay-settings), the
`cfgPlayerSpawnGear.json` file overrides the behavior of
`StartingEquipSetup()` in mission init file. If the `CreateCharacter()` in
the mission init file is overridden and someone uses their own
`characterName` setting/selection here, `characterTypes` from this JSON
preset(s) will be ignored.
:::

## Structure of the `cfgPlayerSpawnGear.json`

| Field     | Type      | Description              |
|-----------|-----------|--------------------------|
| `version` | `integer` | internal version         |
| `presets` |           | see [Presets](#presets)  |

### `Presets`

An array of individual presets that will be used during the character
spawn process. Presets with higher *spawnWeight* have higher chance to
spawn often.

| Field                      | Type      | Description                                                                                                                        |
|----------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| `name`                     | `string`  | Name (can be any string)                                                                                                           |
| `spawnWeight`              | `integer` | Spawn weight (min = `1`, higher number means higher chance for spawn selection)                                                    |
| `characterTypes`           | `array`   | An array of character types (typename) associated with the preset. Spawned in random order.                                        |
| `attachmentSlotItemSets`   | `array`   | An array of `AttachmentSlots` structures which is used for character attachments spawning.                                         |
| `discreteUnsortedItemSets` | `array`   | An array of `DiscreteUnsortedItemSets` structures which is used for character cargo spawning.                                      |

### `AttachmentSlots`

Configuration of specific character attachments (on character slots -
back, head, body, etc.)

| Field              | Type     | Description                                                                                                                                                                                                           |
|--------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `slotName`         | `string` | The name of the attachment slot for the character, derived from `CfgSlots`. note: For shoulders, you can use `shoulderL` and `shoulderR`, these are automatically translated to respective ones defined in `CfgSlots`.|
| `discreteItemSets` | `array`  | An array of discrete items that can be attached to the slot.                                                                                                                                                          |

#### `DiscreteItemSets`

Configuration of specific character attachment(slot) and its
attachments/cargo, for example weapon(s) and its attachments. You can
setup multiple variants for each slot. Its spawning chance is driven by
the `spawnWeight`.

| Field                                | Type      | Description                                                                                                                                       |
|--------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `itemType`                           | `string`  | The type or name of the item in the set.                                                                                                              |
| `spawnWeight`                        | `integer` | Spawn weight (min = `1`, higher number means higherchance for spawn selection)                                                                        |
| `attributes`                         |           | See [Attributes](#attributes) section. Those are default values used if the nested types have not `simpleChildrenUseDefaultAttributes` set to `true`. |
| `quickBarSlot`                       | `integer` | The quick bar slot where the item can be placed. Value of -1 means "don't assign".                                                                    |
| `complexChildrenTypes`               |           | An array of items that will be spawned under the parent (defined by itemType). See [ComplexChildrenTypes](#complexchildrentypes) section.                                      |
| `simpleChildrenTypes`                | `array`   | An array of items (typename) that will be spawned under the parent (defined by `itemType`).                                                           |
| `simpleChildrenUseDefaultAttributes` | `bool`    | Indicates whether simple children items use default attributes. Defined on parent or configuration default.                                           |

### `DiscreteUnsortedItemSets`

Used for spawning of cargo to character that have some attachments
configured (through `AttachmentSlots` configuration).

| Field                                | Type      | Description                                                                                                                                           |
|--------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                               | `string`  | Name (can be any string)                                                                                                                              |
| `spawnWeight`                        | `integer` | Spawn weight (min = `1`, higher number means higher chance for spawn selection)                                                                       |
| `attributes`                         |           | See [Attributes](#attributes) section. Those are default values used if the nested types have not `simpleChildrenUseDefaultAttributes` set to `true`. |
| `complexChildrenTypes`               |           | An array of items that will be spawned in any of the characters cargo.                                                                                |
| `simpleChildrenTypes`                | `array`   | An array of items (typename) that will be spawned in any of the characters cargo.                                                                     |
| `simpleChildrenUseDefaultAttributes` | `bool`    | Indicates whether simple children items use default attributes defined in that structure or configuration default.                                    |

#### `ComplexChildrenTypes`

Primary use of that types is for spawning of nested cargo, for example,
if you want to spawn the Pot with Tomato inside. You can also set the
QuickBar shortcut for the parent item.

| Field                                | Type      | Description                                                                                                                                           |
|--------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `itemType`                           | `string`  | Name of item to spawn (typename)                                                                                                                      |
| `attributes`                         |           | See [Attributes](#attributes) section. Those are default values used if the nested types have not `simpleChildrenUseDefaultAttributes` set to `true`. |
| `quickBarSlot`                       | `integer` | The quick bar slot where the item can be placed. Value of `-1` means "don't assign".                                                                  |
| `simpleChildrenUseDefaultAttributes` | `bool`    | Indicates whether simple children items use default attributes defined in that structure or configuration default.                                    |
| `simpleChildrenTypes`                | `array`   | An array of item names (typename) that will be spawned.                                                                                               |

#### `SimpleChildrenTypes`

Is used for simple spawning of one or more items to the existing cargo
that is already attached to the player (through `AttachmentSlots`
configuration).

#### `Attributes`

These are common attributes used by the other structures and defines the
basic stats of the item. If set, random value between the `min` and
`max` is calculated and set during the item spawn.

| Field         | Type    | Description                                        |
|---------------|---------|----------------------------------------------------|
| `healthMin`   | `float` | The minimum health attribute value for the item.   |
| `healthMax`   | `float` | The maximum health attribute value for the item.   |
| `quantityMin` | `float` | The minimum quantity attribute value for the item. |
| `quantityMax` | `float` | The maximum quantity attribute value for the item. |


---

## Other useful links
- [Spawning Gear Configuration page on Bohemia Interactive's official Wiki](https://community.bistudio.com/wiki/DayZ:Spawning_Gear_Configuration)