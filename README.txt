Hello! My name is Joaquín Moisés Rodríguez.
I will show you step by step how I approached the challenge for ArticGrey to the best of my abilities.

Step 1: Accessing Shopify
First, go to the Shopify website, particularly the "partners" section:

https://www.shopify.com/es/blog/topics/shopify-partners

Once there, create a user account and log in. This is free for three days, and afterward, it costs $1 per month based on your subscription. After logging in, you need to create a development store. My development store is named "Joaquin-hydrogen-app."

Step 2: Setting Up the Development Store
Once logged in with your username and password, go to your store. You can create more than one if needed. First, download the following apps:

Hydrogen
Headless
Weaverse

Later, I will explain why each app is downloaded and what its purpose is.

Step 3: Microsoft Visual C++ Redistributable
Before starting, ensure you have the most recent version of the Microsoft Visual C++ Redistributable installed on your system. You can download it from this link:

https://learn.microsoft.com/es-es/cpp/windows/latest-supported-vc-redist?view=msvc-170

Updating to the latest version is crucial; otherwise, when you create the app and try to run it, you may encounter errors in access paths like "MINIFLARE" and "MINIOXYGEN," showing an error labeled as "ERR_FAILURE_TIME." I discovered this after extensive troubleshooting while running the app based on online resources.

Step 4: Creating the Hydrogen Framework App
In your preferred terminal, run the following command to create a Hydrogen framework app connected to Shopify:

npm create @shopify/hydrogen@latest

The console will ask if you want to connect to Shopify using a mock demo or link to a Shopify account. Select:

Use simple data from mock.shop (You can connect to Shopify account later)
Next, name the storefront you created.
Mine is "rodriguez-hydrogen-app"

Choose the programming language:

I selected TypeScript, but you can choose JavaScript.
Select your preferred styling library from the given options:

I chose Tailwind (v4 alpha).

If needed, install npm dependencies (optional). For the next step, select "yes" for the scaffold routes functionality.

Finally, in the last option where you choose the URL structure for supporting multiple markets, select:

Set up later (run ‘h2 setup markets’)

Wait for the installation to complete.

Step 5: Installing Weaverse Hydrogen
In the console, install Weaverse Hydrogen, an app with dynamic and elegant user interfaces (two are free) that can be customized and modified. Run the following command:

npx @weaverse/cli@latest create --template=naturallie --project-id=############# --project-name=my-hydrogen-storefront

You can obtain this command from the Shopify app after creating a new project in Weaverse Hydrogen. Select the theme you like, and the app will generate a command with the details of the chosen template.
The project ID and port number will also be displayed on the same screen and later in the console.

Step 6: Configuring the Headless App
The third app we downloaded, Headless, is essential now. Log in with your user credentials and link it to your development store. This app provides all the public and private tokens, API keys, and store IDs needed to configure the .env file that comes with the previously created app.

Step 7: Setting Up Node.js
Ensure you have Node.js and npm installed. I recommend Node.js version 18.

The .env file will be configured as follows:

SESSION_SECRET
PUBLIC_STOREFRONT_API_TOKEN
PUBLIC_STORE_DOMAIN
PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID
PUBLIC_CUSTOMER_ACCOUNT_API_URL
PUBLIC_CHECKOUT_DOMAIN
PRIVATE_STOREFRONT_API_TOKEN  

# WEAVERSE CONFIGURATION  
WEAVERSE_PROJECT_ID
The information is sourced primarily from Weaverse and Headless.

Step 8: Running the App
With the environment, routes, and app configured, run the final command:

npm run dev

The console will display the server address:
http://localhost:3456/

Copy and paste this address into your browser to view the storefront created with Weaverse Hydrogen. From here, you can modify it via the Weaverse app in Shopify or directly in the code using Visual Studio Code (VSC).

Final Notes
I hope the app meets your expectations. I gave it my best effort with the time available and no external help. The most challenging part is configuring the environment post-installation to ensure the app runs smoothly and the storefront can be edited from Shopify.
Using VSC, I edited the theme’s code and configured it with Shopify’s various options. I combined both approaches to align the app as closely as possible to the design provided for the challenge’s home page.

I hope I have met your expectations and that you consider me for an entry-level position on your team. I firmly believe that, with proper training on the framework, I could create a dynamic and excellent app in no time.

Thank you so much for your time!...

