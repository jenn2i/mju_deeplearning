
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const questionsPath = path.join(process.cwd(), 'public', 'questions.txt');
    const questionsContent = await fs.readFile(questionsPath, 'utf-8');
    const questions = questionsContent.split('\n').filter(q => q.trim() !== '');

    const startDate = new Date('2024-01-01');
    const today = new Date();
    const timeDiff = today.getTime() - startDate.getTime();
    const dayIndex = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    const question = questions[dayIndex % questions.length];

    return NextResponse.json({ question });
  } catch (error) {
    console.error('Error reading questions file:', error);
    return NextResponse.json({ error: '질문을 불러오는 데 실패했습니다.' }, { status: 500 });
  }
}
