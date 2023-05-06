const fs = require('fs');
const path = require('path');

// Define the plugin function
async function eleventyPluginDownloader(config, options = {}) {
  // Set default values if necessary
  const { urls = [], directory = '_site/external', fileName = '[name].[ext]' } = options;

  // Iterate over the list of URLs to download
  for (const url of urls) {
    // Fetch the file from the URL
    const response = await fetch(url);
    const file = await response.text();

    // Extract the filename and extension from the URL
    const ext = path.extname(url).substring(1);
    const name = path.basename(url, `.${ext}`)

    // Generate the final filename using the specified format
    const finalFileName = fileName
      .replace(/\[name\]/g, name)
      .replace(/\[ext\]/g, ext);

    // Create the directory if it doesn't exist
    const filePath = path.join(directory, finalFileName);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write to the file
    fs.writeFileSync(filePath, file);
  }
}

// Export the plugin function
module.exports = eleventyPluginDownloader;
