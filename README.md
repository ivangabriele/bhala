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
      src="https://img.shields.io/github/workflow/status/ivangabriele/bhala/Test/main?style=flat-square"
    />
  </a>
</p>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [Contants](#contants)
    - [`EMO`](#emo)
  - [Methods](#methods)
    - [`debug()`](#debug)
    - [`error()`](#error)
    - [`event()`](#event)
    - [`info()`](#info)
    - [`log()`](#log)
    - [`success()`](#success)
    - [`warn()`](#warn)
- [Name](#name)

## Install

```sh
npm i -E bhala
```

or:

```sh
yarn add -E bhala
```

## Usage

A not-so-serious proposed practice is to use the `ß` character to reference **bhala** library.

- Linux: DuckDuckGo it!
- macOS: <kbd>Option</kbd> + <kbd>s</kbd>
- Windows: <kbd>Alt</kbd> + <kbd>2</kbd><kbd>2</kbd><kbd>5</kbd>

```js
import ß from 'bhala';

ß.log('Here is a wonderful log.');
ß.event('Here is a wonderful event.');
```

## API

### Contants

#### `EMO`

List of emoji keys that should named like you do in Markdown, i.e.: `computer` for `:computer:`.

### Methods

#### `debug()`

```ts
ß.debug(...messages: string[])
```

#### `error()`

```ts
ß.error(...messages: string[])
```

#### `event()`

```ts
ß.event(...messages: string[])
```

#### `info()`

```ts
ß.warn(...messages: string[])
```

#### `log()`

```ts
ß.log(...messages: string[])
```

#### `success()`

```ts
ß.success(...messages: string[])
```

#### `warn()`

```ts
ß.warn(...messages: string[])
```

## Name

You may wonder why "bhala"? It means "write" in Zulu, which you can learn [how to conjugate][link-bhala] (ngibhala,
ubhala, etc) if you also love learning new languages 😉.

---

[link-bhala]: https://en.wikipedia.org/wiki/Zulu_grammar#Verbs
