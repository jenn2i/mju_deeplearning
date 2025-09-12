
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const dataPath = path.join(process.cwd(), 'data', 'answers.json');

export async function POST(request: Request) {
  try {
    const { question, answer } = await request.json();

    if (!question || !answer) {
      return NextResponse.json({ error: '질문과 답변은 필수입니다.' }, { status: 400 });
    }

    let answers: any[] = [];
    try {
      const fileContent = await fs.readFile(dataPath, 'utf-8');
      answers = JSON.parse(fileContent);
    } catch (error: any) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    const newAnswer = {
      question,
      answer,
      timestamp: new Date().toISOString(),
    };

    answers.push(newAnswer);

    await fs.writeFile(dataPath, JSON.stringify(answers, null, 2), 'utf-8');

    return NextResponse.json({ message: '답변이 성공적으로 저장되었습니다.' });
  } catch (error) {
    console.error('Error saving answer:', error);
    return NextResponse.json({ error: '답변을 저장하는 데 실패했습니다.' }, { status: 500 });
  }
}
