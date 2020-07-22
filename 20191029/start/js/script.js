(function(win, $){
	function RedCircle() {

	};

	RedCircle.prototype.create = function () {
		this.item = $('<div class="circle"></div>');
		return this;
	};


		function BlueCircle() {

	};
	BlueCircle.prototype.create = function () {
		this.item = $('<div class="circle" style = "background:blue;"></div>');
		return this;
	};

		function YellowCircle() {

	};
	YellowCircle.prototype.create = function () {
		this.item = $('<div class="circle" style = "background:yellow;"></div>');
		return this;
	};

	CircleFactory = function() {
		this.types = {}; // {'red': redCircle, 'blue':BlueCircle}
		this.create = function(type){
			return new this.types[type]().create();//들어온 색상 타입에 따라 해당 색상 서클이 만들어짐
		};
		this.register = function(type, cls) {
			if(cls.prototype.create){
				this.types[type] = cls; //색상이랑 원이랑 연결시킨다
			}
		}
	};

	var CircleGeneratorSington = ( function () {
		var instance ;
		
		function init() {
			var _stage = $('.advert');//해당하는 클래스 선택
				_cf = new CircleFactory();
				_cf.register('red',RedCircle);
				_cf.register('blue',BlueCircle);
				_cf.register('yellow',YellowCircle);

			function _position (circle, left, top) { //위치 선택
				circle.css('left', left);
				circle.css('top',top);
			}

			function create(left, top, type) {
				var circle = _cf.create(type).item; //create의 color 인자를 가져옴
				_position(circle, left, top);
				return circle;
			}
			function add(circle) {
				_stage.append(circle);
			}
			return {
				create: create,
				add:add
			}
		}

		return {
			//public 프로퍼티
			getInstance : function () {
				if(!instance) {
					instance = init();//인스턴스가 없으면 init를 통해서 인스턴스를 만들고
				}		
				return instance;	//있으면 인스턴스를 반환해라
			}
		}
	})();

	$(win.document).ready(function(){
		$('.advert').click(function(e){ //클릭하면 함수시작
			var cg = CircleGeneratorSington.getInstance();
			var circle = cg.create(e.pageX-25, e.pageY-25, "red");//위치 집어넣으면
			cg.add(circle);//서클이 생성
		});

		$(document).keypress(function(e) { //문서에 keypress이벤트 발생하면 함수시작
			if (e.key == 'a') { //키값이 a다
				var cg = CircleGeneratorSington.getInstance();
				var circle = cg.create(Math.floor(Math.random()*600), Math.floor(Math.random()*600), "blue");//랜덤으로 파란 원 생성
				cg.add(circle);
			}
		});
		$(document).keypress(function(e) { //문서에 keypress이벤트 발생하면 함수시작
			if (e.key == 'f') { //키값이 f다
				var cg = CircleGeneratorSington.getInstance();
				var circle = cg.create(Math.floor(Math.random()*600), Math.floor(Math.random()*600), "yellow");//랜덤으로 노란 원 생성
				cg.add(circle);
			}
		});

	});

})(window, jQuery);