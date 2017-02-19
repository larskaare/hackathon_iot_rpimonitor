# A IoT Hackathon - Tutorial

## Goal
By creating an example end-to-end eco-system, trigger and nurture curiosity towards IOT -
the technology, appliances, impact, opportunities and risks.

## Hardware
Arduino, RaspberryPI, RPI Camera, Breadboard, Sensors (temperature, PIR)

## The Project
The end project will be having a 
* Arduino hosting a few sensors
* Raspberry PI reading sensor data from the Arduino as well as hosting a camera
* NodeJS application that read sensor data, detects movements, takes snapshots and upload information to the cloud
* Using Azure Storage and DocumentDB to receive data from the device


## Agenda

* Hello world from Arduino
* Hello world from Raspberry PI
* Raspberry PI + Arduino
* Adding a temperature sensor
* Adding a camera
* Adding Motion detection
* Pushing data to the cloud
* Keep on experimenting!ß

## Getting started
~~~~
cd tutorial
npm install
grunt serve
~~~~
ALternatively - open index.html

## Code examples
... are available in the ./codeexamples folder ...

## Pre-requistes
* NodeJs
* Azure Accounts

## Thanx
The presentation is powered by [*reveal.js*](https://github.com/hakimel/reveal.js)