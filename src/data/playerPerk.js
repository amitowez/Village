export default [
  {
    perkId: 0,
    name: 'Отдых',
    value: 5,
    staminaPrice: 0,
    successLog: 'отдыхает и востанавливает выносливость',
  },
  {
    perkId: 1,
    name: 'Удар',
    value: 0,
    chanceToHit: 60,
    staminaPrice: 1,
    missingLog: 'не попадает',
    successLog: 'попадает по противнику и наносит ',
    critSuccessLog: 'попадает в уязвимое место и наносит ',
  },
  {
    perkId: 2,
    name: 'Мощный удар',
    value: 10,
    chanceToHit: 55,
    staminaPrice: 10,
    missingLog: 'не попадает',
    successLog: 'вкладывает всю силу в удар и наносит ',
    critSuccessLog: 'вкладывает всю силу в удар и попадает в уязвимое место нанося ',
  },
  {
    perkId: 3,
    name: 'Прицельный удар',
    value: -5,
    chanceToHit: 80,
    staminaPrice: 10,
    missingLog: 'не попадает',
    successLog: 'ударив прицельно наносит ',
    critSuccessLog: 'прицельно ударив в уязвимое место наносит ',
  },
];
