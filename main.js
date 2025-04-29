// Header functionalities

window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-img");
  const offset = window.scrollY;
  bg.style.transform = `translateY(${offset * 0.5}px)`; // adjust 0.5 for more/less parallax
});


//This ensures that when the page is reloaded or navigated to again, it scrolls to the very top.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.querySelectorAll('.video-item').forEach(item => {
  item.addEventListener('click', function () {
    const videoId = this.getAttribute('data-video-id');

    if (videoId) {
      const mainIframe = document.querySelector('.video-main iframe');
      mainIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
  });
});


//===================================================================================================DETAILS PAGE=============================================================================================

const eventsData = [
  {
    id: 1,
    title: "NECK DEEP LIVE IN MANILA",
    date: "MAY 11, 2025",
    venue: "New Frontier Theater, Quezon City, Philippines",
    image: "pics/coming_4.webp",
    description: "British pop punk band Neck Deep is bringing their energetic live show to Manila! Known for their catchy hooks and emotional lyrics, the band will perform tracks from their latest album as well as fan favorites from their extensive catalog.",
    venueInfo: "New Frontier Theater is located in Quezon City, Philippines. The venue offers excellent acoustics and viewing angles for an optimal concert experience.",
    ticketTypes: [
      {
        type: "General Admission",
        description: "Standard entry",
        price: 2800,
        available: 124,
        benefits: ["General standing area access", "Access to merchandise booths"]
      },
      {
        type: "VIP",
        description: "Premium experience",
        price: 4500,
        available: 65,
        popular: true,
        benefits: ["Priority entry to venue", "Exclusive VIP viewing area", "Limited edition event poster"]
      },
      {
        type: "SVIP Package",
        description: "Ultimate fan experience",
        price: 6000,
        available: 28,
        benefits: ["All VIP benefits", "Meet & Greet with Neck Deep", "Photo opportunity with the band", "Signed merchandise package"]
      }
    ]
  },
  {
    id: 2,
    title: "STATE CHAMPS IN MANILA",
    date: "APRIL 11, 2025",
    venue: "Events Hall, SM Southmall, Las Piñas City, Philippines",
    image: "pics/coming_1.webp",
    description: "Pop punk sensations State Champs are coming to Manila for an explosive night of high-energy music! The New York-based band will be performing hits from their latest album along with fan favorites from their celebrated discography. Get ready for an unforgettable night of singalongs that will leave you wanting more.",
    venueInfo: "Events Hall at SM Southmall offers a comfortable indoor venue with great sound quality and visibility from all areas.",
    ticketTypes: [
      {
        type: "General Admission",
        description: "Standard entry",
        price: 2500,
        available: 200,
        benefits: ["General standing area access", "Access to merchandise booths"]
      },
      {
        type: "VIP Access",
        description: "Enhanced experience",
        price: 4800,
        available: 100,
        popular: true,
        benefits: ["Priority entry", "VIP viewing section", "Event poster"]
      },
      {
        type: "SVIP (Meet & Greet)",
        description: "Ultimate fan package",
        price: 6500,
        available: 30,
        benefits: ["All VIP benefits", "Meet & Greet session", "Signed merchandise", "Photo with the band"]
      }
    ]
  },
  {
    id: 3,
    title: "2025 LEE MINHO ASIA FANMEETING TOUR 'MINHOVERSE' IN MANILA",
    date: "APRIL 26, 2025",
    venue: "SM Mall of Asia Arena, Pasay City, Philippines",
    image: "pics/coming_2.webp",
    description: "Korean superstar Lee Minho is coming to Manila for his highly anticipated Asia fanmeeting tour! Don't miss this chance to see the beloved actor up close in an interactive fan event filled with games, performances, and special segments.",
    venueInfo: "SM Mall of Asia Arena is the premier arena for large events in Manila, with excellent facilities and a capacity of over 15,000 attendees.",
    ticketTypes: [
      {
        type: "General Admission",
        description: "Upper box seating",
        price: 4500,
        available: 500,
        benefits: ["Upper box seating", "Official event lightstick"]
      },
      {
        type: "Lower Box",
        description: "Better viewing angle",
        price: 6800,
        available: 300,
        benefits: ["Lower box seating", "Official event lightstick", "Event poster"]
      },
      {
        type: "VIP",
        description: "Premium experience",
        price: 8500,
        available: 200,
        popular: true,
        benefits: ["Reserved seating near stage", "Official merchandise package", "HD photo card set"]
      },
      {
        type: "SVIP (Hi-Touch)",
        description: "Ultimate fan experience",
        price: 12000,
        available: 100,
        benefits: ["All VIP benefits", "Hi-Touch session with Lee Minho", "Exclusive photo opportunity", "Personalized autograph"]
      }
    ]
  },
  {
    id: 4,
    title: "2025 XIUMIN FAN CONCERT in MANILA",
    date: "MAY 10, 2025",
    venue: "New Frontier Theater, Quezon City, Philippines",
    image: "pics/coming_3.webp",
    description: "Experience an unforgettable evening with EXO’s beloved Xiumin as he brings his 2025 Fan Concert to Manila! Fans can look forward to live performances, heartfelt moments, and special stages prepared just for this event. Celebrate Xiumin’s music and charm in an intimate and emotional concert you won’t want to miss.",
    venueInfo: "New Frontier Theater offers a cozy yet grand setting with excellent acoustics and a clear view from every seat, making it ideal for close-up fan experiences.",
    ticketTypes: [
      {
        type: "VIP",
        description: "Premium experience",
        price: 12500,
        available: 100,
        benefits: ["Front-row seating", "Priority entry", "Exclusive event merchandise"]
      },
      {
        type: "Orchestra",
        description: "Main floor seating",
        price: 10500,
        available: 200,
        benefits: ["Great view from main floor", "Access to official merchandise"]
      },
      {
        type: "Loge",
        description: "Upper tier seating",
        price: 9000,
        available: 150,
        benefits: ["Elevated view of the stage", "Comfortable seating area"]
      },
      {
        type: "Balcony",
        description: "Affordable seating",
        price: 5500,
        available: 250,
        benefits: ["Budget-friendly access", "Clear view from balcony"]
      }
    ]
  },
  {
    id: 5,
    title: "2025 KAI SOLO CONCERT TOUR IN MANILA",
    date: "JULY 27, 2025",
    time: "6:00PM",
    venue: "Smart Araneta Coliseum, Quezon City, Philippines",
    image: "pics/coming_5.webp",
    description: "Witness Kai, EXO’s main dancer and soloist, take the stage for his highly anticipated 2025 Solo Concert Tour in Manila! Expect powerful performances, stunning visuals, and an electrifying atmosphere that will leave fans breathless. Join fellow Erigoms in celebrating Kai’s artistry and passion.",
    venueInfo: "Smart Araneta Coliseum, known as 'The Big Dome', offers a massive and energetic space perfect for large-scale concerts with excellent acoustics and seating options.",
    ticketTypes: [
      {
        type: "Platinum Standing",
        description: "Front-stage standing area",
        price: 12000,
        available: 200,
        benefits: ["Closest view of Kai", "Early entry access"]
      },
      {
        type: "Platinum Seated",
        description: "Premium seated area",
        price: 12000,
        available: 150,
        benefits: ["Excellent view with comfort", "Priority entry"]
      },
      {
        type: "Gold",
        description: "Main floor seating",
        price: 11000,
        available: 300,
        benefits: ["Great stage view", "Access to official merchandise"]
      },
      {
        type: "Silver A",
        description: "Upper tier closer to stage",
        price: 7500,
        available: 250,
        benefits: ["Elevated view", "Affordable close seats"]
      },
      {
        type: "Silver B",
        description: "Upper tier farther seats",
        price: 5500,
        available: 300,
        benefits: ["Budget-friendly", "Good overall view"]
      },
      {
        type: "Bronze",
        description: "Topmost affordable seating",
        price: 3500,
        available: 400,
        benefits: ["Entry access", "Good for budget fans"]
      }
    ]
  },

  {
    id: 6,
    title: "MAYDAY PARADE IN MANILA",
    date: "SEPTEMBER 24, 2025",
    time: "8:00PM",
    venue: "Smart Araneta Coliseum, Quezon City, Philippines",
    image: "pics/coming_6.webp",
    description: "Join Mayday Parade for a night of emotional lyrics and unforgettable melodies as they rock the stage in Manila. From their hit songs to the powerful performances, this concert promises to be a night filled with passion and nostalgia for long-time fans.",
    venueInfo: "Smart Araneta Coliseum, known for its impressive design and top-tier sound, will host this much-awaited concert, providing an unforgettable experience.",
    ticketTypes: [
      {
        type: "Platinum Standing",
        description: "Front-stage standing area",
        price: 12000,
        available: 200,
        benefits: ["Up-close experience with the band", "Early entry"]
      },
      {
        type: "Platinum Seated",
        description: "Premium seated area",
        price: 12000,
        available: 150,
        benefits: ["Fantastic view with extra comfort", "Priority entry"]
      },
      {
        type: "Gold",
        description: "Main floor seating",
        price: 11000,
        available: 300,
        benefits: ["Great stage view", "Access to exclusive merchandise"]
      },
      {
        type: "Silver A",
        description: "Upper tier seating closer to the stage",
        price: 7500,
        available: 250,
        benefits: ["Great view of the band", "Budget-friendly option"]
      },
      {
        type: "Silver B",
        description: "Upper tier seating further from stage",
        price: 5500,
        available: 300,
        benefits: ["Affordable option", "Clear view of the concert"]
      },
      {
        type: "Bronze",
        description: "Topmost affordable seating",
        price: 3500,
        available: 400,
        benefits: ["Access to the concert", "Best for budget-conscious fans"]
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', function () {

  const paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      paginationItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const eventItems = document.querySelectorAll('.event-item');

  eventItems.forEach((item, index) => {
    // Add data-id if it doesn't exist yet
    if (!item.hasAttribute('data-id')) {
      item.setAttribute('data-id', index + 1);
    }

    // Add click event
    item.addEventListener('click', function () {
      const eventId = this.getAttribute('data-id');
      window.location.href = `details_page.html?id=${eventId}`;
    });

    // Add pointer cursor to indicate clickable
    item.style.cursor = 'pointer';
  });

  // Get the event ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id') || 1; // Default to first event if no ID specified

  // Load the event data
  loadEventDetails(eventId);

  // Show random notifications
  setTimeout(showRandomNotification, 8000);
});

// Function to load event details
function loadEventDetails(eventId) {
  // Find the event with the matching ID
  const event = eventsData.find(e => e.id == eventId);

  if (!event) {
    // Event not found, redirect back to main page
    window.location.href = 'index.html';
    return;
  }

  // Update the page title
  document.title = event.title;

  // Set up the banner with background image
  const bannerElement = document.getElementById('event-banner');
  bannerElement.style.backgroundImage = `url('${event.image}')`;

  // Update event information
  document.getElementById('event-title').textContent = event.title;
  document.getElementById('event-date').textContent = event.date;
  document.getElementById('event-venue').textContent = event.venue;
  document.getElementById('event-description').textContent = event.description;
  document.getElementById('venue-info').textContent = event.venueInfo;

  // Generate ticket options
  const ticketOptionsElement = document.getElementById('ticket-options');
  ticketOptionsElement.innerHTML = '';

  event.ticketTypes.forEach((ticket, index) => {
    const ticketElement = document.createElement('div');
    ticketElement.id = `ticket-${index}`;
    ticketElement.className = 'ticket-card border rounded-lg p-4 cursor-pointer relative';

    let ticketHTML = '';

    // Add "Popular" badge if marked as popular
    if (ticket.popular) {
      ticketHTML += `
              <div class="absolute -top-2 -right-2 bg-primary text-white text-xs py-1 px-2 rounded-full">
                  Popular
              </div>
          `;
    }

    ticketHTML += `
          <div class="absolute top-4 right-4 hidden ticket-check text-primary">
              <div class="w-6 h-6 flex items-center justify-center">
                  <i class="ri-check-line"></i>
              </div>
          </div>
          <div class="flex justify-between items-start mb-3">
              <div>
                  <h3 class="font-semibold">${ticket.type}</h3>
                  <p class="text-gray-600 text-sm">${ticket.description}</p>
              </div>
              <div class="text-right">
                  <p class="font-bold text-lg">₱${ticket.price.toLocaleString()}</p>
                  <p class="text-gray-500 text-xs">Available: ${ticket.available}</p>
              </div>
          </div>
          
          <div class="benefits" id="benefits-${index}">
              <div class="pt-3 border-t mt-3">
                  <h4 class="text-sm font-semibold mb-2">Benefits:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
      `;

    // Add benefits list
    ticket.benefits.forEach(benefit => {
      ticketHTML += `
              <li class="flex items-start">
                  <div class="w-4 h-4 flex items-center justify-center text-primary mt-0.5 mr-2">
                      <i class="ri-check-line"></i>
                  </div>
                  <span>${benefit}</span>
              </li>
          `;
    });

    ticketHTML += `
                  </ul>
              </div>
          </div>
          
          <div class="flex justify-between items-center mt-4">
              <button class="text-primary text-sm font-medium toggle-benefits" data-target="benefits-${index}">
                  Show benefits
              </button>
              <div class="quantity-selector flex items-center">
                  <button class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-l-button text-gray-600 hover:bg-gray-200">-</button>
                  <input type="number" value="0" min="0" max="8" class="w-10 h-8 text-center border-y border-gray-200 text-sm" data-price="${ticket.price}">
                  <button class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-r-button text-gray-600 hover:bg-gray-200">+</button>
              </div>
          </div>
      `;

    ticketElement.innerHTML = ticketHTML;
    ticketOptionsElement.appendChild(ticketElement);
  });

  // Initialize ticket functionality
  initializeTicketFunctionality();
}

// Function to initialize ticket functionality
function initializeTicketFunctionality() {
  // Toggle benefits sections
  const toggleButtons = document.querySelectorAll('.toggle-benefits');
  toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement.classList.contains('show')) {
        targetElement.classList.remove('show');
        this.textContent = 'Show benefits';
      } else {
        targetElement.classList.add('show');
        this.textContent = 'Hide benefits';
      }
    });
  });

  // Ticket selection
  const ticketCards = document.querySelectorAll('.ticket-card');
  ticketCards.forEach(card => {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') {
        return;
      }

      this.classList.toggle('selected');
      const checkIcon = this.querySelector('.ticket-check');

      if (this.classList.contains('selected')) {
        checkIcon.classList.remove('hidden');

        // If no tickets are selected yet, set quantity to 1
        const quantityInput = this.querySelector('input[type="number"]');
        if (parseInt(quantityInput.value) === 0) {
          quantityInput.value = 1;
          updateTotals();
        }
      } else {
        checkIcon.classList.add('hidden');

        // Reset quantity to 0
        const quantityInput = this.querySelector('input[type="number"]');
        quantityInput.value = 0;
        updateTotals();
      }
    });
  });

  // Quantity selectors
  const minusButtons = document.querySelectorAll('.quantity-selector button:first-child');
  const plusButtons = document.querySelectorAll('.quantity-selector button:last-child');

  minusButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.nextElementSibling;
      const currentValue = parseInt(input.value);
      if (currentValue > 0) {
        input.value = currentValue - 1;

        // If quantity becomes 0, deselect the card
        if (parseInt(input.value) === 0) {
          const card = this.closest('.ticket-card');
          card.classList.remove('selected');
          card.querySelector('.ticket-check').classList.add('hidden');
        }

        updateTotals();
      }
    });
  });

  plusButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.previousElementSibling;
      const currentValue = parseInt(input.value);
      const maxValue = parseInt(input.getAttribute('max'));

      if (currentValue < maxValue) {
        input.value = currentValue + 1;

        // Select the card if it's not already selected
        const card = this.closest('.ticket-card');
        if (!card.classList.contains('selected')) {
          card.classList.add('selected');
          card.querySelector('.ticket-check').classList.remove('hidden');
        }

        updateTotals();
      }
    });
  });

  // Initialize totals
  updateTotals();
}

// Update subtotal, service fee, and total
function updateTotals() {
  let subtotal = 0;

  // Calculate subtotal from all ticket inputs
  document.querySelectorAll('.quantity-selector input').forEach(input => {
    const quantity = parseInt(input.value);
    const price = parseFloat(input.getAttribute('data-price'));
    subtotal += quantity * price;
  });

  // Calculate service fee (5%)
  const serviceFee = subtotal > 0 ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + serviceFee;

  // Update the display
  document.getElementById('subtotal').textContent = `₱${subtotal.toLocaleString()}`;
  document.getElementById('service-fee').textContent = `₱${serviceFee.toLocaleString()}`;
  document.getElementById('total').textContent = `₱${total.toLocaleString()}`;

  // Enable/disable checkout button
  const checkoutButton = document.getElementById('checkout-button');
  checkoutButton.disabled = total <= 0;
}

// Show random notifications
function showRandomNotification() {
  const notifications = [
    "Someone just purchased VIP tickets!",
    "5 people bought tickets in the last hour",
    "SVIP packages are selling fast!",
    "Only 28 SVIP tickets remaining"
  ];

  const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
  document.getElementById('notification-text').textContent = randomNotification;

  const notificationElement = document.getElementById('notification');
  notificationElement.classList.remove('hidden');

  setTimeout(() => {
    notificationElement.classList.add('hidden');
  }, 5000);

  // Schedule next notification
  setTimeout(showRandomNotification, Math.random() * 25000 + 15000); // Between 15-40 seconds
}


