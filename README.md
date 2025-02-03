My portfolio [website](https://cdeacon.net) that utilizes [Astro](https://astro.build/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

![Preview](./preview/preview.gif)


## Running
Here are commands you can use to run the web server through Astro (for developer use).

```bash
# Clone repository.
git clone https://github.com/gamemann/portfolio

# Change directory.
cd portfolio

# Install packages.
npm install

# Run Astro's dev server available on port 4321 by default.
# NOTE - You can pass --host <address> to listen on specific IP addresses (or all with 0.0.0.0).
npx astro dev
```

If you want to run this application in production, I recommend looking into [Docker](https://docs.astro.build/en/recipes/docker/).

## Configuration
There are two environmental variables you can configure inside of the `.env` file located in the root of this repository (rename or copy `.env.example` to `.env` if you haven't already).

### `PUBLIC_GOOGLE_ANALYTICS_ID`
If you want Google Analytics support, you will need to set this variable to your property's ID.

### `PUBLIC_EMAIL_ENCODE`
If you want the **Email Me** button included, you will need to set this variable to the Base64-encoded value of your email address. You can generate an encoded value for your email address with the below command on most Linux systems.

```bash
echo -n '<emailaddress>' | base64
```

For spam protection, instead of storing the email address inside of the HTML code returned by the server, we decode the value of this environmental variable inside of the client-side JavaScript code after the user clicks the button + confirms they want to email you.

While I'm sure there are more secure solutions available such as advanced CAPTCHAs, etc. I just wanted a quick and easy way to eliminate a majority of spam bots, especially since most spam bots don't utilize JavaScript.

If I do end up still getting spam through my email, I will most likely look into implementing a third-party library.