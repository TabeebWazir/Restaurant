const container = document.querySelector(".container");

for (let i = 1; i < 50; i++) {
  container.innerHTML += `<img src="./images/${i}.jpg">`;
}

function scrollProjects(direction) {
  const scrollAmount = container.children[0].offsetWidth + 20;

  container.scrollLeft += direction * scrollAmount;
}

const boxRatings = document.querySelector(".box-ratings");

const users = [
  {
    name: "Aida C",
    stars: checkedStars(5),
    date: "12/12/23",
    review:
      "So Impressed! The menu pics dont look  great But the food is so delicious! I purchased because it was the last restaurant opened that sell Mashawi Plate and I am so happy This happened! My New Go Too place",
  },
  {
    name: "Brenda O",
    stars: checkedStars(4),
    date: "11/11/23",
    review:
      "I live close by this place and have been waiting to try it. It was really good. Omg.. The homemade pita bread was amazing. They should package it and sell it. I would definitely buy it. It is so soft. The place was very clean, it's small but they have tables so you have the choice to dine in or take out. We chose to dine in. We started with the Chicken Alfredo Manakeesh and Lahmajeen Manakeesh. The chicken Alfredo one was good but I didn't like the Lahmajeen Manakeesh. It seemed like it was just a sofrito ( red and green bell peppers with garlic and onion) mixture and no meat which it was suppose to have and there was no seasoning on it. We also got grilled chicken plate, which came with a Greek salad and hummus. My daughter doesn't like hummus so they were very accommodating and let her substitute it for rice. This was good, the chicken was delicious, it was seasoned so well. The tahini sauce was very flavorful. It was a large portion size. My daughter couldn't finish it. I got the chicken pita and this was sooooooo good. It has very well seasoned chicken, lettuce, tomatoes, pickles and garlic sauce. Their garlic sauce was so delicious and with the homemade pita bread. Yummy They gave us a basket of the pita bread and we were dipping it in the garlic sauce. Really good.. If you haven't tried this place yet you have to check them out. You may have to wait because they make everything fresh but it is so worth it.",
  },
  {
    name: "Amy B",
    stars: checkedStars(5),
    date: "12/22/23",
    review:
      "A small restaurant in a strip mall, you would never expect amazing food! Stopped in for lunch yesterday and was pleasantly surprised! The food is delicious, portions generous, and the customer service is friendly! I ordered the chicken shawarma pita, falafel pita, and tabouli. Everything was fresh, and the seasonings were so good! The prices were very reasonable. I am glad to see Greece have more dining options than another pizza or burger joint. Stop in and give them a try!",
  },
  {
    name: "Philip P",
    stars: checkedStars(5),
    date: "11/30/23",
    review:
      "This place is amazing. Their pitas are incredible. They make the bread right there behind the counter. Everything we tried there was fresh and delicious. I highly recommend.",
  },
  {
    name: "Jon C",
    stars: checkedStars(4),
    date: "11/26/23",
    review:
      "Amazing food, the pitas had so much meat in there, it's basically a whole large meal in itself and for a great price.  It was made fast and was very delicious, can't wait to try more stuff.  The chicken and beef pitas had just the right amount of veggies and a ton of meats, it's basically a platter.",
  },
  {
    name: "Jon C",
    stars: checkedStars(4),
    date: "11/26/23",
    review:
      "Amazing food, the pitas had so much meat in there, it's basically a whole large meal in itself and for a great price.  It was made fast and was very delicious, can't wait to try more stuff.  The chicken and beef pitas had just the right amount of veggies and a ton of meats, it's basically a platter.",
  },
];

function sortUsersByDateNewest(users) {
  return users.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });
}

function sortUsersByDateOldest(users) {
  return users.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });
}

let sortedUsers = sortUsersByDateNewest(users);
displaySortedUsers();

const newDate = document.querySelector(".new-date");
const oldDate = document.querySelector(".old-date");

newDate.addEventListener("click", () => {
  sortedUsers = sortUsersByDateNewest(users);
  displaySortedUsers();
});

oldDate.addEventListener("click", () => {
  sortedUsers = sortUsersByDateOldest(users);
  displaySortedUsers();
});

function displaySortedUsers() {
  // Clear the existing content
  boxRatings.innerHTML = "";

  // Display the sorted users
  sortedUsers.map((user) => {
    boxRatings.innerHTML += `
        <div class="inner">
            <div class="profile-image"><img src="./images/profile.jpg"></div>
            <h3>${user.name}</h3>
            <div class="stars">
                ${user.stars}
                <span>${user.date}</span>
            </div>
            <div>
                <p>${user.review}</p>
            </div>
        </div>
        `;
  });
}

function checkedStars(num) {
  let starHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      starHTML += `<span class="fa fa-star checked"></span>`;
    } else {
      starHTML += `<span class="fa fa-star"></span>`;
    }
  }
  return starHTML;
}

const hbox = document.querySelector(".hours");
hbox.textContent = `Hello`;
