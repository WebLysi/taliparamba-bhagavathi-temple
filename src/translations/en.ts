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
        poojaTimings: "Timings & Festivals",
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
            { name: "Pushpanjali", price: "₹51" },
            { name: "Nivedyam", price: "₹101" },
            { name: "Sahasranamam", price: "₹151" },
            { name: "Archana", price: "₹201" },
            { name: "Nalpayasam", price: "₹251" },
            { name: "Ganapathi Homam", price: "₹501" },
            { name: "Chandanam Charthal", price: "₹151" },
            { name: "Vilakku", price: "₹101" }
        ],
        bookingTitle: "How to Book Vazhipaad",
        booking1: "Visit the temple office during temple hours (5:00 AM - 9:00 PM)",
        booking2: "Online booking available through temple website (coming soon)",
        booking3: "Contact: +91 9539531021 for advance bookings",
        booking4: "Special packages available for festivals and occasions",
    },

    calendar: {
        title: "Yearly Calendar",
        subtitle: "Annual Festivals & Celebrations",
        smallerText: "Smaller Text",
        largerText: "Larger Text",
        note: "Note:",
        noteText: "Festival dates may vary based on Malayalam calendar and lunar cycles. Please check with temple office for exact dates and timings.",
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
        tagline: "",
        contact: "Contact Us",
        location: "Location",
        address: `Taliparamba, 
Kannur,
Kerala
PIN-CODE: 670141`,
        templeHours: "Temple Opening Hours",
        copyright: "© {year} Taliparamba Sree Bhagavathi Temple. All rights reserved.",
        preserving: "",
    },
};
