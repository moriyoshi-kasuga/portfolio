import './style.css';
import { FaComputer } from 'react-icons/fa6';

type Skill = {
  title: string;
  learn: number;
  content: string;
};

const languages: Skill[] = [
  {
    title: 'HTML',
    learn: 30,
    content:
      '(言語ではないですが)学びの定義が難しかったので30%としました、やっぱりWebAppやReact NativeやElectronを使ってみたり、作ってみたいのでちゃんと使えるようになりたい',
  },
  {
    title: 'CSS',
    learn: 30,
    content:
      '(言語ではないですが)こちらも定義が難しかったので30%としました、CSSもHTMLと同様に使えるようになりたいです',
  },
  {
    title: 'Python',
    learn: 60,
    content:
      'ある程度は使えるのですが、継承が少し怪しいのと、特殊というかPythonが基本的に自由すぎるのでその独自のシステムなどはまだ学べてもないと思うのでこの学び率です',
  },
  {
    title: 'Java',
    learn: 50,
    content:
      '最初に勉強したプログラミング言語です、マイクラのプラグイン以外で使ったことありません',
  },
  {
    title: 'Scala',
    learn: 10,
    content:
      'Javaの代わりにScalaでマイクラのプラグインを書こうかなと思っているため学んでます',
  },
  {
    title: 'C++',
    learn: 10,
    content: '競プロのために学ぼうとしています',
  },
];

const TechStack = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <>
      <h2 className='mx-4 mb-4 mt-12 text-center font-mono-jp text-3xl font-semibold'>
        「{title}」
      </h2>
      <div className='container mb-20 flex flex-wrap justify-center'>
        {skills.map((skill) => {
          return (
            <div
              className='mb-12 flex w-full items-center max-lg:flex-col md:w-1/2'
              key={skill.title}
            >
              <div
                className='techStack relative m-4 flex aspect-square max-h-60 min-h-52 min-w-52 max-w-60 items-center justify-center rounded-full'
                style={{
                  ['--learn' as string]: skill.learn,
                }}
              >
                <h3 className='font-mono-jp text-2xl font-semibold'>{skill.title}</h3>
                <p className='absolute top-[30%] -translate-y-1/2 font-mono-jp text-xl font-semibold'>
                  {skill.learn}%
                </p>
              </div>
              <div className='jusify-center flex w-4/5 flex-col items-center px-4 py-2 lg:w-1/2'>
                <p className='my-auto font-sans-jp font-medium'>{skill.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default function Page() {
  return (
    <div className='min-h-all flex flex-col items-center py-10 font-sans-jp'>
      <h1 className='flex items-center gap-x-2 font-mono text-5xl font-bold text-primary-300'>
        Skills
        <FaComputer />
      </h1>
      <p className='m-4 text-center font-mono-jp text-2xl'>
        パーセンテージで完全に自分の主観でどれぐらい理解できるかを図で表しています
      </p>
      <TechStack title='Languages' skills={languages} />
    </div>
  );
}
