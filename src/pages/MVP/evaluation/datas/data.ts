import { DataProps } from '../evaluation.interface';

const data: DataProps = {
  sentences: [
    {
      start: 1.1591797,
      end: 3.8574219,
      text: "Yeah. We're gonna talk about numbers today.",
      speakers: [1, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0589,
          surprise: 0.0501,
          suspense: 0.4842,
          happiness: 0.138,
          neutral: 0.1327,
          sadness: 0.1361
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0003,
          Creating: 0.0003,
          Evaluating: 0.0003,
          None: 0.0,
          Remembering: 0.9987,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 3.9179688,
      end: 8.995,
      text: 'Right? The more that we talk about math, the better we actually are at math.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2713,
          surprise: 0.1286,
          suspense: 0.2207,
          happiness: 0.2448,
          neutral: 0.1098,
          sadness: 0.0248
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9998,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 1.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 9.515625,
      end: 10.515625,
      text: 'Did you know that?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0789,
          surprise: 0.3185,
          suspense: 0.1064,
          happiness: 0.1851,
          neutral: 0.1047,
          sadness: 0.2063
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0077,
          Applying: 0.0032,
          Creating: 0.0102,
          Evaluating: 0.0115,
          None: 0.0009,
          Remembering: 0.8043,
          Understanding: 0.1622
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 10.515625,
      end: 10.9921875,
      text: 'Yeah. Yeah.',
      speakers: [1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0314,
          surprise: 0.2357,
          suspense: 0.0874,
          happiness: 0.1356,
          neutral: 0.1657,
          sadness: 0.3442
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 10.9921875,
      end: 14.1875,
      text: 'Yeah. I know more than we talk about it, but better than our math.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1697,
          surprise: 0.0256,
          suspense: 0.5745,
          happiness: 0.1839,
          neutral: 0.0343,
          sadness: 0.012
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0003,
          Evaluating: 0.9996,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 14.1875,
      end: 15.8671875,
      text: "So that's what we're gonna do today.",
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0907,
          surprise: 0.1753,
          suspense: 0.2663,
          happiness: 0.1893,
          neutral: 0.1276,
          sadness: 0.1508
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0581,
          Applying: 0.0011,
          Creating: 0.002,
          Evaluating: 0.0198,
          None: 0.0009,
          Remembering: 0.9002,
          Understanding: 0.0179
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 15.8671875,
      end: 22.953125,
      text: "Right. And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers.",
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
      ],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.5025,
          surprise: 0.0975,
          suspense: 0.1692,
          happiness: 0.1732,
          neutral: 0.0419,
          sadness: 0.0157
        },
        class: 'passion'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.5317,
          Applying: 0.0007,
          Creating: 0.0011,
          Evaluating: 0.4563,
          None: 0.0066,
          Remembering: 0.0008,
          Understanding: 0.0028
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 23.125,
      end: 29.171875,
      text: 'Okay? If you have an answer at your head, I want you to keep it in your head until I ask for it.',
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3707,
          surprise: 0.1341,
          suspense: 0.2798,
          happiness: 0.1576,
          neutral: 0.0192,
          sadness: 0.0386
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 1.0,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 1.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 29.171875,
      end: 30.25,
      text: 'Is that a good plan?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.093,
          surprise: 0.2923,
          suspense: 0.1142,
          happiness: 0.2395,
          neutral: 0.0984,
          sadness: 0.1626
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0015,
          Applying: 0.0013,
          Creating: 0.0385,
          Evaluating: 0.0063,
          None: 0.9489,
          Remembering: 0.0021,
          Understanding: 0.0013
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.3333,
          Creating: 0.3333,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.3333,
          None: 9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 30.25,
      end: 30.8125,
      text: 'Yeah. Yeah.',
      speakers: [1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0355,
          surprise: 0.3175,
          suspense: 0.0882,
          happiness: 0.1263,
          neutral: 0.1601,
          sadness: 0.2724
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 30.8125,
      end: 33.73,
      text: 'If I tell you you can talk to your partner about it, you can do that.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2949,
          surprise: 0.0285,
          suspense: 0.1601,
          happiness: 0.3421,
          neutral: 0.1535,
          sadness: 0.021
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0006,
          Applying: 0.0017,
          Creating: 0.9846,
          Evaluating: 0.0124,
          None: 0.0003,
          Remembering: 0.0002,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 33.90625,
      end: 36.21875,
      text: "but I don't want you to shout out any answer.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0291,
          surprise: 0.0833,
          suspense: 0.2731,
          happiness: 0.1071,
          neutral: 0.1563,
          sadness: 0.3512
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0016,
          Evaluating: 0.9975,
          None: 0.0002,
          Remembering: 0.0002,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 36.40625,
      end: 39.25,
      text: 'Okay? Good plan. Yeah. And make a thumbs up.',
      speakers: [0, 0, 0, 0, 1, 0, 0, 0, 0],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.1501,
          surprise: 0.1277,
          suspense: 0.5125,
          happiness: 0.1451,
          neutral: 0.0382,
          sadness: 0.0263
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0008,
          Creating: 0.9912,
          Evaluating: 0.0013,
          None: 0.0059,
          Remembering: 0.0003,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.2,
          Creating: 0.6,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.2,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 40.15625,
      end: 43.28125,
      text: 'Cool. Cool.',
      speakers: [0, 2],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.2432,
          surprise: 0.0602,
          suspense: 0.203,
          happiness: 0.3611,
          neutral: 0.0864,
          sadness: 0.0461
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.332,
          Applying: 0.0052,
          Creating: 0.0036,
          Evaluating: 0.0929,
          None: 0.0231,
          Remembering: 0.0288,
          Understanding: 0.5143
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 43.65625,
      end: 44.625,
      text: 'Alright. Cool.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0791,
          surprise: 0.2728,
          suspense: 0.1021,
          happiness: 0.243,
          neutral: 0.113,
          sadness: 0.1901
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0534,
          Applying: 0.0046,
          Creating: 0.0043,
          Evaluating: 0.0459,
          None: 0.0117,
          Remembering: 0.0364,
          Understanding: 0.8437
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 44.96875,
      end: 58.28125,
      text: "Alright. And one of the things that we're also going to do today is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems.",
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4208,
          surprise: 0.0576,
          suspense: 0.3763,
          happiness: 0.1003,
          neutral: 0.0233,
          sadness: 0.0217
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.9999,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.1667,
          Creating: 0.1667,
          Remembering: 0.1667,
          Evaluating: 0.1667,
          Understanding: 0.1667,
          Analyzing: 0.1667,
          None: -0.00019999999999997797
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 58.8125,
      end: 60.9375,
      text: "So that's something the good mathematicians do.",
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0484,
          surprise: 0.1152,
          suspense: 0.2272,
          happiness: 0.1323,
          neutral: 0.1316,
          sadness: 0.3453
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0109,
          Applying: 0.0047,
          Creating: 0.0202,
          Evaluating: 0.0523,
          None: 0.0078,
          Remembering: 0.8324,
          Understanding: 0.0718
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 60.9375,
      end: 67.5625,
      text: "Somebody who's really good at math, not only knows the answer, but can explain why they know the answer.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4249,
          surprise: 0.0753,
          suspense: 0.1148,
          happiness: 0.3006,
          neutral: 0.0711,
          sadness: 0.0133
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9996,
          None: 0.0,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Analyzing',
        results: {
          Applying: 0.1429,
          Creating: 0.1429,
          Remembering: 0.2857,
          Evaluating: 0.1429,
          Understanding: 0.1429,
          Analyzing: 0.1429,
          None: -0.00019999999999997797
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 67.5625,
      end: 69.3125,
      text: "And that's what we're gonna work on today.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0796,
          surprise: 0.1582,
          suspense: 0.2562,
          happiness: 0.1532,
          neutral: 0.1237,
          sadness: 0.2291
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.8764,
          Applying: 0.0012,
          Creating: 0.0021,
          Evaluating: 0.0072,
          None: 0.002,
          Remembering: 0.1,
          Understanding: 0.0111
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 69.9375,
      end: 70.75,
      text: 'Cool. Alright.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1142,
          surprise: 0.2113,
          suspense: 0.1092,
          happiness: 0.2657,
          neutral: 0.1247,
          sadness: 0.1749
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0534,
          Applying: 0.0046,
          Creating: 0.0043,
          Evaluating: 0.0459,
          None: 0.0117,
          Remembering: 0.0364,
          Understanding: 0.8437
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 70.75,
      end: 73.125,
      text: 'So I a math problem here for you.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0231,
          surprise: 0.1007,
          suspense: 0.3777,
          happiness: 0.145,
          neutral: 0.152,
          sadness: 0.2014
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.1588,
          Applying: 0.0091,
          Creating: 0.0047,
          Evaluating: 0.1082,
          None: 0.6783,
          Remembering: 0.0281,
          Understanding: 0.0126
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 73.3125,
      end: 75.375,
      text: "Alright? Remember there's no shouting out",
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0458,
          surprise: 0.1292,
          suspense: 0.2699,
          happiness: 0.1527,
          neutral: 0.1522,
          sadness: 0.2503
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9998,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 75.75,
      end: 78.0,
      text: "Right? I don't want anybody to talk yet.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0411,
          surprise: 0.0897,
          suspense: 0.1982,
          happiness: 0.1182,
          neutral: 0.1692,
          sadness: 0.3836
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0021,
          Applying: 0.0005,
          Creating: 0.0066,
          Evaluating: 0.9872,
          None: 0.0019,
          Remembering: 0.0005,
          Understanding: 0.0012
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 78.0,
      end: 80.3125,
      text: 'I just want you to look at the math problem.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0536,
          surprise: 0.091,
          suspense: 0.2949,
          happiness: 0.1513,
          neutral: 0.1527,
          sadness: 0.2565
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0098,
          Applying: 0.0852,
          Creating: 0.2251,
          Evaluating: 0.6714,
          None: 0.0059,
          Remembering: 0.0012,
          Understanding: 0.0016
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 80.625,
      end: 83.5,
      text: 'And when you look at the math problem, I want you to go Okay.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2532,
          surprise: 0.0272,
          suspense: 0.1333,
          happiness: 0.4388,
          neutral: 0.1204,
          sadness: 0.0271
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0004,
          Applying: 0.0007,
          Creating: 0.0135,
          Evaluating: 0.9841,
          None: 0.0005,
          Remembering: 0.0004,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 83.5,
      end: 84.25,
      text: 'Can I figure it out?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0892,
          surprise: 0.2772,
          suspense: 0.0475,
          happiness: 0.2535,
          neutral: 0.1386,
          sadness: 0.194
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.999,
          Applying: 0.0001,
          Creating: 0.0002,
          Evaluating: 0.0002,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 84.25,
      end: 85.3125,
      text: 'Can I figure it out?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0603,
          surprise: 0.3284,
          suspense: 0.1046,
          happiness: 0.1997,
          neutral: 0.1004,
          sadness: 0.2067
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.999,
          Applying: 0.0001,
          Creating: 0.0002,
          Evaluating: 0.0002,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 85.3125,
      end: 90.24499,
      text: 'I want you to be thinking about what strategy might I use to figure this problem out?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3095,
          surprise: 0.0499,
          suspense: 0.2418,
          happiness: 0.3438,
          neutral: 0.0329,
          sadness: 0.022
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.9999,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.25,
          Creating: 0.0,
          Remembering: 0.25,
          Evaluating: 0.25,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 90.5625,
      end: 92.875,
      text: 'until I need anything to help me figure it out?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0298,
          surprise: 0.1035,
          suspense: 0.2764,
          happiness: 0.1231,
          neutral: 0.172,
          sadness: 0.2952
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.8113,
          Applying: 0.006,
          Creating: 0.1621,
          Evaluating: 0.0096,
          None: 0.0039,
          Remembering: 0.0013,
          Understanding: 0.0059
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 92.875,
      end: 94.875,
      text: "because I don't want you to talk about it again.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0596,
          surprise: 0.1484,
          suspense: 0.2255,
          happiness: 0.1661,
          neutral: 0.1188,
          sadness: 0.2817
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.9999,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 94.9375,
      end: 110.625,
      text: 'Okay. So think about that.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4949,
          surprise: 0.0218,
          suspense: 0.2396,
          happiness: 0.2268,
          neutral: 0.0087,
          sadness: 0.0082
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0005,
          Applying: 0.0002,
          Creating: 0.0004,
          Evaluating: 0.9982,
          None: 0.0001,
          Remembering: 0.0003,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 111.5625,
      end: 112.375,
      text: "Let's see.",
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1065,
          surprise: 0.2583,
          suspense: 0.0953,
          happiness: 0.2726,
          neutral: 0.11,
          sadness: 0.1573
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.001,
          Applying: 0.0003,
          Creating: 0.0004,
          Evaluating: 0.001,
          None: 0.0002,
          Remembering: 0.0008,
          Understanding: 0.9963
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 112.4375,
      end: 114.125,
      text: 'How would I solve this?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0651,
          surprise: 0.1659,
          suspense: 0.2868,
          happiness: 0.1892,
          neutral: 0.1392,
          sadness: 0.1538
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Applying',
        results: {
          Analyzing: 0.0212,
          Applying: 0.7148,
          Creating: 0.2227,
          Evaluating: 0.0109,
          None: 0.0008,
          Remembering: 0.0009,
          Understanding: 0.0286
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.25,
          Creating: 0.25,
          Remembering: 0.25,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 115.3125,
      end: 117.61999,
      text: 'Do I need anything to help me solve it? No',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0292,
          surprise: 0.0826,
          suspense: 0.2635,
          happiness: 0.1051,
          neutral: 0.155,
          sadness: 0.3645
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0049,
          Applying: 0.0056,
          Creating: 0.9036,
          Evaluating: 0.0836,
          None: 0.0011,
          Remembering: 0.0005,
          Understanding: 0.0007
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.3333,
          Creating: 0.3333,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.3333,
          None: 9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 127.5625,
      end: 131.5,
      text: "I'm gonna give you and your partner ten seconds to talk about.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3932,
          surprise: 0.0246,
          suspense: 0.2484,
          happiness: 0.3185,
          neutral: 0.006,
          sadness: 0.0094
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0,
          Creating: 0.0008,
          Evaluating: 0.9987,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 1.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 131.5,
      end: 132.5,
      text: 'Okay. Alright.',
      speakers: [1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0748,
          surprise: 0.3053,
          suspense: 0.0971,
          happiness: 0.1641,
          neutral: 0.1106,
          sadness: 0.2481
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0084,
          Applying: 0.0019,
          Creating: 0.0024,
          Evaluating: 0.0199,
          None: 0.0015,
          Remembering: 0.8909,
          Understanding: 0.0751
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 132.5,
      end: 132.875,
      text: 'On your mark.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0296,
          surprise: 0.2887,
          suspense: 0.0664,
          happiness: 0.0799,
          neutral: 0.1554,
          sadness: 0.3801
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0019,
          Applying: 0.0007,
          Creating: 0.0007,
          Evaluating: 0.0202,
          None: 0.001,
          Remembering: 0.964,
          Understanding: 0.0116
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 132.875,
      end: 133.25,
      text: 'Get set.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0308,
          surprise: 0.2902,
          suspense: 0.0774,
          happiness: 0.0821,
          neutral: 0.1666,
          sadness: 0.3529
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0001,
          None: 0.9996,
          Remembering: 0.0,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 133.25,
      end: 134.125,
      text: 'Go. Hi.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0892,
          surprise: 0.2466,
          suspense: 0.0855,
          happiness: 0.2868,
          neutral: 0.1365,
          sadness: 0.1555
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0036,
          Applying: 0.0005,
          Creating: 0.0007,
          Evaluating: 0.0041,
          None: 0.0007,
          Remembering: 0.0023,
          Understanding: 0.988
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 134.125,
      end: 135.5,
      text: 'Talk to your partner about it.',
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1108,
          surprise: 0.2716,
          suspense: 0.1958,
          happiness: 0.2364,
          neutral: 0.0739,
          sadness: 0.1115
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0112,
          Applying: 0.0014,
          Creating: 0.0226,
          Evaluating: 0.9522,
          None: 0.0028,
          Remembering: 0.0008,
          Understanding: 0.0089
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 135.5,
      end: 136.75,
      text: 'Talk to your fellow partner.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1071,
          surprise: 0.2654,
          suspense: 0.1437,
          happiness: 0.2997,
          neutral: 0.0778,
          sadness: 0.1063
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0771,
          Applying: 0.0114,
          Creating: 0.018,
          Evaluating: 0.0424,
          None: 0.2074,
          Remembering: 0.0051,
          Understanding: 0.6386
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 151.25,
      end: 155.25,
      text: 'five four three two one.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4275,
          surprise: 0.0259,
          suspense: 0.2204,
          happiness: 0.306,
          neutral: 0.0182,
          sadness: 0.002
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0002,
          Evaluating: 0.0001,
          None: 0.9994,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 155.375,
      end: 157.75,
      text: 'Okay. Did you guys figure it out? Yes',
      speakers: [0, 0, 0, 0, 0, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0307,
          surprise: 0.1046,
          suspense: 0.2917,
          happiness: 0.1785,
          neutral: 0.183,
          sadness: 0.2114
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9983,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0004,
          None: 0.0002,
          Remembering: 0.0002,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 157.75,
      end: 159.75,
      text: 'Yeah. Alright.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0641,
          surprise: 0.131,
          suspense: 0.2723,
          happiness: 0.1609,
          neutral: 0.1181,
          sadness: 0.2535
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 159.875,
      end: 163.75,
      text: 'Who thinks they know the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1571,
          surprise: 0.0422,
          suspense: 0.3081,
          happiness: 0.3888,
          neutral: 0.0628,
          sadness: 0.041
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.38,
          Applying: 0.1342,
          Creating: 0.396,
          Evaluating: 0.06,
          None: 0.0044,
          Remembering: 0.0234,
          Understanding: 0.002
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 164.25,
      end: 165.875,
      text: 'Who thinks they know the solution?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0965,
          surprise: 0.1903,
          suspense: 0.2137,
          happiness: 0.2427,
          neutral: 0.137,
          sadness: 0.1196
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0607,
          Applying: 0.02,
          Creating: 0.0104,
          Evaluating: 0.1618,
          None: 0.0231,
          Remembering: 0.7166,
          Understanding: 0.0073
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 166.375,
      end: 167.25,
      text: 'Who thinks they know?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0928,
          surprise: 0.2532,
          suspense: 0.0927,
          happiness: 0.2857,
          neutral: 0.1187,
          sadness: 0.157
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0005,
          Applying: 0.0003,
          Creating: 0.0002,
          Evaluating: 0.0006,
          None: 0.0009,
          Remembering: 0.997,
          Understanding: 0.0005
        }
      },
      blooms_custom: {
        class: 'Analyzing',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 167.25,
      end: 168.875,
      text: 'Young lady, what is your name?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1019,
          surprise: 0.2434,
          suspense: 0.235,
          happiness: 0.1949,
          neutral: 0.1033,
          sadness: 0.1215
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0018,
          Applying: 0.0012,
          Creating: 0.003,
          Evaluating: 0.0006,
          None: 0.0142,
          Remembering: 0.9719,
          Understanding: 0.0072
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 168.875,
      end: 171.625,
      text: 'Kamory. Kamory, can you stand up for us, Kamory, please?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.033,
          surprise: 0.0108,
          suspense: 0.7462,
          happiness: 0.1272,
          neutral: 0.0584,
          sadness: 0.0244
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0164,
          Applying: 0.0178,
          Creating: 0.419,
          Evaluating: 0.0195,
          None: 0.5173,
          Remembering: 0.0025,
          Understanding: 0.0075
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 171.625,
      end: 178.75,
      text: 'Yep. And can you tell us the solution to this come over here.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3257,
          surprise: 0.0586,
          suspense: 0.3736,
          happiness: 0.1979,
          neutral: 0.0269,
          sadness: 0.0173
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9995,
          Applying: 0.0001,
          Creating: 0.0002,
          Evaluating: 0.0001,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.6667,
          Remembering: 0.3333,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 179.125,
      end: 181.0,
      text: 'What is the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0719,
          surprise: 0.099,
          suspense: 0.2782,
          happiness: 0.1378,
          neutral: 0.1404,
          sadness: 0.2728
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9771,
          Applying: 0.0053,
          Creating: 0.0028,
          Evaluating: 0.0087,
          None: 0.0001,
          Remembering: 0.0052,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 181.5,
      end: 182.5625,
      text: 'Five. Okay.',
      speakers: [1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0672,
          surprise: 0.3552,
          suspense: 0.1107,
          happiness: 0.239,
          neutral: 0.0862,
          sadness: 0.1416
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.1286,
          Applying: 0.0055,
          Creating: 0.0149,
          Evaluating: 0.2787,
          None: 0.0285,
          Remembering: 0.0835,
          Understanding: 0.4604
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 182.5625,
      end: 185.375,
      text: 'So I want you to use the actual sentence here.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4236,
          surprise: 0.0198,
          suspense: 0.1848,
          happiness: 0.3146,
          neutral: 0.051,
          sadness: 0.0062
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0014,
          Applying: 0.3058,
          Creating: 0.6785,
          Evaluating: 0.01,
          None: 0.0013,
          Remembering: 0.0023,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.6667,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.3333,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 185.375,
      end: 186.5,
      text: 'Okay. Solution.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0845,
          surprise: 0.3221,
          suspense: 0.1187,
          happiness: 0.2585,
          neutral: 0.0902,
          sadness: 0.1261
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0509,
          Applying: 0.0062,
          Creating: 0.7927,
          Evaluating: 0.0641,
          None: 0.0027,
          Remembering: 0.0376,
          Understanding: 0.0457
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 186.875,
      end: 188.375,
      text: "That's kind of a difficult word.",
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0757,
          surprise: 0.2204,
          suspense: 0.2836,
          happiness: 0.228,
          neutral: 0.0856,
          sadness: 0.1067
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0033,
          Applying: 0.0656,
          Creating: 0.0828,
          Evaluating: 0.0023,
          None: 0.5623,
          Remembering: 0.1469,
          Understanding: 0.1369
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 188.375,
      end: 190.125,
      text: 'Listen to me as I say it one more time.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0748,
          surprise: 0.1667,
          suspense: 0.2576,
          happiness: 0.2041,
          neutral: 0.1004,
          sadness: 0.1964
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9983,
          Applying: 0.0002,
          Creating: 0.0003,
          Evaluating: 0.0009,
          None: 0.0001,
          Remembering: 0.0,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.3333,
          Creating: 0.0,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 190.125,
      end: 195.25,
      text: 'Solution. What is the what is the solution?',
      speakers: [1, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.3768,
          surprise: 0.0555,
          suspense: 0.3198,
          happiness: 0.2176,
          neutral: 0.0188,
          sadness: 0.0115
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0067,
          Applying: 0.0006,
          Creating: 0.0011,
          Evaluating: 0.7435,
          None: 0.0006,
          Remembering: 0.0039,
          Understanding: 0.2436
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 195.25,
      end: 196.0,
      text: "What's the other word?",
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0692,
          surprise: 0.3049,
          suspense: 0.0685,
          happiness: 0.2219,
          neutral: 0.1202,
          sadness: 0.2152
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9993,
          Understanding: 0.0005
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 196.0,
      end: 197.0,
      text: 'What what does that mean?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0734,
          surprise: 0.3488,
          suspense: 0.0875,
          happiness: 0.146,
          neutral: 0.094,
          sadness: 0.2503
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0049,
          Applying: 0.0522,
          Creating: 0.7965,
          Evaluating: 0.001,
          None: 0.0001,
          Remembering: 0.0876,
          Understanding: 0.0577
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 197.0,
      end: 205.5,
      text: 'Yeah. It it means something back at That that can help you fix a problem.',
      speakers: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.4491,
          surprise: 0.0161,
          suspense: 0.3122,
          happiness: 0.2137,
          neutral: 0.0061,
          sadness: 0.0028
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.9999,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 205.75,
      end: 209.125,
      text: 'Oh, well, I like the way you made the connection between problem and solution.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2475,
          surprise: 0.0216,
          suspense: 0.2493,
          happiness: 0.3788,
          neutral: 0.0944,
          sadness: 0.0084
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9956,
          Applying: 0.0002,
          Creating: 0.0001,
          Evaluating: 0.003,
          None: 0.0003,
          Remembering: 0.0002,
          Understanding: 0.0007
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 209.125,
      end: 210.125,
      text: "That's absolutely correct.",
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0594,
          surprise: 0.3114,
          suspense: 0.0978,
          happiness: 0.1565,
          neutral: 0.1165,
          sadness: 0.2584
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.7542,
          Applying: 0.0576,
          Creating: 0.0123,
          Evaluating: 0.0126,
          None: 0.0019,
          Remembering: 0.1398,
          Understanding: 0.0216
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 210.125,
      end: 213.25,
      text: 'If this is our problem, the answer is the solution.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3413,
          surprise: 0.0345,
          suspense: 0.0747,
          happiness: 0.4842,
          neutral: 0.0581,
          sadness: 0.0071
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0009,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.9967,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0019
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 213.375,
      end: 216.125,
      text: 'Right? So the answer is another way to say solution.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0624,
          surprise: 0.0199,
          suspense: 0.6713,
          happiness: 0.1495,
          neutral: 0.0737,
          sadness: 0.0231
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.6809,
          Applying: 0.0302,
          Creating: 0.1739,
          Evaluating: 0.1037,
          None: 0.0032,
          Remembering: 0.0038,
          Understanding: 0.0044
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 216.25,
      end: 217.345,
      text: "Right? So what's the word? Solution",
      speakers: [0, 0, 0, 0, 0, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0834,
          surprise: 0.3239,
          suspense: 0.1103,
          happiness: 0.2095,
          neutral: 0.0924,
          sadness: 0.1805
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0005,
          Applying: 0.0011,
          Creating: 0.0006,
          Evaluating: 0.0005,
          None: 0.0002,
          Remembering: 0.971,
          Understanding: 0.0261
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 218.875,
      end: 223.0,
      text: 'Alright. So what is the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1952,
          surprise: 0.0521,
          suspense: 0.2093,
          happiness: 0.4684,
          neutral: 0.0433,
          sadness: 0.0317
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9779,
          Applying: 0.0035,
          Creating: 0.0031,
          Evaluating: 0.0122,
          None: 0.0002,
          Remembering: 0.0025,
          Understanding: 0.0007
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 224.625,
      end: 226.25,
      text: 'solution is five.',
      speakers: [1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1047,
          surprise: 0.2062,
          suspense: 0.2367,
          happiness: 0.2095,
          neutral: 0.1157,
          sadness: 0.1272
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.1003,
          Applying: 0.0077,
          Creating: 0.1112,
          Evaluating: 0.1675,
          None: 0.0194,
          Remembering: 0.5655,
          Understanding: 0.0282
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 226.75,
      end: 227.5,
      text: 'You do.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0694,
          surprise: 0.3034,
          suspense: 0.0746,
          happiness: 0.2125,
          neutral: 0.1184,
          sadness: 0.2217
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0105,
          Applying: 0.0019,
          Creating: 0.0033,
          Evaluating: 0.6801,
          None: 0.0043,
          Remembering: 0.1499,
          Understanding: 0.15
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 227.625,
      end: 230.0,
      text: 'Five. You know, how do you know that?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0331,
          surprise: 0.1111,
          suspense: 0.2568,
          happiness: 0.164,
          neutral: 0.1953,
          sadness: 0.2397
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.1051,
          Applying: 0.0039,
          Creating: 0.0035,
          Evaluating: 0.0134,
          None: 0.0007,
          Remembering: 0.0064,
          Understanding: 0.867
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 230.0,
      end: 232.965,
      text: 'How do you know that the solution to this problem is five?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1617,
          surprise: 0.0328,
          suspense: 0.2462,
          happiness: 0.3487,
          neutral: 0.1895,
          sadness: 0.0211
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0309,
          Applying: 0.0234,
          Creating: 0.0238,
          Evaluating: 0.9116,
          None: 0.0005,
          Remembering: 0.0009,
          Understanding: 0.009
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 234.375,
      end: 237.25,
      text: "Because it's four plus five equals nine.",
      speakers: [2, 2, 2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.3202,
          surprise: 0.0038,
          suspense: 0.3609,
          happiness: 0.3064,
          neutral: 0.0055,
          sadness: 0.0031
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0009,
          Applying: 0.0029,
          Creating: 0.0075,
          Evaluating: 0.0059,
          None: 0.2724,
          Remembering: 0.7035,
          Understanding: 0.0068
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 237.5,
      end: 240.375,
      text: 'Twenty four plus five equals twenty nine.',
      speakers: [2, 2, 2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.6932,
          surprise: 0.002,
          suspense: 0.1361,
          happiness: 0.1641,
          neutral: 0.003,
          sadness: 0.0016
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0008,
          Creating: 0.0034,
          Evaluating: 0.0015,
          None: 0.9734,
          Remembering: 0.019,
          Understanding: 0.0016
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 240.5,
      end: 245.25,
      text: 'Alright. So I saw that you started with four and the five.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4805,
          surprise: 0.0297,
          suspense: 0.2284,
          happiness: 0.2214,
          neutral: 0.0324,
          sadness: 0.0076
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0002,
          Creating: 0.0004,
          Evaluating: 0.0,
          None: 0.0002,
          Remembering: 0.9977,
          Understanding: 0.0015
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 245.25,
      end: 248.125,
      text: 'You did with the ones place first and then you got the tens.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2122,
          surprise: 0.0927,
          suspense: 0.0672,
          happiness: 0.3198,
          neutral: 0.2826,
          sadness: 0.0256
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0001,
          Creating: 0.0003,
          Evaluating: 0.0001,
          None: 0.0003,
          Remembering: 0.989,
          Understanding: 0.0098
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 248.125,
      end: 249.935,
      text: 'Right? How did you know how to do that?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0711,
          surprise: 0.165,
          suspense: 0.2138,
          happiness: 0.1999,
          neutral: 0.1384,
          sadness: 0.2117
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9425,
          Applying: 0.0089,
          Creating: 0.0324,
          Evaluating: 0.002,
          None: 0.0007,
          Remembering: 0.0088,
          Understanding: 0.0047
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 251.0,
      end: 255.125,
      text: 'because my teacher shown us how to do it.',
      speakers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.5874,
          surprise: 0.0067,
          suspense: 0.0821,
          happiness: 0.3112,
          neutral: 0.0114,
          sadness: 0.0012
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0054,
          Applying: 0.003,
          Creating: 0.9897,
          Evaluating: 0.0009,
          None: 0.0001,
          Remembering: 0.0008,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.375,
          Creating: 0.0,
          Remembering: 0.25,
          Evaluating: 0.0,
          Understanding: 0.125,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 255.25,
      end: 256.375,
      text: 'Okay. So yeah.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0791,
          surprise: 0.3365,
          suspense: 0.1115,
          happiness: 0.219,
          neutral: 0.0989,
          sadness: 0.155
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0505,
          Applying: 0.0054,
          Creating: 0.0067,
          Evaluating: 0.1811,
          None: 0.0049,
          Remembering: 0.6747,
          Understanding: 0.0767
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 256.375,
      end: 258.0,
      text: 'Good answer right?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1241,
          surprise: 0.1748,
          suspense: 0.2809,
          happiness: 0.2016,
          neutral: 0.0781,
          sadness: 0.1405
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9807,
          Applying: 0.0004,
          Creating: 0.0004,
          Evaluating: 0.0028,
          None: 0.0007,
          Remembering: 0.0006,
          Understanding: 0.0144
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 258.09,
      end: 258.75,
      text: 'Alright. Good.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0433,
          surprise: 0.3922,
          suspense: 0.0556,
          happiness: 0.1668,
          neutral: 0.1057,
          sadness: 0.2364
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.023,
          Applying: 0.0044,
          Creating: 0.0104,
          Evaluating: 0.0678,
          None: 0.0269,
          Remembering: 0.0086,
          Understanding: 0.8589
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 258.75,
      end: 259.375,
      text: 'High five.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0398,
          surprise: 0.3408,
          suspense: 0.1017,
          happiness: 0.1203,
          neutral: 0.1469,
          sadness: 0.2504
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 259.375,
      end: 260.25,
      text: 'Right on.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0866,
          surprise: 0.2321,
          suspense: 0.0903,
          happiness: 0.2803,
          neutral: 0.1314,
          sadness: 0.1792
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 260.25,
      end: 261.75,
      text: "But I'm not sure yet.",
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0666,
          surprise: 0.2102,
          suspense: 0.297,
          happiness: 0.2378,
          neutral: 0.0802,
          sadness: 0.1082
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.004,
          Applying: 0.005,
          Creating: 0.0275,
          Evaluating: 0.4234,
          None: 0.0253,
          Remembering: 0.4994,
          Understanding: 0.0155
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 261.75,
      end: 265.495,
      text: 'I need to see somebody else tell me if they know this was, you can sit down sweetheart.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.5303,
          surprise: 0.04,
          suspense: 0.0433,
          happiness: 0.3193,
          neutral: 0.0588,
          sadness: 0.0082
        },
        class: 'passion'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9683,
          Applying: 0.005,
          Creating: 0.0222,
          Evaluating: 0.0005,
          None: 0.0009,
          Remembering: 0.0005,
          Understanding: 0.0026
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 265.75,
      end: 268.75,
      text: "Somebody else tell me the solution, young man, why don't you come on up here?",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2552,
          surprise: 0.0701,
          suspense: 0.0962,
          happiness: 0.1853,
          neutral: 0.3503,
          sadness: 0.043
        },
        class: 'neutral'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.8726,
          Applying: 0.0123,
          Creating: 0.1011,
          Evaluating: 0.0016,
          None: 0.008,
          Remembering: 0.0013,
          Understanding: 0.0032
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.6,
          Remembering: 0.4,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 268.75,
      end: 270.25,
      text: 'Actually, you can stay right there.',
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0835,
          surprise: 0.2242,
          suspense: 0.2535,
          happiness: 0.2351,
          neutral: 0.0859,
          sadness: 0.1178
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.1744,
          Applying: 0.0066,
          Creating: 0.2377,
          Evaluating: 0.3366,
          None: 0.1406,
          Remembering: 0.0158,
          Understanding: 0.0883
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 1.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 270.25,
      end: 271.0,
      text: 'Stand up there.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.097,
          surprise: 0.2634,
          suspense: 0.0527,
          happiness: 0.2542,
          neutral: 0.1446,
          sadness: 0.1881
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0003,
          Creating: 0.0002,
          Evaluating: 0.0002,
          None: 0.9987,
          Remembering: 0.0001,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 271.0,
      end: 272.66,
      text: 'Go ahead and stay on up right there.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0879,
          surprise: 0.1928,
          suspense: 0.2511,
          happiness: 0.1961,
          neutral: 0.1118,
          sadness: 0.1603
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0004,
          Evaluating: 0.0003,
          None: 0.9989,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 273.0,
      end: 273.75,
      text: 'What is your name?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0766,
          surprise: 0.2631,
          suspense: 0.0551,
          happiness: 0.2544,
          neutral: 0.1331,
          sadness: 0.2177
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9999,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 273.75,
      end: 275.25,
      text: 'Haveen. Haveen?',
      speakers: [0, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0948,
          surprise: 0.2658,
          suspense: 0.2272,
          happiness: 0.2258,
          neutral: 0.0919,
          sadness: 0.0946
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 276.0,
      end: 277.25,
      text: 'Haveen. Haveen.',
      speakers: [0, 1],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.081,
          surprise: 0.2979,
          suspense: 0.1432,
          happiness: 0.25,
          neutral: 0.1008,
          sadness: 0.127
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 277.5,
      end: 280.5,
      text: 'Alright. Haveen, can you tell me the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.7917,
          surprise: 0.0214,
          suspense: 0.0831,
          happiness: 0.09,
          neutral: 0.0104,
          sadness: 0.0034
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0362,
          Applying: 0.012,
          Creating: 0.9504,
          Evaluating: 0.0004,
          None: 0.0002,
          Remembering: 0.0003,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.6667,
          Remembering: 0.3333,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 282.0,
      end: 284.0,
      text: 'This solution is five.',
      speakers: [2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0544,
          surprise: 0.1222,
          suspense: 0.2395,
          happiness: 0.1555,
          neutral: 0.15,
          sadness: 0.2784
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.1497,
          Applying: 0.018,
          Creating: 0.2227,
          Evaluating: 0.1813,
          None: 0.0127,
          Remembering: 0.3268,
          Understanding: 0.0889
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 284.25,
      end: 285.0,
      text: 'Oh, okay.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0761,
          surprise: 0.2717,
          suspense: 0.0621,
          happiness: 0.2212,
          neutral: 0.1357,
          sadness: 0.2332
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0084,
          Applying: 0.0019,
          Creating: 0.0024,
          Evaluating: 0.0199,
          None: 0.0015,
          Remembering: 0.8909,
          Understanding: 0.0751
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 285.25,
      end: 287.25,
      text: 'Great. You are in agreement with your classmate.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.062,
          surprise: 0.1103,
          suspense: 0.2905,
          happiness: 0.1545,
          neutral: 0.1101,
          sadness: 0.2727
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0005,
          Creating: 0.0003,
          Evaluating: 0.001,
          None: 0.002,
          Remembering: 0.9417,
          Understanding: 0.0544
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 1.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 287.5,
      end: 290.5,
      text: 'How do you know that the solution is five?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3365,
          surprise: 0.0671,
          suspense: 0.302,
          happiness: 0.2411,
          neutral: 0.0184,
          sadness: 0.0348
        },
        class: 'passion'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0003,
          Creating: 0.0002,
          Evaluating: 0.011,
          None: 0.0001,
          Remembering: 0.0003,
          Understanding: 0.988
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 290.53,
      end: 295.0,
      text: "I know that you're using a five because I added.",
      speakers: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.3442,
          surprise: 0.015,
          suspense: 0.2917,
          happiness: 0.3417,
          neutral: 0.0041,
          sadness: 0.0032
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0011,
          Applying: 0.0146,
          Creating: 0.7687,
          Evaluating: 0.0045,
          None: 0.1717,
          Remembering: 0.0367,
          Understanding: 0.0026
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 295.5,
      end: 296.75,
      text: 'Tell me what you added?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1045,
          surprise: 0.2833,
          suspense: 0.1356,
          happiness: 0.2845,
          neutral: 0.078,
          sadness: 0.1141
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0001,
          None: 0.0,
          Remembering: 0.0002,
          Understanding: 0.9997
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.25,
          Creating: 0.25,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 297.75,
      end: 299.625,
      text: 'I added five.',
      speakers: [1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0605,
          surprise: 0.1286,
          suspense: 0.2447,
          happiness: 0.1569,
          neutral: 0.1222,
          sadness: 0.287
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.2144,
          Applying: 0.027,
          Creating: 0.046,
          Evaluating: 0.0409,
          None: 0.1504,
          Remembering: 0.038,
          Understanding: 0.4834
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 1.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 299.625,
      end: 301.125,
      text: 'But how did you come to five?',
      speakers: [1, 1, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0804,
          surprise: 0.223,
          suspense: 0.2611,
          happiness: 0.2198,
          neutral: 0.092,
          sadness: 0.1237
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0005,
          Applying: 0.0003,
          Creating: 0.0053,
          Evaluating: 0.0082,
          None: 0.0011,
          Remembering: 0.9833,
          Understanding: 0.0013
        }
      },
      blooms_custom: {
        class: 'Analyzing',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 301.125,
      end: 303.5,
      text: 'Did you start with five or did you start with a different number?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.027,
          surprise: 0.1035,
          suspense: 0.2654,
          happiness: 0.1243,
          neutral: 0.1835,
          sadness: 0.2963
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0007,
          Applying: 0.0046,
          Creating: 0.0302,
          Evaluating: 0.0082,
          None: 0.0089,
          Remembering: 0.9457,
          Understanding: 0.0017
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 303.5,
      end: 305.75,
      text: 'Tell me tell me how you figure that out.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.036,
          surprise: 0.083,
          suspense: 0.232,
          happiness: 0.1241,
          neutral: 0.1608,
          sadness: 0.3641
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.2629,
          Applying: 0.0004,
          Creating: 0.0017,
          Evaluating: 0.0008,
          None: 0.0001,
          Remembering: 0.0006,
          Understanding: 0.7335
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.3333,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 306.75,
      end: 309.25,
      text: 'I am started with twenty four.',
      speakers: [2, 2, 2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0189,
          surprise: 0.1183,
          suspense: 0.2958,
          happiness: 0.1087,
          neutral: 0.139,
          sadness: 0.3193
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.001,
          Applying: 0.0009,
          Creating: 0.0095,
          Evaluating: 0.0012,
          None: 0.9749,
          Remembering: 0.0072,
          Understanding: 0.0053
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 309.5,
      end: 312.75,
      text: 'Okay. And then how did you how did you get to five?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0906,
          surprise: 0.1189,
          suspense: 0.3038,
          happiness: 0.3274,
          neutral: 0.121,
          sadness: 0.0382
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0009,
          Applying: 0.0009,
          Creating: 0.0081,
          Evaluating: 0.0109,
          None: 0.0019,
          Remembering: 0.891,
          Understanding: 0.0863
        }
      },
      blooms_custom: {
        class: 'Analyzing',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 313.75,
      end: 314.545,
      text: 'I did some.',
      speakers: [1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0862,
          surprise: 0.2802,
          suspense: 0.0998,
          happiness: 0.3202,
          neutral: 0.0885,
          sadness: 0.1251
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0004,
          Applying: 0.001,
          Creating: 0.0011,
          Evaluating: 0.0027,
          None: 0.001,
          Remembering: 0.985,
          Understanding: 0.0087
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 315.0,
      end: 316.75,
      text: 'I counted it up.',
      speakers: [1, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0853,
          surprise: 0.1689,
          suspense: 0.2536,
          happiness: 0.1851,
          neutral: 0.1092,
          sadness: 0.1979
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0034,
          Applying: 0.0115,
          Creating: 0.902,
          Evaluating: 0.0048,
          None: 0.0666,
          Remembering: 0.0028,
          Understanding: 0.0087
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 316.75,
      end: 321.75,
      text: 'I started in twenty nine .',
      speakers: [2, 0, 2, 2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.7624,
          surprise: 0.0061,
          suspense: 0.0849,
          happiness: 0.1413,
          neutral: 0.0041,
          sadness: 0.0011
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0003,
          Creating: 0.0009,
          Evaluating: 0.0005,
          None: 0.9973,
          Remembering: 0.0003,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 322.25,
      end: 325.75,
      text: 'Alright.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3685,
          surprise: 0.0403,
          suspense: 0.1642,
          happiness: 0.3737,
          neutral: 0.0321,
          sadness: 0.0212
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0246,
          Applying: 0.0139,
          Creating: 0.0502,
          Evaluating: 0.1034,
          None: 0.3276,
          Remembering: 0.0281,
          Understanding: 0.4522
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 325.75,
      end: 326.5,
      text: "That's awesome.",
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0876,
          surprise: 0.2728,
          suspense: 0.0523,
          happiness: 0.2377,
          neutral: 0.1565,
          sadness: 0.1931
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 326.5,
      end: 327.75,
      text: 'I like the way you did that.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1301,
          surprise: 0.2455,
          suspense: 0.1395,
          happiness: 0.2841,
          neutral: 0.0843,
          sadness: 0.1165
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0111,
          Applying: 0.0057,
          Creating: 0.023,
          Evaluating: 0.0022,
          None: 0.0033,
          Remembering: 0.2412,
          Understanding: 0.7135
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 327.75,
      end: 330.0,
      text: "Alright. There's two people that have the same solution.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0295,
          surprise: 0.0884,
          suspense: 0.2,
          happiness: 0.1222,
          neutral: 0.211,
          sadness: 0.3488
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0212,
          Applying: 0.0027,
          Creating: 0.0055,
          Evaluating: 0.0907,
          None: 0.8738,
          Remembering: 0.0036,
          Understanding: 0.0026
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 330.25,
      end: 332.5,
      text: 'Anybody else have the same solution?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0378,
          surprise: 0.1063,
          suspense: 0.2166,
          happiness: 0.1599,
          neutral: 0.2159,
          sadness: 0.2635
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0361,
          Applying: 0.0058,
          Creating: 0.003,
          Evaluating: 0.9356,
          None: 0.0007,
          Remembering: 0.014,
          Understanding: 0.0048
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 332.5,
      end: 333.5,
      text: 'Or do you have the same solution?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0702,
          surprise: 0.2686,
          suspense: 0.1082,
          happiness: 0.1567,
          neutral: 0.1256,
          sadness: 0.2707
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.9999,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 333.5,
      end: 334.75,
      text: 'Or what is your name young lady?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1035,
          surprise: 0.2912,
          suspense: 0.1306,
          happiness: 0.2787,
          neutral: 0.0696,
          sadness: 0.1263
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9996,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 334.75,
      end: 335.25,
      text: 'Wait. Go ahead.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0341,
          surprise: 0.2798,
          suspense: 0.0945,
          happiness: 0.1253,
          neutral: 0.1694,
          sadness: 0.2969
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0152,
          Applying: 0.0038,
          Creating: 0.0202,
          Evaluating: 0.4984,
          None: 0.0496,
          Remembering: 0.0104,
          Understanding: 0.4024
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 335.25,
      end: 336.25,
      text: 'You can you can sit down.',
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0716,
          surprise: 0.3106,
          suspense: 0.1014,
          happiness: 0.1471,
          neutral: 0.1154,
          sadness: 0.2539
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.1851,
          Applying: 0.049,
          Creating: 0.3563,
          Evaluating: 0.1057,
          None: 0.2914,
          Remembering: 0.0035,
          Understanding: 0.0091
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 336.25,
      end: 337.21002,
      text: "What's your name?",
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1095,
          surprise: 0.2674,
          suspense: 0.1034,
          happiness: 0.2272,
          neutral: 0.1096,
          sadness: 0.1829
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0002,
          Evaluating: 0.0001,
          None: 0.0001,
          Remembering: 0.9724,
          Understanding: 0.0269
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 337.5,
      end: 339.5,
      text: 'Jaselle, can you stand up for me?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0485,
          surprise: 0.1169,
          suspense: 0.2224,
          happiness: 0.1557,
          neutral: 0.1464,
          sadness: 0.3101
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.1085,
          Applying: 0.0085,
          Creating: 0.0479,
          Evaluating: 0.0512,
          None: 0.7556,
          Remembering: 0.0026,
          Understanding: 0.0258
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 340.5,
      end: 343.5,
      text: 'And what did you find as a solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4652,
          surprise: 0.029,
          suspense: 0.2936,
          happiness: 0.155,
          neutral: 0.0374,
          sadness: 0.0197
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.9996,
          Evaluating: 0.0001,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.3333,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 345.09503,
      end: 347.75,
      text: 'Go ahead and start with the sentence for me.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0191,
          surprise: 0.0954,
          suspense: 0.2499,
          happiness: 0.1421,
          neutral: 0.255,
          sadness: 0.2386
        },
        class: 'neutral'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0758,
          Applying: 0.0345,
          Creating: 0.018,
          Evaluating: 0.0156,
          None: 0.1852,
          Remembering: 0.0251,
          Understanding: 0.6458
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 347.75,
      end: 349.25,
      text: 'For your I know.',
      speakers: [0, 0, 1, 1],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0737,
          surprise: 0.2857,
          suspense: 0.2071,
          happiness: 0.2113,
          neutral: 0.0994,
          sadness: 0.1228
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0083,
          Applying: 0.0018,
          Creating: 0.0021,
          Evaluating: 0.0058,
          None: 0.0015,
          Remembering: 0.0667,
          Understanding: 0.9138
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 349.5,
      end: 351.5,
      text: 'that solution is five.',
      speakers: [3, 3, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0484,
          surprise: 0.1369,
          suspense: 0.2169,
          happiness: 0.1687,
          neutral: 0.1538,
          sadness: 0.2753
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0192,
          Applying: 0.0075,
          Creating: 0.5788,
          Evaluating: 0.013,
          None: 0.0017,
          Remembering: 0.3701,
          Understanding: 0.0097
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 351.5,
      end: 361.25,
      text: 'I know because Nine minus four equals five and four plus five equals nine .',
      speakers: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.4218,
          surprise: 0.0021,
          suspense: 0.1726,
          happiness: 0.4002,
          neutral: 0.0016,
          sadness: 0.0017
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0023,
          Creating: 0.0006,
          Evaluating: 0.0003,
          None: 0.0077,
          Remembering: 0.987,
          Understanding: 0.0019
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 364.5,
      end: 369.5,
      text: 'Whoa. So you did are you telling me correct me if I wrong, did you use subtraction?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4557,
          surprise: 0.0346,
          suspense: 0.1605,
          happiness: 0.283,
          neutral: 0.0584,
          sadness: 0.0078
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0032,
          Applying: 0.0719,
          Creating: 0.2034,
          Evaluating: 0.2335,
          None: 0.0046,
          Remembering: 0.4343,
          Understanding: 0.0491
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.4286,
          Creating: 0.1429,
          Remembering: 0.2857,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.1429,
          None: -9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 370.13004,
      end: 372.75,
      text: 'to help you solve an additional problem? Yes',
      speakers: [0, 0, 0, 0, 0, 0, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0253,
          surprise: 0.0435,
          suspense: 0.2693,
          happiness: 0.1555,
          neutral: 0.2541,
          sadness: 0.2523
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0005,
          Applying: 0.0133,
          Creating: 0.9856,
          Evaluating: 0.0003,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.5,
          Creating: 0.25,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 372.75,
      end: 378.0,
      text: 'Good. I need one more person to help me out here.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.185,
          surprise: 0.0324,
          suspense: 0.2291,
          happiness: 0.4889,
          neutral: 0.0311,
          sadness: 0.0334
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0012,
          Applying: 0.003,
          Creating: 0.86,
          Evaluating: 0.0562,
          None: 0.0779,
          Remembering: 0.0008,
          Understanding: 0.0009
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 378.0,
      end: 378.75,
      text: 'One more person.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0727,
          surprise: 0.2865,
          suspense: 0.0611,
          happiness: 0.2285,
          neutral: 0.1214,
          sadness: 0.2298
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0003,
          Evaluating: 0.0001,
          None: 0.999,
          Remembering: 0.0,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 378.75,
      end: 379.25,
      text: 'One more person.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0334,
          surprise: 0.2979,
          suspense: 0.067,
          happiness: 0.1336,
          neutral: 0.169,
          sadness: 0.2991
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0003,
          Evaluating: 0.0001,
          None: 0.999,
          Remembering: 0.0,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 379.25,
      end: 379.72504,
      text: 'You ready? Stand up',
      speakers: [0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0361,
          surprise: 0.2352,
          suspense: 0.1119,
          happiness: 0.1545,
          neutral: 0.1631,
          sadness: 0.2992
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0053,
          Applying: 0.0018,
          Creating: 0.0071,
          Evaluating: 0.8592,
          None: 0.0075,
          Remembering: 0.0077,
          Understanding: 0.1115
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 380.5,
      end: 381.25,
      text: 'What is your name?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0994,
          surprise: 0.2505,
          suspense: 0.0455,
          happiness: 0.2427,
          neutral: 0.1627,
          sadness: 0.1991
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9999,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 381.25,
      end: 383.0,
      text: 'Rhianna. Rhianna.',
      speakers: [0, 1],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0522,
          surprise: 0.1649,
          suspense: 0.1826,
          happiness: 0.1995,
          neutral: 0.138,
          sadness: 0.2628
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 383.5,
      end: 386.75,
      text: 'Okay. Rhianna, what is your solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2739,
          surprise: 0.0947,
          suspense: 0.1192,
          happiness: 0.305,
          neutral: 0.1217,
          sadness: 0.0855
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0214,
          Applying: 0.0209,
          Creating: 0.9236,
          Evaluating: 0.0311,
          None: 0.0004,
          Remembering: 0.002,
          Understanding: 0.0007
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 387.5,
      end: 388.5,
      text: 'Five. k.',
      speakers: [2, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0825,
          surprise: 0.2662,
          suspense: 0.1372,
          happiness: 0.2146,
          neutral: 0.1031,
          sadness: 0.1964
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0011,
          Applying: 0.0077,
          Creating: 0.0166,
          Evaluating: 0.0013,
          None: 0.0084,
          Remembering: 0.9401,
          Understanding: 0.0249
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 388.5,
      end: 390.0,
      text: 'Use the sentence for me, please.',
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0796,
          surprise: 0.199,
          suspense: 0.3025,
          happiness: 0.2068,
          neutral: 0.0898,
          sadness: 0.1223
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.0,
          Evaluating: 0.0001,
          None: 0.0,
          Remembering: 0.0001,
          Understanding: 0.9997
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 390.5,
      end: 392.75,
      text: 'I know the solution is five.',
      speakers: [1, 1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0563,
          surprise: 0.0635,
          suspense: 0.2418,
          happiness: 0.1291,
          neutral: 0.1393,
          sadness: 0.37
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0315,
          Applying: 0.0085,
          Creating: 0.0043,
          Evaluating: 0.0331,
          None: 0.0014,
          Remembering: 0.68,
          Understanding: 0.2411
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 392.75,
      end: 395.13504,
      text: 'And how do you know the solution is five?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.023,
          surprise: 0.0948,
          suspense: 0.2972,
          happiness: 0.0872,
          neutral: 0.1389,
          sadness: 0.3589
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0044,
          None: 0.0001,
          Remembering: 0.0002,
          Understanding: 0.9948
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 396.0,
      end: 403.75,
      text: 'I know this because I started with 24 in for my head and I counted on in my head to get to twenty nine.',
      speakers: [
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2
      ],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.4862,
          surprise: 0.0183,
          suspense: 0.1976,
          happiness: 0.2869,
          neutral: 0.0066,
          sadness: 0.0043
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0232,
          Creating: 0.0136,
          Evaluating: 0.0113,
          None: 0.1094,
          Remembering: 0.8416,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.6667,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.3333,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 403.75,
      end: 404.25,
      text: 'Oh, okay.',
      speakers: [2, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0328,
          surprise: 0.2848,
          suspense: 0.0831,
          happiness: 0.1269,
          neutral: 0.1707,
          sadness: 0.3018
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0084,
          Applying: 0.0019,
          Creating: 0.0024,
          Evaluating: 0.0199,
          None: 0.0015,
          Remembering: 0.8909,
          Understanding: 0.0751
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 404.25,
      end: 405.0,
      text: 'You counted in your head.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.077,
          surprise: 0.2817,
          suspense: 0.0646,
          happiness: 0.2215,
          neutral: 0.1227,
          sadness: 0.2327
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0097,
          Applying: 0.0006,
          Creating: 0.001,
          Evaluating: 0.0049,
          None: 0.001,
          Remembering: 0.0021,
          Understanding: 0.9808
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 405.0,
      end: 406.25,
      text: 'Does that do we ever do that?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1094,
          surprise: 0.2974,
          suspense: 0.1343,
          happiness: 0.2515,
          neutral: 0.0814,
          sadness: 0.1259
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0037,
          Applying: 0.0103,
          Creating: 0.9278,
          Evaluating: 0.0493,
          None: 0.0004,
          Remembering: 0.0078,
          Understanding: 0.0007
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 406.25,
      end: 407.08334,
      text: 'You guys count your head.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0989,
          surprise: 0.2181,
          suspense: 0.0921,
          happiness: 0.2628,
          neutral: 0.1352,
          sadness: 0.1929
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0033,
          Applying: 0.0012,
          Creating: 0.0016,
          Evaluating: 0.0172,
          None: 0.0035,
          Remembering: 0.0045,
          Understanding: 0.9687
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 407.08334,
      end: 409.75,
      text: 'Do you guys use something to help you count your head sometimes? No',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.1056,
          surprise: 0.0654,
          suspense: 0.2966,
          happiness: 0.1876,
          neutral: 0.1882,
          sadness: 0.1566
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0002,
          Creating: 0.0008,
          Evaluating: 0.9986,
          None: 0.0002,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.3333,
          Creating: 0.0,
          Remembering: 0.3333,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.3333,
          None: 9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 410.24506,
      end: 411.75,
      text: 'Oh, you just use your head.',
      speakers: [2, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1026,
          surprise: 0.2376,
          suspense: 0.2911,
          happiness: 0.2065,
          neutral: 0.0686,
          sadness: 0.0935
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.003,
          Applying: 0.0076,
          Creating: 0.0102,
          Evaluating: 0.0689,
          None: 0.0427,
          Remembering: 0.0152,
          Understanding: 0.8522
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 411.75,
      end: 414.5,
      text: 'Does anybody ever use their fingers?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0603,
          surprise: 0.015,
          suspense: 0.5504,
          happiness: 0.2673,
          neutral: 0.0766,
          sadness: 0.0303
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0043,
          Applying: 0.0018,
          Creating: 0.0036,
          Evaluating: 0.043,
          None: 0.0065,
          Remembering: 0.9388,
          Understanding: 0.002
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 416.75,
      end: 418.375,
      text: 'Sometimes, Sometimes I do this.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0693,
          surprise: 0.2092,
          suspense: 0.2095,
          happiness: 0.2043,
          neutral: 0.1526,
          sadness: 0.1551
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0677,
          Applying: 0.0179,
          Creating: 0.0233,
          Evaluating: 0.2788,
          None: 0.012,
          Remembering: 0.2938,
          Understanding: 0.3066
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 418.375,
      end: 419.0,
      text: 'I go.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.045,
          surprise: 0.3752,
          suspense: 0.0924,
          happiness: 0.1243,
          neutral: 0.1482,
          sadness: 0.2149
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0132,
          Applying: 0.0039,
          Creating: 0.0112,
          Evaluating: 0.024,
          None: 0.007,
          Remembering: 0.0126,
          Understanding: 0.9282
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 420.75,
      end: 421.25,
      text: 'Thank you.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.032,
          surprise: 0.2869,
          suspense: 0.079,
          happiness: 0.1239,
          neutral: 0.1667,
          sadness: 0.3116
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0003,
          Evaluating: 0.0014,
          None: 0.0001,
          Remembering: 0.0179,
          Understanding: 0.98
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 421.25,
      end: 421.75,
      text: 'That way.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0322,
          surprise: 0.2812,
          suspense: 0.0817,
          happiness: 0.1125,
          neutral: 0.1635,
          sadness: 0.3289
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0549,
          Applying: 0.0208,
          Creating: 0.8073,
          Evaluating: 0.0072,
          None: 0.012,
          Remembering: 0.0319,
          Understanding: 0.0659
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 421.75,
      end: 422.75,
      text: 'Alright? Alright.',
      speakers: [0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0714,
          surprise: 0.2918,
          suspense: 0.1068,
          happiness: 0.1908,
          neutral: 0.1077,
          sadness: 0.2316
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 422.75,
      end: 424.5,
      text: 'Good. Thank thank you for that.',
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0888,
          surprise: 0.1378,
          suspense: 0.2886,
          happiness: 0.2033,
          neutral: 0.0865,
          sadness: 0.1951
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0006,
          Applying: 0.0008,
          Creating: 0.0143,
          Evaluating: 0.0007,
          None: 0.0001,
          Remembering: 0.0008,
          Understanding: 0.9828
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 424.5,
      end: 425.875,
      text: 'Alright. guys are pretty good.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0794,
          surprise: 0.3015,
          suspense: 0.1434,
          happiness: 0.2452,
          neutral: 0.0962,
          sadness: 0.1342
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0158,
          Applying: 0.0031,
          Creating: 0.0054,
          Evaluating: 0.2623,
          None: 0.0292,
          Remembering: 0.67,
          Understanding: 0.0142
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 425.875,
      end: 427.625,
      text: 'Your teacher said you were pretty good at math.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0534,
          surprise: 0.1746,
          suspense: 0.2633,
          happiness: 0.1761,
          neutral: 0.107,
          sadness: 0.2255
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9992,
          None: 0.0,
          Remembering: 0.0002,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 1.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 427.625,
      end: 429.0,
      text: 'You guys ready for another one?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0663,
          surprise: 0.3317,
          suspense: 0.1769,
          happiness: 0.1952,
          neutral: 0.1028,
          sadness: 0.127
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.001,
          Applying: 0.0057,
          Creating: 0.9772,
          Evaluating: 0.0019,
          None: 0.012,
          Remembering: 0.0003,
          Understanding: 0.002
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 429.0,
      end: 435.5,
      text: 'Yay. By the way, the guy is using the things that made okay.',
      speakers: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.1752,
          surprise: 0.0962,
          suspense: 0.4134,
          happiness: 0.1808,
          neutral: 0.0844,
          sadness: 0.05
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.6612,
          Applying: 0.0184,
          Creating: 0.0106,
          Evaluating: 0.006,
          None: 0.024,
          Remembering: 0.192,
          Understanding: 0.0879
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 435.5,
      end: 437.25,
      text: "You don't have to say, I don't use my fingers.",
      speakers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0729,
          surprise: 0.1671,
          suspense: 0.241,
          happiness: 0.1855,
          neutral: 0.1074,
          sadness: 0.2261
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9996,
          None: 0.0,
          Remembering: 0.0001,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 437.25,
      end: 438.5,
      text: "You don't need to say.",
      speakers: [3, 3, 3, 3, 3],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.133,
          surprise: 0.2371,
          suspense: 0.1418,
          happiness: 0.2809,
          neutral: 0.0765,
          sadness: 0.1306
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0012,
          Applying: 0.0005,
          Creating: 0.0037,
          Evaluating: 0.9931,
          None: 0.0004,
          Remembering: 0.0003,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 439.25,
      end: 441.75,
      text: "I'm a I'm a mathematician and sometimes I use my fingers.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0176,
          surprise: 0.0873,
          suspense: 0.2888,
          happiness: 0.1076,
          neutral: 0.2089,
          sadness: 0.2898
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.9999,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 441.75,
      end: 449.5,
      text: 'A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do.',
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0
      ],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1807,
          surprise: 0.0309,
          suspense: 0.4453,
          happiness: 0.2338,
          neutral: 0.0695,
          sadness: 0.0399
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0079,
          Applying: 0.0013,
          Creating: 0.9664,
          Evaluating: 0.0118,
          None: 0.0117,
          Remembering: 0.0003,
          Understanding: 0.0005
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.25,
          Creating: 0.25,
          Remembering: 0.25,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 449.5,
      end: 452.25,
      text: 'But sometimes when I get over ten, I run out of fingers.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1309,
          surprise: 0.0121,
          suspense: 0.6443,
          happiness: 0.1501,
          neutral: 0.029,
          sadness: 0.0335
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0009,
          Applying: 0.0026,
          Creating: 0.0217,
          Evaluating: 0.0047,
          None: 0.4038,
          Remembering: 0.562,
          Understanding: 0.0043
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 454.5,
      end: 455.0,
      text: 'Alright, guys.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0301,
          surprise: 0.2741,
          suspense: 0.0822,
          happiness: 0.1135,
          neutral: 0.175,
          sadness: 0.3251
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 455.0,
      end: 457.5,
      text: 'Ready? Okay.',
      speakers: [0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0748,
          surprise: 0.0628,
          suspense: 0.3892,
          happiness: 0.1397,
          neutral: 0.1482,
          sadness: 0.1852
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0159,
          Applying: 0.0034,
          Creating: 0.0057,
          Evaluating: 0.76,
          None: 0.0105,
          Remembering: 0.031,
          Understanding: 0.1733
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 458.0,
      end: 459.75,
      text: 'Same rules apply.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0727,
          surprise: 0.1696,
          suspense: 0.2352,
          happiness: 0.1756,
          neutral: 0.1208,
          sadness: 0.226
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0017,
          Applying: 0.391,
          Creating: 0.007,
          Evaluating: 0.0035,
          None: 0.0007,
          Remembering: 0.5884,
          Understanding: 0.0076
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 460.25,
      end: 462.0,
      text: "We're not gonna shout of an answer.",
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0592,
          surprise: 0.1599,
          suspense: 0.2308,
          happiness: 0.1591,
          neutral: 0.1455,
          sadness: 0.2454
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Applying',
        results: {
          Analyzing: 0.0184,
          Applying: 0.429,
          Creating: 0.2481,
          Evaluating: 0.1246,
          None: 0.0054,
          Remembering: 0.0117,
          Understanding: 0.1628
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 462.26508,
      end: 463.75,
      text: 'No need to raise your hands yet.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0559,
          surprise: 0.2576,
          suspense: 0.2552,
          happiness: 0.2064,
          neutral: 0.0928,
          sadness: 0.1319
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.9999,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 463.75,
      end: 466.5,
      text: 'I want you to think about this is a little bit different problem.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.103,
          surprise: 0.01,
          suspense: 0.4775,
          happiness: 0.2611,
          neutral: 0.1129,
          sadness: 0.0355
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.9998,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 466.5,
      end: 469.5,
      text: 'This is a story problem or a word problem.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2598,
          surprise: 0.063,
          suspense: 0.2215,
          happiness: 0.4241,
          neutral: 0.0193,
          sadness: 0.0124
        },
        class: 'happiness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0011,
          Applying: 0.0023,
          Creating: 0.0218,
          Evaluating: 0.0204,
          None: 0.9489,
          Remembering: 0.0014,
          Understanding: 0.004
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 469.5,
      end: 471.0,
      text: 'Mhmm. Okay?',
      speakers: [0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0756,
          surprise: 0.2494,
          suspense: 0.2479,
          happiness: 0.2231,
          neutral: 0.0913,
          sadness: 0.1127
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0084,
          Applying: 0.0019,
          Creating: 0.0024,
          Evaluating: 0.0199,
          None: 0.0015,
          Remembering: 0.8909,
          Understanding: 0.0751
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 471.0,
      end: 473.5,
      text: "So you're gonna have to read it with me.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0276,
          surprise: 0.0665,
          suspense: 0.2641,
          happiness: 0.1135,
          neutral: 0.2186,
          sadness: 0.3096
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0889,
          Applying: 0.009,
          Creating: 0.0651,
          Evaluating: 0.0409,
          None: 0.0371,
          Remembering: 0.6591,
          Understanding: 0.0999
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 473.5,
      end: 475.0,
      text: 'Think about what you know.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0719,
          surprise: 0.2612,
          suspense: 0.2696,
          happiness: 0.1754,
          neutral: 0.1035,
          sadness: 0.1184
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.004,
          Applying: 0.0018,
          Creating: 0.0024,
          Evaluating: 0.1149,
          None: 0.0007,
          Remembering: 0.8449,
          Understanding: 0.0314
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 475.5,
      end: 476.75,
      text: "Think about what you don't know.",
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1073,
          surprise: 0.2829,
          suspense: 0.1426,
          happiness: 0.3031,
          neutral: 0.0694,
          sadness: 0.0947
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.004,
          Applying: 0.0018,
          Creating: 0.0024,
          Evaluating: 0.1149,
          None: 0.0007,
          Remembering: 0.8449,
          Understanding: 0.0314
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 476.75,
      end: 482.0,
      text: "And there's some words in here that are gonna tell you what type of math problem this is.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4155,
          surprise: 0.0548,
          suspense: 0.2073,
          happiness: 0.2541,
          neutral: 0.0487,
          sadness: 0.0195
        },
        class: 'passion'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0001,
          None: 0.0,
          Remembering: 0.0001,
          Understanding: 0.9998
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.3333,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 482.0,
      end: 483.875,
      text: 'So I want you to be thinking about that.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0647,
          surprise: 0.1238,
          suspense: 0.2296,
          happiness: 0.1543,
          neutral: 0.1428,
          sadness: 0.2847
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0015,
          Evaluating: 0.9977,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 483.875,
      end: 490.5,
      text: "And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it.",
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0
      ],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3331,
          surprise: 0.022,
          suspense: 0.3638,
          happiness: 0.2667,
          neutral: 0.01,
          sadness: 0.0044
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9998,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.1667,
          Creating: 0.3333,
          Remembering: 0.3333,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.1667,
          None: 1.1102230246251565e-16
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 490.5,
      end: 491.0,
      text: 'Are you ready?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0319,
          surprise: 0.2936,
          suspense: 0.0694,
          happiness: 0.1229,
          neutral: 0.177,
          sadness: 0.3052
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0002,
          Creating: 0.0029,
          Evaluating: 0.0006,
          None: 0.0001,
          Remembering: 0.9949,
          Understanding: 0.0011
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 491.0,
      end: 493.5,
      text: 'Bless you.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0296,
          surprise: 0.1417,
          suspense: 0.2758,
          happiness: 0.1308,
          neutral: 0.1831,
          sadness: 0.239
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0138,
          Applying: 0.0027,
          Creating: 0.0041,
          Evaluating: 0.0391,
          None: 0.0036,
          Remembering: 0.1324,
          Understanding: 0.8044
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 493.5,
      end: 494.25,
      text: 'Bless you.',
      speakers: [0, 1],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0831,
          surprise: 0.2881,
          suspense: 0.0614,
          happiness: 0.2323,
          neutral: 0.1281,
          sadness: 0.207
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0138,
          Applying: 0.0027,
          Creating: 0.0041,
          Evaluating: 0.0391,
          None: 0.0036,
          Remembering: 0.1324,
          Understanding: 0.8044
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 495.25,
      end: 498.75,
      text: 'There are thirty two pink flowers.',
      speakers: [1, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3465,
          surprise: 0.0516,
          suspense: 0.1671,
          happiness: 0.3552,
          neutral: 0.0478,
          sadness: 0.0318
        },
        class: 'happiness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0004,
          Applying: 0.0003,
          Creating: 0.0018,
          Evaluating: 0.0005,
          None: 0.9879,
          Remembering: 0.0083,
          Understanding: 0.0009
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 499.5,
      end: 502.25,
      text: 'There are seven white flowers.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0735,
          surprise: 0.0161,
          suspense: 0.6446,
          happiness: 0.1263,
          neutral: 0.0806,
          sadness: 0.0588
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0005,
          Creating: 0.0021,
          Evaluating: 0.0014,
          None: 0.9713,
          Remembering: 0.0236,
          Understanding: 0.0009
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 502.75,
      end: 504.75,
      text: 'How many flowers in all?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0576,
          surprise: 0.1033,
          suspense: 0.2382,
          happiness: 0.1924,
          neutral: 0.1354,
          sadness: 0.273
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9987,
          Understanding: 0.0011
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 504.8701,
      end: 506.75,
      text: 'think about it.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0939,
          surprise: 0.1237,
          suspense: 0.262,
          happiness: 0.1699,
          neutral: 0.1265,
          sadness: 0.224
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0047,
          Applying: 0.0012,
          Creating: 0.0022,
          Evaluating: 0.8962,
          None: 0.0012,
          Remembering: 0.0923,
          Understanding: 0.0023
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 507.5,
      end: 508.5,
      text: 'Why do you know?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1215,
          surprise: 0.266,
          suspense: 0.1193,
          happiness: 0.2019,
          neutral: 0.1005,
          sadness: 0.1908
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0023,
          Applying: 0.0002,
          Creating: 0.0004,
          Evaluating: 0.024,
          None: 0.0003,
          Remembering: 0.0071,
          Understanding: 0.9657
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 508.75,
      end: 510.25,
      text: 'What do you need to know?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0579,
          surprise: 0.249,
          suspense: 0.2836,
          happiness: 0.1542,
          neutral: 0.1099,
          sadness: 0.1454
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0007,
          Evaluating: 0.9977,
          None: 0.0001,
          Remembering: 0.0011,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 510.75,
      end: 512.75,
      text: 'What type of problem is it?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0597,
          surprise: 0.1093,
          suspense: 0.2705,
          happiness: 0.1564,
          neutral: 0.1436,
          sadness: 0.2605
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9992,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 513.0,
      end: 515.5,
      text: 'And do you know what the solution is?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0308,
          surprise: 0.1047,
          suspense: 0.2897,
          happiness: 0.0971,
          neutral: 0.2111,
          sadness: 0.2665
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0013,
          Applying: 0.0003,
          Creating: 0.0003,
          Evaluating: 0.121,
          None: 0.0003,
          Remembering: 0.0011,
          Understanding: 0.8756
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 515.875,
      end: 518.0,
      text: 'Put your hands down.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0366,
          surprise: 0.0967,
          suspense: 0.1991,
          happiness: 0.1123,
          neutral: 0.1931,
          sadness: 0.3622
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.8861,
          Applying: 0.0028,
          Creating: 0.0076,
          Evaluating: 0.0106,
          None: 0.0379,
          Remembering: 0.0104,
          Understanding: 0.0446
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 521.1801,
      end: 527.5,
      text: "If you think you know if you haven't answered, give me a thumb to the chin.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2422,
          surprise: 0.0505,
          suspense: 0.435,
          happiness: 0.1828,
          neutral: 0.0453,
          sadness: 0.0442
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0005,
          Creating: 0.9976,
          Evaluating: 0.0012,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 1.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 527.5,
      end: 533.0,
      text: "If you're still working on it, Give me a thing your your point of finger to your chin.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4728,
          surprise: 0.0526,
          suspense: 0.1748,
          happiness: 0.2603,
          neutral: 0.0219,
          sadness: 0.0177
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0021,
          Creating: 0.0298,
          Evaluating: 0.7374,
          None: 0.2229,
          Remembering: 0.0029,
          Understanding: 0.0046
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.5,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 533.5,
      end: 534.5,
      text: 'I know the answer.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1144,
          surprise: 0.2789,
          suspense: 0.1215,
          happiness: 0.198,
          neutral: 0.0954,
          sadness: 0.1918
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0947,
          Applying: 0.0133,
          Creating: 0.0019,
          Evaluating: 0.0054,
          None: 0.0005,
          Remembering: 0.2178,
          Understanding: 0.6664
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 535.0,
      end: 536.75,
      text: "I'm still working on it.",
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0737,
          surprise: 0.153,
          suspense: 0.2574,
          happiness: 0.1579,
          neutral: 0.1222,
          sadness: 0.2358
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0051,
          Applying: 0.0006,
          Creating: 0.0022,
          Evaluating: 0.0136,
          None: 0.0098,
          Remembering: 0.9671,
          Understanding: 0.0017
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 538.0,
      end: 539.0,
      text: 'I know the answer.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1144,
          surprise: 0.2894,
          suspense: 0.1206,
          happiness: 0.2063,
          neutral: 0.0955,
          sadness: 0.1738
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0947,
          Applying: 0.0133,
          Creating: 0.0019,
          Evaluating: 0.0054,
          None: 0.0005,
          Remembering: 0.2178,
          Understanding: 0.6664
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 539.5,
      end: 541.0,
      text: "I'm still working on it.",
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0918,
          surprise: 0.2433,
          suspense: 0.2419,
          happiness: 0.2124,
          neutral: 0.0881,
          sadness: 0.1224
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0051,
          Applying: 0.0006,
          Creating: 0.0022,
          Evaluating: 0.0136,
          None: 0.0098,
          Remembering: 0.9671,
          Understanding: 0.0017
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 544.75,
      end: 546.0,
      text: 'Know the answer?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1159,
          surprise: 0.2718,
          suspense: 0.1344,
          happiness: 0.2882,
          neutral: 0.0779,
          sadness: 0.1119
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0668,
          Applying: 0.0186,
          Creating: 0.0023,
          Evaluating: 0.0425,
          None: 0.0011,
          Remembering: 0.2027,
          Understanding: 0.666
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 546.00507,
      end: 547.5,
      text: 'Still working on.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0771,
          surprise: 0.2176,
          suspense: 0.2728,
          happiness: 0.2173,
          neutral: 0.0951,
          sadness: 0.1201
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0132,
          Applying: 0.003,
          Creating: 0.0094,
          Evaluating: 0.0276,
          None: 0.1661,
          Remembering: 0.773,
          Understanding: 0.0076
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 554.07007,
      end: 557.0,
      text: 'Hey, good mathematicians.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1993,
          surprise: 0.0329,
          suspense: 0.4935,
          happiness: 0.2417,
          neutral: 0.0133,
          sadness: 0.0194
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0433,
          Applying: 0.0157,
          Creating: 0.0295,
          Evaluating: 0.0694,
          None: 0.0749,
          Remembering: 0.0341,
          Understanding: 0.7332
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 557.0,
      end: 559.5,
      text: 'Think about math before they even do it.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0224,
          surprise: 0.1661,
          suspense: 0.1892,
          happiness: 0.0863,
          neutral: 0.2381,
          sadness: 0.2979
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0022,
          Creating: 0.0026,
          Evaluating: 0.9851,
          None: 0.0009,
          Remembering: 0.0089,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 559.5,
      end: 562.25507,
      text: 'Are you ready to talk to your partner about it?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0511,
          surprise: 0.0224,
          suspense: 0.6986,
          happiness: 0.1227,
          neutral: 0.0757,
          sadness: 0.0294
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.9999,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 562.25507,
      end: 566.0,
      text: 'Take ten seconds, talk to your partner go.',
      speakers: [0, 0, 0, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.5032,
          surprise: 0.0078,
          suspense: 0.317,
          happiness: 0.1652,
          neutral: 0.0025,
          sadness: 0.0043
        },
        class: 'passion'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.01,
          Applying: 0.0104,
          Creating: 0.5692,
          Evaluating: 0.0066,
          None: 0.0432,
          Remembering: 0.344,
          Understanding: 0.0167
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 578.62506,
      end: 581.5,
      text: 'three. Two.',
      speakers: [1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.3265,
          surprise: 0.0121,
          suspense: 0.2257,
          happiness: 0.4106,
          neutral: 0.0182,
          sadness: 0.0069
        },
        class: 'happiness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0003,
          Creating: 0.001,
          Evaluating: 0.0002,
          None: 0.997,
          Remembering: 0.0007,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 582.5,
      end: 583.5,
      text: 'One. Alright.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1214,
          surprise: 0.3292,
          suspense: 0.1093,
          happiness: 0.2044,
          neutral: 0.091,
          sadness: 0.1447
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0118,
          Applying: 0.0152,
          Creating: 0.0622,
          Evaluating: 0.0038,
          None: 0.8566,
          Remembering: 0.0117,
          Understanding: 0.0387
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 584.0,
      end: 588.0,
      text: 'Did you and your partner agreed on what the solution was? Yes',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.3605,
          surprise: 0.0601,
          suspense: 0.1888,
          happiness: 0.307,
          neutral: 0.0664,
          sadness: 0.0172
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0098,
          Applying: 0.0007,
          Creating: 0.0055,
          Evaluating: 0.8335,
          None: 0.0032,
          Remembering: 0.0015,
          Understanding: 0.1458
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.3333,
          Remembering: 0.3333,
          Evaluating: 0.3333,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 588.0,
      end: 595.0525,
      text: "Now. I'm gonna need some people to tell me what the solution is, and how they solved it.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4823,
          surprise: 0.0237,
          suspense: 0.1742,
          happiness: 0.2192,
          neutral: 0.0901,
          sadness: 0.0107
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0006,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9991,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.1429,
          Creating: 0.4286,
          Remembering: 0.2857,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.1429,
          None: -9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 595.0525,
      end: 598.25,
      text: "We're gonna start with this young man right here.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2171,
          surprise: 0.1277,
          suspense: 0.2014,
          happiness: 0.3825,
          neutral: 0.0557,
          sadness: 0.0156
        },
        class: 'happiness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0004,
          Creating: 0.0005,
          Evaluating: 0.0001,
          None: 0.9985,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 598.25,
      end: 599.0,
      text: 'What is your name?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1052,
          surprise: 0.2353,
          suspense: 0.041,
          happiness: 0.2564,
          neutral: 0.1582,
          sadness: 0.2038
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9999,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 599.0,
      end: 601.68005,
      text: 'Aiden stand up for me.',
      speakers: [0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0558,
          surprise: 0.0498,
          suspense: 0.3451,
          happiness: 0.2653,
          neutral: 0.1188,
          sadness: 0.1653
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0003,
          Creating: 0.001,
          Evaluating: 0.0001,
          None: 0.9978,
          Remembering: 0.0002,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 602.0,
      end: 604.0,
      text: "Oh, he's got a Star Wars shirt on.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0596,
          surprise: 0.1327,
          suspense: 0.2244,
          happiness: 0.1659,
          neutral: 0.1649,
          sadness: 0.2525
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.9999,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 604.5,
      end: 605.5,
      text: 'Come on up here Aidan.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0933,
          surprise: 0.3163,
          suspense: 0.1068,
          happiness: 0.1911,
          neutral: 0.0953,
          sadness: 0.1972
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0342,
          Applying: 0.0132,
          Creating: 0.0912,
          Evaluating: 0.0331,
          None: 0.6006,
          Remembering: 0.0505,
          Understanding: 0.1774
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 606.0,
      end: 607.0,
      text: 'And you know what?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.094,
          surprise: 0.2676,
          suspense: 0.1038,
          happiness: 0.1685,
          neutral: 0.0965,
          sadness: 0.2696
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0541,
          Applying: 0.0009,
          Creating: 0.0008,
          Evaluating: 0.0133,
          None: 0.0008,
          Remembering: 0.0136,
          Understanding: 0.9166
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 607.0,
      end: 612.0,
      text: 'I want you to tell the class What is the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3694,
          surprise: 0.0528,
          suspense: 0.3215,
          happiness: 0.1751,
          neutral: 0.0577,
          sadness: 0.0235
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0019,
          Applying: 0.001,
          Creating: 0.0547,
          Evaluating: 0.9399,
          None: 0.0004,
          Remembering: 0.0004,
          Understanding: 0.0018
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 614.5,
      end: 629.75,
      text: 'I think the solution is that we we can use the hundreds chart and um and and go down as many as we need to go down.',
      speakers: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1
      ],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.5573,
          surprise: 0.0068,
          suspense: 0.0792,
          happiness: 0.3484,
          neutral: 0.0068,
          sadness: 0.0016
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 1.0,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.5,
          Creating: 0.25,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 629.75,
      end: 640.5,
      text: 'And if we go and if we need to go to the right any we, we go to the right and then we can get the problem.',
      speakers: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1
      ],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.2202,
          surprise: 0.0498,
          suspense: 0.3629,
          happiness: 0.3348,
          neutral: 0.0184,
          sadness: 0.0138
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0003,
          Creating: 0.9979,
          Evaluating: 0.0014,
          None: 0.0001,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 641.0,
      end: 645.0,
      text: "Alright. So I like the fact that you're thinking about the hundreds chart.",
      speakers: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.4161,
          surprise: 0.0247,
          suspense: 0.1273,
          happiness: 0.3455,
          neutral: 0.0641,
          sadness: 0.0223
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0324,
          Applying: 0.052,
          Creating: 0.0073,
          Evaluating: 0.0288,
          None: 0.0005,
          Remembering: 0.8366,
          Understanding: 0.0423
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 1.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 645.155,
      end: 647.5,
      text: 'Did you determine what the solution is here?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0235,
          surprise: 0.068,
          suspense: 0.2483,
          happiness: 0.1375,
          neutral: 0.1412,
          sadness: 0.3816
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0008,
          Applying: 0.0094,
          Creating: 0.0005,
          Evaluating: 0.0491,
          None: 0.0001,
          Remembering: 0.0013,
          Understanding: 0.9388
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.25,
          Creating: 0.25,
          Remembering: 0.25,
          Evaluating: 0.25,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 647.5,
      end: 651.5,
      text: 'So the question was, how many flowers in all?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3294,
          surprise: 0.0854,
          suspense: 0.3482,
          happiness: 0.1673,
          neutral: 0.0463,
          sadness: 0.0235
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.5106,
          Applying: 0.0047,
          Creating: 0.0011,
          Evaluating: 0.3149,
          None: 0.0022,
          Remembering: 0.0223,
          Understanding: 0.1443
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 652.17004,
      end: 654.1667,
      text: 'Did could you tell me how many flowers there were?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0549,
          surprise: 0.1413,
          suspense: 0.2511,
          happiness: 0.1509,
          neutral: 0.1335,
          sadness: 0.2682
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0461,
          Applying: 0.0003,
          Creating: 0.0003,
          Evaluating: 0.0176,
          None: 0.0006,
          Remembering: 0.0012,
          Understanding: 0.9339
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.3333,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 654.1667,
      end: 658.5,
      text: 'There were thirty two pink flowers and seven white flowers.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4285,
          surprise: 0.0155,
          suspense: 0.2932,
          happiness: 0.1638,
          neutral: 0.0883,
          sadness: 0.0108
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.0002,
          Evaluating: 0.0001,
          None: 0.9994,
          Remembering: 0.0001,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 658.5,
      end: 660.5,
      text: 'How many flowers in all, Aidan?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0603,
          surprise: 0.1316,
          suspense: 0.232,
          happiness: 0.1859,
          neutral: 0.1529,
          sadness: 0.2374
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9987,
          Understanding: 0.0011
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 660.5,
      end: 661.34503,
      text: 'Did you?',
      speakers: [0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0802,
          surprise: 0.2658,
          suspense: 0.0835,
          happiness: 0.2598,
          neutral: 0.1098,
          sadness: 0.2009
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0027,
          Applying: 0.0018,
          Creating: 0.004,
          Evaluating: 0.0493,
          None: 0.0026,
          Remembering: 0.3293,
          Understanding: 0.6103
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 661.34503,
      end: 663.0,
      text: 'Did you come to a solution?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0946,
          surprise: 0.1648,
          suspense: 0.2767,
          happiness: 0.1864,
          neutral: 0.1305,
          sadness: 0.147
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0002,
          Creating: 0.9993,
          Evaluating: 0.0004,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 668.9,
      end: 672.5,
      text: "Here's what I want you to do.",
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0973,
          surprise: 0.0347,
          suspense: 0.6188,
          happiness: 0.1688,
          neutral: 0.03,
          sadness: 0.0504
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0005,
          Applying: 0.0002,
          Creating: 0.0044,
          Evaluating: 0.9905,
          None: 0.0005,
          Remembering: 0.0024,
          Understanding: 0.0016
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 672.5,
      end: 673.5,
      text: 'Hey, Aidan.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0932,
          surprise: 0.3375,
          suspense: 0.1035,
          happiness: 0.1902,
          neutral: 0.0933,
          sadness: 0.1822
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 673.5,
      end: 675.25,
      text: 'Go ahead and sit down for me.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0559,
          surprise: 0.1791,
          suspense: 0.255,
          happiness: 0.1743,
          neutral: 0.1095,
          sadness: 0.2262
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0363,
          Applying: 0.0013,
          Creating: 0.0023,
          Evaluating: 0.0357,
          None: 0.9133,
          Remembering: 0.0017,
          Understanding: 0.0094
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 675.25,
      end: 684.0,
      text: "I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you.",
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.4504,
          surprise: 0.0155,
          suspense: 0.2728,
          happiness: 0.2178,
          neutral: 0.0328,
          sadness: 0.0108
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0021,
          Applying: 0.0017,
          Creating: 0.0079,
          Evaluating: 0.0616,
          None: 0.9251,
          Remembering: 0.0009,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.125,
          Creating: 0.25,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.125,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 684.0,
      end: 685.125,
      text: 'Okay? Is that cool?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0812,
          surprise: 0.3444,
          suspense: 0.117,
          happiness: 0.2458,
          neutral: 0.0774,
          sadness: 0.1342
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.067,
          Applying: 0.0046,
          Creating: 0.0082,
          Evaluating: 0.2329,
          None: 0.0073,
          Remembering: 0.6598,
          Understanding: 0.0202
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 685.125,
      end: 686.75,
      text: 'How about we go to your partner?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0964,
          surprise: 0.1977,
          suspense: 0.2866,
          happiness: 0.1959,
          neutral: 0.0981,
          sadness: 0.1251
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0009,
          Applying: 0.006,
          Creating: 0.0158,
          Evaluating: 0.9662,
          None: 0.0053,
          Remembering: 0.0023,
          Understanding: 0.0036
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 687.0,
      end: 687.5,
      text: "What's your name?",
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0354,
          surprise: 0.3144,
          suspense: 0.0799,
          happiness: 0.1343,
          neutral: 0.1678,
          sadness: 0.2681
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0002,
          Evaluating: 0.0001,
          None: 0.0001,
          Remembering: 0.9724,
          Understanding: 0.0269
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 687.5,
      end: 688.5,
      text: 'Aniye. Aniye.',
      speakers: [1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0928,
          surprise: 0.302,
          suspense: 0.1146,
          happiness: 0.1949,
          neutral: 0.1056,
          sadness: 0.1901
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 689.0,
      end: 691.0,
      text: 'Aniya. Go ahead and stand up for me.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0673,
          surprise: 0.1147,
          suspense: 0.2521,
          happiness: 0.1693,
          neutral: 0.1336,
          sadness: 0.263
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0119,
          Applying: 0.0027,
          Creating: 0.0139,
          Evaluating: 0.0165,
          None: 0.9274,
          Remembering: 0.004,
          Understanding: 0.0237
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 691.0,
      end: 693.5,
      text: 'Do you know the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.041,
          surprise: 0.0627,
          suspense: 0.3178,
          happiness: 0.159,
          neutral: 0.2014,
          sadness: 0.2182
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0225,
          Applying: 0.0574,
          Creating: 0.887,
          Evaluating: 0.0305,
          None: 0.0007,
          Remembering: 0.0013,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 693.5,
      end: 696.0,
      text: 'What is the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0505,
          surprise: 0.0881,
          suspense: 0.333,
          happiness: 0.1648,
          neutral: 0.132,
          sadness: 0.2317
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9771,
          Applying: 0.0053,
          Creating: 0.0028,
          Evaluating: 0.0087,
          None: 0.0001,
          Remembering: 0.0052,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 696.755,
      end: 698.0,
      text: 'Well, yes.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1074,
          surprise: 0.2928,
          suspense: 0.136,
          happiness: 0.2402,
          neutral: 0.0743,
          sadness: 0.1493
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0248,
          Applying: 0.0128,
          Creating: 0.0186,
          Evaluating: 0.0695,
          None: 0.0476,
          Remembering: 0.1567,
          Understanding: 0.6701
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 699.5,
      end: 700.0,
      text: 'Thirty nine.',
      speakers: [2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0355,
          surprise: 0.2669,
          suspense: 0.0967,
          happiness: 0.1263,
          neutral: 0.1629,
          sadness: 0.3117
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0016,
          Applying: 0.0047,
          Creating: 0.0204,
          Evaluating: 0.0045,
          None: 0.9001,
          Remembering: 0.0519,
          Understanding: 0.0169
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 700.0,
      end: 702.6667,
      text: 'Okay. So go ahead and use the whole sentence for me.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0218,
          surprise: 0.0746,
          suspense: 0.3004,
          happiness: 0.0816,
          neutral: 0.1687,
          sadness: 0.3529
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0013,
          Applying: 0.0007,
          Creating: 0.0019,
          Evaluating: 0.9898,
          None: 0.0024,
          Remembering: 0.0019,
          Understanding: 0.002
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.3333,
          Creating: 0.0,
          Remembering: 0.3333,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.3333,
          None: 9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 702.6667,
      end: 705.0,
      text: 'I know the solution is thirty nine.',
      speakers: [2, 2, 2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0471,
          surprise: 0.1194,
          suspense: 0.2883,
          happiness: 0.1312,
          neutral: 0.1576,
          sadness: 0.2563
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0001,
          None: 0.0001,
          Remembering: 0.9989,
          Understanding: 0.0007
        }
      },
      blooms_custom: {
        class: 'creation',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 705.0,
      end: 706.2,
      text: 'Thirty nine apples?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1043,
          surprise: 0.3236,
          suspense: 0.1071,
          happiness: 0.2371,
          neutral: 0.0855,
          sadness: 0.1424
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0016,
          Applying: 0.0047,
          Creating: 0.0204,
          Evaluating: 0.0045,
          None: 0.9001,
          Remembering: 0.0519,
          Understanding: 0.0169
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 707.5,
      end: 708.5,
      text: 'Thirty nine what?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1248,
          surprise: 0.2688,
          suspense: 0.1176,
          happiness: 0.1999,
          neutral: 0.1075,
          sadness: 0.1813
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0001,
          Creating: 0.0002,
          Evaluating: 0.0002,
          None: 0.0002,
          Remembering: 0.9987,
          Understanding: 0.0006
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 708.5,
      end: 709.75,
      text: 'Flowers. Alright.',
      speakers: [2, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.1096,
          surprise: 0.2894,
          suspense: 0.1346,
          happiness: 0.2404,
          neutral: 0.0841,
          sadness: 0.1419
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 709.75,
      end: 712.25,
      text: "Flowers, because that's is something the good mathematicians do.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0424,
          surprise: 0.119,
          suspense: 0.2747,
          happiness: 0.1476,
          neutral: 0.1642,
          sadness: 0.2521
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0054,
          Applying: 0.0019,
          Creating: 0.005,
          Evaluating: 0.0113,
          None: 0.0133,
          Remembering: 0.2037,
          Understanding: 0.7596
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 712.25,
      end: 719.0,
      text: 'They always, especially in word problems, We have to know how many what the number represents.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2774,
          surprise: 0.0213,
          suspense: 0.2759,
          happiness: 0.3595,
          neutral: 0.0554,
          sadness: 0.0106
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9784,
          Applying: 0.0007,
          Creating: 0.0001,
          Evaluating: 0.0066,
          None: 0.0007,
          Remembering: 0.0006,
          Understanding: 0.0129
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.3333,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 719.0,
      end: 720.5,
      text: 'So say the whole thing for me.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0913,
          surprise: 0.2133,
          suspense: 0.2647,
          happiness: 0.2363,
          neutral: 0.0867,
          sadness: 0.1077
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.103,
          Applying: 0.0125,
          Creating: 0.0103,
          Evaluating: 0.152,
          None: 0.0041,
          Remembering: 0.0691,
          Understanding: 0.649
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 720.5,
      end: 723.75,
      text: 'I know this solution is thirty nine.',
      speakers: [2, 2, 2, 2, 2, 2, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.4695,
          surprise: 0.0102,
          suspense: 0.2128,
          happiness: 0.2847,
          neutral: 0.0146,
          sadness: 0.0081
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0514,
          Applying: 0.0086,
          Creating: 0.0368,
          Evaluating: 0.0948,
          None: 0.0035,
          Remembering: 0.6661,
          Understanding: 0.1388
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 727.0,
      end: 727.5,
      text: 'Flower.',
      speakers: [2, 2],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0336,
          surprise: 0.3047,
          suspense: 0.0813,
          happiness: 0.1271,
          neutral: 0.1701,
          sadness: 0.2832
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0199,
          Applying: 0.0209,
          Creating: 0.2086,
          Evaluating: 0.0786,
          None: 0.1589,
          Remembering: 0.3225,
          Understanding: 0.1907
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 727.5,
      end: 728.25,
      text: 'Flowers. Alright.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0771,
          surprise: 0.3049,
          suspense: 0.0587,
          happiness: 0.2183,
          neutral: 0.1218,
          sadness: 0.2191
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 728.25,
      end: 729.5,
      text: 'One more time altogether.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0995,
          surprise: 0.2877,
          suspense: 0.1428,
          happiness: 0.2812,
          neutral: 0.0775,
          sadness: 0.1114
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0037,
          Applying: 0.0061,
          Creating: 0.1836,
          Evaluating: 0.0039,
          None: 0.7927,
          Remembering: 0.0035,
          Understanding: 0.0065
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 729.5,
      end: 732.075,
      text: 'I know the solution is thirty nine flowers.',
      speakers: [0, 2, 2, 2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0245,
          surprise: 0.0704,
          suspense: 0.2291,
          happiness: 0.1176,
          neutral: 0.2074,
          sadness: 0.351
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0003,
          Applying: 0.0002,
          Creating: 0.0002,
          Evaluating: 0.0006,
          None: 0.0001,
          Remembering: 0.9952,
          Understanding: 0.0034
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 732.075,
      end: 733.25,
      text: 'awesome job.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0834,
          surprise: 0.3189,
          suspense: 0.1072,
          happiness: 0.2758,
          neutral: 0.0807,
          sadness: 0.1341
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 733.25,
      end: 735.5,
      text: 'But how do you know that?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0267,
          surprise: 0.1323,
          suspense: 0.1733,
          happiness: 0.1284,
          neutral: 0.211,
          sadness: 0.3283
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.086,
          Applying: 0.0104,
          Creating: 0.0461,
          Evaluating: 0.0508,
          None: 0.0028,
          Remembering: 0.1156,
          Understanding: 0.6883
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 735.5,
      end: 737.5,
      text: "How do you know that it's thirty nine flowers?",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0566,
          surprise: 0.1401,
          suspense: 0.2239,
          happiness: 0.1635,
          neutral: 0.1938,
          sadness: 0.2222
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0142,
          Applying: 0.0006,
          Creating: 0.0012,
          Evaluating: 0.0113,
          None: 0.0004,
          Remembering: 0.0101,
          Understanding: 0.9622
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 738.0,
      end: 740.25,
      text: 'Tell your classmates because they wanna know.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0322,
          surprise: 0.0695,
          suspense: 0.2249,
          happiness: 0.1137,
          neutral: 0.1597,
          sadness: 0.4001
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.7287,
          Applying: 0.0008,
          Creating: 0.0007,
          Evaluating: 0.0063,
          None: 0.0013,
          Remembering: 0.0669,
          Understanding: 0.1953
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.25,
          Creating: 0.25,
          Remembering: 0.25,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 741.07,
      end: 743.5,
      text: 'What did you do to figure it out?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0217,
          surprise: 0.073,
          suspense: 0.2913,
          happiness: 0.0782,
          neutral: 0.1313,
          sadness: 0.4045
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0678,
          Applying: 0.0012,
          Creating: 0.9166,
          Evaluating: 0.0021,
          None: 0.0002,
          Remembering: 0.0111,
          Understanding: 0.001
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 744.0,
      end: 745.5,
      text: 'I counted it out.',
      speakers: [1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0876,
          surprise: 0.2311,
          suspense: 0.2648,
          happiness: 0.2146,
          neutral: 0.0994,
          sadness: 0.1026
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.9998,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 746.5,
      end: 747.8333,
      text: 'You counted, so what did you use?',
      speakers: [1, 1, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1004,
          surprise: 0.2867,
          suspense: 0.1346,
          happiness: 0.2732,
          neutral: 0.0915,
          sadness: 0.1136
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0008,
          Applying: 0.0008,
          Creating: 0.0015,
          Evaluating: 0.0658,
          None: 0.0012,
          Remembering: 0.7238,
          Understanding: 0.206
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.25,
          Creating: 0.0,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 747.8333,
      end: 753.5,
      text: 'In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.5198,
          surprise: 0.0232,
          suspense: 0.1541,
          happiness: 0.2673,
          neutral: 0.0264,
          sadness: 0.0092
        },
        class: 'passion'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0006,
          Applying: 0.0003,
          Creating: 0.0023,
          Evaluating: 0.0373,
          None: 0.0005,
          Remembering: 0.001,
          Understanding: 0.9579
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.1667,
          Creating: 0.3333,
          Remembering: 0.3333,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.1667,
          None: 1.1102230246251565e-16
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 753.5,
      end: 756.75,
      text: 'Um. My fingers. Okay.',
      speakers: [1, 1, 1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.7442,
          surprise: 0.0391,
          suspense: 0.0443,
          happiness: 0.1633,
          neutral: 0.0073,
          sadness: 0.0017
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0084,
          Applying: 0.0019,
          Creating: 0.0024,
          Evaluating: 0.0199,
          None: 0.0015,
          Remembering: 0.8909,
          Understanding: 0.0751
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 756.75,
      end: 758.1667,
      text: 'So walk. show me how you do that?',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0561,
          surprise: 0.3165,
          suspense: 0.2327,
          happiness: 0.1589,
          neutral: 0.0896,
          sadness: 0.1462
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0104,
          Applying: 0.0318,
          Creating: 0.936,
          Evaluating: 0.0068,
          None: 0.0082,
          Remembering: 0.0031,
          Understanding: 0.0037
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 758.1667,
      end: 759.75,
      text: 'Show me how you do that?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0993,
          surprise: 0.1695,
          suspense: 0.2516,
          happiness: 0.1975,
          neutral: 0.1191,
          sadness: 0.1629
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.2475,
          Applying: 0.0223,
          Creating: 0.5561,
          Evaluating: 0.046,
          None: 0.0131,
          Remembering: 0.0256,
          Understanding: 0.0892
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 761.0,
      end: 762.1,
      text: "Yeah. Let's listen to her.",
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0939,
          surprise: 0.3115,
          suspense: 0.1236,
          happiness: 0.2261,
          neutral: 0.1052,
          sadness: 0.1397
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.1048,
          Applying: 0.0097,
          Creating: 0.2847,
          Evaluating: 0.4578,
          None: 0.0408,
          Remembering: 0.0057,
          Understanding: 0.0965
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.3333,
          Creating: 0.0,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 762.1,
      end: 766.0,
      text: 'I want I want you guys to to listen to how she solved the problem.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2488,
          surprise: 0.0179,
          suspense: 0.3296,
          happiness: 0.3908,
          neutral: 0.0095,
          sadness: 0.0033
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0017,
          Applying: 0.0014,
          Creating: 0.0991,
          Evaluating: 0.8964,
          None: 0.0007,
          Remembering: 0.0003,
          Understanding: 0.0005
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.2857,
          Creating: 0.1429,
          Remembering: 0.4286,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.1429,
          None: -9.999999999998899e-5
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 766.5,
      end: 767.5,
      text: 'Thirty two.',
      speakers: [1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1137,
          surprise: 0.3183,
          suspense: 0.1202,
          happiness: 0.2096,
          neutral: 0.0837,
          sadness: 0.1545
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0033,
          Applying: 0.0024,
          Creating: 0.0063,
          Evaluating: 0.0019,
          None: 0.9685,
          Remembering: 0.0045,
          Understanding: 0.0132
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 767.57495,
      end: 778.5,
      text: 'thirty three, thirty four, thirty five, thirty six, thirty seven, thirty eight, thirty nine, forty and then thirty.',
      speakers: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.4111,
          surprise: 0.0129,
          suspense: 0.3181,
          happiness: 0.2485,
          neutral: 0.0064,
          sadness: 0.003
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.0003,
          Evaluating: 0.0001,
          None: 0.9991,
          Remembering: 0.0002,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 778.5,
      end: 782.5,
      text: 'And after and how did you know to only stop at thirty nine?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2115,
          surprise: 0.1349,
          suspense: 0.1817,
          happiness: 0.363,
          neutral: 0.0455,
          sadness: 0.0634
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0006,
          Applying: 0.0094,
          Creating: 0.0122,
          Evaluating: 0.0145,
          None: 0.2097,
          Remembering: 0.5206,
          Understanding: 0.2331
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 788.0,
      end: 788.75,
      text: 'seven plus two equals nine.',
      speakers: [2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0862,
          surprise: 0.2694,
          suspense: 0.0546,
          happiness: 0.2377,
          neutral: 0.135,
          sadness: 0.2173
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0015,
          Applying: 0.0011,
          Creating: 0.0026,
          Evaluating: 0.0022,
          None: 0.9792,
          Remembering: 0.0107,
          Understanding: 0.0027
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 788.75,
      end: 790.0,
      text: "So that's how I know.",
      speakers: [2, 2, 2, 2, 2],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1137,
          surprise: 0.2888,
          suspense: 0.129,
          happiness: 0.2317,
          neutral: 0.0949,
          sadness: 0.1419
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.4421,
          Applying: 0.0064,
          Creating: 0.0031,
          Evaluating: 0.014,
          None: 0.0019,
          Remembering: 0.115,
          Understanding: 0.4174
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 790.0,
      end: 792.25,
      text: 'Ooh, you did the ones place too.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0448,
          surprise: 0.0803,
          suspense: 0.2117,
          happiness: 0.1214,
          neutral: 0.1928,
          sadness: 0.3489
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0036,
          Applying: 0.0032,
          Creating: 0.0117,
          Evaluating: 0.3088,
          None: 0.007,
          Remembering: 0.0918,
          Understanding: 0.5739
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 792.25,
      end: 793.0,
      text: 'Good job.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0933,
          surprise: 0.2646,
          suspense: 0.0572,
          happiness: 0.2482,
          neutral: 0.1228,
          sadness: 0.214
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0433,
          Applying: 0.0157,
          Creating: 0.0295,
          Evaluating: 0.0694,
          None: 0.0749,
          Remembering: 0.0341,
          Understanding: 0.7332
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 793.5,
      end: 795.33997,
      text: 'Alright. Well, who else wants to explain why?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0727,
          surprise: 0.1569,
          suspense: 0.2531,
          happiness: 0.2095,
          neutral: 0.1005,
          sadness: 0.2073
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0648,
          Applying: 0.0059,
          Creating: 0.0182,
          Evaluating: 0.0232,
          None: 0.0642,
          Remembering: 0.1048,
          Understanding: 0.7188
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.1429,
          Creating: 0.1429,
          Remembering: 0.2857,
          Evaluating: 0.1429,
          Understanding: 0.1429,
          Analyzing: 0.1429,
          None: -0.00019999999999997797
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 795.33997,
      end: 795.8333,
      text: 'you listening.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0339,
          surprise: 0.256,
          suspense: 0.0783,
          happiness: 0.1246,
          neutral: 0.158,
          sadness: 0.3492
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0138,
          Applying: 0.0027,
          Creating: 0.0041,
          Evaluating: 0.0391,
          None: 0.0036,
          Remembering: 0.1324,
          Understanding: 0.8044
        }
      },
      blooms_custom: {
        class: 'Remembering',
        results: {
          Applying: 0.3333,
          Creating: 0.0,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 795.8333,
      end: 797.375,
      text: "I'm gonna come back to you one more time.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.114,
          surprise: 0.2341,
          suspense: 0.2205,
          happiness: 0.256,
          neutral: 0.0849,
          sadness: 0.0904
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.1242,
          Applying: 0.0034,
          Creating: 0.8579,
          Evaluating: 0.0049,
          None: 0.0046,
          Remembering: 0.001,
          Understanding: 0.0041
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 797.375,
      end: 798.3333,
      text: 'Are you ready for me?',
      speakers: [0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0807,
          surprise: 0.2504,
          suspense: 0.1042,
          happiness: 0.229,
          neutral: 0.1238,
          sadness: 0.2118
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0001,
          Creating: 0.0004,
          Evaluating: 0.9955,
          None: 0.0009,
          Remembering: 0.0025,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 798.3333,
      end: 800.0,
      text: 'Go ahead and stand up over here.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0988,
          surprise: 0.1643,
          suspense: 0.2597,
          happiness: 0.2159,
          neutral: 0.1268,
          sadness: 0.1345
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0004,
          Applying: 0.0002,
          Creating: 0.0002,
          Evaluating: 0.0005,
          None: 0.9982,
          Remembering: 0.0001,
          Understanding: 0.0003
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 800.0,
      end: 800.6667,
      text: 'Oh, wait.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.052,
          surprise: 0.3462,
          suspense: 0.0843,
          happiness: 0.1949,
          neutral: 0.1124,
          sadness: 0.2102
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0197,
          Applying: 0.0059,
          Creating: 0.008,
          Evaluating: 0.082,
          None: 0.0137,
          Remembering: 0.1506,
          Understanding: 0.7199
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 800.6667,
      end: 801.8333,
      text: 'Actually, you can wrap up over here.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0694,
          surprise: 0.3591,
          suspense: 0.0955,
          happiness: 0.2871,
          neutral: 0.0721,
          sadness: 0.1168
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0798,
          Applying: 0.0069,
          Creating: 0.0061,
          Evaluating: 0.6091,
          None: 0.2873,
          Remembering: 0.0021,
          Understanding: 0.0087
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.5,
          Creating: 0.5,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 801.8333,
      end: 802.5,
      text: "Let's stay up here.",
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0552,
          surprise: 0.3239,
          suspense: 0.0737,
          happiness: 0.1904,
          neutral: 0.1273,
          sadness: 0.2296
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0063,
          Applying: 0.0028,
          Creating: 0.0037,
          Evaluating: 0.007,
          None: 0.9691,
          Remembering: 0.0018,
          Understanding: 0.0091
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 802.5,
      end: 803.345,
      text: 'What is your name?',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0897,
          surprise: 0.2278,
          suspense: 0.082,
          happiness: 0.2708,
          neutral: 0.1652,
          sadness: 0.1645
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9999,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 804.0,
      end: 807.25,
      text: 'Ian Ian, what is the solution to this problem? I know the solution is 39 because',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.223,
          surprise: 0.0176,
          suspense: 0.0789,
          happiness: 0.5062,
          neutral: 0.1502,
          sadness: 0.0241
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0024,
          Applying: 0.0005,
          Creating: 0.0006,
          Evaluating: 0.0095,
          None: 0.0003,
          Remembering: 0.0017,
          Understanding: 0.985
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 811.5,
      end: 813.5,
      text: 'Thirty nine apples?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0559,
          surprise: 0.1592,
          suspense: 0.2224,
          happiness: 0.1697,
          neutral: 0.148,
          sadness: 0.2449
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0016,
          Applying: 0.0047,
          Creating: 0.0204,
          Evaluating: 0.0045,
          None: 0.9001,
          Remembering: 0.0519,
          Understanding: 0.0169
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 814.5,
      end: 815.875,
      text: 'Mhm, Alright. Start over for me.',
      speakers: [2, 0, 0, 0, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.0789,
          surprise: 0.2877,
          suspense: 0.1791,
          happiness: 0.2173,
          neutral: 0.1096,
          sadness: 0.1274
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.004,
          Applying: 0.0087,
          Creating: 0.03,
          Evaluating: 0.1212,
          None: 0.1265,
          Remembering: 0.5873,
          Understanding: 0.1222
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 815.875,
      end: 817.5,
      text: 'I know the solutions thirty nine flower.',
      speakers: [3, 3, 3, 3],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1098,
          surprise: 0.1986,
          suspense: 0.2367,
          happiness: 0.2245,
          neutral: 0.1248,
          sadness: 0.1055
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0142,
          Applying: 0.0063,
          Creating: 0.0044,
          Evaluating: 0.0047,
          None: 0.0003,
          Remembering: 0.0702,
          Understanding: 0.9
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 819.14496,
      end: 825.0,
      text: "Alright. So, Ian, would you tell in your class how you know that it's thirty nine flowers?",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1444,
          surprise: 0.0286,
          suspense: 0.2917,
          happiness: 0.4701,
          neutral: 0.0463,
          sadness: 0.0189
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0005,
          None: 0.0,
          Remembering: 0.0002,
          Understanding: 0.999
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.3333,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 827.0,
      end: 837.5,
      text: "Thirty it's ninety nine flowers because two plus three equals ten because and two and seven no.",
      speakers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.2336,
          surprise: 0.0059,
          suspense: 0.6011,
          happiness: 0.1531,
          neutral: 0.002,
          sadness: 0.0043
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0001,
          Applying: 0.0002,
          Creating: 0.0004,
          Evaluating: 0.0002,
          None: 0.9979,
          Remembering: 0.0009,
          Understanding: 0.0002
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.5,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 837.5,
      end: 839.5,
      text: 'Well, here look at the problem again.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0507,
          surprise: 0.1172,
          suspense: 0.2683,
          happiness: 0.1606,
          neutral: 0.1356,
          sadness: 0.2676
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0156,
          Applying: 0.2502,
          Creating: 0.0095,
          Evaluating: 0.5061,
          None: 0.0879,
          Remembering: 0.0843,
          Understanding: 0.0464
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 840.0,
      end: 842.0,
      text: 'Two plus seven equals nine.',
      speakers: [3, 3, 3, 3, 3],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0507,
          surprise: 0.1189,
          suspense: 0.2467,
          happiness: 0.1693,
          neutral: 0.154,
          sadness: 0.2604
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0003,
          Creating: 0.0006,
          Evaluating: 0.0003,
          None: 0.997,
          Remembering: 0.0012,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 842.0,
      end: 850.5,
      text: 'And and Two minus oh, seven minus two.',
      speakers: [0, 3, 3, 3, 3, 3, 0],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.2059,
          surprise: 0.0081,
          suspense: 0.537,
          happiness: 0.2433,
          neutral: 0.0038,
          sadness: 0.0018
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0004,
          Applying: 0.0002,
          Creating: 0.0007,
          Evaluating: 0.0002,
          None: 0.997,
          Remembering: 0.0007,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 855.5,
      end: 856.6667,
      text: 'Just stick with me.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0874,
          surprise: 0.3419,
          suspense: 0.1115,
          happiness: 0.2226,
          neutral: 0.0749,
          sadness: 0.1618
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.3495,
          Applying: 0.004,
          Creating: 0.0047,
          Evaluating: 0.0222,
          None: 0.2003,
          Remembering: 0.1189,
          Understanding: 0.3004
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 856.6667,
      end: 857.25,
      text: "I'm with you.",
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0396,
          surprise: 0.395,
          suspense: 0.0607,
          happiness: 0.1027,
          neutral: 0.1548,
          sadness: 0.2473
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0258,
          Applying: 0.0055,
          Creating: 0.0177,
          Evaluating: 0.0259,
          None: 0.0201,
          Remembering: 0.3205,
          Understanding: 0.5845
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 857.25,
      end: 857.6667,
      text: "We're good.",
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0382,
          surprise: 0.2351,
          suspense: 0.0854,
          happiness: 0.1352,
          neutral: 0.1938,
          sadness: 0.3124
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0433,
          Applying: 0.0157,
          Creating: 0.0295,
          Evaluating: 0.0694,
          None: 0.0749,
          Remembering: 0.0341,
          Understanding: 0.7332
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 857.6667,
      end: 864.0,
      text: 'So you said two plus seven equals nine So then how did you know that it was thirty nine, and not just nine?',
      speakers: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.6631,
          surprise: 0.0135,
          suspense: 0.1753,
          happiness: 0.1388,
          neutral: 0.0051,
          sadness: 0.0043
        },
        class: 'passion'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.6837,
          Applying: 0.0194,
          Creating: 0.1479,
          Evaluating: 0.0212,
          None: 0.0331,
          Remembering: 0.0094,
          Understanding: 0.0852
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 866.0,
      end: 871.5,
      text: 'Because seven plus two equals nine.',
      speakers: [2, 2, 3, 3, 3, 3, 3, 3],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.7128,
          surprise: 0.0303,
          suspense: 0.1215,
          happiness: 0.1304,
          neutral: 0.0037,
          sadness: 0.0013
        },
        class: 'passion'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0016,
          Applying: 0.0062,
          Creating: 0.2304,
          Evaluating: 0.0025,
          None: 0.6063,
          Remembering: 0.1359,
          Understanding: 0.0172
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 871.5,
      end: 873.5,
      text: 'So it equals thirty nine.',
      speakers: [3, 3, 3, 3],
      question: true,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0664,
          surprise: 0.1312,
          suspense: 0.2236,
          happiness: 0.1483,
          neutral: 0.1566,
          sadness: 0.274
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0501,
          Applying: 0.1042,
          Creating: 0.0149,
          Evaluating: 0.0126,
          None: 0.2179,
          Remembering: 0.5511,
          Understanding: 0.0491
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 873.5,
      end: 877.75,
      text: 'Good work.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2416,
          surprise: 0.0172,
          suspense: 0.1299,
          happiness: 0.5332,
          neutral: 0.0647,
          sadness: 0.0133
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.1488,
          Applying: 0.0093,
          Creating: 0.0136,
          Evaluating: 0.7632,
          None: 0.0147,
          Remembering: 0.0062,
          Understanding: 0.0442
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 877.75,
      end: 879.1099,
      text: 'Anybody else wanna take a swing?',
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1004,
          surprise: 0.2508,
          suspense: 0.1786,
          happiness: 0.2388,
          neutral: 0.0883,
          sadness: 0.143
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0081,
          Applying: 0.0019,
          Creating: 0.0163,
          Evaluating: 0.4419,
          None: 0.0113,
          Remembering: 0.0264,
          Understanding: 0.4941
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 879.1099,
      end: 879.8333,
      text: 'Take a try at this.',
      speakers: [0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0728,
          surprise: 0.2826,
          suspense: 0.0901,
          happiness: 0.235,
          neutral: 0.111,
          sadness: 0.2086
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0,
          Applying: 0.0001,
          Creating: 0.0001,
          Evaluating: 0.0,
          None: 0.9998,
          Remembering: 0.0,
          Understanding: 0.0
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 879.8333,
      end: 880.5,
      text: 'You wanna do that?',
      speakers: [4, 4, 4, 4],
      question: true,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0456,
          surprise: 0.3688,
          suspense: 0.0595,
          happiness: 0.1512,
          neutral: 0.1127,
          sadness: 0.2622
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0265,
          Applying: 0.0045,
          Creating: 0.0148,
          Evaluating: 0.4722,
          None: 0.0047,
          Remembering: 0.3804,
          Understanding: 0.0969
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 880.5,
      end: 881.25,
      text: 'Come on up here honey.',
      speakers: [0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0819,
          surprise: 0.2807,
          suspense: 0.0588,
          happiness: 0.2262,
          neutral: 0.1249,
          sadness: 0.2275
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0342,
          Applying: 0.0132,
          Creating: 0.0912,
          Evaluating: 0.0331,
          None: 0.6006,
          Remembering: 0.0505,
          Understanding: 0.1774
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 881.25,
      end: 882.5,
      text: "What's your name?",
      speakers: [4, 4, 0],
      question: true,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.1085,
          surprise: 0.2618,
          suspense: 0.1359,
          happiness: 0.2659,
          neutral: 0.0769,
          sadness: 0.151
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0002,
          Creating: 0.0002,
          Evaluating: 0.0001,
          None: 0.0001,
          Remembering: 0.9724,
          Understanding: 0.0269
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 883.0,
      end: 884.25,
      text: 'Calista. Calista. Alright.',
      speakers: [1, 0, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.1032,
          surprise: 0.3083,
          suspense: 0.1141,
          happiness: 0.2379,
          neutral: 0.0867,
          sadness: 0.1498
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0073,
          Applying: 0.0059,
          Creating: 0.0115,
          Evaluating: 0.0172,
          None: 0.0093,
          Remembering: 0.0276,
          Understanding: 0.9212
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.5,
          Creating: 0.0,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 884.25,
      end: 885.75,
      text: "Let's listen to Calista.",
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0786,
          surprise: 0.2362,
          suspense: 0.293,
          happiness: 0.2183,
          neutral: 0.0738,
          sadness: 0.1
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.1942,
          Applying: 0.0153,
          Creating: 0.0948,
          Evaluating: 0.5988,
          None: 0.0153,
          Remembering: 0.0035,
          Understanding: 0.078
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.3333,
          Creating: 0.0,
          Remembering: 0.6667,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 886.12494,
      end: 890.25,
      text: 'Calista, what is the solution to this problem? I know the solution is 39',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      question: true,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.5231,
          surprise: 0.0447,
          suspense: 0.1872,
          happiness: 0.2081,
          neutral: 0.0261,
          sadness: 0.0108
        },
        class: 'passion'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9771,
          Applying: 0.0053,
          Creating: 0.0028,
          Evaluating: 0.0087,
          None: 0.0001,
          Remembering: 0.0052,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.25,
          Creating: 0.25,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 894.57996,
      end: 896.0,
      text: 'thirty nine zebras?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0855,
          surprise: 0.3359,
          suspense: 0.2253,
          happiness: 0.2151,
          neutral: 0.0546,
          sadness: 0.0836
        },
        class: 'surprise'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0016,
          Applying: 0.0047,
          Creating: 0.0204,
          Evaluating: 0.0045,
          None: 0.9001,
          Remembering: 0.0519,
          Understanding: 0.0169
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 898.0,
      end: 900.5,
      text: "Tell your classmates: what's the solution to this problem?",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0357,
          surprise: 0.1104,
          suspense: 0.2581,
          happiness: 0.1134,
          neutral: 0.1707,
          sadness: 0.3117
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9833,
          Applying: 0.0094,
          Creating: 0.0013,
          Evaluating: 0.0006,
          None: 0.0001,
          Remembering: 0.0005,
          Understanding: 0.0048
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 900.5,
      end: 904.0,
      text: 'I know the solution is 39 flowers. Oh, good.',
      speakers: [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.4061,
          surprise: 0.0078,
          suspense: 0.2795,
          happiness: 0.2802,
          neutral: 0.0211,
          sadness: 0.0052
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0727,
          Applying: 0.0735,
          Creating: 0.1596,
          Evaluating: 0.4546,
          None: 0.0138,
          Remembering: 0.2188,
          Understanding: 0.007
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 904.0,
      end: 907.5,
      text: 'Calista, can you tell them how you came up with thirty nine flowers?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.2046,
          surprise: 0.0419,
          suspense: 0.2626,
          happiness: 0.3731,
          neutral: 0.0941,
          sadness: 0.0237
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.4221,
          Applying: 0.0104,
          Creating: 0.076,
          Evaluating: 0.0018,
          None: 0.0065,
          Remembering: 0.008,
          Understanding: 0.4752
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 909.92993,
      end: 915.1667,
      text: 'Because seven plus two equals nine. Alright. Good.',
      speakers: [1, 1, 1, 1, 1, 0],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.38,
          surprise: 0.0356,
          suspense: 0.2685,
          happiness: 0.2927,
          neutral: 0.0142,
          sadness: 0.0091
        },
        class: 'passion'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0433,
          Applying: 0.0157,
          Creating: 0.0295,
          Evaluating: 0.0694,
          None: 0.0749,
          Remembering: 0.0341,
          Understanding: 0.7332
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 915.1667,
      end: 917.625,
      text: 'I like the way that you said, if I know this then I know that.',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0338,
          surprise: 0.0894,
          suspense: 0.2085,
          happiness: 0.1625,
          neutral: 0.2474,
          sadness: 0.2584
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9858,
          Applying: 0.0083,
          Creating: 0.0033,
          Evaluating: 0.0004,
          None: 0.0002,
          Remembering: 0.001,
          Understanding: 0.001
        }
      },
      blooms_custom: {
        class: 'Analyzing',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 917.625,
      end: 918.7149,
      text: 'High five. good job.',
      speakers: [0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1165,
          surprise: 0.3054,
          suspense: 0.1235,
          happiness: 0.2205,
          neutral: 0.0962,
          sadness: 0.1379
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0377,
          Applying: 0.0117,
          Creating: 0.2342,
          Evaluating: 0.0247,
          None: 0.0328,
          Remembering: 0.0224,
          Understanding: 0.6364
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 919.0,
      end: 920.0,
      text: 'Aidan, wanna try it?',
      speakers: [0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1308,
          surprise: 0.2659,
          suspense: 0.1273,
          happiness: 0.2027,
          neutral: 0.1028,
          sadness: 0.1706
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0312,
          Applying: 0.026,
          Creating: 0.6389,
          Evaluating: 0.0117,
          None: 0.0117,
          Remembering: 0.1926,
          Understanding: 0.0879
        }
      },
      blooms_custom: {
        class: 'Understanding',
        results: {
          Applying: 0.0,
          Creating: 0.0,
          Remembering: 1.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 920.0,
      end: 922.0,
      text: 'Alrigh dude. Stand up.',
      speakers: [0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0633,
          surprise: 0.1223,
          suspense: 0.258,
          happiness: 0.2135,
          neutral: 0.1034,
          sadness: 0.2394
        },
        class: 'suspense'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0015,
          Applying: 0.0024,
          Creating: 0.0075,
          Evaluating: 0.0019,
          None: 0.9842,
          Remembering: 0.001,
          Understanding: 0.0015
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 923.0,
      end: 926.0,
      text: 'Aidan, what is the solution to this problem?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.7632,
          surprise: 0.0115,
          suspense: 0.059,
          happiness: 0.1316,
          neutral: 0.032,
          sadness: 0.0027
        },
        class: 'passion'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.9771,
          Applying: 0.0053,
          Creating: 0.0028,
          Evaluating: 0.0087,
          None: 0.0001,
          Remembering: 0.0052,
          Understanding: 0.0008
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.0,
          Creating: 0.5,
          Remembering: 0.5,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 927.5,
      end: 940.5,
      text: 'I know the solution is thirty nine flowers cuz I added cuz, like, First, I added the the two the two.',
      speakers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.3567,
          surprise: 0.0124,
          suspense: 0.362,
          happiness: 0.2463,
          neutral: 0.0155,
          sadness: 0.007
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0027,
          Applying: 0.0122,
          Creating: 0.0023,
          Evaluating: 0.0031,
          None: 0.0002,
          Remembering: 0.9697,
          Understanding: 0.0098
        }
      },
      blooms_custom: {
        class: 'Creating',
        results: {
          Applying: 0.5,
          Creating: 0.25,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.25,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 940.5,
      end: 950.5,
      text: 'Mhmm. I mean, I added the I added the the two to the seven, then I added the the thirty to the two.',
      speakers: [
        1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ],
      question: false,
      speaker: 'both',
      emotions: {
        results: {
          passion: 0.4485,
          surprise: 0.0058,
          suspense: 0.252,
          happiness: 0.2845,
          neutral: 0.0058,
          sadness: 0.0034
        },
        class: 'passion'
      },
      blooms: {
        class: 'Remembering',
        results: {
          Analyzing: 0.0,
          Applying: 0.0002,
          Creating: 0.0001,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.9996,
          Understanding: 0.0001
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 1.0,
          Creating: 0.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 950.5,
      end: 952.95496,
      text: 'And then I found out it was thirty nine.',
      speakers: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      question: false,
      speaker: 'student',
      emotions: {
        results: {
          passion: 0.0301,
          surprise: 0.096,
          suspense: 0.2307,
          happiness: 0.1106,
          neutral: 0.1667,
          sadness: 0.366
        },
        class: 'sadness'
      },
      blooms: {
        class: 'None',
        results: {
          Analyzing: 0.0127,
          Applying: 0.0044,
          Creating: 0.0954,
          Evaluating: 0.003,
          None: 0.7304,
          Remembering: 0.0967,
          Understanding: 0.0574
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 953.0,
      end: 954.0,
      text: 'Good work dude.',
      speakers: [0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0797,
          surprise: 0.2987,
          suspense: 0.0883,
          happiness: 0.1547,
          neutral: 0.1197,
          sadness: 0.2589
        },
        class: 'surprise'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.1535,
          Applying: 0.0203,
          Creating: 0.0343,
          Evaluating: 0.2265,
          None: 0.2653,
          Remembering: 0.0212,
          Understanding: 0.2791
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 954.0,
      end: 956.0,
      text: "Why don't you explain yourself there?",
      speakers: [0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0565,
          surprise: 0.1369,
          suspense: 0.2339,
          happiness: 0.1667,
          neutral: 0.1248,
          sadness: 0.2812
        },
        class: 'sadness'
      },
      blooms: {
        class: 'Understanding',
        results: {
          Analyzing: 0.0,
          Applying: 0.0,
          Creating: 0.0,
          Evaluating: 0.0,
          None: 0.0,
          Remembering: 0.0,
          Understanding: 0.9999
        }
      },
      blooms_custom: {
        class: 'Evaluating',
        results: {
          Applying: 0.1667,
          Creating: 0.1667,
          Remembering: 0.1667,
          Evaluating: 0.1667,
          Understanding: 0.1667,
          Analyzing: 0.1667,
          None: -0.00019999999999997797
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 956.0,
      end: 963.5,
      text: "Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.1191,
          surprise: 0.035,
          suspense: 0.6289,
          happiness: 0.1829,
          neutral: 0.0205,
          sadness: 0.0135
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0016,
          Applying: 0.0,
          Creating: 0.0001,
          Evaluating: 0.9977,
          None: 0.0,
          Remembering: 0.0001,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'Applying',
        results: {
          Applying: 0.1429,
          Creating: 0.1429,
          Remembering: 0.2857,
          Evaluating: 0.1429,
          Understanding: 0.1429,
          Analyzing: 0.1429,
          None: -0.00019999999999997797
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 963.5,
      end: 966.75,
      text: "So the more that we can think about math, the better math we're gonna be.",
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3425,
          surprise: 0.0037,
          suspense: 0.262,
          happiness: 0.351,
          neutral: 0.0343,
          sadness: 0.0065
        },
        class: 'happiness'
      },
      blooms: {
        class: 'Creating',
        results: {
          Analyzing: 0.0014,
          Applying: 0.0079,
          Creating: 0.9704,
          Evaluating: 0.0189,
          None: 0.0004,
          Remembering: 0.0005,
          Understanding: 0.0005
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 966.75,
      end: 968.5,
      text: 'You guys did an awesome job today.',
      speakers: [0, 0, 0, 0, 0, 0, 0],
      question: false,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.0775,
          surprise: 0.1543,
          suspense: 0.2599,
          happiness: 0.1682,
          neutral: 0.1176,
          sadness: 0.2225
        },
        class: 'suspense'
      },
      blooms: {
        class: 'Analyzing',
        results: {
          Analyzing: 0.3745,
          Applying: 0.1284,
          Creating: 0.1587,
          Evaluating: 0.0978,
          None: 0.0371,
          Remembering: 0.0384,
          Understanding: 0.165
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0,
          Creating: 0,
          Remembering: 0,
          Evaluating: 0,
          Understanding: 0,
          Analyzing: 0,
          None: 0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    },
    {
      start: 968.5,
      end: 973.0,
      text: 'Okay. And you can you quietly and get up and go back to your table?',
      speakers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      question: true,
      speaker: 'teacher',
      emotions: {
        results: {
          passion: 0.3399,
          surprise: 0.0842,
          suspense: 0.2584,
          happiness: 0.2397,
          neutral: 0.0663,
          sadness: 0.0115
        },
        class: 'passion'
      },
      blooms: {
        class: 'Evaluating',
        results: {
          Analyzing: 0.0002,
          Applying: 0.0021,
          Creating: 0.0031,
          Evaluating: 0.932,
          None: 0.0584,
          Remembering: 0.0037,
          Understanding: 0.0004
        }
      },
      blooms_custom: {
        class: 'None',
        results: {
          Applying: 0.0,
          Creating: 1.0,
          Remembering: 0.0,
          Evaluating: 0.0,
          Understanding: 0.0,
          Analyzing: 0.0,
          None: 0.0
        }
      },
      blooms_keyword: { matches: [], results: {} }
    }
  ],
  transcript: {
    original:
      "Yeah. We're gonna talk about numbers today. Right? The more that we talk about math, the better we actually are at math. Did you know that? Yeah. Yeah. Yeah. I know more than we talk about it, but better than our math. So that's what we're gonna do today. Right. And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers. Okay? If you have an answer at your head, I want you to keep it in your head until I ask for it. Is that a good plan? Yeah. Yeah. If I tell you you can talk to your partner about it, you can do that. but I don't want you to shout out any answer. Okay? Good plan and make a thumbs up. Cool. Cool. Alright. Cool. Alright. And one of the things that we're also going to do today is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems. So that's something the good mathematicians do. Somebody who's really good at math, not only knows the answer, but can explain why they know the answer. And that's what we're gonna work on today. Cool. Alright. So I got enough coffee here for you. Alright? Remember there's no Shopee now? Right? I don't want anybody to talk yet. I just want you to look at the math problem. And when you look at the math problem, I want you to go Okay. Can I figure it out? Can I figure it out? I want you to be thinking about what strategy might I use to figure this problem out? until I need anything to help me figure it out? because I don't want you to talk about it again. Okay. So think about that. Let's see. How would I solve this? Do I need anything to help me solve it? I'm gonna give you and your partner ten seconds to talk about. Okay. Alright. You are. Just a sec. Go. Hi. Talk to your partner about it. Talk to your fellow partner. five four three two one. Okay. I figure it out? Yeah. Alright. Who thinks they know the solution to this problem? Who thinks they know the solution? Who thinks they know? Young lady, what is your name? Kamory. Kamory, can you stand up for us, Kamory, please? Yep. And can you tell us the solution to this come over here. What is the solution to this problem? Right. Okay. So I want you to use the actual sentence here. Okay. Solution. That's kind of a difficult word. Listen to me as I say it one more time. Solution. What is the what is the solution? What's the other word? What what does that mean? Yeah. It it means something back at That that can help you fix a problem. Oh, well, I like the way you made the connection between problem and solution. That's absolutely correct. If this is our problem, the answer is the solution. Right? So the answer is another way to say solution. Right? So what's the word? Alright. So what is the solution to this problem? solution is five. You do. Fine. You know, how do you know that? How do you know that the solution to this problem is five? Because it's four plus five equals nine. Twenty four plus five equals twenty nine. Alright. So I saw that you started with four and the five. You did with the ones place first and then you got the tens. Right? How did you know how to do that? because I teach it, I show this how to do it. Okay. So yeah. Let me go ahead and answer that. Alright. Go ahead. Bye bye. Bye bye. But I'm not sure yet. I need to see somebody else tell me if they know this was, you can say, Jessica. Somebody else tell me the solution, young man, why don't you come on up here? Actually, you can stay right there. Stand up there. Go ahead and stay on up right there. What is your name? Praveen. Praveen? Praveen. Praveen. Alright. Praveen, can you tell me the solution to this problem? This solution is five. Oh, okay. Great. You are in agreement with your cosmic. How do you know that the solution is five? I know that you're using a side because side I did. Tell me what you added? I added Right. But how did you come to buy? Did you start with buy or did you start with a different number? Tell me tell me how you figure that out. I am sorry with my twenty four. Okay. And then how did you how did you get to five? I did some. I could call it up. It's I I sat in twenty nine AM. I am Alright. That's awesome. I like the way you did that. Alright. There's two people that have the same solution. Anybody else have the same solution? Or do you have the same solution? Or what is your name again? Wait. Go ahead. You can you can sit down. What's your name? Jaselle, can you stand up for me? And what did you find as a solution to this problem? Go ahead and start with the sentence for me. For your I know. that solution is five. I know because Nine two three four equals five and four zero eight. Whoa. So you did are you telling me correct me if I wrong, did you use subtraction? to help you solve an additional problem? No. I need one more person to help me out here. One more person. One more person. You ready? What is your name? Rhianna. Rhianna. Okay. Rhianna, what is your solution to this problem? Five. k. Use the sentence for me, please. I know the solution is five. And how do you know the solution is five? I know this because I started returning for my head and I transferred on and my get to get to twenty nine. Oh, okay. You counted your head. Does that do we ever do that? You guys count your head. Do you guys use something to help you count your head sometimes? Oh, you just use your head. Does anybody ever use their fingers? Sometimes, Sometimes I do this. I go. Thank you. That way. Alright? Alright. Good. Thank thank you for that. Alright. guys are pretty good. Your teacher said you were pretty good about. You guys ready for another one? Yay. By the way, the guy is using the things that made okay. You don't have to say, I don't use my fingers. You don't need to say. I'm a I'm a mathematician and sometimes I use my fingers. A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do. But sometimes when I get over ten, they run around ten. Alright, guys. Ready? Okay. Same rules apply. We're not gonna shy of an answer. No need to raise your hands yet. I want you to think about this is a little bit different problem. This is a story problem or a word problem. Mhmm. Okay? So you're gonna have to read it with me. Think about what you know. Think about what you don't know. And there's some words in here that are gonna tell you what type of math problem this is. So I want you to be thinking about that. And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it. Are you writing? Bless you. Bless you. There are thirty two pink flowers. There are seven white flowers. How many flowers in all? think about it. Why do you know? What do you need to know? What type of problem is it? And do you know what the solution is? But your hands down. If you think you know if you haven't answered, give me a thumb to the chin. If you're still working on it, Give me a thing your your point of finger to your chin. I know the answer. I'm still working on it. I know the answer. I'm still working on it. Do the answer? Still working on. Hey, good mathematicians. Think about math before they even do it. Are you ready to talk to your partner about it? ten seconds, doctor Pagerto know. four. Two. One. Alright. Did you and your partner agreed on what the solution was. No. I'm gonna need some people to tell me what the solution is, and I'll solved. We're gonna start with this young man right here. What is your name? He didn't stand up for me. Oh, he's got a Star Wars shirt on. Come on. And you know what? I want you to tell the class What is the solution to this problem? I think the solution is that we we can use the hygiene chart and and and go down as many as we need to go down. And if we go and if we need to go to the right any week, we go to the right and then we can get the problem. Alright. So I like the fact that you're thinking about the hundreds chart. Did you determine what the solution is here? So the question was, how many flowers involved? Did could you tell me how many flowers there were? There were thirty two pink flowers and seven white flowers. How many flowers in all, Dayton? Did you? Did you come to a solution? Here's what I want you to do. Hey, Eton. Go ahead and sit down for me. I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you. Okay? Is that cool? How about we go to your partner? What's your name? Mhmm. Mhmm. Mhmm. Go ahead and set up for me. Do you know the solution to this problem? What is the solution to this problem? Well, yes. Thirty nine. Okay. So go ahead and use the whole sentence for me. I know the reservation is thirty nine. Thirty nine apples? Thirty nine what? Fenway. Alright. Flowers, because that's in something the good mathematicians do. They always, especially in word problems, We have to know how many what the number represents. So say the whole thing for me. I know this solution is thirty nine. No worries. Flowers. Alright. One more time altogether. I know the solution is thirty nine now. awesome job. But how do you know that? How do you know that it's thirty nine flocks? Tell your classmates because they wanna know. What did you do to figure it out? I counted on a duck. You counted, so what did you use? In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution? Mhmm. Okay. So one so can you do that? So can you do that? Yeah. Let's listen to her. I want I want you guys to to listen to how she solved the problem. Ninety two. thirty three, thirty four, thirty five, thirty six, thirty seven, thirty eight, thirty nine, forty four, and at thirty. And after and how did you know to only stop at thirty nine? two equals nine. So that's how I know. Oh, you did the ones place too. Good job. Alright. Well, who else wants to explain why? you listening. I'm gonna come back to you one more time. Are you ready for me? Go ahead and stand up over here. Oh, wait. Actually, you can wrap up over here. Let's stay up here. What is your name? in in, what is the solution to this problem? Thirty nine apples. Alright. Start over for me. I know the solutions. Alright. So, Ian, would you tell in your class how you know that it's thirty nine flowers? Thirty it's ninety nine flowers because two plus three equals ten be and two nine seven no. Well, you're looking at the problem again. Two plus seven equals nine. And Two minus oh, seven minus two. Just stick with me. I'm with you. We're good. So you said two plus seven equals nine So then how did you know that it was thirty nine, and not just ninety nine? They call it seven plus two weeks old. Right? So the first. So Should work. Anybody else wanna take you sick? Take a try at this. You wanna do that? Come on. What's your name? Calista. Alright. Let's listen to Calista. Kalista, what is the solution to this problem? thirty nine zebras. Tell your classmates what's the solution this follows? I have the solution that stays on my Oh, good. Closter, can you tell them how you came up with thirty nine flowers? Alright. Good. I like the way that you said, if I know this and I know that. I'd love good job. Ethan, what's that? Alright. Did stand up? Ethan, what is the solution to this problem? I know the solution is thirty nine flowers because I added because, like, First, I added the the two the two. Mhmm. I mean, I added the I added the the two to the seven, then I added the the thirty to the two. And then I found out it was thirty nine. Good. We're good. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer. So the more that we can think about math, the better math we're gonna be. You guys did an awesome job today. Okay. And you and you quiet and get up and go back to your team.",
    parsed: [
      { type: 'text', text: "Yeah. We're gonna talk about numbers " },
      { type: 'entity', text: 'today', label: 'DATE' },
      {
        type: 'text',
        text: ". Right? The more that we talk about math, the better we actually are at math. Did you know that? Yeah. Yeah. Yeah. I know more than we talk about it, but better than our math. So that's what we're gonna do "
      },
      { type: 'entity', text: 'today', label: 'DATE' },
      {
        type: 'text',
        text: ". Right. And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers. Okay? If you have an answer at your head, I want you to keep it in your head until I ask for it. Is that a good plan? Yeah. Yeah. If I tell you you can talk to your partner about it, you can do that. but I don't want you to shout out any answer. Okay? Good plan and make a thumbs up. Cool. Cool. Alright. Cool. Alright. And "
      },
      { type: 'entity', text: 'one', label: 'CARDINAL' },
      { type: 'text', text: " of the things that we're also going to do " },
      { type: 'entity', text: 'today', label: 'DATE' },
      {
        type: 'text',
        text: " is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems. So that's something the good mathematicians do. Somebody who's really good at math, not only knows the answer, but can explain why they know the answer. And that's what we're gonna work on "
      },
      { type: 'entity', text: 'today', label: 'DATE' },
      {
        type: 'text',
        text: ". Cool. Alright. So I got enough coffee here for you. Alright? Remember there's no Shopee now? Right? I don't want anybody to talk yet. I just want you to look at the math problem. And when you look at the math problem, I want you to go Okay. Can I figure it out? Can I figure it out? I want you to be thinking about what strategy might I use to figure this problem out? until I need anything to help me figure it out? because I don't want you to talk about it again. Okay. So think about that. Let's see. How would I solve this? Do I need anything to help me solve it? I'm gonna give you and your partner "
      },
      { type: 'entity', text: 'ten seconds', label: 'TIME' },
      {
        type: 'text',
        text: ' to talk about. Okay. Alright. You are. Just a '
      },
      { type: 'entity', text: 'sec', label: 'ORG' },
      {
        type: 'text',
        text: '. Go. Hi. Talk to your partner about it. Talk to your fellow partner. '
      },
      { type: 'entity', text: 'five four three two', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' one. Okay. I figure it out? Yeah. Alright. Who thinks they know the solution to this problem? Who thinks they know the solution? Who thinks they know? Young lady, what is your name? '
      },
      { type: 'entity', text: 'Kamory', label: 'PERSON' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Kamory', label: 'PERSON' },
      { type: 'text', text: ', can you stand up for us, ' },
      { type: 'entity', text: 'Kamory', label: 'PERSON' },
      {
        type: 'text',
        text: ", please? Yep. And can you tell us the solution to this come over here. What is the solution to this problem? Right. Okay. So I want you to use the actual sentence here. Okay. Solution. That's kind of a difficult word. Listen to me as I say it "
      },
      { type: 'entity', text: 'one', label: 'CARDINAL' },
      {
        type: 'text',
        text: " more time. Solution. What is the what is the solution? What's the other word? What what does that mean? Yeah. It it means something back at That that can help you fix a problem. Oh, well, I like the way you made the connection between problem and solution. That's absolutely correct. If this is our problem, the answer is the solution. Right? So the answer is another way to say solution. Right? So what's the word? Alright. So what is the solution to this problem? solution is five. You do. Fine. You know, how do you know that? How do you know that the solution to this problem is five? Because it's "
      },
      { type: 'entity', text: 'four plus', label: 'QUANTITY' },
      { type: 'text', text: ' five equals nine. ' },
      { type: 'entity', text: 'Twenty four plus', label: 'QUANTITY' },
      { type: 'text', text: ' five equals ' },
      { type: 'entity', text: 'twenty nine', label: 'CARDINAL' },
      { type: 'text', text: '. Alright. So I saw that you started with ' },
      { type: 'entity', text: 'four', label: 'CARDINAL' },
      { type: 'text', text: ' and the ' },
      { type: 'entity', text: 'five', label: 'CARDINAL' },
      {
        type: 'text',
        text: ". You did with the ones place first and then you got the tens. Right? How did you know how to do that? because I teach it, I show this how to do it. Okay. So yeah. Let me go ahead and answer that. Alright. Go ahead. Bye bye. Bye bye. But I'm not sure yet. I need to see somebody else tell me if they know this was, you can say, "
      },
      { type: 'entity', text: 'Jessica', label: 'PERSON' },
      {
        type: 'text',
        text: ". Somebody else tell me the solution, young man, why don't you come on up here? Actually, you can stay right there. Stand up there. Go ahead and stay on up right there. What is your name? "
      },
      { type: 'entity', text: 'Praveen', label: 'PERSON' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Praveen', label: 'PERSON' },
      { type: 'text', text: '? ' },
      { type: 'entity', text: 'Praveen', label: 'PERSON' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Praveen', label: 'PERSON' },
      { type: 'text', text: '. Alright. ' },
      { type: 'entity', text: 'Praveen', label: 'PERSON' },
      {
        type: 'text',
        text: ", can you tell me the solution to this problem? This solution is five. Oh, okay. Great. You are in agreement with your cosmic. How do you know that the solution is five? I know that you're using a side because side I did. Tell me what you added? I added Right. But how did you come to buy? Did you start with buy or did you start with a different number? Tell me tell me how you figure that out. I am sorry with my "
      },
      { type: 'entity', text: 'twenty four', label: 'CARDINAL' },
      {
        type: 'text',
        text: '. Okay. And then how did you how did you get to '
      },
      { type: 'entity', text: 'five', label: 'CARDINAL' },
      {
        type: 'text',
        text: "? I did some. I could call it up. It's I I sat in "
      },
      { type: 'entity', text: 'twenty nine AM', label: 'TIME' },
      {
        type: 'text',
        text: ". I am Alright. That's awesome. I like the way you did that. Alright. There's "
      },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      {
        type: 'text',
        text: " people that have the same solution. Anybody else have the same solution? Or do you have the same solution? Or what is your name again? Wait. Go ahead. You can you can sit down. What's your name? "
      },
      { type: 'entity', text: 'Jaselle', label: 'GPE' },
      {
        type: 'text',
        text: ', can you stand up for me? And what did you find as a solution to this problem? Go ahead and start with the sentence for me. For your I know. that solution is five. I know because Nine two three four equals five and four zero eight. Whoa. So you did are you telling me correct me if I wrong, did you use subtraction? to help you solve an additional problem? No. I need one more person to help me out here. '
      },
      { type: 'entity', text: 'One', label: 'CARDINAL' },
      { type: 'text', text: ' more person. ' },
      { type: 'entity', text: 'One', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' more person. You ready? What is your name? '
      },
      { type: 'entity', text: 'Rhianna', label: 'PERSON' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Rhianna', label: 'PERSON' },
      { type: 'text', text: '. Okay. ' },
      { type: 'entity', text: 'Rhianna', label: 'PERSON' },
      { type: 'text', text: ', what is your solution to this problem? ' },
      { type: 'entity', text: 'Five', label: 'CARDINAL' },
      {
        type: 'text',
        text: '. k. Use the sentence for me, please. I know the solution is five. And how do you know the solution is five? I know this because I started returning for my head and I transferred on and my get to get to '
      },
      { type: 'entity', text: 'twenty nine', label: 'CARDINAL' },
      {
        type: 'text',
        text: '. Oh, okay. You counted your head. Does that do we ever do that? You guys count your head. Do you guys use something to help you count your head sometimes? Oh, you just use your head. Does anybody ever use their fingers? Sometimes, Sometimes I do this. I go. Thank you. That way. Alright? Alright. Good. Thank thank you for that. Alright. guys are pretty good. Your teacher said you were pretty good about. You guys ready for another one? '
      },
      { type: 'entity', text: 'Yay', label: 'PERSON' },
      {
        type: 'text',
        text: ". By the way, the guy is using the things that made okay. You don't have to say, I don't use my fingers. You don't need to say. I'm a I'm a mathematician and sometimes I use my fingers. A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do. But sometimes when I get over ten, they run around ten. Alright, guys. Ready? Okay. Same rules apply. We're not gonna shy of an answer. No need to raise your hands yet. I want you to think about this is a little bit different problem. This is a story problem or a word problem. "
      },
      { type: 'entity', text: 'Mhmm', label: 'PERSON' },
      {
        type: 'text',
        text: ". Okay? So you're gonna have to read it with me. Think about what you know. Think about what you don't know. And there's some words in here that are gonna tell you what type of math problem this is. So I want you to be thinking about that. And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it. Are you writing? Bless you. Bless you. There are "
      },
      { type: 'entity', text: 'thirty two', label: 'CARDINAL' },
      { type: 'text', text: ' pink flowers. There are ' },
      { type: 'entity', text: 'seven', label: 'CARDINAL' },
      {
        type: 'text',
        text: " white flowers. How many flowers in all? think about it. Why do you know? What do you need to know? What type of problem is it? And do you know what the solution is? But your hands down. If you think you know if you haven't answered, give me a thumb to the chin. If you're still working on it, Give me a thing your your point of finger to your chin. I know the answer. I'm still working on it. I know the answer. I'm still working on it. Do the answer? Still working on. Hey, good mathematicians. Think about math before they even do it. Are you ready to talk to your partner about it? "
      },
      { type: 'entity', text: 'ten seconds', label: 'TIME' },
      { type: 'text', text: ', doctor ' },
      { type: 'entity', text: 'Pagerto', label: 'PERSON' },
      { type: 'text', text: ' know. ' },
      { type: 'entity', text: 'four', label: 'CARDINAL' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Two', label: 'CARDINAL' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'One', label: 'CARDINAL' },
      {
        type: 'text',
        text: ". Alright. Did you and your partner agreed on what the solution was. No. I'm gonna need some people to tell me what the solution is, and I'll solved. We're gonna start with this young man right here. What is your name? He didn't stand up for me. Oh, he's got a Star Wars shirt on. Come on. And you know what? I want you to tell the class What is the solution to this problem? I think the solution is that we we can use the hygiene chart and and and go down as many as we need to go down. And if we go and if we need to go to "
      },
      { type: 'entity', text: 'the right any week', label: 'DATE' },
      {
        type: 'text',
        text: ", we go to the right and then we can get the problem. Alright. So I like the fact that you're thinking about the "
      },
      { type: 'entity', text: 'hundreds', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' chart. Did you determine what the solution is here? So the question was, how many flowers involved? Did could you tell me how many flowers there were? There were '
      },
      { type: 'entity', text: 'thirty two', label: 'CARDINAL' },
      { type: 'text', text: ' pink flowers and ' },
      { type: 'entity', text: 'seven', label: 'CARDINAL' },
      { type: 'text', text: ' white flowers. How many flowers in all, ' },
      { type: 'entity', text: 'Dayton', label: 'ORG' },
      {
        type: 'text',
        text: "? Did you? Did you come to a solution? Here's what I want you to do. Hey, "
      },
      { type: 'entity', text: 'Eton', label: 'GPE' },
      {
        type: 'text',
        text: ". Go ahead and sit down for me. I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you. Okay? Is that cool? How about we go to your partner? What's your name? "
      },
      { type: 'entity', text: 'Mhmm', label: 'PERSON' },
      {
        type: 'text',
        text: '. Mhmm. Mhmm. Go ahead and set up for me. Do you know the solution to this problem? What is the solution to this problem? Well, yes. '
      },
      { type: 'entity', text: 'Thirty nine', label: 'CARDINAL' },
      {
        type: 'text',
        text: '. Okay. So go ahead and use the whole sentence for me. I know the reservation is '
      },
      { type: 'entity', text: 'thirty nine', label: 'DATE' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Thirty nine', label: 'CARDINAL' },
      { type: 'text', text: ' apples? ' },
      { type: 'entity', text: 'Thirty nine', label: 'CARDINAL' },
      { type: 'text', text: ' what? ' },
      { type: 'entity', text: 'Fenway', label: 'PERSON' },
      {
        type: 'text',
        text: ". Alright. Flowers, because that's in something the good mathematicians do. They always, especially in word problems, We have to know how many what the number represents. So say the whole thing for me. I know this solution is "
      },
      { type: 'entity', text: 'thirty nine', label: 'DATE' },
      { type: 'text', text: '. No worries. Flowers. Alright. ' },
      { type: 'entity', text: 'One', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' more time altogether. I know the solution is '
      },
      { type: 'entity', text: 'thirty nine', label: 'DATE' },
      {
        type: 'text',
        text: " now. awesome job. But how do you know that? How do you know that it's "
      },
      { type: 'entity', text: 'thirty nine', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' flocks? Tell your classmates because they wanna know. What did you do to figure it out? I counted on a duck. You counted, so what did you use? In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution? '
      },
      { type: 'entity', text: 'Mhmm', label: 'PERSON' },
      {
        type: 'text',
        text: ". Okay. So one so can you do that? So can you do that? Yeah. Let's listen to her. I want I want you guys to to listen to how she solved the problem. "
      },
      { type: 'entity', text: 'Ninety two.', label: 'CARDINAL' },
      { type: 'text', text: ' thirty three, thirty four, thirty five, ' },
      { type: 'entity', text: 'thirty six', label: 'DATE' },
      {
        type: 'text',
        text: ', thirty seven, thirty eight, thirty nine, forty four, and at '
      },
      { type: 'entity', text: 'thirty', label: 'CARDINAL' },
      {
        type: 'text',
        text: '. And after and how did you know to only stop at '
      },
      { type: 'entity', text: 'thirty nine', label: 'DATE' },
      {
        type: 'text',
        text: "? two equals nine. So that's how I know. Oh, you did the ones place too. Good job. Alright. Well, who else wants to explain why? you listening. I'm gonna come back to you "
      },
      { type: 'entity', text: 'one', label: 'CARDINAL' },
      {
        type: 'text',
        text: " more time. Are you ready for me? Go ahead and stand up over here. Oh, wait. Actually, you can wrap up over here. Let's stay up here. What is your name? in in, what is the solution to this problem? "
      },
      { type: 'entity', text: 'Thirty nine', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' apples. Alright. Start over for me. I know the solutions. Alright. So, '
      },
      { type: 'entity', text: 'Ian', label: 'PERSON' },
      {
        type: 'text',
        text: ", would you tell in your class how you know that it's "
      },
      { type: 'entity', text: 'thirty nine', label: 'CARDINAL' },
      { type: 'text', text: ' flowers? ' },
      { type: 'entity', text: 'Thirty', label: 'CARDINAL' },
      { type: 'text', text: " it's " },
      { type: 'entity', text: 'ninety nine', label: 'CARDINAL' },
      { type: 'text', text: ' flowers because ' },
      { type: 'entity', text: 'two plus', label: 'QUANTITY' },
      { type: 'text', text: ' three equals ' },
      { type: 'entity', text: 'ten', label: 'CARDINAL' },
      { type: 'text', text: ' be and ' },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      {
        type: 'text',
        text: " nine seven no. Well, you're looking at the problem again. "
      },
      { type: 'entity', text: 'Two', label: 'CARDINAL' },
      { type: 'text', text: ' plus seven equals nine. And ' },
      { type: 'entity', text: 'Two', label: 'CARDINAL' },
      { type: 'text', text: ' minus oh, ' },
      { type: 'entity', text: 'seven minus two', label: 'QUANTITY' },
      {
        type: 'text',
        text: ". Just stick with me. I'm with you. We're good. So you said "
      },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      {
        type: 'text',
        text: ' plus seven equals nine So then how did you know that it was '
      },
      { type: 'entity', text: 'thirty nine', label: 'DATE' },
      { type: 'text', text: ', and not just ninety nine? They call it ' },
      { type: 'entity', text: 'seven', label: 'CARDINAL' },
      { type: 'text', text: ' plus ' },
      { type: 'entity', text: 'two weeks old', label: 'DATE' },
      { type: 'text', text: '. Right? So the ' },
      { type: 'entity', text: 'first', label: 'ORDINAL' },
      {
        type: 'text',
        text: ". So Should work. Anybody else wanna take you sick? Take a try at this. You wanna do that? Come on. What's your name? "
      },
      { type: 'entity', text: 'Calista', label: 'PERSON' },
      { type: 'text', text: ". Alright. Let's listen to " },
      { type: 'entity', text: 'Calista', label: 'PERSON' },
      {
        type: 'text',
        text: '. Kalista, what is the solution to this problem? '
      },
      { type: 'entity', text: 'thirty nine', label: 'QUANTITY' },
      {
        type: 'text',
        text: " zebras. Tell your classmates what's the solution this follows? I have the solution that stays on my Oh, good. "
      },
      { type: 'entity', text: 'Closter', label: 'GPE' },
      { type: 'text', text: ', can you tell them how you came up with ' },
      { type: 'entity', text: 'thirty nine', label: 'CARDINAL' },
      {
        type: 'text',
        text: " flowers? Alright. Good. I like the way that you said, if I know this and I know that. I'd love good job. "
      },
      { type: 'entity', text: 'Ethan', label: 'PERSON' },
      { type: 'text', text: ", what's that? Alright. Did stand up? " },
      { type: 'entity', text: 'Ethan', label: 'PERSON' },
      {
        type: 'text',
        text: ', what is the solution to this problem? I know the solution is '
      },
      { type: 'entity', text: 'thirty nine', label: 'QUANTITY' },
      { type: 'text', text: ' flowers because I added because, like, ' },
      { type: 'entity', text: 'First', label: 'ORDINAL' },
      { type: 'text', text: ', I added the the ' },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      { type: 'text', text: ' the ' },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      { type: 'text', text: '. ' },
      { type: 'entity', text: 'Mhmm', label: 'PERSON' },
      { type: 'text', text: '. I mean, I added the I added the the ' },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      { type: 'text', text: ' to the ' },
      { type: 'entity', text: 'seven', label: 'CARDINAL' },
      { type: 'text', text: ', then I added the the thirty to the ' },
      { type: 'entity', text: 'two', label: 'CARDINAL' },
      { type: 'text', text: '. And then I found out it was ' },
      { type: 'entity', text: 'thirty nine', label: 'DATE' },
      {
        type: 'text',
        text: ". Good. We're good. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer. So the more that we can think about math, the better math we're gonna be. You guys did an awesome job "
      },
      { type: 'entity', text: 'today', label: 'DATE' }
    ]
  },
  topics: [
    {
      start: 1.1591797,
      end: 16.265625,
      text: "Yeah. We're gonna talk about numbers today. Right? The more that we talk about math, the better we actually are at math. Did you know that? Yeah. Yeah. Yeah. I know more than we talk about it, but better than our math. So that's what we're gonna do today. Right.",
      topics: [{ topic: 'mathematics', confidence: 0.9485643439809767 }]
    },
    {
      start: 16.265625,
      end: 30.25,
      text: "And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers. Okay? If you have an answer at your head, I want you to keep it in your head until I ask for it. Is that a good plan?",
      topics: []
    },
    {
      start: 30.25,
      end: 75.375,
      text: "Yeah. Yeah. If I tell you you can talk to your partner about it, you can do that. but I don't want you to shout out any answer. Okay? Good plan and make a thumbs up. Cool. Cool. Alright. Cool. Alright. And one of the things that we're also going to do today is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems. So that's something the good mathematicians do. Somebody who's really good at math, not only knows the answer, but can explain why they know the answer. And that's what we're gonna work on today. Cool. Alright. So I got enough coffee here for you. Alright? Remember there's no Shopee now?",
      topics: [
        { topic: 'mathematics', confidence: 0.9037483833048072 },
        { topic: 'solutions', confidence: 0.5561177151565971 }
      ]
    },
    { start: 75.75, end: 76.18499, text: 'Right?', topics: [] },
    {
      start: 76.25,
      end: 90.24499,
      text: "I don't want anybody to talk yet. I just want you to look at the math problem. And when you look at the math problem, I want you to go Okay. Can I figure it out? Can I figure it out? I want you to be thinking about what strategy might I use to figure this problem out?",
      topics: [{ topic: 'mathematics', confidence: 0.9890220216451561 }]
    },
    {
      start: 90.5625,
      end: 131.5,
      text: "until I need anything to help me figure it out? because I don't want you to talk about it again. Okay. So think about that. Let's see. How would I solve this? Do I need anything to help me solve it? I'm gonna give you and your partner ten seconds to talk about.",
      topics: [{ topic: 'solutions', confidence: 0.8172835079664061 }]
    },
    {
      start: 131.5,
      end: 178.75,
      text: 'Okay. Alright. You are. Just a sec. Go. Hi. Talk to your partner about it. Talk to your fellow partner. five four three two one. Okay. I figure it out? Yeah. Alright. Who thinks they know the solution to this problem? Who thinks they know the solution? Who thinks they know? Young lady, what is your name? Kamory. Kamory, can you stand up for us, Kamory, please? Yep. And can you tell us the solution to this come over here.',
      topics: []
    },
    {
      start: 179.125,
      end: 217.345,
      text: "What is the solution to this problem? Right. Okay. So I want you to use the actual sentence here. Okay. Solution. That's kind of a difficult word. Listen to me as I say it one more time. Solution. What is the what is the solution? What's the other word? What what does that mean? Yeah. It it means something back at That that can help you fix a problem. Oh, well, I like the way you made the connection between problem and solution. That's absolutely correct. If this is our problem, the answer is the solution. Right? So the answer is another way to say solution. Right? So what's the word?",
      topics: [{ topic: 'solutions', confidence: 0.9875909836985552 }]
    },
    {
      start: 218.875,
      end: 260.25,
      text: "Alright. So what is the solution to this problem? solution is five. You do. Fine. You know, how do you know that? How do you know that the solution to this problem is five? Because it's four plus five equals nine. Twenty four plus five equals twenty nine. Alright. So I saw that you started with four and the five. You did with the ones place first and then you got the tens. Right? How did you know how to do that? because I teach it, I show this how to do it. Okay. So yeah. Let me go ahead and answer that. Alright. Go ahead. Bye bye. Bye bye.",
      topics: [{ topic: 'mathematics', confidence: 0.7796416705444363 }]
    },
    {
      start: 260.25,
      end: 285.0,
      text: "But I'm not sure yet. I need to see somebody else tell me if they know this was, you can say, Jessica. Somebody else tell me the solution, young man, why don't you come on up here? Actually, you can stay right there. Stand up there. Go ahead and stay on up right there. What is your name? Praveen. Praveen? Praveen. Praveen. Alright. Praveen, can you tell me the solution to this problem? This solution is five. Oh, okay.",
      topics: []
    },
    {
      start: 285.25,
      end: 312.75,
      text: "Great. You are in agreement with your cosmic. How do you know that the solution is five? I know that you're using a side because side I did. Tell me what you added? I added Right. But how did you come to buy? Did you start with buy or did you start with a different number? Tell me tell me how you figure that out. I am sorry with my twenty four. Okay. And then how did you how did you get to five?",
      topics: [{ topic: 'purchasing', confidence: 0.8020971519178829 }]
    },
    {
      start: 313.75,
      end: 343.5,
      text: "I did some. I could call it up. It's I I sat in twenty nine AM. I am Alright. That's awesome. I like the way you did that. Alright. There's two people that have the same solution. Anybody else have the same solution? Or do you have the same solution? Or what is your name again? Wait. Go ahead. You can you can sit down. What's your name? Jaselle, can you stand up for me? And what did you find as a solution to this problem?",
      topics: [{ topic: 'solutions', confidence: 0.6415037943893186 }]
    },
    {
      start: 345.09503,
      end: 435.5,
      text: 'Go ahead and start with the sentence for me. For your I know. that solution is five. I know because Nine two three four equals five and four zero eight. Whoa. So you did are you telling me correct me if I wrong, did you use subtraction? to help you solve an additional problem? No. I need one more person to help me out here. One more person. One more person. You ready? What is your name? Rhianna. Rhianna. Okay. Rhianna, what is your solution to this problem? Five. k. Use the sentence for me, please. I know the solution is five. And how do you know the solution is five? I know this because I started returning for my head and I transferred on and my get to get to twenty nine. Oh, okay. You counted your head. Does that do we ever do that? You guys count your head. Do you guys use something to help you count your head sometimes? Oh, you just use your head. Does anybody ever use their fingers? Sometimes, Sometimes I do this. I go. Thank you. That way. Alright? Alright. Good. Thank thank you for that. Alright. guys are pretty good. Your teacher said you were pretty good about. You guys ready for another one? Yay. By the way, the guy is using the things that made okay.',
      topics: []
    },
    {
      start: 435.5,
      end: 462.0,
      text: "You don't have to say, I don't use my fingers. You don't need to say. I'm a I'm a mathematician and sometimes I use my fingers. A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do. But sometimes when I get over ten, they run around ten. Alright, guys. Ready? Okay. Same rules apply. We're not gonna shy of an answer.",
      topics: [{ topic: 'mathematics', confidence: 0.99497597370468 }]
    },
    {
      start: 462.26508,
      end: 469.5,
      text: 'No need to raise your hands yet. I want you to think about this is a little bit different problem. This is a story problem or a word problem.',
      topics: []
    },
    {
      start: 469.5,
      end: 490.5,
      text: "Mhmm. Okay? So you're gonna have to read it with me. Think about what you know. Think about what you don't know. And there's some words in here that are gonna tell you what type of math problem this is. So I want you to be thinking about that. And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it.",
      topics: [{ topic: 'mathematics', confidence: 0.7108983056439518 }]
    },
    {
      start: 490.5,
      end: 515.5,
      text: 'Are you writing? Bless you. Bless you. There are thirty two pink flowers. There are seven white flowers. How many flowers in all? think about it. Why do you know? What do you need to know? What type of problem is it? And do you know what the solution is?',
      topics: [{ topic: 'plants', confidence: 0.528066138938061 }]
    },
    {
      start: 515.875,
      end: 533.0,
      text: "But your hands down. If you think you know if you haven't answered, give me a thumb to the chin. If you're still working on it, Give me a thing your your point of finger to your chin.",
      topics: []
    },
    {
      start: 533.5,
      end: 595.0525,
      text: "I know the answer. I'm still working on it. I know the answer. I'm still working on it. Do the answer? Still working on. Hey, good mathematicians. Think about math before they even do it. Are you ready to talk to your partner about it? ten seconds, doctor Pagerto know. four. Two. One. Alright. Did you and your partner agreed on what the solution was. No. I'm gonna need some people to tell me what the solution is, and I'll solved.",
      topics: [{ topic: 'mathematics', confidence: 0.8974504747755658 }]
    },
    {
      start: 595.0525,
      end: 705.0,
      text: "We're gonna start with this young man right here. What is your name? He didn't stand up for me. Oh, he's got a Star Wars shirt on. Come on. And you know what? I want you to tell the class What is the solution to this problem? I think the solution is that we we can use the hygiene chart and and and go down as many as we need to go down. And if we go and if we need to go to the right any week, we go to the right and then we can get the problem. Alright. So I like the fact that you're thinking about the hundreds chart. Did you determine what the solution is here? So the question was, how many flowers involved? Did could you tell me how many flowers there were? There were thirty two pink flowers and seven white flowers. How many flowers in all, Dayton? Did you? Did you come to a solution? Here's what I want you to do. Hey, Eton. Go ahead and sit down for me. I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you. Okay? Is that cool? How about we go to your partner? What's your name? Mhmm. Mhmm. Mhmm. Go ahead and set up for me. Do you know the solution to this problem? What is the solution to this problem? Well, yes. Thirty nine. Okay. So go ahead and use the whole sentence for me. I know the reservation is thirty nine.",
      topics: []
    },
    {
      start: 705.0,
      end: 728.0,
      text: "Thirty nine apples? Thirty nine what? Fenway. Alright. Flowers, because that's in something the good mathematicians do. They always, especially in word problems, We have to know how many what the number represents. So say the whole thing for me. I know this solution is thirty nine. No worries. Flowers.",
      topics: [{ topic: 'mathematics', confidence: 0.8631133139681096 }]
    },
    {
      start: 728.0,
      end: 800.6667,
      text: "Alright. One more time altogether. I know the solution is thirty nine now. awesome job. But how do you know that? How do you know that it's thirty nine flocks? Tell your classmates because they wanna know. What did you do to figure it out? I counted on a duck. You counted, so what did you use? In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution? Mhmm. Okay. So one so can you do that? So can you do that? Yeah. Let's listen to her. I want I want you guys to to listen to how she solved the problem. Ninety two. thirty three, thirty four, thirty five, thirty six, thirty seven, thirty eight, thirty nine, forty four, and at thirty. And after and how did you know to only stop at thirty nine? two equals nine. So that's how I know. Oh, you did the ones place too. Good job. Alright. Well, who else wants to explain why? you listening. I'm gonna come back to you one more time. Are you ready for me? Go ahead and stand up over here. Oh, wait.",
      topics: []
    },
    {
      start: 800.6667,
      end: 825.0,
      text: "Actually, you can wrap up over here. Let's stay up here. What is your name? in in, what is the solution to this problem? Thirty nine apples. Alright. Start over for me. I know the solutions. Alright. So, Ian, would you tell in your class how you know that it's thirty nine flowers?",
      topics: [{ topic: 'fruits', confidence: 0.4744846958533487 }]
    },
    {
      start: 827.0,
      end: 940.5,
      text: "Thirty it's ninety nine flowers because two plus three equals ten be and two nine seven no. Well, you're looking at the problem again. Two plus seven equals nine. And Two minus oh, seven minus two. Just stick with me. I'm with you. We're good. So you said two plus seven equals nine So then how did you know that it was thirty nine, and not just ninety nine? They call it seven plus two weeks old. Right? So the first. So Should work. Anybody else wanna take you sick? Take a try at this. You wanna do that? Come on. What's your name? Calista. Alright. Let's listen to Calista. Kalista, what is the solution to this problem? thirty nine zebras. Tell your classmates what's the solution this follows? I have the solution that stays on my Oh, good. Closter, can you tell them how you came up with thirty nine flowers? Alright. Good. I like the way that you said, if I know this and I know that. I'd love good job. Ethan, what's that? Alright. Did stand up? Ethan, what is the solution to this problem? I know the solution is thirty nine flowers because I added because, like, First, I added the the two the two.",
      topics: []
    },
    {
      start: 940.5,
      end: 973.0,
      text: "Mhmm. I mean, I added the I added the the two to the seven, then I added the the thirty to the two. And then I found out it was thirty nine. Good. We're good. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer. So the more that we can think about math, the better math we're gonna be. You guys did an awesome job today. Okay. And you and you quiet and get up and go back to your team.",
      topics: [
        { topic: 'mathematics', confidence: 0.9745769701408901 },
        { topic: 'logical reasoning', confidence: 0.7987334371669049 },
        { topic: 'logic', confidence: 0.7732540083511764 }
      ]
    }
  ],
  summaries: {
    combined:
      "We're gonna talk about numbers today. The more that we talk about math, the better we actually are at math. So that's what we're gonna do today. And one of the things that we're also going to do today is we're going to explain why we know the answer to these problems. Praveen, can you tell me the solution to this problem? This solution is five. How do you know that? because I teach it, I show this how to do it. Rhianna, what is your solution? Five k. Teacher asks students to think about a story problem or a word problem. He then asks them to come up with a solution. I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it. I'm gonna come back to you one more time. Anybody else wanna take you sick? Take a try at this. I like the way that you said, if I know this and I know that, I'd love good job. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer.",
    segments: [
      {
        summary:
          "We're gonna talk about numbers today. The more that we talk about math, the better we actually are at math. So that's what we're gonna do today. And one of the things that we're also going to do today is we're going to explain why we know the answer to these problems.",
        transcript_segment:
          "Yeah. We're gonna talk about numbers today. Right? The more that we talk about math, the better we actually are at math. Did you know that? Yeah. Yeah. Yeah. I know more than we talk about it, but better than our math. So that's what we're gonna do today. Right. And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers. Okay? If you have an answer at your head, I want you to keep it in your head until I ask for it. Is that a good plan? Yeah. Yeah. If I tell you you can talk to your partner about it, you can do that. but I don't want you to shout out any answer. Okay? Good plan and make a thumbs up. Cool. Cool. Alright. Cool. Alright. And one of the things that we're also going to do today is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems. So that's something the good mathematicians do. Somebody who's really good at math, not only knows the answer, but can explain why they know the answer. And that's what we're gonna work on today. Cool. Alright. So I got enough coffee here for you. Alright? Remember there's no Shopee now? Right? I don't want anybody to talk yet. I just want you to look at the math problem. And when you look at the math problem, I want you to go Okay. Can I figure it out? Can I figure it out? I want you to be thinking about what strategy might I use to figure this problem out? until I need anything to help me figure it out? because I don't want you to talk about it again. Okay. So think about that. Let's see. How would I solve this? Do I need anything to help me solve it? I'm gonna give you and your partner ten seconds to talk about. Okay. Alright. You are. Just a sec. Go. Hi. Talk to your partner about it. Talk to your fellow partner. five four three two one. Okay. I figure it out? Yeah. Alright. Who thinks they know the solution to this problem? Who thinks they know the solution? Who thinks they know? Young lady, what is your name? Kamory. Kamory, can you stand up for us, Kamory, please? Yep. And can you tell us the solution to this come over here. What is the solution to this problem? Right. Okay. So I want you to use the actual sentence here. Okay. Solution. That's kind of a difficult word. Listen to me as I say it one more time. Solution. What is the what is the solution? What's the other word? What what does that mean? Yeah. It it means something back at That that can help you fix a problem. Oh, well, I like the way you made the connection between problem and solution. That's absolutely correct. If this is our problem, the answer is the solution. Right? So the answer is another way to say solution. Right? So what's the word? Alright. So what is the solution to this problem? solution is five. You do. "
      },
      {
        summary:
          'Praveen, can you tell me the solution to this problem? This solution is five. How do you know that? because I teach it, I show this how to do it. Rhianna, what is your solution? Five k.',
        transcript_segment:
          "Fine. You know, how do you know that? How do you know that the solution to this problem is five? Because it's four plus five equals nine. Twenty four plus five equals twenty nine. Alright. So I saw that you started with four and the five. You did with the ones place first and then you got the tens. Right? How did you know how to do that? because I teach it, I show this how to do it. Okay. So yeah. Let me go ahead and answer that. Alright. Go ahead. Bye bye. Bye bye. But I'm not sure yet. I need to see somebody else tell me if they know this was, you can say, Jessica. Somebody else tell me the solution, young man, why don't you come on up here? Actually, you can stay right there. Stand up there. Go ahead and stay on up right there. What is your name? Praveen. Praveen? Praveen. Praveen. Alright. Praveen, can you tell me the solution to this problem? This solution is five. Oh, okay. Great. You are in agreement with your cosmic. How do you know that the solution is five? I know that you're using a side because side I did. Tell me what you added? I added Right. But how did you come to buy? Did you start with buy or did you start with a different number? Tell me tell me how you figure that out. I am sorry with my twenty four. Okay. And then how did you how did you get to five? I did some. I could call it up. It's I I sat in twenty nine AM. I am Alright. That's awesome. I like the way you did that. Alright. There's two people that have the same solution. Anybody else have the same solution? Or do you have the same solution? Or what is your name again? Wait. Go ahead. You can you can sit down. What's your name? Jaselle, can you stand up for me? And what did you find as a solution to this problem? Go ahead and start with the sentence for me. For your I know. that solution is five. I know because Nine two three four equals five and four zero eight. Whoa. So you did are you telling me correct me if I wrong, did you use subtraction? to help you solve an additional problem? No. I need one more person to help me out here. One more person. One more person. You ready? What is your name? Rhianna. Rhianna. Okay. Rhianna, what is your solution to this problem? Five. k. Use the sentence for me, please. I know the solution is five. And how do you know the solution is five? I know this because I started returning for my head and I transferred on and my get to get to twenty nine. Oh, okay. You counted your head. Does that do we ever do that? You guys count your head. Do you guys use something to help you count your head sometimes? Oh, you just use your head. Does anybody ever use their fingers? Sometimes, Sometimes I do this. I go. Thank you. That way. Alright? Alright. Good. Thank thank you for that. Alright. guys are pretty good. "
      },
      {
        summary:
          'Teacher asks students to think about a story problem or a word problem. He then asks them to come up with a solution.',
        transcript_segment:
          "Your teacher said you were pretty good about. You guys ready for another one? Yay. By the way, the guy is using the things that made okay. You don't have to say, I don't use my fingers. You don't need to say. I'm a I'm a mathematician and sometimes I use my fingers. A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do. But sometimes when I get over ten, they run around ten. Alright, guys. Ready? Okay. Same rules apply. We're not gonna shy of an answer. No need to raise your hands yet. I want you to think about this is a little bit different problem. This is a story problem or a word problem. Mhmm. Okay? So you're gonna have to read it with me. Think about what you know. Think about what you don't know. And there's some words in here that are gonna tell you what type of math problem this is. So I want you to be thinking about that. And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it. Are you writing? Bless you. Bless you. There are thirty two pink flowers. There are seven white flowers. How many flowers in all? think about it. Why do you know? What do you need to know? What type of problem is it? And do you know what the solution is? But your hands down. If you think you know if you haven't answered, give me a thumb to the chin. If you're still working on it, Give me a thing your your point of finger to your chin. I know the answer. I'm still working on it. I know the answer. I'm still working on it. Do the answer? Still working on. Hey, good mathematicians. Think about math before they even do it. Are you ready to talk to your partner about it? ten seconds, doctor Pagerto know. four. Two. One. Alright. Did you and your partner agreed on what the solution was. No. I'm gonna need some people to tell me what the solution is, and I'll solved. We're gonna start with this young man right here. What is your name? He didn't stand up for me. Oh, he's got a Star Wars shirt on. Come on. And you know what? I want you to tell the class What is the solution to this problem? I think the solution is that we we can use the hygiene chart and and and go down as many as we need to go down. And if we go and if we need to go to the right any week, we go to the right and then we can get the problem. Alright. So I like the fact that you're thinking about the hundreds chart. Did you determine what the solution is here? So the question was, how many flowers involved? Did could you tell me how many flowers there were? There were thirty two pink flowers and seven white flowers. How many flowers in all, Dayton? Did you? Did you come to a solution? Here's what I want you to do. Hey, Eton. Go ahead and sit down for me. "
      },
      {
        summary:
          "I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it. I'm gonna come back to you one more time. Anybody else wanna take you sick? Take a try at this.",
        transcript_segment:
          "I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you. Okay? Is that cool? How about we go to your partner? What's your name? Mhmm. Mhmm. Mhmm. Go ahead and set up for me. Do you know the solution to this problem? What is the solution to this problem? Well, yes. Thirty nine. Okay. So go ahead and use the whole sentence for me. I know the reservation is thirty nine. Thirty nine apples? Thirty nine what? Fenway. Alright. Flowers, because that's in something the good mathematicians do. They always, especially in word problems, We have to know how many what the number represents. So say the whole thing for me. I know this solution is thirty nine. No worries. Flowers. Alright. One more time altogether. I know the solution is thirty nine now. awesome job. But how do you know that? How do you know that it's thirty nine flocks? Tell your classmates because they wanna know. What did you do to figure it out? I counted on a duck. You counted, so what did you use? In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution? Mhmm. Okay. So one so can you do that? So can you do that? Yeah. Let's listen to her. I want I want you guys to to listen to how she solved the problem. Ninety two. thirty three, thirty four, thirty five, thirty six, thirty seven, thirty eight, thirty nine, forty four, and at thirty. And after and how did you know to only stop at thirty nine? two equals nine. So that's how I know. Oh, you did the ones place too. Good job. Alright. Well, who else wants to explain why? you listening. I'm gonna come back to you one more time. Are you ready for me? Go ahead and stand up over here. Oh, wait. Actually, you can wrap up over here. Let's stay up here. What is your name? in in, what is the solution to this problem? Thirty nine apples. Alright. Start over for me. I know the solutions. Alright. So, Ian, would you tell in your class how you know that it's thirty nine flowers? Thirty it's ninety nine flowers because two plus three equals ten be and two nine seven no. Well, you're looking at the problem again. Two plus seven equals nine. And Two minus oh, seven minus two. Just stick with me. I'm with you. We're good. So you said two plus seven equals nine So then how did you know that it was thirty nine, and not just ninety nine? They call it seven plus two weeks old. Right? So the first. So Should work. Anybody else wanna take you sick? Take a try at this. You wanna do that? Come on. What's your name? Calista. Alright. Let's listen to Calista. Kalista, what is the solution to this problem? thirty nine zebras. Tell your classmates what's the solution this follows? I have the solution that stays on my Oh, good. Closter, can you tell them how you came up with thirty nine flowers? Alright. Good. "
      },
      {
        summary:
          "I like the way that you said, if I know this and I know that, I'd love good job. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer.",
        transcript_segment:
          "I like the way that you said, if I know this and I know that. I'd love good job. Ethan, what's that? Alright. Did stand up? Ethan, what is the solution to this problem? I know the solution is thirty nine flowers because I added because, like, First, I added the the two the two. Mhmm. I mean, I added the I added the the two to the seven, then I added the the thirty to the two. And then I found out it was thirty nine. Good. We're good. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer. So the more that we can think about math, the better math we're gonna be. You guys did an awesome job today. Okay. And you and you quiet and get up and go back to your team."
      }
    ]
  },
  entities: [
    {
      value: 'today',
      label: 'DATE',
      start_char: 37,
      end_char: 42,
      source: 'statistical'
    },
    {
      value: 'today',
      label: 'DATE',
      start_char: 249,
      end_char: 254,
      source: 'statistical'
    },
    {
      value: 'one',
      label: 'CARDINAL',
      start_char: 720,
      end_char: 723,
      source: 'statistical'
    },
    {
      value: 'today',
      label: 'DATE',
      start_char: 766,
      end_char: 771,
      source: 'statistical'
    },
    {
      value: 'today',
      label: 'DATE',
      start_char: 1102,
      end_char: 1107,
      source: 'statistical'
    },
    {
      value: 'ten seconds',
      label: 'TIME',
      start_char: 1713,
      end_char: 1724,
      source: 'statistical'
    },
    {
      value: 'sec',
      label: 'ORG',
      start_char: 1771,
      end_char: 1774,
      source: 'statistical'
    },
    {
      value: 'five four three two',
      label: 'CARDINAL',
      start_char: 1844,
      end_char: 1863,
      source: 'statistical'
    },
    {
      value: 'Kamory',
      label: 'PERSON',
      start_char: 2046,
      end_char: 2052,
      source: 'statistical'
    },
    {
      value: 'Kamory',
      label: 'PERSON',
      start_char: 2054,
      end_char: 2060,
      source: 'statistical'
    },
    {
      value: 'Kamory',
      label: 'PERSON',
      start_char: 2087,
      end_char: 2093,
      source: 'statistical'
    },
    {
      value: 'one',
      label: 'CARDINAL',
      start_char: 2337,
      end_char: 2340,
      source: 'statistical'
    },
    {
      value: 'four plus',
      label: 'QUANTITY',
      start_char: 2943,
      end_char: 2952,
      source: 'statistical'
    },
    {
      value: 'Twenty four plus',
      label: 'QUANTITY',
      start_char: 2971,
      end_char: 2987,
      source: 'statistical'
    },
    {
      value: 'twenty nine',
      label: 'CARDINAL',
      start_char: 3000,
      end_char: 3011,
      source: 'statistical'
    },
    {
      value: 'four',
      label: 'CARDINAL',
      start_char: 3053,
      end_char: 3057,
      source: 'statistical'
    },
    {
      value: 'five',
      label: 'CARDINAL',
      start_char: 3066,
      end_char: 3070,
      source: 'statistical'
    },
    {
      value: 'Jessica',
      label: 'PERSON',
      start_char: 3398,
      end_char: 3405,
      source: 'statistical'
    },
    {
      value: 'Praveen',
      label: 'PERSON',
      start_char: 3593,
      end_char: 3600,
      source: 'statistical'
    },
    {
      value: 'Praveen',
      label: 'PERSON',
      start_char: 3602,
      end_char: 3609,
      source: 'statistical'
    },
    {
      value: 'Praveen',
      label: 'PERSON',
      start_char: 3611,
      end_char: 3618,
      source: 'statistical'
    },
    {
      value: 'Praveen',
      label: 'PERSON',
      start_char: 3620,
      end_char: 3627,
      source: 'statistical'
    },
    {
      value: 'Praveen',
      label: 'PERSON',
      start_char: 3638,
      end_char: 3645,
      source: 'statistical'
    },
    {
      value: 'twenty four',
      label: 'CARDINAL',
      start_char: 4060,
      end_char: 4071,
      source: 'statistical'
    },
    {
      value: 'five',
      label: 'CARDINAL',
      start_char: 4119,
      end_char: 4123,
      source: 'statistical'
    },
    {
      value: 'twenty nine AM',
      label: 'TIME',
      start_char: 4173,
      end_char: 4187,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 4265,
      end_char: 4268,
      source: 'statistical'
    },
    {
      value: 'Jaselle',
      label: 'GPE',
      start_char: 4464,
      end_char: 4471,
      source: 'statistical'
    },
    {
      value: 'One',
      label: 'CARDINAL',
      start_char: 4877,
      end_char: 4880,
      source: 'statistical'
    },
    {
      value: 'One',
      label: 'CARDINAL',
      start_char: 4894,
      end_char: 4897,
      source: 'statistical'
    },
    {
      value: 'Rhianna',
      label: 'PERSON',
      start_char: 4941,
      end_char: 4948,
      source: 'statistical'
    },
    {
      value: 'Rhianna',
      label: 'PERSON',
      start_char: 4950,
      end_char: 4957,
      source: 'statistical'
    },
    {
      value: 'Rhianna',
      label: 'PERSON',
      start_char: 4965,
      end_char: 4972,
      source: 'statistical'
    },
    {
      value: 'Five',
      label: 'CARDINAL',
      start_char: 5013,
      end_char: 5017,
      source: 'statistical'
    },
    {
      value: 'twenty nine',
      label: 'CARDINAL',
      start_char: 5220,
      end_char: 5231,
      source: 'statistical'
    },
    {
      value: 'Yay',
      label: 'PERSON',
      start_char: 5670,
      end_char: 5673,
      source: 'statistical'
    },
    {
      value: 'Mhmm',
      label: 'PERSON',
      start_char: 6264,
      end_char: 6268,
      source: 'statistical'
    },
    {
      value: 'thirty two',
      label: 'CARDINAL',
      start_char: 6682,
      end_char: 6692,
      source: 'statistical'
    },
    {
      value: 'seven',
      label: 'CARDINAL',
      start_char: 6717,
      end_char: 6722,
      source: 'statistical'
    },
    {
      value: 'ten seconds',
      label: 'TIME',
      start_char: 7308,
      end_char: 7319,
      source: 'statistical'
    },
    {
      value: 'Pagerto',
      label: 'PERSON',
      start_char: 7328,
      end_char: 7335,
      source: 'statistical'
    },
    {
      value: 'four',
      label: 'CARDINAL',
      start_char: 7342,
      end_char: 7346,
      source: 'statistical'
    },
    {
      value: 'Two',
      label: 'CARDINAL',
      start_char: 7348,
      end_char: 7351,
      source: 'statistical'
    },
    {
      value: 'One',
      label: 'CARDINAL',
      start_char: 7353,
      end_char: 7356,
      source: 'statistical'
    },
    {
      value: 'the right any week',
      label: 'DATE',
      start_char: 7881,
      end_char: 7899,
      source: 'statistical'
    },
    {
      value: 'hundreds',
      label: 'CARDINAL',
      start_char: 8012,
      end_char: 8020,
      source: 'statistical'
    },
    {
      value: 'thirty two',
      label: 'CARDINAL',
      start_char: 8183,
      end_char: 8193,
      source: 'statistical'
    },
    {
      value: 'seven',
      label: 'CARDINAL',
      start_char: 8211,
      end_char: 8216,
      source: 'statistical'
    },
    {
      value: 'Dayton',
      label: 'ORG',
      start_char: 8257,
      end_char: 8263,
      source: 'statistical'
    },
    {
      value: 'Eton',
      label: 'GPE',
      start_char: 8337,
      end_char: 8341,
      source: 'statistical'
    },
    {
      value: 'Mhmm',
      label: 'PERSON',
      start_char: 8629,
      end_char: 8633,
      source: 'statistical'
    },
    {
      value: 'Thirty nine',
      label: 'CARDINAL',
      start_char: 8766,
      end_char: 8777,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'DATE',
      start_char: 8858,
      end_char: 8869,
      source: 'statistical'
    },
    {
      value: 'Thirty nine',
      label: 'CARDINAL',
      start_char: 8871,
      end_char: 8882,
      source: 'statistical'
    },
    {
      value: 'Thirty nine',
      label: 'CARDINAL',
      start_char: 8891,
      end_char: 8902,
      source: 'statistical'
    },
    {
      value: 'Fenway',
      label: 'PERSON',
      start_char: 8909,
      end_char: 8915,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'DATE',
      start_char: 9141,
      end_char: 9152,
      source: 'statistical'
    },
    {
      value: 'One',
      label: 'CARDINAL',
      start_char: 9184,
      end_char: 9187,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'DATE',
      start_char: 9233,
      end_char: 9244,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'CARDINAL',
      start_char: 9315,
      end_char: 9326,
      source: 'statistical'
    },
    {
      value: 'Mhmm',
      label: 'PERSON',
      start_char: 9579,
      end_char: 9583,
      source: 'statistical'
    },
    {
      value: 'Ninety two.',
      label: 'CARDINAL',
      start_char: 9732,
      end_char: 9743,
      source: 'statistical'
    },
    {
      value: 'thirty six',
      label: 'DATE',
      start_char: 9784,
      end_char: 9794,
      source: 'statistical'
    },
    {
      value: 'thirty',
      label: 'CARDINAL',
      start_char: 9856,
      end_char: 9862,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'DATE',
      start_char: 9911,
      end_char: 9922,
      source: 'statistical'
    },
    {
      value: 'one',
      label: 'CARDINAL',
      start_char: 10093,
      end_char: 10096,
      source: 'statistical'
    },
    {
      value: 'Thirty nine',
      label: 'CARDINAL',
      start_char: 10294,
      end_char: 10305,
      source: 'statistical'
    },
    {
      value: 'Ian',
      label: 'PERSON',
      start_char: 10377,
      end_char: 10380,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'CARDINAL',
      start_char: 10434,
      end_char: 10445,
      source: 'statistical'
    },
    {
      value: 'Thirty',
      label: 'CARDINAL',
      start_char: 10455,
      end_char: 10461,
      source: 'statistical'
    },
    {
      value: 'ninety nine',
      label: 'CARDINAL',
      start_char: 10467,
      end_char: 10478,
      source: 'statistical'
    },
    {
      value: 'two plus',
      label: 'QUANTITY',
      start_char: 10495,
      end_char: 10503,
      source: 'statistical'
    },
    {
      value: 'ten',
      label: 'CARDINAL',
      start_char: 10517,
      end_char: 10520,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 10528,
      end_char: 10531,
      source: 'statistical'
    },
    {
      value: 'Two',
      label: 'CARDINAL',
      start_char: 10590,
      end_char: 10593,
      source: 'statistical'
    },
    {
      value: 'Two',
      label: 'CARDINAL',
      start_char: 10622,
      end_char: 10625,
      source: 'statistical'
    },
    {
      value: 'seven minus two',
      label: 'QUANTITY',
      start_char: 10636,
      end_char: 10651,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 10711,
      end_char: 10714,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'DATE',
      start_char: 10775,
      end_char: 10786,
      source: 'statistical'
    },
    {
      value: 'seven',
      label: 'CARDINAL',
      start_char: 10827,
      end_char: 10832,
      source: 'statistical'
    },
    {
      value: 'two weeks old',
      label: 'DATE',
      start_char: 10838,
      end_char: 10851,
      source: 'statistical'
    },
    {
      value: 'first',
      label: 'ORDINAL',
      start_char: 10867,
      end_char: 10872,
      source: 'statistical'
    },
    {
      value: 'Calista',
      label: 'PERSON',
      start_char: 10990,
      end_char: 10997,
      source: 'statistical'
    },
    {
      value: 'Calista',
      label: 'PERSON',
      start_char: 11024,
      end_char: 11031,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'QUANTITY',
      start_char: 11080,
      end_char: 11091,
      source: 'statistical'
    },
    {
      value: 'Closter',
      label: 'GPE',
      start_char: 11202,
      end_char: 11209,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'CARDINAL',
      start_char: 11250,
      end_char: 11261,
      source: 'statistical'
    },
    {
      value: 'Ethan',
      label: 'PERSON',
      start_char: 11367,
      end_char: 11372,
      source: 'statistical'
    },
    {
      value: 'Ethan',
      label: 'PERSON',
      start_char: 11410,
      end_char: 11415,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'QUANTITY',
      start_char: 11478,
      end_char: 11489,
      source: 'statistical'
    },
    {
      value: 'First',
      label: 'ORDINAL',
      start_char: 11529,
      end_char: 11534,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 11552,
      end_char: 11555,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 11560,
      end_char: 11563,
      source: 'statistical'
    },
    {
      value: 'Mhmm',
      label: 'PERSON',
      start_char: 11565,
      end_char: 11569,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 11607,
      end_char: 11610,
      source: 'statistical'
    },
    {
      value: 'seven',
      label: 'CARDINAL',
      start_char: 11618,
      end_char: 11623,
      source: 'statistical'
    },
    {
      value: 'two',
      label: 'CARDINAL',
      start_char: 11660,
      end_char: 11663,
      source: 'statistical'
    },
    {
      value: 'thirty nine',
      label: 'DATE',
      start_char: 11693,
      end_char: 11704,
      source: 'statistical'
    },
    {
      value: 'today',
      label: 'DATE',
      start_char: 11983,
      end_char: 11988,
      source: 'statistical'
    }
  ],
  paragraphs: {
    transcript:
      "\nSpeaker 0: Yeah. We're gonna talk about numbers today. Right? The more that we talk about math, the better we actually are at math. Did you know that?\n\nYeah. Yeah. Yeah. I know more than we talk about it, but better than our math. So that's what we're gonna do today.\n\nRight. And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers. Okay? If you have an answer at your head, I want you to keep it in your head until I ask for it. Is that a good plan?\n\nSpeaker 1: Yeah. Yeah.\n\nSpeaker 0: If I tell you you can talk to your partner about it, you can do that. but I don't want you to shout out any answer. Okay? Good plan and make a thumbs up. Cool.\n\nSpeaker 2: Cool.\n\nSpeaker 0: Alright. Cool. Alright. And one of the things that we're also going to do today is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems. So that's something the good mathematicians do.\n\nSomebody who's really good at math, not only knows the answer, but can explain why they know the answer. And that's what we're gonna work on today. Cool. Alright. So I got enough coffee here for you.\n\nAlright? Remember there's no Shopee now? Right? I don't want anybody to talk yet. I just want you to look at the math problem.\n\nAnd when you look at the math problem, I want you to go Okay. Can I figure it out? Can I figure it out? I want you to be thinking about what strategy might I use to figure this problem out? until I need anything to help me figure it out?\n\nbecause I don't want you to talk about it again. Okay. So think about that. Let's see. How would I solve this?\n\nDo I need anything to help me solve it? I'm gonna give you and your partner ten seconds to talk about. Okay. Alright. You are.\n\nJust a sec. Go. Hi. Talk to your partner about it. Talk to your fellow partner.\n\nfive four three two one. Okay. I figure it out? Yeah. Alright.\n\nWho thinks they know the solution to this problem? Who thinks they know the solution? Who thinks they know? Young lady, what is your name? Kamory.\n\nKamory, can you stand up for us, Kamory, please? Yep. And can you tell us the solution to this come over here. What is the solution to this problem? Right.\n\nOkay. So I want you to use the actual sentence here. Okay. Solution. That's kind of a difficult word.\n\nListen to me as I say it one more time. Solution. What is the what is the solution? What's the other word? What what does that mean?\n\nYeah.\n\nSpeaker 1: It it means something back at That that can help you fix a problem.\n\nSpeaker 0: Oh, well, I like the way you made the connection between problem and solution. That's absolutely correct. If this is our problem, the answer is the solution. Right? So the answer is another way to say solution.\n\nRight? So what's the word? Alright. So what is the solution to this problem? solution is five.\n\nYou do. Fine. You know, how do you know that? How do you know that the solution to this problem is five?\n\nSpeaker 2: Because it's four plus five equals nine. Twenty four plus five equals twenty nine.\n\nSpeaker 0: Alright. So I saw that you started with four and the five. You did with the ones place first and then you got the tens. Right? How did you know how to do that?\n\nbecause I teach it, I show this how to do it. Okay. So yeah. Let me go ahead and answer that. Alright.\n\nGo ahead. Bye bye. Bye bye. But I'm not sure yet. I need to see somebody else tell me if they know this was, you can say, Jessica.\n\nSomebody else tell me the solution, young man, why don't you come on up here? Actually, you can stay right there. Stand up there. Go ahead and stay on up right there. What is your name?\n\nPraveen. Praveen? Praveen. Praveen. Alright.\n\nPraveen, can you tell me the solution to this problem?\n\nSpeaker 2: This solution is five.\n\nSpeaker 0: Oh, okay. Great. You are in agreement with your cosmic. How do you know that the solution is five? I\n\nSpeaker 1: know that you're using a side because side I did.\n\nSpeaker 0: Tell me what you added?\n\nSpeaker 1: I added Right. But how\n\nSpeaker 0: did you come to buy? Did you start with buy or did you start with a different number? Tell me tell me how you figure that out.\n\nSpeaker 2: I am sorry with my twenty four.\n\nSpeaker 0: Okay. And then how did you how did you get to five?\n\nSpeaker 1: I did some. I\n\nSpeaker 2: could call it up. It's\n\nSpeaker 0: I\n\nSpeaker 2: I sat in twenty nine AM. I\n\nSpeaker 0: am Alright. That's awesome. I like the way you did that. Alright. There's two people that have the same solution.\n\nAnybody else have the same solution? Or do you have the same solution? Or what is your name again? Wait. Go ahead.\n\nYou can you can sit down. What's your name? Jaselle, can you stand up for me? And what did you find as a solution to this problem? Go ahead and start with the sentence for me.\n\nFor your I know.\n\nSpeaker 3: that solution\n\nSpeaker 2: is five. I know because Nine two three four equals five and four zero\n\nSpeaker 0: eight. Whoa. So you did are you telling me correct me if I wrong, did you use subtraction? to help you solve an additional problem? No.\n\nI need one more person to help me out here. One more person. One more person. You ready? What is your name?\n\nRhianna. Rhianna. Okay. Rhianna, what is your solution to this problem?\n\nSpeaker 2: Five.\n\nSpeaker 0: k. Use the sentence for me, please.\n\nSpeaker 1: I know the solution is five.\n\nSpeaker 0: And how do you know the solution is five?\n\nSpeaker 1: I know this because I\n\nSpeaker 0: started\n\nSpeaker 1: returning for my head and I transferred on\n\nSpeaker 2: and my get to get to twenty nine. Oh,\n\nSpeaker 0: okay. You counted your head. Does that do we ever do that? You guys count your head. Do you guys use something to help you count your head sometimes?\n\nSpeaker 2: Oh,\n\nSpeaker 0: you just use your head. Does anybody ever use their fingers? Sometimes, Sometimes I do this. I go. Thank you.\n\nThat way. Alright? Alright. Good. Thank thank you for that.\n\nAlright. guys are pretty good. Your teacher said you were pretty good about. You guys ready for another one? Yay.\n\nSpeaker 3: By the way, the guy is using the things that made okay. You don't have to say, I don't use my fingers. You don't need to say.\n\nSpeaker 0: I'm a I'm a mathematician and sometimes I use my fingers. A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do. But sometimes when I get over ten, they run around ten. Alright, guys. Ready?\n\nOkay. Same rules apply. We're not gonna shy of an answer. No need to raise your hands yet. I want you to think about this is a little bit different problem.\n\nThis is a story problem or a word problem. Mhmm. Okay? So you're gonna have to read it with me. Think about what you know.\n\nThink about what you don't know. And there's some words in here that are gonna tell you what type of math problem this is. So I want you to be thinking about that. And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it. Are you writing?\n\nBless you. Bless\n\nSpeaker 1: you. There\n\nSpeaker 0: are thirty two pink flowers. There are seven white flowers. How many flowers in all? think about it. Why do you know?\n\nWhat do you need to know? What type of problem is it? And do you know what the solution is? But your hands down. If you think you know if you haven't answered, give me a thumb to the chin.\n\nIf you're still working on it, Give me a thing your your point of finger to your chin. I know the answer. I'm still working on it. I know the answer. I'm still working on it.\n\nDo the answer? Still working on. Hey, good mathematicians. Think about math before they even do it. Are you ready to talk to your partner about it?\n\nten seconds, doctor\n\nSpeaker 2: Pagerto know.\n\nSpeaker 0: four. Two. One. Alright. Did you and your partner agreed on what the solution was.\n\nNo. I'm gonna need some people to tell me what the solution is, and I'll solved. We're gonna start with this young man right here. What is your name? He didn't stand up for me.\n\nOh, he's got a Star Wars shirt on. Come on. And you know what? I want you to tell the class What is the solution to this problem?\n\nSpeaker 1: I think the solution is that we we can use the hygiene chart\n\nSpeaker 0: and\n\nSpeaker 1: and and go down as many as we need to go down. And if we go and if we need to go to the right any week, we go to\n\nSpeaker 0: the\n\nSpeaker 1: right and then we can get the problem. Alright.\n\nSpeaker 0: So I like the fact that you're thinking about the hundreds chart. Did you determine what the solution is here? So the question was, how many flowers involved? Did could you tell me how many flowers there were? There were thirty two pink flowers and seven white flowers.\n\nHow many flowers in all, Dayton? Did you? Did you come to a solution? Here's what I want you to do. Hey, Eton.\n\nGo ahead and sit down for me. I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you. Okay? Is that cool? How about we go to your partner?\n\nWhat's your name? Mhmm. Mhmm. Mhmm. Go ahead and set up for me.\n\nDo you know the solution to this problem? What is the solution to this problem? Well, yes.\n\nSpeaker 2: Thirty nine.\n\nSpeaker 0: Okay. So go ahead and use the whole sentence for\n\nSpeaker 2: me. I know the reservation is thirty nine.\n\nSpeaker 0: Thirty nine apples? Thirty nine what? Fenway. Alright. Flowers, because that's in something the good mathematicians do.\n\nThey always, especially in word problems, We have to know how many what the number represents. So say the whole thing for me.\n\nSpeaker 2: I know this solution is thirty\n\nSpeaker 0: nine. No worries. Flowers. Alright. One more time altogether.\n\nI\n\nSpeaker 2: know the solution is thirty nine now. awesome\n\nSpeaker 0: job. But how do you know that? How do you know that it's thirty nine flocks? Tell your classmates because they wanna know. What did you do to figure it out?\n\nSpeaker 1: I counted on a duck. You counted,\n\nSpeaker 0: so what did you use? In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution? Mhmm. Okay. So one so can you do that?\n\nSo can you do\n\nSpeaker 2: that?\n\nSpeaker 0: Yeah. Let's listen to her. I want I want you guys to to listen to how she solved the problem.\n\nSpeaker 1: Ninety two. thirty\n\nSpeaker 2: three, thirty four, thirty five, thirty six, thirty seven, thirty eight, thirty nine,\n\nSpeaker 3: forty four,\n\nSpeaker 0: and at thirty. And after and how did you know to only stop at thirty nine?\n\nSpeaker 2: two equals nine. So that's how I know.\n\nSpeaker 0: Oh, you did the ones place too. Good job. Alright. Well, who else wants to explain why? you listening.\n\nI'm gonna come back to you one more time. Are you ready for me? Go ahead and stand up over here. Oh, wait. Actually, you can wrap up over here.\n\nLet's stay up here. What is your name? in in, what is the solution to this problem? Thirty nine apples.\n\nSpeaker 2: Alright.\n\nSpeaker 0: Start over for me.\n\nSpeaker 3: I know the solutions. Alright.\n\nSpeaker 0: So, Ian, would you tell in your class how you know that it's thirty nine flowers?\n\nSpeaker 3: Thirty it's ninety nine flowers because two plus three equals ten be and two nine seven no. Well,\n\nSpeaker 0: you're looking at the problem again.\n\nSpeaker 3: Two plus seven equals nine.\n\nSpeaker 0: And\n\nSpeaker 3: Two minus oh, seven minus\n\nSpeaker 0: two. Just stick with me. I'm with you. We're good. So you said two plus seven equals nine So then how did you know that it was thirty nine, and not just ninety nine?\n\nSpeaker 2: They call\n\nSpeaker 3: it seven plus two weeks old. Right? So the first. So Should\n\nSpeaker 4: work. Anybody else wanna take you sick? Take a try at this. You wanna do that? Come on.\n\nWhat's your\n\nSpeaker 0: name? Calista. Alright. Let's listen to Calista. Kalista, what is the solution to this problem?\n\nthirty nine zebras. Tell your classmates what's the solution this follows? I\n\nSpeaker 2: have the solution that stays on my Oh,\n\nSpeaker 0: good. Closter, can you tell them how you came up with thirty nine flowers? Alright. Good. I like the way that you said, if I know this and I know that.\n\nI'd love good job. Ethan, what's that? Alright. Did stand up? Ethan, what is the solution to this problem?\n\nSpeaker 1: I know the solution is thirty nine flowers because I added because, like, First, I added the the two the two. Mhmm.\n\nSpeaker 0: I mean,\n\nSpeaker 1: I added the I added the the two to the seven, then I added the the thirty to the two. And then I found out it was thirty nine.\n\nSpeaker 0: Good. We're good. Why don't you explain yourself there? Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer. So the more that we can think about math, the better math we're gonna be.\n\nYou guys did an awesome job today. Okay. And you and you quiet and get up and go back to your team.",
    paragraphs: [
      {
        sentences: [
          { text: 'Yeah.', start: 1.1591797, end: 1.5996094 },
          {
            text: "We're gonna talk about numbers today.",
            start: 1.5996094,
            end: 3.8574219
          },
          { text: 'Right?', start: 3.9179688, end: 4.4179688 },
          {
            text: 'The more that we talk about math, the better we actually are at math.',
            start: 4.515625,
            end: 8.995
          },
          { text: 'Did you know that?', start: 9.515625, end: 10.515625 }
        ],
        speaker: 'teacher',
        num_words: 26,
        start: 1.1591797,
        end: 10.515625,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Yeah.', start: 10.515625, end: 10.875 },
          { text: 'Yeah.', start: 10.875, end: 10.9921875 },
          { text: 'Yeah.', start: 10.9921875, end: 11.3125 },
          {
            text: 'I know more than we talk about it, but better than our math.',
            start: 11.3125,
            end: 14.1875
          },
          {
            text: "So that's what we're gonna do today.",
            start: 14.1875,
            end: 15.8671875
          }
        ],
        speaker: 'teacher',
        num_words: 23,
        start: 10.515625,
        end: 15.8671875,
        bloom: [
          {
            Analyzing: 0.0017,
            Applying: 0.0001,
            Creating: 0.0008,
            Evaluating: 0.9972,
            None: 0.0001,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Right.', start: 15.8671875, end: 16.265625 },
          {
            text: "And so you're gonna be working with your partner And what I don't want you to do is today I don't want you to shout out any answers.",
            start: 16.265625,
            end: 22.953125
          },
          { text: 'Okay?', start: 23.125, end: 23.625 },
          {
            text: 'If you have an answer at your head, I want you to keep it in your head until I ask for it.',
            start: 24.015625,
            end: 29.171875
          },
          { text: 'Is that a good plan?', start: 29.171875, end: 30.25 }
        ],
        speaker: 'teacher',
        num_words: 57,
        start: 15.8671875,
        end: 30.25,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0,
            Creating: 0.0001,
            Evaluating: 0.9995,
            None: 0.0001,
            Remembering: 0.0001,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Yeah.', start: 30.25, end: 30.53125 },
          { text: 'Yeah.', start: 30.53125, end: 30.8125 }
        ],
        speaker: 'student',
        num_words: 2,
        start: 30.25,
        end: 30.8125,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'If I tell you you can talk to your partner about it, you can do that.',
            start: 30.8125,
            end: 33.73
          },
          {
            text: "but I don't want you to shout out any answer.",
            start: 33.90625,
            end: 36.21875
          },
          { text: 'Okay?', start: 36.40625, end: 36.90625 },
          {
            text: 'Good plan and make a thumbs up.',
            start: 37.03125,
            end: 39.25
          },
          { text: 'Cool.', start: 40.15625, end: 40.65625 }
        ],
        speaker: 'teacher',
        num_words: 35,
        start: 30.8125,
        end: 40.65625,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0001,
            Evaluating: 0.9998,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [{ text: 'Cool.', start: 42.78125, end: 43.28125 }],
        speaker: 'student',
        num_words: 1,
        start: 42.78125,
        end: 43.28125,
        bloom: [
          {
            Analyzing: 0.0534,
            Applying: 0.0046,
            Creating: 0.0043,
            Evaluating: 0.0459,
            None: 0.0117,
            Remembering: 0.0364,
            Understanding: 0.8437
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'Alright.', start: 43.65625, end: 44.125 },
          { text: 'Cool.', start: 44.125, end: 44.625 },
          { text: 'Alright.', start: 44.96875, end: 45.46875 },
          {
            text: "And one of the things that we're also going to do today is we're not only going to figure out the answer to some math problems, but we're going to explain why we know the answer to these problems.",
            start: 45.8125,
            end: 58.28125
          },
          {
            text: "So that's something the good mathematicians do.",
            start: 58.8125,
            end: 60.9375
          }
        ],
        speaker: 'teacher',
        num_words: 49,
        start: 43.65625,
        end: 60.9375,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "Somebody who's really good at math, not only knows the answer, but can explain why they know the answer.",
            start: 60.9375,
            end: 67.5625
          },
          {
            text: "And that's what we're gonna work on today.",
            start: 67.5625,
            end: 69.3125
          },
          { text: 'Cool.', start: 69.9375, end: 70.3125 },
          { text: 'Alright.', start: 70.3125, end: 70.75 },
          {
            text: 'So I got enough coffee here for you.',
            start: 70.75,
            end: 73.125
          }
        ],
        speaker: 'teacher',
        num_words: 37,
        start: 60.9375,
        end: 73.125,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Alright?', start: 73.3125, end: 73.75 },
          {
            text: "Remember there's no Shopee now?",
            start: 73.75,
            end: 75.375
          },
          { text: 'Right?', start: 75.75, end: 76.18499 },
          {
            text: "I don't want anybody to talk yet.",
            start: 76.25,
            end: 78.0
          },
          {
            text: 'I just want you to look at the math problem.',
            start: 78.0,
            end: 80.3125
          }
        ],
        speaker: 'teacher',
        num_words: 24,
        start: 73.3125,
        end: 80.3125,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0005,
            Creating: 0.1262,
            Evaluating: 0.8721,
            None: 0.0003,
            Remembering: 0.0006,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'And when you look at the math problem, I want you to go Okay.',
            start: 80.625,
            end: 83.5
          },
          { text: 'Can I figure it out?', start: 83.5, end: 84.25 },
          { text: 'Can I figure it out?', start: 84.25, end: 85.3125 },
          {
            text: 'I want you to be thinking about what strategy might I use to figure this problem out?',
            start: 85.3125,
            end: 90.24499
          },
          {
            text: 'until I need anything to help me figure it out?',
            start: 90.5625,
            end: 92.875
          }
        ],
        speaker: 'teacher',
        num_words: 51,
        start: 80.625,
        end: 92.875,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0003,
            Evaluating: 0.9991,
            None: 0.0002,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "because I don't want you to talk about it again.",
            start: 92.875,
            end: 94.875
          },
          { text: 'Okay.', start: 94.9375, end: 95.3125 },
          { text: 'So think about that.', start: 95.3125, end: 110.625 },
          { text: "Let's see.", start: 111.5625, end: 112.375 },
          {
            text: 'How would I solve this?',
            start: 112.4375,
            end: 114.125
          }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 92.875,
        end: 114.125,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0002,
            Creating: 0.006,
            Evaluating: 0.9935,
            None: 0.0001,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'Do I need anything to help me solve it?',
            start: 115.3125,
            end: 117.61999
          },
          {
            text: "I'm gonna give you and your partner ten seconds to talk about.",
            start: 127.5625,
            end: 131.5
          },
          { text: 'Okay.', start: 131.5, end: 132.0 },
          { text: 'Alright.', start: 132.0, end: 132.5 },
          { text: 'You are.', start: 132.5, end: 132.875 }
        ],
        speaker: 'teacher',
        num_words: 25,
        start: 115.3125,
        end: 132.875,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 1.0,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Just a sec.', start: 132.875, end: 133.25 },
          { text: 'Go.', start: 133.25, end: 133.75 },
          { text: 'Hi.', start: 134.0, end: 134.125 },
          {
            text: 'Talk to your partner about it.',
            start: 134.125,
            end: 135.5
          },
          {
            text: 'Talk to your fellow partner.',
            start: 135.5,
            end: 136.75
          }
        ],
        speaker: 'teacher',
        num_words: 16,
        start: 132.875,
        end: 136.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0001,
            Creating: 0.0002,
            Evaluating: 0.0006,
            None: 0.999,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'five four three two one.',
            start: 151.25,
            end: 155.25
          },
          { text: 'Okay.', start: 155.375, end: 155.875 },
          { text: 'I figure it out?', start: 156.625, end: 157.75 },
          { text: 'Yeah.', start: 157.75, end: 158.25 },
          { text: 'Alright.', start: 159.25, end: 159.75 }
        ],
        speaker: 'teacher',
        num_words: 12,
        start: 151.25,
        end: 159.75,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0002,
            Evaluating: 0.0001,
            None: 0.9993,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'Who thinks they know the solution to this problem?',
            start: 159.875,
            end: 163.75
          },
          {
            text: 'Who thinks they know the solution?',
            start: 164.25,
            end: 165.875
          },
          { text: 'Who thinks they know?', start: 166.375, end: 167.25 },
          {
            text: 'Young lady, what is your name?',
            start: 167.25,
            end: 168.875
          },
          { text: 'Kamory.', start: 168.875, end: 169.375 }
        ],
        speaker: 'teacher',
        num_words: 26,
        start: 159.875,
        end: 169.375,
        bloom: [
          {
            Analyzing: 0.2163,
            Applying: 0.0104,
            Creating: 0.562,
            Evaluating: 0.179,
            None: 0.0075,
            Remembering: 0.0233,
            Understanding: 0.0014
          },
          'Creating'
        ]
      },
      {
        sentences: [
          {
            text: 'Kamory, can you stand up for us, Kamory, please?',
            start: 169.625,
            end: 171.625
          },
          { text: 'Yep.', start: 171.625, end: 172.125 },
          {
            text: 'And can you tell us the solution to this come over here.',
            start: 172.25,
            end: 178.75
          },
          {
            text: 'What is the solution to this problem?',
            start: 179.125,
            end: 181.0
          },
          { text: 'Right.', start: 181.5, end: 182.0 }
        ],
        speaker: 'teacher',
        num_words: 30,
        start: 169.625,
        end: 182.0,
        bloom: [
          {
            Analyzing: 0.0089,
            Applying: 0.0014,
            Creating: 0.9742,
            Evaluating: 0.014,
            None: 0.0006,
            Remembering: 0.0003,
            Understanding: 0.0006
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Okay.', start: 182.375, end: 182.5625 },
          {
            text: 'So I want you to use the actual sentence here.',
            start: 182.5625,
            end: 185.375
          },
          { text: 'Okay.', start: 185.375, end: 185.875 },
          { text: 'Solution.', start: 186.0, end: 186.5 },
          {
            text: "That's kind of a difficult word.",
            start: 186.875,
            end: 188.375
          }
        ],
        speaker: 'teacher',
        num_words: 19,
        start: 182.375,
        end: 188.375,
        bloom: [
          {
            Analyzing: 0.0021,
            Applying: 0.0036,
            Creating: 0.0563,
            Evaluating: 0.7139,
            None: 0.0038,
            Remembering: 0.0016,
            Understanding: 0.2185
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'Listen to me as I say it one more time.',
            start: 188.375,
            end: 190.125
          },
          { text: 'Solution.', start: 190.125, end: 190.625 },
          {
            text: 'What is the what is the solution?',
            start: 193.625,
            end: 195.25
          },
          { text: "What's the other word?", start: 195.25, end: 196.0 },
          { text: 'What what does that mean?', start: 196.0, end: 197.0 }
        ],
        speaker: 'teacher',
        num_words: 27,
        start: 188.375,
        end: 197.0,
        bloom: [
          {
            Analyzing: 0.9627,
            Applying: 0.0002,
            Creating: 0.0002,
            Evaluating: 0.032,
            None: 0.0003,
            Remembering: 0.0001,
            Understanding: 0.0045
          },
          'Analyzing'
        ]
      },
      {
        sentences: [{ text: 'Yeah.', start: 197.0, end: 197.5 }],
        speaker: 'teacher',
        num_words: 1,
        start: 197.0,
        end: 197.5,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'It it means something back at That that can help you fix a problem.',
            start: 197.5,
            end: 205.5
          }
        ],
        speaker: 'student',
        num_words: 14,
        start: 197.5,
        end: 205.5,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0001,
            Creating: 0.9999,
            Evaluating: 0.0,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Creating'
        ]
      },
      {
        sentences: [
          {
            text: 'Oh, well, I like the way you made the connection between problem and solution.',
            start: 205.75,
            end: 209.125
          },
          {
            text: "That's absolutely correct.",
            start: 209.125,
            end: 210.125
          },
          {
            text: 'If this is our problem, the answer is the solution.',
            start: 210.125,
            end: 213.25
          },
          { text: 'Right?', start: 213.375, end: 213.875 },
          {
            text: 'So the answer is another way to say solution.',
            start: 214.0,
            end: 216.125
          }
        ],
        speaker: 'teacher',
        num_words: 37,
        start: 205.75,
        end: 216.125,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Right?', start: 216.25, end: 216.375 },
          { text: "So what's the word?", start: 216.375, end: 217.345 },
          { text: 'Alright.', start: 218.875, end: 219.375 },
          {
            text: 'So what is the solution to this problem?',
            start: 219.375,
            end: 223.0
          },
          { text: 'solution is five.', start: 224.625, end: 226.25 }
        ],
        speaker: 'teacher',
        num_words: 17,
        start: 216.25,
        end: 226.25,
        bloom: [
          {
            Analyzing: 0.0231,
            Applying: 0.0006,
            Creating: 0.0016,
            Evaluating: 0.751,
            None: 0.0011,
            Remembering: 0.0016,
            Understanding: 0.2209
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'You do.', start: 226.75, end: 227.5 },
          { text: 'Fine.', start: 227.625, end: 228.125 },
          {
            text: 'You know, how do you know that?',
            start: 228.375,
            end: 230.0
          },
          {
            text: 'How do you know that the solution to this problem is five?',
            start: 230.0,
            end: 232.965
          }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 226.75,
        end: 232.965,
        bloom: [
          {
            Analyzing: 0.0175,
            Applying: 0.0021,
            Creating: 0.2307,
            Evaluating: 0.746,
            None: 0.0003,
            Remembering: 0.0011,
            Understanding: 0.0023
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "Because it's four plus five equals nine.",
            start: 234.375,
            end: 237.25
          },
          {
            text: 'Twenty four plus five equals twenty nine.',
            start: 237.5,
            end: 240.375
          }
        ],
        speaker: 'student',
        num_words: 14,
        start: 234.375,
        end: 240.375,
        bloom: [
          {
            Analyzing: 0.0009,
            Applying: 0.0052,
            Creating: 0.0086,
            Evaluating: 0.0063,
            None: 0.5682,
            Remembering: 0.406,
            Understanding: 0.0046
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'Alright.', start: 240.5, end: 240.875 },
          {
            text: 'So I saw that you started with four and the five.',
            start: 240.875,
            end: 245.25
          },
          {
            text: 'You did with the ones place first and then you got the tens.',
            start: 245.25,
            end: 248.125
          },
          { text: 'Right?', start: 248.125, end: 248.625 },
          {
            text: 'How did you know how to do that?',
            start: 248.625,
            end: 249.935
          }
        ],
        speaker: 'teacher',
        num_words: 34,
        start: 240.5,
        end: 249.935,
        bloom: [
          {
            Analyzing: 0.6172,
            Applying: 0.0038,
            Creating: 0.0609,
            Evaluating: 0.0106,
            None: 0.0595,
            Remembering: 0.2373,
            Understanding: 0.0107
          },
          'Analyzing'
        ]
      },
      {
        sentences: [
          {
            text: 'because I teach it, I show this how to do it.',
            start: 251.0,
            end: 255.125
          },
          { text: 'Okay.', start: 255.25, end: 255.625 },
          { text: 'So yeah.', start: 255.625, end: 256.375 },
          {
            text: 'Let me go ahead and answer that.',
            start: 256.375,
            end: 258.0
          },
          { text: 'Alright.', start: 258.09, end: 258.29498 }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 251.0,
        end: 258.29498,
        bloom: [
          {
            Analyzing: 0.0037,
            Applying: 0.0003,
            Creating: 0.0026,
            Evaluating: 0.9924,
            None: 0.0002,
            Remembering: 0.0006,
            Understanding: 0.0002
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Go ahead.', start: 258.29498, end: 258.75 },
          { text: 'Bye bye.', start: 258.75, end: 259.375 },
          { text: 'Bye bye.', start: 259.375, end: 260.25 },
          { text: "But I'm not sure yet.", start: 260.25, end: 261.75 },
          {
            text: 'I need to see somebody else tell me if they know this was, you can say, Jessica.',
            start: 261.75,
            end: 265.495
          }
        ],
        speaker: 'teacher',
        num_words: 28,
        start: 258.29498,
        end: 265.495,
        bloom: [
          {
            Analyzing: 0.0065,
            Applying: 0.0016,
            Creating: 0.9888,
            Evaluating: 0.0021,
            None: 0.0003,
            Remembering: 0.0004,
            Understanding: 0.0003
          },
          'Creating'
        ]
      },
      {
        sentences: [
          {
            text: "Somebody else tell me the solution, young man, why don't you come on up here?",
            start: 265.75,
            end: 268.75
          },
          {
            text: 'Actually, you can stay right there.',
            start: 268.75,
            end: 270.25
          },
          { text: 'Stand up there.', start: 270.25, end: 271.0 },
          {
            text: 'Go ahead and stay on up right there.',
            start: 271.0,
            end: 272.66
          },
          { text: 'What is your name?', start: 273.0, end: 273.75 }
        ],
        speaker: 'teacher',
        num_words: 36,
        start: 265.75,
        end: 273.75,
        bloom: [
          {
            Analyzing: 0.0024,
            Applying: 0.0062,
            Creating: 0.5355,
            Evaluating: 0.2558,
            None: 0.1916,
            Remembering: 0.0018,
            Understanding: 0.0066
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Praveen.', start: 273.75, end: 274.25 },
          { text: 'Praveen?', start: 274.75, end: 275.25 },
          { text: 'Praveen.', start: 276.0, end: 276.5 },
          { text: 'Praveen.', start: 276.75, end: 277.25 },
          { text: 'Alright.', start: 277.5, end: 277.75 }
        ],
        speaker: 'teacher',
        num_words: 5,
        start: 273.75,
        end: 277.75,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'Praveen, can you tell me the solution to this problem?',
            start: 277.75,
            end: 280.5
          }
        ],
        speaker: 'teacher',
        num_words: 10,
        start: 277.75,
        end: 280.5,
        bloom: [
          {
            Analyzing: 0.0362,
            Applying: 0.012,
            Creating: 0.9504,
            Evaluating: 0.0004,
            None: 0.0002,
            Remembering: 0.0003,
            Understanding: 0.0004
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'This solution is five.', start: 282.0, end: 284.0 }
        ],
        speaker: 'student',
        num_words: 4,
        start: 282.0,
        end: 284.0,
        bloom: [
          {
            Analyzing: 0.1497,
            Applying: 0.018,
            Creating: 0.2227,
            Evaluating: 0.1813,
            None: 0.0127,
            Remembering: 0.3268,
            Understanding: 0.0889
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'Oh, okay.', start: 284.25, end: 285.0 },
          { text: 'Great.', start: 285.25, end: 285.5 },
          {
            text: 'You are in agreement with your cosmic.',
            start: 285.5,
            end: 287.25
          },
          {
            text: 'How do you know that the solution is five?',
            start: 287.5,
            end: 290.5
          },
          { text: 'I', start: 290.53, end: 290.75 }
        ],
        speaker: 'teacher',
        num_words: 20,
        start: 284.25,
        end: 290.75,
        bloom: [
          {
            Analyzing: 0.0026,
            Applying: 0.0003,
            Creating: 0.0005,
            Evaluating: 0.0531,
            None: 0.0013,
            Remembering: 0.0027,
            Understanding: 0.9396
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: "know that you're using a side because side I did.",
            start: 290.75,
            end: 295.0
          }
        ],
        speaker: 'student',
        num_words: 10,
        start: 290.75,
        end: 295.0,
        bloom: [
          {
            Analyzing: 0.0011,
            Applying: 0.0146,
            Creating: 0.7687,
            Evaluating: 0.0045,
            None: 0.1717,
            Remembering: 0.0367,
            Understanding: 0.0026
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Tell me what you added?', start: 295.5, end: 296.75 }
        ],
        speaker: 'teacher',
        num_words: 5,
        start: 295.5,
        end: 296.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.0001,
            None: 0.0,
            Remembering: 0.0002,
            Understanding: 0.9997
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'I added Right.', start: 297.75, end: 299.625 },
          { text: 'But how', start: 299.625, end: 300.25 }
        ],
        speaker: 'student',
        num_words: 5,
        start: 297.75,
        end: 300.25,
        bloom: [
          {
            Analyzing: 0.9022,
            Applying: 0.01,
            Creating: 0.0073,
            Evaluating: 0.009,
            None: 0.0088,
            Remembering: 0.0082,
            Understanding: 0.0545
          },
          'Analyzing'
        ]
      },
      {
        sentences: [
          { text: 'did you come to buy?', start: 300.25, end: 301.125 },
          {
            text: 'Did you start with buy or did you start with a different number?',
            start: 301.125,
            end: 303.5
          },
          {
            text: 'Tell me tell me how you figure that out.',
            start: 303.5,
            end: 305.75
          }
        ],
        speaker: 'teacher',
        num_words: 27,
        start: 300.25,
        end: 305.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0001,
            Evaluating: 0.9998,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'I am sorry with my twenty four.',
            start: 306.75,
            end: 309.25
          }
        ],
        speaker: 'student',
        num_words: 7,
        start: 306.75,
        end: 309.25,
        bloom: [
          {
            Analyzing: 0.001,
            Applying: 0.0009,
            Creating: 0.0095,
            Evaluating: 0.0012,
            None: 0.9749,
            Remembering: 0.0072,
            Understanding: 0.0053
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'Okay.', start: 309.5, end: 310.0 },
          {
            text: 'And then how did you how did you get to five?',
            start: 310.0,
            end: 312.75
          }
        ],
        speaker: 'teacher',
        num_words: 12,
        start: 309.5,
        end: 312.75,
        bloom: [
          {
            Analyzing: 0.0009,
            Applying: 0.0009,
            Creating: 0.0081,
            Evaluating: 0.0109,
            None: 0.0019,
            Remembering: 0.891,
            Understanding: 0.0863
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'I did some.', start: 313.75, end: 314.545 },
          { text: 'I', start: 315.0, end: 315.25 }
        ],
        speaker: 'student',
        num_words: 4,
        start: 313.75,
        end: 315.25,
        bloom: [
          {
            Analyzing: 0.0004,
            Applying: 0.001,
            Creating: 0.0011,
            Evaluating: 0.0027,
            None: 0.001,
            Remembering: 0.985,
            Understanding: 0.0087
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'could call it up.', start: 315.25, end: 316.75 },
          { text: "It's", start: 316.75, end: 317.25 }
        ],
        speaker: 'student',
        num_words: 5,
        start: 315.25,
        end: 317.25,
        bloom: [
          {
            Analyzing: 0.0034,
            Applying: 0.0115,
            Creating: 0.902,
            Evaluating: 0.0048,
            None: 0.0666,
            Remembering: 0.0028,
            Understanding: 0.0087
          },
          'Creating'
        ]
      },
      {
        sentences: [{ text: 'I', start: 319.5, end: 319.625 }],
        speaker: 'teacher',
        num_words: 1,
        start: 319.5,
        end: 319.625,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'I sat in twenty nine AM.',
            start: 319.625,
            end: 321.75
          },
          { text: 'I', start: 322.25, end: 322.475 }
        ],
        speaker: 'student',
        num_words: 7,
        start: 319.625,
        end: 322.475,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0003,
            Creating: 0.0009,
            Evaluating: 0.0005,
            None: 0.9973,
            Remembering: 0.0003,
            Understanding: 0.0004
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'am Alright.', start: 322.475, end: 325.75 },
          { text: "That's awesome.", start: 325.75, end: 326.5 },
          {
            text: 'I like the way you did that.',
            start: 326.5,
            end: 327.75
          },
          { text: 'Alright.', start: 327.75, end: 328.0 },
          {
            text: "There's two people that have the same solution.",
            start: 328.0,
            end: 330.0
          }
        ],
        speaker: 'teacher',
        num_words: 20,
        start: 322.475,
        end: 330.0,
        bloom: [
          {
            Analyzing: 0.9913,
            Applying: 0.0003,
            Creating: 0.0004,
            Evaluating: 0.0068,
            None: 0.0004,
            Remembering: 0.0002,
            Understanding: 0.0006
          },
          'Analyzing'
        ]
      },
      {
        sentences: [
          {
            text: 'Anybody else have the same solution?',
            start: 330.25,
            end: 332.5
          },
          {
            text: 'Or do you have the same solution?',
            start: 332.5,
            end: 333.5
          },
          {
            text: 'Or what is your name again?',
            start: 333.5,
            end: 334.75
          },
          { text: 'Wait.', start: 334.75, end: 334.875 },
          { text: 'Go ahead.', start: 334.875, end: 335.25 }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 330.25,
        end: 335.25,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9998,
            None: 0.0,
            Remembering: 0.0002,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'You can you can sit down.',
            start: 335.25,
            end: 336.25
          },
          { text: "What's your name?", start: 336.25, end: 337.21002 },
          {
            text: 'Jaselle, can you stand up for me?',
            start: 337.5,
            end: 339.5
          },
          {
            text: 'And what did you find as a solution to this problem?',
            start: 340.5,
            end: 343.5
          },
          {
            text: 'Go ahead and start with the sentence for me.',
            start: 345.09503,
            end: 347.75
          }
        ],
        speaker: 'teacher',
        num_words: 36,
        start: 335.25,
        end: 347.75,
        bloom: [
          {
            Analyzing: 0.0007,
            Applying: 0.0019,
            Creating: 0.872,
            Evaluating: 0.1227,
            None: 0.0018,
            Remembering: 0.0002,
            Understanding: 0.0006
          },
          'Creating'
        ]
      },
      {
        sentences: [{ text: 'For your I know.', start: 347.75, end: 349.25 }],
        speaker: 'teacher',
        num_words: 4,
        start: 347.75,
        end: 349.25,
        bloom: [
          {
            Analyzing: 0.0083,
            Applying: 0.0018,
            Creating: 0.0021,
            Evaluating: 0.0058,
            None: 0.0015,
            Remembering: 0.0667,
            Understanding: 0.9138
          },
          'Understanding'
        ]
      },
      {
        sentences: [{ text: 'that solution', start: 349.5, end: 350.25 }],
        speaker: 'student',
        num_words: 2,
        start: 349.5,
        end: 350.25,
        bloom: [
          {
            Analyzing: 0.0018,
            Applying: 0.0014,
            Creating: 0.9926,
            Evaluating: 0.0007,
            None: 0.0001,
            Remembering: 0.0016,
            Understanding: 0.0017
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'is five.', start: 350.75, end: 351.5 },
          {
            text: 'I know because Nine two three four equals five and four zero',
            start: 351.5,
            end: 360.75
          }
        ],
        speaker: 'student',
        num_words: 14,
        start: 350.75,
        end: 360.75,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0005,
            Creating: 0.0003,
            Evaluating: 0.0005,
            None: 0.0025,
            Remembering: 0.9956,
            Understanding: 0.0005
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'eight.', start: 360.75, end: 361.25 },
          { text: 'Whoa.', start: 364.5, end: 364.75 },
          {
            text: 'So you did are you telling me correct me if I wrong, did you use subtraction?',
            start: 364.75,
            end: 369.5
          },
          {
            text: 'to help you solve an additional problem?',
            start: 370.13004,
            end: 372.75
          },
          { text: 'No.', start: 372.75, end: 373.25 }
        ],
        speaker: 'teacher',
        num_words: 26,
        start: 360.75,
        end: 373.25,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0002,
            Creating: 0.999,
            Evaluating: 0.0006,
            None: 0.0,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'Creating'
        ]
      },
      {
        sentences: [
          {
            text: 'I need one more person to help me out here.',
            start: 376.25,
            end: 378.0
          },
          { text: 'One more person.', start: 378.0, end: 378.75 },
          { text: 'One more person.', start: 378.75, end: 379.25 },
          { text: 'You ready?', start: 379.25, end: 379.72504 },
          { text: 'What is your name?', start: 380.5, end: 381.25 }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 376.25,
        end: 381.25,
        bloom: [
          {
            Analyzing: 0.0039,
            Applying: 0.0015,
            Creating: 0.5897,
            Evaluating: 0.3117,
            None: 0.0886,
            Remembering: 0.0007,
            Understanding: 0.0039
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Rhianna.', start: 381.25, end: 381.75 },
          { text: 'Rhianna.', start: 382.5, end: 383.0 },
          { text: 'Okay.', start: 383.5, end: 383.75 },
          {
            text: 'Rhianna, what is your solution to this problem?',
            start: 383.75,
            end: 386.75
          }
        ],
        speaker: 'teacher',
        num_words: 11,
        start: 381.25,
        end: 386.75,
        bloom: [
          {
            Analyzing: 0.0214,
            Applying: 0.0209,
            Creating: 0.9236,
            Evaluating: 0.0311,
            None: 0.0004,
            Remembering: 0.002,
            Understanding: 0.0007
          },
          'Creating'
        ]
      },
      {
        sentences: [{ text: 'Five.', start: 387.5, end: 387.88004 }],
        speaker: 'student',
        num_words: 1,
        start: 387.5,
        end: 387.88004,
        bloom: [
          {
            Analyzing: 0.0028,
            Applying: 0.0063,
            Creating: 0.0408,
            Evaluating: 0.0044,
            None: 0.8666,
            Remembering: 0.0528,
            Understanding: 0.0262
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'k.', start: 388.25, end: 388.5 },
          {
            text: 'Use the sentence for me, please.',
            start: 388.5,
            end: 390.0
          }
        ],
        speaker: 'teacher',
        num_words: 7,
        start: 388.25,
        end: 390.0,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0017,
            Creating: 0.0007,
            Evaluating: 0.0002,
            None: 0.0001,
            Remembering: 0.0028,
            Understanding: 0.9944
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'I know the solution is five.',
            start: 390.5,
            end: 392.75
          }
        ],
        speaker: 'student',
        num_words: 6,
        start: 390.5,
        end: 392.75,
        bloom: [
          {
            Analyzing: 0.0315,
            Applying: 0.0085,
            Creating: 0.0043,
            Evaluating: 0.0331,
            None: 0.0014,
            Remembering: 0.68,
            Understanding: 0.2411
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          {
            text: 'And how do you know the solution is five?',
            start: 392.75,
            end: 395.13504
          }
        ],
        speaker: 'teacher',
        num_words: 9,
        start: 392.75,
        end: 395.13504,
        bloom: [
          {
            Analyzing: 0.0003,
            Applying: 0.0001,
            Creating: 0.0001,
            Evaluating: 0.0044,
            None: 0.0001,
            Remembering: 0.0002,
            Understanding: 0.9948
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'I know this because I', start: 396.0, end: 397.75 }
        ],
        speaker: 'student',
        num_words: 5,
        start: 396.0,
        end: 397.75,
        bloom: [
          {
            Analyzing: 0.283,
            Applying: 0.0506,
            Creating: 0.0102,
            Evaluating: 0.0234,
            None: 0.0023,
            Remembering: 0.5918,
            Understanding: 0.0388
          },
          'Remembering'
        ]
      },
      {
        sentences: [{ text: 'started', start: 398.75, end: 399.25 }],
        speaker: 'teacher',
        num_words: 1,
        start: 398.75,
        end: 399.25,
        bloom: [
          {
            Analyzing: 0.0151,
            Applying: 0.0198,
            Creating: 0.2431,
            Evaluating: 0.023,
            None: 0.0556,
            Remembering: 0.1201,
            Understanding: 0.5233
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'returning for my head and I transferred on',
            start: 399.25,
            end: 401.5
          }
        ],
        speaker: 'student',
        num_words: 8,
        start: 399.25,
        end: 401.5,
        bloom: [
          {
            Analyzing: 0.0007,
            Applying: 0.0016,
            Creating: 0.0186,
            Evaluating: 0.0009,
            None: 0.9726,
            Remembering: 0.0036,
            Understanding: 0.002
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'and my get to get to twenty nine.',
            start: 402.0,
            end: 403.75
          },
          { text: 'Oh,', start: 403.75, end: 404.0 }
        ],
        speaker: 'student',
        num_words: 9,
        start: 402.0,
        end: 404.0,
        bloom: [
          {
            Analyzing: 0.0021,
            Applying: 0.0019,
            Creating: 0.1604,
            Evaluating: 0.8172,
            None: 0.013,
            Remembering: 0.0035,
            Understanding: 0.0019
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'okay.', start: 404.0, end: 404.25 },
          { text: 'You counted your head.', start: 404.25, end: 405.0 },
          {
            text: 'Does that do we ever do that?',
            start: 405.0,
            end: 406.25
          },
          {
            text: 'You guys count your head.',
            start: 406.25,
            end: 407.08334
          },
          {
            text: 'Do you guys use something to help you count your head sometimes?',
            start: 407.08334,
            end: 409.75
          }
        ],
        speaker: 'teacher',
        num_words: 29,
        start: 404.0,
        end: 409.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0001,
            Creating: 0.0024,
            Evaluating: 0.9972,
            None: 0.0001,
            Remembering: 0.0001,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [{ text: 'Oh,', start: 410.24506, end: 410.74506 }],
        speaker: 'student',
        num_words: 1,
        start: 410.24506,
        end: 410.74506,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'you just use your head.', start: 410.75, end: 411.75 },
          {
            text: 'Does anybody ever use their fingers?',
            start: 411.75,
            end: 414.5
          },
          {
            text: 'Sometimes, Sometimes I do this.',
            start: 416.75,
            end: 418.375
          },
          { text: 'I go.', start: 418.375, end: 419.0 },
          { text: 'Thank you.', start: 420.75, end: 421.25 }
        ],
        speaker: 'teacher',
        num_words: 20,
        start: 410.75,
        end: 421.25,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'That way.', start: 421.25, end: 421.75 },
          { text: 'Alright?', start: 421.75, end: 422.25 },
          { text: 'Alright.', start: 422.25, end: 422.75 },
          { text: 'Good.', start: 422.75, end: 423.25 },
          { text: 'Thank thank you for that.', start: 423.25, end: 424.5 }
        ],
        speaker: 'teacher',
        num_words: 10,
        start: 421.25,
        end: 424.5,
        bloom: [
          {
            Analyzing: 0.0214,
            Applying: 0.0177,
            Creating: 0.8018,
            Evaluating: 0.0023,
            None: 0.0007,
            Remembering: 0.0022,
            Understanding: 0.154
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Alright.', start: 424.5, end: 425.0 },
          {
            text: 'guys are pretty good.',
            start: 425.08508,
            end: 425.875
          },
          {
            text: 'Your teacher said you were pretty good about.',
            start: 425.875,
            end: 427.625
          },
          {
            text: 'You guys ready for another one?',
            start: 427.625,
            end: 429.0
          },
          { text: 'Yay.', start: 429.0, end: 429.5 }
        ],
        speaker: 'teacher',
        num_words: 20,
        start: 424.5,
        end: 429.5,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9998,
            None: 0.0,
            Remembering: 0.0001,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'By the way, the guy is using the things that made okay.',
            start: 432.5,
            end: 435.5
          },
          {
            text: "You don't have to say, I don't use my fingers.",
            start: 435.5,
            end: 437.25
          },
          { text: "You don't need to say.", start: 437.25, end: 438.5 }
        ],
        speaker: 'student',
        num_words: 27,
        start: 432.5,
        end: 438.5,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0,
            Creating: 0.0001,
            Evaluating: 0.9996,
            None: 0.0,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "I'm a I'm a mathematician and sometimes I use my fingers.",
            start: 439.25,
            end: 441.75
          },
          {
            text: 'A good mathematician knows would what kind of tools can help them solve math and fingers is one of the things that you can do.',
            start: 441.75,
            end: 449.5
          },
          {
            text: 'But sometimes when I get over ten, they run around ten.',
            start: 449.5,
            end: 452.25
          },
          { text: 'Alright, guys.', start: 454.5, end: 455.0 },
          { text: 'Ready?', start: 455.0, end: 455.5 }
        ],
        speaker: 'teacher',
        num_words: 50,
        start: 439.25,
        end: 455.5,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0001,
            Evaluating: 0.0001,
            None: 0.9996,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'Okay.', start: 457.0, end: 457.5 },
          { text: 'Same rules apply.', start: 458.0, end: 459.75 },
          {
            text: "We're not gonna shy of an answer.",
            start: 460.25,
            end: 462.0
          },
          {
            text: 'No need to raise your hands yet.',
            start: 462.26508,
            end: 463.75
          },
          {
            text: 'I want you to think about this is a little bit different problem.',
            start: 463.75,
            end: 466.5
          }
        ],
        speaker: 'teacher',
        num_words: 31,
        start: 457.0,
        end: 466.5,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 1.0,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'This is a story problem or a word problem.',
            start: 466.5,
            end: 469.5
          },
          { text: 'Mhmm.', start: 469.5, end: 470.0 },
          { text: 'Okay?', start: 470.5, end: 471.0 },
          {
            text: "So you're gonna have to read it with me.",
            start: 471.0,
            end: 473.5
          },
          { text: 'Think about what you know.', start: 473.5, end: 475.0 }
        ],
        speaker: 'teacher',
        num_words: 25,
        start: 466.5,
        end: 475.0,
        bloom: [
          {
            Analyzing: 0.0574,
            Applying: 0.0105,
            Creating: 0.1051,
            Evaluating: 0.0476,
            None: 0.768,
            Remembering: 0.0058,
            Understanding: 0.0056
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: "Think about what you don't know.",
            start: 475.5,
            end: 476.75
          },
          {
            text: "And there's some words in here that are gonna tell you what type of math problem this is.",
            start: 476.75,
            end: 482.0
          },
          {
            text: 'So I want you to be thinking about that.',
            start: 482.0,
            end: 483.875
          },
          {
            text: "And then I want you to be thinking about how you're gonna solve how what what the solution is and how you're gonna solve it.",
            start: 483.875,
            end: 490.5
          },
          { text: 'Are you writing?', start: 490.5, end: 491.0 }
        ],
        speaker: 'teacher',
        num_words: 61,
        start: 475.5,
        end: 491.0,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0,
            Creating: 0.0001,
            Evaluating: 0.9994,
            None: 0.0001,
            Remembering: 0.0002,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Bless you.', start: 491.0, end: 493.5 },
          { text: 'Bless', start: 493.5, end: 493.75 }
        ],
        speaker: 'teacher',
        num_words: 3,
        start: 491.0,
        end: 493.75,
        bloom: [
          {
            Analyzing: 0.0138,
            Applying: 0.0027,
            Creating: 0.0041,
            Evaluating: 0.0391,
            None: 0.0036,
            Remembering: 0.1324,
            Understanding: 0.8044
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'you.', start: 493.75, end: 494.25 },
          { text: 'There', start: 495.25, end: 495.5 }
        ],
        speaker: 'student',
        num_words: 2,
        start: 493.75,
        end: 495.5,
        bloom: [
          {
            Analyzing: 0.025,
            Applying: 0.004,
            Creating: 0.0107,
            Evaluating: 0.5269,
            None: 0.017,
            Remembering: 0.2385,
            Understanding: 0.1779
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'are thirty two pink flowers.',
            start: 495.5,
            end: 498.75
          },
          {
            text: 'There are seven white flowers.',
            start: 499.5,
            end: 502.25
          },
          {
            text: 'How many flowers in all?',
            start: 502.75,
            end: 504.75
          },
          { text: 'think about it.', start: 504.8701, end: 506.75 },
          { text: 'Why do you know?', start: 507.5, end: 508.5 }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 495.5,
        end: 508.5,
        bloom: [
          {
            Analyzing: 0.002,
            Applying: 0.0002,
            Creating: 0.0019,
            Evaluating: 0.0011,
            None: 0.9937,
            Remembering: 0.0006,
            Understanding: 0.0005
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'What do you need to know?',
            start: 508.75,
            end: 510.25
          },
          {
            text: 'What type of problem is it?',
            start: 510.75,
            end: 512.75
          },
          {
            text: 'And do you know what the solution is?',
            start: 513.0,
            end: 515.5
          },
          { text: 'But your hands down.', start: 515.875, end: 518.0 },
          {
            text: "If you think you know if you haven't answered, give me a thumb to the chin.",
            start: 521.1801,
            end: 527.5
          }
        ],
        speaker: 'teacher',
        num_words: 40,
        start: 508.75,
        end: 527.5,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 1.0,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "If you're still working on it, Give me a thing your your point of finger to your chin.",
            start: 527.5,
            end: 533.0
          },
          { text: 'I know the answer.', start: 533.5, end: 534.5 },
          { text: "I'm still working on it.", start: 535.0, end: 536.75 },
          { text: 'I know the answer.', start: 538.0, end: 539.0 },
          { text: "I'm still working on it.", start: 539.5, end: 541.0 }
        ],
        speaker: 'teacher',
        num_words: 36,
        start: 527.5,
        end: 541.0,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'Do the answer?', start: 544.75, end: 546.0 },
          { text: 'Still working on.', start: 546.00507, end: 547.5 },
          {
            text: 'Hey, good mathematicians.',
            start: 554.07007,
            end: 557.0
          },
          {
            text: 'Think about math before they even do it.',
            start: 557.0,
            end: 559.5
          },
          {
            text: 'Are you ready to talk to your partner about it?',
            start: 559.5,
            end: 562.25507
          }
        ],
        speaker: 'teacher',
        num_words: 27,
        start: 544.75,
        end: 562.25507,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 1.0,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'ten seconds, doctor', start: 562.25507, end: 565.0 }
        ],
        speaker: 'teacher',
        num_words: 3,
        start: 562.25507,
        end: 565.0,
        bloom: [
          {
            Analyzing: 0.0014,
            Applying: 0.0035,
            Creating: 0.9515,
            Evaluating: 0.003,
            None: 0.0187,
            Remembering: 0.0086,
            Understanding: 0.0134
          },
          'Creating'
        ]
      },
      {
        sentences: [{ text: 'Pagerto know.', start: 565.0, end: 566.0 }],
        speaker: 'student',
        num_words: 2,
        start: 565.0,
        end: 566.0,
        bloom: [
          {
            Analyzing: 0.0196,
            Applying: 0.0028,
            Creating: 0.0021,
            Evaluating: 0.0109,
            None: 0.0018,
            Remembering: 0.8495,
            Understanding: 0.1133
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'four.', start: 578.62506, end: 579.12506 },
          { text: 'Two.', start: 581.0, end: 581.5 },
          { text: 'One.', start: 582.5, end: 583.0 },
          { text: 'Alright.', start: 583.0, end: 583.5 },
          {
            text: 'Did you and your partner agreed on what the solution was.',
            start: 584.0,
            end: 588.0
          }
        ],
        speaker: 'teacher',
        num_words: 15,
        start: 578.62506,
        end: 588.0,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0001,
            Creating: 0.0007,
            Evaluating: 0.0003,
            None: 0.9986,
            Remembering: 0.0001,
            Understanding: 0.0001
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'No.', start: 588.0, end: 588.5 },
          {
            text: "I'm gonna need some people to tell me what the solution is, and I'll solved.",
            start: 589.5,
            end: 595.0525
          },
          {
            text: "We're gonna start with this young man right here.",
            start: 595.0525,
            end: 598.25
          },
          { text: 'What is your name?', start: 598.25, end: 599.0 },
          {
            text: "He didn't stand up for me.",
            start: 599.0,
            end: 601.68005
          }
        ],
        speaker: 'teacher',
        num_words: 35,
        start: 588.0,
        end: 601.68005,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "Oh, he's got a Star Wars shirt on.",
            start: 602.0,
            end: 604.0
          },
          { text: 'Come on.', start: 604.5, end: 605.5 },
          { text: 'And you know what?', start: 606.0, end: 607.0 },
          {
            text: 'I want you to tell the class What is the solution to this problem?',
            start: 607.0,
            end: 612.0
          }
        ],
        speaker: 'teacher',
        num_words: 28,
        start: 602.0,
        end: 612.0,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0003,
            Evaluating: 0.0002,
            None: 0.9992,
            Remembering: 0.0,
            Understanding: 0.0001
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'I think the solution is that we we can use the hygiene chart',
            start: 614.5,
            end: 622.5
          }
        ],
        speaker: 'student',
        num_words: 13,
        start: 614.5,
        end: 622.5,
        bloom: [
          {
            Analyzing: 0.0004,
            Applying: 0.0008,
            Creating: 0.0024,
            Evaluating: 0.996,
            None: 0.0001,
            Remembering: 0.0002,
            Understanding: 0.0003
          },
          'Evaluating'
        ]
      },
      {
        sentences: [{ text: 'and', start: 623.5, end: 624.0 }],
        speaker: 'teacher',
        num_words: 1,
        start: 623.5,
        end: 624.0,
        bloom: [
          {
            Analyzing: 0.0328,
            Applying: 0.0055,
            Creating: 0.0078,
            Evaluating: 0.0442,
            None: 0.0186,
            Remembering: 0.0155,
            Understanding: 0.8756
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'and and go down as many as we need to go down.',
            start: 626.0,
            end: 629.75
          },
          {
            text: 'And if we go and if we need to go to the right any week, we go to',
            start: 629.75,
            end: 636.75
          }
        ],
        speaker: 'student',
        num_words: 30,
        start: 626.0,
        end: 636.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0003,
            Evaluating: 0.9995,
            None: 0.0001,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [{ text: 'the', start: 636.75, end: 637.0 }],
        speaker: 'teacher',
        num_words: 1,
        start: 636.75,
        end: 637.0,
        bloom: [
          {
            Analyzing: 0.0884,
            Applying: 0.0765,
            Creating: 0.0641,
            Evaluating: 0.0316,
            None: 0.0263,
            Remembering: 0.1392,
            Understanding: 0.574
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'right and then we can get the problem.',
            start: 637.0,
            end: 640.5
          },
          { text: 'Alright.', start: 641.0, end: 641.25 }
        ],
        speaker: 'student',
        num_words: 9,
        start: 637.0,
        end: 641.25,
        bloom: [
          {
            Analyzing: 0.3027,
            Applying: 0.3141,
            Creating: 0.0213,
            Evaluating: 0.2338,
            None: 0.12,
            Remembering: 0.0027,
            Understanding: 0.0053
          },
          'Applying'
        ]
      },
      {
        sentences: [
          {
            text: "So I like the fact that you're thinking about the hundreds chart.",
            start: 641.25,
            end: 645.0
          },
          {
            text: 'Did you determine what the solution is here?',
            start: 645.155,
            end: 647.5
          },
          {
            text: 'So the question was, how many flowers involved?',
            start: 647.5,
            end: 651.5
          },
          {
            text: 'Did could you tell me how many flowers there were?',
            start: 652.17004,
            end: 654.1667
          },
          {
            text: 'There were thirty two pink flowers and seven white flowers.',
            start: 654.1667,
            end: 658.5
          }
        ],
        speaker: 'teacher',
        num_words: 48,
        start: 641.25,
        end: 658.5,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'How many flowers in all, Dayton?',
            start: 658.5,
            end: 660.5
          },
          { text: 'Did you?', start: 660.5, end: 661.34503 },
          {
            text: 'Did you come to a solution?',
            start: 661.34503,
            end: 663.0
          },
          {
            text: "Here's what I want you to do.",
            start: 668.9,
            end: 672.5
          },
          { text: 'Hey, Eton.', start: 672.5, end: 673.5 }
        ],
        speaker: 'teacher',
        num_words: 23,
        start: 658.5,
        end: 673.5,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0002,
            Creating: 0.9964,
            Evaluating: 0.0025,
            None: 0.0001,
            Remembering: 0.0005,
            Understanding: 0.0001
          },
          'Creating'
        ]
      },
      {
        sentences: [
          {
            text: 'Go ahead and sit down for me.',
            start: 673.5,
            end: 675.25
          },
          {
            text: "I'm gonna ask a couple of your buddies if they have a solution and I want you to listen to what their solution is and then how they came up with it and then I'm gonna come back to you.",
            start: 675.25,
            end: 684.0
          },
          { text: 'Okay?', start: 684.0, end: 684.5 },
          { text: 'Is that cool?', start: 684.5, end: 685.125 },
          {
            text: 'How about we go to your partner?',
            start: 685.125,
            end: 686.75
          }
        ],
        speaker: 'teacher',
        num_words: 58,
        start: 673.5,
        end: 686.75,
        bloom: [
          {
            Analyzing: 0.0012,
            Applying: 0.0003,
            Creating: 0.0009,
            Evaluating: 0.9948,
            None: 0.0017,
            Remembering: 0.0006,
            Understanding: 0.0005
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: "What's your name?", start: 687.0, end: 687.5 },
          { text: 'Mhmm.', start: 687.5, end: 688.0 },
          { text: 'Mhmm.', start: 688.0, end: 688.5 },
          { text: 'Mhmm.', start: 689.0, end: 689.5 },
          {
            text: 'Go ahead and set up for me.',
            start: 689.5,
            end: 691.0
          }
        ],
        speaker: 'teacher',
        num_words: 13,
        start: 687.0,
        end: 691.0,
        bloom: [
          {
            Analyzing: 0.0009,
            Applying: 0.0011,
            Creating: 0.0043,
            Evaluating: 0.0011,
            None: 0.0117,
            Remembering: 0.8982,
            Understanding: 0.0826
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          {
            text: 'Do you know the solution to this problem?',
            start: 691.0,
            end: 693.5
          },
          {
            text: 'What is the solution to this problem?',
            start: 693.5,
            end: 696.0
          },
          { text: 'Well, yes.', start: 696.755, end: 698.0 }
        ],
        speaker: 'teacher',
        num_words: 17,
        start: 691.0,
        end: 698.0,
        bloom: [
          {
            Analyzing: 0.0154,
            Applying: 0.0043,
            Creating: 0.673,
            Evaluating: 0.3051,
            None: 0.0007,
            Remembering: 0.0008,
            Understanding: 0.0008
          },
          'Creating'
        ]
      },
      {
        sentences: [{ text: 'Thirty nine.', start: 699.5, end: 700.0 }],
        speaker: 'student',
        num_words: 2,
        start: 699.5,
        end: 700.0,
        bloom: [
          {
            Analyzing: 0.0016,
            Applying: 0.0047,
            Creating: 0.0204,
            Evaluating: 0.0045,
            None: 0.9001,
            Remembering: 0.0519,
            Understanding: 0.0169
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'Okay.', start: 700.0, end: 700.25 },
          {
            text: 'So go ahead and use the whole sentence for',
            start: 700.25,
            end: 702.5
          }
        ],
        speaker: 'teacher',
        num_words: 10,
        start: 700.0,
        end: 702.5,
        bloom: [
          {
            Analyzing: 0.0007,
            Applying: 0.0046,
            Creating: 0.0048,
            Evaluating: 0.9848,
            None: 0.0018,
            Remembering: 0.0027,
            Understanding: 0.0006
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'me.', start: 702.5, end: 702.6667 },
          {
            text: 'I know the reservation is thirty nine.',
            start: 702.6667,
            end: 705.0
          }
        ],
        speaker: 'student',
        num_words: 8,
        start: 702.5,
        end: 705.0,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0001,
            Creating: 0.0001,
            Evaluating: 0.0003,
            None: 0.0001,
            Remembering: 0.9919,
            Understanding: 0.0075
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'Thirty nine apples?', start: 705.0, end: 706.2 },
          { text: 'Thirty nine what?', start: 707.5, end: 708.5 },
          { text: 'Fenway.', start: 708.5, end: 709.0 },
          { text: 'Alright.', start: 709.5, end: 709.75 },
          {
            text: "Flowers, because that's in something the good mathematicians do.",
            start: 709.75,
            end: 712.25
          }
        ],
        speaker: 'teacher',
        num_words: 17,
        start: 705.0,
        end: 712.25,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0001,
            Creating: 0.0005,
            Evaluating: 0.0016,
            None: 0.0025,
            Remembering: 0.9937,
            Understanding: 0.0013
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          {
            text: 'They always, especially in word problems, We have to know how many what the number represents.',
            start: 712.25,
            end: 719.0
          },
          {
            text: 'So say the whole thing for me.',
            start: 719.0,
            end: 720.5
          }
        ],
        speaker: 'teacher',
        num_words: 23,
        start: 712.25,
        end: 720.5,
        bloom: [
          {
            Analyzing: 0.207,
            Applying: 0.035,
            Creating: 0.0014,
            Evaluating: 0.7457,
            None: 0.0016,
            Remembering: 0.0013,
            Understanding: 0.0079
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'I know this solution is thirty',
            start: 720.5,
            end: 723.25
          }
        ],
        speaker: 'student',
        num_words: 6,
        start: 720.5,
        end: 723.25,
        bloom: [
          {
            Analyzing: 0.1254,
            Applying: 0.0224,
            Creating: 0.0524,
            Evaluating: 0.1388,
            None: 0.0026,
            Remembering: 0.2578,
            Understanding: 0.4007
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'nine.', start: 723.25, end: 723.75 },
          { text: 'No worries.', start: 727.0, end: 727.5 },
          { text: 'Flowers.', start: 727.5, end: 728.0 },
          { text: 'Alright.', start: 728.0, end: 728.25 },
          { text: 'One more time altogether.', start: 728.25, end: 729.5 }
        ],
        speaker: 'teacher',
        num_words: 9,
        start: 723.25,
        end: 729.5,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0003,
            Creating: 0.0053,
            Evaluating: 0.0008,
            None: 0.9923,
            Remembering: 0.0009,
            Understanding: 0.0003
          },
          'None'
        ]
      },
      {
        sentences: [{ text: 'I', start: 729.5, end: 730.0 }],
        speaker: 'teacher',
        num_words: 1,
        start: 729.5,
        end: 730.0,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'know the solution is thirty nine now.',
            start: 730.0,
            end: 732.075
          },
          { text: 'awesome', start: 732.075, end: 732.575 }
        ],
        speaker: 'student',
        num_words: 8,
        start: 730.0,
        end: 732.575,
        bloom: [
          {
            Analyzing: 0.0003,
            Applying: 0.0002,
            Creating: 0.0002,
            Evaluating: 0.0006,
            None: 0.0001,
            Remembering: 0.9952,
            Understanding: 0.0034
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'job.', start: 733.0, end: 733.25 },
          {
            text: 'But how do you know that?',
            start: 733.25,
            end: 735.5
          },
          {
            text: "How do you know that it's thirty nine flocks?",
            start: 735.5,
            end: 737.5
          },
          {
            text: 'Tell your classmates because they wanna know.',
            start: 738.0,
            end: 740.25
          },
          {
            text: 'What did you do to figure it out?',
            start: 741.07,
            end: 743.5
          }
        ],
        speaker: 'teacher',
        num_words: 31,
        start: 733.0,
        end: 743.5,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0003,
            Evaluating: 0.9992,
            None: 0.0,
            Remembering: 0.0003,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: 'I counted on a duck.', start: 744.0, end: 745.5 },
          { text: 'You counted,', start: 746.5, end: 747.0 }
        ],
        speaker: 'student',
        num_words: 7,
        start: 744.0,
        end: 747.0,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.0,
            None: 0.9999,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'so what did you use?', start: 747.0, end: 747.8333 },
          {
            text: 'In your head, your fingers, and your toes, or your elbows, How did you count to help you solve the solution?',
            start: 747.8333,
            end: 753.5
          },
          { text: 'Mhmm.', start: 753.5, end: 754.0 },
          { text: 'Okay.', start: 756.5, end: 756.75 },
          {
            text: 'So one so can you do that?',
            start: 756.75,
            end: 758.1667
          }
        ],
        speaker: 'teacher',
        num_words: 35,
        start: 747.0,
        end: 758.1667,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [{ text: 'So can you do', start: 758.1667, end: 759.25 }],
        speaker: 'teacher',
        num_words: 4,
        start: 758.1667,
        end: 759.25,
        bloom: [
          {
            Analyzing: 0.0457,
            Applying: 0.0064,
            Creating: 0.0653,
            Evaluating: 0.3668,
            None: 0.0348,
            Remembering: 0.0546,
            Understanding: 0.4264
          },
          'Understanding'
        ]
      },
      {
        sentences: [{ text: 'that?', start: 759.25, end: 759.75 }],
        speaker: 'student',
        num_words: 1,
        start: 759.25,
        end: 759.75,
        bloom: [
          {
            Analyzing: 0.0312,
            Applying: 0.026,
            Creating: 0.6389,
            Evaluating: 0.0117,
            None: 0.0117,
            Remembering: 0.1926,
            Understanding: 0.0879
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Yeah.', start: 761.0, end: 761.25 },
          { text: "Let's listen to her.", start: 761.25, end: 762.1 },
          {
            text: 'I want I want you guys to to listen to how she solved the problem.',
            start: 762.1,
            end: 766.0
          }
        ],
        speaker: 'teacher',
        num_words: 20,
        start: 761.0,
        end: 766.0,
        bloom: [
          {
            Analyzing: 0.0017,
            Applying: 0.0018,
            Creating: 0.6866,
            Evaluating: 0.3081,
            None: 0.0009,
            Remembering: 0.0003,
            Understanding: 0.0004
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'Ninety two.', start: 766.5, end: 767.5 },
          { text: 'thirty', start: 767.57495, end: 768.0 }
        ],
        speaker: 'student',
        num_words: 3,
        start: 766.5,
        end: 768.0,
        bloom: [
          {
            Analyzing: 0.0033,
            Applying: 0.0024,
            Creating: 0.0063,
            Evaluating: 0.0019,
            None: 0.9685,
            Remembering: 0.0045,
            Understanding: 0.0132
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'three, thirty four, thirty five, thirty six, thirty seven, thirty eight, thirty nine,',
            start: 768.0,
            end: 775.0
          }
        ],
        speaker: 'student',
        num_words: 13,
        start: 768.0,
        end: 775.0,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0003,
            Evaluating: 0.0001,
            None: 0.9991,
            Remembering: 0.0002,
            Understanding: 0.0001
          },
          'None'
        ]
      },
      {
        sentences: [{ text: 'forty four,', start: 775.0, end: 777.5 }],
        speaker: 'student',
        num_words: 2,
        start: 775.0,
        end: 777.5,
        bloom: [
          {
            Analyzing: 0.0034,
            Applying: 0.0073,
            Creating: 0.051,
            Evaluating: 0.0058,
            None: 0.8302,
            Remembering: 0.0722,
            Understanding: 0.0301
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'and at thirty.', start: 777.52997, end: 778.5 },
          {
            text: 'And after and how did you know to only stop at thirty nine?',
            start: 778.5,
            end: 782.5
          }
        ],
        speaker: 'teacher',
        num_words: 16,
        start: 777.52997,
        end: 782.5,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0034,
            Creating: 0.0039,
            Evaluating: 0.0032,
            None: 0.9774,
            Remembering: 0.0082,
            Understanding: 0.0037
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'two equals nine.', start: 788.0, end: 788.75 },
          { text: "So that's how I know.", start: 788.75, end: 790.0 }
        ],
        speaker: 'student',
        num_words: 8,
        start: 788.0,
        end: 790.0,
        bloom: [
          {
            Analyzing: 0.1461,
            Applying: 0.0043,
            Creating: 0.0053,
            Evaluating: 0.0383,
            None: 0.7427,
            Remembering: 0.0504,
            Understanding: 0.013
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: 'Oh, you did the ones place too.',
            start: 790.0,
            end: 792.25
          },
          { text: 'Good job.', start: 792.25, end: 793.0 },
          { text: 'Alright.', start: 793.5, end: 793.6667 },
          {
            text: 'Well, who else wants to explain why?',
            start: 793.6667,
            end: 795.33997
          },
          { text: 'you listening.', start: 795.33997, end: 795.8333 }
        ],
        speaker: 'teacher',
        num_words: 19,
        start: 790.0,
        end: 795.8333,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9998,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: "I'm gonna come back to you one more time.",
            start: 795.8333,
            end: 797.375
          },
          {
            text: 'Are you ready for me?',
            start: 797.375,
            end: 798.3333
          },
          {
            text: 'Go ahead and stand up over here.',
            start: 798.3333,
            end: 800.0
          },
          { text: 'Oh, wait.', start: 800.0, end: 800.6667 },
          {
            text: 'Actually, you can wrap up over here.',
            start: 800.6667,
            end: 801.8333
          }
        ],
        speaker: 'teacher',
        num_words: 30,
        start: 795.8333,
        end: 801.8333,
        bloom: [
          {
            Analyzing: 0.0006,
            Applying: 0.0054,
            Creating: 0.0676,
            Evaluating: 0.8248,
            None: 0.0999,
            Remembering: 0.001,
            Understanding: 0.0008
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          { text: "Let's stay up here.", start: 801.8333, end: 802.5 },
          { text: 'What is your name?', start: 802.5, end: 803.345 },
          {
            text: 'in in, what is the solution to this problem?',
            start: 804.0,
            end: 807.25
          },
          { text: 'Thirty nine apples.', start: 811.5, end: 813.5 }
        ],
        speaker: 'teacher',
        num_words: 20,
        start: 801.8333,
        end: 813.5,
        bloom: [
          {
            Analyzing: 0.0004,
            Applying: 0.0001,
            Creating: 0.0003,
            Evaluating: 0.007,
            None: 0.0004,
            Remembering: 0.0012,
            Understanding: 0.9906
          },
          'Understanding'
        ]
      },
      {
        sentences: [{ text: 'Alright.', start: 814.5, end: 814.75 }],
        speaker: 'student',
        num_words: 1,
        start: 814.5,
        end: 814.75,
        bloom: [
          {
            Analyzing: 0.0073,
            Applying: 0.0059,
            Creating: 0.0115,
            Evaluating: 0.0172,
            None: 0.0093,
            Remembering: 0.0276,
            Understanding: 0.9212
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'Start over for me.', start: 814.75, end: 815.875 }
        ],
        speaker: 'teacher',
        num_words: 4,
        start: 814.75,
        end: 815.875,
        bloom: [
          {
            Analyzing: 0.004,
            Applying: 0.0087,
            Creating: 0.03,
            Evaluating: 0.1212,
            None: 0.1265,
            Remembering: 0.5873,
            Understanding: 0.1222
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'I know the solutions.', start: 815.875, end: 817.5 },
          { text: 'Alright.', start: 819.14496, end: 819.64496 }
        ],
        speaker: 'student',
        num_words: 5,
        start: 815.875,
        end: 819.64496,
        bloom: [
          {
            Analyzing: 0.0142,
            Applying: 0.0063,
            Creating: 0.0044,
            Evaluating: 0.0047,
            None: 0.0003,
            Remembering: 0.0702,
            Understanding: 0.9
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: "So, Ian, would you tell in your class how you know that it's thirty nine flowers?",
            start: 820.0,
            end: 825.0
          }
        ],
        speaker: 'teacher',
        num_words: 16,
        start: 820.0,
        end: 825.0,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0001,
            Creating: 0.0001,
            Evaluating: 0.0005,
            None: 0.0,
            Remembering: 0.0002,
            Understanding: 0.999
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: "Thirty it's ninety nine flowers because two plus three equals ten be and two nine seven no.",
            start: 827.0,
            end: 837.5
          },
          { text: 'Well,', start: 837.5, end: 838.0 }
        ],
        speaker: 'student',
        num_words: 18,
        start: 827.0,
        end: 838.0,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0002,
            Creating: 0.0004,
            Evaluating: 0.0002,
            None: 0.9984,
            Remembering: 0.0006,
            Understanding: 0.0002
          },
          'None'
        ]
      },
      {
        sentences: [
          {
            text: "you're looking at the problem again.",
            start: 838.0,
            end: 839.5
          }
        ],
        speaker: 'teacher',
        num_words: 6,
        start: 838.0,
        end: 839.5,
        bloom: [
          {
            Analyzing: 0.0838,
            Applying: 0.5607,
            Creating: 0.026,
            Evaluating: 0.0869,
            None: 0.1034,
            Remembering: 0.0782,
            Understanding: 0.061
          },
          'Applying'
        ]
      },
      {
        sentences: [
          {
            text: 'Two plus seven equals nine.',
            start: 840.0,
            end: 842.0
          }
        ],
        speaker: 'student',
        num_words: 5,
        start: 840.0,
        end: 842.0,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0003,
            Creating: 0.0006,
            Evaluating: 0.0003,
            None: 0.997,
            Remembering: 0.0012,
            Understanding: 0.0004
          },
          'None'
        ]
      },
      {
        sentences: [{ text: 'And', start: 842.0, end: 842.5 }],
        speaker: 'teacher',
        num_words: 1,
        start: 842.0,
        end: 842.5,
        bloom: [
          {
            Analyzing: 0.0328,
            Applying: 0.0055,
            Creating: 0.0078,
            Evaluating: 0.0442,
            None: 0.0186,
            Remembering: 0.0155,
            Understanding: 0.8756
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'Two minus oh, seven minus', start: 845.5, end: 850.0 }
        ],
        speaker: 'student',
        num_words: 5,
        start: 845.5,
        end: 850.0,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0002,
            Creating: 0.0006,
            Evaluating: 0.0002,
            None: 0.9978,
            Remembering: 0.0005,
            Understanding: 0.0005
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'two.', start: 850.0, end: 850.5 },
          { text: 'Just stick with me.', start: 855.5, end: 856.6667 },
          { text: "I'm with you.", start: 856.6667, end: 857.25 },
          { text: "We're good.", start: 857.25, end: 857.6667 },
          {
            text: 'So you said two plus seven equals nine So then how did you know that it was thirty nine, and not just ninety nine?',
            start: 857.6667,
            end: 864.0
          }
        ],
        speaker: 'teacher',
        num_words: 34,
        start: 850.0,
        end: 864.0,
        bloom: [
          {
            Analyzing: 0.9945,
            Applying: 0.0004,
            Creating: 0.0002,
            Evaluating: 0.0004,
            None: 0.0038,
            Remembering: 0.0002,
            Understanding: 0.0005
          },
          'Analyzing'
        ]
      },
      {
        sentences: [{ text: 'They call', start: 866.0, end: 867.0 }],
        speaker: 'student',
        num_words: 2,
        start: 866.0,
        end: 867.0,
        bloom: [
          {
            Analyzing: 0.0226,
            Applying: 0.0439,
            Creating: 0.0762,
            Evaluating: 0.0689,
            None: 0.1802,
            Remembering: 0.098,
            Understanding: 0.5103
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'it seven plus two weeks old.',
            start: 868.0,
            end: 871.5
          },
          { text: 'Right?', start: 871.5, end: 872.0 },
          { text: 'So the first.', start: 872.0, end: 873.5 },
          { text: 'So Should', start: 873.5, end: 876.5 }
        ],
        speaker: 'student',
        num_words: 12,
        start: 868.0,
        end: 876.5,
        bloom: [
          {
            Analyzing: 0.0001,
            Applying: 0.0003,
            Creating: 0.0045,
            Evaluating: 0.0005,
            None: 0.9939,
            Remembering: 0.0004,
            Understanding: 0.0002
          },
          'None'
        ]
      },
      {
        sentences: [
          { text: 'work.', start: 877.5, end: 877.75 },
          {
            text: 'Anybody else wanna take you sick?',
            start: 877.75,
            end: 879.1099
          },
          { text: 'Take a try at this.', start: 879.1099, end: 879.8333 },
          { text: 'You wanna do that?', start: 879.8333, end: 880.5 },
          { text: 'Come on.', start: 880.5, end: 881.25 }
        ],
        speaker: 'student',
        num_words: 18,
        start: 877.5,
        end: 881.25,
        bloom: [
          {
            Analyzing: 0.0002,
            Applying: 0.0008,
            Creating: 0.982,
            Evaluating: 0.0156,
            None: 0.0011,
            Remembering: 0.0001,
            Understanding: 0.0002
          },
          'Creating'
        ]
      },
      {
        sentences: [{ text: "What's your", start: 881.25, end: 882.0 }],
        speaker: 'student',
        num_words: 2,
        start: 881.25,
        end: 882.0,
        bloom: [
          {
            Analyzing: 0.0009,
            Applying: 0.0002,
            Creating: 0.0002,
            Evaluating: 0.001,
            None: 0.0001,
            Remembering: 0.0051,
            Understanding: 0.9924
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          { text: 'name?', start: 882.0, end: 882.5 },
          { text: 'Calista.', start: 883.0, end: 883.5 },
          { text: 'Alright.', start: 884.0, end: 884.25 },
          {
            text: "Let's listen to Calista.",
            start: 884.25,
            end: 885.75
          },
          {
            text: 'Kalista, what is the solution to this problem?',
            start: 886.12494,
            end: 890.25
          }
        ],
        speaker: 'teacher',
        num_words: 15,
        start: 882.0,
        end: 890.25,
        bloom: [
          {
            Analyzing: 0.0046,
            Applying: 0.0018,
            Creating: 0.9929,
            Evaluating: 0.0003,
            None: 0.0001,
            Remembering: 0.0002,
            Understanding: 0.0002
          },
          'Creating'
        ]
      },
      {
        sentences: [
          { text: 'thirty nine zebras.', start: 894.57996, end: 896.0 },
          {
            text: "Tell your classmates what's the solution this follows?",
            start: 898.0,
            end: 900.5
          },
          { text: 'I', start: 900.5, end: 900.6667 }
        ],
        speaker: 'teacher',
        num_words: 12,
        start: 894.57996,
        end: 900.6667,
        bloom: [
          {
            Analyzing: 0.8989,
            Applying: 0.0717,
            Creating: 0.0057,
            Evaluating: 0.0045,
            None: 0.0025,
            Remembering: 0.0093,
            Understanding: 0.0073
          },
          'Analyzing'
        ]
      },
      {
        sentences: [
          {
            text: 'have the solution that stays on my Oh,',
            start: 900.6667,
            end: 903.32495
          }
        ],
        speaker: 'student',
        num_words: 8,
        start: 900.6667,
        end: 903.32495,
        bloom: [
          {
            Analyzing: 0.0435,
            Applying: 0.052,
            Creating: 0.0884,
            Evaluating: 0.0765,
            None: 0.0038,
            Remembering: 0.7307,
            Understanding: 0.0051
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'good.', start: 903.5, end: 904.0 },
          {
            text: 'Closter, can you tell them how you came up with thirty nine flowers?',
            start: 904.0,
            end: 907.5
          },
          { text: 'Alright.', start: 909.92993, end: 910.42993 },
          { text: 'Good.', start: 915.0, end: 915.1667 },
          {
            text: 'I like the way that you said, if I know this and I know that.',
            start: 915.1667,
            end: 917.625
          }
        ],
        speaker: 'teacher',
        num_words: 31,
        start: 903.5,
        end: 917.625,
        bloom: [
          {
            Analyzing: 0.9999,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.0,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Analyzing'
        ]
      },
      {
        sentences: [
          { text: "I'd love good job.", start: 917.625, end: 918.7149 },
          { text: "Ethan, what's that?", start: 919.0, end: 920.0 },
          { text: 'Alright.', start: 920.0, end: 920.25 },
          { text: 'Did stand up?', start: 920.25, end: 922.0 },
          {
            text: 'Ethan, what is the solution to this problem?',
            start: 923.0,
            end: 926.0
          }
        ],
        speaker: 'teacher',
        num_words: 19,
        start: 917.625,
        end: 926.0,
        bloom: [
          {
            Analyzing: 0.0037,
            Applying: 0.0013,
            Creating: 0.9841,
            Evaluating: 0.01,
            None: 0.0004,
            Remembering: 0.0003,
            Understanding: 0.0003
          },
          'Creating'
        ]
      },
      {
        sentences: [
          {
            text: 'I know the solution is thirty nine flowers because I added because, like, First, I added the the two the two.',
            start: 927.5,
            end: 940.5
          },
          { text: 'Mhmm.', start: 940.5, end: 941.0 }
        ],
        speaker: 'student',
        num_words: 22,
        start: 927.5,
        end: 941.0,
        bloom: [
          {
            Analyzing: 0.0027,
            Applying: 0.0122,
            Creating: 0.0023,
            Evaluating: 0.0031,
            None: 0.0002,
            Remembering: 0.9697,
            Understanding: 0.0098
          },
          'Remembering'
        ]
      },
      {
        sentences: [{ text: 'I mean,', start: 941.0, end: 941.5 }],
        speaker: 'teacher',
        num_words: 2,
        start: 941.0,
        end: 941.5,
        bloom: [
          {
            Analyzing: 0.013,
            Applying: 0.0192,
            Creating: 0.0554,
            Evaluating: 0.0485,
            None: 0.0078,
            Remembering: 0.1085,
            Understanding: 0.7476
          },
          'Understanding'
        ]
      },
      {
        sentences: [
          {
            text: 'I added the I added the the two to the seven, then I added the the thirty to the two.',
            start: 941.5,
            end: 950.5
          },
          {
            text: 'And then I found out it was thirty nine.',
            start: 950.5,
            end: 952.95496
          }
        ],
        speaker: 'student',
        num_words: 29,
        start: 941.5,
        end: 952.95496,
        bloom: [
          {
            Analyzing: 0.0003,
            Applying: 0.007,
            Creating: 0.0004,
            Evaluating: 0.0001,
            None: 0.0004,
            Remembering: 0.9867,
            Understanding: 0.0051
          },
          'Remembering'
        ]
      },
      {
        sentences: [
          { text: 'Good.', start: 953.0, end: 953.25 },
          { text: "We're good.", start: 953.25, end: 954.0 },
          {
            text: "Why don't you explain yourself there?",
            start: 954.0,
            end: 956.0
          },
          {
            text: "Sometimes sometimes mathematicians, we know what an answer is, but it's hard for us to explain how we know the answer.",
            start: 956.0,
            end: 963.5
          },
          {
            text: "So the more that we can think about math, the better math we're gonna be.",
            start: 963.5,
            end: 966.75
          }
        ],
        speaker: 'teacher',
        num_words: 45,
        start: 953.0,
        end: 966.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0,
            Creating: 0.0,
            Evaluating: 0.9999,
            None: 0.0,
            Remembering: 0.0,
            Understanding: 0.0
          },
          'Evaluating'
        ]
      },
      {
        sentences: [
          {
            text: 'You guys did an awesome job today.',
            start: 966.75,
            end: 968.5
          },
          { text: 'Okay.', start: 968.5, end: 969.0 },
          {
            text: 'And you and you quiet and get up and go back to your team.',
            start: 969.415,
            end: 973.0
          }
        ],
        speaker: 'teacher',
        num_words: 22,
        start: 966.75,
        end: 966.75,
        bloom: [
          {
            Analyzing: 0.0,
            Applying: 0.0005,
            Creating: 0.0009,
            Evaluating: 0.9957,
            None: 0.002,
            Remembering: 0.0008,
            Understanding: 0.0001
          },
          'Evaluating'
        ]
      }
    ]
  },
  lda: [],
  meta: {
    audio: {
      channels: 2,
      sample_width: 2,
      frame_rate: 44100,
      frame_width: 4,
      frame_count: 43066368.0,
      duration_seconds: 976.5616326530612,
      type: 'mp3'
    },
    process_time: {
      speech: 13.535598516464233,
      emotion: 62.30722522735596,
      blooms: 67.84856033325195,
      lda: 0
    }
  },
  wordcloud: [
    { text: 'yeah', value: 10 },
    { text: 'gon', value: 16 },
    { text: 'na', value: 19 },
    { text: 'talk', value: 10 },
    { text: 'numbers', value: 1 },
    { text: 'today', value: 6 },
    { text: 'right', value: 14 },
    { text: 'math', value: 12 },
    { text: 'better', value: 3 },
    { text: 'actually', value: 3 },
    { text: 'know', value: 47 },
    { text: 'working', value: 5 },
    { text: 'partner', value: 8 },
    { text: 'want', value: 18 },
    { text: 'shout', value: 2 },
    { text: 'answers', value: 1 },
    { text: 'okay', value: 20 },
    { text: 'answer', value: 15 },
    { text: 'head', value: 8 },
    { text: 'keep', value: 1 },
    { text: 'ask', value: 2 },
    { text: 'good', value: 17 },
    { text: 'plan', value: 2 },
    { text: 'tell', value: 16 },
    { text: 'make', value: 1 },
    { text: 'thumbs', value: 1 },
    { text: 'cool', value: 5 },
    { text: 'alright', value: 26 },
    { text: 'one', value: 12 },
    { text: 'things', value: 3 },
    { text: 'also', value: 1 },
    { text: 'going', value: 3 },
    { text: 'figure', value: 8 },
    { text: 'problems', value: 3 },
    { text: 'explain', value: 5 },
    { text: 'something', value: 4 },
    { text: 'mathematicians', value: 4 },
    { text: 'somebody', value: 3 },
    { text: 'really', value: 1 },
    { text: 'knows', value: 2 },
    { text: 'work', value: 2 },
    { text: 'got', value: 3 },
    { text: 'enough', value: 1 },
    { text: 'coffee', value: 1 },
    { text: 'remember', value: 1 },
    { text: 'shopee', value: 1 },
    { text: 'anybody', value: 4 },
    { text: 'yet', value: 3 },
    { text: 'look', value: 2 },
    { text: 'problem', value: 28 },
    { text: 'go', value: 19 },
    { text: 'thinking', value: 4 },
    { text: 'strategy', value: 1 },
    { text: 'might', value: 1 },
    { text: 'use', value: 12 },
    { text: 'need', value: 10 },
    { text: 'anything', value: 2 },
    { text: 'help', value: 8 },
    { text: 'think', value: 9 },
    { text: 'let', value: 5 },
    { text: 'see', value: 2 },
    { text: 'would', value: 3 },
    { text: 'solve', value: 7 },
    { text: 'give', value: 3 },
    { text: 'ten', value: 5 },
    { text: 'seconds', value: 2 },
    { text: 'sec', value: 1 },
    { text: 'hi', value: 1 },
    { text: 'fellow', value: 1 },
    { text: 'five', value: 8 },
    { text: 'four', value: 10 },
    { text: 'three', value: 4 },
    { text: 'two', value: 19 },
    { text: 'thinks', value: 3 },
    { text: 'solution', value: 46 },
    { text: 'young', value: 3 },
    { text: 'lady', value: 1 },
    { text: 'name', value: 9 },
    { text: 'kamory', value: 3 },
    { text: 'stand', value: 6 },
    { text: 'us', value: 3 },
    { text: 'please', value: 2 },
    { text: 'yep', value: 1 },
    { text: 'come', value: 8 },
    { text: 'actual', value: 1 },
    { text: 'sentence', value: 4 },
    { text: 'kind', value: 2 },
    { text: 'difficult', value: 1 },
    { text: 'word', value: 5 },
    { text: 'listen', value: 5 },
    { text: 'say', value: 6 },
    { text: 'time', value: 3 },
    { text: 'mean', value: 2 },
    { text: 'means', value: 1 },
    { text: 'back', value: 4 },
    { text: 'fix', value: 1 },
    { text: 'oh', value: 9 },
    { text: 'well', value: 4 },
    { text: 'like', value: 5 },
    { text: 'way', value: 6 },
    { text: 'made', value: 2 },
    { text: 'connection', value: 1 },
    { text: 'absolutely', value: 1 },
    { text: 'correct', value: 2 },
    { text: 'another', value: 2 },
    { text: 'five', value: 8 },
    { text: 'plus', value: 6 },
    { text: 'equals', value: 7 },
    { text: 'nine', value: 27 },
    { text: 'twenty', value: 5 },
    { text: 'saw', value: 1 },
    { text: 'started', value: 2 },
    { text: 'ones', value: 2 },
    { text: 'place', value: 2 },
    { text: 'first', value: 3 },
    { text: 'tens', value: 1 },
    { text: 'teach', value: 1 },
    { text: 'show', value: 1 },
    { text: 'ahead', value: 9 },
    { text: 'bye', value: 4 },
    { text: 'sure', value: 1 },
    { text: 'else', value: 5 },
    { text: 'jessica', value: 1 },
    { text: 'man', value: 2 },
    { text: 'stay', value: 3 },
    { text: 'praveen', value: 5 },
    { text: 'great', value: 1 },
    { text: 'agreement', value: 1 },
    { text: 'cosmic', value: 1 },
    { text: 'using', value: 2 },
    { text: 'side', value: 2 },
    { text: 'added', value: 7 },
    { text: 'buy', value: 2 },
    { text: 'start', value: 5 },
    { text: 'different', value: 2 },
    { text: 'number', value: 2 },
    { text: 'sorry', value: 1 },
    { text: 'get', value: 6 },
    { text: 'could', value: 2 },
    { text: 'call', value: 2 },
    { text: 'sat', value: 1 },
    { text: 'awesome', value: 3 },
    { text: 'people', value: 2 },
    { text: 'wait', value: 2 },
    { text: 'sit', value: 2 },
    { text: 'jaselle', value: 1 },
    { text: 'find', value: 1 },
    { text: 'zero', value: 1 },
    { text: 'eight', value: 2 },
    { text: 'whoa', value: 1 },
    { text: 'telling', value: 1 },
    { text: 'wrong', value: 1 },
    { text: 'subtraction', value: 1 },
    { text: 'additional', value: 1 },
    { text: 'person', value: 3 },
    { text: 'ready', value: 5 },
    { text: 'rhianna', value: 3 },
    { text: 'returning', value: 1 },
    { text: 'transferred', value: 1 },
    { text: 'counted', value: 3 },
    { text: 'ever', value: 2 },
    { text: 'guys', value: 7 },
    { text: 'count', value: 3 },
    { text: 'sometimes', value: 7 },
    { text: 'fingers', value: 5 },
    { text: 'thank', value: 3 },
    { text: 'pretty', value: 2 },
    { text: 'teacher', value: 1 },
    { text: 'said', value: 3 },
    { text: 'yay', value: 1 },
    { text: 'guy', value: 1 },
    { text: 'mathematician', value: 2 },
    { text: 'tools', value: 1 },
    { text: 'run', value: 1 },
    { text: 'around', value: 1 },
    { text: 'rules', value: 1 },
    { text: 'apply', value: 1 },
    { text: 'shy', value: 1 },
    { text: 'raise', value: 1 },
    { text: 'hands', value: 2 },
    { text: 'little', value: 1 },
    { text: 'bit', value: 1 },
    { text: 'story', value: 1 },
    { text: 'mhmm', value: 6 },
    { text: 'read', value: 1 },
    { text: 'words', value: 1 },
    { text: 'type', value: 2 },
    { text: 'writing', value: 1 },
    { text: 'bless', value: 2 },
    { text: 'thirty', value: 27 },
    { text: 'pink', value: 2 },
    { text: 'flowers', value: 14 },
    { text: 'seven', value: 9 },
    { text: 'white', value: 2 },
    { text: 'many', value: 6 },
    { text: 'answered', value: 1 },
    { text: 'thumb', value: 1 },
    { text: 'chin', value: 2 },
    { text: 'still', value: 4 },
    { text: 'thing', value: 2 },
    { text: 'point', value: 1 },
    { text: 'finger', value: 1 },
    { text: 'hey', value: 2 },
    { text: 'even', value: 1 },
    { text: 'doctor', value: 1 },
    { text: 'pagerto', value: 1 },
    { text: 'agreed', value: 1 },
    { text: 'solved', value: 2 },
    { text: 'star', value: 1 },
    { text: 'wars', value: 1 },
    { text: 'shirt', value: 1 },
    { text: 'class', value: 2 },
    { text: 'hygiene', value: 1 },
    { text: 'chart', value: 2 },
    { text: 'week', value: 1 },
    { text: 'fact', value: 1 },
    { text: 'hundreds', value: 1 },
    { text: 'determine', value: 1 },
    { text: 'question', value: 1 },
    { text: 'involved', value: 1 },
    { text: 'dayton', value: 1 },
    { text: 'eton', value: 1 },
    { text: 'couple', value: 1 },
    { text: 'buddies', value: 1 },
    { text: 'came', value: 2 },
    { text: 'set', value: 1 },
    { text: 'yes', value: 1 },
    { text: 'whole', value: 2 },
    { text: 'reservation', value: 1 },
    { text: 'apples', value: 2 },
    { text: 'fenway', value: 1 },
    { text: 'always', value: 1 },
    { text: 'especially', value: 1 },
    { text: 'represents', value: 1 },
    { text: 'worries', value: 1 },
    { text: 'altogether', value: 1 },
    { text: 'job', value: 4 },
    { text: 'flocks', value: 1 },
    { text: 'classmates', value: 2 },
    { text: 'wan', value: 3 },
    { text: 'duck', value: 1 },
    { text: 'toes', value: 1 },
    { text: 'elbows', value: 1 },
    { text: 'ninety', value: 3 },
    { text: 'six', value: 1 },
    { text: 'forty', value: 1 },
    { text: 'stop', value: 1 },
    { text: 'wants', value: 1 },
    { text: 'listening', value: 1 },
    { text: 'wrap', value: 1 },
    { text: 'solutions', value: 1 },
    { text: 'ian', value: 1 },
    { text: 'looking', value: 1 },
    { text: 'minus', value: 2 },
    { text: 'stick', value: 1 },
    { text: 'weeks', value: 1 },
    { text: 'old', value: 1 },
    { text: 'take', value: 2 },
    { text: 'sick', value: 1 },
    { text: 'try', value: 1 },
    { text: 'calista', value: 2 },
    { text: 'kalista', value: 1 },
    { text: 'zebras', value: 1 },
    { text: 'follows', value: 1 },
    { text: 'stays', value: 1 },
    { text: 'closter', value: 1 },
    { text: 'love', value: 1 },
    { text: 'ethan', value: 2 },
    { text: 'found', value: 1 },
    { text: 'hard', value: 1 },
    { text: 'quiet', value: 1 },
    { text: 'team', value: 1 }
  ],
  blooms_meta: {
    ml: {
      talk_time: {
        speaker: {
          teacher: 586.3533534,
          student: 61.14576000000005,
          speaker: 160.58326000000005
        },
        question: {
          teacher: 219.1742412,
          student: 4.02660000000003,
          both: 11.521640000000048
        }
      },
      blooms: {
        total: {
          Remembering: 68,
          Evaluating: 54,
          Understanding: 78,
          Analyzing: 31,
          None: 48,
          Creating: 34,
          Applying: 2
        },
        speaker: {
          teacher: {
            Remembering: 49,
            Evaluating: 46,
            Understanding: 68,
            Analyzing: 29,
            None: 32,
            Creating: 27,
            Applying: 2
          },
          student: {
            Remembering: 7,
            Evaluating: 3,
            Understanding: 4,
            Analyzing: 1,
            None: 11,
            Creating: 0,
            Applying: 0
          },
          both: {
            Remembering: 12,
            Evaluating: 5,
            Understanding: 6,
            Analyzing: 1,
            None: 5,
            Creating: 7,
            Applying: 0
          }
        },
        question: {
          Evaluating: 16,
          Remembering: 30,
          None: 5,
          Creating: 17,
          Analyzing: 15,
          Applying: 1,
          Understanding: 22
        }
      },
      interactions: {
        speaker: { teacher: 253, student: 26, both: 36 },
        switches: {
          count: 78,
          data: [
            'teacher',
            'teacher-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-both',
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
            'both-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-both',
            'both-student',
            'student-both',
            'both-student',
            'student-both',
            'both-student',
            'student-both',
            'both-teacher',
            'teacher-both',
            'both-student',
            'student-both',
            'both-student',
            'student-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-student',
            'student-teacher'
          ]
        }
      },
      questions: { teacher: 98, student: 3, both: 5 }
    },
    custom: {
      talk_time: {
        speaker: {
          teacher: 586.3533534,
          student: 61.14576000000005,
          both: 160.58326000000005
        },
        question: {
          teacher: 219.1742412,
          student: 4.02660000000003,
          both: 11.521640000000048
        }
      },
      blooms: {
        total: {
          None: 149,
          Applying: 38,
          Remembering: 70,
          Understanding: 3,
          Creating: 54,
          Evaluating: 1
        },
        speaker: {
          teacher: {
            None: 114,
            Applying: 25,
            Remembering: 64,
            Understanding: 3,
            Creating: 46,
            Evaluating: 1
          },
          student: {
            None: 16,
            Applying: 5,
            Remembering: 2,
            Understanding: 0,
            Creating: 3,
            Evaluating: 0
          },
          both: {
            None: 19,
            Applying: 8,
            Remembering: 4,
            Understanding: 0,
            Creating: 5,
            Evaluating: 0
          }
        },
        question: {
          Applying: 11,
          None: 22,
          Understanding: 1,
          Creating: 28,
          Remembering: 44
        }
      },
      interactions: {
        speaker: { teacher: 253, student: 26, both: 36 },
        switches: {
          count: 78,
          data: [
            'teacher',
            'teacher-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-both',
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
            'both-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-student',
            'student-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-teacher',
            'teacher-student',
            'student-teacher',
            'teacher-both',
            'both-student',
            'student-both',
            'both-student',
            'student-both',
            'both-student',
            'student-both',
            'both-teacher',
            'teacher-both',
            'both-student',
            'student-both',
            'both-student',
            'student-both',
            'both-teacher',
            'teacher-both',
            'both-teacher',
            'teacher-student',
            'student-both',
            'both-student',
            'student-teacher'
          ]
        }
      },
      questions: { teacher: 98, student: 3, both: 5 }
    }
  }
};

export default data;
