let _events = [
  {
    id: 1,
    type: {
      id: 2,
      description: 'store-check'
    },
    route: {
      id: 213,
      isActive: true,
      code: "00000000891",
      description: "PS108"
    },
    staff: {
      id: 1,
      description: 'Стив Маркелов'
    },
    dp: {
      id: 1,
      description: 'ИП Галицкий'
    },
    dateOfStart: '07.04.2017'
  },
  {
    id: 2,
    type: {
      id: 1,
      description: 'Обучение'
    },
    route: {
      id: 214,
      isActive: true,
      code: "00000000828",
      description: "PS101"
    },
    staff: {
      id: 2,
      description: 'Алиса Сергеева'
    },
    dp: {
      id: 2,
      description: 'ООО Гугл'
    },
    dateOfStart: '07.05.2017'
  },
  {
    id: 3,
    type: {
      id: 1,
      description: 'Обучение'
    },
    route: {
      id: 214,
      isActive: true,
      code: "00000000828",
      description: "PS101"
    },
    staff: {
      id: 2,
      description: 'Константин Мусикин'
    },
    dp: {
      id: 2,
      description: 'ООО Гугл'
    },
    dateOfStart: '07.15.2017'
  },
  {
    id: 4,
    type: {
      id: 2,
      description: 'store-check'
    },
    route: {
      id: 215,
      isActive: true,
      code: "00000000831",
      description: "PS106"
    },
    staff: {
      id: 2,
      description: 'Линус Каферов'
    },
    dp: {
      id: 2,
      description: 'ООО Оконные изделия Windows'
    },
    dateOfStart: '07.15.2017'
  }
];

export const eventsMock = _events;