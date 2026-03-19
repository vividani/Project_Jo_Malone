$(function(){
    new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 700,
        anchors: ['home', 'bestsellers', 'gifts', 'mens', 'supports', 'footer'],
        parallax: true,
        onLeave: function(origin, destination, direction){
            console.log("Leaving section" + origin.index);
        },
        verticalCentered: false,
        paddingBottom: '0px',
    });
})