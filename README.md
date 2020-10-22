# lockabl

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

## Figma
[My prototyping is found here](https://www.figma.com/file/ZLclE4nKM3mKyC30X0zwem/Lockabl?node-id=0%3A1):

## Brand
[The brand CI is from here](https://app.brandmark.io/v3/#logo_data=%7B%22keywords%22%3A%22lock%20bike%22%2C%22id%22%3A%22logo-68eab580-720e-4d32-b6ea-43b303154ff7%22%2C%22layout%22%3A0%2C%22title%22%3A%22LOCKABL%22%2C%22titleFamily%22%3A%22Averta%22%2C%22titleVariant%22%3A%22700italic%22%2C%22titleColor%22%3A%5B%7B%22hex%22%3A%22%23c2f0ff%22%2C%22location%22%3A0%7D%2C%7B%22hex%22%3A%22%23c2f0ff%22%2C%22location%22%3A0%7D%2C%7B%22hex%22%3A%22%23c2f0ff%22%2C%22location%22%3A0%7D%2C%7B%22hex%22%3A%22%23c2f0ff%22%2C%22location%22%3A1%7D%5D%2C%22titleScale%22%3A1.63%2C%22titleLetterSpace%22%3A3%2C%22titleLineSpace%22%3A1.1%2C%22titleBoldness%22%3A0%2C%22titleX%22%3A0%2C%22titleY%22%3A0%2C%22titleAlign%22%3A%22center%22%2C%22slogan%22%3A%22%22%2C%22sloganFamily%22%3A%22Montserrat%22%2C%22sloganVariant%22%3A%22400%22%2C%22sloganColor%22%3A%5B%7B%22hex%22%3A%22%23c2f0ff%22%7D%5D%2C%22sloganScale%22%3A1%2C%22sloganLetterSpace%22%3A0%2C%22sloganLineSpace%22%3A1.1%2C%22sloganBoldness%22%3A0%2C%22sloganAlign%22%3A%22center%22%2C%22sloganX%22%3A0%2C%22sloganY%22%3A0%2C%22icon%22%3Anull%2C%22showIcon%22%3Afalse%2C%22iconScale%22%3A1%2C%22iconColor%22%3A%5B%7B%22hex%22%3A%22%23c2f0ff%22%7D%5D%2C%22iconContainer%22%3Anull%2C%22showIconContainer%22%3Afalse%2C%22iconContainerScale%22%3A1%2C%22iconContainerColor%22%3A%5B%7B%22hex%22%3A%22%23c2f0ff%22%7D%5D%2C%22iconSpace%22%3A1%2C%22iconX%22%3A0%2C%22iconY%22%3A0%2C%22nthChar%22%3A0%2C%22container%22%3Anull%2C%22showContainer%22%3Afalse%2C%22containerScale%22%3A1%2C%22containerColor%22%3A%5B%7B%22hex%22%3A%22%23c2f0ff%22%7D%5D%2C%22containerX%22%3A0%2C%22containerY%22%3A0%2C%22backgroundColor%22%3A%5B%7B%22hex%22%3A%22%232587ec%22%7D%5D%2C%22palette%22%3A%5B%22%232587ec%22%2C%22%23c2f0ff%22%2C%22%23c2f0ff%22%2C%22%23c2f0ff%22%2C%22%23c2f0ff%22%5D%7D)

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

### Run Storybook
```
npm run storybook
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
