I built a simple RESTful API that returns my profile information and a random cat fact fetched from the [Cat Facts API](https://catfact.ninja/fact).

Tech Stack
 Node.js
Express.js
 Axios
CORS

Endpoint  = GET "/me"

Go to your browser and put in "http://localhost:3000/me"
Response Example
json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T13:27:12.234Z",
  "fact": "Cats have five toes on their front paws, but only four on the back ones."
}