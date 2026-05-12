import { ScatterChartComponent, BubbleChartComponent } from "@visuallyjs/browser-ui-react";

import BasicScatterConfig from "./configs/basic-scatter";
import ScatterMultipleConfig from "./configs/scatter-multiple";
import ScatterInvertedConfig from "./configs/scatter-inverted";
import BasicBubbleConfig from "./configs/basic-bubble";
import ScatterCustomMarker from "./configs/scatter-custom-svg-marker"
import BubbleResolveMarker from "./configs/bubble-resolve-marker.js"

export const chartOptions = [
    BasicScatterConfig,
    ScatterMultipleConfig,
    ScatterInvertedConfig,
    BasicBubbleConfig,
    ScatterCustomMarker,
    BubbleResolveMarker
];

export const charts = [
    {
        desc: "Basic scatter chart",
        config: BasicScatterConfig,
        render: (className) => <ScatterChartComponent className={className} options={BasicScatterConfig} />
    },
    {
        desc: "Scatter chart, multiple series",
        config: ScatterMultipleConfig,
        render: (className) => <ScatterChartComponent className={className} options={ScatterMultipleConfig} />
    },
    {
        desc: "Inverted scatter chart",
        config: ScatterInvertedConfig,
        render: (className) => <ScatterChartComponent className={className} options={ScatterInvertedConfig} />
    },
    {
        desc: "Basic bubble chart",
        comments:"This chart plots sugar vs fat consumption for various countries, with the size of the bubble representing obesity.",
        config: BasicBubbleConfig,
        render: (className) => <BubbleChartComponent className={className} options={BasicBubbleConfig} />
    },
    {
        desc: "Scatter chart with custom SVG marker",
        config: ScatterCustomMarker,
        render: (className) => <ScatterChartComponent className={className} options={ScatterCustomMarker} />
    },
    {
        desc: "Bubble chart with custom marker per data point",
        comments:"In this chart, we provide a custom marker per data point, showing the flag for the country the data point represents",
        config: BubbleResolveMarker,
        render: (className) => <BubbleChartComponent className={className} options={BubbleResolveMarker} />
    }
];
