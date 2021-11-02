import chalk, { Chalk } from 'chalk'
// import { execSync } from 'child_process'

import EMOJIS from './constants/emojis'
import SYMBOLS from './constants/symbols'
import * as T from './types'

class Bahle implements T.Bhala {
  // prettier-ignore
  constructor(
    public readonly EMO = EMOJIS,
    public readonly SYM = SYMBOLS
  ) {
    // execSync(`pwsh -c $OutputEncoding = [console]::InputEncoding = [console]::OutputEncoding = New-Object System.Text.UTF8Encoding`)
    // console.log(`constructor()`)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private generateOutput(message: string, args: any[], colorize: Chalk): string | undefined {
    if (message === undefined) {
      return undefined
    }

    const input = `${message}`
    const outputChunks: string[] = []
    const maybeIcon: string | T.OutputOptions | undefined = args[0]
    const hasIcon: boolean = maybeIcon !== undefined && typeof maybeIcon === 'string' && maybeIcon.length > 0

    if (hasIcon) {
      const coloredIcon: string = colorize(maybeIcon)
      outputChunks.push(coloredIcon)
    }

    const coloredInput: string = colorize(`${input}`)
    outputChunks.push(coloredInput)

    const output = outputChunks.join(` `)

    return output
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public debug(message: string, ...args: any[]): void {
    const output = this.generateOutput(message, args, chalk.gray)

    // eslint-disable-next-line no-console
    console.debug(output)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(message: string, ...args: any[]): void {
    const output = this.generateOutput(message, args, chalk.red)

    // eslint-disable-next-line no-console
    console.error(output)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public info(message: string, ...args: any[]): void {
    const output = this.generateOutput(message, args, chalk.blue)

    // eslint-disable-next-line no-console
    console.info(output)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public log(message: string, ...args: any[]): void {
    const output = this.generateOutput(message, args, chalk.green)

    // eslint-disable-next-line no-console
    console.log(output)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public warn(message: string, ...args: any[]): void {
    const output = this.generateOutput(message, args, chalk.yellow)

    // eslint-disable-next-line no-console
    console.warn(output)
  }
}

const bhala = new Bahle()
export default bhala
module.exports = bhala
