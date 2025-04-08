
// ---------------------------pie chart---------------------
var options = {
  chart: {
      height: 350,
      type: 'radialBar',
  },
  series: [70],
  labels: ['Progress'],
}

var chart = new ApexCharts(document.querySelector("#chart-pie"), options);

chart.render();


// ---------------------------------------------------chart c donut------------------------------------//
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  width: 380,
  type: 'donut',
  dropShadow: {
    enabled: true,
    color: '#111',
    top: -1,
    left: 3,
    blur: 3,
    opacity: 0.2
  }
},
stroke: {
  width: 0,
},
plotOptions: {
  pie: {
    donut: {
      labels: {
        show: true,
        total: {
          showAlways: true,
          show: true
        }
      }
    }
  }
},
labels: ["OBC", "OB", "ST", "SC", "OC"],
dataLabels: {
  dropShadow: {
    blur: 3,
    opacity: 0.8
  }
},
fill: {
type: 'pattern',
  opacity: 1,
  pattern: {
    enabled: true,
    style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
  },
},
states: {
  hover: {
    filter: 'none'
  }
},
theme: {
  palette: 'palette2'
},
title: {
  text: "Favourite Movie Type"
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chartc"), options);
chart.render();
// ---------------------------------------chartc donut end------------------------------------//

// ---------------------------------------chart b-Earnings start--------------------------------//
var options = {
  series: [{
  name: 'Total Collection',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'Fees Collection',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chartb"), options);
chart.render();

// ---------------------------------------chart b-Earnings end--------------------------------//



// ------------------------------------------chart a Expenses start--------------------------//
var options = {
  series: [
  {
    name: 'Jan 2019',
    data: [
      {
        x: '150k',
        y: 12,
        goals: [
          {
            name: 'Feb 2019',
            value: 14,
            strokeWidth: 2,
            strokeDashArray: 2,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '125k',
        y: 44,
        goals: [
          {
            name: 'Feb 2019',
            value: 54,
            strokeWidth: 5,
            strokeHeight: 10,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '100k',
        y: 54,
        goals: [
          {
            name: 'Feb 2019',
            value: 52,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '75k',
        y: 66,
        goals: [
          {
            name: 'Feb 2019',
            value: 61,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '50k',
        y: 81,
        goals: [
          {
            name: 'Feb 2019',
            value: 66,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '25k',
        y: 67,
        goals: [
          {
            name: 'Feb 2019',
            value: 70,
            strokeWidth: 5,
            strokeHeight: 10,
            strokeColor: '#775DD0'
          }
        ]
      },
      {
        x: '0',
        y: 81,
        goals: [
          {
            name: 'Feb 2019',
            value: 66,
            strokeWidth: 10,
            strokeHeight: 0,
            strokeLineCap: 'round',
            strokeColor: '#775DD0'
          }
        ]
      },
    ]
  }
],
  chart: {
  height: 350,
  type: 'bar'
},
plotOptions: {
  bar: {
    horizontal: true,
  }
},
colors: ['#00E396'],
dataLabels: {
  formatter: function(val, opt) {
    const goals =
      opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
        .goals

    if (goals && goals.length) {
      return `${val} / ${goals[0].value}`
    }
    return val
  }
},
legend: {
  show: true,
  showForSingleSeries: true,
  customLegendItems: ['Jan 2019', 'Feb 2019'],
  markers: {
    fillColors: ['#00E396', '#775DD0']
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// ------------------------------------------chart a Expenses End--------------------------//