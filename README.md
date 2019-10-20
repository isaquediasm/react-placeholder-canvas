# react-placeholder-canvas [![Build Status][build-badge]][build]

A component that provides a canvas to create your loading placeholders no matter the shape.

  - [Usage](#usage)
  - [API](#api)
    - [Placeholder.Wrapper](#placeholderwrapper)
    - [Placeholder.Line](#placeholderline)
  - [Contributing](#contributing)
  - [License](#license)
  - 
## Usage

First, install the `react-placeholder-canvas` module:

`npm install react-placeholder-canvas --save`

or install with yarn

`yarn add react-placeholder-canvas`

## API

- `lines` (Array): an array of objects containing the lines to be drawn
  - `height` (Number): height of the line
  - `intervals` (Array): intervals that will be drawn in the line
- `height` (Object) optional: sets a max-height to the placeholder wrapper.

```js
import Placeholder from 'react-pladeholder-canvas';

function PostPlaceholder() {
  return (
    <Placeholder.Wrapper>
      <Placeholder.Line height={10} intervals={[[0, 5], [7, 50]]} />
      <Placeholder.Line height={10} intervals={[[0, 5]]} />
      <Placeholder.Line height={10} intervals={[[0, 5], [7, 48]]} />
      <Placeholder.Line height={10} intervals={[[0, 5]]} />
      <Placeholder.Line height={10} intervals={[[0, 5], [7, 47]]} />
      <Placeholder.Line height={10} />
      <Placeholder.Line height={10} intervals={[[7, 48]]} />
    </Placeholder.Wrapper>
  )
}
```

Result:<br/>
![](demo.gif)
<br />

### Placeholder.Wrapper
| props  | type   | description                                                                         |
| ------ | ------ | ----------------------------------------------------------------------------------- |
| height | Number | Total height of the container. By default it will be the sum of all line's heights. |
| style  | Object | Any custom css styling                                                              |

### Placeholder.Line
| props     | type         | description                                                                                                                                                                                                                                                                       |
| --------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| height    | Number       | Define the height in `px` of the line to be draw                                                                                                                                                                                                                                  |
| intervals | Array[Array] | List of intervals to be drawn in the line, from a start to an end point in percentage `%`. If nothing is provided, an empty line will be drawn. <br /> For example, `[[0, 10], [15, 20]]` will draw a lime from 0 to 10% of the container width and from 15 to 20%, respectively. |
| style     | Object       | Any custom css styling                                                                                                                                                                                                                                                            |




## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://travis-ci.org/isaquediasm/react-placeholder-canvas.svg?branch=maste
[build]: https://travis-ci.org/isaquediasm/react-placeholder-canvas
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/jest-glamor-react.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/jest-glamor-react
[version-badge]: https://img.shields.io/npm/v/jest-glamor-react.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-glamor-react
[downloads-badge]: https://img.shields.io/npm/dm/jest-glamor-react.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=jest-glamor-react&from=2016-04-01
