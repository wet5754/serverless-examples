# lambda, codebuild 등의 서버리스 프레임워크

> **개요**
> 
1. 언어는 가급적 노드(or 타입스크립트)를 사용한다.
2. 서버 의존적인 개발을 지양한다.( ex, 람다에서 상용 서버 호출을 통한 문제 해결 등)
3. 크론잡과 함수는 1대 1로 지정한다.(ex, 한개의 eventbridge에 한개의 람다 연결)
    1. eventbrigde명 예시) every20min-for-lambdaname
4. 람다 layer는 람다와 1대 1로 지정한다.(ex, 한개의 레이어에 한개의 람다 연결)   → serverless framework 사용(하단참고)
    1. layer명 예시) layer-for-lambaname-modulenames(어떤 모듈인지는 생략가능)
5. 함수당 1개의 노션을 생성하여, 노션에 함수의 히스토리를 기록한다.
    1. 함수 설명에 노션 주소를 입력한다(?)
6. 개발이 완료되면, 압축후 s3에 저장한다.        → serverless framework 사용(하단참고)
    1. (./timespread-serverless/lambda/(함수명)/(version)
    2. (./timespread-serverless/codebuild/빌드명/)
7. 레이어도 저장한다.(./serverless/lambda/layer/레이어명/)       → serverless framework 사용(하단참고)
- s3 주소: [https://s3.console.aws.amazon.com/s3/buckets/timespread-serverless?region=ap-northeast-2&tab=objects](https://s3.console.aws.amazon.com/s3/buckets/timespread-serverless?region=ap-northeast-2&tab=objects)
1. 람다의 환경변수는 하드코딩을 금지한다. 람다 > 구성의 환경변수에 입력한다.   → serverless framework 사용(하단참고)

위 내용을 Infrastructure as code 방식으로 구현하기 위해서는 serverless framework를 사용하는 것을 추천한다.

---

> **serverless framework사용 추천**
> 

람다의 규모가 커질 경우에는, **타입스크립트**를 사용을 고민하자

설치

```bash
npm install -g serverless
npm install aws-lambda
npm install -d @types/aws-lambda
npm **install** -d serverless-**plugin**-typescript // 별도 컴파일 없이 타입스크립트 사용가능
npm **install** -d serverless-**offline // 로컬에서 람다 테스트 가능**
npm install -D serverless-deployment-bucket // 배포할때 s3에 함께 배포가능
```

버전확인

```bash
sls —version
```

엑세스 설정

```bash
serverless config credential —provider aws —key [엑세스키 id] —secret [비밀 엑세스키]
```

serverless에서 지원하는 탬플릿 설치

```bash
sls create -t aws-nodejs // (aws-nodejs-typescript 탬플릿도 있지만, 이것보다 aws-nodejs 탬플릿에서 tsc init이 더 나은듯 하다.)
```

serverless framework의 경우에는, 배포의 모든 과정이 최상이 폴더에 존재하는 serverless.yml 파일에 의존한다. yml파일을 사용하여 aws설정을 구현할 수 있다.

배포 (위 yml 기준 상용)

```bash
serverless deploy 
serverless deploy -s prod    // (또는 -s test)
```

로컬 테스트

```bash
serverless invoke local --function "함수 이름"
```

env 환경

./config.js

```jsx
module.exports.CONFIG = (serverless) => ({
  test: {
    ENV: "test",
    DB_HOST: "",
    DB_USER: "",
    DB_PASSWORD: "",
    DB_DATABASE: "",
    REDIS_HOST: "",
  },
  prod: {
    ENV: "prod",
    DB_HOST: "",
    DB_USER: "",
    DB_PASSWORD: "",
		DB_DATABASE: "",
    REDIS_HOST: "",
  },
});
```
