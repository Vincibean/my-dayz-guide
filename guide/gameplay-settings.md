# Gameplay Settings

## What are Gameplay Settings?

Gameplay settings provide a way for server admins to tweak the game's
behavior by simply modifying values inside the gameplay settings' JSON
file.

## Initial Set-Up

The gameplay settings are located in `cfggameplay.json`, before you can start
using it, you need to copy [this file](https://github.com/BohemiaInteractive/DayZ-Central-Economy)
to your mission folder.

Once there, you can freely modify any of the values inside. To enable
the usage of the file, you also need to add a new parameter
`enableCfgGameplayFile = 1` to your
[server.cfg](./configuration-file) file.

From that point on, whenever you run the server, the `cfggameplay.json`
will be loaded and used by the game.

## Gameplay Settings

```json
{
	"version": 120,
	"GeneralData":
	{
		"disableBaseDamage": false,
		"disableContainerDamage": false,
		"disableRespawnDialog": false
	},
    "PlayerData":
	{
		"disablePersonalLight": false,
		"StaminaData":
		{
			"sprintStaminaModifierErc": 1.0,
			"sprintStaminaModifierCro": 1.0,
			"staminaWeightLimitThreshold": 6000.0,
			"staminaMax": 100.0,
			"staminaKgToStaminaPercentPenalty": 1.75,
			"staminaMinCap": 5.0,
			"sprintSwimmingStaminaModifier": 1.0,
			"sprintLadderStaminaModifier": 1.0,
			"meleeStaminaModifier": 1.0,
			"obstacleTraversalStaminaModifier": 1.0,
			"holdBreathStaminaModifier": 1.0
		},
		"ShockHandlingData":
		{
			"shockRefillSpeedConscious": 5.0,
			"shockRefillSpeedUnconscious": 1.0,
			"allowRefillSpeedModifier": true
		},
		"MovementData":
		{
			"timeToStrafeJog": 0.1,
			"rotationSpeedJog": 0.3,
			"timeToSprint": 0.45,
			"timeToStrafeSprint": 0.3,
			"rotationSpeedSprint": 0.15,
			"allowStaminaAffectInertia": true
		},
		"DrowningData":
		{
			"staminaDepletionSpeed": 10.0,
			"healthDepletionSpeed": 10.0,
			"shockDepletionSpeed": 10.0
		}
	},
	"WorldsData":
	{
		"lightingConfig": 1,
		"objectSpawnersArr": [],
		"environmentMinTemps": [-3.0, -2.0, 0.0, 4.0, 9.0, 14.0, 18.0, 17.0, 12.0, 7.0, 4.0, 0.0],
		"environmentMaxTemps": [3.0, 5.0, 7.0, 14.0, 19.0, 24.0, 26.0, 25.0, 21.0, 16.0, 10.0, 5.0],
		"wetnessWeightModifiers": [1.0, 1.0, 1.33, 1.66, 2.0]
	},
	"BaseBuildingData":
	{
		"HologramData":
		{
			"disableIsCollidingBBoxCheck": true,
			"disableIsCollidingPlayerCheck": true,
			"disableIsClippingRoofCheck": true,
			"disableIsBaseViableCheck": true,
			"disableIsCollidingGPlotCheck": true,
			"disableIsCollidingAngleCheck": true,
			"disableIsPlacementPermittedCheck": true,
			"disableHeightPlacementCheck": true,
			"disableIsUnderwaterCheck": true,
			"disableIsInTerrainCheck": true
		},
		"ConstructionData":
		{
			"disablePerformRoofCheck": true,
			"disableIsCollidingCheck": true,
			"disableDistanceCheck": true
		}
	},
	"UIData":
	{
		"use3DMap": false,
		"HitIndicationData":
		{
			"hitDirectionOverrideEnabled": false,
			"hitDirectionBehaviour": 1,
			"hitDirectionStyle": 0,
			"hitDirectionIndicatorColorStr": "0xffbb0a1e",
			"hitDirectionMaxDuration": 2.0,
			"hitDirectionBreakPointRelative": 0.2,
			"hitDirectionScatter": 10.0,
			"hitIndicationPostProcessEnabled": true
		}
	},
	"MapData":
	{
		"ignoreMapOwnership": false,
		"ignoreNavItemsOwnership": false,
		"displayPlayerPosition": false,
		"displayNavInfo": true
	}
}
```

Let's see what these settings do.

## General Parameters

### version
Type: `int`
Default: current version, e.g. `119`
Description: Internal parameter to keep track of the version of the file                                                                    

### usePlayerSpawnGearFile
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Enables loading and processing of [Spawning Gear Configuration](./spawning-gear-configuration) JSON file

### objectSpawnersArr
- **Type**: `string array`
- **Default**: `[]`
- **Description**: File names of the JSON files containing spawner data (see [Object Spawner](./object-spawner))

### disableRespawnDialog
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Disable a UI dialogue window in which the player selects the type of respawn they wish to perform after pressing the respawn button

### disableRespawnInUnconsciousness
- **Type**: `bool`
- **Default**: `0/false`                      |
- **Description**: Disables the "Respawn" button available in the pause menu (`Esc`) when the player is unconscious, disallowing them to respawn

### disablePersonalLight
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Disables the omnipresent personal light lighting up objects close to player during night-time

### lightingConfig
- **Type**: `int`
- **Default**: `1`
- **Description**: What type of lighting will be used during night time (0 = bright, 1 = dark)

### wetnessWeightModifiers
- **Type**: `float array`
- **Default**: `{1.0, 1.0, 1.33, 1.66, 2.0};`
- **Description**: Values for item weight modification based on wetness level of the item. Values from left to right: \[DRY, DAMP, WET, SOAKED, DRENCHED\]

## Base Building Object Damage Parameters

### disableBaseDamage
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Damage from structures built through base-building

### disableContainerDamage
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Disable damage from items such as tents and barrels

## Stamina Parameters

### sprintStaminaModifierErc
- **Type**: `float`
- **Default**: `1.0`
- **Description**: Modifies the rate at which the stamina is being consumed during erected sprint

### sprintStaminaModifierCro
- **Type**: `float`
- **Default**: `1.0`
- **Description**: Modifies the rate at which the stamina is being consumed during crouched sprint

### staminaWeightLimitThreshold
- **Type**: `float`
- **Default**: 6000.0
- **Description**: This amount of stamina points (divided by 1000) will not count towards stamina weight deduction

### staminaMax
- **Type**: `float`
- **Default**: 100.0
- **Description**: Maximum stamina (setting to 0 may produce unexpected results)

### staminaKgToStaminaPercentPenalty
- **Type**: `float`
- **Default**: `1.75`
- **Description**: Multiplier used when calculating stamina points deducted from max stamina given the player load

### staminaMinCap
- **Type**: `float`
- **Default**: 5.0
- **Description**: Minimum size of stamina cap (setting to 0 may produce unexpected results)

### sprintSwimmingStaminaModifier
- **Type**: `float`
- **Default**: `1.0`
- **Description**: Modifies the rate at which the stamina is being consumed during fast swimming

### sprintLadderStaminaModifier
- **Type**: `float`
- **Default**: `1.0`
- **Description**: Modifies the rate at which the stamina is being consumed during fast ladder climbing

### meleeStaminaModifier
- **Type**: `float`
- **Default**: 1.0
- **Description**: Modifies how much stamina is being consumed when performing heavy melee attacks and evasion

### obstacleTraversalStaminaModifier
- **Type**: `float`
- **Default**; `1.0`
- **Description**: Modifies how much stamina is being consumed when performing jumping, climbing and vaulting

### holdBreathStaminaModifier
- **Type**: `float`
- **Default**: `1.0`
- **Description**: Modifies the rate at which the stamina is being consumed when holding breath

## Shock Parameters

### shockRefillSpeedConscious
- **Type**: `float`
- **Default**: `5.0`
- **Description**: Shock value recovery while the player is conscious (per second)

### shockRefillSpeedUnconscious
- **Type**: `float`
- **Default**: `1.0`
- **Description**: Shock value recovery while the player is unconscious (per second)

### allowRefillSpeedModifier
- **Type**: `bool`
- **Default**: `1/true`
- **Description**: Allow/disallow modifier of Shock value recovery based on ammo type settings (typically faster waking-up from uncon after getting shot)

## Inertia Parameters

### timeToStrafeJog
- **Type**: `float`
- **Default**: `0.1`
- **Description**: Time to blend strafing (diagonal movement) while jogging (min possible value 0.01)

### rotationSpeedJog
- **Type**: `float`
- **Default**: `0.3`
- **Description**: Rotation speed of the character while jogging (min possible value 0.01)

### timeToSprint
- **Type**: `float`
- **Default**: `0.45`
- **Description**: Time to reach sprint from jog (min possible value 0.01)

### timeToStrafeSprint
- **Type**: `float`
- **Default**: `0.3`
- **Description**: Time to blend strafing (diagonal movement) while sprinting (min possible value 0.01)

### rotationSpeedSprint
- **Type**: `float`
- **Default**: `0.15`
- **Description**: Rotation speed of the character while sprinting (min possible value 0.01)

### allowStaminaAffectInertia
- **Type**: `bool`
- **Default**: `1/true`
- **Description**: When enabled allows stamina value influence player's inertia

## Object Placement and Building Restrictions Parameters

### disableIsCollidingBBoxCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement when the hologram is colliding with objects in the world

### disableIsCollidingPlayerCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement when the hologram is colliding with player

### disableIsClippingRoofCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement where placing would cause clipping with the roof

### disableIsBaseViableCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement on dynamic objects and other otherwise incompatible base

### disableIsCollidingGPlotCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement of garden plots despite incompatible surface type

### disableIsCollidingAngleCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement despite exceeding roll/pitch/yaw limits

### disableIsPlacementPermittedCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement even when not permitted by rudimentary checks

### disableHeightPlacementCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement with limited height space

### disableIsUnderwaterCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement under water

### disableIsInTerrainCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows placement when clipping with terrain

### disablePerformRoofCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows construction when clipping with the roof

### disableIsCollidingCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Allows construction when colliding with objects in the world

### disableDistanceCheck
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Prevents construction when player gets below specified range

### disallowedTypesInUnderground
- **Type**: `string set`
- **Description**: Prevents construction of these items types (including inherited ones) in the underground areas
- **Default**: `["FenceKit","TerritoryFlagKit","WatchtowerKit"]`

## Hit Indicator Parameters

### hitDirectionOverrideEnabled
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Decides whether the values get used or not. Since anything undefined in the 'HitIndicationData' class (or any class in json file) is considered zero, allows us to determine that some valid data had been loaded.

### hitDirectionBehaviour
- **Type**: `int`
- **Default**: `1`
- **Description**: Dictates general behaviour of the hit indicator. 0 == Disabled, 1 == Static, 2 == Dynamic (moving when displayed, WIP)

### hitDirectionStyle
- **Type**: `int`
- **Default**: `0`
- **Description**: Dictates which type of indicator gets used. Set of images and position calculations. 0 == 'splash', 1 == 'spike', 2 == 'arrow'

### hitDirectionIndicatorColorStr
- **Type**: `string`
- **Default**: `"0xffbb0a1e"`
- **Description**: Color of the indicator widget, in ARGB format. The color is written in string form (""). For more info on the ARGB format, see section below.

### hitDirectionMaxDuration
- **Type**: `float`
- **Default**: `2.0`
- **Description**: Maximal duration of the hit indicator. Actual duration is between 0.6..1.0 of the defined value, depending on the severity of the hit (which generally means heavier hits == longer indication)

### hitDirectionBreakPointRelative
- **Type**: `float`
- **Default**: `0.2`
- **Description**:  Fraction of the actual duration, after which the indicator begins to recede (currently fade-out only), 0.0 = fades from the beginning, 0.5 == fades after 50% duration has elapsed, 1.0 == no fading

### hitDirectionScatter
- **Type**: `float`
- **Default**: `10.0`
- **Description**: Amount of scatter to induce inaccuracy to the indication. Actual scatter is randomized by the amount of degrees in both directions (+- value, so value of 10 gives a potential scatter of 20 DEG)

### hitIndicationPostProcessEnabled
- **Type**: `bool`
- **Default**: `1/true`
- **Description**: Allows for disabling of the old hit effect (red flash)

## Navigation Parameters

### use3DMap
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Enables use of the 3D map only (disables the default 2d map overlay)

### ignoreMapOwnership
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Player can open a map (and just the map) using dedicated input (`"M"`) even without a map in the player's inventory.

### ignoreNavItemsOwnership
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Compass and/or GPS receiver are not needed for displaying helpers on the 2D map.

### displayPlayerPosition
- **Type**: `bool`
- **Default**: `0/false`
- **Description**: Shows the red marker on the map, on the player's position. It also display direction on the marker.

### displayNavInfo
- **Type**: `bool`
- **Default**: `1/true`
- **Description**: Hide GPS and Compass UI from the map legend completely (even when player has those items in inventory).


## Drowning Parameters

### staminaDepletionSpeed
- **Type**: `float`
- **Default**: `10.0`
- **Description**: Stamina depleted per second while drowning

### healthDepletionSpeed
- **Type**: `float`
- **Default**: `10.0`
- **Description**: Health depleted per second while drowning

### shockDepletionSpeed
- **Type**: `float`
- **Default**: `10.0`
- **Description**: Shock depleted per second while drowning

## Environment Parameters

### environmentMinTemps
- **Type**: `float array`
- **Default**: `[-3, -2, 0, 4, 9, 14, 18, 17, 12, 7, 4, 0]`
- **Description**: List of minimal temperatures (12 values exactly)

### environmentMaxTemps
- **Type**: `float array`
- **Default**: `[3, 5, 7, 14, 19, 24, 26, 25, 21, 16, 10, 5]`
- **Description**: List of maximal temperatures (12 values exactly)

## ARGB Format

ARGB used in the `cfgGameplay.json` is read as a string due to inherent
file format limitations. It consists of:

-   **Hexadecimal notation**: 0x
-   **Alpha value in hexadecimal format**: 00 – FF
-   **Red color value in hexadecimal format**: 00 – FF
-   **Green color value in hexadecimal format**: 00 – FF
-   **Blue color value in hexadecimal format**: 00-FF

Result string looks like
"0x<span class="template-colour" style="color:grey">FF</span>
<span class="template-colour" style="color:red">FF</span>
<span class="template-colour" style="color:green">00</span>
<span class="template-colour" style="color:blue">00</span>"
(red).

The value is not case sensitive, so it could be written in any case, or
combination thereof.

---

## Other useful links
- [Gameplay Settings page on Bohemia Interactive's official Wiki](https://community.bistudio.com/wiki/DayZ:Gameplay_Settings)