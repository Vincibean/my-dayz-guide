# Install a Local DayZ Server

Here we will see how to install and set up a DayZ Standalone server on a Windows computer or server.


## Prerequisites
- Windows computer/server
  - with [Steam](https://store.steampowered.com/) installed
- Steam account

## Install Local DayZ Server
The first step is downloading the server files. This can easily be done through Steam.

1. Fire up Steam
2. Go to your `Library`
3. At the top where it says `Games` change that to `Tools`
4. You'll see `DayZ server` among the results. Select it
5. Click `Install`
6. You'll notice on your desktop there'll be a shortcut to launch the server

::: warning
Don't launch the DayZ server yet!
:::

## Local DayZ Server Initialization

1. Open up your File Explorer
2. Move to the Dayz Server directory

::: info
The DayZ Server directory should be something along the lines of:

`C:\Program Files (x86)\Steam\steamapps\common\DayZServer`.

In the remainder of this guide we will assume that this is where your DayZ Server directory is.
:::

::: info
This is what you would see is if you were looking at the file structure on a remote server; 
:::

3. Create a new text file; call it `start.bat`
4. Using your favorite text editor, paste this into your `start.bat` file:

```batch
@echo off
:start
::Server name (This is just for the bat file)
set serverName="DayZ Server Name"
::Server files location
set serverLocation="C:\Program Files (x86)\Steam\steamapps\common\DayZServer"
::Server Port
set serverPort=2302
::Server config
set serverConfig=serverDZ.cfg
::Logical CPU cores to use (Equal or less than available)
set serverCPU=2
::Sets title for terminal (DONT edit)
title %serverName% batch
::DayZServer location (DONT edit)
cd "%serverLocation%"
echo (%time%) %serverName% started.
::Launch parameters (edit end: -config=|-port=|-profiles=|-doLogs|-adminLog|-netLog|-freezeCheck|-filePatching|-BEpath=|-cpuCount=)
start "DayZ Server" /min "DayZServer_x64.exe" -config=%serverConfig% -port=%serverPort% -profiles=config -cpuCount=%serverCPU% -dologs -adminlog -netlog -freezecheck
::Time in seconds before kill server process (14400 = 4 hours)
timeout 14390
taskkill /im DayZServer_x64.exe /F
::Time in seconds to wait before..
timeout 10
::Go back to the top and repeat the whole cycle again
goto start
```

Here is an updated version:

```batch
@echo off
:start
::Server files location
set serverLocation="C:\servers\dayzserver"
::Server Port
set serverPort=2302
::Server config
set serverConfig="C:\servers\dayzserver\serverDZ.cfg"
::Server profile
set serverProfile="C:\servers\dayzserver\PROFILENAME"
::Logical CPU cores to use (Equal or less than available)
set serverCPU=4
::DayZServer location (DONT edit)
cd "%serverLocation%"
echo (%time%) started.
::Launch parameters (edit end: -config=|-port=|-profiles=|-doLogs|-adminLog|-netLog|-freezeCheck|-filePatching|-BEpath=|-cpuCount=)
start "DayZ Server" /min "DayZServer_x64.exe" -profiles=%serverProfile% -config=%serverConfig% -port=%serverPort% -cpuCount=%serverCPU% -dologs -adminlog -netlog -freezecheck
```

::: tip
Don't worry if you don't have a `serverDZ.cfg` in your DayZ Server directory; we're going to create one in just a minute.
:::

## Local DayZ Server Configuration
The config file `serverDZ.cfg` sets all of the parameters that the server needs in order to know how to behave.

Here is a possible (working!) example:

```text
/////////////////////
// Main parameters //
/////////////////////
hostname = "DayZ Server Name";	// Server name
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
lightingConfig = 0;             // 0 for brighter night setup, 1 for darker night setup
 
serverTime="SystemTime";        // Initial in-game time of the server. "SystemTime" means the local time of the machine. Another possibility is to set the time to some value in "YYYY/MM/DD/HH/MM" format, f.e. "2015/4/8/17/23" .
serverTimeAcceleration=6;       // Accelerated Time (value 0-24)// This is a time multiplier for in-game time. In this case, the time would move 24 times faster than normal, so an entire day would pass in one hour.
serverNightTimeAcceleration=4;  // Accelerated Nigh Time - The numerical value being a multiplier (0.1-64) and also multiplied by serverTimeAcceleration value. Thus, in case it is set to 4 and serverTimeAcceleration is set to 2, night time would move 8 times faster than normal. An entire night would pass in 3 hours.
serverTimePersistent=0;         // Persistent Time (value 0-1)// The actual server time is saved to storage, so when active, the next server start will use the saved time value.
 
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

adminLogPlayerHitsOnly = 0;		// 1 - log player hits only / 0 - log all hits ( animals/infected )
adminLogPlacement = 0;			// 1 - log placement action ( traps, tents )
adminLogBuildActions = 0;		// 1 - log basebuilding actions ( build, dismantle, destroy )
adminLogPlayerList = 0;			// 1 - log periodic player list with position every 5 minutes

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
//disableRespawnDialog = 0;             // set to 1 to disable the respawn dialog (new characters will be spawning as random)

pingWarning = 200;              // set to define the ping value from which the initial yellow ping warning is triggered (value in milliseconds)
pingCritical = 250;             // set to define the ping value from which the red ping warning is triggered (value in milliseconds)
MaxPing = 300;                  // set to define the ping value from which a player is kicked from the server (value in milliseconds)
serverFpsWarning = 15;          // set to define the server fps value under which the initial server fps warning is triggered (minimum value is 11)
```

::: warning
If you haven't changed any of the settings so far, then make sure that the config file is save in the same folder as the `start.bat` file.

Ideally, this should be the following folder:

`C:\Program Files (x86)\Steam\steamapps\common\DayZServer`
:::

## Server profile
When the server starts up it's going to create a folder (whose name depends on what you set as argument to
the `-profiles` parameter) and within that folder it's going
to put your log files.

Also, very importantly, this is where you are eventually going to put
the files that will allow you to be recognized as an admin; in other words, that's where your server
will look in order to verify your claim to be an admin.

## Run your Local DayZ Server

Double click on the start button; this will fire up your local DayZ server.
You will get a little window with some logs.

## Join your Local DayZ Server

1. Fire up the DayZ launcher
2. Go to `Servers`
3. Go to `LAN`
4. Click on `Join`
5. Congrats! You are now playing on your own local DayZ server!

## Local DayZ Server or DayZ Community Offline Mode?
[DayZ Community Offline Mode](https://github.com/Arkensor/DayZCommunityOfflineMode) is brilliant for quickly getting into the game so you can have a look around, spawn things in and generally explore, but if you want to have a genuine DayZ experience you need to run your
own server locally. 

---

## Other useful links
- [Installing and setting up a DayZ Standalone server on Windows server (2016 Guide)](https://write.corbpie.com/installing-and-setting-up-a-dayz-standalone-server-on-windows-server-2016-guide/)
- [Installing and setting up a DayZ Standalone server on Windows server (Updated Guide)](https://write.corbpie.com/dayz-server-setup-and-install-on-windows-server-2019-with-steamcmd/)
- [Server Configuration page on Bohemia Interactive's official Wiki](https://community.bistudio.com/wiki/DayZ:Server_Configuration)
- [The DayZ Server Owner HowTo and FAQ](https://www.reddit.com/r/dayz/comments/9hamlp/the_dayz_server_owner_howto_and_faq/)