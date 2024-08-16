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
      alt="MIT Licence"
      src="https://img.shields.io/github/license/ivangabriele/bhala?style=for-the-badge"
    />
  </a>
  <a href="https://www.npmjs.com/package/bhala">
    <img
      alt="NPM Version"
      src="https://img.shields.io/npm/v/bhala?style=for-the-badge"
    />
  </a>
  <a href="https://github.com/ivangabriele/bhala/actions?query=branch%3Amain+workflow%3ACheck++">
    <img
      alt="Check Workflow Status"
      src="https://img.shields.io/github/actions/workflow/status/ivangabriele/bhala/check.yml?label=CI&style=for-the-badge"
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
  - [Methods](#methods)
    - [`debug()`](#debug)
    - [`error()`](#error)
    - [`event()`](#event)
    - [`info()`](#info)
    - [`log()`](#log)
    - [`success()`](#success)
    - [`warn()`](#warn)

## Install

```sh
npm i -E bhala
```

or:

```sh
yarn add -E bhala
```

## Usage

```js
import { B } from 'bhala'

B.log('Here is a wonderful log.')
B.event('Here is a wonderful event.')
```

## API

### Contants

### Methods

#### `debug()`

```ts
B.debug(...messages: string[])
```

#### `error()`

```ts
B.error(...messages: string[])
```

#### `event()`

```ts
B.event(...messages: string[])
```

#### `info()`

```ts
B.info(...messages: string[])
```

#### `log()`

```ts
B.log(...messages: string[])
```

#### `success()`

```ts
B.success(...messages: string[])
```

#### `warn()`

```ts
B.warn(...messages: string[])
```
