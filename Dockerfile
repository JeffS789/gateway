FROM openjdk:8
ADD artfx-gateway.jar artfx-gateway.jar
EXPOSE 8080
ENTRYPOINT ["java", "-Dspring.profiles.active=aws", "-jar", "artfx-gateway.jar"]