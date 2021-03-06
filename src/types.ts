export type OutputOptions = {
  isColorless?: boolean
}

export interface Bhala {
  debug(...messages: string[]): void
  error(...messages: string[]): void
  event(...messages: string[]): void
  info(...messages: string[]): void
  log(...messages: string[]): void
  success(...messages: string[]): void
  warn(...messages: string[]): void
}
