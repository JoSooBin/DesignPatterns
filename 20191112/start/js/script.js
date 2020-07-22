(function(win, $){
	function clone(src,out){
		for(var attr in src.prototype){
			out.prototype[attr] = src.prototype[attr];
		}
	}
	function Circle(){
		this.item = $('<div class="circle"></div>');
	}
	Circle.prototype.color = function(clr){
		this.item.css('background', clr);
	}
	
	Circle.prototype.move = function(left, top){
				this.item.css('left',left);
				this.item.css('top',top);
	};

	Circle.prototype.get = function(){
		return this.item;
	}

	function Rect(){
		this.item = $('<div class="rect"></div>');
	}
	clone(Circle, Rect);

	function selfDestructDecorator(obj){
		obj.item.click( function(){ //오브젝트에 클릭이 들어오면
			obj.kill();	
		});
		obj.kill = function () {
			obj.item.remove();//클릭된 객체가 삭제
		}

	}


	function RedCircleBuilder(){
		this.item = new Circle();
		this.init();
	}
	RedCircleBuilder.prototype.init = function() {
		//NOTHING
	};

	RedCircleBuilder.prototype.get = function() {
		return this.item;
	};

	
	function BlueCircleBuilder(){
		this.item = new Circle();

		this.init();
	}

	BlueCircleBuilder.prototype.init = function() {
		this.item.color("blue");

		var rect = new Rect();
		
				rect.color("yellow");
				rect.move(40,40);
				selfDestructDecorator(rect);

		this.item.get().append(rect.get());
	}; 
	BlueCircleBuilder.prototype.get = function() {
		return this.item;
	};	

	ShapeFactory = function(){
			this.types = {};
			this.create = function(type){
				return new this.types[type]().get();
			};

			this.register = function(type, cls){
				if(cls.prototype.init && cls.prototype.get){
						this.types[type] = cls;
				}
			}
	};

	function Stage(id) { //Stage어댑터 생성
		this.index = 0;
		this.context = $(id);
		this.SIG = 'stageItem_';
	}

	Stage.prototype.add = function(item) {
		++this.index;
		item.addClass(this.SIG + this.index);
		this.context.append(item);
	};

	Stage.prototype.remove = function(index) {
		this.context.remove('.'+this.SIG + index);
	}
   
	function CompositeController(a) { //만들어진 원들을 동시에 통제하기 위한 복합체
		this.a = a; 
	}
    // CompositeController(_aCircle)
	// action('color', cls)
	// action('move', left, right)
	CompositeController.prototype.action = function (act) {
		var args = Array.prototype.slice.call(arguments);//arguments객체를array로 변환/ args에는 해당 action이 배열로 들어가 있는상태.
		args.shift(); //첫번째 배열 값 삭제
		for (var item in this.a) {
			this.a[item][act].apply(this.a[item], args);//for문에 따라서 act값에 따라 액션이 달라짐.item에 적용
		}
	};

	var CircleGeneratorSingleton = (function(){
		var instance;

		function init(){
			var _aCircle = [], //만들어진 원들을 배열에 담는 코드
					_stage,
					_sf = new ShapeFactory()
					_cc = new CompositeController(_aCircle);

			function _position(circle, left, top){
				circle.move(left, top);
			}
			function registerShape(name,cls){
				_sf.register(name, cls);
			}
			function setStage(stg){
				_stage = stg;
			}

			function create(left, top,type){
				var circle = _sf.create(type);
				circle.move(left, top);
				return circle;
			}

			function tint(cls) {
				_cc.action('color', cls);
			}

			function move(left, top) {
				_cc.action('move', left, top);
			}

			function add(circle){
				_stage.add(circle.get());
				_aCircle.push(circle);
			}

			function index(){
				return _aCircle.length;
			}

			return {index:index,
							create:create,
							add:add,
							register:registerShape,
							setStage:setStage,
							tint:tint,
							move:move};
		}

		return {
			getInstance: function(){
				if(!instance){
					instance = init();
				}

				return instance;
			}
		}

	})();

	$(win.document).ready(function(){
		var cg = CircleGeneratorSingleton.getInstance();
		cg.register('red', RedCircleBuilder);
		cg.register('blue', BlueCircleBuilder);
		cg.setStage(new Stage('.advert'));
		$('.advert').click(function(e){
			var circle = cg.create(e.pageX-25, e.pageY-25,"red");

			cg.add(circle);
				
		});

		$(document).keypress(function(e){
			if(e.key=='a'){
				var circle = cg.create(Math.floor(Math.random()*600),
															Math.floor(Math.random()*600),
															"blue");
				
				cg.add(circle);
			} else if (e.key == 't') {//tint 활성화. 동그라미가 블랙으로 바뀜
				cg.tint('black');
			} else if (e.key == 'j'){ //j키를 누르면 왼쪽으로 이동
				cg.move("-=5px","+=0px");
			} else if (e.key == 'k'){//k키를 누르면 오른쪽으로 이동
				cg.move("+=5px","+=0px");
			}
			
		});

	});

})(window, jQuery);