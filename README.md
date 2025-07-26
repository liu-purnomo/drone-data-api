# Drone Data API (Static JSON)

-----

## 🚀 Overview

This repository hosts a **static JSON API** containing a comprehensive database of various drones. The primary goal is to provide **structured, AI-readable drone data** to power intelligent recommendations for users on [liupurnomo.com](https://liupurnomo.com/). This project aims to simplify the process of finding the right drone for specific needs, leveraging detailed specifications and use-case tagging.

This project is proudly **open source**, and we warmly welcome contributions from the community, especially drone manufacturers, to ensure this database is as comprehensive and accurate as possible.

-----

## ✨ Features

  * **Comprehensive Drone Database:** Detailed information on consumer, professional, industrial, fixed-wing, and VTOL drones.
  * **AI-Ready Structure:** Data is organized with AI analysis in mind, using standardized fields and flexible JSON-like structures for dynamic attributes.
  * **Static JSON API:** Easily accessible via GitHub's raw content URL, making it quick and cost-effective to integrate into web applications.
  * **Use-Case Tagging:** Drones are tagged based on their primary applications (e.g., mapping, videography, inspection, agriculture) to facilitate intelligent recommendations.
  * **Modular & Scalable Data Design:** Data is structured with a single source of truth (individual drone JSON files) from which other summary files are generated, ensuring lightness and efficiency.

-----

## 🎯 Project Goals

The long-term vision for this project, and its integration into liupurnomo.com, includes:

1.  **Intelligent Drone Recommendation Engine:** Develop an AI-powered system that guides users to the most suitable drone based on their specific requirements (e.g., "I need a drone for professional 3D mapping of large areas with RTK accuracy and long flight time.").
2.  **Detailed Drone Comparison Tool:** Enable users to easily compare specifications and features of multiple drones side-by-side.
3.  **Educational Resource:** Provide a valuable resource for drone enthusiasts and professionals to learn about different drone models and their capabilities.
4.  **Community-Driven Data:** Foster an open environment where drone manufacturers and enthusiasts can contribute and maintain up-to-date drone information.

-----

## 📂 Data Structure

The drone data follows a structured JSON format designed for clarity and ease of use. The core data for each drone is stored in its own dedicated JSON file, and summary files are automatically generated from these core files.

  * **`data/drones/{drone_id}.json`**: **The primary source of truth** for each drone. Contains all detailed specifications, features, embedded brand info, tags, payload details, and available seller information.
  * **`data/all_drones_summary.json`**: An automatically generated summary of all drones, used for quick loading of drone lists (e.g., on the homepage).
  * **`data/brands.json`**: An automatically generated list of all unique drone brands found in the `drones` data.
  * **`data/sellers.json`**: An automatically generated list of all unique sellers where drones are available.
  * **`data/categories.json`**: An automatically generated list of all unique drone categories.

**Example Snippet (Conceptual - Full data in `data/drones/{drone_id}.json`):**

```json
{
  "id": "...",
  "name": "DJI Mavic 4 Pro",
  "brand": {
    "id": "dji",
    "name": "DJI",
    "logo_url": "..."
  },
  "category": "Professional",
  "key_features": ["...", "..."],
  "specifications": {
    "max_flight_time_minutes": 46,
    "camera_resolution": "5.1K",
    "additional_specs": {
      "max_ascend_speed_mps": 10
    }
  },
  "tags": [
    {"tag_name": "Aerial Photography", "tag_category": "Usage"}
  ],
  "camera_payloads": [
    {
      "name": "Hasselblad L2D-20c",
      "type": "Visual Camera"
    }
  ],
  "available_from": [
    {
      "seller_id": "bh-photo",
      "seller_name": "B&H Photo Video",
      "product_url": "..."
    }
  ]
}
```

-----

## 🔗 API Endpoint

The raw JSON data can be accessed directly from this GitHub repository.

**Base URLs:**

  * **All Drone Summaries:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/all_drones_summary.json`
  * **Individual Drone Details:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/drones/{drone_id}.json`
  * **Brands List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/brands.json`
  * **Sellers List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/sellers.json`
  * **Categories List:** `https://raw.githubusercontent.com/liu-purnomo/drone-data-api/main/data/categories.json`

You can use these URLs in your Next.js application or any other client to fetch the drone database.

-----

## 🛠️ Usage in Next.js

To use this API in your Next.js project, you can fetch the JSON data client-side (using `useEffect` and `fetch`) or server-side (using `getServerSideProps` or Route Handlers). Refer to the `pages/drones/index.js` and `pages/drones/[id].js` examples in the `liupurnomo.com` project for implementation details.

-----

## 🤝 Contribution Guidelines

We welcome contributions to expand and improve this drone database\! Your help ensures this resource remains accurate, comprehensive, and valuable to the community.

### How to Contribute Data:

1.  **Fork this repository.**
2.  **Clone your forked repository** to your local machine.
3.  **Create a new branch** for your contribution (e.g., `git checkout -b add-dji-mini-5`).
4.  **Add/Update Drone Data:**
      * Navigate to the `data/drones/` directory.
      * **To add a new drone:** Create a new JSON file named `{drone_id}.json` (e.g., `dji-mini-5-pro.json`) following the exact structure outlined in the "Data Structure" section. Ensure you generate a unique `id` (a UUID or a unique slug) for your new drone.
      * **To update an existing drone:** Modify the relevant `{drone_id}.json` file.
      * **Important:** Include all known specifications, key features, and available payload/seller information. The more detail, the better\!
5.  **Run the Data Generation Script (Coming Soon\!):**
      * We will provide a simple script (e.g., `npm run generate-data` or `python generate_data.py`) that reads all individual drone JSON files and automatically updates `all_drones_summary.json`, `brands.json`, `sellers.json`, and `categories.json`.
      * **For now:** You might need to manually ensure `all_drones_summary.json`, `brands.json`, `sellers.json`, and `categories.json` are consistent with your new/updated drone data, but the automated script will simplify this.
6.  **Commit your changes** with a descriptive message (e.g., `feat: Add DJI Mini 5 Pro data` or `fix: Update Mavic 4 Pro price`).
7.  **Push your branch** to your forked repository.
8.  **Open a Pull Request** from your forked repository to the `main` branch of this repository.

### For Drone Manufacturers:

We highly encourage you to contribute data for your products\! This is an excellent way to ensure your drone specifications are accurately represented and discoverable by potential customers using our AI recommendation engine. Please follow the contribution guidelines above. Feel free to contact the maintainer if you need assistance.

-----

## 📈 Future Enhancements

  * **Automated Data Generation Script:** Develop a robust script to automatically generate summary/list JSON files from the individual drone detail files, simplifying contributions.
  * **Data Validation:** Implement JSON Schema validation to ensure contributed data adheres to the defined structure.
  * **Advanced AI Features:** Explore implementing vector embeddings for semantic search and more nuanced AI recommendations.
  * **Supabase Backend Integration (Optional):** As the project scales, consider a dynamic backend like Supabase for real-time data updates, robust querying, and authentication/authorization for data management.

-----

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).
