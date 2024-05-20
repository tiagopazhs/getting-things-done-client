# Getting things done

This is the front-end of Getting things done.
A project based in the book "The art of stress-free productivity" that is the method GTD of David Allen to personal productivity methodology that redefines how we approach our life and work.

![71B4ln9+X+L _SY466_](https://github.com/tiagopazhs/getting-things-done-client/assets/81580990/20eb368c-dfc4-4163-8440-5a898d8869bc)


❗**NOTE**: The content related to productivity and stress management on this website is based on the personal interpretation of David Allen's book "Getting Things Done." While I have studied and been inspired by Allen's techniques and he himself has encouraged the creation of this project, I don't have direct affiliation with the author or his work. I recommend users consult the original book for a comprehensive understanding of the methodologies.

See more on: https://gettingthingsdone.com/

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
