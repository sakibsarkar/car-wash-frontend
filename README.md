# Aqua clean

## Live link - [Aqua Clean](https://aqua-clean.vercel.app/)

## 🔗 Server side repository - [car-wash-backend](https://github.com/sakibsarkar/FoodEx_server)

## Introduction

This car wash and service booking application enables users to explore various car-related services and book available time slots. Users can easily find the service they need, select a convenient slot, and confirm their booking. Administrators have the ability to manage user roles, create and customize booking slots based on the service type, and oversee all bookings to ensure efficient operation.

This README file will guide you through the steps required to set up and run the project on your local computer.

## Features

- Api debouncing for the search functionality to reduce the number of API calls
- Service comparison
- Upcoming booking countdown

## Technology Stack

- React js
- Typescript
- Shadcn
- tailwind CSS
- Readux toolkit & query

## Getting Started

To get started with the project, follow the instructions below:

### Prerequisites

Make sure you have the following software installed on your machine:

- Git
- Node.js (v20.9.0 recommended)
- Yarn or any package installer

### Cloning the Repository

First, clone the repository using the following command:

```
git clone https://github.com/sakibsarkar/car-wash-frontend

```

### Installing Dependencies

Open the project file in terminal and run `yarn install`

```
yarn install

```

### Setting Up Environment Variables

Create a .env file in the root directory of the project and add your MongoDB credentials:

```
VITE_BASE_API=https://aqua-clean-server.vercel.app/api
```

### Running the Project

Once you have set up the environment variables, you can run the project locally.

```
yarn dev

```

### Accessing the Project

```
http://localhost:5173
```
