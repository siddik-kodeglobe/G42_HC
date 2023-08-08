FROM node:18

# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

# Set Environment to Production Environment (Optional to include in Dockerfile)
ENV NODE_ENV production
ENV DATABASE_CLIENT postgres

# Set up working directory that will be used to copy files/directories below :
WORKDIR /app

# Copy package.json to root directory inside Docker container of Strapi app
COPY package.json .

# Copy yarn.lock to root directory inside Docker container of Strapi app
COPY yarn.lock .
# COPY .env.sample .env

ENV PATH /opt/node_modules/.bin:$PATH

RUN yarn config set network-timeout 600000 -g

# Install dependencies, but not generate a yarn.lock lockfile and fail if an update is needed.
RUN yarn install --ignore-engines

# Copy required files
COPY . .
RUN mkdir -p /app/public/uploads

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
