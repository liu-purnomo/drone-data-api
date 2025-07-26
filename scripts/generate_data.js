const fs = require('fs');
const path = require('path');

// --- Configuration ---
// CORRECTED: Calculate DATA_DIR relative to the project root
// Go up one level from 'scripts' to the project root, then down into 'data'
const PROJECT_ROOT = path.join(__dirname, '..'); // Go up one directory from 'scripts'
const DATA_DIR = path.join(PROJECT_ROOT, 'data'); // Then go into 'data' from the project root

const DRONES_DIR = path.join(DATA_DIR, 'drones'); // Directory for individual drone JSON files
const CATEGORIES_FILE = path.join(DATA_DIR, 'categories.json'); // Output file for aggregated categories summary
const ALL_DRONES_SUMMARY_FILE = path.join(DATA_DIR, 'all_drones_summary.json'); // Output file for all drones summary

// --- Main Generation Function ---
async function generateData() {
  console.log('Starting data generation process...');

  let allDronesFullData = []; // To hold parsed data from individual drone files
  const uniqueCategories = new Map(); // To collect unique categories and their basic info

  try {
    // Ensure the drones directory exists before attempting to read
    if (!fs.existsSync(DRONES_DIR)) {
      console.error(`Error: Drone data directory not found at ${DRONES_DIR}`);
      console.error(
        'Please ensure you have drone JSON files placed in this directory.'
      );
      process.exit(1); // Exit with an error code to indicate failure
    }

    // Read all individual drone JSON files from the specified directory
    const droneFiles = fs
      .readdirSync(DRONES_DIR)
      .filter((file) => file.endsWith('.json')); // Only process JSON files

    // Warn if no drone files are found, as output files will be empty
    if (droneFiles.length === 0) {
      console.warn(
        'Warning: No drone JSON files found in the data/drones directory. Output files will be empty.'
      );
    }

    // Process each drone file
    for (const file of droneFiles) {
      const filePath = path.join(DRONES_DIR, file);
      let droneData;
      try {
        // Parse the JSON content of each drone file
        droneData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } catch (parseError) {
        console.error(`Error parsing JSON file ${file}: ${parseError.message}`);
        continue; // Skip this file if parsing fails and move to the next
      }

      // --- Basic Data Validation for Essential Fields ---
      // Ensure required top-level fields exist as per CONVENTION.md.
      // `brand_id` is required, implying a corresponding brand file should exist
      // but its existence is not validated by this script (it's assumed to be managed separately).
      if (
        !droneData.id ||
        !droneData.name ||
        !droneData.brand_id ||
        !droneData.category ||
        !droneData.estimated_price_usd
      ) {
        console.warn(
          `Warning: Skipping malformed drone file ${file}. Missing essential fields (id, name, brand_id, category, estimated_price_usd).`
        );
        continue; // Skip this drone if essential data is missing
      }

      // Add the full drone data to our collection for summary generation
      allDronesFullData.push(droneData);

      // --- Collect Unique Categories ---
      // This part extracts categories used by drones and prepares them for categories.json.
      // Categories are generated with basic placeholder data.
      // For more detailed category information, a separate manual categories.json file
      // or a more sophisticated generation logic would be needed.
      const categoryId = droneData.category;
      if (categoryId && !uniqueCategories.has(categoryId)) {
        uniqueCategories.set(categoryId, {
          id: categoryId,
          // Basic capitalization and hyphen replacement for display name
          name:
            categoryId.charAt(0).toUpperCase() +
            categoryId.slice(1).replace(/-/g, ' '),
          description: `Drones primarily for ${categoryId} use.`, // Placeholder description
          icon_name: `${categoryId}-icon`, // Placeholder icon name
        });
      }
    }

    // --- Generate all_drones_summary.json ---
    // Creates a lightweight summary of all drones, ideal for quick listing in the UI.
    const dronesSummary = allDronesFullData.map((drone) => ({
      id: drone.id,
      name: drone.name,
      brand_id: drone.brand_id, // Still references the brand ID string
      model: drone.model,
      category: drone.category,
      // Ensure optional fields exist, using `null` or empty string if not present in source
      image_thumbnail_url: drone.image_thumbnail_url || null,
      estimated_price_usd: drone.estimated_price_usd,
      short_description: drone.short_description || '',
    }));
    fs.writeFileSync(
      ALL_DRONES_SUMMARY_FILE,
      JSON.stringify(dronesSummary, null, 2), // Pretty-print JSON for readability
      'utf8'
    );
    console.log(`Generated ${ALL_DRONES_SUMMARY_FILE}`);

    // --- Generate categories.json ---
    // Converts the Map of unique categories into an array of category objects for the output file.
    const categoriesArray = Array.from(uniqueCategories.values());
    fs.writeFileSync(
      CATEGORIES_FILE,
      JSON.stringify(categoriesArray, null, 2), // Pretty-print JSON for readability
      'utf8'
    );
    console.log(`Generated ${CATEGORIES_FILE}`);

    console.log('Data generation completed successfully!');
  } catch (error) {
    // Catch any unexpected errors during the generation process
    console.error(
      'An unexpected error occurred during data generation:',
      error
    );
    process.exit(1); // Exit with an error code to signal failure
  }
}

// Execute the main function to start the data generation
generateData();
