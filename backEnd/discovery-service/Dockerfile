# Dockerfile for eureka-server
FROM openjdk:22
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","/app.jar"]
