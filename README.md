### 팀 프로젝트

# Client

- React + vite + redux

# Server

- Spring

# fontawesome (react)

- npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
- npm i -S @fortawesome/free-solid-svg-icons

## 원하는 파일 상단에 import 예시

- import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
- import { faPhone } from "@fortawesome/free-solid-svg-icons";

## react-router-dom v6 변경 사항

- switch -> routes 로 바뀜
- exact는 더 이상 안 씀
- component 옵션이 element로 변경

## build

- react 화면을 spring의 화면과 교체

## redux-toolkit 활용

## swiper.js 활용

## ClassList를 조작하고 싶을 때

- useRef를 참조해서 조작하기

## 특정 주소에서 특정 컴포넌트 제외

- useLocation 참조

## Spring @RestController

- @Controller + @ResponseBody
- 주용도 : Json 형태로 객체 데이터를 반환

## 전반적인 Form = Formik과 유효성 검사 라이브러리 Yup 사용해보기

- npm i formik
- npm i yup

## Spring Security + JWT

- 가장 먼저 Security와 Filter관련 설정 해주기

## RapidAPI (postman 같은 기능)

- Error parsing HTTP request header
  Note: further occurrences of HTTP request parsing errors will be logged at DEBUG level.

해결법 : https -> http://localhost:8080/api/user/register
