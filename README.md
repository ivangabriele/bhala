<p align="center">
  <a href="https://yarnpkg.com/">
    <img alt="bhala" src="https://raw.githubusercontent.com/ivangabriele/bahla/main/assets/logo.svg" width="480">
  </a>
</p>

<p align="center">
  Pretty (!), powerful and highly customizable Node.js logger.
</p>

---

<p align="center">
  <strong>⚠️ WORK IN PROGRESS // DO NOT USE</strong>
</p>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Usage](#usage)
- [Settings](#settings)
- [API](#api)
  - [Contants](#contants)
    - [`EMO`](#emo)
    - [`SYM`](#sym)
  - [Methods](#methods)
    - [`debug()`](#debug)
    - [`error()`](#error)
    - [`info()`](#info)
    - [`log()`](#log)
    - [`warn()`](#warn)
  - [Options](#options)
    - [`OutputOptions`](#outputoptions)

## Usage

A not-so-serious proposed practice is to use the `ß` character to reference **bahla** library.

- Linux: DuckDuckGo it!
- macOS: <kbd>Option</kbd> + <kbd>s</kbd>
- Windows: <kbd>Alt</kbd> + <kbd>2</kbd><kbd>2</kbd><kbd>5</kbd>

## Settings

## API

### Contants

#### `EMO`

#### `SYM`

### Methods

All method `options` can be customized globally

#### `debug()`

```ts
ß.log(message: string, isColorless?: boolean, options)
ß.log(message: string, icon?: string, isColorless?: boolean)
```

#### `error()`

```ts
ß.log(message: string, isColorless?: boolean, options)
ß.log(message: string, icon?: string, isColorless?: boolean)
```

#### `info()`

```ts
ß.log(message: string, isColorless?: boolean, options)
ß.log(message: string, icon?: string, isColorless?: boolean)
```

#### `log()`

```ts
ß.log(message: string, isColorless?: boolean, options)
ß.log(message: string, icon?: string, isColorless?: boolean)
```

#### `warn()`

```ts
ß.log(message: string, options: OutputOptions)
ß.log(message: string, icon?: string, isColorless?: boolean)
```

**Examples**

```ts
ß.log("Some")
// Output: 
```

### Options

#### `OutputOptions`

```ts
type OutputOptions = {
  isColorless?: boolean
}
```
