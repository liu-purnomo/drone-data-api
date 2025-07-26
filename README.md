# Drone Data API (Static JSON)


## 🚀 Overview

This repository hosts a **static JSON API** containing a comprehensive database of various drones. The primary goal is to provide **structured, AI-readable drone data** to power intelligent recommendations for users on [liupurnomo.com](https://liupurnomo.com/). This project aims to simplify the process of finding the right drone for specific needs, leveraging detailed specifications and use-case tagging.

This project is proudly **open source**, and we warmly welcome contributions from the community, especially drone manufacturers, to ensure this database is as comprehensive and accurate as possible.



## ✨ Features

  * **Comprehensive Drone Database:** Detailed information on consumer, professional, industrial, fixed-wing, and VTOL drones.
  * **AI-Ready Structure:** Data is organized with AI analysis in mind, using standardized fields and flexible JSON-like structures for dynamic attributes.
  * **Static JSON API:** Easily accessible via GitHub's raw content URL, making it quick and cost-effective to integrate into web applications.
  * **Use-Case Tagging:** Drones are tagged based on their primary applications (e.g., mapping, videography, inspection, agriculture) to facilitate intelligent recommendations.
  * **Modular & Scalable Data Design:** Data is structured with a single source of truth (individual drone JSON files) from which other summary files are generated, ensuring lightness and efficiency.
  * **Dedicated Application Data:** Separate data for flight planning and mission applications, allowing for flexible linking and detailed compatibility insights.



## 🎯 Project Goals

The long-term vision for this project, and its integration into liupurnomo.com, includes:

1.  **Intelligent Drone Recommendation Engine:** Develop an AI-powered system that guides users to the most suitable drone based on their specific requirements (e.g., "I need a drone for professional 3D mapping of large areas with RTK accuracy and long flight time.").
2.  **Detailed Drone Comparison Tool:** Enable users to easily compare specifications and features of multiple drones side-by-side.
3.  **Educational Resource:** Provide a valuable resource for drone enthusiasts and professionals to learn about different drone models and their capabilities.
4.  **Community-Driven Data:** Foster an open environment where drone manufacturers and enthusiasts can contribute and maintain up-to-date drone information.



## 📂 Project Structure & Data Organization

This repository is structured to ensure clear separation of concerns, easy navigation, and efficient data management.

```
drone-data-api/
├── data/
│   ├── all_drones_summary.json       # Generated: Summary of all drones for quick lists.
│   ├── categories.json               # Generated: List of all unique drone categories.
│   ├── brands/                       # Directory for individual brand detail files.
│   │   ├── {brand_id_1}.json
│   │   └── ...
│   ├── drones/                       # Primary source of truth for all detailed drone data.
│   │   ├── {drone_id_1}.json
│   │   └── ...
│   ├── flight_apps/                  # Directory for individual flight application detail files.
│   │   ├── {app_id_1}.json
│   │   └── ...
│   └── sellers/                      # Directory for individual seller detail files.
│       ├── {seller_id_1}.json
│       └── ...
├── images/                           # Stores all static image assets.
│   ├── apps/                         # Application logos.
│   │   ├── {app_id}.png
│   │   └── ...
│   ├── brand/                        # Brand logos.
│   │   ├── {brand_id}.png
│   │   └── ...
│   └── drones/                       # Drone photos (full and thumbnail versions).
│       ├── {drone_id}-full.jpg
│       └── {drone_id}-thumb.jpg
│       └── ...
├── scripts/                          # Utility scripts for data generation and maintenance.
│   └── generate_data.js              # Script to generate summary JSON files.
├── CODE_OF_CONDUCT.md                # Defines behavioral standards for contributors.
├── CONTRIBUTING.md                   # General guidelines for contributing to the project.
├── CONVENTION.md                     # **Critical:** Detailed conventions for data structure and fields.
├── LICENSE                           # Project's open-source license (MIT License).
└── README.md                         # This overview document.
```

### Explanation of Key Data Directories:

  * **`data/drones/`**: Each JSON file here (`{drone_id}.json`) represents a single drone and is the **authoritative source of truth** for all its detailed information (specifications, features, linked brands/sellers/apps, etc.).
  * **`data/brands/`**: Contains individual JSON files for each drone brand (`{brand_id}.json`), detailing brand-specific information. Drones link to these files using `brand_id`.
  * **`data/sellers/`**: Contains individual JSON files for each drone seller (`{seller_id}.json`), detailing seller-specific information. Drones link to these files via `seller_id` within their `available_from` array.
  * **`data/flight_apps/`**: Contains individual JSON files for each flight planning/mission application (`{app_id}.json`). These files detail app features, platforms, and, crucially, a list of `supported_drone_models_ids` to show compatibility.
  * **Generated Files (`all_drones_summary.json`, `categories.json`):** These files are *not* manually edited. They are automatically created and updated by the `scripts/generate_data.js` script, drawing information from the detailed drone, brand, seller, and app files to provide lightweight summaries for quicker loading in client applications.



## 🔗 API Endpoints

The raw JSON data can be accessed directly from this GitHub repository.

**Base URLs for Data Access:**

  * **All Drone Summaries:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/all_drones_summary.json`
  * **Individual Drone Details:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/drones/{drone_id}.json`
  * **Brands List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/brands.json`
  * **Individual Brand Details:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/brands/{brand_id}.json`
  * **Sellers List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/sellers.json`
  * **Individual Seller Details:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/sellers/{seller_id}.json`
  * **Flight Applications List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/flight_apps.json` (Note: This file needs to be generated similarly to `brands.json` or managed manually for now.)
  * **Individual Flight App Details:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/flight_apps/{app_id}.json`
  * **Categories List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/categories.json`



## 🛠️ Usage in Next.js

To use this API in your Next.js project, you can fetch the JSON data client-side (using `useEffect` and `fetch`) or server-side (using `getServerSideProps` or Route Handlers). Refer to the `pages/drones/index.js` and `pages/drones/[id].js` examples in the `liupurnomo.com` project for implementation details.



## 🤝 How to Contribute

We welcome contributions\! Please refer to our **[CONTRIBUTING.md](https://www.google.com/search?q=CONTRIBUTING.md)** file for detailed guidelines on how to contribute data, including data structure, conventions, and the pull request process.

### For Drone Manufacturers:

We highly encourage you to contribute data for your products\! This is an excellent way to ensure your drone specifications are accurately represented and discoverable by potential customers using our AI recommendation engine.



## 📈 Future Enhancements

  * **Automated Data Generation Script:** Enhance `generate_data.js` to also generate `brands.json`, `sellers.json`, and `flight_apps.json` summary lists if these become necessary for UI filters that need all items at once.
  * **Data Validation:** Implement JSON Schema validation to ensure contributed data adheres to the defined structure.
  * **Advanced AI Features:** Explore implementing vector embeddings for semantic search and more nuanced AI recommendations.
  * **Supabase Backend Integration (Optional):** As the project scales, consider a dynamic backend like Supabase for real-time data updates, robust querying, and authentication/authorization for data management.



## 📄 License

This project is open-sourced under the [MIT License](LICENSE).
