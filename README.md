# MOBILE FOOD FACILITIES APP

Find your favorite dishes at the best food trucks in San Francisco!

This application was developed with React using Vite with HMR and some ESLint rules.
It was supposed to take 2 or 3 hours, according to the <a href="https://github.com/peck/engineering-assessment/blob/main/README.md">challenge</a>, so I thought of something simple that could show off some of my skills with code organization, architecture, componentization and styling.

## Layout and styling

Inspired by functional websites like Google and Youtube.
Colors palette created by <a href="https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533">coolors.co</a>.

To make the application lightweight and without many dependencies, I chose to use modular CSS for styling.

# Framework and dependencies

I chose to use Reactjs since it is the library I have the most contact with. Since time was short, I did not use Typescript, but it is certainly something I would implement urgently.

Since the application is small, I only used React's useState for state management, but it would be more recommended to use hooks via Context API or a more powerful manager such as Redux or Zustand, depending on the size of the project.

I decided to use <a href="https://www.npmjs.com/package/axios">axios</a> to manage requests. I had a problem using svg icons as React components, apparently because of the Vite's configuration, so I was forced to install <a href="https://www.npmjs.com/package/vite-plugin-svgr">vite-plugin-svgr</a>.

# Final considerations

Honestly, my initial intention was to have the route from the user's location to the chosen food truck drawn, but I chose to show off my other skills and managing the Google Maps API keys and permissions would take up precious time. I believe this project can be scalable and grow as it can help people make decisions about finding something delicious on the streets of San Francisco.
