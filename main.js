// Header functionalities

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
  },
  {
    id: 7,
    title: "BEACH WEATHER ASIA TOUR 2025 LIVE IN MANILA",
    date: "AUGUST 23, 2025",
    time: "8:00PM",
    venue: "Skydome, SM North Edsa, Quezon City, Philippines",
    image: "pics/all_1.webp",
    description: "Catch Beach Weather live in Manila as part of their Asia Tour 2025! Enjoy a night of dreamy indie pop, catchy hooks, and vibrant energy that will have the crowd dancing and singing along to hits like 'Sex, Drugs, Etc.' and more. A perfect mix of chill vibes and electric atmosphere awaits!",
    venueInfo: "Located at SM North Edsa, Skydome offers an intimate concert space with great acoustics and easy access, perfect for a high-energy performance from Beach Weather.",
    ticketTypes: [
      {
        type: "VIP A",
        description: "Closest to the stage with premium view",
        price: 5000,
        available: 150,
        benefits: ["Front row experience", "Early entry"]
      },
      {
        type: "VIP B",
        description: "Excellent stage view behind VIP A",
        price: 3500,
        available: 200,
        benefits: ["Great view", "Comfortable access"]
      },
      {
        type: "General Admission",
        description: "Regular seating/viewing area",
        price: 2800,
        available: 300,
        benefits: ["Full concert access", "Budget-friendly"]
      }
    ]
  },
  {
    id: 8,
    title: "TAEYEON CONCERT – The TENSE in MANILA",
    date: "MARCH 29, 2025",
    time: "6:00PM",
    venue: "SM Mall of Asia Arena, Pasay City, Philippines",
    image: "pics/all_3.webp",
    description: "Experience an unforgettable night with TAEYEON as she brings 'The TENSE' concert tour to Manila! Get ready to be moved by her powerful vocals, emotional ballads, and stunning stage presence. A night of K-pop brilliance awaits all fans of the Girls' Generation leader and solo queen.",
    venueInfo: "The SM Mall of Asia Arena, one of the largest indoor venues in the Philippines, provides state-of-the-art sound and lighting—perfect for showcasing Taeyeon's remarkable live performance.",
    ticketTypes: [
      {
        type: "Floor Seated",
        description: "Premium seating closest to the stage",
        price: 14000,
        available: 200,
        benefits: ["Best view of the performance", "Exclusive experience"]
      },
      {
        type: "Lower Box A",
        description: "First tier side seating with great angle",
        price: 12500,
        available: 250,
        benefits: ["Clear view of the stage", "Comfortable location"]
      },
      {
        type: "Lower Box B",
        description: "Second tier seating on the lower level",
        price: 10500,
        available: 300,
        benefits: ["Good stage view", "Easy access"]
      },
      {
        type: "Lower Box C",
        description: "Rear lower-level seating",
        price: 9500,
        available: 300,
        benefits: ["Decent view", "Cost-effective lower section"]
      },
      {
        type: "Upper Box A",
        description: "First tier upper seating",
        price: 7500,
        available: 350,
        benefits: ["Elevated view", "Great for group viewing"]
      },
      {
        type: "Upper Box B",
        description: "Second tier upper seating",
        price: 6500,
        available: 350,
        benefits: ["Wide stage view", "Budget-conscious option"]
      },
      {
        type: "Gen Ad A",
        description: "General admission seating",
        price: 4500,
        available: 400,
        benefits: ["Access to full concert", "Affordable choice"]
      },
      {
        type: "Gen Ad B",
        description: "Rear general admission area",
        price: 3500,
        available: 400,
        benefits: ["Entry to event", "Most affordable section"]
      }
    ]
  },
  {
    id: 9,
    title: "RUNNING MAN 'RUN 2 U' LIVE IN KUALA LUMPUR",
    date: "FEBRUARY 15, 2025",
    time: "5:00PM",
    venue: "MIECC, The Mines International Exhibition and Convention Centre, Kuala Lumpur, Malaysia",
    image: "pics/all_4.webp",
    description: "Get ready for a night of laughter, games, and non-stop entertainment as the beloved cast of Running Man brings their 'RUN 2 U' live tour to Kuala Lumpur! Fans will experience hilarious challenges, heartfelt moments, and unforgettable interactions with the cast members in this exciting one-of-a-kind variety show event.",
    venueInfo: "The MIECC, known for hosting major international events, offers spacious and comfortable facilities that will perfectly complement the dynamic energy of the Running Man cast.",
    ticketTypes: [
      {
        type: "VIP Standing Zone",
        description: "Closest access to the stage with standing room",
        price: 985,
        available: 250,
        benefits: ["Exclusive standing area", "Best interaction zone", "Early entry"]
      },
      {
        type: "PS1",
        description: "Front-tier reserved seating",
        price: 858,
        available: 300,
        benefits: ["Great view of the stage", "Comfortable seating"]
      },
      {
        type: "PS2",
        description: "Second-tier reserved seating",
        price: 688,
        available: 300,
        benefits: ["Good view", "Affordable reserved option"]
      },
      {
        type: "PS3",
        description: "Middle-tier seating",
        price: 488,
        available: 350,
        benefits: ["Decent stage view", "Budget-friendly seating"]
      },
      {
        type: "PS4",
        description: "Rear section seating",
        price: 388,
        available: 400,
        benefits: ["Entry access", "Clear line of sight"]
      },
      {
        type: "PS5",
        description: "Farthest seating area",
        price: 288,
        available: 400,
        benefits: ["Most affordable option", "Guaranteed event access"]
      }
    ]
  },
  {
    id: 10,
    title: "BOYNEXTDOOR TOUR ‘KNOCK ON Vol.1’ IN MANILA",
    date: "MARCH 22, 2025",
    time: "6:00PM",
    venue: "Smart Araneta Coliseum, Quezon City, Philippines",
    image: "pics/all_5.webp",
    description: "Join BOYNEXTDOOR as they bring their first-ever tour, ‘KNOCK ON Vol.1’, to Manila! Expect a night filled with powerful stages, youthful charm, and energetic performances from one of K-pop’s rising boy groups. This is your chance to witness their fresh sound and synchronized moves live on stage!",
    venueInfo: "Smart Araneta Coliseum, a favorite venue for international acts, offers excellent acoustics and a vibrant atmosphere perfect for the BOYNEXTDOOR experience.",
    ticketTypes: [
      {
        type: "Royalty Standing",
        description: "Front-stage standing area with premium access",
        price: 12500,
        available: 200,
        benefits: ["Closest to the stage", "Early entry", "Royalty package access"]
      },
      {
        type: "Royalty Seated",
        description: "Premium seated area near the stage",
        price: 12500,
        available: 150,
        benefits: ["Great view with comfort", "Early entry", "Royalty package access"]
      },
      {
        type: "Patron",
        description: "Seated area behind Royalty zones",
        price: 10500,
        available: 200,
        benefits: ["Excellent view", "Comfortable seating"]
      },
      {
        type: "Floor Standing",
        description: "Main floor standing area",
        price: 10000,
        available: 250,
        benefits: ["Energetic experience", "Good stage visibility"]
      },
      {
        type: "Lower Box A",
        description: "First tier lower box",
        price: 8500,
        available: 250,
        benefits: ["Good elevated view", "Balanced price"]
      },
      {
        type: "Lower Box B",
        description: "Second tier lower box",
        price: 7500,
        available: 250,
        benefits: ["Great line of sight", "Cost-effective lower level"]
      },
      {
        type: "Upper Box A",
        description: "Upper seating with decent view",
        price: 5500,
        available: 300,
        benefits: ["Budget-friendly with full concert access"]
      },
      {
        type: "Upper Box B",
        description: "Farthest upper section",
        price: 3500,
        available: 350,
        benefits: ["Most affordable option", "Clear view of the performance"]
      }
    ]
  },
  {
    id: 11,
    title: "WISP LIVE IN MANILA",
    date: "DECEMBER 05, 2024",
    time: "8:00PM",
    venue: "Skydome, SM North EDSA, Quezon City, Philippines",
    image: "pics/all_6.webp",
    description: "Experience the dreamy and immersive sounds of WISP as they bring their atmospheric live show to Manila. Known for their emotional melodies and ethereal energy, this concert promises an unforgettable night for fans who want to get lost in sound.",
    venueInfo: "The Skydome at SM North EDSA offers an intimate concert experience with excellent acoustics—perfect for WISP’s unique vibe.",
    ticketTypes: [
      {
        type: "VIP A (Includes M&G)",
        description: "Front area access with Meet & Greet",
        price: 5000,
        available: 150,
        benefits: ["Meet & Greet with the artist", "Early entry", "Priority area"]
      },
      {
        type: "VIP B",
        description: "Premium viewing section near the front",
        price: 3500,
        available: 200,
        benefits: ["Great stage view", "Early access"]
      },
      {
        type: "General Admission",
        description: "Regular seating area",
        price: 2500,
        available: 300,
        benefits: ["Affordable entry", "Full concert access"]
      }
    ]
  },
  {
    id: 12,
    title: "JINJER ASIAN TOUR 2025 IN MANILA",
    date: "FEBRUARY 18, 2025",
    time: "8:00PM",
    venue: "Skydome, SM North EDSA, Quezon City, Philippines",
    image: "pics/all_7.webp",
    description: "Prepare for a night of explosive metal energy as Ukrainian progressive metalcore band JINJER storms Manila as part of their Asian Tour 2025. With powerful vocals, intricate riffs, and unmatched stage presence, this is a must-see for heavy music fans.",
    venueInfo: "Skydome at SM North EDSA offers an intimate and intense setting, perfect for the raw and energetic performance JINJER is known for.",
    ticketTypes: [
      {
        type: "VVIP (Includes M&G and Priority Entry)",
        description: "Front access with exclusive Meet & Greet",
        price: 5000,
        available: 100,
        benefits: ["Meet & Greet with the band", "Priority venue entry", "Closest stage access"]
      },
      {
        type: "VIP",
        description: "Premium section near the front",
        price: 3850,
        available: 200,
        benefits: ["Great view", "Early entry"]
      },
      {
        type: "General Admission",
        description: "Regular section for the show",
        price: 2850,
        available: 300,
        benefits: ["Access to full show", "Budget-friendly option"]
      }
    ]
  },
  {
    id: 13,
    title: "THE CORRS: FROM MANILA WITH LOVE",
    date: "FEBRUARY 15–16, 2025",
    time: "8:00PM",
    venue: "Smart Araneta Coliseum, Quezon City, Philippines",
    image: "pics/all_8.webp",
    description: "The legendary Irish band The Corrs returns to Manila for two special nights of timeless hits and heartfelt performances. Celebrate love and music with songs like 'Breathless', 'Runaway', and more in an evening filled with nostalgia and elegance.",
    venueInfo: "Smart Araneta Coliseum, a premier concert venue in the Philippines, offers an exceptional setting for The Corrs' intimate and emotional performance.",
    ticketTypes: [
      {
        type: "VVIP",
        description: "Best seats with exclusive perks",
        price: 22500,
        available: 100,
        benefits: ["Closest view of the stage", "Priority entry", "Exclusive souvenir"]
      },
      {
        type: "VIP A",
        description: "Premium floor seating",
        price: 18500,
        available: 150,
        benefits: ["Great view", "Comfortable seating"]
      },
      {
        type: "VIP B",
        description: "Regular floor seating",
        price: 15000,
        available: 200,
        benefits: ["Excellent stage visibility", "Convenient location"]
      },
      {
        type: "Lower Box",
        description: "Lower-tier seating with a wide view",
        price: 12000,
        available: 250,
        benefits: ["Balanced stage perspective", "Elevated comfort"]
      },
      {
        type: "Upper Box A",
        description: "Upper-tier seating, front section",
        price: 8500,
        available: 300,
        benefits: ["Good view of the performance", "Affordable premium option"]
      },
      {
        type: "Upper Box B",
        description: "Upper-tier seating, back section",
        price: 7500,
        available: 350,
        benefits: ["Budget-friendly with decent visibility"]
      },
      {
        type: "General Admission",
        description: "Most affordable access",
        price: 3500,
        available: 400,
        benefits: ["Access to the full concert", "Best for fans on a budget"]
      }
    ]
  },
  {
    id: 14,
    title: "LAST DINOSAURS LIVE IN MANILA",
    date: "DECEMBER 08, 2024",
    time: "8:00PM",
    venue: "Skydome, SM North EDSA, Quezon City, Philippines",
    image: "pics/all_9.webp",
    description: "Catch the Australian indie rock band Last Dinosaurs as they bring their energetic and dreamy sound to Manila. With infectious guitar riffs and fan-favorite hits, this concert is sure to leave you vibing all night long.",
    venueInfo: "Skydome at SM North EDSA provides an intimate atmosphere perfect for a night of upbeat indie rock and close fan interaction.",
    ticketTypes: [
      {
        type: "VIP A (Includes M&G)",
        description: "Premium access with Meet & Greet",
        price: 5000,
        available: 100,
        benefits: ["Meet & Greet with the band", "Priority entry", "Closest access to the stage"]
      },
      {
        type: "VIP B",
        description: "Priority section near the front",
        price: 3500,
        available: 150,
        benefits: ["Great stage view", "Early entry"]
      },
      {
        type: "General Admission",
        description: "Standard access to the event",
        price: 2500,
        available: 250,
        benefits: ["Full concert access", "Budget-friendly choice"]
      }
    ]
  },
  {
    id: 15,
    title: "2024 ZEROBASEONE THE FIRST TOUR [TIMELESS WORLD] IN MANILA",
    date: "OCTOBER 12, 2024",
    time: "6:00PM",
    venue: "SM Mall of Asia Arena, Pasay City, Philippines",
    image: "pics/all_10.webp",
    description: "Join ZEROBASEONE as they bring their highly anticipated first tour to Manila! With breathtaking performances, powerful choreography, and unforgettable vocals, this concert promises a night of pure energy and connection with fans.",
    venueInfo: "SM Mall of Asia Arena, one of the premier venues in the Philippines, offers a world-class experience perfect for the electrifying stage presence of ZEROBASEONE.",
    ticketTypes: [
      {
        type: "ROYALTY SOUNDCHECK STANDING A,B,C,D",
        description: "Front area with soundcheck access",
        price: 12500,
        available: 200,
        benefits: ["Soundcheck access", "Closest standing area", "Exclusive fan perks"]
      },
      {
        type: "ROYALTY SEND OFF STANDING A,B,C,D",
        description: "Front area with send-off session access",
        price: 12500,
        available: 200,
        benefits: ["Send-off access", "Prime standing location", "Exclusive fan perks"]
      },
      {
        type: "ROYALTY SEATED",
        description: "Premium seated area near the stage",
        price: 12500,
        available: 150,
        benefits: ["Excellent view", "Exclusive perks", "Comfortable seating"]
      },
      {
        type: "REGULAR STANDING A,B,C,D",
        description: "Standard standing area",
        price: 10000,
        available: 300,
        benefits: ["Standing area access", "Great concert view"]
      },
      {
        type: "LOWER BOX A",
        description: "Lower box closer to stage",
        price: 10500,
        available: 200,
        benefits: ["Clear stage view", "Comfort seating"]
      },
      {
        type: "LOWER BOX B",
        description: "Lower box slightly farther from stage",
        price: 8500,
        available: 200,
        benefits: ["Good view", "Comfortable seats"]
      },
      {
        type: "UPPER BOX",
        description: "Upper tier seating",
        price: 5500,
        available: 250,
        benefits: ["Affordable option", "Wide view of the stage"]
      },
      {
        type: "GENERAL ADMISSION",
        description: "Topmost budget-friendly section",
        price: 2500,
        available: 300,
        benefits: ["Access to the concert", "Most affordable choice"]
      }
    ]
  },
  {
    id: 16,
    title: "2024 IU HEREH WORLD TOUR CONCERT IN MANILA (BULACAN)",
    date: "JUNE 1, 2024",
    time: "6:30PM",
    venue: "Philippine Arena, Bulacan, Philippines",
    image: "pics/all_11.webp",
    description: "IU brings her highly anticipated HEREH World Tour to the grand Philippine Arena. Get ready for a night of breathtaking vocals, moving performances, and beautiful visuals as IU serenades her Filipino UAENAs live.",
    venueInfo: "The Philippine Arena, the world’s largest indoor arena, provides a spectacular venue for IU’s concert, ensuring an unforgettable night for fans.",
    ticketTypes: [
      {
        type: "VIP",
        description: "Best seats in front",
        price: 12000,
        available: 250,
        benefits: ["Closest view of IU", "Immersive concert experience"]
      },
      {
        type: "Lower A",
        description: "Premium lower box area",
        price: 10500,
        available: 300,
        benefits: ["Great view", "Comfortable seating"]
      },
      {
        type: "Lower B",
        description: "Lower seating section B",
        price: 9000,
        available: 300,
        benefits: ["Good view of stage", "Easy access"]
      },
      {
        type: "Lower C",
        description: "Lower seating section C",
        price: 8500,
        available: 300,
        benefits: ["Balanced view and budget", "Comfortable option"]
      },
      {
        type: "Lower D",
        description: "Lower seating section D",
        price: 8000,
        available: 300,
        benefits: ["Moderate pricing", "Clear view of the stage"]
      },
      {
        type: "Lower E",
        description: "Lower seating section E",
        price: 7500,
        available: 300,
        benefits: ["Affordable and decent view", "Good for groups"]
      },
      {
        type: "Upper A",
        description: "Upper tier seating A",
        price: 6500,
        available: 300,
        benefits: ["Elevated view", "Good sound experience"]
      },
      {
        type: "Upper B",
        description: "Upper tier seating B",
        price: 5500,
        available: 300,
        benefits: ["Clear view from above", "Budget-friendly"]
      },
      {
        type: "Upper C",
        description: "Upper tier seating C",
        price: 4500,
        available: 300,
        benefits: ["Good for fans on a budget", "Full-stage visibility"]
      },
      {
        type: "Upper D",
        description: "Upper tier seating D",
        price: 3500,
        available: 300,
        benefits: ["Affordable option", "Decent view from afar"]
      },
      {
        type: "Upper E",
        description: "Farthest upper tier",
        price: 2500,
        available: 300,
        benefits: ["Entry-level pricing", "Access to the full show"]
      }
    ]
  },
  {
    id: 17,
    title: "PULP SUMMER SLAM XX: WORLDS COLLIDE – THE END",
    date: "MARCH 23, 2024",
    time: "1:00PM",
    venue: "Amoranto Stadium, Quezon City, Philippines",
    image: "pics/all_12.webp",
    description: "Marking the final chapter of the legendary metal festival, PULP Summer Slam XX: Worlds Collide brings an explosive lineup and intense energy to Amoranto Stadium. It's more than a concert—it's a celebration of two decades of metal history.",
    venueInfo: "Amoranto Stadium in Quezon City has hosted numerous historic music events, and for this finale, it promises an electrifying atmosphere for every metalhead.",
    ticketTypes: [
      {
        type: "PULP ROYALTY",
        description: "Exclusive premium access with perks",
        price: 10000,
        available: 150,
        benefits: ["Exclusive PULP Royalty zone", "Merch bundle", "Priority entry"]
      },
      {
        type: "VIP",
        description: "Premium festival zone",
        price: 3500,
        available: 500,
        benefits: ["Better view and access", "Exclusive lane"]
      },
      {
        type: "GEN AD",
        description: "General admission access",
        price: 1500,
        available: 1000,
        benefits: ["Full access to the festival grounds", "Budget-friendly entry"]
      }
    ]
  },
  {
    id: 18,
    title: "CHA EUN-WOO 2024 JUST ONE 10 MINUTE [MYSTERY ELEVATOR] IN MANILA",
    date: "MARCH 16, 2024",
    time: "7:00PM",
    venue: "SM Mall of Asia Arena, Pasay City, Philippines",
    image: "pics/all_13.webp",
    description: "Step into the world of CHA EUN-WOO as he brings his 2024 'Just One 10 Minute [Mystery Elevator]' tour to Manila. Fans can expect a captivating night filled with charm, visuals, and intimate stage moments from the beloved ASTRO member.",
    venueInfo: "The SM Mall of Asia Arena, a premier concert venue in the country, sets the perfect stage for Cha Eun-Woo’s unforgettable fan-con experience.",
    ticketTypes: [
      {
        type: "ROYALTY A, B, C, D, E",
        description: "Premium access with exclusive perks",
        price: 13500,
        available: 200,
        benefits: ["Best view of the stage", "Exclusive gift", "Priority entry"]
      },
      {
        type: "VIP C, D, E",
        description: "High-tier seats close to the stage",
        price: 10500,
        available: 250,
        benefits: ["Great view", "Souvenir item"]
      },
      {
        type: "Lowerbox A",
        description: "Front lower section seating",
        price: 8500,
        available: 300,
        benefits: ["Comfortable seating", "Clear view of stage"]
      },
      {
        type: "Lowerbox B",
        description: "Middle lower section seating",
        price: 7500,
        available: 300,
        benefits: ["Balanced view", "Budget-friendly section"]
      },
      {
        type: "Lowerbox C",
        description: "Rear lower section seating",
        price: 6500,
        available: 300,
        benefits: ["Good angle view", "Affordable comfort"]
      },
      {
        type: "Upper Box",
        description: "Upper-level seating",
        price: 3500,
        available: 400,
        benefits: ["Clear view from above", "Budget option"]
      },
      {
        type: "General Admission",
        description: "Topmost and most affordable seating",
        price: 2500,
        available: 500,
        benefits: ["Access to the event", "Most budget-friendly choice"]
      }
    ]
  },
  {
    id: 19,
    title: "RADWIMPS WORLD TOUR 2024 “The way you yawn, and the outcry of Peace” IN MANILA",
    date: "MAY 01, 2024",
    time: "8:00PM",
    venue: "Smart Araneta Coliseum, Quezon City, Philippines",
    image: "pics/all_14.webp",
    description: "RADWIMPS returns to Manila with their 2024 world tour, bringing their unique fusion of rock, emotion, and cinematic flair. Fans can expect powerful live renditions of their biggest hits and a night of musical storytelling.",
    venueInfo: "Smart Araneta Coliseum provides an immersive concert environment, perfect for RADWIMPS' emotionally charged and visually stunning performance.",
    ticketTypes: [
      {
        type: "Platinum Standing or Seated",
        description: "Premium front area access",
        price: 6000,
        available: 200,
        benefits: ["Best stage view", "Option to stand or sit"]
      },
      {
        type: "Gold Seated",
        description: "Great mid-range seating",
        price: 5500,
        available: 250,
        benefits: ["Comfortable seating", "Clear view of stage"]
      },
      {
        type: "Gold Standing",
        description: "Standing area behind platinum",
        price: 5000,
        available: 250,
        benefits: ["High energy atmosphere", "Good proximity to stage"]
      },
      {
        type: "Box A",
        description: "Upper tier close seating",
        price: 3500,
        available: 300,
        benefits: ["Balanced view", "Budget-friendly"]
      },
      {
        type: "Box B",
        description: "Topmost and most affordable seating",
        price: 2500,
        available: 400,
        benefits: ["Budget option", "General concert access"]
      }
    ]
  },
  {
    id: 19,
    title: "RADWIMPS WORLD TOUR 2024 “The way you yawn, and the outcry of Peace” IN MANILA",
    date: "MAY 01, 2024",
    time: "8:00PM",
    venue: "Smart Araneta Coliseum, Quezon City, Philippines",
    image: "pics/all_14.webp",
    description: "RADWIMPS returns to Manila with their 2024 world tour, bringing their unique fusion of rock, emotion, and cinematic flair. Fans can expect powerful live renditions of their biggest hits and a night of musical storytelling.",
    venueInfo: "Smart Araneta Coliseum provides an immersive concert environment, perfect for RADWIMPS' emotionally charged and visually stunning performance.",
    ticketTypes: [
      {
        type: "Platinum Standing or Seated",
        description: "Premium front area access",
        price: 6000,
        available: 200,
        benefits: ["Best stage view", "Option to stand or sit"]
      },
      {
        type: "Gold Seated",
        description: "Great mid-range seating",
        price: 5500,
        available: 250,
        benefits: ["Comfortable seating", "Clear view of stage"]
      },
      {
        type: "Gold Standing",
        description: "Standing area behind platinum",
        price: 5000,
        available: 250,
        benefits: ["High energy atmosphere", "Good proximity to stage"]
      },
      {
        type: "Box A",
        description: "Upper tier close seating",
        price: 3500,
        available: 300,
        benefits: ["Balanced view", "Budget-friendly"]
      },
      {
        type: "Box B",
        description: "Topmost and most affordable seating",
        price: 2500,
        available: 400,
        benefits: ["Budget option", "General concert access"]
      }
    ]
  },
  {
    id: 20,
    title: "ARCH ENEMY DECEIVERS ASIA TOUR 2024",
    date: "MAY 15, 2024",
    time: "8:00PM",
    venue: "Skydome, SM City North Edsa, Quezon City, Philippines",
    image: "pics/all_15.webp",
    description: "Experience the legendary Arch Enemy live as they bring their powerful metal sounds to Manila! With their incredible stage presence and killer performances, the Deceivers Asia Tour promises to be a night to remember for all fans.",
    venueInfo: "Skydome provides an intimate yet energetic atmosphere, perfect for Arch Enemy's high-octane performances, bringing fans up close to the action.",
    ticketTypes: [
      {
        type: "VIP M&G",
        description: "VIP access with Meet & Greet",
        price: 7500,
        available: 100,
        benefits: ["Meet the band", "Exclusive access"]
      },
      {
        type: "VIP",
        description: "VIP access with premium seating",
        price: 5000,
        available: 150,
        benefits: ["Front row seating", "Priority entry"]
      },
      {
        type: "GA",
        description: "General Admission",
        price: 3500,
        available: 500,
        benefits: ["Access to the concert", "Standing area"]
      }
    ]
  },
  {
    id: 21,
    title: "YESUNG SOLO CONCERT ‘UNFADING SENSE’ IN MANILA",
    date: "JANUARY 06, 2024",
    time: "6:00PM",
    venue: "New Frontier Theater, Quezon City, Philippines",
    image: "pics/all_16.webp",
    description: "Join Yesung of Super Junior for a memorable solo concert in Manila. With heartfelt performances and a mix of his iconic hits, 'Unfading Sense' promises to deliver an unforgettable evening full of emotion and passion.",
    venueInfo: "New Frontier Theater offers an intimate setting, making it the perfect place to enjoy Yesung's captivating live performance. It provides fans with a personal connection to the artist.",
    ticketTypes: [
      {
        type: "VIP Y",
        description: "Exclusive VIP access",
        price: 15000,
        available: 100,
        benefits: ["Exclusive seating", "Special merchandise", "Priority entry"]
      },
      {
        type: "VIP S",
        description: "VIP access with premium seating",
        price: 11500,
        available: 150,
        benefits: ["Best view", "Priority entry"]
      },
      {
        type: "LOGE",
        description: "Comfortable seating with a great view",
        price: 10000,
        available: 200,
        benefits: ["Comfortable experience", "Good stage view"]
      },
      {
        type: "BALCONY",
        description: "Affordable seating with a clear view",
        price: 6500,
        available: 250,
        benefits: ["Clear view of the stage", "Budget-friendly option"]
      }
    ]
  },
  {
    id: 22,
    title: "SILVERSTEIN LIVE IN MANILA",
    date: "OCTOBER 31, 2026",
    time: "8:00PM",
    venue: "Skydome, SM City North EDSA, Quezon City, Philippines",
    image: "pics/all_17.webp",
    description: "Canadian post-hardcore legends Silverstein return to Manila for an electrifying Halloween night of live music. Prepare for a high-energy set filled with fan favorites and heart-pounding anthems.",
    venueInfo: "Skydome provides an intimate yet powerful concert atmosphere, perfect for Silverstein’s intense and emotional live performances. All tickets are seated for a comfortable experience.",
    ticketTypes: [
      {
        type: "ROYALTY",
        description: "With Photo Meet & Greet and Priority Entrance",
        price: 5500,
        available: 100,
        benefits: ["Photo Meet & Greet", "Priority Entrance", "Seated"]
      },
      {
        type: "VIP",
        description: "Premium seat with a great view",
        price: 4000,
        available: 150,
        benefits: ["Great seat location", "Seated"]
      },
      {
        type: "General Admission",
        description: "Standard seated ticket",
        price: 3000,
        available: 200,
        benefits: ["Comfortable seat", "Budget-friendly", "Seated"]
      }
    ]
  },
  {
    id: 23,
    title: "MAYDAY PARADE LIVE IN DAVAO",
    date: "OCTOBER 30, 2026",
    time: "8:00PM",
    venue: "SMX Convention Center Davao, Davao City, Philippines",
    image: "pics/all_18.webp",
    description: "Mayday Parade brings their heartfelt anthems and emotional energy to Davao! Experience the band's iconic sound live for an unforgettable evening.",
    venueInfo: "SMX Convention Center Davao is the perfect venue for this high-energy performance, offering both standing and seated options to suit every fan's concert experience.",
    ticketTypes: [
      {
        type: "VVIP (STANDING)",
        price: 8500,
        available: 100,
        benefits: ["Closest view to the stage", "Standing area"]
      },
      {
        type: "PLATINUM (STANDING)",
        price: 4000,
        available: 120,
        benefits: ["Standing area", "Great view of the stage"]
      },
      {
        type: "PLATINUM LEFT (SEATED)",
        price: 4000,
        available: 80,
        benefits: ["Seated area", "Left side view"]
      },
      {
        type: "PLATINUM RIGHT (SEATED)",
        price: 4000,
        available: 80,
        benefits: ["Seated area", "Right side view"]
      },
      {
        type: "GOLD (FREE SEATING)",
        price: 3000,
        available: 150,
        benefits: ["Free seating", "Balanced view"]
      },
      {
        type: "SILVER (STANDING)",
        price: 2000,
        available: 200,
        benefits: ["Standing area", "Budget-friendly"]
      }
    ]
  },
  {
    id: 24,
    title: "AGAINST THE CURRENT ‘NIGHTMARES & DAYDREAMS’ 2023 World Tour in MANILA",
    date: "OCTOBER 8, 2026",
    time: "8:00PM",
    venue: "Skydome, SM City North EDSA, Quezon City, Philippines",
    image: "pics/all_19.webp",
    description: "Against The Current returns to Manila for their 'Nightmares & Daydreams' World Tour! Get ready to sing and scream along with the band’s electrifying performance.",
    venueInfo: "Skydome at SM City North EDSA provides an intimate and energetic space perfect for connecting with fans and experiencing the band up close.",
    ticketTypes: [
      {
        type: "VIP with Meet & Greet",
        price: 5500,
        available: 100,
        benefits: ["Meet & Greet with the band", "Priority entrance"]
      },
      {
        type: "VIP",
        price: 3500,
        available: 150,
        benefits: ["Great viewing area", "Early entry"]
      },
      {
        type: "GENERAL ADMISSION",
        price: 2500,
        available: 200,
        benefits: ["Access to main concert area"]
      }
    ]
  },
  {
    id: 25,
    title: "SAOSIN ASIA TOUR 2023 LIVE IN MANILA",
    date: "November 3 - 4, 2026",
    time: "8:00PM",
    venue: "Skydome, SM City North EDSA, Quezon City, Philippines",
    image: "pics/all_20.webp",
    description: "SAOSIN is bringing their signature post-hardcore sound back to Manila for a 2-night show! Relive the anthems and witness a raw and powerful live performance.",
    venueInfo: "Skydome at SM City North EDSA offers an intense, intimate vibe perfect for rock and alternative acts like SAOSIN.",
    ticketTypes: [
      {
        type: "VIP",
        price: 3500,
        available: 150,
        benefits: ["Priority entry", "Closer viewing area"]
      },
      {
        type: "GEN AD",
        price: 2500,
        available: 200,
        benefits: ["Access to main concert area"]
      }
    ]
  },
  {
    id: 26,
    title: "ONE OK ROCK ANNOUNCE LUXURY DISEASE ASIA TOUR 2023",
    date: "September 26, 2026",
    time: "8:00PM",
    venue: "Araneta Coliseum, Quezon City, Philippines",
    image: "pics/all_21.webp",
    description: "Japanese rock band ONE OK ROCK returns to Manila with their highly anticipated LUXURY DISEASE Asia Tour. Prepare for an electrifying night of anthems and emotional power.",
    venueInfo: "Araneta Coliseum, also known as The Big Dome, hosts world-class performances with seating for thousands and excellent acoustics for live rock shows.",
    ticketTypes: [
      {
        type: "Platinum Zone",
        price: 9500,
        available: 200,
        benefits: ["Best view of the stage", "Priority entry"]
      },
      {
        type: "Gold Zone",
        price: 8000,
        available: 200,
        benefits: ["Excellent view", "Mid-section seats"]
      },
      {
        type: "Patron A",
        price: 7500,
        available: 200,
        benefits: ["Lower level seats close to the stage"]
      },
      {
        type: "Patron B",
        price: 6500,
        available: 200,
        benefits: ["Great lower-level experience"]
      },
      {
        type: "Box A",
        price: 4500,
        available: 200,
        benefits: ["Upper level with direct view"]
      },
      {
        type: "Box B",
        price: 3000,
        available: 200,
        benefits: ["More affordable, elevated seats"]
      }
    ]
  },
  {
    id: 26,
    title: "ONE OK ROCK ANNOUNCE LUXURY DISEASE ASIA TOUR 2023",
    date: "September 26, 2026",
    time: "8:00PM",
    venue: "Araneta Coliseum, Quezon City, Philippines",
    image: "pics/all_21.webp",
    description: "Japanese rock band ONE OK ROCK returns to Manila with their highly anticipated LUXURY DISEASE Asia Tour. Prepare for an electrifying night of anthems and emotional power.",
    venueInfo: "Araneta Coliseum, also known as The Big Dome, hosts world-class performances with seating for thousands and excellent acoustics for live rock shows.",
    ticketTypes: [
      {
        type: "Platinum Zone",
        price: 9500,
        available: 200,
        benefits: ["Best view of the stage", "Priority entry"]
      },
      {
        type: "Gold Zone",
        price: 8000,
        available: 200,
        benefits: ["Excellent view", "Mid-section seats"]
      },
      {
        type: "Patron A",
        price: 7500,
        available: 200,
        benefits: ["Lower level seats close to the stage"]
      },
      {
        type: "Patron B",
        price: 6500,
        available: 200,
        benefits: ["Great lower-level experience"]
      },
      {
        type: "Box A",
        price: 4500,
        available: 200,
        benefits: ["Upper level with direct view"]
      },
      {
        type: "Box B",
        price: 3000,
        available: 200,
        benefits: ["More affordable, elevated seats"]
      }
    ]
  },
  {
    id: 27,
    title: "THE BAY STRIKES BACK TOUR MANILA",
    date: "September 21, 2026",
    time: "6:30PM",
    venue: "Skydome, SM City North EDSA, Quezon City, Philippines",
    image: "pics/all_22.webp",
    description: "Get ready for a historic night of metal as legendary Bay Area thrash bands hit Manila on The Bay Strikes Back Tour. A must-see event for metalheads!",
    venueInfo: "The Skydome at SM North EDSA offers an intimate concert experience with full seating and powerful sound, perfect for heavy music fans.",
    ticketTypes: [
      {
        type: "VIP",
        price: 6000,
        available: 200,
        benefits: ["Seated close to the stage", "Great view and sound"]
      },
      {
        type: "General Admission",
        price: 5000,
        available: 200,
        benefits: ["Full seated access", "Standard view"]
      },
      {
        type: "Meet & Greet Upgrade per Band",
        price: 5500,
        available: 200,
        benefits: ["Meet and greet with individual bands", "Photo opportunity"]
      }
    ]
  },
  {
    id: 28,
    title: "LIVE AT NEW FRONTIER THEATER",
    date: "September 23, 2026",
    time: "6:00PM",
    venue: "New Frontier Theater, Quezon City, Philippines",
    image: "pics/all_23.webp",
    description: "Enjoy an unforgettable evening of live music at New Frontier Theater with a lineup promising powerful performances and an electric atmosphere.",
    venueInfo: "The New Frontier Theater is a modern indoor venue known for excellent acoustics and comfortable seating, ideal for immersive live experiences.",
    ticketTypes: [
      {
        type: "VVIP",
        price: 10500,
        available: 100,
        benefits: ["Premium seating", "Priority entry", "Exclusive perks"]
      },
      {
        type: "VIP",
        price: 8000,
        available: 150,
        benefits: ["Great view", "Comfortable seats"]
      },
      {
        type: "LOGE",
        price: 7500,
        available: 200,
        benefits: ["Elevated seating", "Clear stage view"]
      },
      {
        type: "BALCONY A",
        price: 4500,
        available: 200,
        benefits: ["Affordable elevated view"]
      },
      {
        type: "BALCONY B",
        price: 3500,
        available: 200,
        benefits: ["Budget-friendly option with decent view"]
      }
    ]
  },
  {
    id: 29,
    title: "LIVE AT SKYDOME",
    date: "August 31, 2026",
    time: "8:00PM",
    venue: "Skydome, SM City North EDSA, Quezon City, Philippines",
    image: "pics/all_24.webp",
    description: "A powerful night of live music at Skydome featuring a special performance in an intimate setting with a loyal crowd.",
    venueInfo: "Skydome is a popular indoor venue at SM North EDSA, known for hosting high-energy concerts with great acoustics.",
    ticketTypes: [
      {
        type: "VIP",
        price: 2950,
        available: 200,
        benefits: ["Priority entry", "Premium viewing area"]
      }
    ]
  },
  {
    id: 30,
    title: "2023 KIM SEON HO ASIA TOUR in SINGAPORE",
    date: "September 15, 2026",
    time: "7:00PM",
    venue: "The Star Theatre, Singapore",
    image: "pics/all_25.webp",
    description: "Korean actor Kim Seon Ho brings his charm and warmth to Singapore for a special fan meeting tour at The Star Theatre.",
    venueInfo: "The Star Theatre is a premier performance venue in Singapore, known for its state-of-the-art acoustics and elegant ambiance.",
    ticketTypes: [
      {
        type: "VIP",
        price: 268,
        currency: "SGD",
        benefits: ["Best seats", "Exclusive merchandise", "Hi-touch session"]
      },
      {
        type: "KIM",
        price: 218,
        currency: "SGD"
      },
      {
        type: "SEON",
        price: 188,
        currency: "SGD"
      },
      {
        type: "HO",
        price: 138,
        currency: "SGD"
      },
      {
        type: "HO (Restricted View)",
        price: 118,
        currency: "SGD"
      }
    ]
  },
  {
    id: 31,
    title: "MR. BIG – THE BIG FINISH LIVE IN MANILA",
    date: "August 9, 2026",
    time: "8:00PM",
    venue: "Skydome, SM City North EDSA",
    image: "pics/all_26.webp",
    description: "Legendary rock band MR. BIG brings their farewell tour 'The Big Finish' to Manila, delivering an unforgettable night of hits.",
    venueInfo: "SM North EDSA's Skydome is a popular indoor concert venue known for its intimate atmosphere and great acoustics.",
    ticketTypes: [
      {
        type: "VIP with Photo Meet & Greet",
        price: 7000,
        currency: "PHP",
        benefits: ["Photo op with the band", "Priority seating"]
      },
      {
        type: "VIP",
        price: 4500,
        currency: "PHP"
      },
      {
        type: "Gen Ad",
        price: 3500,
        currency: "PHP"
      }
    ]
  },
  {
    id: 32,
    title: "DHRUV LIVE IN MANILA",
    date: "July 25, 2026",
    time: "8:00PM",
    venue: "The Podium Hall",
    image: "pics/all_27.webp",
    description: "Indian singer-songwriter Dhruv takes the stage in Manila for an intimate concert at The Podium Hall.",
    venueInfo: "The Podium Hall provides an intimate setting for performances, offering great acoustics and a close-up concert experience.",
    ticketTypes: [
      {
        type: "General Admission",
        price: "TBA",
        currency: "PHP"
      }
    ]
  },
  {
    id: 33,
    title: "YOU ME AT SIX TRUTH DECAY TOUR 2023",
    date: "July 06, 2026",
    time: "8:00PM",
    venue: "Skydome, SM City North EDSA",
    image: "pics/all_28.webp",
    description: "British rock band You Me At Six brings their Truth Decay Tour to Manila for an unforgettable night of alternative rock.",
    venueInfo: "Skydome offers an excellent venue for concerts with a great acoustics and spacious seating arrangements for a memorable experience.",
    ticketTypes: [
      {
        type: "VIP",
        price: "Php 4,500",
        currency: "PHP",
        note: "Inclusive of Meet & Greet for the first 200 ticket purchasers"
      },
      {
        type: "General Admission",
        price: "Php 3,500",
        currency: "PHP"
      }
    ]
  },
  {
    id: 34,
    title: "WIN 1ST SOLO FAN MEETING IN MANILA",
    date: "June 11, 2026",
    time: "5:00PM",
    venue: "New Frontier Theater",
    image: "pics/all_29.webp",
    description: "WIN's first solo fan meeting in Manila is a special opportunity for fans to meet the artist and experience a memorable interaction.",
    venueInfo: "New Frontier Theater is known for its intimate atmosphere, providing an up-close experience with the artist.",
    ticketTypes: [
      {
        type: "VIP A",
        price: "P11,500",
        currency: "PHP"
      },
      {
        type: "VIP B",
        price: "P9,500",
        currency: "PHP"
      },
      {
        type: "LOGE A",
        price: "P7,000",
        currency: "PHP"
      },
      {
        type: "LOGE B",
        price: "P7,500",
        currency: "PHP"
      },
      {
        type: "BALCONY A",
        price: "P5,500",
        currency: "PHP"
      },
      {
        type: "BALCONY B",
        price: "P3,500",
        currency: "PHP"
      }
    ]
  },
  {
    id: 35,
    title: "EXO-SC BACK TO BACK FANCON IN MANILA",
    date: "May 20, 2026",
    time: "6:00PM",
    venue: "Araneta Coliseum",
    image: "pics/all_30.webp",
    description: "EXO-SC's Back to Back Fancon in Manila promises an unforgettable experience for fans, bringing the duo closer to their Filipino supporters.",
    venueInfo: "Araneta Coliseum, a historic venue, will host this highly anticipated fan meeting with EXO-SC.",
    ticketTypes: [
      {
        type: "VIP",
        price: "P11,500",
        currency: "PHP"
      },
      {
        type: "PATRON",
        price: "P9,500",
        currency: "PHP"
      },
      {
        type: "LOWER BOX A",
        price: "P8,500",
        currency: "PHP"
      },
      {
        type: "LOWER BOX B",
        price: "P7,500",
        currency: "PHP"
      },
      {
        type: "UPPER BOX A",
        price: "P5,500",
        currency: "PHP"
      },
      {
        type: "UPPER BOX B",
        price: "P4,500",
        currency: "PHP"
      },
      {
        type: "GEN AD",
        price: "P3,000",
        currency: "PHP"
      }
    ]
  },
  {
    id: 36,
    title: "THE 1975 LIVE IN MANILA",
    date: "May 3 - 4, 2026",
    time: "8:00PM",
    venue: "SM Mall of Asia Arena",
    image: "pics/all_31.webp",
    description: "The 1975's highly anticipated live performance in Manila will bring their signature sound and energy to the SM Mall of Asia Arena for two unforgettable nights.",
    venueInfo: "SM Mall of Asia Arena is set to host this much-awaited event, known for its world-class acoustics and comfortable seating.",
    ticketTypes: [
      {
        type: "FLOOR A (Standing & Seated)",
        price: "P9,750",
        currency: "PHP"
      },
      {
        type: "FLOOR B (Standing & Seated)",
        price: "P8,500",
        currency: "PHP"
      },
      {
        type: "PATRON",
        price: "P7,500",
        currency: "PHP"
      },
      {
        type: "LOWER BOX PREMIUM",
        price: "P8,000",
        currency: "PHP"
      },
      {
        type: "LOWER BOX SIDES",
        price: "P7,000",
        currency: "PHP"
      },
      {
        type: "LOWER BOX CENTER",
        price: "P6,000",
        currency: "PHP"
      },
      {
        type: "UPPER BOX SIDES",
        price: "P5,000",
        currency: "PHP"
      },
      {
        type: "UPPER BOX CENTER",
        price: "P4,000",
        currency: "PHP"
      },
      {
        type: "GENERAL ADMISSION",
        price: "P2,500",
        currency: "PHP"
      },
      {
        type: "GENERIC ADMISSION",
        price: "P1,975",
        currency: "PHP"
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', function () {

  const paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems.forEach(item => {
    item.addEventListener('click', function (e) {
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

// Get checkout button element
const checkoutButton = document.getElementById('checkout-button');

// Add event listener to checkout button
checkoutButton.addEventListener('click', function () {
  // Check if user is logged in
  const loggedInUser = localStorage.getItem('qlessUser');
  if (!loggedInUser) {
    alert('Please log in to purchase tickets');
    // Trigger login modal if available
    if (typeof loginBtn !== 'undefined' && loginBtn) {
      loginBtn.click();
    }
    return;
  }

  // Get selected tickets
  const selectedTickets = [];
  document.querySelectorAll('.ticket-card.selected').forEach(card => {
    const ticketType = card.querySelector('h3').textContent;
    const quantity = parseInt(card.querySelector('input[type="number"]').value);
    const price = parseFloat(card.querySelector('input[type="number"]').getAttribute('data-price'));

    if (quantity > 0) {
      selectedTickets.push({
        type: ticketType,
        quantity: quantity,
        price: price,
        subtotal: quantity * price
      });
    }
  });

  // If no tickets selected, show error
  if (selectedTickets.length === 0) {
    alert('Please select at least one ticket');
    return;
  }

  // Get event details from page
  const eventTitle = document.getElementById('event-title').textContent;
  const eventDate = document.getElementById('event-date').textContent;
  const eventVenue = document.getElementById('event-venue').textContent;
  const eventImage = document.getElementById('event-banner').style.backgroundImage.replace('url("', '').replace('")', '');

  // Calculate totals
  const subtotal = selectedTickets.reduce((sum, ticket) => sum + ticket.subtotal, 0);
  const serviceFee = Math.round(subtotal * 0.05);
  const totalAmount = subtotal + serviceFee;

  // Create purchase object
  const purchase = {
    orderId: generateOrderId(),
    purchaseDate: new Date().toISOString(),
    event: {
      title: eventTitle,
      date: eventDate,
      venue: eventVenue,
      image: eventImage
    },
    tickets: selectedTickets,
    subtotal: subtotal,
    serviceFee: serviceFee,
    totalAmount: totalAmount
  };

  // Save purchase to localStorage
  savePurchase(purchase);

  // Show confirmation and redirect
  alert('Purchase successful! Redirecting to your tickets...');

  // Redirect to profile page after short delay
  setTimeout(() => {
    window.location.href = 'profile.html';
  }, 1000);
});

// Generate a random order ID
function generateOrderId() {
  return 'ORD' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Save purchase to localStorage
function savePurchase(purchase) {
  // Get existing purchases
  const purchases = JSON.parse(localStorage.getItem('qlessPurchasedTickets') || '[]');

  // Add new purchase
  purchases.push(purchase);

  // Save to localStorage
  localStorage.setItem('qlessPurchasedTickets', JSON.stringify(purchases));

  // Trigger storage event for profile page to detect
  localStorage.setItem('qlessCheckoutEvent', Date.now().toString());
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
