# Dockerfile for Gestion_utilisateurs
FROM openjdk:22
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8084
ENTRYPOINT ["java","-jar","/app.jar"]