module.exports = [
  {
    "name": "GFS",
    "res": 111,
    "minFrameSize": 180,
    "viewLinks": [
      "http://wxcharts.eu/",
      "http://www.meteociel.fr/modeles/gfse_cartes.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 3,
          "minute": 30
        },
        "duration": 90,
        "limit": 384
      },
      {
        "label": "06Z",
        "start": {
          "hour": 9,
          "minute": 30
        },
        "duration": 90,
        "limit": 384
      },
      {
        "label": "12Z",
        "start": {
          "hour": 15,
          "minute": 30
        },
        "duration": 90,
        "limit": 384
      },
      {
        "label": "18Z",
        "start": {
          "hour": 21,
          "minute": 30
        },
        "duration": 90,
        "limit": 384
      }
    ]
  },
  {
    "name": "GFS",
    "res": 28,
    "minFrameSize": 180,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/gfs/royaume-uni/precipitations/3h.htm",
      "https://www.netweather.tv/charts-and-data/gfs"
    ],
    "runs": [
      {
        "start": {
          "hour": 3,
          "minute": 30
        },
        "duration": 90,
        "limit": 240
      },
      {
        "start": {
          "hour": 9,
          "minute": 30
        },
        "duration": 90,
        "limit": 240
      },
      {
        "start": {
          "hour": 15,
          "minute": 30
        },
        "duration": 90,
        "limit": 240
      },
      {
        "start": {
          "hour": 21,
          "minute": 30
        },
        "duration": 90,
        "limit": 240
      }
    ]
  },
  {
    "name": "ECM",
    "res": 56,
    "minFrameSize": 180,
    "viewLinks": [
      "https://meteologix.com/model-charts/euro"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 6,
          "minute": 0
        },
        "duration": 10,
        "limit": 240
      },
      {
        "label": "12Z",
        "start": {
          "hour": 18,
          "minute": 0
        },
        "duration": 10,
        "limit": 240
      }
    ]
  },
  {
    "name": "UKMO",
    "res": 278,
    "minFrameSize": 24,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/ukmo2.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 4,
          "minute": 10
        },
        "duration": 30,
        "limit": 144
      },
      {
        "label": "12Z",
        "start": {
          "hour": 16,
          "minute": 10
        },
        "duration": 30,
        "limit": 144
      }
    ]
  },
  {
    "name": "ICON-EU",
    "res": 7,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/icon-eu.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 0,
          "minute": 0
        },
        "duration": 60,
        "limit": 120
      },
      {
        "label": "03Z",
        "start": {
          "hour": 3,
          "minute": 0
        },
        "duration": 60,
        "limit": 30
      },
      {
        "label": "06Z",
        "start": {
          "hour": 6,
          "minute": 0
        },
        "duration": 60,
        "limit": 120
      },
      {
        "label": "09Z",
        "start": {
          "hour": 9,
          "minute": 0
        },
        "duration": 60,
        "limit": 30
      },
      {
        "label": "12Z",
        "start": {
          "hour": 12,
          "minute": 0
        },
        "duration": 60,
        "limit": 120
      },
      {
        "label": "15Z",
        "start": {
          "hour": 15,
          "minute": 0
        },
        "duration": 60,
        "limit": 30
      },
      {
        "label": "18Z",
        "start": {
          "hour": 18,
          "minute": 0
        },
        "duration": 60,
        "limit": 120
      },
      {
        "label": "21Z",
        "start": {
          "hour": 21,
          "minute": 0
        },
        "duration": 60,
        "limit": 30
      }
    ]
  },
  {
    "name": "EURO4",
    "res": 12,
    "minFrameSize": 3,
    "viewLinks": [
      "https://www.weatheronline.co.uk/cgi-bin/expertcharts?LANG=en&CONT=ukuk&MODELL=euro4&MODELLTYP=1&VAR=pslv&INFO=1&"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 0,
          "minute": 0
        },
        "duration": 10,
        "limit": 48
      },
      {
        "label": "06Z",
        "start": {
          "hour": 5,
          "minute": 0
        },
        "duration": 10,
        "limit": 48
      },
      {
        "label": "12Z",
        "start": {
          "hour": 11,
          "minute": 0
        },
        "duration": 10,
        "limit": 48
      },
      {
        "label": "18Z",
        "start": {
          "hour": 17,
          "minute": 0
        },
        "duration": 10,
        "limit": 48
      }
    ]
  },
  {
    "name": "WRF-NMM",
    "res": 11,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/wrfnmm.php?map=20"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 4,
          "minute": 10
        },
        "duration": 90,
        "limit": 120
      },
      {
        "label": "06Z",
        "start": {
          "hour": 10,
          "minute": 30
        },
        "duration": 90,
        "limit": 120
      },
      {
        "label": "12Z",
        "start": {
          "hour": 16,
          "minute": 10
        },
        "duration": 90,
        "limit": 120
      },
      {
        "label": "18Z",
        "start": {
          "hour": 22,
          "minute": 10
        },
        "duration": 90,
        "limit": 120
      }
    ]
  },
  {
    "name": "WRF-NMM",
    "res": 5,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/wrfnmm.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 4,
          "minute": 10
        },
        "duration": 45,
        "limit": 72
      },
      {
        "label": "06Z",
        "start": {
          "hour": 10,
          "minute": 10
        },
        "duration": 45,
        "limit": 72
      },
      {
        "label": "12Z",
        "start": {
          "hour": 16,
          "minute": 10
        },
        "duration": 45,
        "limit": 72
      },
      {
        "label": "18Z",
        "start": {
          "hour": 22,
          "minute": 10
        },
        "duration": 45,
        "limit": 72
      }
    ]
  },
  {
    "name": "WRF-NMM",
    "res": 2,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/wrfnmm.php?map=300"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 5,
          "minute": 0
        },
        "duration": 90,
        "limit": 30
      },
      {
        "label": "06Z",
        "start": {
          "hour": 11,
          "minute": 0
        },
        "duration": 90,
        "limit": 30
      },
      {
        "label": "12Z",
        "start": {
          "hour": 17,
          "minute": 0
        },
        "duration": 90,
        "limit": 30
      },
      {
        "label": "18Z",
        "start": {
          "hour": 23,
          "minute": 10
        },
        "duration": 90,
        "limit": 30
      }
    ]
  },
  {
    "name": "ARPEGE",
    "res": 56,
    "minFrameSize": 3,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/arpegee_cartes.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 4,
          "minute": 0
        },
        "duration": 90,
        "limit": 102
      },
      {
        "label": "06Z",
        "start": {
          "hour": 10,
          "minute": 0
        },
        "duration": 90,
        "limit": 72
      },
      {
        "label": "12Z",
        "start": {
          "hour": 16,
          "minute": 0
        },
        "duration": 90,
        "limit": 114
      },
      {
        "label": "18Z",
        "start": {
          "hour": 22,
          "minute": 0
        },
        "duration": 90,
        "limit": 60
      }
    ]
  },
  {
    "name": "ARPEGE",
    "res": 10,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/arpege.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 3,
          "minute": 0
        },
        "duration": 70,
        "limit": 102
      },
      {
        "label": "06Z",
        "start": {
          "hour": 10,
          "minute": 5
        },
        "duration": 70,
        "limit": 72
      },
      {
        "label": "12Z",
        "start": {
          "hour": 15,
          "minute": 0
        },
        "duration": 70,
        "limit": 114
      },
      {
        "label": "18Z",
        "start": {
          "hour": 22,
          "minute": 05
        },
        "duration": 70,
        "limit": 60
      }
    ]
  },
  {
    "name": "AROME",
    "res": 1.3,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/arome.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 3,
          "minute": 0
        },
        "duration": 70,
        "limit": 42
      },
      {
        "label": "06Z",
        "start": {
          "hour": 10,
          "minute": 10
        },
        "duration": 70,
        "limit": 36
      },
      {
        "label": "12Z",
        "start": {
          "hour": 15,
          "minute": 0
        },
        "duration": 70,
        "limit": 42
      },
      {
        "label": "18Z",
        "start": {
          "hour": 22,
          "minute": 10
        },
        "duration": 70,
        "limit": 36
      }
    ]
  },
  {
    "name": "HIRLAM",
    "res": 10,
    "minFrameSize": 1,
    "viewLinks": [
      "http://www.meteociel.fr/modeles/hirlam.php"
    ],
    "runs": [
      {
        "label": "00Z",
        "start": {
          "hour": 3,
          "minute": 0
        },
        "duration": 70,
        "limit": 48
      },
      {
        "label": "06Z",
        "start": {
          "hour": 9,
          "minute": 0
        },
        "duration": 70,
        "limit": 48
      },
      {
        "label": "12Z",
        "start": {
          "hour": 15,
          "minute": 0
        },
        "duration": 70,
        "limit": 48
      },
      {
        "label": "18Z",
        "start": {
          "hour": 21,
          "minute": 0
        },
        "duration": 70,
        "limit": 48
      }
    ]
  }
]
