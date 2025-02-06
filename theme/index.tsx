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
