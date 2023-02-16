# Biobot Kit Search

Biobot customers receive a kit with tubes inside of it, which the customer uses to collect samples, and later sends the kit back to the Biobot lab. This repository implements a search view with an autocomplete functionality for customers to use to track the shipping status of that kit.

## Prerequisites

The following software should be installed on your machine before running.

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Getting Started

1. Clone this repository and set it as your current directory
2. Run `yarn` to install the required dependencies
3. Run `yarn dev` to run the server locally
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## TODO

Given more time, I'd implement the following features:

- Add pagination to the ResultsTable
  - The API already supports pagination, but I did not have time to implement a front end solution from scratch
- Add unit tests
- Scan with an accessability checker to ensure screen reader compatibility
- Load KITS_SHIPPING_DATA.json into a sqlite table and index on the label_id column to improve read time as the application grows
- Match page design to similar Biobot pages to user has a familiar experience
- Utilize a FedEx API to display the package delivery status

## Assumptions

- The ID from KITS_SHIPPING_DATA.json is not relevant to the user so it is not displayed in the ResultsTable
- All tracking IDs are FedEx tracking numbers
