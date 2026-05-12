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
            resolveMarker:(p) => {
                const id = `clip-${p.name.replace(/\s+/g, '-').toLowerCase()}`;
                const imageUrl = `https://static.visuallyjs.com/img/flags/1x1/${p.name.toLowerCase()}.svg`;
                return `<svg:svg viewBox="0 0 100 100">
                                <svg:defs>
                                    <svg:clipPath id="${id}">
                                        <svg:circle cx="50" cy="50" r="50" />
                                    </svg:clipPath>
                                </svg:defs>
                                <svg:image href="${imageUrl}" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>
                                <svg:circle cx="50" cy="50" r="48" fill="none" stroke="#ccc" stroke-width="2" />
                            </svg:svg>`;
            }
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
