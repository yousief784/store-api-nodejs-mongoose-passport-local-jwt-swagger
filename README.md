# storeApi

The database schema found in the [Ecommerce.pdf](Ecommerce.pdf)

### Scripts

-   Install: `npm i`
-   run Seeder: `npm run seeder`
-   Start ts server: `npm run dev`

### Database Creation

### Environmental Variables (.env file contents)

```sh
# to connect with the database use the following environmental variables
  PORT ---> the server running on the port of 5000
  MONGO_URL ---> mongodb://localhost:27017/store
  TOKEN_SECRET ---> secret token (your-secret-token)
  NODE_ENV ---> development
  IMAGES_SERVER --> http://localhost:PORT/images
```
