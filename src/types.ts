export type OutputOptions = {
  isColorless?: boolean
}

export interface Bahla {
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
