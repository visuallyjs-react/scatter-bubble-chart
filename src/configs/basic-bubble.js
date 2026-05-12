export default {
    title:{
        text:"Sugar/Fat consumption"
    },
    url:"https://static.visuallyjs.com/data/chart/sugar-fat-obesity.json",
    series:[
        {
            xAxisField:"sugar",
            yAxisField:"fat",
            valueField:"obesity",
            color:"pink"
        }
    ],
    xAxis:{
        crosshair:true,
        showLine:true,
        title:{
            text:"Sugar Consumption"
        }
    },
    yAxis:{
        crosshair:true,
        title:{
            text:"Fat Consumption"
        }
    },
    tooltip: {
        format: "<b>{{point.country}}</b><br/>Sugar: {{point.sugar}}<br/>Fat: {{point.fat}}<br/>Obesity: {{point.obesity}}%"
    }
};
