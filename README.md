# @rickbrown/use-dispatch-with-logger

> a custom react hook which modifies the useReducer hook, to allow console logging of the current and the previous state, whenever the app state changes.

[![NPM](https://img.shields.io/npm/v/@rickbrown/use-dispatch-with-logger.svg)](https://www.npmjs.com/package/@rickbrown/use-dispatch-with-logger) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @rickbrown/use-dispatch-with-logger
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@rickbrown/use-dispatch-with-logger'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [RickBr0wn](https://github.com/RickBr0wn)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
