import { getUserName } from './nav.js';

document.addEventListener('DOMContentLoaded', function () {

    // Initial testimonial data
    const initialTestimonials = [
        {
            name: "Emily Wilson",
            image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20woman%20with%20short%20brown%20hair%2C%20smiling%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=1&orientation=squarish",
            rating: 5,
            concert: "Taylor Swift: The Eras Tour",
            date: "May 1, 2025",
            location: "Chicago",
            review: "Absolutely life-changing experience! The ticket purchasing process was seamless, and the customer service was exceptional when I needed to change my seating. I got perfect seats thanks to the virtual seating preview.",
            postedTime: "2 hours ago"
        },
        {
            name: "Michael Chen",
            image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20middle-aged%20man%20with%20glasses%20and%20short%20beard%2C%20smiling%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=2&orientation=squarish",
            rating: 4,
            concert: "Coldplay: Music of the Spheres",
            date: "April 28, 2025",
            location: "New York",
            review: "The mobile ticket delivery was instant and the app made it super easy to transfer a ticket to my friend who joined last minute. Great experience overall, though parking information could have been clearer.",
            postedTime: "1 day ago"
        },
        {
            name: "Sophia Rodriguez",
            image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20woman%20with%20long%20black%20hair%2C%20smiling%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=3&orientation=squarish",
            rating: 4.5,
            concert: "Bad Bunny: World's Hottest Tour",
            date: "April 22, 2025",
            location: "Miami",
            review: "I was able to score front-row tickets during the pre-sale thanks to the notification system. The price comparison feature saved me money, and the venue map was incredibly accurate. Fantastic service!",
            postedTime: "3 days ago"
        },
        {
            name: "James Thompson",
            image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20man%20with%20curly%20hair%2C%20smiling%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=4&orientation=squarish",
            rating: 3,
            concert: "Beyoncé: Renaissance World Tour",
            date: "April 15, 2025",
            location: "Los Angeles",
            review: "The ticket purchasing was easy, but I had issues with the mobile entry system at the venue. Customer service helped resolve it, but it caused some stress before the show. The actual concert was amazing though!",
            postedTime: "1 week ago"
        },
        {
            name: "Laura Johnson",
            image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20middle-aged%20woman%20with%20blonde%20hair%2C%20smiling%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=5&orientation=squarish",
            rating: 5,
            concert: "Adele: 30 Tour",
            date: "April 10, 2025",
            location: "Boston",
            review: "I've used many ticket platforms before, but this one is by far the best. The price alerts saved me hundreds of dollars, and the seat view preview feature was spot on. Will definitely use again for future concerts!",
            postedTime: "2 weeks ago"
        },
        {
            name: "Daniel Williams",
            image: "https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20man%20with%20dark%20skin%20and%20short%20hair%2C%20smiling%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=80&height=80&seq=6&orientation=squarish",
            rating: 4,
            concert: "The Weeknd: After Hours Tour",
            date: "April 5, 2025",
            location: "Atlanta",
            review: "The group booking feature made organizing our friend group so much easier. We all got seats together despite buying at different times. The price was fair and the electronic tickets worked flawlessly.",
            postedTime: "3 weeks ago"
        }
    ];

    // Function to create testimonial card HTML
    function createTestimonialCard(testimonial) {
        // Create stars HTML
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(testimonial.rating)) {
                starsHTML += `<div class="w-4 h-4 flex items-center justify-center"><i class="ri-star-fill"></i></div>`;
            } else if (i - testimonial.rating === 0.5) {
                starsHTML += `<div class="w-4 h-4 flex items-center justify-center"><i class="ri-star-half-fill"></i></div>`;
            } else {
                starsHTML += `<div class="w-4 h-4 flex items-center justify-center"><i class="ri-star-line"></i></div>`;
            }
        }

        return `
<div class="testimonial-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <div class="flex items-center mb-4">
        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-10 h-10 rounded-full object-cover object-top">
        <div class="ml-3">
            <h4 class="font-semibold text-gray-900">${testimonial.name}</h4>
            <div class="flex items-center">
                <div class="flex text-yellow-400">
                    ${starsHTML}
                </div>
            </div>
        </div>
    </div>
    <h5 class="font-medium text-gray-800 mb-1">${testimonial.concert}</h5>
    <p class="text-sm text-gray-500 mb-3">${testimonial.date} • ${testimonial.location}</p>
    <p class="text-gray-700 mb-4">${testimonial.review}</p>
    <div class="flex justify-between items-center text-xs text-gray-500">
        <span>Posted ${testimonial.postedTime}</span>
    </div>
</div>
`;
    }

    // Populate initial testimonials
    const carouselContainer = document.getElementById('carouselContainer');
    initialTestimonials.forEach(testimonial => {
        const testimonialHTML = createTestimonialCard(testimonial);
        carouselContainer.innerHTML += testimonialHTML;
    });

    // Carousel functionality
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    let cardWidth;
    let visibleCards;
    let currentIndex = 0;
    const totalCards = initialTestimonials.length;

    function updateCarouselMetrics() {
        const containerWidth = carouselContainer.clientWidth;
        if (window.innerWidth >= 1024) {
            visibleCards = 3;
        } else if (window.innerWidth >= 768) {
            visibleCards = 2;
        } else {
            visibleCards = 1;
        }
        cardWidth = containerWidth / visibleCards;
    }

    updateCarouselMetrics();
    window.addEventListener('resize', updateCarouselMetrics);

    let maxIndex = Math.ceil(totalCards / visibleCards) - 1;

    function updateActiveDot() {
        paginationDots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
                dot.classList.add('bg-primary');
                dot.classList.add('w-8');
            } else {
                dot.classList.remove('active');
                dot.classList.remove('bg-primary');
                dot.classList.remove('w-8');
            }
        });
    }

    function scrollToIndex(index) {
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        currentIndex = index;
        carouselContainer.scrollTo({
            left: index * visibleCards * cardWidth,
            behavior: 'smooth'
        });
        updateActiveDot();
    }

    prevBtn.addEventListener('click', () => {
        scrollToIndex(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        scrollToIndex(currentIndex + 1);
    });

    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToIndex(index);
        });
    });

    // Modal functionality
    const modal = document.getElementById('reviewModal');
    const addReviewBtn = document.getElementById('addReviewBtn');
    const closeModal = document.getElementById('closeModal');
    const reviewForm = document.getElementById('reviewForm');
    const successToast = document.getElementById('successToast');

    addReviewBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Star rating functionality
    const starLabels = document.querySelectorAll('.star-rating label');
    let selectedRating = 0;

    starLabels.forEach(label => {
        label.addEventListener('click', () => {
            const rating = parseInt(label.getAttribute('data-rating'));
            selectedRating = rating;
            updateStars(selectedRating);
        });

        label.addEventListener('mouseover', () => {
            const rating = parseInt(label.getAttribute('data-rating'));
            updateStars(rating);
        });
    });

    document.querySelector('.star-rating').addEventListener('mouseleave', () => {
        updateStars(selectedRating);
    });

    function updateStars(rating) {
        starLabels.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('text-yellow-400');
                star.classList.remove('text-gray-300');
            } else {
                star.classList.remove('text-yellow-400');
                star.classList.add('text-gray-300');
            }
        });
    }

    // Character count for review text
    const reviewText = document.getElementById('reviewText');
    const charCount = document.getElementById('charCount');

    reviewText.addEventListener('input', () => {
        const count = reviewText.value.length;
        charCount.textContent = count;

        if (count > 150) {
            charCount.classList.add('text-red-500');
            reviewText.value = reviewText.value.substring(0, 150);
            charCount.textContent = 150;
        } else {
            charCount.classList.remove('text-red-500');
        }
    });

    // Form submission
    // Form submission
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const concert = document.getElementById('concertSelect').value;
        const rating = selectedRating;
        const review = document.getElementById('reviewText').value;

        if (!concert || rating === 0 || !review) {
            alert('Please fill in all fields and select a rating');
            return;
        }

        // Get the current user's name from nav.js
        const userName = getUserName();

        // Create new testimonial object
        const newTestimonial = {
            name: userName,
            image: "pics/user.png",
            rating: rating,
            concert: concert,
            date: "May 3, 2025",
            location: getRandomCity(),
            review: review,
            postedTime: "just now"
        };

        // Create new review card and add it to the beginning
        const newReviewHTML = createTestimonialCard(newTestimonial);
        carouselContainer.insertAdjacentHTML('afterbegin', newReviewHTML);

        // Update carousel state
        const totalCards = carouselContainer.querySelectorAll('.testimonial-card').length;
        maxIndex = Math.ceil(totalCards / visibleCards) - 1;

        // Scroll to show the new review (first position)
        scrollToIndex(0);

        // Close modal and reset form
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        reviewForm.reset();
        selectedRating = 0;
        updateStars(0);
        charCount.textContent = '0';

        // Show success toast
        successToast.classList.remove('translate-y-20', 'opacity-0');

        // Hide toast after 3 seconds
        setTimeout(() => {
            successToast.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    });

    // Helper functions
    function getRandomName() {
        const names = ['Alexander Thompson', 'Isabella Martinez', 'Benjamin Parker', 'Olivia Anderson', 'William Chen', 'Emma Rodriguez', 'Jackson Lee', 'Sophia Patel', 'Ethan Davis', 'Ava Wilson'];
        return names[Math.floor(Math.random() * names.length)];
    }

    function getRandomCity() {
        const cities = ['Tagbilaran', 'Tubigon', 'Loon', 'Batuan', 'Pilar', 'Carmen', 'Bilar', 'Loboc', 'Anda', 'Mabini'];
        return cities[Math.floor(Math.random() * cities.length)];
    }

    // Initial call to update active dot
    updateActiveDot();
});