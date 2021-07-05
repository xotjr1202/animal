// 동물 DB
const petData = [
    {
        imgUrl: 'images/dog01.jpg', // 이미지 주소
        name: "미미", // 동물이름
        type: "dog"
    },
    {
        imgUrl: 'images/dog02.jpg',
        name: "뭉뭉이",
        type: "dog"
    },
    {
        imgUrl: 'images/dog03.jpg',
        name: "벤지",
        type: "dog"
    },
    {
        imgUrl: 'images/dog04.jpg',
        name: "댕댕이",
        type: "dog"
    },
    {
        imgUrl: 'images/dog05.jpg',
        name: "몽실이",
        type: "dog"
    },
    {
        imgUrl: 'images/dog06.jpg',
        name: "별이",
        type: "dog"
    }
];

$(function(){
    var html = ''; // html 변수

    // 동물 데이터 불러오기
    for(var i = 0; i < petData.length; i++) {
        console.log(petData[i].name);
        html += `
        <li>
            <a href="#">
                <img 
                src="${petData[i].imgUrl}" 
                alt="${petData[i].name}">
                <div class="caption">
                <h4>${petData[i].name}</h4>
            </div>
            </a>
        </li>`
    }

    // html 목록 출력
    $('.pet-list').html(html)
})