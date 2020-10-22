# lockabl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

## LogIn Page
Just type anything into the form fields and press the submit button to continue, there's no real validation.

## Testing
I've added an example test file lock.spec.js which creates or checks for a snapshot of the Lock SFC. I've added just one test, but I believe unit tests are important and I didn't want to omit it.

## Storybook
I've added Storybook to this repository to show that I'm in favor of using a component explorer to easier grasp component states. To run storybook, do the following:

```
npm run storybook
```

I've setup the Button component as an example with different modifiers etc.

## What's missing
- Impressum Page (because it's just an example really, but a website needs one)
- Sort functionality on home path
- Some Button functionalities on details page
- Change image / color of lock
- Change title of lock
- Burger Navigation (Because of lack of content)

Obviously this is intended to be a web page, so the note to add links in the browser are just meant to be included if this is going to be launched as an app. That's the only reason I left it in – I had the app in mind.

## NPM Commands

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
