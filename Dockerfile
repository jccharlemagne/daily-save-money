ARG NODE_VERSION="16-alpine3.16"

FROM node:${NODE_VERSION} as builder
ARG SERVICE
WORKDIR /usr/src/app

COPY --chown=node:node package*.json lerna.json ./
COPY --chown=node:node packages/ ./packages
COPY --chown=node:node services/${SERVICE} ./services/${SERVICE}
RUN yarn install --frozen-lockfile && yarn run build

ENV NODE_ENV=production \
    PORT=3000 \
    SERVICE_NAME=${SERVICE}

#HEALTHCHECK --interval=30s \
#    --timeout=2s \
#    --retries=10 \
#    CMD node services/${SERVICE_NAME}/src/healthcheck.js

EXPOSE 3000
CMD ["yarn", "workspace", "@jccharlemagne/${SERVICE}", "start"]

#FROM node:10-alpine
#ARG SERVICE
#WORKDIR /usr/src/app
#COPY --chown=node:node --from=builder /usr/src/app .
#
#ENV NODE_ENV=production \
#    PORT=3000 \
#    SERVICE_NAME=${SERVICE}
#
#HEALTHCHECK --interval=30s \
#    --timeout=2s \
#    --retries=10 \
#    CMD node services/${SERVICE_NAME}/src/healthcheck.js
#
#EXPOSE 3000
#CMD ["npm", "--prefix", "services/${SERVICE}", "start"]
