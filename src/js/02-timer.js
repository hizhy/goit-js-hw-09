// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const startButRef = document.querySelector('[data-start]');
startButRef.disabled = true;
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const intupRef = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      startButRef.disabled = false;
    }
  },
};

const dateToStart = flatpickr('#datetime-picker', options);

startButRef.addEventListener('click', onStartClick);

function onStartClick() {
  intupRef.addEventListener(
    'click',
    () => {
      clearInterval(intervalId);
      clearTimer();
    },
    { once: true }
  );
  const intervalId = setInterval(() => {
    const ms = dateToStart.selectedDates[0].getTime() - Date.now;
    if (
      dateToStart.selectedDates[0].getTime() / 1000 ===
      parseInt(Date.now() / 1000)
    ) {
      clearInterval(intervalId);
      window.alert('GOAL!!!');
      return;
    }
    countTimer(convertMs(ms));
  }, 1000);
}

function countTimer({ days, hours, minutes, seconds }) {
  daysRef.textContent = addLeadingZero(days);
  hoursRef.textContent = addLeadingZero(hours);
  minutesRef.textContent = addLeadingZero(minutes);
  secondsRef.textContent = addLeadingZero(seconds);
}

function clearTimer() {
  daysRef.textContent = '00';
  hoursRef.textContent = '00';
  minutesRef.textContent = '00';
  secondsRef.textContent = '00';
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
