export const specialtyData = {
    data: [
        {
            id: 1,
            name: 'Cardiologist',
            img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/cardiology-3140978-2612660.png',
            description: 'Cardiologists are doctors who specialize in diagnosing and treating diseases or conditions of the heart and blood vessels—the cardiovascular system.'
        },
        {
            id: 2,
            name: 'Dermatologist',
            img: 'https://e7.pngegg.com/pngimages/857/819/png-clipart-dermatology-scar-medicine-physician-computer-icons-scar-purple-violet.png',
            description: 'A dermatologist is a type of doctor that diagnoses and treats conditions that affect your hair, skin, and nails.'
        },
        {
            id: 3,
            name: 'Gynecologist',
            img: 'https://www.shutterstock.com/image-vector/baby-sleeping-hand-logo-care-260nw-1952053138.jpg',
            description: 'A gynecologist is a doctor who specializes in women’s reproductive health. Obstetricians'
        },
        {
            id: 4,
            name: 'Neurologist',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcZyAu4n4PIja1J2v3Sftl5ClpqQssco2_g&s',
            description: 'A neurologist is a medical doctor who specializes in treating diseases of the nervous system. The nervous system is made of two parts: the central and peripheral nervous system.'
        },
        {
            id: 5,
            name: 'Oncologist',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuo7DlFV1s0iLd6X0LPJ6IBEZ3eAJmUqEsA&s',
            description: 'An oncologist is a doctor who treats cancer and provides medical care for a person diagnosed with cancer. The field of oncology has three major areas: medical, surgical, and radiation.'
        },
        {
            id: 6,
            name: 'Pediatrician',
            img: 'https://www.clipartmax.com/png/full/336-3367238_download-pediatrician-symbol-png-clipart-pediatrics-pediatrics.png',
            description: 'A pediatrician is a medical doctor who manages the physical, behavioral, and mental care for children from birth until age 18. A pediatrician is trained to diagnose and treat a broad range of childhood illnesses, from minor health problems to serious diseases.'
        }
       
    ]

}

export const doctors = [
    {
        _id: "doc1",
        name: 'Dr. Robert Smith',
        specialty: 'Cardiologist',
        image: 'https://img.freepik.com/premium-photo/male-female-doctor-portrait-healthcare-medical-staff-concept-confident-doctor-portrait_1108314-405796.jpg',
        degree: 'MD, FAC',
        experience: '15 years',
        fees: 120,
        rating: 4.8,
        description: 'Dr. Robert Smith is a highly skilled cardiologist with expertise in heart disease treatment.',
        address:{
            line1: '456 Elm Street',
            line2: 'Los Angeles, USA'
        }
    },
    {
        _id: "doc2",
        name: 'Dr. Emily Johnson',
        specialty: 'Dermatologist',
        image: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, FAD',
        experience: '12 years',
        fees: 90,
        rating: 4.6,
        description: 'Dr. Emily Johnson specializes in skin disorders and cosmetic dermatology.',
        address:{
            line1: '789 Oak Avenue',
            line2: 'Chicago, USA'
        }
    },
    {
        _id: "doc3",
        name: 'Dr. Sophia Patel',
        specialty: 'Gynecologist',
        image: 'https://img.freepik.com/free-photo/doctor-with-stethoscope-hand-her-pocket-closeup-female-smiling-while-standing-straight-white-background_657921-731.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, DGO',
        experience: '14 years',
        fees: 110,
        rating: 4.7,
        description: 'Dr. Sophia Patel provides expert care in women’s health and pregnancy management.',
        address:{
            line1: '102 Maple Drive',
            line2: 'Houston, USA'
        }
    },
    {
        _id: "doc4",
        name: 'Dr. Daniel White',
        specialty: 'Neurologist',
        image: 'https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-crossed-arms_1262-12865.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, PhD',
        experience: '18 years',
        fees: 150,
        rating: 4.9,
        description: 'Dr. Daniel White is a leading neurologist specializing in brain disorders and neurodegenerative diseases.',
        address:{
            line1: '215 Cedar Street',
            line2: 'New York, USA'
        }
    },
    {
        _id: "doc5",
        name: 'Dr. Olivia Martinez',
        specialty: 'Oncologist',
        image: 'https://img.freepik.com/free-photo/doctor-using-tablet-computer-isolated-white-wall_231208-841.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, DM (Oncology)',
        experience: '20 years',
        fees: 200,
        rating: 5.0,
        description: 'Dr. Olivia Martinez is a renowned oncologist dedicated to cancer treatment and research.',
        address:{
            line1: '333 Pine Avenue',
            line2: 'Miami, USA'
        }
    },
    {
        _id: "doc6",
        name: 'Dr. Benjamin Harris',
        specialty: 'Pediatrician',
        image: 'https://img.freepik.com/free-photo/young-man-doctor-wearing-white-coat-stethoscope-looking-confident-with-crossed-arms_141793-12596.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, FAA',
        experience: '11 years',
        fees: 80,
        rating: 4.6,
        description: 'Dr. Benjamin Harris is a dedicated pediatrician ensuring the best care for children and adolescents.',
        address:{
            line1: '777 Birch Lane',
            line2: 'Seattle, USA'
        }
    },
    {
        _id: "doc7",
        name: 'Dr. William Carter',
        specialty: 'Cardiologist',
        image: 'https://img.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, FESS',
        experience: '17 years',
        fees: 130,
        rating: 4.7,
        description: 'Dr. William Carter is a highly experienced cardiologist specializing in heart failure and hypertension.',
        address:{
            line1: '900 Willow Road',
            line2: 'Dallas, USA'
        }
    },
    {
        _id: "doc8",
        name: 'Dr. Amelia Lewis',
        specialty: 'Dermatologist',
        image: 'https://img.freepik.com/free-photo/confident-attractive-male-doctor-wearing-white-lab-coat-while-standing-with-arms-crossed-against-turquoise-background_662251-1654.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, MD (Dermatology)',
        experience: '13 years',
        fees: 95,
        rating: 4.5,
        description: 'Dr. Amelia Lewis is an expert in treating skin conditions and performing laser skin therapies.',
        address:{
            line1: '1220 Aspen Court',
            line2: 'Boston, USA'
        }
    },
    {
        _id: "doc9",
        name: 'Dr. Nathan Brown',
        specialty: 'Gynecologist',
        image: 'https://img.freepik.com/free-photo/international-medical-student-man-blue-uniform-doctor-with-stethoscope_1157-43733.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, MS (OGON)',
        experience: '16 years',
        fees: 115,
        rating: 4.8,
        description: 'Dr. Nathan Brown specializes in maternal health and reproductive endocrinology.',
        address:{
            line1: '505 Cypress Street',
            line2: 'San Diego, USA'
        }
    },
    {
        _id: "doc10",
        name: 'Dr. Christopher Wilson',
        specialty: 'Neurologist',
        image: 'https://img.freepik.com/free-photo/surgeon-with-stethoscope-neck-arms-crossed_1291-8.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, DM (Neurology)',
        experience: '19 years',
        fees: 145,
        rating: 4.9,
        description: 'Dr. Christopher Wilson is a distinguished neurologist with a focus on stroke and epilepsy treatment.',
        address:{
            line1: '630 Redwood Boulevard',
            line2: 'San Francisco, USA'
        }
    },
    {
        _id: "doc11",
        name: 'Dr. Sophia Clark',
        specialty: 'Endocrinologist',
        image: 'https://img.freepik.com/free-photo/female-doctor-wearing-white-coat-front-view_23-2149844575.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD, PhD',
        experience: '12 years',
        fees: 120,
        rating: 4.8,
        description: 'Dr. Sophia Clark specializes in hormone-related conditions and diabetes management.',
        address: {
            line1: '45 Oak Avenue',
            line2: 'Los Angeles, USA'
        }
    },
    {
        _id: "doc12",
        name: 'Dr. Ethan Miller',
        specialty: 'Orthopedic Surgeon',
        image: 'https://img.freepik.com/free-photo/portrait-man-wearing-medical-gown-holding-clipboard_23-2149529446.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MS Ortho',
        experience: '15 years',
        fees: 150,
        rating: 4.7,
        description: 'Dr. Ethan Miller is an experienced orthopedic surgeon specializing in joint replacements and sports injuries.',
        address: {
            line1: '789 River Road',
            line2: 'Chicago, USA'
        }
    },
    {
        _id: "doc13",
        name: 'Dr. Olivia Bennett',
        specialty: 'Psychiatrist',
        image: 'https://img.freepik.com/free-photo/doctor-white-coat-using-digital-tablet-reading-medical-data-gadget-working-hospital-standin_1258-87435.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD Psychiatry',
        experience: '10 years',
        fees: 90,
        rating: 4.6,
        description: 'Dr. Olivia Bennett is a compassionate psychiatrist specializing in anxiety and mood disorders.',
        address: {
            line1: '22 Lake Street',
            line2: 'New York, USA'
        }
    },
    {
        _id: "doc14",
        name: 'Dr. William Carter',
        specialty: 'Pulmonologist',
        image: 'https://img.freepik.com/free-photo/covid-19-healthcare-workers-pandemic-preventing-virus-concept-serious-determined-doctor-working-with-coronavirus-patients-wearing-protective-personal-equipment-medical-mask-gloves_1258-58624.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, MD Pulmonologist',
        experience: '8 years',
        fees: 110,
        rating: 4.5,
        description: 'Dr. William Carter focuses on lung diseases such as asthma, COED, and tuberculosis.',
        address: {
            line1: '56 Greenaway Blvd',
            line2: 'Houston, USA'
        }
    },
    {
        _id: "doc15",
        name: 'Dr. Isabella Evans',
        specialty: 'Ophthalmologist',
        image: 'https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall_141793-47701.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MD Ophthalmology',
        experience: '9 years',
        fees: 100,
        rating: 4.9,
        description: 'Dr. Isabella Evans is an expert in vision correction and cataract surgeries.',
        address: {
            line1: '10 Pine Street',
            line2: 'San Francisco, USA'
        }
    },
    {
        _id: "doc16",
        name: 'Dr. Henry Scott',
        specialty: 'Urologist',
        image: 'https://img.freepik.com/free-photo/front-view-male-doctor-medical-suit-wearing-mask-against-covid-white-wall-virus-covid-illness-disease-pandemic_140725-67247.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, MCh Urology',
        experience: '13 years',
        fees: 140,
        rating: 4.7,
        description: 'Dr. Henry Scott specializes in kidney stones, urinary infections, and prostate health.',
        address: {
            line1: '78 Willow Lane',
            line2: 'Boston, USA'
        }
    },
    {
        _id: "doc17",
        name: 'Dr. Emily Richardson',
        specialty: 'Gastroenterologist',
        image: 'https://img.freepik.com/free-photo/healthcare-workers-preventing-virus-quarantine-campaign-concept-cheerful-friendly-asian-female-physician-doctor-with-clipboard-daily-checkup-standing-white-background_1258-107867.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, MD Gastroenterology',
        experience: '11 years',
        fees: 130,
        rating: 4.6,
        description: 'Dr. Emily Richardson is a leading gastroenterologist specializing in digestive disorders.',
        address: {
            line1: '33 Maple Avenue',
            line2: 'Seattle, USA'
        }
    },
    {
        _id: "doc18",
        name: 'Dr. Lucas White',
        specialty: 'Radiologist',
        image: 'https://img.freepik.com/free-photo/portrait-young-friendly-doctor-nurse-with-stethoscope_171337-15712.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, MD Radiology',
        experience: '14 years',
        fees: 160,
        rating: 4.8,
        description: 'Dr. Lucas White is an expert in medical imaging and diagnostic radiology.',
        address: {
            line1: '120 Sunrise Blvd',
            line2: 'Denver, USA'
        }
    },
    {
        _id: "doc19",
        name: 'Dr. Ava Turner',
        specialty: 'Necrologist',
        image: 'https://img.freepik.com/free-photo/adorable-young-girl-posing-with-clipboard_23-2148465656.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS, MD Nephology',
        experience: '9 years',
        fees: 125,
        rating: 4.6,
        description: 'Dr. Ava Turner focuses on kidney diseases and dialysis treatments.',
        address: {
            line1: '42 Cedar Street',
            line2: 'Miami, USA'
        }
    },
    {
        _id: "doc20",
        name: 'Dr. Daniel Harris',
        specialty: 'General Physician',
        image: 'https://img.freepik.com/free-photo/smiling-young-bald-male-doctor-wearing-medical-robe-stethoscope-crossing-hands-isolated-blue-background_141793-83947.jpg?ga=GA1.1.937919338.1740489376&semt=ais_hybrid',
        degree: 'MBBS',
        experience: '7 years',
        fees: 80,
        rating: 4.4,
        description: 'Dr. Daniel Harris is a dedicated general physician providing primary care services.',
        address: {
            line1: '99 Elm Avenue',
            line2: 'Dallas, USA'
        }
    }
]