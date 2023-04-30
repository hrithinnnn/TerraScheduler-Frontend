
# Scheduling App Documentation  
## Introduction  

The TerraScheduler is a project using MEAN Stack. It Lets Terraformers make appointments with each other and check appointments. They can also mark off Hours if they arent available.  

## Sign Up and Login  
The app allows terraformers to create accounts by signing up. To sign up, terraformers need to provide their name, role, email address, and a password. Once they sign up, they can log in to the app using their email address and password.  

## Authentication  
The app uses login and logout guards to ensure that only authenticated terraformers can access the app's features. Terraformers who try to access the app without logging in will be redirected to the login page.  

# Features  
## Schedule an Appointment  
Terraformers can schedule appointments with each other using the app. To schedule an appointment, they need to provide the following information:  

Title: A short title that describes the appointment.
Agenda: A description of the purpose of the appointment.
Date and time: The date,start time and end time when the appointment is scheduled to take place.
Guest: The name of the other terraformer with whom the appointment is to be scheduled.
Before scheduling the appointment, the app checks if the guest is available. If the guest has marked off-hours or already has another appointment during the scheduled time, the appointment cannot be scheduled.  

## View Upcoming Appointments  
Terraformers can view their upcoming appointments on the app. The appointments are displayed in chronological order, with the nearest appointment at the top. Terraformers can see the title, agenda, time, and guest of each appointment.  

## Mark Off-hours  
Terraformers can mark their off-hours from their profile page. Off-hours are the times when they are not available for appointments during the day. To mark off-hours, terraformers need to select the date, start and end times of their off-hours.  

## Conclusion  
This documentation provides an overview of the scheduling app for terraformers. The app allows terraformers to schedule appointments with each other, view their upcoming appointments and mark off-hours.  
