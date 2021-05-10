FROM node:12

WORKDIR /

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./

CMD ["yarn", "start"]