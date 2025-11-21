/* DEMO deck.de.js — расширенный формат + ruNote/ukNote */

window.decks = window.decks || {};

/* ======================= VERBS: de_verbs ======================= */

window.decks.de_verbs = [
  {
    id: 1,
    word: "machen",
    ru: "делать",
    uk: "робити",
    level: "A1",
    topics: ["daily", "action"],
    ruSyn: ["совершать", "изготавливать"],
    ukSyn: ["створювати"],
    ruAnt: ["ничего не делать"],
    ukAnt: ["нічого не робити"],
    examples: [
      {
        L2: "Was machst du heute?",
        ru: "Что ты делаешь сегодня?",
        uk: "Що ти робиш сьогодні?"
      }
    ]
  },
  {
    id: 2,
    word: "gehen",
    ru: "идти",
    uk: "йти",
    level: "A1",
    topics: ["movement", "daily"],
    ruSyn: ["ходить"],
    ukSyn: ["ходити"],
    ruAnt: ["стоять"],
    ukAnt: ["стояти"],
    examples: [
      {
        L2: "Ich gehe zur Arbeit.",
        ru: "Я иду на работу.",
        uk: "Я йду на роботу."
      }
    ]
  },
  {
    id: 3,
    word: "lesen",
    ru: "читать",
    uk: "читати",
    level: "A1",
    topics: ["education", "free_time"],
    ruSyn: ["пробегать глазами"],
    ukSyn: ["переглядати"],
    ruAnt: ["не читать"],
    ukAnt: ["не читати"],
    examples: [
      {
        L2: "Sie liest jeden Abend ein Buch.",
        ru: "Она читает книгу каждый вечер.",
        uk: "Вона читає книгу щовечора."
      }
    ]
  },
  {
    id: 4,
    word: "essen",
    ru: "есть",
    uk: "їсти",
    level: "A1",
    topics: ["food"],
    ruSyn: ["кушать", "принимать пищу"],
    ukSyn: ["споживати їжу"],
    ruAnt: ["голодать"],
    ukAnt: ["голодувати"],
    examples: [
      {
        L2: "Wir essen zusammen zu Mittag.",
        ru: "Мы обедаем вместе.",
        uk: "Ми обідаємо разом."
      }
    ]
  },
  {
    id: 5,
    word: "trinken",
    ru: "пить",
    uk: "пити",
    level: "A1",
    topics: ["food"],
    ruSyn: ["употреблять напитки"],
    ukSyn: ["вживати напої"],
    ruAnt: ["не пить"],
    ukAnt: ["не пити"],
    examples: [
      {
        L2: "Er trinkt gern Kaffee.",
        ru: "Он любит пить кофе.",
        uk: "Він любить пити каву."
      }
    ]
  },
  {
    id: 6,
    word: "schlafen",
    ru: "спать",
    uk: "спати",
    level: "A1",
    topics: ["daily", "health"],
    ruSyn: ["дремать"],
    ukSyn: ["дрімати"],
    ruAnt: ["не спать", "бодрствовать"],
    ukAnt: ["не спати"],
    examples: [
      {
        L2: "Das Kind schläft schon.",
        ru: "Ребёнок уже спит.",
        uk: "Дитина вже спить."
      }
    ]
  },
  {
    id: 7,
    word: "sprechen",
    ru: "говорить",
    uk: "говорити",
    level: "A2",
    topics: ["communication"],
    ruSyn: ["разговаривать", "беседовать"],
    ukSyn: ["розмовляти"],
    ruAnt: ["молчать"],
    ukAnt: ["мовчати"],
    examples: [
      {
        L2: "Sie spricht gut Deutsch.",
        ru: "Она хорошо говорит по-немецки.",
        uk: "Вона добре говорить німецькою."
      }
    ]
  },
  {
    id: 8,
    word: "lernen",
    ru: "учить",
    uk: "вчити",
    level: "A1",
    topics: ["education"],
    ruSyn: ["изучать"],
    ukSyn: ["вивчати"],
    ruAnt: ["забывать"],
    ukAnt: ["забувати"],
    examples: [
      {
        L2: "Wir lernen neue Wörter.",
        ru: "Мы учим новые слова.",
        uk: "Ми вчимо нові слова."
      }
    ]
  }
];

/* ======================= NOUNS: de_nouns ======================= */

window.decks.de_nouns = [
  {
    id: 1,
    word: "das Haus",
    ru: "дом",
    uk: "будинок",
    level: "A1",
    topics: ["home", "city"],
    ruSyn: ["здание", "жилище"],
    ukSyn: ["оселя"],
    ruAnt: ["улица"],
    ukAnt: ["вулиця"],
    examples: [
      {
        L2: "Das Haus ist groß.",
        ru: "Дом большой.",
        uk: "Будинок великий."
      }
    ]
  },
  {
    id: 2,
    word: "die Stadt",
    ru: "город",
    uk: "місто",
    level: "A1",
    topics: ["city"],
    ruSyn: ["населённый пункт"],
    ukSyn: ["населений пункт"],
    ruAnt: ["деревня"],
    ukAnt: ["село"],
    examples: [
      {
        L2: "Die Stadt ist sehr schön.",
        ru: "Город очень красивый.",
        uk: "Місто дуже гарне."
      }
    ]
  },
  {
    id: 3,
    word: "das Auto",
    ru: "машина",
    uk: "машина",
    level: "A1",
    topics: ["transport"],
    ruSyn: ["автомобиль"],
    ukSyn: ["автомобіль"],
    ruAnt: [],
    ukAnt: [],
    examples: [
      {
        L2: "Mein Auto ist neu.",
        ru: "Моя машина новая.",
        uk: "Моя машина нова."
      }
    ]
  },
  {
    id: 4,
    word: "der Freund",
    ru: "друг",
    uk: "друг",
    level: "A1",
    topics: ["people", "relationships"],
    ruSyn: ["товарищ", "приятель"],
    ukSyn: ["товариш", "приятель"],
    ruAnt: ["враг"],
    ukAnt: ["ворог"],
    examples: [
      {
        L2: "Er ist mein bester Freund.",
        ru: "Он мой лучший друг.",
        uk: "Він мій найкращий друг."
      }
    ]
  },
  {
    id: 5,
    word: "die Arbeit",
    ru: "работа",
    uk: "робота",
    level: "A2",
    topics: ["work"],
    ruSyn: ["труд", "служба"],
    ukSyn: ["праця", "служба"],
    ruAnt: ["отдых"],
    ukAnt: ["відпочинок"],
    examples: [
      {
        L2: "Die Arbeit beginnt um neun Uhr.",
        ru: "Работа начинается в девять.",
        uk: "Робота починається о дев’ятій."
      }
    ]
  },
  {
    id: 6,
    word: "das Buch",
    ru: "книга",
    uk: "книга",
    level: "A1",
    topics: ["education", "free_time"],
    ruSyn: ["том"],
    ukSyn: ["том"],
    ruAnt: [],
    ukAnt: [],
    examples: [
      {
        L2: "Ich lese ein interessantes Buch.",
        ru: "Я читаю интересную книгу.",
        uk: "Я читаю цікаву книгу."
      }
    ]
  },
  {
    id: 7,
    word: "die Zeit",
    ru: "время",
    uk: "час",
    level: "A2",
    topics: ["abstract"],
    ruSyn: ["период"],
    ukSyn: ["період"],
    ruAnt: ["вечность"],
    ukAnt: ["вічність"],
    examples: [
      {
        L2: "Ich habe heute keine Zeit.",
        ru: "У меня сегодня нет времени.",
        uk: "У мене сьогодні немає часу."
      }
    ]
  },
  {
    id: 8,
    word: "das Kind",
    ru: "ребёнок",
    uk: "дитина",
    level: "A1",
    topics: ["people", "family"],
    ruSyn: ["малыш"],
    ukSyn: ["малюк"],
    ruAnt: ["взрослый"],
    ukAnt: ["дорослий"],
    examples: [
      {
        L2: "Das Kind spielt im Garten.",
        ru: "Ребёнок играет в саду.",
        uk: "Дитина грається в саду."
      }
    ]
  }
];

/* =================== ADJECTIVES: de_adjectives =================== */

window.decks.de_adjectives = [
  {
    id: 1,
    word: "groß",
    ru: "большой",
    uk: "великий",
    level: "A1",
    topics: ["description"],
    ruSyn: ["крупный"],
    ukSyn: ["велетенський"],
    ruAnt: ["маленький"],
    ukAnt: ["маленький"],
    examples: [
      {
        L2: "Das Haus ist groß.",
        ru: "Дом большой.",
        uk: "Будинок великий."
      }
    ]
  },
  {
    id: 2,
    word: "klein",
    ru: "маленький",
    uk: "маленький",
    level: "A1",
    topics: ["description"],
    ruSyn: ["небольшой"],
    ukSyn: ["невеликий"],
    ruAnt: ["большой"],
    ukAnt: ["великий"],
    examples: [
      {
        L2: "Das Zimmer ist klein.",
        ru: "Комната маленькая.",
        uk: "Кімната маленька."
      }
    ]
  },
  {
    id: 3,
    word: "neu",
    ru: "новый",
    uk: "новий",
    level: "A1",
    topics: ["description"],
    ruSyn: ["современный"],
    ukSyn: ["сучасний"],
    ruAnt: ["старый"],
    ukAnt: ["старий"],
    examples: [
      {
        L2: "Mein Auto ist neu.",
        ru: "Моя машина новая.",
        uk: "Моя машина нова."
      }
    ]
  },
  {
    id: 4,
    word: "alt",
    ru: "старый",
    uk: "старий",
    level: "A1",
    topics: ["description", "age"],
    ruSyn: ["пожилой"],
    ukSyn: ["літній"],
    ruAnt: ["новый", "молодой"],
    ukAnt: ["новий", "молодий"],
    examples: [
      {
        L2: "Mein Großvater ist alt.",
        ru: "Мой дедушка старый.",
        uk: "Мій дідусь старий."
      }
    ]
  },
  {
    id: 5,
    word: "schön",
    ru: "красивый",
    uk: "гарний",
    level: "A1",
    topics: ["description"],
    ruSyn: ["приятный", "милый"],
    ukSyn: ["приємний"],
    ruAnt: ["некрасивый", "уродливый"],
    ukAnt: ["негарний"],
    examples: [
      {
        L2: "Die Stadt ist sehr schön.",
        ru: "Город очень красивый.",
        uk: "Місто дуже гарне."
      }
    ]
  },
  {
    id: 6,
    word: "schlecht",
    ru: "плохой",
    uk: "поганий",
    level: "A1",
    topics: ["description"],
    ruSyn: ["нехороший"],
    ukSyn: ["негарний"],
    ruAnt: ["хороший"],
    ukAnt: ["добрий"],
    examples: [
      {
        L2: "Das Wetter ist schlecht.",
        ru: "Погода плохая.",
        uk: "Погода погана."
      }
    ]
  },
  {
    id: 7,
    word: "teuer",
    ru: "дорогой",
    uk: "дорогий",
    level: "A2",
    topics: ["money"],
    ruSyn: ["недешёвый"],
    ukSyn: ["недешевий"],
    ruAnt: ["дешёвый"],
    ukAnt: ["дешевий"],
    examples: [
      {
        L2: "Das Kleid ist sehr teuer.",
        ru: "Платье очень дорогое.",
        uk: "Сукня дуже дорога."
      }
    ]
  },
  {
    id: 8,
    word: "billig",
    ru: "дешёвый",
    uk: "дешевий",
    level: "A1",
    topics: ["money"],
    ruSyn: ["недорогой"],
    ukSyn: ["недорогий"],
    ruAnt: ["дорогой"],
    ukAnt: ["дорогий"],
    examples: [
      {
        L2: "Das Essen ist hier billig.",
        ru: "Еда здесь дешёвая.",
        uk: "Їжа тут дешева."
      }
    ]
  }
];

/* ==================== ADVERBS: de_adverbs ==================== */

window.decks.de_adverbs = [
  {
    id: 1,
    word: "heute",
    ru: "сегодня",
    uk: "сьогодні",
    level: "A1",
    topics: ["time"],
    ruAnt: ["вчера", "завтра"],
    ukAnt: ["вчора", "завтра"],
    examples: [
      {
        L2: "Ich arbeite heute nicht.",
        ru: "Я сегодня не работаю.",
        uk: "Я сьогодні не працюю."
      }
    ]
  },
  {
    id: 2,
    word: "immer",
    ru: "всегда",
    uk: "завжди",
    level: "A1",
    topics: ["frequency"],
    ruSyn: ["постоянно"],
    ukSyn: ["постійно"],
    ruAnt: ["никогда"],
    ukAnt: ["ніколи"],
    examples: [
      {
        L2: "Er kommt immer zu spät.",
        ru: "Он всегда приходит поздно.",
        uk: "Він завжди приходить пізно."
      }
    ]
  },
  {
    id: 3,
    word: "nie",
    ru: "никогда",
    uk: "ніколи",
    level: "A1",
    topics: ["frequency"],
    ruAnt: ["всегда"],
    ukAnt: ["завжди"],
    examples: [
      {
        L2: "Ich trinke nie Alkohol.",
        ru: "Я никогда не пью алкоголь.",
        uk: "Я ніколи не п’ю алкоголь."
      }
    ]
  },
  {
    id: 4,
    word: "oft",
    ru: "часто",
    uk: "часто",
    level: "A1",
    topics: ["frequency"],
    ruSyn: ["зачастую"],
    ruAnt: ["редко"],
    ukAnt: ["рідко"],
    examples: [
      {
        L2: "Wir sehen uns oft.",
        ru: "Мы часто видимся.",
        uk: "Ми часто бачимося."
      }
    ]
  },
  {
    id: 5,
    word: "schnell",
    ru: "быстро",
    uk: "швидко",
    level: "A1",
    topics: ["manner"],
    ruSyn: ["проворно"],
    ukSyn: ["прудко"],
    ruAnt: ["медленно"],
    ukAnt: ["повільно"],
    examples: [
      {
        L2: "Er läuft sehr schnell.",
        ru: "Он бегает очень быстро.",
        uk: "Він бігає дуже швидко."
      }
    ]
  },
  {
    id: 6,
    word: "langsam",
    ru: "медленно",
    uk: "повільно",
    level: "A1",
    topics: ["manner"],
    ruSyn: ["неторопливо"],
    ruAnt: ["быстро"],
    ukAnt: ["швидко"],
    examples: [
      {
        L2: "Bitte sprich langsam.",
        ru: "Пожалуйста, говори медленно.",
        uk: "Будь ласка, говори повільно."
      }
    ]
  },
  {
    id: 7,
    word: "hier",
    ru: "здесь",
    uk: "тут",
    level: "A1",
    topics: ["place"],
    ruAnt: ["там"],
    ukAnt: ["там"],
    examples: [
      {
        L2: "Ich wohne здесь.",
        ru: "Я живу здесь.",
        uk: "Я живу тут."
      }
    ]
  },
  {
    id: 8,
    word: "dort",
    ru: "там",
    uk: "там",
    level: "A1",
    topics: ["place"],
    ruAnt: ["здесь"],
    ukAnt: ["тут"],
    examples: [
      {
        L2: "Dort ist die Schule.",
        ru: "Там школа.",
        uk: "Там школа."
      }
    ]
  }
];

/* =================== PRONOUNS: de_pronouns =================== */

window.decks.de_pronouns = [
  {
    id: 1,
    word: "ich",
    ru: "я",
    uk: "я",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Ich bin müde.",
        ru: "Я устал.",
        uk: "Я втомився."
      }
    ]
  },
  {
    id: 2,
    word: "du",
    ru: "ты",
    uk: "ти",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Du bist mein Freund.",
        ru: "Ты мой друг.",
        uk: "Ти мій друг."
      }
    ]
  },
  {
    id: 3,
    word: "er",
    ru: "он",
    uk: "він",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Er arbeitet viel.",
        ru: "Он много работает.",
        uk: "Він багато працює."
      }
    ]
  },
  {
    id: 4,
    word: "sie",
    ru: "она",
    uk: "вона",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Sie lernt Deutsch.",
        ru: "Она учит немецкий.",
        uk: "Вона вчить німецьку."
      }
    ]
  },
  {
    id: 5,
    word: "wir",
    ru: "мы",
    uk: "ми",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Wir wohnen in Berlin.",
        ru: "Мы живём в Берлине.",
        uk: "Ми живемо в Берліні."
      }
    ]
  },
  {
    id: 6,
    word: "ihr",
    ru: "вы",
    uk: "ви",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Ihr seid schnell.",
        ru: "Вы быстрые.",
        uk: "Ви швидкі."
      }
    ]
  },
  {
    id: 7,
    word: "sie",
    ru: "они",
    uk: "вони",
    level: "A1",
    topics: ["pronouns"],
    examples: [
      {
        L2: "Sie kommen morgen.",
        ru: "Они придут завтра.",
        uk: "Вони прийдуть завтра."
      }
    ]
  },
  {
    id: 8,
    word: "Sie",
    ru: "Вы",
    ruNote: "вежливая форма",
    uk: "Ви",
    ukNote: "ввічлива форма",
    level: "A1",
    topics: ["pronouns", "politeness"],
    examples: [
      {
        L2: "Wie heißen Sie?",
        ru: "Как вас зовут?",
        uk: "Як вас звати?"
      }
    ]
  }
];

/* ================= PREPOSITIONS: de_prepositions ================= */

window.decks.de_prepositions = [
  {
    id: 1,
    word: "in",
    ru: "в",
    uk: "в",
    level: "A1",
    topics: ["place"],
    ruSyn: ["внутри"],
    ukSyn: ["усередині"],
    ruAnt: ["außerhalb"],
    ukAnt: ["поза"],
    examples: [
      {
        L2: "Ich bin in der Schule.",
        ru: "Я в школе.",
        uk: "Я в школі."
      }
    ]
  },
  {
    id: 2,
    word: "auf",
    ru: "на",
    uk: "на",
    level: "A1",
    topics: ["place"],
    examples: [
      {
        L2: "Das Buch liegt auf dem Tisch.",
        ru: "Книга лежит на столе.",
        uk: "Книга лежить на столі."
      }
    ]
  },
  {
    id: 3,
    word: "unter",
    ru: "под",
    uk: "під",
    level: "A1",
    topics: ["place"],
    ruAnt: ["über"],
    ukAnt: ["над"],
    examples: [
      {
        L2: "Die Katze sitzt unter dem Tisch.",
        ru: "Кошка сидит под столом.",
        uk: "Кішка сидить під столом."
      }
    ]
  },
  {
    id: 4,
    word: "über",
    ru: "над",
    uk: "над",
    level: "A1",
    topics: ["place"],
    ruAnt: ["unter"],
    ukAnt: ["під"],
    examples: [
      {
        L2: "Die Lampe hängt über dem Tisch.",
        ru: "Лампа висит над столом.",
        uk: "Лампа висить над столом."
      }
    ]
  },
  {
    id: 5,
    word: "vor",
    ru: "перед",
    uk: "перед",
    level: "A1",
    topics: ["place", "time"],
    ruAnt: ["hinter"],
    ukAnt: ["позаду"],
    examples: [
      {
        L2: "Er wartet vor dem Haus.",
        ru: "Он ждёт перед домом.",
        uk: "Він чекає перед будинком."
      }
    ]
  },
  {
    id: 6,
    word: "hinter",
    ru: "за",
    uk: "за",
    level: "A1",
    topics: ["place"],
    ruSyn: ["позади"],
    ukSyn: ["позаду"],
    ruAnt: ["vor"],
    ukAnt: ["перед"],
    examples: [
      {
        L2: "Der Garten ist hinter dem Haus.",
        ru: "Сад находится за домом.",
        uk: "Сад знаходиться за будинком."
      }
    ]
  },
  {
    id: 7,
    word: "neben",
    ru: "рядом",
    uk: "поруч",
    level: "A1",
    topics: ["place"],
    ruSyn: ["возле", "рядом с"],
    ukSyn: ["біля", "поруч з"],
    examples: [
      {
        L2: "Sie sitzt neben mir.",
        ru: "Она сидит рядом со мной.",
        uk: "Вона сидить поруч зі мною."
      }
    ]
  },
  {
    id: 8,
    word: "zwischen",
    ru: "между",
    uk: "між",
    level: "A2",
    topics: ["place"],
    examples: [
      {
        L2: "Das Kino liegt zwischen der Bank und der Schule.",
        ru: "Кино находится между банком и школой.",
        uk: "Кінотеатр розташований між банком і школою."
      }
    ]
  }
];

/* ================== NUMBERS: de_numbers ================== */

window.decks.de_numbers = [
  {
    id: 1,
    word: "eins",
    ru: "один",
    uk: "один",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Ich habe nur eins.",
        ru: "У меня есть только один.",
        uk: "У мене є лише один."
      }
    ]
  },
  {
    id: 2,
    word: "zwei",
    ru: "два",
    uk: "два",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Wir sind zwei Personen.",
        ru: "Нас двое.",
        uk: "Нас двоє."
      }
    ]
  },
  {
    id: 3,
    word: "drei",
    ru: "три",
    uk: "три",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Sie hat drei Kinder.",
        ru: "У неё трое детей.",
        uk: "У неї троє дітей."
      }
    ]
  },
  {
    id: 4,
    word: "vier",
    ru: "четыре",
    uk: "чотири",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Das Zimmer hat vier Fenster.",
        ru: "В комнате четыре окна.",
        uk: "У кімнаті чотири вікна."
      }
    ]
  },
  {
    id: 5,
    word: "fünf",
    ru: "пять",
    uk: "п’ять",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Der Kurs beginnt um fünf.",
        ru: "Курс начинается в пять.",
        uk: "Курс починається о п’ятій."
      }
    ]
  },
  {
    id: 6,
    word: "sechs",
    ru: "шесть",
    uk: "шість",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Wir treffen uns um sechs Uhr.",
        ru: "Мы встречаемся в шесть часов.",
        uk: "Ми зустрічаємось о шостій."
      }
    ]
  },
  {
    id: 7,
    word: "sieben",
    ru: "семь",
    uk: "сім",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Der Bus fährt um sieben.",
        ru: "Автобус отправляется в семь.",
        uk: "Автобус відправляється о сьомій."
      }
    ]
  },
  {
    id: 8,
    word: "acht",
    ru: "восемь",
    uk: "вісім",
    level: "A1",
    topics: ["numbers"],
    examples: [
      {
        L2: "Die Schule beginnt um acht.",
        ru: "Школа начинается в восемь.",
        uk: "Школа починається о восьмій."
      }
    ]
  }
];

/* =============== CONJUNCTIONS: de_conjunctions =============== */

window.decks.de_conjunctions = [
  {
    id: 1,
    word: "und",
    ru: "и",
    uk: "і",
    level: "A1",
    topics: ["grammar"],
    examples: [
      {
        L2: "Ich habe einen Bruder und eine Schwester.",
        ru: "У меня есть брат и сестра.",
        uk: "У мене є брат і сестра."
      }
    ]
  },
  {
    id: 2,
    word: "oder",
    ru: "или",
    uk: "або",
    level: "A1",
    topics: ["grammar"],
    examples: [
      {
        L2: "Möchtest du Tee oder Kaffee?",
        ru: "Ты хочешь чай или кофе?",
        uk: "Ти хочеш чай чи каву?"
      }
    ]
  },
  {
    id: 3,
    word: "aber",
    ru: "но",
    uk: "але",
    level: "A1",
    topics: ["grammar"],
    ruSyn: ["однако"],
    ukSyn: ["однак"],
    examples: [
      {
        L2: "Es ist kalt, aber schön.",
        ru: "Холодно, но красиво.",
        uk: "Холодно, але гарно."
      }
    ]
  },
  {
    id: 4,
    word: "weil",
    ru: "потому что",
    uk: "тому що",
    level: "A2",
    topics: ["grammar"],
    examples: [
      {
        L2: "Ich bleibe zu Hause, weil ich krank bin.",
        ru: "Я остаюсь дома, потому что я болен.",
        uk: "Я залишаюся вдома, тому що я хворий."
      }
    ]
  },
  {
    id: 5,
    word: "dass",
    ru: "что",
    ruNote: "союз",
    uk: "що",
    ukNote: "сполучник",
    level: "A2",
    topics: ["grammar"],
    examples: [
      {
        L2: "Ich weiß, dass du müde bist.",
        ru: "Я знаю, что ты устал.",
        uk: "Я знаю, що ти втомився."
      }
    ]
  },
  {
    id: 6,
    word: "wenn",
    ru: "если",
    ruSyn: ["когда"],
    uk: "якщо",
    ukSyn: ["коли"],
    level: "A2",
    topics: ["grammar"],
    examples: [
      {
        L2: "Ruf mich an, wenn du Zeit hast.",
        ru: "Позвони мне, когда у тебя будет время.",
        uk: "Подзвони мені, коли матимеш час."
      }
    ]
  },
  {
    id: 7,
    word: "obwohl",
    ru: "хотя",
    uk: "хоча",
    level: "B1",
    topics: ["grammar"],
    examples: [
      {
        L2: "Er geht spazieren, obwohl es regnet.",
        ru: "Он идёт гулять, хотя идёт дождь.",
        uk: "Він йде гуляти, хоча йде дощ."
      }
    ]
  },
  {
    id: 8,
    word: "denn",
    ru: "ведь",
    ruNote: "союз, выражает причину / объяснение",
    uk: "бо",
    ukNote: "сполучник, пояснює причину",
    level: "A2",
    topics: ["grammar"],
    examples: [
      {
        L2: "Ich gehe früh ins Bett, denn ich bin müde.",
        ru: "Я рано ложусь спать, ведь я устал.",
        uk: "Я рано лягаю спати, бо я втомився."
      }
    ]
  }
];

/* =============== PARTICLES: de_particles =============== */

window.decks.de_particles = [
  {
    id: 1,
    word: "ja",
    ru: "же",
    ruNote: "частица: удивление / подтверждение, подчёркивание очевидного",
    uk: "же",
    ukNote: "частка: здивування / підтвердження, підкреслює очевидне",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Das weißt du ja!",
        ru: "Ты же это знаешь!",
        uk: "Ти ж це знаєш!"
      }
    ]
  },
  {
    id: 2,
    word: "doch",
    ru: "же",
    ruNote: "частица: возражение, исправление ожиданий, «всё-таки»",
    uk: "же",
    ukNote: "частка: заперечення, виправляє очікування, «все ж»",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Komm doch mit!",
        ru: "Пойдём же с нами!",
        uk: "Пішли ж з нами!"
      }
    ]
  },
  {
    id: 3,
    word: "mal",
    ru: "-ка",
    ruNote: "частица мягкого побуждения: «посмотри-ка», «дай-ка»",
    uk: "-но",
    ukNote: "частка м’якого спонукання: «подивись-но», «дай-но»",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Schau mal!",
        ru: "Посмотри-ка!",
        uk: "Подивись-но!"
      }
    ]
  },
  {
    id: 4,
    word: "eben",
    ru: "просто",
    ruNote: "частица: смирение с фактом, «так уж есть»",
    uk: "просто",
    ukNote: "частка: примирення з фактом, «так уже є»",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Das ist eben so.",
        ru: "Это просто так.",
        uk: "Це просто так."
      }
    ]
  },
  {
    id: 5,
    word: "schon",
    ru: "уже",
    ruNote: "частица-успокоение: «всё будет нормально»",
    uk: "вже",
    ukNote: "частка-заспокоєння: «все буде добре»",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Das wird schon.",
        ru: "Всё будет хорошо.",
        uk: "Все буде добре."
      }
    ]
  },
  {
    id: 6,
    word: "nur",
    ru: "только",
    ruNote: "частица-предупреждение: «только не…»",
    uk: "лише",
    ukNote: "частка-застереження: «тільки не…»",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Mach das nur nicht!",
        ru: "Только не делай этого!",
        uk: "Тільки цього не роби!"
      }
    ]
  },
  {
    id: 7,
    word: "halt",
    ru: "просто",
    ruNote: "частица: смирение / «ну, значит так»",
    uk: "просто",
    ukNote: "частка: примирення / «ну, значить так»",
    level: "B1",
    topics: ["particles"],
    examples: [
      {
        L2: "Dann ist es halt so.",
        ru: "Ну значит, так оно и есть.",
        uk: "Ну значить, так воно й є."
      }
    ]
  },
  {
    id: 8,
    word: "wohl",
    ru: "вероятно",
    uk: "ймовірно",
    level: "B1",
    topics: ["particles"],
    ruSyn: ["скорее всего"],
    ukSyn: ["швидше за все"],
    examples: [
      {
        L2: "Er kommt wohl später.",
        ru: "Он, вероятно, придёт позже.",
        uk: "Він, ймовірно, прийде пізніше."
      }
    ]
  }
];
