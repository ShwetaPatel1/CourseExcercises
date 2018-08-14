const Logger = require('logplease');

const options = {
    useColors: true,     // Enable colors
    Colors: Logger.Colors.Yellow,
    showTimestamp: false, // Display timestamp in the log message
    showLevel: true,     // Display log level in the log message
    filename: 'logs.txt',      // Set file path to log to a file
    appendFile: true    // Append logfile instead of overwriting
   // Display: true
  };
var logger  = Logger.create('Server Log',options);


    logger.debug(`-----------------------`);
    logger.debug(`Hello Node.js`);
    logger.log(`This is a log message`); // alias for debug()
    logger.info(`Node.js is great!!`);
    logger.warn(`Warning, Warning, I think we have a Warning `);
    logger.error(`Mayday Mayday, we have an error, repeat.. we have an error `);
