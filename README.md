# app-jornada-front

<img src="https://github.com/user-attachments/assets/d7e8f1b4-d34a-4f43-bf18-378ac95e85c0" alt="drawing" width="400"/>

Our teacher wanted to do a few games for our schools yearly sports meet thingy, so he asked us to do a phone app that the people at the game's stations can input peoples scores, and a webapge to visualize said scores.

This is the website to show the scores.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed [Node.js and npm](https://nodejs.org/) (which includes npm)
* You have installed [Angular CLI](https://cli.angular.io/) globally: `npm install -g @angular/cli`

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   # Replace with your repository URL
   git clone https://github.com/your_username/app-jornada-front.git
   ```
2. Navigate to the project directory
   ```sh
   cd app-jornada-front
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

## Development server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Docker

This project includes a `Dockerfile` and `docker-compose.yaml` for containerization, which was used when mounting this webpage on Hetzner Cloud.

To build and run the application using Docker:

1.  **Build the Docker image and run the container:**
    ```sh
    docker-compose up
    ```
    This will build the image defined in `dockerfile` and start the `angular-app` service.

2.  **Access the application:**
    Once the container is running, the application should be accessible at `http://localhost:4201` 


