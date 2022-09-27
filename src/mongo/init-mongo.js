db = db.getSiblingDB('ChronosDB')
db.createCollection('workouts')
db.createCollection('users')
db.createCollection('advices')

// db.users.insertMany([
//   {
//     name: 'Antonio',
//     email: 'antonio@gmail.com'
//   },
//   {
//     name: 'John',
//     email: 'john@gmail.com'
//   },
//   {
//     name: 'John Doe',
//     email: 'johndoe@gmail.com'
//   }
// ])

db.workouts.insertMany([
  {
    name: 'Jumping (Not) Made Easy',
    mode: 'AMRAP 12',
    equipment: [
      'jump rope'
    ],
    exercises: [
      '10 burpees',
      '25 double-unders'
    ],
    trainerTips: [
      'Scale to do 50 single-unders, if double-unders are too difficult'
    ],
    _id: '8f8318f8-b869-4e9d-bb78-88010193563a',
    createdAt: '4/25/2022, 2:45:28 PM',
    updatedAt: '4/25/2022, 2:45:28 PM'
  },
  {
    name: 'Burpee Meters',
    mode: '3 Rounds For Time',
    equipment: [
      'Row Erg'
    ],
    exercises: [
      'Row 500 meters',
      '21 burpees',
      'Run 400 meters',
      'Rest 3 minutes'
    ],
    trainerTips: [
      'Go hard',
      'Note your time after the first run',
      'Try to hold your pace'
    ],
    _id: '0a5948af-5185-4266-8c4b-818889657e9d',
    createdAt: '4/25/2022, 2:48:53 PM',
    updatedAt: '4/25/2022, 2:48:53 PM'
  },
  {
    name: 'Dumbbell Rower',
    mode: 'AMRAP 15',
    equipment: [
      'Dumbbell'
    ],
    exercises: [
      '15 dumbbell rows, left arm',
      '15 dumbbell rows, right arm',
      '50-ft handstand walk'
    ],
    trainerTips: [
      'RX weights for women: 35-lb',
      'RX weights for men: 50-lb'
    ],
    _id: '3dc53bc8-27b8-4773-b85d-89f0a354d437',
    createdAt: '4/25/2022, 2:56:03 PM',
    updatedAt: '4/25/2022, 2:56:03 PM'
  },
  {
    _id: '61dbae02-c147-4e28-863c-db7bd402b2d6',
    name: 'Tommy V',
    mode: 'For Time',
    equipment: [
      'barbell',
      'rope'
    ],
    exercises: [
      '21 thrusters',
      '12 rope climbs, 15 ft',
      '15 thrusters',
      '9 rope climbs, 15 ft',
      '9 thrusters',
      '6 rope climbs, 15 ft'
    ],
    createdAt: '4/20/2022, 2:21:56 PM',
    updatedAt: '4/20/2022, 2:21:56 PM',
    trainerTips: [
      'Split the 21 thrusters as needed',
      'Try to do the 9 and 6 thrusters unbroken',
      'RX Weights: 115lb/75lb'
    ]
  },
  {
    _id: '4a3d9aaa-608c-49a7-a004-66305ad4ab50',
    name: 'Dead Push-Ups',
    mode: 'AMRAP 10',
    equipment: [
      'barbell'
    ],
    exercises: [
      '15 deadlifts',
      '15 hand-release push-ups'
    ],
    createdAt: '1/25/2022, 1:15:44 PM',
    updatedAt: '3/10/2022, 8:21:56 AM',
    trainerTips: [
      'Deadlifts are meant to be light and fast',
      'Try to aim for unbroken sets',
      'RX Weights: 135lb/95lb'
    ]
  },
  {
    _id: 'd8be2362-7b68-4ea4-a1f6-03f8bc4eede7',
    name: 'Heavy DT',
    mode: '5 Rounds For Time',
    equipment: [
      'barbell',
      'rope'
    ],
    exercises: [
      '12 deadlifts',
      '9 hang power cleans',
      '6 push jerks'
    ],
    createdAt: '11/20/2021, 5:39:07 PM',
    updatedAt: '4/22/2022, 5:49:18 PM',
    trainerTips: [
      'Aim for unbroken push jerks',
      'The first three rounds might feel terrible, but stick to it',
      'RX Weights: 205lb/145lb'
    ]
  },
  {
    name: 'Core Buster',
    mode: 'AMRAP 20',
    equipment: [
      'rack',
      'barbell',
      'abmat'
    ],
    exercises: [
      '15 toes to bars',
      '10 thrusters',
      '30 abmat sit-ups'
    ],
    trainerTips: [
      'Split your toes to bars in two sets maximum',
      'Go unbroken on the thrusters',
      'Take the abmat sit-ups as a chance to normalize your breath'
    ],
    _id: 'a24d2618-01d1-4682-9288-8de1343e53c7',
    createdAt: '4/22/2022, 5:50:17 PM',
    updatedAt: '4/22/2022, 5:50:17 PM'
  }
])

// db.advices.insertMany([
//   {
//     title: 'Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitte Los Círculos de Twitter ya se pueden usar: el concepto de mejores amigos de Instagram se traslada a Twitter',
//     description: 'Twitter habilita su función Círculos, y te contamos cómo usarla',
//     date: '2022-09-01T18:39:34.091Z',
//     content: 'En este momento, Twitter está realizando las tareas de expansión de esta nueva funcionalidad a todas las cuentas. Esto quiere decir que de momento al entrar en la red social puede que no veas esta funcionalidad, aunque como mucho en unos pocos días estará plenamente disponible en iOS, Android y la versión web.',
//     author: '@JoseAlberto1813',
//     archiveDate: null
//   },
//   {
//     title: 'Apple busca 40 trabajadores en España para integrar su equipo de inteligencia artificial, el mayor de Europa',
//     description: 'Estas ofertas de Apple no incluyen información salarial ni sobre la modalidad de trabajo (presencial o remota), si bien Apple está manteniendo en general una clara política de retorno a las oficinas',
//     date: '2022-09-02T18:39:34.091Z',
//     content: 'En 2021, la plantilla de Apple España aumentó un 20%, pasando a superar los 2000 empleados. Necesitados de espacio para los nuevos empleados y los que pensaba sumar en 2022, la compañía decidió el pasado mes de diciembre Apple inaugurar unas nuevas oficinas en el céntrico Paseo de Gracia de Barcelona, justo enfrente de la enorme Apple Store situada en la esquina con la Plaza Cataluña. Dichas oficinas iban a albergar al equipo de AIML (Artificial Intelligence & Machine Learning) de Apple, cuyo personal creció el año pasado por encima de la media de la compañía (un 50%), hasta convertirse en el mayor grupo de profesionales de la IA de toda Europa occidental y, aun así, tiene ahora abiertas 30 vacantes en Barcelona para reforzarlo con nuevos ingenieros. La compañía busca, además, cubrir otras 10 vacantes en Madrid relacionadas también con el AIML.',
//     author: '@AntonioSaban',
//     archiveDate: null
//   },
//   {
//     title: 'Photoshop, GIMP, Blender… ahora nos permiten generar imágenes a partir de texto gracias a estos plugins de la IA Stable Diffusion',
//     description: 'Al ser open source, se facilita la integración con otras herramientas.',
//     date: '2022-05-29T18:39:34.091Z',
//     content: 'Hemos hablado largo y tendido sobre DALL-E 2, la asombrosa inteligencia artificial generadora de imágenes, en estos últimos meses. Y sin duda, hablaremos más de ella en el futuro. Pero empiezan a salirle competidores de debajo de las piedras, competidores muy prometedores (como Midjourney), y también competidores que, además de ser prometedores, cuentan con una ventaja que multiplica su potencial hablamos, por ejemplo, de Stable Diffusion, la alternativa libre a DALL-E 2 que, gracias a la condición abierta de su código y del propio modelo entrenado mediante machine learning, puede ser adaptado, personalizado e integrado con otras herramientas hasta el infinito.',
//     author: '@MarcosMerino_B',
//     archiveDate: '2022-05-12T12:39:34.091Z'
//   }
// ])
