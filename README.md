<p align="center">
  <a href="https://yarnpkg.com/">
    <img alt="bhala" src="https://github.com/ivangabriele/bhala/blob/master/assets/logo.svg?raw=true" width="480">
  </a>
</p>

<p align="center">
  Pretty (!), powerful and highly customizable Node.js logger.
</p>

---

<p align="center">
**⚠️ WORK IN PROGRESS // DO NOT USE**
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

A common proposed practice is to use the `β` character to reference to **bahla** library.

## Settings

## API

### Contants

#### `EMO`

#### `SYM`

### Methods

All method `options` can be customized globally

#### `debug()`

```ts
β.log(message: string, isColorless?: boolean, options)
β.log(message: string, icon?: string, isColorless?: boolean)
```

#### `error()`

```ts
β.log(message: string, isColorless?: boolean, options)
β.log(message: string, icon?: string, isColorless?: boolean)
```

#### `info()`

```ts
β.log(message: string, isColorless?: boolean, options)
β.log(message: string, icon?: string, isColorless?: boolean)
```

#### `log()`

```ts
β.log(message: string, isColorless?: boolean, options)
β.log(message: string, icon?: string, isColorless?: boolean)
```

#### `warn()`

```ts
β.log(message: string, options: OutputOptions)
β.log(message: string, icon?: string, isColorless?: boolean)
```

**Examples**

```ts
β.log("Some")
// Output: 
```

### Options

#### `OutputOptions`

```ts
type OutputOptions = {
  isColorless?: boolean
}
```
