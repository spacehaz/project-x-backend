module.exports = [
  {
    "title": "Do you know the exact toy you want to buy?",
    "id": 1,
    "answers": [
      {
        "id": 1,
        "title": "Yes",
        "input_title": "",
        "stop": true
      },
      {
        "id": 2,
        "title": "No",
        "input_title": ""
      }
    ]
  },
  {
    "title": "Ok then just type in what you want.",
    "condition": "1__1",
    "id": 2,
    "no_next_question": true
  },
  {
    "title": "Who will use it?",
    "condition": "1__2",
    "id": 3,
    "answers": [
      {
        "id": 3,
        "title": "Just me",
        "input_title": "Solo"
      },
      {
        "id": 4,
        "title": "Me and my partner",
        "input_title": "For couple"
      }
    ]
  },
  {
    "title": "Your sex?",
    "condition": "1__2",
    "id": 4,
    "answers": [
      {
        "id": 5,
        "title": "Male",
        "input_title": ""
      },
      {
        "id": 6,
        "title": "Female",
        "input_title": ""
      },
      {
        "id": 7,
        "title": "Intersex male reproductive organs",
        "input_title": ""
      }, {
        "id": 8,
        "title": "Intersex female reproductive organs",
        "input_title": ""
      }
    ]
  },
  {
    "title": "Your partner’s sex?",
    "condition": "1__2/3__4",
    "id": 5,
    "answers": [
      {
        "id": 9,
        "title": "Male",
        "input_title": ""
      },
      {
        "id": 10,
        "title": "Female",
        "input_title": ""
      },
      {
        "id": 11,
        "title": "Intersex male reproductive organs",
        "input_title": ""
      }, {
        "id": 12,
        "title": "Intersex female reproductive organs",
        "input_title": ""
      }
    ]
  },
  {
    "title": "Can you have sex with your partner offline?",
    "condition": "1__2/3__4",
    "id": 6,
    "answers": [
      {
        "id": 13,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 14,
        "title": "No",
        "input_title": "Online"
      }
    ]
  },
  {
    "title": "What’s your experience?",
    "condition": "1__2",
    "id": 7,
    "answers": [
      {
        "id": 15,
        "title": "Never tried",
        "input_title": "newbie",
        "key": null
      },
      {
        "id": 16,
        "title": "Tried couple times, looking for new",
        "input_title": "amateur",
        "key": null
      },
      {
        "id": 17,
        "title": "Let’s just say I have some experience",
        "input_title": "pro",
        "key": null
      }
    ]
  },
  {
    "title": "What’s a favorite in musturbation?",
    "condition": "1__2",
    "id": 8,
    "answers": [
      {
        "id": 18,
        "title": "The clit",
        "key": "clit",
        "condition": "4__6||8",
        "input_title": "For the clit"
      },
      {
        "id": 19,
        "title": "Feel it inside",
        "key": "dildo",
        "condition": "4__6||8",
        "input_title": "Dildo"
      },
      {
        "id": 20,
        "title": "G-spot",
        "key": "g-spot",
        "condition": "4__6||8",
        "input_title": "For g-spot"
      },
      {
        "id": 21,
        "title": "Anal",
        "key": "anal",
        "condition": "4__6||8",
        "input_title": "For anal"
      },
      {
        "id": 22,
        "title": "Penis",
        "key": "pussy",
        "condition": "4__5||7",
        "input_title": "For penis"
      },
      {
        "id": 23,
        "title": "Balls",
        "key": "testicle massager",
        "condition": "4__5||7",
        "input_title": "For Balls"
      },
      {
        "id": 24,
        "title": "Anal",
        "key": "anal",
        "condition": "4__5||7",
        "input_title": "For anal"
      },
      {
        "id": 25,
        "title": "Prostate",
        "key": "prostate",
        "condition": "4__5||7",
        "input_title": "For prostate"
      }
    ]
  },
  {
    "title": "Do you like vibrations?",
    "condition": "1__2",
    "id": 9,
    "answers": [
      {
        "id": 26,
        "title": "yes",
        "key": "", // подумать насчет категории
        "input_title": null
      },
      {
        "id": 27,
        "title": "no",
        "key": null,
        "input_title": null
      }
    ]
  },
  {
    "title": "Do you want to use it taking a bath? ",
    "condition": "1__2/9__26",
    "id": 10,
    "answers": [
      {
        "id": 28,
        "title": "yes",
        "key": "waterproof",
        "input_title": ""
      },
      {
        "id": 29,
        "title": "no",
        "key": null,
        "input_title": ""
      }
    ]
  },
  {
    "title": "How portable should it be?",
    "condition": "1__2/9__26",
    "id": 11,
    "answers": [
      {
        "id": 30,
        "key": null,
        "title": "home use only",
        "input_title": ""
      },
      {
        "id": 31,
        "key": null,
        "input_title": "portable",
        "title": "Planning to travel"
      }
    ]
  },
  {
    "title": "Are you ok with some noise? ",
    "id": 12,
    "condition": "1__2/9__26",
    "answers": [
      {
        "id": 32,
        "key": null,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 33,
        "key": null,
        "title": "No",
        "input_title": ""
      }
    ]
  },
  {
    "title": "Do you want to control it with your smartphone?",
    "id": 13,
    "condition": "1__2/9__26",
    "answers": [
      {
        "id": 34,
        "title": "Yes",
        "key": "bluetooth",
        "input_title": ""
      },
      {
        "id": 35,
        "title": "No",
        "key": null,
        "input_title": ""
      }
    ]
  },
  {
    "title": "Are you allergic to latex?",
    "condition": "1__2",
    "id": 14,
    "answers": [
      {
        "id": 36,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 37,
        "title": "No",
        "input_title": ""
      }
    ]
  },
  {
    "title": "what material you’d like? ",
    "condition": "1__2",
    "id": 15,
    "answers": [
      {
        "id": 38,
        "title": "Latex",
        "key": "latex",
        "input_title": "Latex"
      },
      {
        "id": 39,
        "key": "wood",
        "title": "Wood",
        "input_title": "Wood"
      },
      {
        "id": 40,
        "key": "silicone",
        "title": "Silicone",
        "input_title": "Silicone"
      },
      {
        "id": 41,
        "key": "plastic",
        "title": "ABS Plastic",
        "input_title": "Plastic"
      },
      {
        "id": 42,
        "key": "glass",
        "title": "Glass",
        "input_title": "Glass"
      },
      {
        "id": 43,
        "key": "ceramic",
        "title": "Ceramic",
        "input_title": "Ceramic"
      },
      {
        "id": 44,
        "key": null,
        "title": "What is the difference?",
        "input_title": ""
      }
    ]
  },
  {
    "title": "How much time are you ready to spend to take care of your toy?",
    "condition": "1__2/15__44",
    "id": 16,
    "answers": [
      {
        "id": 45,
        "title": "Simplest & safest",
        "key": null,
        "input_title": ""
      },
      {
        "id": 46,
        "title": "it’s ok to check it every time before use",
        "key": null,
        "input_title": ""
      },
      {
        "id": 47,
        "title": "I can manage regular cleaning and toy disposal in 1 year",
        "key": null,
        "input_title": ""
      }
    ]
  },
  {
    "title": "What’s your budget?",
    "id": 17,
    "condition": "1__2",
    "answers": [
      {
        "id": 48,
        "key": "0__25",
        "calculate": "price",
        "title": "0-25%"
      },
      {
        "id": 49,
        "key": "25__50",
        "calculate": "price",
        "title": "25-50%"
      },
      {
        "id": 50,
        "key": "50__75",
        "calculate": "price",
        "title": "50-75%"
      },
      {
        "id": 51,
        "key": "75__100",
        "calculate": "price",
        "title": "75-100%"
      }
    ]
  }
]