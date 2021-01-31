# card-memory-game

## Project creation

`mvn archetype:generate "-DgroupId=com.jsf.app" "-DartifactId=card-memory-game" "-DinteractiveMode=false"`

## Apache Tomcat

sudo chown -RH anedomansky: apache-tomcat-9.0.41

sudo sh -c 'chmod +x apache-tomcat-9.0.41/bin/*.sh'

mvn tomcat7:redeploy

~/tomcat/apache-tomcat-9.0.41/conf

- tomcat-users.xml
- ~/.m2/settings.xml

tomcat7-maven-plugin

