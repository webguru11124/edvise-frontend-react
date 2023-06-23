const analytics = [
  {
    name: 'Talk Time by Speaker',
    graphtype: 'donut',
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
        position: 'right'
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    },
    data: {
      labels: ['teacher', 'student', 'both'],
      datasets: [
        {
          data: [550.9597587000001, 172.3656800000001],
          backgroundColor: ['#42a5f5', '#F05467', '#c084fc'],
          hoverBackgroundColor: ['#42a5dd', '#F054dd', '#c084ee']
        }
      ]
    }
  },

  {
    name: 'Question Talk Time by Speaker',
    graphtype: 'donut',
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
        position: 'right'
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    },
    data: {
      labels: ['teacher', 'student', 'both'],
      datasets: [
        {
          data: [205, 6, 34],
          backgroundColor: ['#42a5f5', '#F05467', '#c084fc'],
          hoverBackgroundColor: ['#42a5dd', '#F054dd', '#c084ee']
        }
      ]
    }
  },

  {
    name: 'Blooms Categorization',
    graphtype: 'barchart',
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top'
        },
        title: {
          display: false,
          text: 'Chart.js Bar Chart'
        }
      }
    },
    data: {
      labels: [
        'Creating',
        'Evaluating',
        'Analyzing',
        'Application',
        'Understanding',
        'Remembering',
        'none'
      ],
      datasets: [
        {
          data: [44, 23, 3, 51, 17, 20, 155],
          backgroundColor: [
            '#42a5f5',
            '#F05467',
            '#c084fc',
            '#42a5f5',
            '#F05467',
            '#c084fc',
            '#c084fc'
          ],
          hoverBackgroundColor: [
            '#42a5f5',
            '#F05467',
            '#c084fc',
            '#42a5f5',
            '#F05467',
            '#c084fc',
            '#c084fc'
          ]
        }
      ]
    }
  }
];

export default analytics;
