<p align="center">
  <a href="https://yarnpkg.com/">
    <img alt="bhala" src="https://raw.githubusercontent.com/ivangabriele/bhala/main/assets/logo.svg" width="480">
  </a>
</p>

<p align="center">
  Pretty (!), powerful and highly customizable Node.js logger.
</p>

---

<p align="center">
  <a href="https://github.com/ivangabriele/bhala/blob/main/LICENSE">
    <img
      alt="Licence"
      src="https://img.shields.io/github/license/ivangabriele/bhala?style=flat-square"
    />
  </a>
  <a href="https://www.npmjs.com/package/bhala">
    <img
      alt="NPM Version"
      src="https://img.shields.io/npm/v/bhala?style=flat-square"
    />
  </a>
  <a href="https://github.com/ivangabriele/bhala/actions?query=branch%3Amain++">
    <img
      alt="GitHub Workflow Status"
      src="https://img.shields.io/github/workflow/status/ivangabriele/bhala/Test%20&%20Publish/main?style=flat-square"
    />
  </a>
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
- [Name](#name)

## Usage

A not-so-serious proposed practice is to use the `ß` character to reference **bhala** library.

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

## Name

You may wonder why "bhala"? It means "write" in Zulu, which you can learn [how to conjugate][link-bhala] (ngibhala,
ubhala, etc) if you also love learning new languages 😉.

---

[link-bhala]: https://en.wikipedia.org/wiki/Zulu_grammar#Verbs
