<h2> nest-prisma를 사용한 코드빌드 구조

> npm install prisma --save-dev
> npx prisma init

> .env DATABASE_URL="file:./dev.db"

> npx prisma db pull // 기존에 존재하는 디비 스키마 가져오기
> npx prisma generate // 프리즈마 클라이언트에 적용하기
