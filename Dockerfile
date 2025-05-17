FROM node:22

WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# .env 먼저 복사 (Prisma가 사용할 수 있도록)
COPY .env .env

# 전체 소스 복사
COPY . .

# Prisma 관련 명령어 실행 (이 시점에 .env 필요)
RUN npx prisma generate

# NestJS 빌드
RUN npm run build

EXPOSE 3001

# 앱 실행
CMD ["node", "dist/main"]