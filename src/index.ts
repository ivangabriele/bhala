import { cyan, gray, green, magenta, red, white, yellow } from 'colorette'

import * as T from './types'

import type { Color } from 'colorette'

class Bhala implements T.Bhala {
  private canEmoji: boolean

  constructor() {
    this.canEmoji = !this.isCi()
  }

  public debug(...messages: any[]): void {
    const output = this.generateOutput(messages, gray, '🔧', 'debug -')

    // eslint-disable-next-line no-console
    console.debug(output)
  }

  public error(...messages: any[]): void {
    const output = this.generateOutput(messages, red, '❌', 'error -')

    // eslint-disable-next-line no-console
    console.error(output)
  }

  public event(...messages: any[]): void {
    const output = this.generateOutput(messages, magenta, '📅', 'event -')

    // eslint-disable-next-line no-console
    console.log(output)
  }

  public info(...messages: any[]): void {
    const output = this.generateOutput(messages, cyan, '📢', 'info -')

    // eslint-disable-next-line no-console
    console.info(output)
  }

  public log(...messages: any[]): void {
    const output = this.generateOutput(messages, white, '📝', 'log -')

    // eslint-disable-next-line no-console
    console.log(output)
  }

  public success(...messages: any[]): void {
    const output = this.generateOutput(messages, green, '🎉', 'success -')

    // eslint-disable-next-line no-console
    console.log(output)
  }

  public warn(...messages: any[]): void {
    const output = this.generateOutput(messages, yellow, '🔔', 'warning -')

    // eslint-disable-next-line no-console
    console.warn(output)
  }

  private generateOutput(
    messages: any[],
    defaultColorizer: Color,
    defaultPrefixIcon: string,
    defaultPrefixText: string,
  ): string | undefined {
    if (!Array.isArray(messages) || messages.length === 0) {
      return ''
    }

    const outputChunks: string[] = []
    outputChunks.push(this.canEmoji ? defaultPrefixIcon : defaultColorizer(defaultPrefixText))
    outputChunks.push(...(this.canEmoji ? messages.map(message => defaultColorizer(`${message}`)) : messages))

    const output = outputChunks.join(` `)

    return output
  }

  private isCi(): boolean {
    return typeof process !== undefined && typeof process.env !== undefined && process.env.CI !== undefined
  }
}

const B = new Bhala()

export { B }
