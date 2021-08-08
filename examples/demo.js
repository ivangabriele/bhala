const β = require('..')

β.debug(`This is a debug.`)
β.debug(`This is a debug with a symbol.`, β.SYM.CHECK_MARK)
β.debug(`This is a debug with an emoji.`, β.EMO.ROCKET)

β.error(`This is an error.`)
β.error(`This is an error with a symbol.`, β.SYM.CHECK_MARK)
β.error(`This is an error with an emoji.`, β.EMO.X)

β.info(`This is an info.`)
β.info(`This is an info with a symbol.`, β.SYM.CHECK_MARK)
β.info(`This is an info with an emoji.`, β.EMO.INFORMATION_SOURCE)

β.log(`This is a log.`)
β.log(`This is a log with a symbol.`, β.SYM.CHECK_MARK)
β.log(`This is a log with an emoji.`, β.EMO.ROCKET)

β.warn(`This is a warning.`)
β.warn(`This is a warning with a symbol.`, β.SYM.CHECK_MARK)
β.warn(`This is a warning with an emoji.`, β.EMO.WARNING)
