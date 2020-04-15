module.exports = [
  {
    "title": "do you know the exact toy you want to buy?",
    "id": 1,
    "parent_id": null,
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
    "title": "Who will use it?",
    "parent_id": 1,
    "condition": "1__2",
    "id": 2,
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
    "parent_id": 2,
    "condition": "1__2",
    "id": 3,
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
      }
    ]
  },
  {
    "title": "Your partner’s sex?",
    "parent_id": 3,
    "condition": "1__2/2__4",
    "id": 4,
    "answers": [
      {
        "id": 7,
        "title": "Male",
      },
      {
        "id": 8,
        "title": "Female",
      }
    ]
  },
  {
    "title": "Can you have sex with your partner offline?",
    "parent_id": 4,
    "condition": "1__2/2__4",
    "id": 5,
    "answers": [
      {
        "id": 9,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 10,
        "title": "No",
        "input_title": "online"
      }
    ]
  },
  {
    "title": "What’s your experience?",
    "parent_id": 5,
    "condition": "1__2",
    "id": 6,
    "answers": [
      {
        "id": 11,
        "title": "Never tried",
        "input_title": "newbie",
        "key": "newbie"
      },
      {
        "id": 12,
        "title": "Tried couple times, looking for new",
        "input_title": "amateur",
        "key": "newbie"
      },
      {
        "id": 13,
        "title": "Let’s just say I have some experience",
        "input_title": "pro",
        "key": "newbie"
      }
    ]
  },
  {
    "title": "What’s a favorite in musturbation?",
    "parent_id": 6,
    "condition": "1__2",
    "id": 7,
    "answers": [
      {
        "id": 14,
        "title": "The clit",
        "key": "clit",
        "condition": "3__8",
        "input_title": "for the clit"
      },
      {
        "id": 15,
        "title": "Feel it inside",
        "key": "dildo",
        "condition": "3__8",
        "input_title": "dildo"
      },
      {
        "id": 16,
        "title": "G-spot",
        "key": "g-spot",
        "condition": "3__8",
        "input_title": "for g-spot"
      },
      {
        "id": 17,
        "title": "Anal",
        "key": "anal",
        "condition": "3__8",
        "input_title": "for anal"
      },
      {
        "id": 18,
        "title": "Penis",
        "key": "pussy",
        "condition": "3__7",
        "input_title": "for penis"
      },
      {
        "id": 19,
        "title": "Balls",
        "key": "testicle massager",
        "condition": "3__7",
        "input_title": "for Balls"
      },
      {
        "id": 20,
        "title": "Anal",
        "key": "anal",
        "condition": "3__7",
        "input_title": "for anal"
      },
      {
        "id": 21,
        "title": "Prostate",
        "key": "prostate",
        "condition": "3__7",
        "input_title": "for prostate"
      }
    ]
  },
  {
    "title": "Do you like vibrations?",
    "parent_id": 7,
    "condition": "1__2",
    "id": 8,
    "answers": [
      {
        "id": 22,
        "title": "yes",
        "key": "vibro",
        "input_title": "vibro"
      },
      {
        "id": 23,
        "title": "no",
        "key": null,
        "input_title": ""
      }
    ]
  },
  {
    "title": "Do you want to use it taking a bath? ",
    "parent_id": 8,
    "condition": "1__2/8__22",
    "id": 9,
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
    "parent_id": 9,
    "condition": "1__2/8__22",
    "id": 10,
    "answers": [
      {
        "id": 26,
        "key": null,
        "title": "home use only",
        "input_title": ""
      },
      {
        "id": 27,
        "key": "portable",
        "input_title": "portable",
        "title": "planning to travel",
      }
    ]
  },
  {
    "title": "Are you ok with some noise? ",
    "parent_id": 10,
    "id": 11,
    "condition": "1__2/8__22",
    "answers": [
      {
        "id": 28,
        "key": null,
        "title": "Yes",
        "input_title": ""
      },
      {
        "id": 29,
        "key": "silent",
        "title": "No",
        "input_title": ""
      }
    ]
  },
  {
    "title": "Do you want to control it with your smartphone?",
    "parent_id": 11,
    "id": 12,
    "condition": "1__2/8__22",
    "answers": [
      {
        "id": 30,
        "title": "Yes",
        "key": "mobile",
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
    "parent_id": 12,
    "condition": "1__2",
    "id": 13,
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
    "parent_id": 13,
    "condition": "1__2",
    "id": 14,
    "answers": [
      {
        "id": 34,
        "title": "Latex",
        "key": "latex",
        "input_title": "latex"
      },
      {
        "id": 35,
        "key": "wood",
        "title": "Wood",
        "input_title": "wood"
      },
      {
        "id": 36,
        "key": "silicone",
        "title": "Silicone",
        "input_title": "silicone"
      },
      {
        "id": 37,
        "key": "plastic",
        "title": "ABS Plastic",
        "input_title": "plastic"
      },{
        "id": 37,
        "key": "glass",
        "title": "Glass",
        "input_title": "material 2"
      },{
        "id": 37,
        "key": "ceramic",
        "title": "Ceramic",
        "input_title": "ceramic"
      },
      {
        "id": 38,
        "key": null,
        "title": "what is the difference?",
        "input_title": ""
      }
    ]
  },
  {
    "title": "How much time are you ready to spend to take care of your toy?",
    "parent_id": 14,
    "condition": "1__2/14__38",
    "id": 15,
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
    "parent_id": 15,
    "id": 16,
    "condition": "1__2",
    "answers": [
      {
        "id": 42,
        "key": "0-25%",
        "title": "0-25%"
      },
      {
        "id": 43,
        "key": "25-50%",
        "title": "25-50%"
      },
      {
        "id": 44,
        "key": "50-75%",
        "title": "50-75%"
      },
      {
        "id": 45,
        "key": "75-100%",
        "title": "75-100%"
      }
    ]
  }
]