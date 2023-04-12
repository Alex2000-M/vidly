const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors')

module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.File({ filename: 'exceptions.log' })
      );
    
      winston.rejections.handle(
        new winston.transports.File({ filename: 'rejections.log' })
      );
    
    winston.add(new winston.transports.File({ filename: 'logfile.log' }))
    // winston.add(new winston.transports.MongoDB({ db: 'mongodb://127.0.0.1/vidly'}));

    // const logger = winston.createLogger({
    //     level: 'info',
    //     format: winston.format.json(),
    //     transports: [
    //       new winston.transports.Console(),
    //       new winston.transports.File({ filename: 'logfile.log' })
    //     ]
    //   });
    //   logger.info('it works!!');
}