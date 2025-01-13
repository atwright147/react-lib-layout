# React Lib Layout

This library provides a layout component for React applications.

## Use the lib

To install the library, run:

```sh
npm i @atwright147/react-layout
```

---

## Development

### Installing Dependencies

To install dependencies using a clean slate, run:

```sh
npm ci
```

### Running the Dev Server

To run the development server, use the following command:

```sh
npm run dev
```

This will start the development server and you can view the application at `http://localhost:5173`.

### Building the Library

To build the library, run:

```sh
npm run build:lib
```

This will create a `dist` folder with the compiled library.

### Storybook

To start Storybook for developing and testing components, run:

```sh
npm run storybook
```

This will start the Storybook server, and you can view the component stories in your browser at `http://localhost:6006`.

### Linting

To lint the codebase, run:

```sh
npm run lint
```

### Type Checking

To check the TypeScript types, run:

```sh
npm run typecheck
```

### Building the Demo

To build the demo site, run:

```sh
npm run build:demo
```

This will compile the TypeScript files and bundle the demo site using Vite. The output will be in the `dist` directory.

### Previewing the Demo

To preview the demo site, run:

```sh
npm run preview
```

This will start the Vite preview server, and you can view the demo site in your browser at `http://localhost:5000`.
