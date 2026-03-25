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
        donationButton: "Click here to make a donation to the divine presence",
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
                position: "Managing Trustee / Rakshaadhikaari",
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
        name: "Particulars",
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
              { date: "Makaram 6, 7 (January)", name: "Prathishta Dinam / Makara Pongaala", description: "Installation Day of the Deity" },
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
        title: "Temple Administration",
        subtitle: "",
        members_title: "Committee Members",

        committes: [
            {
                title: "Kshethram Bharanasamithi",
                desc: "",
                key: "kshethra",
                main: [ 
                    { name: "Chandran P", position: "President", photo: "kshethra-committee/1. Chandran P President New.webp" }, 
                    { name: "Saseendran U", position: "Secretary", photo: "kshethra-committee/2. Saseendran U Secretary.webp" }, 
                    { name: "Mohanan K", position: "Treasurer", photo: "kshethra-committee/3. Mohanan K Treasurer New.webp" }, 
                    { name: "Sindu Vinod", position: "Vice President", photo: "kshethra-committee/4. Sindu Vinod Vice President.webp" }, 
                    { name: "Mohanan M", position: "Vice President", photo: "kshethra-committee/6. Mohanan M VIce President.webp" }, 
                    { name: "Sreekala P V", position: "Jt. Secretary", photo: "kshethra-committee/5. Sreekala P V Jt. Secretary.webp" }, 
                    { name: "Prema AK", position: "Jt. Secretary", photo: "kshethra-committee/7. Prema AK joint secretary.webp" },                   
                ],
                members: [
                    { name: "Gangadharan P", position: ""},
                    { name: "A K Raghunath", position: ""},
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
                title: "Kshethram Paripaalika",
                desc: "",
                key: "paripaalika",
                main: [ 
                    { name: "M Meenakshi", position: "Kshethram Paripaalika", photo: "kshethram-paripaalika/kshethram-paripaalika.webp" }, 
                ]
            },
            {
                title: "Mathrusamithi Committee",
                desc: "",
                key: "maathri", 
                main: [ 
                    { name: "Devi", position: "President", photo: "matrisamithi/5. Devi (President).webp" },
                    { name: "Roja Unnikrishnan", position: "President", photo: "matrisamithi/1 ROJA UNNIKRISHNAN  PRESIDENT.webp" }, 
                    { name: "Thara P Murali", position: "Secretary", photo: "matrisamithi/2 THARA  P   MURALI  SECRETARY.webp" },
                    { name: "Rajina P", position: "Jt. Secretary", photo: "matrisamithi/3 RAJINA P.  Jt. SECRETARY.webp" },
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
                    { name: "Sreekala PV", position: "" },
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
                    { name: "Rajan AK", position: "President", photo: "naveekarana-committee/1. Rajan AK President.webp" }, 
                    { name: "Rajeevan M G", position: "Secretary", photo: "naveekarana-committee/2. Rajeevan M G Secretary.webp" }, 
                    { name: "Sreekala P V", position: "Treasurer", photo: "naveekarana-committee/3. Sreekala P V Treasurer.webp" }, 
                    { name: "Lakshmanan PV", position: "Vice President", photo: "naveekarana-committee/4. Lakshmanan PV Vice President.webp" }, 
                    { name: "Rajalakshmi M", position: "Vice President", photo: "naveekarana-committee/6. Rajalakshmi M Vice President.webp" }, 
                    { name: "Rajeevan K P", position: "Jt. Secretary", photo: "naveekarana-committee/5. Rajeevan K P Jt. Secretary.webp" }, 
                    { name: "Sindu Vinod", position: "Jt. Secreatary", photo: "naveekarana-committee/7. Sindu Vinod Jt. Secreatary.webp" },  
                ],
                members: [
                    { name: "Kumaran M", position: "" },
                    { name: "A K Reghunath", position: "" },
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
            {
                title: "Kshethram kazhakam",
                desc: "",
                key: "kazhakam",
                main: [ 
                    { name: "Karthyaaayini", position: "", photo: "kshethram-kazhakam/Karthyaaayini.webp" }, 
                ]
            },
        ],
    },

    gallery: {
        title: "Photo Gallery",
        subtitle: "Memories of Sacred Celebrations",
        clickToView: "Click a category to open its gallery. Sort by date and scroll to load more.",
        categories: [
            {
                id: "g1",
                name: "Makarappongala",
                date: "January 2026",
                thumbnail: "Makarappongala-2026/img1.webp",
                images: [
                    { src: "Makarappongala-2026/img1.webp", date: "2024-03-20" },
                    { src: "Makarappongala-2026/img2.webp", date: "2024-02-14" },
                    { src: "Makarappongala-2026/img3.webp", date: "2024-01-10" },
                    { src: "Makarappongala-2026/img4.webp", date: "2024-01-10" },
                    { src: "Makarappongala-2026/img5.webp", date: "2024-01-10" },
                    { src: "Makarappongala-2026/img6.webp", date: "2024-01-10" },
                ],
            },
            {
                id: "daily",
                name: "Daily Rituals",
                date: "",
                thumbnail: "02.jpg",
                images: [
                    { src: "02.jpg", date: "2024-04-01" },
                    { src: "01.jpg", date: "2024-03-15" },
                ],
            },
            {
                id: "management",
                name: "Management",
                date: "",
                thumbnail: "09.jpg",
                images: [
                    { src: "09.jpg", date: "2024-05-05" },
                    { src: "image.png", date: "2024-04-20" },
                ],
            },
        ],
    },

    architecture: {
        title: "Infrastructural Developments",
        subtitle: "Architecture & Expansion Plans",
        points: [
            {title: "New Bhadrakali Temple Construction", text: "The construction follows a traditional style, strictly adhering to the rituals of Agama Shastra and the spiritual principles of Vastu Vidya. In the first phase, the project aims to construct the Sreekovil (Sanctum Sanctorum), Naalambalam, Chuttambalam, Balikkallu (Sacrificial Stones), Paattupura, and the Perimeter Wall."},
            {title: "Parashakti Consecration in Vayu Kona", text: "New consecration (Prathishta) of the deity Parashakti in the North-West corner (Vayu Kona) of the temple complex, including the installation of a Peetha (pedestal) and stone idol (Shila Vigraham)."},
            {title: "Expedited Completion and Re-Consecration Ceremony", text: "Fast-tracked temple construction to ensure timely completion, followed by the re-consecration (Punah Prathishta) and Brahma Kalasham rituals."},
        ],
       
    },

    donation: {
        title: "Donation",
        subtitle: "",
        openUPIButton: "Open UPI App",
        accountDetailsTitle: "Account Details",
        accountName: "Account Name",
        accountNumber: "Account Number",
        bankName: "Bank Name",
        ifscCode: "IFSC Code",
        upiId: "UPI ID",
        alert: {
            title: "Donation Instructions",
            toaster: "An estimated outlay of approximately ₹1 Crore is projected for the first phase of construction, which includes the Sreekovil (Sanctum Sanctorum) for Goddess Bhadrakali, Naalambalam, Chuttambalam, Balikkallu (Sacrificial Stones), Paattupura, and the Perimeter Wall. The generous participation and wholehearted cooperation of every devotee are paramount to the success of this noble mission.\n\n We most respectfully and joyfully seek your complete support in this sacred endeavor.",
            message1: "",
            message2: "",
        },
        types: [
            {
                title: "Temple Donation",
                qrCode: "upi-qr/temple-qr.webp",
                upiId: "202601prt73wrbxrronpstqrsbrp@cbin",
                accountDetails: {
                    accountName: "TALIPARAMBA SREE BHAGAVATHI TEMPLE",
                    accountNumber: "5929465900",
                    bankName: "Central Bank of India",
                    ifscCode: "CBIN0284514",
                },
                upiUrl: "upi://pay?pa=202601prt73wrbxrronpstqrsbrp@cbin&cu=INR",
            },
            {
                title: "Renovation Donation",
                qrCode: "upi-qr/trust-qr.webp",
                upiId: "202510prteim7nzfpwnpstqrsbrp@cbin",
                accountDetails: {
                    accountName: "TALIPARAMBA SREE BHAGAVATHI TRUST",
                    accountNumber: "3588847183",
                    bankName: "Central Bank of India",
                    ifscCode: "CBIN0284514",
                },
                upiUrl: "upi://pay?pa=202510prteim7nzfpwnpstqrsbrp@cbin&cu=INR",
            },
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
