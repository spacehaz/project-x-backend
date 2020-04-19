module.exports = [
  {
    "title": "Do you know the exact toy you want to buy?",
    "id": 1,
    "answers": [
      {
        "id": 1,
        "title": "Yes",
        "input_title": "",
        "stop": true,
        "disabled": true
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
        "input_title": "Male"
      },
      {
        "id": 6,
        "title": "Female",
        "input_title": "Female"
      }
    ]
  },
  {
    "title": "Your partner’s sex?",
    "condition": "1__2/3__4",
    "id": 5,
    "answers": [
      {
        "id": 7,
        "title": "Male",
        "input_title": "Male"
      },
      {
        "id": 8,
        "title": "Female",
        "input_title": "Female"
      }
    ]
  },
  {
    "title": "Can you have sex with your partner offline?",
    "condition": "1__2/3__4",
    "id": 6,
    "answers": [
      {
        "id": 9,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 10,
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
        "id": 11,
        "title": "Never tried",
        "input_title": "newbie",
        "key": null
      },
      {
        "id": 12,
        "title": "Tried couple times, looking for new",
        "input_title": "amateur",
        "key": null
      },
      {
        "id": 13,
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
        "id": 14,
        "title": "The clit",
        "key": "clit",
        "condition": "4__6",
        "input_title": "For the clit"
      },
      {
        "id": 15,
        "title": "Feel it inside",
        "key": "dildo",
        "condition": "4__6",
        "input_title": "Dildo"
      },
      {
        "id": 16,
        "title": "G-spot",
        "key": "g-spot",
        "condition": "4__6",
        "input_title": "For g-spot"
      },
      {
        "id": 17,
        "title": "Anal",
        "key": "anal",
        "condition": "4__6",
        "input_title": "For anal"
      },
      {
        "id": 18,
        "title": "Penis",
        "key": "pussy",
        "condition": "4__5",
        "input_title": "For penis"
      },
      {
        "id": 19,
        "title": "Balls",
        "key": "testicle massager",
        "condition": "4__5",
        "input_title": "For Balls"
      },
      {
        "id": 20,
        "title": "Anal",
        "key": "anal",
        "condition": "4__5",
        "input_title": "For anal"
      },
      {
        "id": 21,
        "title": "Prostate",
        "key": "prostate",
        "condition": "4__5",
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
        "id": 22,
        "title": "yes",
        "key": "", // подумать насчет категории
        "input_title": null
      },
      {
        "id": 23,
        "title": "no",
        "key": null,
        "input_title": null
      }
    ]
  },
  {
    "title": "Do you want to use it taking a bath? ",
    "condition": "1__2/9__22",
    "id": 10,
    "answers": [
      {
        "id": 24,
        "title": "yes",
        "key": "waterproof",
        "input_title": ""
      },
      {
        "id": 25,
        "title": "no",
        "key": null,
        "input_title": ""
      }
    ]
  },
  {
    "title": "How portable should it be? ",
    "condition": "1__2/9__22",
    "id": 11,
    "answers": [
      {
        "id": 26,
        "key": null,
        "title": "home use only",
        "input_title": ""
      },
      {
        "id": 27,
        "key": null,
        "input_title": "portable",
        "title": "Planning to travel"
      }
    ]
  },
  {
    "title": "Are you ok with some noise? ",
    "id": 12,
    "condition": "1__2/9__22",
    "answers": [
      {
        "id": 28,
        "key": null,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 29,
        "key": null,
        "title": "No",
        "input_title": ""
      }
    ]
  },
  {
    "title": "Do you want to control it with your smartphone?",
    "id": 13,
    "condition": "1__2/9__22",
    "answers": [
      {
        "id": 30,
        "title": "Yes",
        "key": "bluetooth",
        "input_title": ""
      },
      {
        "id": 31,
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
        "id": 32,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 33,
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
        "id": 34,
        "title": "Latex",
        "key": "latex",
        "input_title": "Latex"
      },
      {
        "id": 35,
        "key": "wood",
        "title": "Wood",
        "input_title": "Wood"
      },
      {
        "id": 36,
        "key": "silicone",
        "title": "Silicone",
        "input_title": "Silicone"
      },
      {
        "id": 37,
        "key": "plastic",
        "title": "ABS Plastic",
        "input_title": "Plastic"
      },
      {
        "id": 37,
        "key": "glass",
        "title": "Glass",
        "input_title": "Material 2"
      },
      {
        "id": 37,
        "key": "ceramic",
        "title": "Ceramic",
        "input_title": "Ceramic"
      },
      {
        "id": 38,
        "key": null,
        "title": "What is the difference?",
        "input_title": ""
      }
    ]
  },
  {
    "title": "How much time are you ready to spend to take care of your toy?",
    "condition": "1__2/15__38",
    "id": 16,
    "answers": [
      {
        "id": 39,
        "title": "Simplest & safest",
        "key": null,
        "input_title": ""
      },
      {
        "id": 40,
        "title": "it’s ok to check it every time before use",
        "key": null,
        "input_title": ""
      },
      {
        "id": 41,
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
        "id": 42,
        "key": "0__25",
        "calculate": "price",
        "title": "0-25%"
      },
      {
        "id": 43,
        "key": "25__50",
        "calculate": "price",
        "title": "25-50%"
      },
      {
        "id": 44,
        "key": "50__75",
        "calculate": "price",
        "title": "50-75%"
      },
      {
        "id": 45,
        "key": "75__100",
        "calculate": "price",
        "title": "75-100%"
      }
    ]
  }
]