# Review Questions

## What is Node.js?
Best known feature as a framework is the capability to run JavaScipt outside of the browser(Chrome, Firefox, etc). Also a package delivery framework through NPM, and allows communication through Json (JavaScript Object Notation)

## What is Express?

A lightweight framework that sits on top of Node.js. performs in a simpler fashion tasks that wwould be more complicated in Node. e.g. the web services that we have developed for CRUD operations

## Mention two parts of Express that you learned about this week.

## What is Middleware? 

In a general definition; sits in the "middle" between applications or client and server, providing a new request or response as data comes through

## What is a Resource?

Based on the RESTful architecture
    -everything is a resource.
    -each resource is accessible via a unique URI.
    -resources can have multiple representations.

## What can the API return to help clients know if a request was successful?

API can return success codes such '200', but more importantly classify and request if successful or in error with a status code and description



## How can we partition our application into sub-applications?

By using Express routing we can breakup long and complex resource files for performing CRUD operations and break them down along functional or operational actions or roles. SImplifies the maintenance for long and complex interfaces.

## What is express.json() and why do we need it?
