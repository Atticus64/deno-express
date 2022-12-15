FROM denoland/deno:1.29.0

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.

ADD . .

CMD ["deno", "run", "-A", "main.ts"]