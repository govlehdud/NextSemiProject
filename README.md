<h1>SemiProject</h1>

<div>
   <h2>프로젝트 진행할때 Tip & Error</h2>
   <strong>useActionState는 폼 액션의 결과를 기반으로 state를 업데이트할 수 있도록 제공하는 Hook 입니다.</strong>
</div>

<h2>git repository부터 vercel 배포까지!!</h2>

<h3>프로젝트 생성 Tip</h3>
<ol>
   <li>git reposiroty에 new 생성 후 'mit' license 넣기</li>
   <li>cmd를 열어 npx create-next-app@latest --typescript 입력</li>
   <li>project명 입력후 나머지 엔터로 입력</li>
   <li>cursor로 폴더열고 npm run dev으로 정상 확인</li>
   <li>아래 3개를 제외한 globals.css 내용 삭제</li>
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   <li>만든 프로젝트와 git repository와 연결하기
   git remote add origin 깃주소 넣기 엔터</li>
   <li>pr받고 변경사항 commit & push 넣기</li>
</ol>
