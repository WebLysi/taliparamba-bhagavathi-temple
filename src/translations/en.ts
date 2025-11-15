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
                image: "thanthri.webp",
                mentioned: "Sree Rajarajeswaram Temple Tantri"
            },   
            {
                position: "Temple Melshanthi",
                name: "Vishnu Namboothiri, Chetur Illam",
                image: "melshanthi.webp",
                mentioned: ""
            },
            {
                position: "Temple Rakshaadhikaari",
                name: "A. K. Reghunathan",
                image: "rakshaadhikaari.webp",
                mentioned: ""
            }
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
        members_title: "Committee Members",

        committes: [
            {
                title: "Kshethra Committee",
                desc: "",
                key: "kshethra",
                main: [ 
                    { name: "Chandran P", position: "President", photo: "src/assets/kshethra-committee/1. Chandran P President New.webp" }, 
                    { name: "Saseendran U", position: "Secretary", photo: "src/assets/kshethra-committee/2. Saseendran U Secretary.webp" }, 
                    { name: "Mohanan K", position: "Treasurer", photo: "src/assets/kshethra-committee/3. Mohanan K Treasurer New.webp" }, 
                    { name: "Sindu Vinod", position: "Vice President", photo: "src/assets/kshethra-committee/4. Sindu Vinod Vice President.webp" }, 
                    { name: "Sreekala P V", position: "Jt. Secretary", photo: "src/assets/kshethra-committee/5. Sreekala P V Jt. Secretary.webp" }, 
                    { name: "Mohanan M", position: "Vice President", photo: "src/assets/kshethra-committee/6. Mohanan M VIce President.webp" }, 
                ],
                members: [
                    { name: "Gangadharan P", position: ""},
                    { name: "Raghunath A K", position: ""},
                    { name: "Vinod M G", position: ""},
                    { name: "Dhanesan E", position: ""},
                    { name: "Rajesh T", position: ""},
                    { name: "Gangadharan M", position: ""},
                    { name: "Rajeevan K P", position: ""},
                    { name: "Ajithkumar K", position: ""},
                    { name: "Lakshmanan P V", position: ""},
                    { name: "Maneesan", position: ""},
                    { name: "Gopidas", position: ""},
                    { name: "Rajan A K", position: ""},
                    { name: "Prathapan", position: ""},
                    { name: "Padmini Chandran", position: ""},
                    { name: "Rajalakshmi M", position: ""},
                    { name: "Jayashree Mohanan", position: ""},
                    { name: "Lakshmi T", position: ""},
                    { name: "Roja Unnikrishnan", position: ""},
                ],
            },
            {
                title: "Mathrusamithi Committee",
                desc: "The Mathrusamithi actively participates in temple festivals, organizes special poojas for devotees, and manages various charitable activities. They play a vital role in maintaining the temple's spiritual and cultural traditions.",
                key: "maathri", 
                main: [ 
                    { name: "Roja Unnikrishnan", position: "President", photo: "src/assets/matrisamithi/1 ROJA UNNIKRISHNAN  PRESIDENT.webp" }, 
                    { name: "Thara P Murali", position: "Secretary", photo: "src/assets/matrisamithi/2 THARA  P   MURALI  SECRETARY.webp" },
                    { name: "Rajina P", position: "Jt. Secretary", photo: "src/assets/matrisamithi/3 RAJINA P.  Jt. SECRETARY.webp" },
                ],  
                members: [
                    { name: "Rajalakshmi M", position: "" },
                    { name: "Bindu Mohanan", position: "" },
                    { name: "Bindu Anup", position: "" },
                    { name: "Chandramathi", position: "" },
                    { name: "Jayshree Mohanan", position: "" },
                    { name: "Shobha Ramesan", position: "" },
                    { name: "Lakshmi T", position: "" },
                    { name: "Padmini", position: "" },
                    { name: "Sindhu Vinod", position: "" },
                    { name: "Praseeda Sukumaran", position: "" },
                    { name: "Rajani Preman", position: "" },
                    { name: "Sangeetha", position: "" },
                    { name: "Sreeja", position: "" },
                    { name: "Sreekalap V", position: "" },
                    { name: "Thankamani", position: "" },
                    { name: "Shyamala Sasidharan", position: "" },
                    { name: "Usha Balan", position: "" },
                    { name: "Balamani", position: "" },
                    { name: "Vinatha Saseendran", position: "" },
                ],
            },
            {
                title: "Naveekarana Committee",
                desc: "",
                key: "naveekarana",
                main: [ 
                    { name: "Rajan AK", position: "President", photo: "src/assets/naveekarana-committee/1. Rajan AK President.webp" }, 
                    { name: "Rajeevan M G", position: "Secretary", photo: "src/assets/naveekarana-committee/2. Rajeevan M G Secretary.webp" }, 
                    { name: "Sreekala P V", position: "Treasurer", photo: "src/assets/naveekarana-committee/3. Sreekala P V Treasurer.webp" }, 
                    { name: "Lakshmanan PV", position: "Vice President", photo: "src/assets/naveekarana-committee/4. Lakshmanan PV Vice President.webp" }, 
                    { name: "Rajeevan K P", position: "Jt. Secretary", photo: "src/assets/naveekarana-committee/5. Rajeevan K P Jt. Secretary.webp" }, 
                    { name: "Rajalakshmi M", position: "Vice President", photo: "src/assets/naveekarana-committee/6. Rajalakshmi M Vice President.webp" }, 
                    { name: "Sindu Vinod", position: "Jt. Secreatary", photo: "src/assets/naveekarana-committee/7. Sindu Vinod Jt. Secreatary.webp" },  
                ],
                members: [
                    { name: "Kumaran M", position: "" },
                    { name: "Reghunath A K", position: "" },
                    { name: "Gangadharan P", position: "" },
                    { name: "Mohanan K", position: "" },
                    { name: "Mohanan M", position: "" },
                    { name: "Rajesh T", position: "" },
                    { name: "Balakrishnan M", position: "" },
                    { name: "Saseendran U", position: "" },
                    { name: "Janardhanan M", position: "" },
                    { name: "Prathapan V", position: "" },
                    { name: "Dhanesan E", position: "" },
                    { name: "Ramadas E N", position: "" },
                    { name: "Shyamala Sasidharan", position: "" },
                    { name: "Shobha Ramesan", position: "" },
                    { name: "Roja Unnikrishnan", position: "" },
                    { name: "Ramani Karunakaran", position: "" },
                    { name: "Ramesan A", position: "" },
                    { name: "Lakshmi T", position: "" },
                    { name: "Chandran P", position: "" },
                    { name: "Mani M", position: "" },
                    { name: "Gangadharan Pattani", position: "" },
                    { name: "Gopidas P", position: "" },
                    { name: "Purushothaman V", position: "" },
                    { name: "Ramesan P", position: "" },
                    { name: "Jayashree Mohanan", position: "" },
                ],
            },
        ],
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
            {title: "Expedited Completion and Re-Consecration Ceremony", text: "Fast-tracked temple construction to ensure timely completion, followed by the re-consecration (Punah Prathishta) and Brahma Kalasham rituals."},
        ],
       
    },

    specialNote: {
        title: "Humble Submission to the Devotees",
        content: "Entry to the Nalambalam (inner sanctum area) is not permitted for those who are observing \"Pula\" (ritual impurity due to death) or \"Valaima\" (ritual impurity due to birth), those under the influence of intoxicants, and those wearing shirts, banians (vests), or lungis.",
        discipline: "Discipline and cleanliness must be strictly maintained within the temple.",
    },

    footer: {
        tagline: "Pookoth Street, Taliparamba",
        contact: "Contact Us",
        location: "Location",
        address: `Taliparamba, Kannur, Kerala. PIN: 670141`,
        templeHours: "Temple Opening Hours",
        copyright: "© {year} Taliparamba Sree Bhagavathi Temple. All rights reserved.",
        preserving: "",
    },
};
