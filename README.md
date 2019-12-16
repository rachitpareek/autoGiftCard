# Overview
This file describes the implementation and capability of my autoGiftCard application. This app was created using Node.js, Express, Mongo Atlas, Mongoose, Firebase Cloud Functions, and the Instagram Webhook API. The profile I created for this project was `@autogiftcard`.

# Deliverables
1. The zip file containing all project files was attached to my email response.
2. `@autogiftcard`
3. See `Testing`. 

# Inherency
Understanding the engagement of customers with businesses on social media presents a phenomenal opportunity for businesses active on these sites to gain customer insight and assemble valuable stores of data on existing customers & potential leads. This application takes advantage of this situation and aims to consume mentions data for IG business accounts and store this information in a database. 

# Structure 
It contains two main applications:
- autoGiftCardApp: This is the main application. Written with Node, Express, and Mongoose, and hosted as a Firebase Cloud Function, this app has been validated through my Facebook Developer Account as the endpoint URL for all update POST requests coming from the Instagram Webhook API product. Whenever my business account receives a mention on IG, my Firebase endpoint will accept the JSON payload and store the parsed information into a Mongo Atlas instance. 
- displayApp: This is a simple client application that displays all of the saved mentions, along with their client IDs. It was written with Node, Express, and Mongoose and is meant to be run locally.

# Installation
```Javascript
cd autoGiftCard
cd displayApp
npm install
npm start
```

# Running
Visit `localhost:4000` to see the application. 

# Testing
Ideally using `Postman`, you can send `POST` requests of the following format to this URL: `https://us-central1-autogiftcard.cloudfunctions.net/app`. You can modify the value of the `media_id` field, but maintain the format of the payload otherwise as it reflects the payload sent by the Webhook API. I am able to send this same data directly through the API's test capability from my dashboard.

Format:
```JSON
{
    "entry": [
      {
        "changes": [
          {
            "field": "mentions",
            "value": {
              "comment_id": "123",
              "media_id": "321"
            }
          }
        ],
        "id": "17841405726653026",
        "time": 1520622968
      }
    ],
    "object": "instagram"
 }
```

# Issues
- Webhook functionality: As seen in this recent (Oct. 2019) Stack OverFlow post (`https://stackoverflow.com/questions/58545332/why-is-the-instagram-graph-api-webhook-not-working`), the Instagram Webhook API will not provide production-level functionality without a verified app review, which is why simply tagging my account will not result in a trigger. However, please see `Testing` to see the functionality of this application.

# Improvements
- Gift Card Balances: Ideally, I would also have created a function that gave each person's gift card a unique ID and stored that information along with the card's remaining balance in a separate collection. Then, I would update this collection whenever a customer used one of their cards.
- Instagram authentication: The IG Webhook API sends a JSON payload containing the media_id & comment_id of the post or comment containing the mention. My current implementation extracts the media_id and stores it in the database. However, in order to convert this information to the handle of the user themselves (which is the data we really want), I would use the Instagram Graph API, and this would require OAuth authentication that I did not yet implement.