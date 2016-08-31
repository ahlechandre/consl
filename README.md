# Consl
A javascript module that abbreviates the Console methods. 

Nothing more than a quick way to display messages on the console using less characters.

## Install

### NPM
```bash
npm install consl --save-dev
```

### Build
```bash
git clone https://github.com/ahlechandre/consl.git 
cd consl
```

## Usage

```js
import { cl, cw, ce } from 'consl';

cl('Outputs a message to the Console.');
cw('Outputs a warn message to the Console.');
ce('Outputs a error message to the Console.');
```

## Methods 

* `cl -> console.log`
* `cw -> console.warn`
* `ce -> console.error`
* `ci -> console.info`
* `cd -> console.dir`
* `ct -> console.time`
* `cte -> console.timeEnd`
* `ctr -> console.trace`
* `ca -> console.assert`
* `cC -> console.Console`