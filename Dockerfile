FROM --platform=linux/amd64 node:18-alpine as development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]

FROM development as production

RUN yarn build

CMD ["yarn", "start"]