# Meal Drop Refresh

This started with original work by Yann Braga while taking his awesome storybook for react course on [newline.co](https://www.newline.co/courses/storybook-for-react-apps/course-introduction)

I decided to see if I could keep up in the course by starting with a fresh new vite app and the latest versions of everything.

A lot of things broke so I learned from reading the new docs at [Storybook](https://storybook.js.org/docs/react/get-started/install) and from some of the packages used in the app. Also from googling and stackoverflow

## Some things that still need to be fixed

react-hooks-helper last published 4 years ago and has a dependency requirement of react@16.8.0-alpha.0. To get things working, I copied the code from the repo and the types from definitely typed into my own hooks/rhh directory and imported from there.

use-dark-mode didn't work either and I can't remember why but @fisch0920/use-dark-mode works as a replacement. The only problem it has is that it uses use-persisted-state (also old and by the developer of use-dark-mode) which has this peer dependency of "react": "^16.8.0 || ^17.0.0 || ^18.0.0" which causes irritating warnings in the terminal every time you do anything with npm in the project. But it works :-)

Looking at what these packages do and how they work, I think it shouldn't be too hard to just write the code to do the job and drop these off from the dependency list. All we are doing with them is storing the user preference for dark/light mode in localstorage and making it available to the react app and storybook.

So getting rid of these two and their peer dependencies is something I'm going to work on.

## Usage

If you wan't to see the demo work on your own dev environment, clone or download the repo and cd into it. Then run the following

Install dependencies

```
npm install
```

Run storybook

```
npm run storybook
```

Run the react app

```
npm run dev
```

Build the react app for production

```
npm run build
```

Build a static version of the storybook

```
npm run build-storybook
```

I have not deployed yet to vercel or netlify so there may be issues in deployment. I'll update once I've gotten past that.

I'm not finished with Yann's course yet. We still have to cover testing and some more story stuff.
