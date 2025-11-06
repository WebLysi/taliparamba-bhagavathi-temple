import Management from "@/components/Management";
import { title } from "process";

export default {
    lang: "en",

    nav: {
        home: "Home",
        history: "History",
        management: "Management",
        poojaTimings: "Timings & Festivals",
        vazhipaad: "Offerings",
        gallery: "Gallery",
        committee: "Committee",
    },

    hero: {
        title: "Taliparamba Sree Bhagavathi Temple",
        subtitle: "Pookoth Street, Taliparamba",
        poojaTimings: "Temple Timing",
        vazhipaadDetails: "Offerings Details",
    },

    history: {
        title: "Temple History",
        subtitle: "",
        name: `"Jai Maa Durga!"`,
        content: `It has been revealed through Ashtamangalya Swarnaprashna Chinta (an astrological/divination method) that a Bhadrakali temple, which was worshipped by the Perur Illam family of Kodallur from ancient times, existed on this sacred land (Arudham).

Taliparamba Sree Bhagavathi Temple, located close to the heart of Taliparamba town, is a center of worship where rituals are performed according to Tantric traditions, following both Bhuthalaya (spirit/elemental abode) and Devalaya (deity abode) systems.

However, over time, this temple fell into disrepair, and later, our ancestors settled on the same land, continuing to worship and perform rituals according to the Bhuthalaya system.

Centuries ago, our ancestors (Chathangattillam) consecrated Parokkavil Bhagavathi, the deity of Kunnaru Desam near Ramanthali, on this sacred land. Currently, she is worshipped in the Thekkepalliyara (Southern Shrine) according to the Devalaya system.

Until the dilapidated Bhadrakali temple can be renovated, the current practice here is to perform a special Padmam (ritualistic drawing) puja for Bhadrakali as part of the annual festival.
    `,
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
    },

    management: {
        title: "Temple Management",
        subtitle: "", 
        managements: [
            {
                position: "Temple Thanthri",
                name: "Brahmasree Naduvath Pudayoor Vasudevan Namboothiri",
                image: "thanthri.png",
                mentioned: "Sree Rajarajeswaram Temple Tantri"
            },
            {
                position: "Temple Rakshaadhikaari",
                name: "A. K. Reghunathan",
                image: "placeholder.svg",
                mentioned: ""
            },
            {
                position: "Temple Melshanthi",
                name: "Vishnu Namboothiri, Chetur Illam",
                image: "melshanthi.jpeg",
                mentioned: ""
            },
        ]
    },

    timings: {
        title: "Temple Timings",
        subtitle: "Daily Worship Schedule",
        timing_list: [
            {day: "All Friday Evening", time: ["Evening 5:00 PM - 7:30 PM"]},
            {day: "All Hindu Festival Days", time: ["Morning 5:30 AM - 9:00 AM", "Evening 5:00 PM - 7:30 PM"]}
        ]
    },
    

    vazhipaad: {
        title: "Offerings Details",
        subtitle: "",
        name: "Name",
        price: "Price",
        items: [
            { name: "Neyy Vilakku", price: "₹20.00" },
            { name: "Enna Vilakku", price: "₹20.00" },
            { name: "Naranga Vilakku", price: "₹20.00" },
            { name: "Naranga Mala", price: "₹150.00" },
            { name: "Pushpanjali", price: "₹10.00" },
            { name: "Raktha Pushpanjali", price: "₹20.00" },
            { name: "Bhagya Sooktha Pushpanjali", price: "₹50.00" },
            { name: "Purusha Sooktha Pushpanjali", price: "₹50.00" },
            { name: "Aikamatya Sooktha Pushpanjali", price: "₹50.00" },
            { name: "Swayamvara Pushpanjali", price: "₹100.00" },
            { name: "Vidyagopala Mantrarchana", price: "₹50.00" },
            { name: "Sahasranama Pushpanjali", price: "₹50.00" },
            { name: "Thrimadhuram", price: "₹20.00" },
            { name: "Chuvanna Pattu", price: "₹10.00" },
            { name: "Aal Roopam", price: "₹10.00" },
            { name: "Swarna Thaali", price: "₹10.00" },
            { name: "Mala Chaarthu", price: "₹25.00" },
            { name: "Divasa Pooja", price: "₹1500.00" },
            { name: "Niramaala", price: "₹2000.00" },
            { name: "Alankara Pooja Valuthu", price: "₹500.00" },
            { name: "Alankara Pooja Cheruthu", price: "₹100.00" },
            { name: "Kumkumarchana", price: "₹100.00" },
            { name: "Appam Nivedyam (Exc. Mat.)", price: "₹100.00" },
            { name: "Paalppayasam (Exc. Mat.)", price: "₹50.00" },
            { name: "Sarkkara Payasam (Exc. Mat.)", price: "₹50.00" },
            { name: "Kadum Payasam (Exc. Mat.)", price: "₹50.00" },
            { name: "Panakam (Exc. Mat.)", price: "₹50.00" },
            { name: "Guruti Nivedyam (Exc. Mat.)", price: "₹50.00" },
            { name: "Udayasthamana Pooja (Exc. Mat.)", price: "₹1000.00" },
            { name: "Ganapathi Homam (Exc. Mat.)", price: "₹100.00" },
            { name: "Navagraha Pooja (Exc. Mat.)", price: "₹100.00" },
            { name: "Poomoodal (Exc. Mat.)", price: "₹100.00" },
            { name: "Choroonu", price: "₹100.00" },
            { name: "Namakaranam", price: "₹20.00" },
            { name: "Vivaham", price: "₹100.00" },
            { name: "Annadanam (Exc. Mat.)", price: "₹100.00" },
            { name: "Thulabharam (Exc. Mat.)", price: "₹100.00" },
            { name: "Mrithyunjaya Homam (Exc. Mat.)", price: "₹100.00" },
            { name: "Bhagavathi Seva (Exc. Mat.)", price: "₹200.00" },
            { name: "Thiruvakkadi (Prathishtaday Only)", price: "₹100.00" },
            { name: "Sarpabali (Prathishtaday Only)", price: "₹100.00"},
            { name: "Vidyarambham", price: "₹20.00" }
        ],
        bookingTitle: "How to Book Vazhipaad",
        booking1: "Visit the temple office during temple hours (5:00 AM - 9:00 PM)",
        booking2: "Online booking available through temple website (coming soon)",
        booking3: "Contact: +91 9539531021 for advance bookings",
        booking4: "Special packages available for festivals and occasions",
    },

    calendar: {
        title: "Yearly Calendar",
        subtitle: "",
        note: "Note:",
        noteText: "Festival dates may vary based on Malayalam calendar and lunar cycles. Please check with temple office for exact dates and timings.",
        event: {
            months: "Festival Calendar",
            events: [
              { date: "", name: "Prathishta Dinam: Makaram 6, 7 (January)", description: "Installation Day of the Deity" },
              { date: "", name: "Mahashivaratri", description: "A major Hindu festival dedicated to Lord Shiva" },
              { date: "", name: "Meena Masam Pooram", description: "Pooram star in the Malayalam month of Meenam" },
              { date: "", name: "Vishukkani: Medamasam (April) ", description: "The traditional Hindu new year celebration in Kerala" },
              { date: "", name: "Nira Adiyanthiram", description: "A special ritual involving new harvest/grains, often for prosperity" },
              { date: "", name: "Thiruvonam", description: "The main day of Onam, the state festival of Kerala" },
              { date: "", name: "Ashtami Rohini", description: "Janmashtami/Krishna Jayanti, the birthday of Lord Krishna" },
              { date: "", name: "Thriputhari", description: "A ritualistic offering of new rice harvest" },
              { date: "", name: "Navaratri Mahotsavam", description: "The grand nine-night festival of Navaratri" },
              { date: "", name: "Thrikarthika", description: "A festival of lights, often associated with Karthika star" },
              { date: "", name: "The four Amavasya/New Moon days, considered sacred for ancestral rites", description: "" },
              { date: "", name: "In addition, all Tuesdays, Fridays, and Sundays", description: "" },
            ],
        }
    },

    committee: {
        title: "Temple Committee",
        subtitle: "Dedicated Service to the Divine",
        managingCommittee: "Temple Managing Committee",
        maathrisamithi: "Maathrisamithi (Women's Committee)",
        maathrisamithiDesc: "The Maathrisamithi actively participates in temple festivals, organizes special poojas for devotees, and manages various charitable activities. They play a vital role in maintaining the temple's spiritual and cultural traditions.",
        president: "President",
        vicePresident: "Vice President",
        secretary: "Secretary",
        treasurer: "Treasurer",
        jointSecretary: "Joint Secretary",
        member: "Committee Member",
    },

    gallery: {
        title: "Photo Gallery",
        subtitle: "Memories of Sacred Celebrations",
        morePhotos: "More photos from our celebrations and daily rituals",
        viewAll: "View All Photos",


    },

    architecture: {
        title: "Infrastructural Developments",
        subtitle: "3D Architecture & Expansion Plans",
        points: [
            {title: "New Bhadrakali Temple Construction", text: "Construction of a new Bhadrakali Temple with traditional temple architecture, adhering to Agama Shastra and spiritual design principles."},
            {title: "Parashakti Consecration in Vayu Kona", text: "New consecration (Prathishta) of the deity Parashakti in the North-West corner (Vayu Kona) of the temple complex, including the installation of a Peetha (pedestal) and stone idol (Shila Vigraham)."},
            {title: "Expedited Completion and Re-Consecration Ceremony", text: "Fast-tracked temple construction to ensure timely completion, followed by the re-consecration (Punah Prathishta) and Brahma Kalasham rituals."},
        ],
       
    },

    footer: {
        tagline: "Pookoth Street, Taliparamba",
        contact: "Contact Us",
        location: "Location",
        address: `Taliparamba, 
Kannur,
Kerala
PIN: 670141`,
        templeHours: "Temple Opening Hours",
        copyright: "© {year} Taliparamba Sree Bhagavathi Temple. All rights reserved.",
        preserving: "",
    },
};
