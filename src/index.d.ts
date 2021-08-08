import EMOJIS from './constants/emojis'
import SYMBOLS from './constants/symbols'

declare const Bahle: Bahle.Bahle

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare namespace Bahle {
  export type OutputOptions = {
    isColorless?: boolean
  }

  export interface Bahle {
    EMO: typeof EMOJIS
    SYM: typeof SYMBOLS

    debug(message: string, icon?: string, options?: OutputOptions): void
    debug(message: string, options?: OutputOptions): void

    error(message: string, icon?: string, options?: OutputOptions): void
    error(message: string, options?: OutputOptions): void

    info(message: string, icon?: string, options?: OutputOptions): void
    info(message: string, options?: OutputOptions): void

    log(message: string, icon?: string, options?: OutputOptions): void
    log(message: string, options?: OutputOptions): void

    warn(message: string, icon?: string, options?: OutputOptions): void
    warn(message: string, options?: OutputOptions): void
  }
}

export = Bahle
