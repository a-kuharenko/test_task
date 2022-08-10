import { createLogger, format, transports } from 'winston';

const { combine, timestamp, colorize, errors, printf } = format;

const print = printf((info) => {
  const { timestamp, level, message, stack } = info;
  const log = `[${timestamp}] ${level}: ${message}`;

  return stack ? `${log}\n${stack}` : log;
});

const logger = createLogger({
  level: 'debug',
  format: combine(errors({ stack: true }), colorize(), timestamp(), print),
  transports: [new transports.Console()]
});

export const logInfo = (msg: string) => logger.info(msg);

export const logError = (error: unknown) => logger.error(error);
