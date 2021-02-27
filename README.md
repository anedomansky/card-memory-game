# card-memory-game

## Project creation

`mvn archetype:generate "-DgroupId=com.jsf.app" "-DartifactId=card-memory-game" "-DinteractiveMode=false"`

## Apache Tomcat Setup for the tomcat7-maven-plugin

mvn tomcat7:redeploy

~/path_to_tomcat/apache-tomcat-9.0.41/conf

- tomcat-users.xml

```xml
<tomcat-users>>
   <role rolename="admin-gui"/>
   <role rolename="manager-gui"/>
   <role rolename="manager-script"/>
   <user username="tomcat" password="tomcat_deploy" roles="admin-gui, manager-gui, manager-script"/>
</tomcat-users>
```

- ~/.m2/settings.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings>
    <servers>
        <server>
            <id>TomcatServer</id>
            <username>tomcat</username>
            <password>tomcat_deploy</password>
        </server>
    </servers>
</settings>
```

tomcat7-maven-plugin

```xml
<plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
    <configuration>
        <url>http://localhost:8080/manager/text</url>
        <server>TomcatServer</server>
        <path>/card-memory-game</path>
    </configuration>
</plugin>
```
