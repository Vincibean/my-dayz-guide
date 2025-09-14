# Local DayZ Server (using SteamCMD)

Here we will see how to install and set up a DayZ Standalone server on a Windows computer or server using [SteamCMD](https://store.steampowered.com/).


## Prerequisites
- A Microsoft Windows computer/server
- [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)
- [DirectX](https://www.microsoft.com/en-us/download/details.aspx?id=35)
- [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/en-gb/download/details.aspx?id=48145)

::: tip
All of the software above can be installed with [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/)
```powershell
winget install -e --id=Valve.SteamCMD
winget install -e --id Microsoft.DirectX
winget install -e --id Microsoft.VCRedist.2015+.x64
```
:::

## Installation
We need a place for the server to live. Creating a folder under `C:` doesn't need any privilege, so let's create a new folder there. 

```powershell
cd C:
mkdir servers
```

Let's create a new script to install out DayZ server. Let's call it `installdayzserver.bat` (so its full path will be: `C:\servers\installdayzserver.bat`).

Its content will be:
```powershell
@echo off
set "serverpath=C:\servers\dayzserver"
set /p login=Steam Login: 
echo.
set /p pass=Steam Password:
echo.
%steamcmdpath%\steamcmd +force_install_dir "%serverpath%" +login %login% %pass% +app_update 223350 validate +quit
```

Then let's run it. 

::: warning 
The script needs third party verification. If you have the Steam app installed on your phone, you will get an authorization request from it.
:::

The script will take care of installing (and updating) the server files.

## Initialization

1. Open up your File Explorer
2. Move to the DayZ Server directory

::: info
The DayZ Server directory should be something along the lines of:

`C:\servers\dayzserver`.

In the remainder of this guide we will assume that this is where your DayZ Server directory is.
:::

3. Create a new text file; call it `start.bat`
4. Using your favorite text editor, paste this into your `start.bat` file:

```batch
@echo off
:start
::Server files location
set serverLocation="C:\servers\dayzserver"
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

::: tip
See the [Launch Parameters](./launch-parameters) page for more info on the meaning of each parameter.
:::

Don't worry if you don't have a `serverDZ.cfg` in your DayZ Server directory; we're going to create one in just a minute.

## Configuration
The config file `serverDZ.cfg` sets all of the parameters that the server needs in order to know how to behave.

You can find an example [here](./configuration-file#configuration)

::: warning
If you haven't changed any of the settings so far, then make sure that the config file is saved in the same folder as the `start.bat` file.

Ideally, this should be the following folder:

`C:\servers\dayzserver`
:::

## Server profile
When the server starts up it's going to create a folder (whose name depends on what you set as argument to
the `-profiles` parameter) and within that folder it's going to put your log files.

This is also where you are eventually going to put the files that will allow you to be recognized as an admin; 
in other words, that's where your server will look in order to verify your claim to be an admin.

## Start It

Open a new terminal and run the `start.bat` script with:
```powershell
.\start.bat
```
If everything worked correctly you will get a little window with some logs.

## Join It

1. Fire up the DayZ launcher
2. Go to `Servers`
3. Go to `LAN`
4. Click on `Join`
5. Congrats! You are now playing on your own local DayZ server!

## Stop It

Create a new file called `stop.bat`; it will look like this:
```batch
taskkill /f /im DayZServer_x64.exe
```

Then, just like before, open a new terminal and run the `stop.bat` script with:
```powershell
.\stop.bat
```

---

## Other useful links
- [Installing and setting up a DayZ Standalone server on Windows server (Updated Guide)](https://write.corbpie.com/dayz-server-setup-and-install-on-windows-server-2019-with-steamcmd/)
- [The DayZ Server Owner HowTo and FAQ](https://www.reddit.com/r/dayz/comments/9hamlp/the_dayz_server_owner_howto_and_faq/)
