import chalk from 'chalk'
import childProcess from 'child_process'
import emoji from 'node-emoji'
import os from 'os'

import * as T from './types'

import type { Chalk } from 'chalk'

class Bhala implements T.Bhala {
  private canEmoji: boolean

  constructor(public readonly EMO = emoji.emoji) {
    this.canEmoji = !this.isCmd() && !this.isCi()
  }

  public debug(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.gray, this.EMO.pushpin, 'debug -')

    // eslint-disable-next-line no-console
    console.debug(output)
  }

  public error(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.red, this.EMO.x, 'error -')

    // eslint-disable-next-line no-console
    console.error(output)
  }

  public event(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.magenta, this.EMO.calendar, 'event -')

    // eslint-disable-next-line no-console
    console.log(output)
  }

  public info(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.cyan, this.EMO.information_source, 'info -')

    // eslint-disable-next-line no-console
    console.info(output)
  }

  public log(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.white, this.EMO.memo, 'log -')

    // eslint-disable-next-line no-console
    console.log(output)
  }

  public success(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.green, this.EMO.heavy_check_mark, 'success -')

    // eslint-disable-next-line no-console
    console.log(output)
  }

  public warn(...messages: any[]): void {
    const output = this.generateOutput(messages, chalk.yellow, this.EMO.warning, 'warning -')

    // eslint-disable-next-line no-console
    console.warn(output)
  }

  private generateOutput(
    messages: any[],
    defaultColorizer: Chalk,
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

  private isCmd(): boolean {
    if (typeof window !== undefined) {
      return false
    }

    if (os.platform() !== 'win32') {
      return false
    }

    try {
      const result = childProcess.spawnSync(`ls`, {
        env: process.env,
        stdio: 'pipe',
      })

      return result.error !== undefined
    } catch (err) {
      return true
    }
  }

  private isCi(): boolean {
    return typeof process !== undefined && typeof process.env !== undefined && process.env.CI !== undefined
  }
}

const bhala = new Bhala()

export default bhala
