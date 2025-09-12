# Daily Chatbot; 마음 일기

---

## 💬 프로젝트 제목
매일의 나를 돌아보는 AI 챗봇, ‘마음 일기’

## 📌 프로젝트 개요
'마음 일기' 프로젝트는 바쁜 현대인들이 하루에 한 번 스스로의 내면을 들여다볼 기회를 제공하고자 기획된 **상담 앱 스타일의 챗봇**입니다.

매일 다른 질문을 통해 사용자가 자신의 감정, 생각, 경험을 기록하고 성찰할 수 있는 개인적인 공간을 제공하며, 답변 내용은 그날의 마음 일기로 저장됩니다.

특히 전문 상담 앱처럼 차분하고 미니멀한 디자인을 적용하여 사용자가 심리적 안정감 속에서 부담 없이 자신의 하루를 돌아볼 수 있도록 돕습니다.


질문 리스트는 `questions.txt` 파일에서 불러오며, 프론트엔드(UI)와 백엔드(API)가 모두 구현되어 있습니다.  

## 🛠️ 기술 스택
본 프로젝트는 **Next.js (v14)**의 통합적인 개발 환경을 기반으로 구현되었습니다.

프론트엔드와 백엔드를 분리하지 않고, Next.js의 API Routes를 활용하여 효율적인 풀스택 아키텍처를 구축했습니다.

- **Frontend**: Next.js, React, TypeScript  
- **Backend**: Next.js API Routes (Node.js 기반)  
- **Data**:  
  - `public/questions.txt` → 질문 모음
  - `data/answers.json` → 답변 기록 저장 (JSON 형식)  
- **Style**: - 대화형 UI (채팅 상담 앱 스타일)

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
