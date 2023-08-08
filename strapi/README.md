## Run Strapi in local machine

### (1) Prepare npm and yarn environment

- find in official documentation of npm and yarn

```
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
https://classic.yarnpkg.com/en/docs/install#debian-stable
```

### (2) Clone the project

```
git clone git@gitlab.g42.ae:cogna/genomics/strapi-cms.git
```

### (3) Install dependency

```
# enter into the root directory of strapi project
cd strapi-cms/
npm install
```

### (4) Build Project

```
# enter into the root directory of strapi project
cd strapi-cms/
yarn build
```

### (5) Run Project

```
# enter into the root directory of strapi project
cd strapi-cms/
npm run develop
```

- successful information

```
Welcome back!To manage your project 🚀, go to the administration panel at:
http://localhost:1338/admin

To access the server ⚡️, go to:
http://localhost:1338
```

### (6) Set up the first admin account

- login http://localhost:1338/admin
- fill the form to set up the first admin account

### (6.1) If account is already setup

- login using the following credentials

```
email: admin@gmail.com
password: Password@123
```

### (\*) Reset Admin Password

- find out database information in '.env' file
- connect to database
- check user name in 'admin_users' table
- reset username via yarn command

```
# enter into the root directory of strapi project
cd strapi-cms/
yarn strapi admin:reset-user-password --email="your user email" --password="new password"
```
