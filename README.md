# Sharp Code Challenge

_Let's have some fun and create an Angular application page that displays two filtered and sorted lists of doctors that are formatted in a tiled layout._

## Prerequisites

What things you need to install before beginning the code challenge:

* [Install Node & npm](https://nodejs.org/en/download/) - Install Node.js® and npm if they are not already on your machine. This setup is required in order to run the Angular CLI commands.
* [Angular CLI](https://github.com/angular/angular-cli/wiki) - Install the Angular CLI to get started with this code challenge.  With the CLI, you can easily run your application and review / troubleshoot changes in real-time.
* [VS Code](https://code.visualstudio.com/) - A compatible editor - we recommend VS code.

## Installing & Running the application

* Unzip the project to your desired workspace.
* `cd` to the root of the directory and run the following commands:
  * `npm install` - (this installs all the node packages in the node_modules directory).
  * `npm start` - (this will fire up the application for you to run on localhost:4200).


## Files you'll be working with:

By it's very nature, an Angular application contains a fair number of files that handle many aspects of running, testing and deploying the application.  Fortunately, for the purposes of solving this challenge you only need concern yourself with the following files which are located in the src directory:

```
* Required: 
*   app/app.component.ts
*   app/app.component.html
*   app/app.component.css
* If needed: 
*   index.html
* Your data:
*   api/doctors.json
```

## Instructions - what you'll be building / modifying

Create two lists of doctors that you will be filtering and sorting from your call to the DoctorService within the app.component.ts. The first list will be comprised of **FamilyPractice** doctors and the second list of **Pediatrics** doctors. Sort both lists by number of reviews in descending order. 

Style the doctors as [Bootstrap Cards](https://getbootstrap.com/docs/4.0/components/card/) showing Name, Specialty, and Review Count.  The cards should be responsive at the following breakpoints:

* Device widths greater than 991px: display 3 doctors across
* Device widths between 576px and 991px: display 2 doctors across
* Device widths less than 575px show stacked doctors

## Submission

Please create a personal Github repo named *'sharp-code-challenge'* and reply to our email with the url for your repo so we can take a look at your solution.

Thank you for participating.  We're excited to see what you've come up with!

