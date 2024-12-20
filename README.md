# Memeverse

Welcome to **Memeverse**, a web application that lets users create and edit memes by adding overlays to base meme images. The app leverages ImageKit for seamless image processing and manipulation, enabling users to easily customize and share their creations. The project is built using cutting-edge technologies like **Next.js**, **shadcn**, **NextAuth.js**, **Drizzle ORM**, and **ImageKit's Next.js SDK**.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Link](#live-link)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Socials](#socials)
- [License](#license)

## Introduction

**Memeverse** is a fully deployed web application that provides users with a fun and interactive way to create memes. Users can select from a variety of base meme images and add overlays (like text or images) to customize their memes. The app makes use of ImageKit's powerful image processing capabilities for fast and efficient manipulation of meme images.

## Features

- **Meme Editing**: Users can select from predefined base meme images.
- **Overlay Customization**: Add text, images, or other overlays to memes.
- **Image Processing**: Integrated with ImageKit for fast and optimized image editing.
- **User Authentication**: Secure user login and registration using NextAuth.js.
- **Responsive UI**: Modern and responsive user interface powered by shadcn components.
- **Shareable Memes**: Users can download or share their memes with others.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org) for building a fast, server-rendered React application.
- **UI Components**: [shadcn](https://shadcn.dev) for a sleek, modern, and accessible design system.
- **Authentication**: [NextAuth.js](https://next-auth.js.org) for handling authentication and session management.
- **Image Processing**: [ImageKit's Next.js SDK](https://docs.imagekit.io/javascript/nextjs) for real-time image editing and optimization.
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team) for SQL-based database management in a type-safe and intuitive way.

## Live Link

The application can be accessed at [Memeverse](https://memeverse-three-phi.vercel.app/)

## Installation

To run **Memeverse** locally, follow these steps:

1. **Clone the repository**:
    ```bash   
   git clone https://github.com/TheMercury1229/memeverse
   cd memeverse
   ```

2. **Install dependencies**:

    ```bash
   npm install
   ```

3. **Create an environment file**:
   Create a `.env` file in the root directory and add your environment variables for **NextAuth**, **ImageKit**, and **Drizzle** configuration. For example:

    ```bash
   NEXT_PUBLIC_PUBLIC_KEY=YOUR_IMAGEKIT_PUBLIC_KEY
   PRIVATE_KEY=YOUR_IMAGEKIT_PRIVATE_KEY
   NEXT_PUBLIC_URL_ENDPOINT=YOUR_IMAGEKIT_PUBLIC_ENDPOINT
   AUTH_SECRET=YOUR_AUTH_SECRET
   DATABASE_URL=YOUR_DATABASE_URL
   AUTH_GOOGLE_ID=YOUR_GOOGLE_CLIENT_ID
   AUTH_GOOGLE_SECRET=YOUR_GOOGLE_CLIENT_SECRET
   ```

4. **Run the development server**:

    ```bash
   npm run dev
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Once logged in, you can browse available base meme images and choose one to start editing.
- Add overlays such as text or other images, using the integrated ImageKit editor.
- Save or share your customized memes!

## Configuration

Ensure you have the correct environment variables set in your `.env` file:

- **NextAuth Configuration**: Set up your credentials for authentication.
- **ImageKit Configuration**: Set your ImageKit URL endpoint, public key, and private key.
- **Drizzle ORM Configuration**: Set your database URL for Drizzle ORM.

## Contributing

We welcome contributions! If you'd like to contribute to Memeverse, feel free to submit a pull request or report issues.

## Socials

Stay connected and in contact with me if you have any questions or feedback.:

- Twitter: [@TheMercury1229](https://x.com/TheMercury1229)
- LinkedIn: [Hardik Gujrathi](https://www.linkedin.com/in/hardik-gujrathi-b7ba49294)
- GitHub: [TheMercury1229](https://github.com/TheMercury1229)
- Instagram: [themercury1229](https://www.instagram.com/themercury1229/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
