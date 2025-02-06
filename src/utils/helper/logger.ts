type LogLevel = "info" | "warn" | "error" | "debug";

interface LogMessage {
  message: string;
  timestamp: string;
  level: LogLevel;
  context?: Record<string, any>;
}

const Colors = {
  reset: "\x1b[0m",
  // Level colors
  info: "\x1b[36m", // Cyan
  warn: "\x1b[33m", // Yellow
  error: "\x1b[31m", // Red
  debug: "\x1b[35m", // Magenta
  // Component colors
  timestamp: "\x1b[90m", // Gray
  context: "\x1b[32m", // Green
} as const;

class Logger {
  private static formatMessage(logMessage: LogMessage): string {
    const { timestamp, level, message, context } = logMessage;
    const contextString = context
      ? `\n${Colors.context}Context: ${JSON.stringify(context, null, 2)}${
          Colors.reset
        }`
      : "";

    return `${Colors.timestamp}[${timestamp}]${Colors.reset} ${
      Colors[level]
    }${level.toUpperCase()}:${Colors.reset} ${message}${contextString}`;
  }

  private static log(
    level: LogLevel,
    message: string,
    context?: Record<string, any>
  ) {
    const logMessage: LogMessage = {
      message,
      timestamp: new Date().toISOString(),
      level,
      context,
    };

    const formattedMessage = this.formatMessage(logMessage);

    switch (level) {
      case "info":
        console.log(formattedMessage);
        break;
      case "warn":
        console.warn(formattedMessage);
        break;
      case "error":
        console.error(formattedMessage);
        break;
      case "debug":
        console.debug(formattedMessage);
        break;
    }

    // You could extend this to save logs to a file or send them to a logging service
  }

  static info(message: string, context?: Record<string, any>) {
    this.log("info", message, context);
  }

  static warn(message: string, context?: Record<string, any>) {
    this.log("warn", message, context);
  }

  static error(message: string, context?: Record<string, any>) {
    this.log("error", message, context);
  }

  static debug(message: string, context?: Record<string, any>) {
    if (process.env.NODE_ENV !== "production") {
      this.log("debug", message, context);
    }
  }
}

export default Logger;
