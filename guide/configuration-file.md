# Configuration File

## Configuration
The config file `serverDZ.cfg` sets all of the parameters that the server needs in order to know how to behave.

Here is a possible (working!) example:

```text
/////////////////////
// Main parameters //
/////////////////////
hostname = "My DayZ Server";	// Server name
password = "";                  // Password to connect to the server
passwordAdmin = "";             // Password to become a server admin

enableWhitelist = 0;            // Enable/disable whitelist (value 0-1)
 
maxPlayers = 60;                // Maximum amount of players
 
verifySignatures = 2;           // Verifies .pbos against .bisign files. (only 2 is supported)
forceSameBuild = 1;             // When enabled, the server will allow the connection only to clients with same the .exe revision as the server (value 0-1)
 
disableVoN = 0;                 // Enable/disable voice over network (value 0-1)
vonCodecQuality = 20;           // Voice over network codec quality, the higher the better (values 0-30)
 
disable3rdPerson=1;             // Toggles the 3rd person view for players (value 0-1)
disableCrosshair=1;             // Toggles the cross-hair (value 0-1)

disablePersonalLight = 1;       // Disables personal light for all clients connected to server
lightingConfig = 1;             // 0 for brighter night setup, 1 for darker night setup
 
serverTime="SystemTime";        // Initial in-game time of the server. "SystemTime" means the local time of the machine. Another possibility is to set the time to some value in "YYYY/MM/DD/HH/MM" format, f.e. "2015/4/8/17/23" .
serverTimeAcceleration=6;       // Accelerated Time (value 0-24)// This is a time multiplier for in-game time. In this case, the time would move 24 times faster than normal, so an entire day would pass in one hour.
serverNightTimeAcceleration=4;  // Accelerated Nigh Time - The numerical value being a multiplier (0.1-64) and also multiplied by serverTimeAcceleration value. Thus, in case it is set to 4 and serverTimeAcceleration is set to 2, night time would move 8 times faster than normal. An entire night would pass in 3 hours.
serverTimePersistent=1;         // Persistent Time (value 0-1)// The actual server time is saved to storage, so when active, the next server start will use the saved time value.
 
guaranteedUpdates=1;            // Communication protocol used with game server (use only number 1)
 
loginQueueConcurrentPlayers=5;  // The number of players concurrently processed during the login process. Should prevent massive performance drop during connection when a lot of people are connecting at the same time.
loginQueueMaxPlayers=500;       // The maximum number of players that can wait in login queue
 
instanceId = 1;                 // DayZ server instance id, to identify the number of instances per box and their storage folders with persistence files

storageAutoFix = 1;             // Checks if the persistence files are corrupted and replaces corrupted ones with empty ones (value 0-1)

 
class Missions
{
    class DayZ
    {
        template="dayzOffline.chernarusplus"; // Mission to load on server startup. <MissionName>.<TerrainName>
					      // Vanilla mission: dayzOffline.chernarusplus
					      // DLC mission: dayzOffline.enoch
    };
};



///////////////////////////
// Additional parameters //
///////////////////////////
respawnTime = 5;				// Sets the respawn delay (in seconds) before the player is able to get a new character on the server, when the previous one is dead

motd[] = { "[motd]line1","[motd]line2" };	// Message of the day displayed in the in-game chat
motdInterval = 1;				// Time interval (in seconds) between each message

timeStampFormat = "Short";		        // Format for timestamps in the .rpt file (value Full/Short)
logAverageFps = 1;				// Logs the average server FPS (value in seconds), needs to have ''-doLogs'' launch parameter active
logMemory = 1;					// Logs the server memory usage (value in seconds), needs to have the ''-doLogs'' launch parameter active
logPlayers = 1;					// Logs the count of currently connected players (value in seconds), needs to have the ''-doLogs'' launch parameter active
logFile = "server_console.log";	// Saves the server console log to a file in the folder with the other server logs

adminLogPlayerHitsOnly = 1;		// 1 - log player hits only / 0 - log all hits ( animals/infected )
adminLogPlacement = 1;			// 1 - log placement action ( traps, tents )
adminLogBuildActions = 0;		// 1 - log basebuilding actions ( build, dismantle, destroy )
adminLogPlayerList = 1;			// 1 - log periodic player list with position every 5 minutes

disableMultiAccountMitigation = false;  // disables multi account mitigation on consoles when true (default: false)

enableDebugMonitor = 0;			// shows info about the character using a debug window in a corner of the screen (value 0-1)

//steamQueryPort = 2305;			// defines Steam query port, should fix the issue with server not being visible in client server browser. Won't work when running the server locally.

//allowFilePatching = 1;			// if set to 1 it will enable connection of clients with "-filePatching" launch parameter enabled

//simulatedPlayersBatch = 20;		// Set limit of how much players can be simulated per frame (for server performance gain)

multithreadedReplication = 1;	        // enables multi-threaded processing of server's replication system
								// number of worker threads is derived by settings of jobsystem in dayzSettings.xml by "maxcores" and "reservedcores" parameters (value 0-1)
speedhackDetection = 1;                 // enable speedhack detection, values 1-10 (1 strict, 10 benevolent, can be float)

networkRangeClose = 20;			// network bubble distance for spawn of close objects with items in them (f.i. backpacks), set in meters, default value if not set is 20
networkRangeNear = 150;			// network bubble distance for spawn (despawn +10%) of near inventory items objects, set in meters, default value if not set is 150
networkRangeFar = 1000;			// network bubble distance for spawn (despawn +10%) of far objects (other than inventory items), set in meters, default value if not set is 1000
networkRangeDistantEffect = 4000;       // network bubble distance for spawn of effects (currently only sound effects), set in meters, default value if not set is 4000
networkObjectBatchSend = 10;		// number of objects within a player's network bubble that are sent to be created within a server frame
networkObjectBatchCompute = 1000;	// number of objects within a player's network bubble that are processed to check if it already exists for the player within a server frame


defaultVisibility=1375;			// highest terrain render distance on server (if higher than "viewDistance=" in DayZ client profile, clientside parameter applies)
defaultObjectViewDistance=1375;	        // highest object render distance on server (if higher than "preferredObjectViewDistance=" in DayZ client profile, clientside parameter applies)

disableBaseDamage = 0;			// set to 1 to disable damage/destruction of fence and watchtower
disableContainerDamage = 0;		// set to 1 to disable damage/destruction of tents, barrels, wooden crate and seachest
disableRespawnDialog = 0;             // set to 1 to disable the respawn dialog (new characters will be spawning as random)

pingWarning = 200;              // set to define the ping value from which the initial yellow ping warning is triggered (value in milliseconds)
pingCritical = 250;             // set to define the ping value from which the red ping warning is triggered (value in milliseconds)
MaxPing = 300;                  // set to define the ping value from which a player is kicked from the server (value in milliseconds)
serverFpsWarning = 15;          // set to define the server fps value under which the initial server fps warning is triggered (minimum value is 11)
```

Let's see what these settings do.

### hostname
- **Type**: `Text`
- **Description**: The server name

### password
- **Type**: `Text`
- **Description**: Password to connect to the server

### passwordAdmin
- **Type**: `Text`
- **Description**: Password to become a server admin

### enableWhitelist
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Enable/disable whitelist
 
### maxPlayers
- **Type**: `Numeric`
- **Description**: Maximum number of players

### verifySignatures
- **Type**: `Numeric`
- **Value**: `2`
- **Description**: Verifies .pbos against .bisign files. Only 2 is supported

### forceSameBuild
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: When enabled, the server will allow the connection only to clients with same the .exe revision as the server

### disableVoN
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Enable/disable voice over network

### vonCodecQuality
- **Type**: `Numeric`
- **Value**: `0-30`
- **Description**: Voice over network codec quality, the higher the better
 
### disable3rdPerson
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Toggles the 3rd person view for players

### disableCrosshair
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Toggles the cross-hair

### disablePersonalLight
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Disables personal light for all clients connected to server

### lightingConfig
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: 0 for brighter night setup, 1 for darker night setup
 
### serverTime
- **Type**: `Text`
- **Description**: Initial in-game time of the server. `"SystemTime"` means the local time of the machine. Another possibility is to set the time to some value in `"YYYY/MM/DD/HH/MM"` format, e.g. `"2015/4/8/17/23"`.

### serverTimeAcceleration
- **Type**: `Numeric`
- **Value**: `0-24`
- **Description**: Accelerated Time. This is a time multiplier for in-game time. If it was set to 24, the time would move 24 times faster than normal, so an entire day would pass in one hour.

### serverNightTimeAcceleration
- **Type**: `Numeric`
- **Value**=`0.1-64`
- **Description**: Accelerated Nigh Time. The numerical value being a multiplier (0.1-64) and also multiplied by `serverTimeAcceleration` value. Thus, in case it is set to 4 and `serverTimeAcceleration` is set to 2, night time would move 8 times faster than normal. An entire night would pass in 3 hours.

### serverTimePersistent
- **Type**: `Numeric`
- **Value**: `0-1`;
- **Description**: Persistent Time. The actual server time is saved to storage, so when active, the next server start will use the saved time value.

### guaranteedUpdates
- **Type**: `Numeric`
- **Value**: `1`
- **Description**: Communication protocol used with game server (use only number 1)

### loginQueueConcurrentPlayers
- **Type**: `Numeric`
- **Description**: The number of players concurrently processed during the login process. Should prevent massive performance drop during connection when a lot of people are connecting at the same time.

### loginQueueMaxPlayers
- **Type**: `Numeric`
- **Description**: The maximum number of players that can wait in login queue
 
### instanceId
- **Type**: `Numeric`
- **Description**: DayZ server instance id, to identify the number of instances per box and their storage folders with persistence files

### storageAutoFix
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Checks if the persistence files are corrupted and replaces corrupted ones with empty ones

### respawnTime
- **Type**: `Numeric`
- **Description**: Sets the respawn delay (in seconds) before the player is able to get a new character on the server, when the previous one is dead

### motd[]
- **Type**: `Text Array`
- **Description**: Message of the day displayed in the in-game chat

### motdInterval
- **Type**: `Numeric`
- **Description**: Time interval (in seconds) between each message

### timeStampFormat
- **Type**: `Text`
- **Value**: `Full/Short`
- **Description**: Format for timestamps in the .rpt file (value Full/Short)

### logAverageFps
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Logs the average server FPS (value in seconds), needs to have `-doLogs` launch parameter active

### logMemory
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Logs the server memory usage (value in seconds), needs to have the `-doLogs` launch parameter active

### logPlayers
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: Logs the count of currently connected players (value in seconds), needs to have the `-doLogs` launch parameter active

### logFile
- **Type**: `Text`
- **Description**: Saves the server console log to a file in the folder with the other server logs

### adminLogPlayerHitsOnly
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: 1 - log player hits only; 0 - log all hits (animals/infected)

### adminLogPlacement
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: 1 - log placement action (traps, tents)

### adminLogBuildActions
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: 1 - log basebuilding actions (build, dismantle, destroy)

### adminLogPlayerList
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: 1 - log periodic player list with position every 5 minutes

### disableMultiAccountMitigation
- **Type**: `Boolean`
- **Value**: `true/false`
- **Default**: `false`
- **Description**: disables multi account mitigation on consoles when true

### enableDebugMonitor
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: shows info about the character using a debug window in a corner of the screen

### steamQueryPort
- **Type**: `Numeric`
- **Description**: defines Steam query port, should fix the issue with server not being visible in client server browser. _Won't work when running the server locally_.

### allowFilePatching
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: if set to 1 it will enable connection of clients with `-filePatching` launch parameter enabled

### simulatedPlayersBatch
- **Type**: `Numeric`
- **Description**: Set limit of how much players can be simulated per frame (for server performance gain)

### multithreadedReplication
- **Type**:	`Numeric`
- **Value**: `0-1`
- **Description**: enables multi-threaded processing of server's replication system. The number of worker threads is derived by the settings of jobsystem in `dayzSettings.xml`, by the `maxcores` and `reservedcores` parameters

### speedhackDetection
- **Type**: `Numeric`
- **Value**: `1-10`, can be float
- **Description**: enable speedhack detection; `1` is strict, `10` is benevolent

### networkRangeClose
- **Type**: `Numeric`
- **Default**: `20`
- **Description**: network bubble distance for spawn of close objects with items in them (e.g. backpacks), set in meters.

### networkRangeNear
- **Type**: `Numeric`
- **Default**: `150`
- **Description**: network bubble distance for spawn (despawn +10%) of near inventory items objects, set in meters.

### networkRangeFar
- **Type**: `Numeric`
- **Default**: `1000`
- **Description**: network bubble distance for spawn (despawn +10%) of far objects (other than inventory items), set in meters.

### networkRangeDistantEffect
- **Type**: `Numeric`
- **Default**: `4000`
- **Description**: network bubble distance for spawn of effects (currently only sound effects), set in meters.

### networkObjectBatchSend
- **Type**: `Numeric`
- **Description**: number of objects within a player's network bubble that are sent to be created within a server frame

### networkObjectBatchCompute
- **Type**: `Numeric`
- **Description**: number of objects within a player's network bubble that are processed to check if it already exists for the player within a server frame

### defaultVisibility
- **Type**: `Numeric`
- **Description**: highest terrain render distance on server (if higher than `viewDistance=` in DayZ client profile, clientside parameter applies)

### defaultObjectViewDistance
- **Type**: `Numeric`
- **Description**: highest object render distance on server (if higher than `preferredObjectViewDistance=` in DayZ client profile, clientside parameter applies)

### disableBaseDamage
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: set to 1 to disable damage/destruction of fence and watchtower

### disableContainerDamage
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: set to 1 to disable damage/destruction of tents, barrels, wooden crate and seachest

### disableRespawnDialog
- **Type**: `Numeric`
- **Value**: `0-1`
- **Description**: set to 1 to disable the respawn dialog (new characters will be spawning as random)

### pingWarning
- **Type**: `Numeric`
- **Description**: set to define the ping value from which the initial yellow ping warning is triggered (value in milliseconds)

### pingCritical
- **Type**: `Numeric`
- **Description**: set to define the ping value from which the red ping warning is triggered (value in milliseconds)

### MaxPing
- **Type**: `Numeric`
- **Description**: set to define the ping value from which a player is kicked from the server (value in milliseconds)

### serverFpsWarning
- **Type**: `Numeric`
- **Description**: set to define the server fps value under which the initial server fps warning is triggered (minimum value is 11)