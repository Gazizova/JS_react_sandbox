const templateData={
    ref: "e_funktion",
    title: "Funktion",
    groups: [
      {
        ref: "p_funktion",
        title: "Funktion",              
        extensions: [
        {
          type: "strikersoft.component.group",
          twoColumsLayout: false,
          fullWidthLayout: false
        }
      ],
        questions: [
          {
            ref: "q_guide1",
            type: "strikersoft.question.singleSelect",
            title: "Hur svårt är det för dig att klara följande aktiviteter? (0-100)"
          },
          {
            ref: "q_funk1",
            type: "strikersoft.question.singleSelect",
            title: "Av- och påklädning utan hjälp",
            extra: "Av- och påklädning utan hjälp",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },{
                  value:1,title:"Enligt skalan"
                },
                  {
                    value:2,title:"Enligt skalan"
                  },{
                    value:3,title:"Enligt skalan"
                  },{
                    value:4,title:"Enligt skalan"
                  },{
                    value:5,title:"Enligt skalan"
                  },{
                    value:6,title:"Enligt skalan"
                  },{
                    value:7,title:"Enligt skalan"
                  },{
                    value:8,title:"Enligt skalan"
                  },{
                    value:9,title:"Enligt skalan"
                },{
                  value:10,title:"Enligt skalan"
                },{
                  value:11,title:"Enligt skalan"
                },{value:12,title:"Enligt skalan"
              },{
                value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk2",
            type: "strikersoft.question.singleSelect",
            title: "Promenader",
            extra: "Promenader:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk3",
            type: "strikersoft.question.singleSelect",
            title: "Gång i trappor",
            extra: "Gång i trappor:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk4",
            type: "strikersoft.question.singleSelect",
            title: "Sitta en längre stund",
            extra: "Sitta en längre stund:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk5",
            type: "strikersoft.question.singleSelect",
            title: "Stå framåtböjd över tvättställ",
            extra: "Stå framåtböjd över tvättställ:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk6",
            type: "strikersoft.question.singleSelect",
            title: "Bära väska eller kasse",
            extra: "Bära väska eller kasse:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk7",
            type: "strikersoft.question.singleSelect",
            title: "Bädda en säng",
            extra: "Bädda en säng:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk8",
            type: "strikersoft.question.singleSelect",
            title: "Springa",
            extra: "Springa:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk9",
            type: "strikersoft.question.singleSelect",
            title: "Lättare kroppsarbete",
            extra: "Lättare kroppsarbete:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk10",
            type: "strikersoft.question.singleSelect",
            title: "Ansträngande kroppsarbete",
            extra: "Ansträngande kroppsarbete:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk11",
            type: "strikersoft.question.singleSelect",
            title: "Tunga lyft",
            extra: "Tunga lyft:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          },
          {
            ref: "q_funk12",
            type: "strikersoft.question.singleSelect",
            title: "Motion/Sport",
            extra: "Motion/Sport:",
            
            answers: [
                {
                    value: 0,
                    title: "Inga svårigheter alls"
                },
{value:1,title:"Enligt skalan"},{value:2,title:"Enligt skalan"},{value:3,title:"Enligt skalan"},{value:4,title:"Enligt skalan"},{value:5,title:"Enligt skalan"},{value:6,title:"Enligt skalan"},{value:7,title:"Enligt skalan"},{value:8,title:"Enligt skalan"},{value:9,title:"Enligt skalan"},{value:10,title:"Enligt skalan"},{value:11,title:"Enligt skalan"},{value:12,title:"Enligt skalan"},{value:13,title:"Enligt skalan"},{value:14,title:"Enligt skalan"},{value:15,title:"Enligt skalan"},{value:16,title:"Enligt skalan"},{value:17,title:"Enligt skalan"},{value:18,title:"Enligt skalan"},{value:19,title:"Enligt skalan"},{value:20,title:"Enligt skalan"},{value:21,title:"Enligt skalan"},{value:22,title:"Enligt skalan"},{value:23,title:"Enligt skalan"},{value:24,title:"Enligt skalan"},{value:25,title:"Enligt skalan"},{value:26,title:"Enligt skalan"},{value:27,title:"Enligt skalan"},{value:28,title:"Enligt skalan"},{value:29,title:"Enligt skalan"},{value:30,title:"Enligt skalan"},{value:31,title:"Enligt skalan"},{value:32,title:"Enligt skalan"},{value:33,title:"Enligt skalan"},{value:34,title:"Enligt skalan"},{value:35,title:"Enligt skalan"},{value:36,title:"Enligt skalan"},{value:37,title:"Enligt skalan"},{value:38,title:"Enligt skalan"},{value:39,title:"Enligt skalan"},{value:40,title:"Enligt skalan"},{value:41,title:"Enligt skalan"},{value:42,title:"Enligt skalan"},{value:43,title:"Enligt skalan"},{value:44,title:"Enligt skalan"},{value:45,title:"Enligt skalan"},{value:46,title:"Enligt skalan"},{value:47,title:"Enligt skalan"},{value:48,title:"Enligt skalan"},{value:49,title:"Enligt skalan"},{value:50,title:"Enligt skalan"},{value:51,title:"Enligt skalan"},{value:52,title:"Enligt skalan"},{value:53,title:"Enligt skalan"},{value:54,title:"Enligt skalan"},{value:55,title:"Enligt skalan"},{value:56,title:"Enligt skalan"},{value:57,title:"Enligt skalan"},{value:58,title:"Enligt skalan"},{value:59,title:"Enligt skalan"},{value:60,title:"Enligt skalan"},{value:61,title:"Enligt skalan"},{value:62,title:"Enligt skalan"},{value:63,title:"Enligt skalan"},{value:64,title:"Enligt skalan"},{value:65,title:"Enligt skalan"},{value:66,title:"Enligt skalan"},{value:67,title:"Enligt skalan"},{value:68,title:"Enligt skalan"},{value:69,title:"Enligt skalan"},{value:70,title:"Enligt skalan"},{value:71,title:"Enligt skalan"},{value:72,title:"Enligt skalan"},{value:73,title:"Enligt skalan"},{value:74,title:"Enligt skalan"},{value:75,title:"Enligt skalan"},{value:76,title:"Enligt skalan"},{value:77,title:"Enligt skalan"},{value:78,title:"Enligt skalan"},{value:79,title:"Enligt skalan"},{value:80,title:"Enligt skalan"},{value:81,title:"Enligt skalan"},{value:82,title:"Enligt skalan"},{value:83,title:"Enligt skalan"},{value:84,title:"Enligt skalan"},{value:85,title:"Enligt skalan"},{value:86,title:"Enligt skalan"},{value:87,title:"Enligt skalan"},{value:88,title:"Enligt skalan"},{value:89,title:"Enligt skalan"},{value:90,title:"Enligt skalan"},{value:91,title:"Enligt skalan"},{value:92,title:"Enligt skalan"},{value:93,title:"Enligt skalan"},{value:94,title:"Enligt skalan"},{value:95,title:"Enligt skalan"},{value:96,title:"Enligt skalan"},{value:97,title:"Enligt skalan"},
                {
                    value: 100,
                    title: "Klarar ej"
                }
            ],
            extensions: [
              {
                type: "strikersoft.component.slider"
              },
              {
                type: "strikersoft.ext.validation",
                obligatory: false
              }
            ]
          }
        ]
      }
    ]
  }
  export const data = Promise.resolve(templateData);  
  
