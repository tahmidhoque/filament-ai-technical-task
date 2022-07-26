# Filament Tech Test (Customer Delivery Engineer)

Thanks for your interest in working at Filament! We have this small and simple task for you to work on in your own time so that we can see how you approach a problem and hopefully serve as a discussion point going forward.

Try to spend less than a couple of hours on this task and focus on quality over quantity.

Please implement the task however you'd like but keep it to one single function.

Please commit your attempt to a repository you can share with us so we can review your work, such as on GitHub

## The Task

A client are looking to expand the functionality of their bot and therefore need the included google cloud cloud function adjusted.

There is are two new features required and a couple of issues which need fixing.

As this function changes please take into consideration the quality of the code you're writing to allow for easy adjustment in the future as requirements are adjusted.

You can start up the project with `npm run local`.


## Issues
1. This function can currently be access through any type of request and should be limited to only GET requests.
2. Unfortunately the function currently is only returning the first beer card instead of all of the beer cards.

## New Feature
1. Currently there is no filtering on the function, we want to be able to filter the cards returned by passing through `beer_name`, `brewed_before` and `brewed_after`
2. The current cards are very limited in information returned so we want to be able to be able to view more details about a specific beer. To do this, if a beer id is passed into the cloud function only that beer should be returned and it should contain more details than a standard card.

## API
- Punk API can be found here - https://punkapi.com/documentation/v2

## Responses
- Responses are expected to be sent in the following format:
    - Response should be an object with one key called `cards` which should contain an array of cards.
    - Each card *must* have a `title` and `text`.
    - The `imageUri` attribute of each card is optional

`Example`
```json
"cards": [
        {
            "title": "Card",
            "imageUri": "https://picsum.photos/200/300",
            "text": "Card Description"
        }
    ]
}
```