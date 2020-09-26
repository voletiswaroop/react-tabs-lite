# react-easy-tabs

> This component enables developers to add any content/text or even any component inside tabpanels and by default this component comes with fontawesome icons support

[![NPM](https://img.shields.io/npm/v/react-easy-tabs.svg)](https://www.npmjs.com/package/react-easy-tabs)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-easy-tabs
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-easy-tabs'
import 'react-easy-tabs/dist/index.css'

class Example extends Component {
  render() {
    return (
      <EasyTabs defaultSelected={0}>
        <section dataicon='fas fa-search' title='Tab one'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </section>
        <section dataicon='fas fa-search' title='Tab two'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </section>
      </EasyTabs>
    )
  }
}
```

## Props

## License

MIT © [voletiswaroop](https://github.com/voletiswaroop)
