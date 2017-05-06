(function($){
    $.fn.slider3d = function(options){
        console.log("this : ", this);
        let o = $.extend({
            "class" : "slider3d",
            "index" : 0,
            "maxPerspective" : "300000",
            "minPerspective" : "3000"
        },options);
        this.addClass(o.class);
        this.each(function(idx,ele){
            let el = $(ele),
            Slider3d = {
                o : o,
                define(){
                    this.slider = el.children();
                    this.items = this.slider.children();
                    this.deg = 360/this.items.length;
                    this.animateEvent = "transitionend";
                    this.init();
                },
                init(){
                    this.idx = this.o.index,
                    this.slider.removeAttr("style");
                    this.width = this.slider.width();
                    //radians = degrees * (π / 180)
                    this.distance = (this.width/2) * Math.tan(((180-(this.deg/2+90)) * Math.PI / 180 ));
                    el.css({
                        "transform" : `translateZ(-${this.distance}px)`
                    })
                    this.setActive();
                    this.setAngle("end");
                },
                setActive(){
                    this.items.eq(this.idx).addClass("active");
                },
                setAngle(state){
                    console.log("setAngle");
                    let i = this.idx%this.items.length;
                    let transZ = ` translateZ(${Slider3d.distance}px)`;
                    console.log("this.idx : ", this.idx, "i : ", i);
                    this.items.each((idx,ele)=>{
                        $(ele).css({
                            "transition" : "transform 1.5s ease",
                            "transform" : `rotateY(${idx*Slider3d.deg}deg)`
                            +(
                                state == "end" ? (idx==Math.abs(i) ? transZ : ``) : transZ
                            )
                        });
                    })
                    // this.items.each((idx,ele)=>{
                    //     $(ele).css({
                    //         "transform" : `rotateY(${idx*Slider3d.deg}deg) translateZ(${Slider3d.distance}px)`
                    //     });
                    // })
                },
                to(num){
                    console.log("to");
                    this.slider.css({
                        "transform" : `rotateY(${num*this.deg*-1}deg)`
                    }).one(this.animateEvent,()=>{
                        Slider3d.idx = num;
                        Slider3d.pack();
                    })
                },
                move(num){
                    console.log("move");
                    this.unpack(num);
                },
                unpack(num){
                    Slider3d.setAngle("start");
                    el.css({
                        "perspective" : `${o.minPerspective}px`
                    }).one(this.animateEvent,(e)=>{
                        Slider3d.to(num);
                    })
                },
                pack(){
                    Slider3d.setAngle("end");
                    el.css({
                        "perspective" : `${o.maxPerspective}px`
                    })
                },
                right(){
                    console.log("right");
                    this.move(this.idx+=1);
                },
                left(){
                    console.log("left");
                    this.move(this.idx-=1);
                }
            }
            console.log("el : ", el);
            Slider3d.define();
            $.extend(this,Slider3d);
        })
        return this;
    }
})(jQuery);