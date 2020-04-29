module.exports = [
  {
    "title": "Who will use it?",
    "id": 1,
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
    "id": 2,
    "answers": [
      {
        "id": 5,
        "title": "Male",
        "input_title": "",
        "key": "GENDER:MALE"
      },
      {
        "id": 6,
        "title": "Female",
        "input_title": "",
        "key": "GENDER:FEMALE"
      },
      {
        "id": 7,
        "title": "Intersex male reproductive organs",
        "input_title": "",
        "key": "GENDER:MALE"
      },
      {
        "id": 8,
        "title": "Intersex female reproductive organs",
        "input_title": "",
        "key": "GENDER:FEMALE"
      },
      {
        "id": 9,
        "title": "Inersex male & female reproductive organs",
        "input_title": "",
        "key": "GENDER:FEMALE_MALE"
      }
    ]
  },
  {
    "title": "Your partner’s sex?",
    "condition": "1__4",
    "id": 3,
    "answers": [
      {
        "id": 10,
        "title": "Male",
        "input_title": "",
        "key": "GENDER:MALE"
      },
      {
        "id": 11,
        "title": "Female",
        "input_title": "",
        "key": "GENDER:FEMALE"
      },
      {
        "id": 12,
        "title": "Intersex male reproductive organs",
        "input_title": "",
        "key": "GENDER:MALE"
      },
      {
        "id": 13,
        "title": "Intersex female reproductive organs",
        "input_title": "",
        "key": "GENDER:FEMALE"
      },
      {
        "id": 14,
        "title": "Inersex male & female reproductive organs",
        "input_title": "",
        "key": "GENDER:FEMALE_MALE"
      }
    ]
  },
  {
    "title": "Are you physically isolated form your partner due to pandemic?",
    "condition": "1__4",
    "id": 4,
    "answers": [
      {
        "id": 15,
        "title": "Yes",
        "key": "CONTROL:REMOTE",
        "input_title": "Online"
      },
      {
        "id": 16,
        "title": "No",
        "input_title": ""
      }
    ]
  },
  {
    "title": "What's your experience with sex toys?",
    "id": 5,
    "answers": [
      {
        "id": 17,
        "title": "Never tried",
        "input_title": "newbie"
      },
      {
        "id": 18,
        "title": "Tried couple times, looking for new",
        "input_title": "amateur"
      },
      {
        "id": 19,
        "title": "Let’s just say I have some experience",
        "input_title": "pro",
        "key": "EXPERIENCE:PRO"
      }
    ]
  },
  {
    "title": "What’s a favorite in musturbation?",
    "id": 6,
    "answers": [
      {
        "id": 20,
        "title": "The clit",
        "condition": "2__6||8||9",
        "input_title": "For the clit",
        "key": "TYPE:DILDO"
      },
      {
        "id": 21,
        "title": "Feel it inside",
        "condition": "2__6||8||9",
        "input_title": "Dildo",
        "key": "TYPE:DILDO"
      },
      {
        "id": 22,
        "title": "G-spot",
        "condition": "2__6||8||9",
        "input_title": "For g-spot",
        "key": "TYPE:G-SPOT"
      },
      {
        "id": 23,
        "title": "Anal",
        "condition": "2__6||8||9",
        "input_title": "For anal",
        "key": "TYPE:DILDO"
      },
      {
        "id": 24,
        "title": "Penis",
        "key": "TYPE:VAGINA",
        "condition": "2__5||7||9",
        "input_title": "For penis"
      },
      {
        "id": 25,
        "title": "Balls",
        "key": "TYPE:TESTICLES",
        "condition": "2__5||7||9",
        "input_title": "For Balls"
      },
      {
        "id": 26,
        "title": "Anal",
        "condition": "2__5||7||9",
        "input_title": "For anal",
        "key": "TYPE:DILDO"
      },
      {
        "id": 27,
        "title": "Prostate",
        "key": "TYPE:PROSTATE",
        "condition": "2__5||7||9",
        "input_title": "For prostate"
      }
    ]
  },
  {
    "title": "Do you like vibrations?",
    "id": 7,
    "answers": [
      {
        "id": 28,
        "title": "yes",
        "key": "EXTRA:VIBRO",
        "input_title": null
      },
      {
        "id": 29,
        "title": "no",
        "key": null,
        "input_title": null
      }
    ]
  },
  {
    "title": "Do you want to use it taking a bath?",
    "condition": "7__28",
    "id": 8,
    "answers": [
      {
        "id": 30,
        "title": "yes",
        "input_title": "",
        "key": "EXTRA:WATERPROOF"
      },
      {
        "id": 31,
        "title": "no",
        "key": null,
        "input_title": ""
      }
    ]
  },
  {
    "title": "Are you ok with some noise?",
    "id": 9,
    "condition": "7__28",
    "answers": [
      {
        "id": 32,
        "key": "EXTRA:VIBRO",
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
    "id": 10,
    "condition": "7__28",
    "answers": [
      {
        "id": 34,
        "title": "Yes",
        "key": "CONTROL:REMOTE",
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
    "id": 11,
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
    "id": 12,
    "answers": [
      {
        "id": 38,
        "title": "Latex",
        "condition": "11__37",
        "input_title": "Latex",
        "key": "MATERIAL:LATEX"
      },
      {
        "id": 39,
        "title": "Wood",
        "input_title": "Wood",
        "key": "MATERIAL:WOOD"
      },
      {
        "id": 40,
        "key": "MATERIAL:SILICONE",
        "title": "Silicone",
        "input_title": "Silicone"
      },
      {
        "id": 41,
        "key": "MATERIAL:PLASTIC",
        "title": "ABS Plastic",
        "input_title": "Plastic"
      },
      {
        "id": 42,
        "key": "MATERIAL:GLASS",
        "title": "Glass",
        "input_title": "Glass"
      },
      {
        "id": 43,
        "key": "MATERIAL:CERAMIC",
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
    "condition": "12__44",
    "id": 13,
    "answers": [
      {
        "id": 45,
        "title": "Simplest & safest",
        "key": null,
        "input_title": ""
      },
      {
        "id": 46,
        "title": "It’s ok to check it every time before use",
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
    "id": 14,
    "answers": [
      {
        "id": 48,
        "key": "PRICE:0__25",
        "calculate": "price",
        "title": "0-25%"
      },
      {
        "id": 49,
        "key": "PRICE:25__50",
        "calculate": "price",
        "title": "25-50%"
      },
      {
        "id": 50,
        "key": "PRICE:50__75",
        "calculate": "price",
        "title": "50-75%"
      },
      {
        "id": 51,
        "key": "PRICE:75__100",
        "calculate": "price",
        "title": "75-100%"
      }
    ]
  }
]