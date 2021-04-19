FROM tomcat:8.5-jdk11-openjdk

LABEL maintainer="an89"

COPY target/card-memory-game.war /usr/local/tomcat/webapps/
