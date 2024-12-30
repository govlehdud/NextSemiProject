SemiProject

git repository부터 vercel 배포까지!!

<h1>프로젝트 생성</h1>

1. git reposiroty에 new 생성 후 'mit' license 넣기
2. cmd를 열어 npx create-next-app@latest --typescript 입력
3. project명 입력후 나머지 엔터로 입력
4. cursor로 폴더열고 npm run dev으로 정상 확인
5. 아래 3개를 제외한 globals.css 내용 삭제
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

6. 만든 프로젝트와 git repository와 연결하기
   - git remote add origin {깃주소 넣기} 엔터
7. pr받고 변경사항 commit & push 넣기
