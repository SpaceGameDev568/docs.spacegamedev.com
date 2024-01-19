# Server is unreachable

This page will cover scenarios that have occurred in the past that have resulted in the server being unreachable. It will also explain how to recover from such scenarios

## Router has changed

<b>Criteria:</b>

* Server has moved physical locations
* <b>OR</b>
* Router has been replaced

If the server is unreachable after the router has changed, it may be due to an incorrect static ip being set and/or an incorrect default gateway.

<b>What to do:</b>

Check the current default gateway address on a windows machine that has DHCP enabled by running

`ipconfig /all`

in a command prompt window. Find "Ethernet adapter Ethernet" or the Wi-fi adapter currently in use. Look at the `Default Gateway` field. If it has changed, make a note of the new address. Open the server's built-in TTY (not over SSH) and enter the command 

`sudo nano /etc/netplan/00-installer-config.yaml`

Edit the field called `routes` and change the `via` field to the current default gateway we retrieved from the Windows IP config. Now change the `addresses` field to match the first 3 octets of the default gateway, and the last octet to either 165 or 245, however, it can be anything else if those aren't available. Press `ctrl + o`, `y` to save, and `x` to exit GNU Nano.

Enter the command

`sudo netplan apply`

then

`sudo reboot now`

Then on another device go to the [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com/f4ac1ea56a1abfffac1aec88f348b5c8/settings/devices/profile-settings/default/edit/split-tunnels/exclude/exclude_office_ips_disabled),
under `Settings -> WARP Client -> Device Settings/Profile Settings/Default -> Split Tunnels/Manage`

Add a Selector of type "IP Address" and set the Value to the IP address of the server. Repeat this for the default gateway address. Now go to any devices connected to the NAS, disconnect from each Samba Share, and add the shares back with the new address.

The server should now be accessible!