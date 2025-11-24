//cache DOM
const root = document.documentElement;
const wrapper = document.getElementById('wrapper');
const colorButton = document.getElementById('color-button');
let color = 1;

const days = document.getElementById('days');
const nights = document.getElementById('nights');
const weekendDays = document.getElementById('weekend-days');
const weekendNights = document.getElementById('weekend-nights');
const stats = document.getElementById('stats');
const superstats = document.getElementById('superstats');
const statsOff = document.getElementById('stats-off');
const superstatsOff = document.getElementById('superstats-off');
const sick = document.getElementById('sick');
const leave = document.getElementById('leave');
let net = document.getElementById('net');

const hoursPerDay = 11;
const payRate = 44.58;
const regularHoursPremium = 2.15;
const eveningPayRate = 1.4;
const nightPayRate = 5;
const weekend = 3.5;

//taxes
const percentageOfGrossTaxable = 0.886;
const citCoefficient = 0.00006;
const cppPercent = 0.0634;
const eiPrecentage = 0.0185;

//deductions
const unDuesPercentage = 0.019;
const muncPenPercentage = 0.0861;

//bind events
colorButton.addEventListener('click', changeColor);

days.addEventListener('change', calculatePay);
nights.addEventListener('change', calculatePay);
weekendDays.addEventListener('change', calculatePay);
weekendNights.addEventListener('change', calculatePay);
stats.addEventListener('change', calculatePay);
superstats.addEventListener('change', calculatePay);
statsOff.addEventListener('change', calculatePay);
superstatsOff.addEventListener('change', calculatePay);
sick.addEventListener('change', calculatePay);
leave.addEventListener('change', calculatePay);

//functions
function calculatePay() {
  const hours =
    (Number(days.value) +
      Number(nights.value) +
      Number(weekendDays.value) +
      Number(weekendNights.value) +
      Number(stats.value) +
      Number(superstats.value) +
      Number(sick.value) +
      Number(leave.value)) *
    hoursPerDay;

  const hoursTimesPay = hours * payRate;

  const premium =
    (Number(days.value) +
      Number(nights.value) +
      Number(weekendDays.value) +
      Number(weekendNights.value) +
      Number(stats.value) +
      Number(superstats.value)) *
    hoursPerDay *
    regularHoursPremium;

  const statPT = hoursTimesPay * 0.05;

  const weekendPay =
    (Number(weekendDays.value) + Number(weekendNights.value)) *
    hoursPerDay *
    weekend;
  const eveningPay =
    ((Number(days.value) + Number(weekendDays.value)) * 3.5 +
      (Number(nights.value) + Number(weekendNights.value)) * 4) *
    eveningPayRate;
  const nightPay =
    (Number(nights.value) + Number(weekendNights.value)) * 8 * nightPayRate;
  const statExtraPay =
    Number(stats.value) * hoursPerDay * payRate +
    Number(stats.value) * hoursPerDay * regularHoursPremium +
    Number(statsOff.value) * hoursPerDay * payRate +
    Number(statsOff.value) * hoursPerDay * regularHoursPremium;
  const superstatExtraPay =
    Number(superstats.value) * 16.5 * payRate +
    Number(superstats.value) * 16.5 * regularHoursPremium +
    Number(superstatsOff.value) * hoursPerDay * payRate +
    Number(superstatsOff.value) * hoursPerDay * regularHoursPremium;

  const totalGross =
    hoursTimesPay +
    premium +
    statPT +
    weekendPay +
    eveningPay +
    nightPay +
    statExtraPay +
    superstatExtraPay;

  //taxes calc
  const taxableGross = totalGross * percentageOfGrossTaxable;

  const citPercent = taxableGross * citCoefficient;
  const cit = taxableGross * citPercent;
  const cpp = taxableGross * cppPercent;
  const ei = taxableGross * eiPrecentage;

  const totalTaxes = cit + cpp + ei;

  //additional deductions calc:
  const unDues = totalGross * unDuesPercentage;
  const muncPen = totalGross * muncPenPercentage;

  const totalDeductions = unDues + muncPen;

  //Net pay
  const netPay =
    Math.round((totalGross - totalTaxes - totalDeductions) * 100) / 100;

  net.textContent = 'Approximate pay: ' + netPay;
}

function changeColor() {
  if (color === 1) {
    color = 2;
  } else if (color === 2) {
    color = 1;
  }

  if (color === 1) {
    root.style.setProperty('--background1', 'rgb(115, 79, 150)');
    wrapper.style.backgroundColor = 'rgb(138, 107, 168)';
    container.style.backgroundColor = 'rgb(173, 141, 204)';
    pay.style.backgroundColor = 'rgb(173, 141, 204)';
  }

  if (color === 2) {
    root.style.setProperty('--background1', 'rgb(46, 111, 64)');
    wrapper.style.backgroundColor = 'rgb(65, 146, 88)';
    container.style.backgroundColor = 'rgb(84, 178, 111)';
    pay.style.backgroundColor = 'rgb(84, 178, 111)';
  }
}
