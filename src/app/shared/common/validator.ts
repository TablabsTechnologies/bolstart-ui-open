export class common {
    public static month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    public static day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    // public static industries = ["Accounting", "Airlines/Aviation", "Alternative Dispute Resolution", "Alternative Medicine", "Animation", "Apparel & Fashion",
    //     "Architecture & Planning", "Arts & Crafts", "Automotive", "Infromation Technology & Services", "Fishy"]

    public static state = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
        "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"]

    public static industries = ["Accounting", "Airlines / Aviation",
        "Alternative", "Dispute Resolution",
        "Alternative Medicine",
        "Animation",
        "Apparel & Fashion",
        "Architecture & Planning",
        "Arts & Crafts",
        "Automotive",
        "Aviation & Aerospace",
        "Banking",
        "Biotechnology",
        "Broadcast Media",
        "Building Materials",
        "Business Supplies & Equipment",
        "Capital Markets",
        "Chemicals",
        "Civic & Social Organization",
        "Civil Engineering",
        "Commercial Real Estate",
        "Computer & Network Security",
        "Computer Games",
        "Computer Hardware",
        "Computer Networking",
        "Computer Software",
        "Construction",
        "Consumer Electronics",
        "Consumer Goods",
        "Consumer Services",
        "Cosmetics",
        "Dairy",
        "Defense & Space",
        "Design",
        "Education Management",
        "E - learning",
        "Electrical & Electronic Manufacturing",
        "Entertainment",
        "Environmental Services",
        "Events Services",
        "Executive Office",
        "Facilities Services",
        "Farming",
        "Fashion",
        "Financial Services",
        "Fine Art",
        "Fishery",
        "Food & Beverages",
        "Food Production",
        "Fundraising",
        "Furniture",
        "Gambling & Casinos",
        "Glass Ceramics & Concrete",
        "Government Administration",
        "Government Relations",
        "Graphic Design",
        "Health Wellness & Fitness",
        "Higher Education",
        "Hospital & Health Care",
        "Hospitality",
        "Human Resources",
        "Import & Export",
        "Industrial Automation",
        "Information Services",
        "Information Technology & Services",
        "Insurance",
        "International Affairs",
        "International Trade & Development",
        "Internet",
        "Investment Banking / Venture",
        "Investment Management",
        "Judiciary",
        "Law Enforcement",
        "Law Practice",
        "Legal Services",
        "Legislative Office",
        "Leisure & Travel",
        "Libraries",
        "Logistics & Supply Chain",
        "Luxury Goods & Jewelry",
        "Machinery",
        "Management Consulting",
        "Maritime",
        "Marketing & Advertising",
        "Market Research",
        "Mechanical or Industrial Engineering",
        "Media Production",
        "Medical Device",
        "Medical Practice",
        "Mental Health Care",
        "Military",
        "Mining & Metals",
        "Motion Pictures & Film",
        "Music",
        "Nanotechnology",
        "Newspapers",
        "Nonprofit Organization Management",
        "Oil & Energy",
        "Online Publishing",
        "Outsourcing / Offshoring",
        "Package / Freight Delivery",
        "Packaging & Containers",
        "Paper & Forest Products",
        "Performing Arts",
        "Pharmaceuticals",
        "Philanthropy",
        "Photography",
        "Plastics",
        "Political Organization",
        "Primary / Secondary",
        "Printing",
        "Professional Training",
        "Program Development",
        "Public Policy",
        "Public Relations",
        "Public Safety",
        "Publishing",
        "Railroad Manufacture",
        "Ranching",
        "Real Estate",
        "Recreational",
        "Facilities & Services",
        "Religious Institutions",
        "Renewables & Environment",
        "Research",
        "Restaurants",
        "Retail",
        "Social Media",
        "Security & Investigations",
        "Semiconductors",
        "Shipbuilding",
        "Sporting Goods",
        "Sports",
        "Staffing & Recruiting",
        "Supermarkets",
        "Telecommunications",
        "Textiles",
        "Tobacco",
        "Translation & Localization",
        "Transportation / Trucking / Railroad",
        "Utilities",
        "Venture Capital",
        "Veterinary",
        "Warehousing",
        "Wholesale",
        "Wine & Spirits",
        "Wireless",
        "Writing & Editing"]


    public static country = [{ id: "101", name: "India" }, { id: "233", name: "United States" }]

    public static onlyAlphabetRegex = "^[a-zA-Z]+$"
    public static phoneNumberRegex = "^[2-9][0-9]{9}$"
    public static adharRegex = "^[0-9]{12}"
    public static gstRegex = "^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$"
    public static urlRegex = "^(http[s]?:\/\/){0,1}(w{3,3}\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]";
    public static unerversity = [
        { id: 1, icon: "assets/logo/mumbai.png", name: "Mumbai university" },
        { id: 2, icon: "assets/logo/pune.jpeg", name: "Pune university" },
        { id: 3, icon: "assets/logo/shivaji.jpeg", name: "Shivaji university" }
    ]

    public static company = [
        { id: 1, icon: "assets/logo/tech.png", name: "Tech mahindra" },
        { id: 2, icon: "assets/logo/Infosys-Logo.png", name: "infosys" },
        { id: 3, icon: "assets/logo/work.jpeg", name: "Tablabs Technology" }
    ]
    public static degree = ["Bachelor", "Diploma", "Master"]
    public static field = ["Computer Science", "Mechanical Engineering", "Marketing", "Human Resource"]

    public static years() {
        const now = new Date().getUTCFullYear();
        return Array(now - (now - 50)).fill('').map((v, idx) => now - idx) as Array<number>;
    }

}