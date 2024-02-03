# Permissions

To allow manipulation of server directories from a different machine via Samba, we must set permissions correctly.

First, SSH into the server with this command:

`ssh space@sgd-server`

Next, run this command to grant read, write, and execution permissions to all Minecraft server directories:

`sudo chown crafty:crafty /var/opt/minecraft -R`

After transferring any files, we must give permission back to Crafty to start the server by running this command:

`sudo chown crafty:crafty /var/opt/minecraft -R`