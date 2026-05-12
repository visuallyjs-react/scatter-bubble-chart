export default {
    title:{
        text:"Sugar/Fat consumption"
    },
    url:"https://static.visuallyjs.com/data/chart/sugar-fat-obesity.json",
    series:[
        {
            yAxisField:"sugar",
            xAxisField:"fat",
            color:"#569934"
        }
    ],
    tooltip:{
        format:"<b>Country: </b>{{point.name}}<b>Obesity: </b>{{point.obesity}}"
    },
    xAxis:{
        crosshair:true,
        showLine:true,
        title:{
            text:"Fat Consumption"
        }
    },
    yAxis:{
        crosshair:true,
        title:{
            text:"Sugar Consumption"
        }
    }
}
