import emoji from 'node-emoji'

declare const Bhala: Bhala.Bhala

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare namespace Bhala {
  export type OutputOptions = {
    isColorless?: boolean
  }

  export interface Bhala {
    EMO: typeof emoji.emoji

    debug(...messages: string[]): void
    error(...messages: string[]): void
    event(...messages: string[]): void
    info(...messages: string[]): void
    log(...messages: string[]): void
    success(...messages: string[]): void
    warn(...messages: string[]): void
  }
}

export = Bhala
