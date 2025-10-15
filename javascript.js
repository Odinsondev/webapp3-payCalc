//cache DOM
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

const hoursPerDay = 11;
const payRate = 44.58;
const regularHoursPremium = 2.15;
const eveningPay = 1.4;
const nightPay = 5;
const weekend = 3.5;

//bind events
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
    (days.value +
      nights.value +
      weekendDays.value +
      weekendNights.value +
      stats.value +
      superstats.value +
      sick.value +
      leave.value) *
    hoursPerDay;

  const hoursTimesPay = hours * payRate;

  const premium =
    (days.value +
      nights.value +
      weekendDays.value +
      weekendNights.value +
      stats.value +
      superstats.value) *
    regularHoursPremium;

  const statPT = hoursTimesPay * 0.05;

  const weekendPay = '';
  const eveningPay = '';
  const nightPay = '';
  const statPay = '';
  const superstatPay = '';

  const totalGross = '';
}
