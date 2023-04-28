# Implementation

## Introduction
This is version v0.7 of a mapping application that will help cyclists navigate bristol using the [Cycle network](https://opendata.bristol.gov.uk/explore/dataset/cycle-network/map/?location=11,51.47784,-2.58227&basemap=jawg.streets) database containing __ rows of data; to map out cycle networks and display them in such a way that navigation can occur through the cycle network. There are __ outstanding issues.
<!---TODO: Describe the system implemented (Describe the dataset. Are there any known issues? Describe any configuration data).--->

<!--- how many layers (three tier system), using based on web, data setup--->
## Project Structure
the project folder structuring has been modeled below (generated with tree-cli).

├── docs         &nbsp;   (contains documentation)\
│   ├── RD_map      (contains html and javascript for the map used on the website)\
│   └── images      (contains images used in documentation)\
├── html            (contains html of website and css)\
│   └── image       (contains images used when testing website)\
├── node_modules    (imported libraries)\
├── package.json    (software configuration)\
├── static          (static content such as style sheets or images used on website)\
├── views           (veiws folder used to store the website pages and partials)\
│   ├── pages       (contains the websites various pages ejs files)\
│   └── partials\
├── readme.md\
└── server.js       (the server the website runs on)







<!--- TODO: Provide an outline of the project folder structure and the role of each file within it (not the contents of node_modules).
provide a table listing the number of jslint warnings/reports for each module.--->

<!--- TODO:do some eslint tests after converting html to ejs and add them here--->
ESlint reports:

home:
1:1 error parsing error: unexpected token

about:
1:1 error parsing error: unexpected token

directions:
1:1 error parsing error: unexpected token

fastestroute:
1:1 error parsing error: unexpected token

scenic:
1:1 error parsing error: unexpected token

interest:
1:1 error parsing error: unexpected token

## Software Architecture
This software hass a three tier service-oriented architecture. A MySQL database stores data of cycle routes. the web server Uses Node. The webpage is a HTML web-application.  
<!---TODO: Describe the major components of your architecture. Are any particular architectural styles being used?--->

![Insert your component Diagram here](images/component.png) 
