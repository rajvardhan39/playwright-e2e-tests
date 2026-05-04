
import { test, expect } from '@playwright/test';

test.describe("REST API DEMO", () => {
    test("Should get products list", async ({ request }) => {
        // Perform the GET request
        const response = await request.get("http://localhost:3000/api/products");

        // Assert that the status code is 200 (OK)
        expect(response.status()).toBe(200);

      
        const body = await response.json();
        console.log(`Fetched ${body.length} products.`);
    });
});

/** var request = require('request');
var fs = require('fs');
var options = {
  'method': 'GET',
  'url': 'http://localhost:3000/api/products',
  'headers': {
  },
  formData: {
    'name': 'stand',
    'description': 'laptop stand',
    'price': '200',
    'stock': '9',
    'subCategoryId': '3',
    'image': {
      'value': fs.createReadStream('/C:/Users/RajvardhanMohan(QCIN/Desktop/kb.jpg'),
      'options': {
        'filename': '/C:/Users/RajvardhanMohan(QCIN/Desktop/kb.jpg',
        'contentType': null
      }
    }
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
}); **/
