export default {
    title:{
        text:"Multi-series scatter chart"
    },
    url:"https://static.visuallyjs.com/data/chart/sugar-fat-obesity.json",
    series:[
        {
            xAxisField:"sugar",
            yAxisField:"fat",
            markerType:"circle",
            markerSize:8,
            color:"#FF0000"
        },
        {
            xAxisField:"sugar",
            yAxisField:"obesity",
            markerType:"square",
            markerSize:12,
            color:"#0000FF"
        }
    ]
};
