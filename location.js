document.addEventListener("DOMContentLoaded", function () {
  updateRestaurantStatus();
  setInterval(updateRestaurantStatus, 1000 * 60); // Update every minute
});

function updateRestaurantStatus() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  const isOpen = checkIfOpen(dayOfWeek, currentHour);

  const statusMessage = document.getElementById("statusMessage");
  const restaurantHours = document.getElementById("restaurantHours");

  if (isOpen) {
    statusMessage.textContent = "Open Now";
    statusMessage.classList.add("open");

    statusMessage.classList.remove("closed");
  } else {
    statusMessage.textContent = "Closed Now";
    statusMessage.classList.add("closed");
    statusMessage.classList.remove("open");
  }

  // Highlight open hours dynamically
  const hoursList = document.getElementById("hoursList");
  const currentDay = document.getElementById(getDayId(dayOfWeek));
  const allDays = hoursList.getElementsByTagName("li");

  Array.from(allDays).forEach((day) => {
    day.classList.remove("open-hour");
  });

  if (isOpen) {
    currentDay.classList.add("highlight");
  }
}

function checkIfOpen(dayOfWeek, currentHour) {
  // Define your restaurant hours here
  const openingHours = {
    1: { start: 11, end: 21 }, // Monday
    2: { start: 11, end: 21 }, // Tuesday
    3: { start: 11, end: 21 }, // Wednesday
    4: { start: 11, end: 21 }, // Thursday
    5: { start: 11, end: 21 }, // Friday
    6: { start: 11, end: 21 }, // Saturday
    0: { start: 11, end: 21 }, // Sunday
  };

  if (openingHours[dayOfWeek]) {
    return (
      currentHour >= openingHours[dayOfWeek].start &&
      currentHour < openingHours[dayOfWeek].end
    );
  }

  return false;
}

function getDayId(dayOfWeek) {
  // Map day of week to corresponding ID
  const dayIdMap = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  };

  return dayIdMap[dayOfWeek];
}
