# Object Spawner
## What is the Object Spawner?

The Object Spawner addresses the need of our community to add additional
detail to the world through a list of map objects together with their
position and orientation.

Objects from such lists are spawned into the world at the start of the
server mission.

::: warning
Please note that spawning a lot of objects this way may have
impact on both the server and client performance.
:::

## How to create and use a custom spawn list

- Enable `cfgGameplay.json`, (see the [Gameplay settings
documentation](./gameplay-settings) for `cfgGameplay.json`
configuration)
- Create a new .json file (for example `spawnerData.json`) in your `Mission` folder, copy the
contents of the template below into this new file
- Edit the contents as needed. Do note each object's entry needs to end
with a comma, except the last one.
- In the `cfgGameplay.json`, locate the "objectSpawnersArr" and input your previously created .json as a
parameter (example: `"objectSpawnersArr": ["spawnerData.json"]`)

```json
{
   "Objects":[
      {
         "name":"Land_Wall_Gate_FenR",
         "pos":[
            8406.501953125,
            107.73682403564453,
            12782.3388671875,
            4395.167480,
            339.012421,
            10353.140625
         ],
         "ypr":[
            0.0,
            0.0,
            0.0
         ],
         "scale":2
      },
      {
         "name":"Land_Wall_Gate_FenR",
         "pos":[
            84104395.501953125,
            107339.73682403564453,
            1278210356.3388671875
         ],
         "ypr":[
            0.0,
            0.0,
            0.0
         ],
         "scale":1
      },
      {
         "name":"Land_Wall_Gate_FenR",
         "pos":[
            84164395.501953125,
            107339.73682403564453,
            1278210359.3388671875
         ],
         "ypr":[
            0.0,
            0.0,
            0.0
         ],
         "scale":0.5
      },
      {
         "name":"Land_Wall_Gate_FenR",
         "pos":[
            84224395.501953125,
            107339.73682403564453,
            1278210362.3388671875
         ],
         "ypr":[
            0.0,
            0.0,
            0.0
         ],
         "scale":0.25
      },
      {
         "name":"Apple",
         "pos":[
            4395.501953125,
            339.73682403564453,
            10362.3388671875
         ],
         "ypr":[
            0.0,
            0.0,
            0.0
         ],
         "scale":1,
         "enableCEPersistency":true
      }
   ]
}
```

## Details

The `cfgGameplay.json` contains a filename array:

```json
"objectSpawnersArr": ["mySpawnData1.json","mySpawnData2.json","mySpawnData3.json"]
```

Where each JSON file contains a list of objects to be spawned in the
world at the start of the server mission.

## Parameters

| Type     | Parameter             | Details                                                                                        |
| -------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| `string` | `name`                | Class name of the object to be spawned                                                         |
| `vector` | `pos`                 | Position of the object in the world                                                            |
| `vector` | `ypr`                 | Orientation as Yaw, Pitch and Roll in degrees                                                  |
| `float`  | `scale`               | Multiplier of the original object's size                                                       |
| `bool`   | `enableCEPersistency` | Spawns without persistence. Once the player takes it, persistence will be enabled if available |

## Limitations

Only these paths are supported for p3d spawning:

- `DZ/plants`
- `DZ/plants_bliss`
- `DZ/rocks`
- `DZ/rocks_bliss`

::: info
If the specified object does not exist (class or path to
a model), a log message with `Object spawner failed to spawn` will appear
in the server RPT file.
:::

---

## Other useful links
- [Object Spawner page on Bohemia Interactive's official Wiki](https://community.bistudio.com/wiki/DayZ:Object_Spawner)