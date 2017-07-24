let _eduResult = [
  {
    id: 1,
    position: "PSR",
    route: "PS101",
    employee: "Иванов",
    dateOfAdoption: "01.01.2017",
    lifeTime: "6 мес",
    attestation: {
      id: 1,
      dateOfLastAttestation: "01.02.2017",
      categoryGoal: "B",
      minGoal: 3.2,
      mark: 3.5,
      categoryFact: "B"
    },
    themes: [
      {
        id: 1,
        description: "Тема 1",
        date: "15.01.2017",
        goals: 3.6,
        value: 2.6
      },
      {
        id: 2,
        description: "Тема 2",
        date: "15.02.2017",
        goals: 3.6,
        value: 2.6
      },
      {
        id: 3,
        description: "Тема 3",
        date: "15.03.2017",
        goals: 3.6,
        value: 2.6
      }
    ]
  },
  {
    id: 2,
    position: "PSR",
    route: "PS102",
    employee: "Петров",
    dateOfAdoption: "02.05.2017",
    lifeTime: "1 мес",
    attestation: {
      id: 2,
      dateOfLastAttestation: "Не аттестован",
      categoryGoal: "B",
      minGoal: 3.2,
      mark: 3.1,
      categoryFact: "B-"
    },
    themes: [
      {
        id: 4,
        description: "Тема 1",
        date: "15.05.2017",
        goals: 3.6,
        value: 3.6
      },
      {
        id: 5,
        description: "Тема 2",
        date: "25.01.2017",
        goals: 3.6,
        value: 4.6
      },
      {
        id: 6,
        description: "Тема 3",
        date: "25.02.2017",
        goals: 3.6,
        value: 2.6
      }
    ]
  },
  {
    id: 3,
    position: "DAM",
    route: "PS103",
    employee: "Сидоров",
    dateOfAdoption: "03.01.2016",
    lifeTime: "1 год 3 мес",
    attestation: {
      id: 3,
      dateOfLastAttestation: "01.03.2017",
      categoryGoal: "B",
      minGoal: 3.5,
      mark: 3.6,
      categoryFact: "A"
    },
    themes: [
      {
        id: 7,
        description: "Тема 1",
        date: "25.03.2017",
        goals: 3.6,
        value: 2.6
      },
      {
        id: 8,
        description: "Тема 2",
        date: "14.07.2017",
        goals: 3.6,
        value: 2.6
      },
      {
        id: 9,
        description: "Тема 3",
        date: "18.06.2017",
        goals: 3.6,
        value: 2.6
      }
    ]
  },
];

export const eduResultMock = _eduResult;