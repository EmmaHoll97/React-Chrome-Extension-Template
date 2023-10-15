# React-Chrome-Extension-Template

## This template is to help anyone who wants to make well structured React based chrome extensions

### Loading Your Chrome Extension

To load and test your Chrome extension in a local development environment, follow these steps:

1. **Install Dependencies:**
   - Open your terminal and navigate to the root directory of your extension project.
   - Run `npm install` to install any necessary dependencies.

2. **Build Your Extension (Development Mode):**
   - While still in the terminal, run `npm run build:dev` or the equivalent command you've set up for building your extension in development mode. This step will create the necessary build files. You will see a `build` folder appear.

3. **Open Chrome Browser:**
   - Ensure you have the Google Chrome browser installed on your computer. If not, download and install it from [Google Chrome's official website](https://www.google.com/chrome/).

4. **Access Chrome Extensions:**
   - Open a new tab in Chrome and navigate to `chrome://extensions/` by typing it into the address bar and pressing Enter. This page is the Chrome Extensions management page.

5. **Enable Developer Mode:**
   - In the top-right corner of the `chrome://extensions/` page, toggle the "Developer mode" switch to enable it. This mode allows you to load and test your own extensions.

6. **Load Your Extension:**
   - Click the "Load unpacked" button that appears after enabling Developer mode.
   - A file dialog will open. Navigate to the directory where your Chrome extension is located (the directory containing your `manifest.json` file, i.e the `build` folder).

7. **Select Extension Folder:**
   - Select the folder containing your extension's files, including the build files generated in step 2, and click the "Select Folder" (or equivalent) button in the file dialog. Your extension will be loaded into Chrome.

8. **Verify Extension Loaded:**
   - You should now see your extension listed on the `chrome://extensions/` page. You'll also see your extension's icon in the Chrome toolbar.

9. **Test Your Extension:**
   - Interact with your extension by clicking its icon in the Chrome toolbar or using any other methods specified in your extension's functionality.

10. **Debug and Troubleshoot:**
    - Open the Chrome DevTools Console (`F12` or right-click -> Inspect -> Console) to monitor logs and debug your extension. Address any issues or errors that may arise.

11. **Reload Extension:**
    - If you make changes to your extension's code, go back to the `chrome://extensions/` page and click the "Reload" button next to your extension to apply the changes.

12. **Unload Extension (Optional):**
    - To unload your extension, return to the `chrome://extensions/` page, find your extension, and click the "Remove" button. This will disable and remove your extension from Chrome.

13. **Publishing (Optional):**
    - If you're ready to publish your extension to the Chrome Web Store, follow the Chrome Web Store's guidelines and submission process.

14. **Testing in Incognito Mode (Optional):**
    - Test your extension in incognito mode to ensure it behaves correctly. You can enable your extension for incognito mode on the `chrome://extensions/` page by checking the "Allow in incognito" option under your extension.

Congratulations! Your Chrome extension is now loaded in your local Chrome browser, and you can test its functionality, make improvements, and debug as needed.
