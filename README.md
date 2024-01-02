# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


used react-router:
- made a layout.jsx file where i defined that every page should have a nav bar and a footer
- the main file removed app component and replaced it by router.provider with router as a prop
- 2 main things were imported Link and NavLink
- they both use "to" as href when compared to an A tag
- the router prop is defined in the main file itself
- there are two ways to do that 1 is using arrays(looks like json) and onw is using route tag(looks like xml)
- the createBrowserRouter is used for initializing the router and for the 2nd method an extra mehtod of createRoutesFromElements is used
- An optimization can be done while fetching data that is by using loader during routing ie when the cursor is on top of the link before clicking the fetching starts and hence the data is present with min tym
- to access the fetched data from the loader useLoadedData hook is used
- to acces the params form the url (/user/:id) the id can be accessed by usign the useParams hook the variable should be of the same name as that of the parameter in this case {id}
