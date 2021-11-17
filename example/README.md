# react-tabs-lite

> This component enables developers to add any content/text or even any component inside tabpanels and by default this component comes with fontawesome icons support

[![NPM](https://img.shields.io/npm/v/react-tabs-lite.svg)](https://www.npmjs.com/package/react-tabs-lite)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tabs-lite
```

## Demo

[Click here](http://voletiswaroop.github.io/react-tabs-lite/) for Live Demo

## Usage

- User has to import `EasyTabs` from 'react-tabs-lite' to use the react-tabs-lite component.
- To get default styles import `'react-tabs-lite/dist/index.css'` file.

| Prop                                      | Description                                                                               | Default   |
| ----------------------------------------- | ----------------------------------------------------------------------------------------- | --------- |
| [***section***] _[element]_               | User can change the `section` element as per the requirement                              | 'section' |
| [**_CustomComponent_**](#customComponent) | User can import any `customComponent` and that has to be wrapped with `<section>` element |

## Basic Example

```jsx
import React, { Component } from 'react'
import EasyTabs from 'react-tabs-lite'
import 'react-tabs-lite/dist/index.css'
import CustomComponent from './customComponent'

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

#### CustomComponent

```jsx
import React, { Component } from 'react'
import EasyTabs from 'react-tabs-lite'
import 'react-tabs-lite/dist/index.css'
import CustomComponent from './customComponent'

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
        <section dataicon='fas fa-search' title='Custom Component'>
          <CustomComponent />
        </section>
      </EasyTabs>
    )
  }
}
```

## Props

| Prop                               | Description                                                           | Default         |
| ---------------------------------- | --------------------------------------------------------------------- | --------------- |
| [***defaultSelected***] _[number]_ | This option allows the users to select `default focus tab`            | 0               |
| [***dataicon***] _[string]_        | This option allows the users to add `font awesome` icon for tab title | 'fas fa-search' |
| [***title***] _[string]_           | This option allows the users to add `title` for the Tab item          |

## Contributing

This is a new project and contributions are welcome so feel free to [open an issue](https://github.com/voletiswaroop/react-tabs-lite/issues) or fork and create a pull request. Collaborators are also welcome - please send an email to voleti.swaroop@gmail.com.

## License

MIT © [voletiswaroop](https://github.com/voletiswaroop)
