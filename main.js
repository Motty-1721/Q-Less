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
document.addEventListener('DOMContentLoaded', function() {
  // Make all event items clickable
  const eventItems = document.querySelectorAll('.event-item');
  
  eventItems.forEach((item, index) => {
    // Add data-id if it doesn't exist yet
    if (!item.hasAttribute('data-id')) {
      item.setAttribute('data-id', index + 1);
    }
    
    // Add click event
    item.addEventListener('click', function() {
      const eventId = this.getAttribute('data-id');
      window.location.href = `details_page.html?id=${eventId}`;
    });
    
    // Add pointer cursor to indicate clickable
    item.style.cursor = 'pointer';
  });
  
  // Check if we're on the event details page
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('id');
  
  if (eventId && document.getElementById('event-container')) {
    // This is the event details page, load the event data
    loadEventDetails(eventId);
  }
});

// Function to load event details
function loadEventDetails(eventId) {
  // In a real application, you would fetch this data from a server
  // For now, we'll use hardcoded data for demonstration
  const eventsData = [
    {
      id: 1,
      title: "NECK DEEP LIVE IN MANILA",
      date: "MAY 11, 2025",
      venue: "New Frontier Theater, Quezon City, Philippines",
      image: "pics/coming_4.webp",
      description: "British pop punk band Neck Deep is bringing their energetic live show to Manila! Known for their catchy hooks and emotional lyrics, the band will perform tracks from their latest album as well as fan favorites from their extensive catalog.",
      ticketTypes: [
        { type: "General Admission", price: "₱2,800" },
        { type: "VIP", price: "₱4,500" },
        { type: "SVIP Package", price: "₱6,000" }
      ]
    },
    {
      id: 2,
      title: "STATE CHAMPS IN MANILA",
      date: "APRIL 11, 2025",
      venue: "Events Hall, SM Southmall, Las Piñas City, Philippines",
      image: "pics/coming_1.webp",
      description: "Pop punk sensations State Champs are coming to Manila for an explosive night of high-energy music! The New York-based band will be performing hits from their latest album along with fan favorites from their celebrated discography. Get ready for an unforgettable night of singalongs that will leave you wanting more.",
      ticketTypes: [
        { type: "General Admission", price: "₱2,500" },
        { type: "VIP Access", price: "₱4,800" },
        { type: "SVIP (Meet & Greet)", price: "₱6,500" }
      ]
    },
    {
      id: 3,
      title: "2025 LEE MINHO ASIA FANMEETING TOUR 'MINHOVERSE' IN MANILA",
      date: "APRIL 26, 2025",
      venue: "SM Mall of Asia Arena, Pasay City, Philippines",
      image: "pics/coming_2.webp",
      description: "Korean superstar Lee Minho is coming to Manila for his highly anticipated Asia fanmeeting tour! Don't miss this chance to see the beloved actor up close in an interactive fan event filled with games, performances, and special segments.",
      ticketTypes: [
        { type: "General Admission", price: "₱4,500" },
        { type: "Lower Box", price: "₱6,800" },
        { type: "VIP", price: "₱8,500" },
        { type: "SVIP (Hi-Touch)", price: "₱12,000" }
      ]
    },
    {
      id: 4,
      title: "NECK DEEP LIVE IN MANILA",
      date: "MAY 11, 2025",
      venue: "New Frontier Theater, Quezon City, Philippines",
      image: "pics/coming_4.webp",
      description: "British pop punk band Neck Deep is bringing their energetic live show to Manila! Known for their catchy hooks and emotional lyrics, the band will perform tracks from their latest album as well as fan favorites from their extensive catalog.",
      ticketTypes: [
        { type: "General Admission", price: "₱2,800" },
        { type: "VIP", price: "₱4,500" },
        { type: "SVIP Package", price: "₱6,000" }
      ]
    }
  ];
  
  // Find the event with the matching ID
  const event = eventsData.find(e => e.id == eventId);
  
  if (!event) {
    // Event not found, redirect back to main page
    window.location.href = 'index.html';
    return;
  }
  
  // Set up the banner with background image
  const bannerElement = document.querySelector('.event-banner');
  bannerElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${event.image}')`;
  bannerElement.style.backgroundSize = 'contain';
  bannerElement.style.backgroundPosition = 'center';
  
  bannerElement.innerHTML = `
    <div class="event-title">${event.title}</div>
    <div class="event-meta">
      <span>📅 ${event.date}</span>
      <span>📍 ${event.venue}</span>
    </div>
  `;
  
  // Set up the main content
  const container = document.getElementById('event-container');
  container.innerHTML = `
    <div class="event-description">
      <h2>Event Details</h2>
      <p>${event.description}</p>
    </div>
      
    <div class="ticket-info">
      <h2>Ticket Information</h2>
      <div class="ticket-types">
        ${event.ticketTypes.map(ticket => `
          <div class="ticket-type">
            <span class="ticket-name">${ticket.type}</span>
            <span class="ticket-price">${ticket.price}</span>
          </div>
        `).join('')}
      </div>
      <button class="buy-tickets">Buy Tickets Now</button>
    </div>
      
    <a href="index.html" class="back-link">← Back to All Events</a>
  `;
  
  
  // Add click handler for the buy tickets button
  document.querySelector('.buy-tickets').addEventListener('click', function() {
    alert('Redirecting to ticket purchase page...');
  });
}


