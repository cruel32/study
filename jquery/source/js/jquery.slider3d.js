(function($){
    $.fn.slider3d = function(options){
        console.log("this : ", this);
        let o = $.extend({
            "class" : "slider3d",
            "index" : 0,
        },options);
        this.addClass(o.class);
        this.each(function(idx,ele){
            let el = $(ele),
            Slider3d = {
                o : o,
                define(){
                    this.slider = el.children();
                    this.items = this.slider.children();
                    this.init();
                },
                init(){
                    this.index = Slider3d.o.index,
                    this.slider.removeAttr("style");
                    this.width = this.slider.width();
                    this.angle = 360/this.items.length; // 72
                    //radians = degrees * (π / 180)
                    this.distance = (this.width/2) * Math.tan( 
                        ( (180-(this.angle/2+90)) * Math.PI / 180 ))
                    el.css({
                        "transform" : `translateZ(-${Slider3d.distance}px)`
                    })
                    this.slider.css({
                        "transform" : `rotateY(0deg)`
                    })
                    this.active();
                    this.setItemsAngle();
                },
                active(){
                    this.items.eq(this.index).addClass("active");
                },
                setItemsAngle(){
                    this.items.each((idx,ele)=>{
                        $(ele).css({
                            "transform" : `rotateY(${idx*Slider3d.angle}deg) translateZ(${Slider3d.distance}px)`
                        });
                    })
                },
                move(num){
                    
                }
            }
            Slider3d.define();
            this.outsiding = Slider3d;
        })
    }
})(jQuery);