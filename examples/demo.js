const ß = require('..')

ß.debug(`This is a debug.`)
ß.debug(`This is a debug with a symbol.`, ß.SYM.CHECK_MARK)
ß.debug(`This is a debug with an emoji.`, ß.EMO.ROCKET)

ß.error(`This is an error.`)
ß.error(`This is an error with a symbol.`, ß.SYM.CHECK_MARK)
ß.error(`This is an error with an emoji.`, ß.EMO.X)

ß.info(`This is an info.`)
ß.info(`This is an info with a symbol.`, ß.SYM.CHECK_MARK)
ß.info(`This is an info with an emoji.`, ß.EMO.INFORMATION_SOURCE)

ß.log(`This is a log.`)
ß.log(`This is a log with a symbol.`, ß.SYM.CHECK_MARK)
ß.log(`This is a log with an emoji.`, ß.EMO.ROCKET)

ß.warn(`This is a warning.`)
ß.warn(`This is a warning with a symbol.`, ß.SYM.CHECK_MARK)
ß.warn(`This is a warning with an emoji.`, ß.EMO.WARNING)
