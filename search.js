
const searchBarHTML = `
<div class="search-container mx-auto mb-8 mt-2 w-full max-w-md">
  <div class="relative">
    <input
      type="text"
      id="event-search"
      class="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Search events..."
    />
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <i class="ri-search-line text-gray-400"></i>
    </div>
    <div id="search-results" class="absolute z-10 w-full bg-white border rounded-lg mt-1 shadow-lg hidden overflow-hidden max-h-64 overflow-y-auto">
      <!-- Search results will be populated here -->
    </div>
  </div>
</div>
`;

// Function to add search functionality to the page
function initializeSearch() {
  // First, insert the search bar HTML into the DOM
  const searchContainer = document.createElement('div');
  searchContainer.innerHTML = searchBarHTML;
  
  // Find where to insert the search bar (at the top of the events container)
  const eventContainer = document.querySelector('.view_all_events-container');
  if (eventContainer) {
    // Insert before the event container
    eventContainer.parentNode.insertBefore(searchContainer, eventContainer);
  } else {
    // Fallback - insert at the beginning of the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.insertBefore(searchContainer, mainContent.firstChild);
    } else {
      // Final fallback
      document.body.insertBefore(searchContainer, document.body.firstChild);
    }
  }

  // Setup search functionality
  const searchInput = document.getElementById('event-search');
  const searchResults = document.getElementById('search-results');

  // Add event listeners
  searchInput.addEventListener('input', performSearch);
  searchInput.addEventListener('focus', performSearch);
  
  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add('hidden');
    }
  });
}

// Function to perform search and display results
function performSearch() {
  const searchInput = document.getElementById('event-search');
  const searchResults = document.getElementById('search-results');
  const query = searchInput.value.toLowerCase().trim();
  
  // Clear previous results
  searchResults.innerHTML = '';
  
  if (query === '') {
    // Show all events if query is empty and input is focused
    if (document.activeElement === searchInput) {
      displayAllEvents(searchResults);
    } else {
      searchResults.classList.add('hidden');
    }
    return;
  }
  
  // Filter events based on query
  const filteredEvents = eventsData.filter(event => {
    return (
      event.title.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query) ||
      event.date.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query)
    );
  });
  
  if (filteredEvents.length === 0) {
    // No results
    searchResults.innerHTML = `
      <div class="p-3 text-gray-500 text-center">
        No events found matching "${query}"
      </div>
    `;
    searchResults.classList.remove('hidden');
    return;
  }
  
  // Create result items
  filteredEvents.forEach(event => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0';
    resultItem.innerHTML = `
      <div class="flex items-center">
        <div class="w-12 h-12 mr-3 bg-cover bg-center rounded" style="background-image: url('${event.image}')"></div>
        <div class="flex-1">
          <h4 class="font-medium">${highlightMatch(event.title, query)}</h4>
          <p class="text-sm text-gray-500">${event.date} • ${event.venue.split(',')[0]}</p>
        </div>
      </div>
    `;
    
    // Add click event to navigate to event details
    resultItem.addEventListener('click', function() {
      window.location.href = `details_page.html?id=${event.id}`;
    });
    
    searchResults.appendChild(resultItem);
  });
  
  searchResults.classList.remove('hidden');
}

// Function to highlight matching text
function highlightMatch(text, query) {
  if (!query) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<span class="bg-yellow-200">$1</span>');
}

// Function to display all events when search is empty
function displayAllEvents(searchResults) {
  eventsData.forEach(event => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0';
    resultItem.innerHTML = `
      <div class="flex items-center">
        <div class="w-12 h-12 mr-3 bg-cover bg-center rounded" style="background-image: url('${event.image}')"></div>
        <div class="flex-1">
          <h4 class="font-medium">${event.title}</h4>
          <p class="text-sm text-gray-500">${event.date} • ${event.venue.split(',')[0]}</p>
        </div>
      </div>
    `;
    
    // Add click event to navigate to event details
    resultItem.addEventListener('click', function() {
      window.location.href = `details_page.html?id=${event.id}`;
    });
    
    searchResults.appendChild(resultItem);
  });
  
  searchResults.classList.remove('hidden');
}

// Initialize search functionality when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSearch);
} else {
  initializeSearch();
}