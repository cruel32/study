module.exports = (grunt)=>{
    // 가) 프로젝트 환경설정.
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json")
        // 플러그인 설정
        // 1.html task
        // grunt-htmlhint : html 구문검사
        // grunt-includes : html에서 인클루드를 사용할 수 있게 해줌.

        // 2.css task
        // grunt-contrib-less : css 확장언어로써 css를 만들어줌.
        // grunt-contrib-csslint : css 구문검사
        // grunt-autoprefixer : 크로스 브라우징에 맞게 벤더프리픽스 삽입
        // grunt-csscomb : css를 우선순위에 맞게 정렬해주는 도구
        // grunt-contrib-cssmin : css 최적화를 위해 css 압촉

        // 3.javascript task
        // grunt-contrib-jshint : 자바스크립트 구문검사
        // grunt-contrib-concat : 자바스크립트 파일 합침
        // grunt-contrib-uglify : 자바스크립트 압축

        // 4.others task
        // grunt-contrib-clean : 폴더 및 파일 삭제
        // grunt-contrib-copy : 폴더 및 파일 복사
        // grunt-contrib-imagemin : 이미지 최적화

        // 5.watch task
        // grunt-contrib-watch : 변경된 작업 파일 실시간 동기화
        // grunt-contrib-connect : 로컬 서버를 통해 브라우저로 확인

        // 6.최적화
        // grunt-newer : 변경된 파일들만 빌드하기
        // grunt-concurrent : 다중 태스크를 병렬로 실행하기
        // time-grunt : 얼마나 시간이 소요되나 확인
        // load-grunt-tasks : 자동으로 grunt 태스크를 로드, grunt.loadNpmTasks를 생략할 수 있음
    });

    // 나) 플러그인 로드.
    // grunt.loadNpmTasks("플러그인명");

    // 다) task 실행.
    // 1.html task
    // 2.css task
    // 3.javascript task
    // 4.watch task
    // 5.build task
    // 6.default task
    
    

}