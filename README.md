

# Analytics Dashboard

A modern, responsive analytics dashboard built with React, featuring pricing options, performance metrics, and results analysis with a stunning dark theme and glassmorphism effects.


## Features

- **Dark Theme UI**: Beautiful dark gradient background with animated elements
- **Glassmorphism Design**: Frosted glass effect cards with backdrop blur
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**:
  - Pricing options comparison
  - Performance metrics visualization
  - Results analysis with charts
- **Smooth Animations**: Custom loading states and transitions
- **Sticky Navigation**: Easy access to navigation while scrolling

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Axios**: Promise-based HTTP client for fetching data
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For navigation (if implemented)
- **Chart.js**: For data visualization (if used in components)







## Usage

1. **Navigation**: Use the navigation bar to access different sections of the dashboard.
2. **Pricing Options**: Compare different subscription plans and their features.
3. **Performance Metrics**: View academic performance data through interactive charts.
4. **Results Analysis**: Explore comprehensive results and trends.

## Project Structure

```
analytics-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── DaisyNav/
│   │   ├── NavBar/
│   │   ├── PricingOptions/
│   │   ├── ResultsChart/
│   │   └── MarksChart/
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Data Files

The application uses JSON files for data:

- `pricingData.json`: Contains pricing plan information
- `marksData.json`: Contains performance metrics data

Ensure these files are placed in the public directory or update the paths in the code accordingly.

## Customization

### Theme Customization

To customize the theme, modify the color values in `App.js`:

```javascript
// Background gradient
bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900

// Accent colors
text-cyan-400, text-purple-400, text-green-400
```

### Component Styling

Each component is styled using Tailwind CSS classes. You can customize the appearance by modifying the classes in each component file.





## Contact

If you have any questions or feedback, please open an issue or contact the project maintainer.