Weather Station Service API

This is a RESTful API design document for a weather station service.
Table of Contents
Users	4
POST /users	4
Request description	4
Request body example	4
Response	4
Response data structure description	4
POST/users/login	5
Request description	5
Request body example	5
Response	5
Response data structure description	5
Response body example	5
GET/users/:id	6
Request description	6
Request body example	6
Response	6
Response data structure description	6
Response body example	6
GET/users/	7
Request description	7
Response	7
Response data structure description	7
Response body example	7
PUT/users/:id	9
Request description	9
Request body example	9
Response	9
Response data structure description	9
Response body example	10
DELETE/users/:id	11
Request description	11
Request body example	11
Response	11
Response data structure description	11
Response body example	11
Sensors	12
POST/sensors/	12
Request description	12
Request body example	12
Response	12
Response data structure description	12
Response body example	12
GET/sensors/	13
Request description	13
Response	13
Response data structure description	13
Response body example	13
GET/sensors/:id	14
Request description	14
Request body example	14
Response	14
Response data structure description	14
Response body example	14
PUT/sensors/:id	15
Request description	15
Request body example	15
Response	15
Response data structure description	15
Response body example	16
DELETE/sensors/:id	17
Request description	17
Request body example	17
Response	17
Response data structure description	17
Response body example	17
Measurements	18
POST/measurements	18
Request description	18
Request body example	18
Response	18
Response data structure description	18
Response body example	18
GET/measurements/:sensorId	19
Request description	19
Request body example	19
Response	19
Response data structure description	19
Response body example	19
GET/measurements/:sensorId&startTime=:startTime&endTime=:endTime	20
Request description	20
Request body example	20
Response	20
Response data structure description	20
Response body example	20

 
Users
POST /users
Register a new user to the system
Request description 
Name	Data type	Description
username	string	Publicly visible username
password	string	Password of the user
name	string	First and family name
dateOfBirth	string	Date of birth
address	string	User street address
city	string	User home city
country	string	User home country
email	string	Valid email address of the user
Request body example
{
“username”: “example_user”,
“password”: “123sssswer”,
	“name”: “John Doe”,
	“dateOfBIrth”: “1990-05-20”,
	“address”: “Measurement Street 567”,
	“city”: “London”,
	“country”: “uk”,
	“email”: “john.doe@demo.uk”
}
Response
Status codes
Status code	Description
201	User is created
400	Missing or incorrect data in the request
404	Not found

Response data structure description 
Name	Type	Description
Id	number	The id assigned to the created user

Response body example
{“id”: 45621789} 
POST/users/login
Login to the web station service
Request description
Name	Data type	Description
username	string	Publicly available name of the user
password	string	Password to enter the system as a user

Request body example
{
	“username”: “John Doe”,
	“password”: “examplePassword18”
}
Response
Status codes
Status code	Description
200	OK
401	Unauthorized
Response data structure description
Name	Type	Description
id	string	The unique id of the user
username	string	Publicly available username of the user
Name	string	The real name of the user
dateOfBirth	string	The date of birth of the user
Address	string	The user street address
City	string	The user’s city
Country	string	The user’s country
email	string	The user’s email
Response body example
{	“id”: “N89”,
	“username”: “John Doe”,
	“name”: “Jacob Jaskier”,
	“dateOfBirth”: “1990-05-02”,
	“address”: “Crowley street 53”,
	“city”: “Oslo”,
	“country”: “Norway”,
	“email”: “johndoe@gmail.com”}
GET/users/:id
Get the data on the user with given id
Request description
Name	Data type	Description
id	string	The unique id of the user

Request body example
{
	“username”: “John Doe”,
	“password”: “examplePassword18”
}
Response
Status codes
Status code	Description
200	OK
Response data structure description
Name	Type	Description
id	string	The unique id of the user
username	string	Publicly available username of the user
name	string	The real name of the user
dateOfBirth	string	The date of birth of the user
address	string	The user street address
city	string	The user’s city
country	string	The user’s country
email	string	The user’s email
Response body example
{
	“id”: “N89”,
	“username”: “John Doe”,
	“name”: “Jacob Jaskier”,
	“dateOfBirth”: “1990-05-02”,
	“address”: “Crowley street 53”,
	“city”: “Oslo”,
	“country”: “Norway”,
	“email”: “johndoe@gmail.com”
}

GET/users/
Get the list of all the users from the database
Request description
No need to send any data
Response
Status codes
Status code	Description
200	OK
Response data structure description
Name	Type	Description
id	string	The unique id of the user
username	string	Publicly available username of the user
Name	string	The real name of the user
dateOfBirth	string	The date of birth of the user
Address	string	The user street address
City	string	The user’s city
Country	string	The user’s country
email	string	The user’s email
Response body example
[{
	“id”: “N89”,
	“username”: “John Doe”,
	“name”: “Jacob Jaskier”,
	“dateOfBirth”: “1990-05-02”,
	“address”: “Crowley street 53”,
	“city”: “Oslo”,
	“country”: “Norway”,
	“email”: “johndoe@gmail.com”
},
{
	
	“id”: “N52”,
	“username”: “AngelicaDoe”,
	“name”: “Christine Duff”,
	“dateOfBirth”: “1998-09-02”,
	“address”: “Newborn avenue 39”,
	“city”: “Los Angeles”,
	“country”: “the USA”,
	“email”: “potato89@gmail.com”
}]
 
PUT/users/:id
Change the data of the currently registered user
Request description
NOT ALL THE DATA NEEDS TO BE EDITED
Name	Data type	Description
username	string	Publicly available username of the user
name	string	The real name of the user
dateOfBirth	string	The date of birth of the user
Address	string	The user street address
City	string	The user’s city
Country	string	The user’s country
email	string	The user’s email

Request body example
{
	“username”: “JohnDoe”,
“name”: “Jordan Michaels”,	
	“password”: “88889946513”,
	“dateOfBirth”: “1990-05-02”,
	“address”: “Something street 89”,
	“city”: “Istambul”,
	“country”: “Turkey”,
	“email”: “noNeedsToCome@gmail.com”
	
}
Response
Status codes
Status code	Description
200	OK
403	Forbidden
Response data structure description
Name	Type	Description
username	string	The updated publicly available username of the user
Name	string	The updated real name of the user
dateOfBirth	string	The updated date of birth of the user
Address	string	The updated user street address
City	string	The updated user’s city
Country	string	The updated user’s country
email	string	The updated user’s email
Response body example
{
	“username”: “JohnDoe”,
“name”: “Jordan Michaels”,	
	“password”: “88889946513”,
	“dateOfBirth”: “1990-05-02”,
	“address”: “Something street 89”,
	“city”: “Istambul”,
	“country”: “Turkey”,
	“email”: “noNeedsToCome@gmail.com”
}
 
DELETE/users/:id
Delete the user with the provided id
Request description
Name	Data type	Description
id	string	The id of the user that needs to be deleted

Request body example
{
	“id”: “N62”,	
}
Response
Status codes
Status code	Description
200	OK
403	Forbidden
404	Not found
Response data structure description
Name	Type	Description
id	string	The id of the deleted user
Response body example
{
	“id”: “N62”
}

 
Sensors
POST/sensors/
Add a weather station sensor to the database
Request description
Name	Data type	Description
deviceType	string	The type of the device
description	string	The description of the device, what it does, its serial number and everything important
location	string	The latitude and longitude of the sensor
sensorType	string	The types of meteo data sensor get

Request body example
{
	“deviceType”: “Raspberry Pi”,
	“description”: “The raspberry PI device that measures several parameters: atmospheric pressure, temperature, humidity and air quality”,
	“location”: “Latitude: 64.9526, Longitude: 25.5555”,
	“sensorType”: “atmospheric pressure (Pa), temperature (C0), humidity (g/m3), air quality (µg/m3)”
}
Response
Status codes
Status code	Description
200	OK
401	Unauthorized
Response data structure description
Name	Type	Description
id	string	The unique id of the sensor
Response body example
{	
“id”: “486-O5138”,	
}
 
GET/sensors/
Get a list of all the sensors in the database
Request description
No need to send any data
Response
Status codes
Status code	Description
200	OK
Response data structure description
Name	Type	Description
id	String	The unique id of the sensor
deviceType	string	The type of the device
description	string	The description of the device, what it does, its serial number and everything important
location	string	The latitude and longitude of the sensor
sensorType	string	The types of meteo data sensor get
Response body example
[{	
“id”: “486-O5138”,	
“deviceType”: “Raspberry Pi”,
	“description”: “The raspberry PI device that measures several parameters: atmospheric pressure, temperature, humidity and air quality”,
	“location”: “Latitude: 64.9526, Longitude: 25.5555”,
	“sensorType”: “atmospheric pressure (Pa), temperature (C0), humidity (g/m3), air quality (µg/m3)”
},
{
“id”: “486-T9610”,	
“deviceType”: “Raspberry Pi”,
	“description”: “The raspberry PI device that measures several parameters: atmospheric pressure, temperature, humidity and air quality”,
	“location”: “Latitude: 68.2654, Longitude: 27.5951”,
	“sensorType”: “atmospheric pressure (Pa), temperature (C0), humidity (g/m3), air quality (µg/m3)”
}]
GET/sensors/:id
Get the data on the sensor using its id
Request description
Name	Data type	Description
id	string	The unique id of the sensor

Request body example
{
	“id”: “486-O8430”
}
Response
Status codes
Status code	Description
200	OK
404	Not Found
Response data structure description
Name	Type	Description
id	String	The unique id of the sensor
deviceType	string	The type of the device
description	string	The description of the device, what it does, its serial number and everything important
location	string	The latitude and longitude of the sensor
sensorType	string	The types of meteo data sensor get
Response body example
{	
“id”: “486-O5138”,	
“deviceType”: “Raspberry Pi”,
	“description”: “The raspberry PI device that measures several parameters: atmospheric pressure, temperature, humidity and air quality”,
	“location”: “Latitude: 64.9526, Longitude: 25.5555”,
	“sensorType”: “atmospheric pressure (Pa), temperature (C0), humidity (g/m3), air quality (µg/m3)”
}
 
PUT/sensors/:id
Change the data on the sensor using its id
Request description
Name	Data type	Description
id	string	The unique id of the sensor
deviceType	string	The type of the device
description	string	The description of the device, what it does, its serial number and everything important
location	string	The latitude and longitude of the sensor
sensorType	string	The types of meteo data sensor get

Request body example
{
“id”: “486-O5138”,	
“deviceType”: “Ruuvi tag”,
	“description”: “The Ruuvi tag device that measures several parameters: atmospheric pressure, temperature, humidity and wind speed”,
	“location”: “Latitude: 60.9526, Longitude: 32.5555”,
	“sensorType”: “atmospheric pressure (Pa), temperature (C0), humidity (g/m3, wind speed (m/s)”

}
Response
Status codes
Status code	Description
200	OK
404	Not Found
403	Forbidden
Response data structure description
Name	Type	Description
id	String	The unique id of the sensor
deviceType	string	The changed type of the device
description	string	The changed description of the device, what it does, its serial number and everything important
location	string	The changed latitude and longitude of the sensor
sensorType	string	The changed types of meteo data sensor get
Response body example
{	
 “id”: “486-O5138”,	
“deviceType”: “Ruuvi tag”,
	“description”: “The Ruuvi tag device that measures several parameters: atmospheric pressure, temperature, humidity and wind speed”,
	“location”: “Latitude: 60.9526, Longitude: 32.5555”,
	“sensorType”: “atmospheric pressure (Pa), temperature (C0), humidity (g/m3),wind speed (m/s)”
}
 
DELETE/sensors/:id
Delete the sensor using its id
Request description
Name	Data type	Description
id	string	The unique id of the sensor

Request body example
{
“id”: “486-O5138”,	
}
Response
Status codes
Status code	Description
200	OK
404	Not Found
403	Forbidden
Response data structure description
Name	Type	Description
id	String	The unique id of the deleted sensor
Response body example
{	
 “id”: “486-O5138”	
}
 
Measurements
POST/measurements
Posts the measurement data 
Request description
Name	Data type	Description
userId	string	The id of the user that took measurements
time	string	The time of the taken measurement
measurements	string	The current sensor values 

Request body example
{
	“userId”: “486-O8430”,
	“time”: “2020-01-18, 22:56”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
}
Response
Status codes
Status code	Description
200	OK
403	Forbidden
Response data structure description
Name	Type	Description
sensorId	string	The id of the sensor
userId	string	The id of the user that took measurements
time	string	The time of the taken measurement
measurements	string	The current sensor values 
Response body example
{	
“sensorid”: “486-O5138”,	
“userId”: “K123”,
	“time”: “2020-01-18, 22:56”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
}

GET/measurements/:sensorId
Get the measurement data of the device 
Request description
Name	Data type	Description
sensorId	string	The id of the sensor
Request body example
{
	“sensorId”: “486-O8430”
}
Response
Status codes
Status code	Description
200	OK
404	Not found
Response data structure description
Name	Type	Description
sensorId	string	The id of the device
userId	string	The id of the user that took measurements
Time	string	The time of the taken measurement
Measurements	string	The current sensor values 
Response body example
{	
“sensorId”: “486-O5138”,	
“userId”: “486-O8430”,
	“time”: “2020-01-18, 22:56”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
}
 
GET/measurements/:sensorId&startTime=:startTime&endTime=:endTime
Get the measurement data of the device 
Request description
Name	Data type	Description
sensorId	string	The id of the sensor
startTIme	string	The starting time from which data will start to collect
endTime	string	The ending time at which data will stop
Request body example
{
	“sensorId”: “486-O8430”,
	“startTime”: “2020-01-16, 05:35”,
	“endTime”: “2020-01-18, 21:49”
}
Response
Status codes
Status code	Description
200	OK
404	Not found
Response data structure description
Name	Type	Description
sensorId	string	The id of the device
userId	string	The id of the user that took measurements
Time	string	The time of the taken measurement
Measurements	string	The current sensor values 
Response body example
[{	
“sensorId”: “486-O5138”,	
“userId”: “486-O8430”,
	“time”: “2020-01-16, 05:35”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
},
{	
“sensorId”: “486-O5138”,	
“userId”: “486-O8430”,
	“time”: “2020-01-16, 05:36”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
},
{	
“sensorId”: “486-O5138”,	
“userId”: “486-O8430”,
	“time”: “2020-01-16, 05:37”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
},
{	
“sensorId”: “486-O5138”,	
“userId”: “486-O8430”,
	“time”: “2020-01-16, 05:38”,
	“measurements”: “windspeed: 15m/s, temperature: -15C, atmosphericPressure: 101.300Pa”
}
…]



