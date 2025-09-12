# 💬 프로젝트 제목
Daily Chatbot - 마음 일기

## 📌 프로젝트 개요
이 프로젝트는 사용자의 하루를 기록하고 감정을 관리할 수 있도록 돕는 **상담 앱 스타일 챗봇**입니다.  
매일 하나의 질문을 던지고, 사용자가 답변하면 이를 저장하여 **하루의 마음 일기**로 남길 수 있습니다.

질문 리스트는 `questions.txt` 파일에서 불러오며, 프론트엔드(UI)와 백엔드(API)가 모두 구현되어 있습니다.  

---

## 🛠️ 기술 스택
- **Frontend**: Next.js, React, TypeScript  
- **Backend**: Next.js API Routes (Node.js 기반)  
- **Data**:  
  - `public/questions.txt` → 질문 모음  
  - `data/answers.json` → 답변 기록 저장 (JSON 형식)  
- **Style**: 상담 앱과 비슷한 대화 UI  

---

## 📂 폴더 구조
```
├── .next/                      # Next.js 빌드 결과물
├── data/
│ └── answers.json              # 답변 저장 (자동 생성/갱신)
├── node_modules/
├── public/
│ └── questions.txt             # 질문 리스트
├── src/
│ ├── app/
│ │ ├── api/
│ │ │ ├── answer/route.ts       # 답변 저장 API
│ │ │ └── question/route.ts     # 질문 불러오기 API
│ │ ├── layout.tsx              # 전역 레이아웃
│ │ └── page.tsx                # 메인 챗봇 화면
│ └── styles/                   # 전역/컴포넌트 스타일
├── package.json
├── tsconfig.json
└── README.md
```