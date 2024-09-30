const cron = require('node-cron');
const { exec } = require('child_process');

// Función para ejecutar comandos en el sistema
const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error al ejecutar el comando: ${command}`, error);
                reject(error);
                return;
            }
            console.log(`Comando ejecutado: ${command}`);
            console.log(stdout);
            if (stderr) {
                console.error(stderr);
            }
            resolve();
        });
    });
};

// Tarea programada para ejecutarse todos los domingos a las 04:00 AM
cron.schedule('*/2 * * * *', async () => {
    console.log('Iniciando la actualización del sistema...');

    try {
        // Ejecutar sudo apt update
        await executeCommand('sudo apt update -y');
        console.log('Actualización de paquetes completa.');

        // Ejecutar sudo apt upgrade
        
        await executeCommand('sudo apt upgrade -y');
        console.log('Actualización de paquetes instalada.');

        // Reiniciar el sistema
        await executeCommand('sudo reboot');
        console.log('Reiniciando el sistema...');
        console.log('Goodbye!');
        
    } catch (error) {
        console.error('Ocurrió un error durante la actualización del sistema:', error);
    }
});


console.log('Servicio de actualización automática iniciado. Ejecutará cada domingo a las 04:00 AM.');
