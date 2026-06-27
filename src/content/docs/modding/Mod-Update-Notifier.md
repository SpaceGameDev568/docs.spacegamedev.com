---
title: Mod Update Notifier
description: Developer documentation for Mod Update Notifier
---

This page is intended as a guide for developers for configuring Mod Update Notifier options within your own mods.
If you have a question about anything covered here, please ping `spacegamedev` on the Satisfactory Modding Discord server for help.

**Last tested in version:** `Mod Update Notifier v2.5.0`<br/>

## Options

If you haven't already, create a Blueprint Class of type `MenuWorldModule`.
This is where you'll add your configuration variables.

### Support URL

You can specify a URL for a donation button that will be displayed below the changelog when a user clicks on your mod.

**Name:** `ModUpdateNotifier_Support_URL`

**Type:** `String`

**Example value:** `https://buymeacoffee.com/spacegamedev`

### Opt Out

If you don't want MUN to check for updates to your mod, you can opt out.
Make sure to set it to true.

**Name:** `ModUpdateNotifier_OptOut`

**Type:** `Boolean`

**Value:** `true`

## Version tricking

You can trick MUN into determining your mod to be out of date for testing.
To do this, open your mod's generated `.uplugin` file located in your game install location, under

`FactoryGame\Mods\YourModName\YourModName.uplugin`

Change the `SemVersion` and `VersionName` fields of your mod to something older than the latest version on SMR.
You may also need to change the `Version` field to match the major version of the other fields.

![version-tricking.png](../../../assets/images/version-tricking.png)

Save the file and launch the game again.
If everything is working properly, you should see the Mod Update Notifier widget on the Main Menu showing your mod as out-of-date.

![mun-version-tricked-widget.png](../../../assets/images/mun-version-tricked-widget.png)

When you're done, make sure to set the uplugin fields back to their original values to avoid any potential issues.

## Optional: Automatically install MUN alongside your own mod

You can optionally have SMM automatically download and install Mod Update Notifier when your mod is installed or updated.
To do this, you will need to add MUN as a dependency for your mod in Alpakit.
**Note that this will also require MUN to be installed alongside your mod, otherwise SML won't allow the game to launch.**

Open the Unreal Editor if you haven't already, and click the Alpakit Dev button.

![alpakit-dev.png](../../../assets/images/alpakit-dev.png)

Next, click "Edit" on the mod for which you've implemented Mod Update Notifier functionality.
Scroll down to the "Dependencies" section and click the plus icon to add an element.
Set the name of this element to `ModUpdateNotifier` and the "Sem Version" to `^2.3.0` or [whatever the latest version is](https://ficsit.app/mod/ModUpdateNotifier)
(Make sure to include the caret `^` at the beginning to allow newer versions of MUN as it is updated).
Leave "Optional" and "Base Plugin" unchecked.

![dependencies2.png](../../../assets/images/dependencies2.png)