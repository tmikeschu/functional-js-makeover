# ✨ A FUNctional JavaScript Makeover ✨

From `for` loops to `pipe`lines.

![](https://media.giphy.com/media/3o6wrsNuUBkjdzsntK/giphy.gif)

## Overview

Filtering a collection of items based on a property value is a common task in
any programming language. In one like JavaScript, that task can be accomplished
in a variety of ways. Let's take a classic `for` loop solution and refactor it
using a ["functions first, data last"](http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda)
philosophy.

On this journey, we'll cover FUNctional programming topics such as:

- Currying
- Partial application
- The consequences of argument order
- Higher order functions

## Setup

```shell
git clone https://github.com/tmikeschu/functional-js-makeover.git # or use SSH
cd functional-js-makeover
yarn install
yarn test
```

You should have one failing spec:

```shell
# booksInYear filters an array of books by year
not ok 1 should be equivalent
  ---
    operator: deepEqual
    expected: |-
      [ { title: 'Infinite Jest', author: 'David Foster Wallace', year: 1996 }, { title: 'Fight Club', author: 'Chuck Palahniuk', year:
 1996 } ]
    actual: |-
      undefined
    at: Test.t (/Users/tmikeschu/projects/functional-js-makeover/spec.js:18:5)
    stack: |-
      Error: should be equivalent
  ...

1..1
# tests 1
# pass  0
# fail  1
```
