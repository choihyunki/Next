# Next.js
# 202130133 최현기

## 9월 17일 (4주차)

##### 1. Creating a page(페이지 만들기)
Next.js는 파일 시스템 기반 라우팅을 사용하기 때문에 폴더와 파일을 사용하여 경로를 정의할 수 있다.

이번 장에서는 레이아웃과 페이지를 만들고 서로 연결하느 방법을 설명한다.

page는 특정 경로에서 렌더링되는 ui이다.

page를 생성하려면 app디렉터리에 page파일을 추가하고, React컴포넌트를 default export한다.

##### 2. Creating a layout(레이아웃 만들기)
layout은 여러 페이지에서 공유되는 UI입니다.

layout은 네비게이션에서 state 및 상호작용을 유지하며, 다시 렌더링 되지는 않습니다.

layout 파일에서 React 컴포넌트의 default export를 사용하여 layout을 정의할 수 있다.

layout 컴포넌트는 page또는 layout이 될 수 있는 children prop를 허용해야 한다.

children은 컴포넌트 안에 감싸진 요소를 의미

< page />는 < layout />컴포넌트의 children입니다.

layout컴포넌트를 만들 때 그 안에 들어갈 콘텐츠를 받을 수 있게 해야하고, 그 컨텐츠는 page또는 layout이 될 수 있다.

Rootlayout component는 반드시 있어야함.

##### 3. Creating a nested route(중첩 라우트 만들기)
중첩 라우트는 다음 URL 세그먼트로 구성된 라우트입니다.

예를 들어, /blog/[sulg ]경로는 세 개의 세그먼트로 구성된다.

/ (Root Segment)
blog (Segment)
[slug ] (Leaf Segment)
[Next.js에서 ]

폴더는 URL 세그먼트에 매핑되는 경로 세그먼트를 정의하는데 사용된다. 즉 폴더가 URl세그먼트가 된다는 의미이다.

파일은 세그먼트에 표시되는 UI를 만드는데 사용된다.

폴더를 중첩하면 중첩된 라우트를 만들 수 있다.

## 9월 10일 (3주차)

- 원문에는 route 라는 단어가 자주 등장
- route는 경로, routing은 경로를 찾는 과정
- path도 경로이기 때문에 번역을 routing으로 함

- firectory와 folder는 구분없이 나옴
- 최상위는 directory 하위는 folder

### 1.Folder and file conventions
- 최상위 폴더는 애플리케이션의 코드와 정적 자산을 구성하는데 사용

### 서버 실행
- npm run dev



-----
## 9월 3일 (2주차)

### Installation
[IDE 플러그인]

- Next.js에는 사용자 정의 TypeScript 플러그인과 유형 검사기가 포함
- Vs Code와 다른 코드 편집기에서 고급 유형 검사 및 자동완성에 사용

[ESLint 설정]

- Next.js에는 ESLint가 내장되어있음
- create-next-app 명령을 사용하여 새 프로젝트를 생성하면 필요한 패키지를 자동으로 설치하고 적절한 설정을 구성
- 기존 프로젝트에 ESlint를 수동으로 추가하려면 package.json에 next lint 스크립트를 다음과 같이 추가합니다

```tsx
{
    "script" : {
        "lint" : next lint
    }
}
```

- Strict : Next.js의 기본 ESLint 구성과 더욱 엄격한 Core Web Vitals 규칙 세트를 포함
- Base : Next.js의 기본 ESLint 구성을 포함
- Cancle : 구성을 건너뜀
- Strict 또는 Base 중 하나가 선택되면, Next.js는 자동으로 eslint와 eslint-config-next를 애플리케이션의 의존성으로 설치
- 선택한 설정을 포함하는 .eslintrc.json 파일을 프로젝트 루트 디렉토리에 생성한다
- 이제 next lint를 실행할 때마다 ESLint가 실행되어 오류를 찾아낸다.
- ESLint가 설정되면 빌드할 때마다 자동실행 [next build]

[import 및 모듈의 절대 경로 별칭 설정]

- next.js에는 tsconfig.json 및 jsconfig.json 파일의 "paths" 및 "baseUrl" 옵션에 대한 지원을 내장
- 이 옵션을 사용하면 프로젝트 디렉터리를 절대 경로로 별칭하여 모듈을 더 쉽고 깔끔하게 가져옴
```tsx
// Before
import { Button } from '../../../components/butotn'

// After
import { Button } from '@/components/button'

```
- 별칭으로 import를 구성하려면 tsconfig.json 또는 jsconfig.json 파일에 baseUrl 구성옵션 추가

- baseUrl 경로를 구성하는 것 외에도 "paths" 옵션을 사용하여 모듈 경로를 "별칭으로 사용
- 예를 들어 @/components/*를 components/* 에 매핑

```
{
    "compilerOptions": {
        "baseUrl": "src/",
        "paths": {
            "@/styles/**": [*styles/**],
            "@/components/**": [components/**]
        }
    }
}
```

### 자동 생성되는 항복
- 프로젝트를 자동으로 생성해서 사용
- 자동생성항목
    1. package.json 파일에 scripts 자동 추가 / public 디렉토리
    2. TypeScript사용(선택): tsconfig.json파일 생성
    3. ESLint 설정(선택): .eslintrc.json 대신 eslint.config.mjs 파일 생성
    4. Tailwind CSS 사용(선택)
    5. src 디렉토리 사용(선택)
    6. App Router(선택), app/layout.tsx 파일 및 app/page.tsx
    7. Turbopack 사용(선택)
    8. import alias 사용(선택): tsconfig.json에 "paths" 자동 생성

※수동으로 프로젝트를 생성할 때 추가적으로 해야 하는 작업을 자동으로 처리

### Core Web Vitals
- LCP : 뷰포트 내에서 가장 큰 페이지 요소를 표시하는 시간
- FID : 사용자가 웹 페이지와 상호작용을 시도하는 첫 번쨰 순간 부터 페이지가 응답하는 시간
- CLS : 방문자에게 콘텐츠가 얼마나 불안정한지 측정한 값


### Next.js와 eslint.config.mjs
```json
{
    "extends": "next",
    "rules":{
        "no-console":"warn"
    }
}
```

```js
//eslint.config.mjs
import next from 'eslint-config-next';

export default[
    next(),
    {
        rules:{
            'no-console':'warn'
        }
    }
];
```

### pnpm
- 효율적인 npm의 약자로 고성능 node 패키지 매니저
- 같은 목적의 패키지 관리자지만 디스크 공간 낭비, 복잡한 의존성 관리, 느린 설치 속도 문제 개선을 위해 개발

##### 대표적인 특징
1. 하드링크 기반의 효율적인 저장 공간사용
    - 패키지를 한 번만 설치하여 글로벌 저장소에 저장하고 하드링크가 생성됨
2. 빠른 패키지 설치속도
    - 이미 설치된 패키지는 재사용, 종속성 설치 및 업데이트 때도 빠른 속도 경험
3. 엄격하고 효율적인 종속성 관리
4. 다른 패키지 매니저의 비효율성 개선

### 하드링크 vs 심볼릭 링크

- pnpm의 특징 중에 하드 링크를 사용해서 디스크 공간을 효율적으로 사용

##### 하드링크란 = 원본파일

