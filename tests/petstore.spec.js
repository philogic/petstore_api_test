import { expect, test } from "@playwright/test";

// In order to run this test: npx playwright test from the command line 
test('should add a pet', async ({ request, baseURL }) => {
  const newPet = await request.post(`${baseURL}/pet`, {
    data: {
      "category": {
        "id": 0,
        "name": "mammals"
      },
      "name": "sweet kitten",
      "photoUrls": [
        "https://example.com/photos/kittens/sweety.jpg"
      ],
      "tags": [
        {
          "id": 0,
          "name": "mammal"
        },
        {
          "id": 1,
          "name": "likesmice"
        }
      ],
      "status": "available"
    }
  });
  expect(newPet.status()).not.toBe(415); //ie. Output is valid
  expect(newPet.status()).toBe(200); //ie. Request has succeeded
  expect(newPet.ok()).toBeTruthy(); //Similar to previous
  console.log(await (newPet.json())); //Response json for reference
})