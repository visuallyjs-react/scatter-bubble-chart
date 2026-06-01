# Scatter and Bubble Charts Implementation

This document describes how the Scatter and Bubble Charts demonstration is implemented using `@visuallyjs/browser-ui-react`.

## Components

The application showcases various scatter and bubble chart types using these components from `@visuallyjs/browser-ui-react`:

- **`ScatterChartComponent`**: Used to render scatter plots, supporting multiple series and inverted axes.
- **`ScatterChartComponent`**: Also demonstrates custom SVG markers for data points.
- **`BubbleChartComponent`**: Used to render bubble charts where the size of each bubble represents a third dimension of data.

## Configuration Options

Each chart is configured by passing an options object to the respective component. The demonstration includes:

- **Basic Scatter and Bubble Charts**: Standard data visualization.
- **Multiple Series**: Displaying and comparing different datasets on the same chart.
- **Inverted Charts**: Swapping the X and Y axes.
- **Custom Markers**: Using custom SVG elements or images (e.g., country flags) as markers for data points, either globally for a series or individually per data point using a resolver function.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom layout for the chart demonstration grid is defined in `scatter-bubble-chart.css`.
