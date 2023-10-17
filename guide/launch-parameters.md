# Launch Parameters

Here is an example `batch` file with properly set launch parameters:

```batch
@echo off
:start
::Server files location
set serverLocation="C:\Program Files (x86)\Steam\steamapps\common\DayZServer"
::Server Port
set serverPort=2302
::Server config
set serverConfig=serverDZ.cfg
::Server profile
set serverProfiles=profiles
::Logical CPU cores to use (Equal or less than available)
set serverCPU=4
:: Go to DayZServer location
cd "%serverLocation%"
::Launch parameters (edit end: -profiles=|-config=|-port=|-cpuCount=|-doLogs|-adminLog|-netLog|-freezeCheck|-filePatching|-BEpath=)
start "DayZ Server" /min "DayZServer_x64.exe" -config=%serverConfig% -port=%serverPort% -profiles=%serverProfiles% -cpuCount=%serverCPU% -dologs -adminlog -netlog -freezecheck
```

## Supported parameters

### `-config=serverDZ.cfg`
Selects the Server Config File

### `-port=2302`
Port to have dedicated server listen on

### `-profiles=C:\Users\%USER%\Documents\DayZServer`
Path to the folder containing server profile. By default, server logs are written to server profile folder. Logs/dumps/etc will be created there, along with BattlEye/BEC/Rcon related files. Windows Environment variables are supported (E.g. `%userprofile%`).

### `-doLogs`
Enables all log messages in the server RPT file

### `-adminLog`
Enables the admin log

### `-netLog`
Enables the network traffic logging

### `-freezeCheck`
Stops the server when frozen for more than 5 min and create a dump file

### `-filePatching`
Ensures that only PBOs are loaded and NO unpacked data.

### `-BEpath=`
Sets a custom path to the Battleye files

### `-cpuCount=`
Sets the number of logical CPU cores to use for parallel tasks processing. It should be less or equal than the numbers of available cores.

### `-limitFPS=`
Limits server FPS to specified value (current max is 200) to lower CPU usage of low population servers.

### `-mod=<string>`
Loads the specified sub-folders for different mods. Separated by semi-colons. Absolute path and multiple stacked folders are possible.

#### `-serverMod=<string>`
Loads the specified sub-folders for different server-side (not broadcasted to clients) mods. Separated by semi-colons. Absolute path and multiple stacked folders are possible.

### `-storage=`
Defines custom root folder for storage location.

---

## Other useful links
- [Server Configuration page on Bohemia Interactive's official Wiki](https://community.bistudio.com/wiki/DayZ:Server_Configuration)