
#----------------------------------------------------------------Server principal
Configurar el acceso ssh en el repositorio
Hacer commit y push
Clonar el repositorio en el server principal

Script para hacer un service:

sudo nano /etc/systemd/system/UpdateServerSegucom.service

-----------------------------------------
[Unit]
Description=Respaldo Segucom Node.js Application
After=network.target

[Service]
ExecStart=/usr/bin/node /home/sermex-segu2/Update_server_service/index.js
WorkingDirectory=/home/sermex-segu2/Update_server_service
Restart=always
User=sermex-segu2
Group=segucom
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
# Si estás usando pm2, el comando sería algo como:
# ExecStart=/usr/bin/pm2 start /home/sermex-segu/BackendSegucom/index.js --name backendsegucom

[Install]
WantedBy=multi-user.target
-----------------------------------------

sudo systemctl daemon-reload
sudo systemctl enable UpdateServerSegucom.service
sudo systemctl start UpdateServerSegucom.service
sudo systemctl stop UpdateServerSegucom.service
sudo systemctl restart UpdateServerSegucom.service
sudo systemctl status UpdateServerSegucom.service


/home/sermex-segu/Respaldo_segucom/index.js