FROM node:6.6

RUN mkdir -p /home/app
ENV HOME=/home/app
WORKDIR $HOME

CMD [ "node" ]


# Install app dependencies
COPY src/server/ $HOME
RUN npm install
RUN npm i pm2  -g

# Bundle app source
COPY dist $HOME

EXPOSE 9000
CMD [ "npm", "start" ]

