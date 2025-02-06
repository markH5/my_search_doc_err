# Steps to reproduce

<https://github.com/web-infra-dev/rspress/issues/1818>

## Setup 1

Install the dependencies:

```bash
pnpm create rspress@latest
pnpm i react
pnpm i react-dom

pnpm i typescript -D
pnpm i @types/react -D
pnpm i @types/react-dom -D

```

## Setup 2

copy code from doc <https://rspress.dev/guide/advanced/custom-theme#3-custom-home-page-and-404-page>

```tsx
// theme/index.tsx
import Theme, { Search } from 'rspress/theme';

// Use slot
const Layout = () => <Theme.Layout beforeNavTitle={<div>some content</div>} />;
// Custom Home Page
const HomeLayout = () => <div>Home</div>;
// Custom 404 page
const NotFoundLayout = () => <div>404</div>;

export default {
  ...Theme,
  Layout,
  HomeLayout,
  NotFoundLayout,
};

// Custom Search Component
const MySearch = () => <div className="my-search">{Search}</div>;
export { MySearch as Search };
// re-export
export * from 'rspress/theme';
```

## type error

hover at `{Search}` , get type error
