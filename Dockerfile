```dockerfile
# syntax=docker/dockerfile:1

# -------------------------------------------------------------
# Stage 1: Dependencies
# -------------------------------------------------------------
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy ONLY dependency files first.
# This layer is cached until package.json/package-lock.json changes.
COPY package.json package-lock.json ./

# Persist npm download cache between builds.
RUN --mount=type=cache,target=/root/.npm \
    npm ci


# -------------------------------------------------------------
# Stage 2: Build
# -------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Reuse the dependency layer.
COPY --from=deps /app/node_modules ./node_modules

# Copy application source.
COPY . .

# Build Next.js
RUN npm run build


# -------------------------------------------------------------
# Stage 3: Production
# -------------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Security: non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Next.js standalone output
COPY --from=builder /app/public ./public

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
```
