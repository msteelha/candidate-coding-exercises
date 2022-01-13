# React Component building test

Using [the instructions here](https://design.avayacloud.com/components/web/setup-web), download the Neo CSS library, and use the styles found there to build a Button Component based on [the spec provided here](https://design.avayacloud.com/components/web/buttons-web).

This Component should be a React Component that accepts props that render each style or variant according to the examples given on the page above.

For example, the Button should take a property to render the disabled state.

In addition to the above requirements, please write AT LEAST TWO automated tests which are passing for your code.

## Acceptance Criteria

- running `npm start` will start this app and the button component is shown
- the button, when clicked, does something to the page (expected behavior must be noted in your PR)
- the button has a `disabled` prop
- the button has a `variant` prop
- the button has a `onClick` prop
- running `npm test` will run two or more tests that pass
- all tests have good descriptive names
