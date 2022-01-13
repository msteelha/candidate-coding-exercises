## This exercise is meant to showcase your ability to fully implement a mock that requires touching an API

Your exercise is to create a website that displays the "Image of the Day" from NASA's APOD API, as well as allow a user to enter a number to see a random selection of images, or select a specific date to see the image for that day. Review the three mock images and GIF in the `mock` folder for an example of what we expect. We do not expect your site to perfectly match the example, it is meant as a mock.

You may complete this exercise with any technology that you wish; eg, React, Vue, Angular, Svelte, whatever floats your boat. The important piece is that at the end you hand us a fully realized website. We expect to be able to pull your code, read your `README.md`, and run your code locally. You may also host your code and give us a link to it if you would like, but we will need to review your code as well.

To start, generate your own api key via [NASA's API Portal](https://api.nasa.gov/), then, review the [APOD API](https://api.nasa.gov/#apod) and create the previously described site.

### Acceptance Criteria
- the user may enter an image count OR a date, when one is used the other should be erased
- the API fails on the selection of a future date, so do not allow users to select a future date
- the site must work on screens as small as 400px (mobile view) and also work when full screened on a laptop (say 1600px)
- this does _not_ need to be pixel perfect, but the solution must resize in a sensible manner and resize smoothly
- you do not need to add extensive unit tests, but you must have at least one unit test showing that your root (`App`) component renders
- if you add any children components, they should also have at least one unit test
