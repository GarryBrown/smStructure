FROM node:6.6

RUN mkdir -p /usr/src/app
ENV HOME=/usr/src/app
WORKDIR $HOME

CMD [ "node" ]

# Install app dependencies
COPY src/server/express $HOME
RUN npm install
RUN npm i pm2  -g

EXPOSE 443
# CMD [ "pm2", "start", "index.js" ]
CMD [ "echo", "'app is started'" ]
CMD ["node", "index.js" ]


