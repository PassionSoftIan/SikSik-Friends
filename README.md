# 🐰식식프렌즈🐰

### | 데일리 뉴스의 주요 키워드를 맞추는 퀴즈 게임 서비스

### 📆 프로젝트 기간

2023.08.28 ~ 2023.10.06 (6주)

## 목차

<!-- - [🎯 기획배경](#subject) -->

[⭐️ 주요 기능](#mainContents)
[🛠️ 기술 스택](#skills)
[💾 데이터 파이프라인](#dataPipelines)
[🗂️ 시스템 아키텍쳐](#systemArchitecture)
[📋 설계 산출물 및 관련 문서](#design)
[👪 팀원 소개](#members)

<!-- # 🎯 기획 배경

<a name="subject"></a>

기획 배경 -->

## ⭐️ 주요 기능

<a name="mainContents"></a>

### 1. 메인 화면

![메인](/assets/메인.gif)

- 다양한 애니메이션 효과와 배경음악을 사용하여 밝고 신나는 분위기를 완성했습니다.

- 우측 상단에 배경 음악 ON/OFF 버튼

- 로그인 및 회원가입 토글 애니메이션 효과

### 2. 워드 클라우드

![워드클라우드](/assets/워드클라우드.gif)

- 데일리 뉴스를 분석하여 키워드를 추출하고 이를 워드클라우드로 표현하였습니다.

- 워드클라우드는 5개의 카테고리(경제, 사회, 생활/문화, 세계, IT/과학)로 제공합니다.

### 3. 대기실

![대기실](/assets/대기실.gif)

![방생성](/assets/게임방생성.gif)

- 웹 소켓을 사용하여 게임 대기실 내 유저와 생성된 방 정보를 확인할 수 있습니다.

- 대기실 내의 유저들은 채팅창을 통해 소통이 가능합니다.

- 대기실 내 유저들의 프로필을 확인할 수 있습니다.

- 유저에게 친구 요청을 보낼 수 있으며, 요청을 수락하면 서로 친구가 됩니다.

- 생성된 모든 방과 대기중인 방을 확인할 수 있습니다.

### 4. 게임

![문제](/assets/문제풀이.gif)

- 출제 뉴스 날짜, 문제 갯수, 참여 인원을 선택해 게임방을 생성할 수 있습니다.

- 뉴스 데이터로 생성된 문제와 정답이 차례로 화면에 보여집니다.

- 한 문제당 획득한 점수에 따라 현재 순위가 화면에 보여집니다.

- 게임 중인 유저와 채팅을 주고받을 수 있습니다.

### 5. 랭킹

![랭킹](/assets/랭킹프로필.gif)

- 전체 상위 10위 랭킹을 확인할 수 있습니다.

- 좌측에는 자신의 프로필과 랭킹 정보가 보여집니다.

- 닉네임을 클릭하면 해당 유저의 프로필로 이동합니다.

### 6. 프로필

![프로필](/assets/프로필.gif)

![정보수정](/assets/정보수정.gif)

- 프로필 정보 확인 및 정보 수정, 로그아웃이 가능합니다.

- 정보: 프로필 사진, 닉네임, 랭킹, 수집 뱃지 등에 관한 정보를 확인할 수 있습니다.

- 데이터: 전체 및 카테고리 별 정답률을 차트로 확인할 수 있습니다.

- 오답노트: 참여한 게임방의 문제를 다시 풀어볼 수 있습니다.

- 닉네임 검색을 통해 다른 유저의 프로필로 이동합니다.

## 🛠️ 기술 스택

<a name="skills"></a>

### 공통

<img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white">

<img src="https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=GitLab&logoColor=white">

<img src="https://img.shields.io/badge/mattermost-0058CC?style=for-the-badge&logo=mattermost&logoColor=white">

<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

<img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=figpostmanma&logoColor=white">

### Front-End

<img title="" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="">

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">

### Back-End

<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">

<img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white">

<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">

<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">

<img src="https://img.shields.io/badge/json web tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white">

<img title="" src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="">

### Data

<img title="" src="https://img.shields.io/badge/hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black" alt="">

<img title="" src="https://img.shields.io/badge/spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white" alt="">

<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">

<img title="" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="">

<img title="" src="https://img.shields.io/badge/Airflow-017CEE?style=for-the-badge&logo=apacheairflow&logoColor=white" alt="">

### Server

<img title="" src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="">

<img title="" src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="">

<img title="" src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="">

## 💾 데이터 파이프라인

<a name="dataPipelines"></a>

<img src="/assets/데이터파이프라인.png" alt="데이터파이프라인" />

- 24시간을 주기로 새로운 뉴스 데이터를 크롤링합니다.

- 수집한 뉴스 데이터는 HDFS에 저장하여 문제 생성에 사용될 수 있게 하였고, 동시에 키워드를 추출하여 워드 클라우드로 생성했습니다.

- 생성된 워드 클라우드 데이터는 MongoDB에 저장하여 백엔드 서버에서 워드 클라우드 API생성에 사용할 수 있게 하였습니다.

- 이 모든 일련의 과정은 Airflow를 활용하여 24시간마다 자동으로 수행했습니다.

## 🗂️ 시스템 아키텍쳐

<a name="systemArchitecture"></a>

![architecture](./assets/arch.png)

### 메인 서버(좌) | 분산 클러스터링 서버(우)

- AWS EC2 t2.xlarge 인스턴스

- Ubuntu 20.04

## 📋 설계 산출물 및 관련 문서

<a name="design"></a>

### 요구사항 정의

![restapi1](/assets/RestAPI1.PNG)

![restapi2](/assets/RestAPI2.PNG)

![restapi3](/assets/RestAPI3.PNG)

![restapi4](/assets/RestAPI4.PNG)

### 화면 설계서

![Figma](./assets/Figma.png)

### ER Diagram

![erd](./assets/erd.png)

### 프로젝트 관련 문서

<table>
    <tr>
        <td>
        <b>구분</b>
        </td>
        <td>
        <b>링크</b>
        </td>
    </tr>
    <tr>
        <td>
        포팅 매뉴얼 및 시연 시나리오
        </td>
        <td>
        <a src="/exec/포팅_매뉴얼_및_시연_시나리오.docx">포팅 매뉴얼 및 시연 시나리오 바로가기</a>
        </td>
    </tr>
    <tr>
        <td>
        DB 덤프 데이터
        </td>
        <td>
        <a src="/exec/sql/">DB 덤프 데이터 바로가기</a>
        </td>
    </tr>
    <tr>
        <td>
        UCC
        </td>
        <td>
        <a src="https://youtu.be/NUaRz1khf-c" alt="식식프렌즈UCC">UCC 바로가기</a>
        </td>
    </tr>
</table>

## 👪 팀원 소개

<a name="members"></a>

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/hi9900">
            <img src="/assets/hy.png" width="140px" /> <br><br> 👑 구희영 </a> <br></td>
            <td height="140px" align="center"> <a href="https://github.com/PassionSoftIan">
            <img src="/assets/image%20(4).png" width="140px" /> <br><br> 권인식  </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/kimta2hwan">
            <img src="/assets/image%20(3).png" width="140px" /> <br><br> 김태환 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/sl39">
            <img src="/assets/image%20(6).png" width="140px" /> <br><br> 이세울 </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/nayeonxkim">
            <img src="/assets/image%20(5).png" width="140px" /> <br><br> 김나연  </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/StarSein">
            <img src="/assets/image%20(2).png" width="140px" /> <br><br> 황유성  </a> <br></td>
    </tr>
    <tr>
        <td align="center">
        UI/UX<br/>로그인<br/>랭킹<br/>친구<br/>마이페이지<br/>
        </td>
        <td align="center">
        PM<br/>Server<br/>CI/CD<br/>Game<br/>Socket
        </td>
        <td align="center">
        MSA 총괄<br/>Auth<br/>Member<br/>
        </td>
        <td align="center">
        Member<br />회원가입<br/>대기실<br/>실시간 게임<br/>
        </td>
        <td align="center">
        Data Pipeline 구축<br/>hadoop cluster<br/>데이터 수집<br />데이터 저장
        </td>
        <td align="center">
        자연어처리<br/>워드 클라우드<br/>퀴즈 생성
        </td>
    </tr>
</table>
