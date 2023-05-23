FROM openjdk:8-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

COPY target/fitnessgoaltracker-0.0.1-SNAPSHOT.jar /app

EXPOSE 8080

# Run the Spring Boot application when the container starts
CMD ["java", "-jar", "fitnessgoaltracker-0.0.1-SNAPSHOT.jar"]
