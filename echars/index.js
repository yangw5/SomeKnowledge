
var myChart = echarts.init(document.getElementById('main'));


var option = {
    // title: {
    //             text: 'ECharts 入门示例'
    //         },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['计划投资金额','累计完成金额']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['仁沐析','绵九','乐西','资潼','沿江','泸黄']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:12000,
            
        }
    ],
    series : [
        {
            name:'计划投资金额',
            //设置柱子的宽度
            barWidth : 30,
            color:'rgb(249,134,104)',
            type:'bar',
            data:[2200, 11102, 2100, 1700, 5100, 3030]
        },
        {
            name:'累计完成金额',
            barWidth : 30,
            color:'rgb(15,205,220)',
            type:'bar',
            data:[1700, 5200, 1860, 1026, 1279, 1870],
            
        },

       
    ]
};

myChart.setOption(option);