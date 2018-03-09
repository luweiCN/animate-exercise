/**
 * Created by luwei on 2017/6/22.
 */
var index = 1;
const text = [
    '熙攘中，让心灵在禅意空间得到放松。',
    '在焦躁的生活里，闲下来做一顿饭给家人吃。',
    '离开都市中的追逐，在家寻找一片宁静，细品慢生活。',
    '让呼吸在绿色间流畅，让土地在根系中凝聚。',
    '现在的宝宝越来越可爱，教你如何在家给宝宝摆拍。'
];

const bg = [
    'img/bg1.png',
    'img/bg2.png'
]

function slideRight(index,method) {
    if (index == 5) return 5;

    index++;
    swtich(index,'right',method);
    
    return index;
}

function slideLeft(index,method) {
    if (index == 1) return 1;

    index--;
    swtich(index,'left',method);

    return index;
}

function swtich(index, direction, method) {
    $('#bg aside li').removeClass('active');
    $('#bg aside li').eq(index-1).addClass('active');


    $('#mainCon ul').velocity({left: -334*(index-1)+'px'},600,method);
    if (direction == 'right'){
        $('#mainCon ul li').eq(index-2).velocity({width: '294px'},600,method);
    } else {
        $('#mainCon ul li').eq(index).velocity({width: '294px'},600,method);
    }

    $('#mainCon ul li').eq(index-1).velocity({width: '615px'},600,method);
    $('figcaption').velocity({opacity:0},600,function () {
        $('figcaption').css('background',"url(" + bg[(index-1)%2] + ") no-repeat");
        $('figcaption p').html(text[index-1]);
        $('figcaption').velocity({opacity:1},600,function () {
            $('#bg').css('background',"url(" + bg[(index)%2] + ") no-repeat");
            $('#mainCon ul li').removeClass('main');
		    $('#mainCon ul li').eq(index-1).addClass('main');
			$('button').removeAttr('disabled');
    	});
	});
}

$('button').eq(0).click(function () {
	if (index > 1) {$('button').attr('disabled','true');}
    index = slideLeft(index, 'easeInOutBack');
});

$('button').eq(1).click(function () {
	if (index < 5) {$('button').attr('disabled','true');}
    index = slideRight(index, 'easeInOutBack');
});
