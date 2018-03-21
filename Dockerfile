FROM node

ENV SERVICE_PORT 3000
ENV WAIT_START 0

COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install

EXPOSE ${SERVICE_PORT}
#CMD ["node","./src/index.js"]
CMD echo "Waiting for ${WAIT_START}s..." && sleep ${WAIT_START} && npm start
