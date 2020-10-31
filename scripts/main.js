//chart 1
Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Average Net Price By Net Income'

    },
    xAxis: {
        categories: ['$0 - $30,000', '$30,001 - $48,000', '$48,001 - $75,000', '$75,001 - $110,000', '$110,001 and more'],
        title: {
            text: 'Net Income (USD)'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Price (USD)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
    	valuesuffic: '$'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'verical',
        align: 'right',
        verticalAlign: 'top',
        x: 10,
        y: 60,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: true
    },
    series: [{
        name: 'University of Florida',
        data: [1994, 4069, 8528, 12685, 13820]
    }, {
    		name: 'Florida State University',
        data: [5360, 6816, 10583, 15074, 16000]
    }, {
    		name: 'University of South Florida',
        data: [3950, 5616, 9809, 14214, 15247]
    }, {
    		name: 'University of Central Florida',
        data: [6211, 7847, 11161, 15192, 16304]
    }
    ]
});

//chart 2
Highcharts.chart('container2', {

    title: {
        text: 'Criminal Offenses On Campus'
    },

    yAxis: {
        title: {
            text: 'Number of Offenses'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2015 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        x:10,
        y:50,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [{
        name: 'University of Florida',
        data: [59, 76, 68]
    }, {
        name: 'Florida State Univesity',
        data: [102, 83, 79]
    }, {
        name: 'University of South Florida',
        data: [15, 20, 12]
    }, {
        name: 'University of Central Florida',
        data: [70, 61, 64]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
