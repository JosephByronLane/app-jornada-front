# Stage 1: Build the Angular application
FROM node:21 AS build

# Set the working directory
WORKDIR /app/

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --configuration production

RUN ls -l /app/dist/app-jornada-front

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# remove that bitch
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to Nginx's html directory
COPY --from=build /app/dist/app-jornada-front/browser/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
