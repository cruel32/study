(function($){
    $.fn.slider3d = function(options){
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
                        "transform" : `translateZ(-${this.distance}px)`,
                        "perspective" : `${o.minPerspective}px`
                    })
                    this.setActive();
                    this.setAngle("end");
                },
                setActive(){
                    this.items.eq(this.idx).addClass("active");
                },
                setAngle(state){
                    let i = this.idx%this.items.length;
                    let transZ = ` translateZ(${Slider3d.distance}px)`;
                    this.items.each((idx,ele)=>{
                        $(ele).css({
                            "transition" : "all .4s ease",
                            "transform" : `rotateY(${idx*Slider3d.deg}deg) ${transZ}`
                            // +(
                            //     state == "end" ? (idx==(Slider3d.items.length+i)%this.items.length ? transZ : ``) : transZ
                            // )
                        });
                    })
                },
                to(num){
                    this.slider.css({
                        "transform" : `rotateY(${num*this.deg*-1}deg)`
                    }).one(this.animateEvent,(e)=>{
                        e.stopPropagation();
                        Slider3d.idx = num;
                        Slider3d.pack();
                    })
                },
                move(num){
                    this.unpack(num);
                },
                unpack(num){
                    // el.css({
                    //     "perspective" : `${o.minPerspective}px`
                    // }).one(this.animateEvent,(e)=>{
                        Slider3d.setAngle("start");
                        // e.stopPropagation();
                        Slider3d.to(num);
                    // })
                },
                pack(){
                    Slider3d.setAngle("end");
                    // setTimeout(()=>{
                    //     el.css({
                    //         "perspective" : `${o.maxPerspective}px`
                    //     });
                    // },400)
                },
                right(){
                    this.move(this.idx+=1);
                },
                left(){
                    this.move(this.idx-=1);
                }
            }
            Slider3d.define();
            $.extend(this,Slider3d);
        })
        return this;
    }
})(jQuery);