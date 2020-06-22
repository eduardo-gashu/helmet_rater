# Helmet_Rater

## Project's Intentions
* This is a graduation final project to complete de Mechatronics Engineering Graduation Course of Escola Politécnica da Univesidade de São Paulo.

* This project aim to improve brasilian motorcycle helmets certification tests and introduce nationally a metric to rate the safety of that helmets.

## This project is parted in two Main sections
* Study of the Brazilian motorcycle traffic accident to understand the success parameter of a motorcicle helmet safety testing procedure.
* Development of a calculator to provide the rating of the helmets

## Rating_Calculator
* The Rating_Calculator is a system that implements the calculating procedure of a certification norm. In this software it is implemented the SHARP calculating procedure and the G&S-Rater calculating procedure.

### System Feature Requirements
* The system must read .csv file to get the raw tests data.
* The system must pre-process the read raw tests data to output the parameters that are necessary in rating calculation.
* The system must read the pre-processed data to and calculate the safety rating of the respective certification norm.
* The system must provide reports of the results;

### System Architecture

* under construction

### Usage
* Clone the project:

  $ git clone git@github.com:eduardo-gashu/helmet_rater.git

* Move to the rating_calculator directory:

  $ cd rating_calculator

* Install Dependencies:

  $ npm install

* Executing all tests:

  $ npm run test

* Or executing specific test:

  $ npx jest system_tests/{.test.js file}

* Running application:

  $ npm run app