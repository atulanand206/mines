FROM node:12

WORKDIR /

ENV PATH ./node_modules/.bin:$PATH
ENV TOOL_NODE_FLAGS=--max_old_space_size=4096

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]