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

## Extensions: new product requirements

1. Return a list of all the book titles in lower case.
2. Return #1 filtered by year again.
3. Return the array of books with the author name converted to their initials.
4. Return an object with author names pointing to their books. The books should
   no longer have author name.
