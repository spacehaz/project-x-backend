module.exports = [
  {
    category_1: {
      kind: 'GENDER',
      value: 'MALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'MALE'
    },
    output: {
      kind: 'GENDER',
      value: 'GAY',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'FEMALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'FEMALE'
    },
    output: {
      kind: 'GENDER',
      value: 'LESBIAN',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'MALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'FEMALE'
    },
    output: {
      kind: 'GENDER',
      value: null,
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'FEMALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'MALE'
    },
    output: {
      kind: 'GENDER',
      value: null,
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'MALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'FEMALE_MALE'
    },
    output: {
      kind: 'GENDER',
      value: 'GAY',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'FEMALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'FEMALE_MALE'
    },
    output: {
      kind: 'GENDER',
      value: 'LESBIAN',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'FEMALE_MALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'FEMALE_MALE'
    },
    output: {
      kind: 'GENDER',
      value: 'GAY_LESBIAN',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'FEMALE_MALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'MALE'
    },
    output: {
      kind: 'GENDER',
      value: 'GAY',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'GENDER',
      value: 'FEMALE_MALE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'FEMALE'
    },
    output: {
      kind: 'GENDER',
      value: 'LESBIAN',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'TYPE',
      value: '*'
    },
    category_2: {
      kind: 'GENDER',
      value: '*'
    },
    output: {
      kind: 'TYPE',
      value: 1,
      weight: 1
    }
  }, {
    category_1: {
      kind: 'EXTRA',
      value: 'VIBRATION'
    },
    category_2: {
      kind: 'TYPE',
      value: 'DILDO'
    },
    output: {
      kind: 'TYPE',
      value: 'VIBRATOR',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'EXTRA',
      value: 'VIBRATION'
    },
    category_2: {
      kind: 'TYPE',
      value: 'ANAL-TOY'
    },
    output: {
      kind: 'TYPE',
      value: 'ANAL-VIBRATOR',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'CONTROL',
      value: 'REMOTE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'GAY'
    },
    output: {
      kind: 'TYPE',
      value: 'REMOTE-MALE',
      weight: 1
    }
  }, {
    category_1: {
      kind: 'CONTROL',
      value: 'REMOTE'
    },
    category_2: {
      kind: 'GENDER',
      value: 'LESBIAN'
    },
    output: {
      kind: 'TYPE',
      value: 'REMOTE-FEMALE',
      weight: 1
    }
  }
]