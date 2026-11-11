# JavaScript: Image Gallery and Feedback Form

A small multi-page vanilla JavaScript project covering image galleries, browser storage, and form handling.

## Features

### Image gallery
- Renders gallery items from a JavaScript data array
- Opens full-size images in a SimpleLightbox overlay
- Uses reusable markup-generation logic

### Feedback form
- Saves the email and message fields to `localStorage` while the user types
- Restores saved values after a page reload
- Checks that both fields are completed before submission
- Clears the saved draft and resets the form after a valid submission

The form currently logs the submitted data to the browser console. It does not send messages to a backend.

## Technologies

- HTML5 and CSS3
- Vanilla JavaScript (ES Modules)
- Vite
- SimpleLightbox
- Browser `localStorage`

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to create a production build.

## Learning focus

DOM manipulation, event handling, browser storage, form validation, modular JavaScript, and third-party UI libraries.
