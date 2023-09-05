This is the student dashboard app. 

Some information regarding the database. I used a personal database in PostGres. The data for universities and courses was entered manually by me using postman. The endpoints are:

Universities ->http://localhost:8080/universities. Inside the body the name and location of the university is required for it to be saved.
Courses -> http://localhost:8080/courses. Inside the body the body the name of the course is required along with the university in which this course is offered.