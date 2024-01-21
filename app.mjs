
import chalk from 'chalk';

function imprimirMensajeConEstilo() {
  const mensaje = chalk.italic.bold.bgWhite.black('¡Saludos ingeniero Francisco Núnez!');

  console.log(mensaje);
}

imprimirMensajeConEstilo();
