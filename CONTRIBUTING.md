# Contributing to Drone Data API

## 🚀 Welcome, Contributor\!

We're thrilled you're interested in contributing to the Drone Data API\! This project aims to be the most comprehensive and accurate static JSON database of drones, powering intelligent recommendations for users on [liupurnomo.com](https://liupurnomo.com/). Your contributions are vital to achieving this goal.

This guide outlines the general process and expectations for contributing to this repository. For specific details on **data structure, field definitions, and naming conventions**, please refer to our dedicated **[`CONVENTION.md`](CONVENTION.md)** file.



## 🤝 How to Contribute

We welcome various types of contributions, primarily focusing on data addition and updates.

### 1\. **Set Up Your Environment**

  * **Fork the Repository:** Start by forking the `drone-data-api` repository to your GitHub account.
  * **Clone Your Fork:** Clone your forked repository to your local machine.
    ```bash
    git clone git@github.com:[YOUR_USERNAME]/drone-data-api.git
    cd drone-data-api
    ```
  * **Create a New Branch:** Always create a new branch for your changes. Use a descriptive name that reflects your contribution.
    ```bash
    git checkout -b feature/add-new-brand-autel # For adding new data
    git checkout -b fix/update-dji-mavic-4-pro # For fixing/updating existing data
    ```

### 2\. **Add or Update Data Files**

All data files are located in the `data/` directory.

  * **Understand the Data Structure:** Before making changes, thoroughly read and understand the required data structure, field definitions, and naming conventions detailed in the **[`CONVENTION.md`](CONVENTION.md)** file. This is crucial for maintaining data quality and consistency.
  * **File Location:** Ensure you place new or updated JSON files in their correct directories (e.g., `data/drones/`, `data/brands/`, `data/sellers/`).
  * **Image Contributions:** If your data contribution includes new images (e.g., brand logos, drone photos), place them in the appropriate sub-folders within the `images/` directory (e.g., `images/brand/`, `images/drones/`). Remember to update the corresponding `_url` fields in your JSON data.
  * **`last_updated` Field:** For any JSON file you modify, make sure to update its `last_updated` field to the current date and time in **ISO 8601 UTC format (`YYYY-MM-DDTHH:mm:ssZ`)**.

### 3\. **Run the Data Generation Script (COMING SOON\!)**

  * We are developing a script that will automatically generate/update summary and list JSON files (like `all_drones_summary.json`, `brands.json`, `sellers.json`, and `categories.json`) based on the individual detail files you contribute.
  * **Once this script is available**, you will be required to run it before submitting your Pull Request to ensure all summary files are consistent with your new/updated data. Detailed instructions for running the script will be provided here.
  * **For now, please do your best to manually ensure consistency** of related summary files if you make changes that affect them.

### 4\. **Commit Your Changes**

  * Add all modified or new files (JSON, images, etc.) to your Git staging area.
    ```bash
    git add .
    ```
  * Commit your changes with a descriptive commit message. We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
      * **Format:** `type: Subject line`
      * **Examples:**
          * `feat: Add Autel Robotics brand data`
          * `fix: Update DJI Mavic 4 Pro camera specifications`
          * `docs: Add guidelines for image contributions`
          * `refactor: Restructure drone data fields`

### 5\. **Submit Your Pull Request (PR)**

  * Push your branch to your forked repository on GitHub.
    ```bash
    git push origin your-branch-name
    ```
  * Go to your forked repository on GitHub and click "Compare & pull request".
  * Provide a clear title and description for your PR, explaining what changes you made and why.
  * Your PR will be reviewed for adherence to these guidelines and merged upon approval.



## ✅ General Contribution Guidelines

Beyond the specific data conventions, here are some general principles we value in contributions:

  * **Accuracy:** All information must be factually correct and verifiable from official, reputable sources.
  * **Completeness:** Fill in as many relevant fields as possible. More data adds more value.
  * **Clarity & Conciseness:** Be clear and direct in your data entries and commit messages.
  * **Neutrality:** Maintain an objective tone, avoiding promotional language or personal opinions.
  * **Consistency:** Follow all specified data types, formats, and naming conventions as detailed in **[`CONVENTION.md`](https://www.google.com/search?q=CONVENTION.md)**.
  * **Communication:** If you have questions or encounter issues, please open an issue in the main repository.



## 🙋 Need Help?

If you have any questions, encounter issues, or need clarification on any part of these guidelines, please don't hesitate to open an issue in the main repository. We're here to help\!

