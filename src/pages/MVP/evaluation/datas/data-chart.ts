import { getColorCodes } from '../utils';

export const graphdata = {
  custom: {
    talk_time: {
      speaker: {
        teacher: 550.9597587000001,
        student: 172.3656800000001,
        both: 84.75693469999995
      },
      question: {
        teacher: 205.23460120000013,
        student: 6.75,
        both: 34.65791999999993
      }
    },
    blooms: {
      total: {
        Creating: 44,
        Evaluating: 23,
        Analyzing: 3,
        Application: 51,
        Understanding: 17,
        Remembering: 20,
        none: 155
      },
      speaker: {
        teacher: {
          Creating: 26,
          Evaluating: 17,
          Analyzing: 3,
          Application: 35,
          Understanding: 13,
          Remembering: 19,
          none: 126
        },
        student: {
          Creating: 11,
          Evaluating: 6,
          Analyzing: 0,
          Application: 13,
          Understanding: 1,
          Remembering: 0,
          none: 13
        },
        both: {
          Creating: 7,
          Evaluating: 0,
          Analyzing: 0,
          Application: 13,
          Understanding: 3,
          Remembering: 1,
          none: 16
        }
      },
      question: {
        Creating: 26,
        Evaluating: 16,
        Analyzing: 1,
        Application: 20,
        Understanding: 6,
        Remembering: 6,
        none: 33
      }
    },
    interactions: {
      speaker: {
        teacher: 240,
        student: 44,
        both: 31
      },
      switches: {
        count: 111,
        data: [
          'both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-teacher',
          'teacher-student',
          'student-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-both',
          'both-teacher',
          'teacher-student',
          'student-both',
          'both-student',
          'student-teacher'
        ]
      }
    }
  }
};

export const chartColors = ['#42a5f5', '#F05467', '#c084fc'];
export const barChartColors = [
  '#A847B0',
  '#FF3C3C',
  '#7FE881',
  '#CBAB0B',
  '#009AE4',
  '#8EE16A'
];

export interface IChart {
  id?: number;
  type?: string;
  name: string;
  graphtype: string;
  options: any;
  data: {
    labels: Array<any>;
    datasets: Array<any>;
  };
  customtags?: Array<any>;
  notes?: string;
}

export const charts: Array<IChart> = [
  {
    name: 'Talk Time by Speaker',
    graphtype: 'donut',
    options: {
      maintainAspectRatio: false,
      responsive: false,
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
      labels: Object.keys(graphdata.custom.talk_time.speaker),
      datasets: [
        {
          data: Object.values(graphdata.custom.talk_time.speaker),
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    }
  },
  {
    name: 'Question Talk Time by Speaker',
    graphtype: 'donut',
    options: {
      maintainAspectRatio: false,
      responsive: false,
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
      labels: Object.keys(graphdata.custom.talk_time.question),
      datasets: [
        {
          data: Object.values(graphdata.custom.talk_time.question),
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    }
  },
  {
    name: 'Blooms Categorization',
    graphtype: 'barchart',
    options: {
      responsive: false,
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
      labels: Object.keys(graphdata.custom.blooms.total),
      datasets: [
        {
          data: Object.values(graphdata.custom.blooms.total),
          backgroundColor: Object.keys(graphdata.custom.blooms.total).map(
            (color) => {
              return getColorCodes(color.toLowerCase());
            }
          ),
          hoverBackgroundColor: Object.keys(graphdata.custom.blooms.total).map(
            (color) => {
              return getColorCodes(color.toLowerCase());
            }
          )
        }
      ]
    }
  },
  {
    name: 'Blooms for Teacher',
    graphtype: 'barchart',
    options: {
      responsive: false,
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
      labels: Object.keys(graphdata.custom.blooms.speaker.teacher),
      datasets: [
        {
          data: Object.values(graphdata.custom.blooms.speaker.teacher),
          backgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.teacher
          ).map((color) => {
            return getColorCodes(color.toLowerCase());
          }),
          hoverBackgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.teacher
          ).map((color) => {
            return getColorCodes(color.toLowerCase());
          })
        }
      ]
    }
  },
  {
    name: 'Blooms for Student',
    graphtype: 'barchart',
    options: {
      responsive: false,
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
      labels: Object.keys(graphdata.custom.blooms.speaker.student),
      datasets: [
        {
          data: Object.values(graphdata.custom.blooms.speaker.student),
          backgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.student
          ).map((color) => {
            return getColorCodes(color.toLowerCase());
          }),
          hoverBackgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.teacher
          ).map((color) => {
            return getColorCodes(color.toLowerCase());
          })
        }
      ]
    }
  },
  {
    name: 'Blooms by Speaker',
    graphtype: 'barchart',
    options: {
      responsive: false,
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
      labels: Object.keys(graphdata.custom.blooms.speaker.teacher),
      datasets: [
        {
          data: Object.values(graphdata.custom.blooms.speaker.teacher),
          backgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.teacher
          ).map(() => {
            return getColorCodes('teacher');
          }),
          hoverBackgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.teacher
          ).map(() => {
            return getColorCodes('teacher');
          })
        },
        {
          data: Object.values(graphdata.custom.blooms.speaker.student),
          backgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.student
          ).map(() => {
            return getColorCodes('student');
          }),
          hoverBackgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.teacher
          ).map(() => {
            return getColorCodes('student');
          })
        },
        {
          data: Object.values(graphdata.custom.blooms.speaker.both),
          backgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.both
          ).map(() => {
            return getColorCodes('both');
          }),
          hoverBackgroundColor: Object.keys(
            graphdata.custom.blooms.speaker.both
          ).map(() => {
            return getColorCodes('both');
          })
        }
      ]
    }
  },
  {
    name: 'Blooms Question Categorization',
    graphtype: 'barchart',
    options: {
      responsive: false,
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
      labels: Object.keys(graphdata.custom.blooms.question),
      datasets: [
        {
          data: Object.values(graphdata.custom.blooms.question),
          backgroundColor: Object.keys(graphdata.custom.blooms.question).map(
            (color) => {
              return getColorCodes(color.toLowerCase());
            }
          ),
          hoverBackgroundColor: Object.keys(
            graphdata.custom.blooms.question
          ).map((color) => {
            return getColorCodes(color.toLowerCase());
          })
        }
      ]
    }
  }
];
