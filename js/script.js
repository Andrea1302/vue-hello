/* Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data. */

var app = new Vue ({
    el: "#titolo",
    data: {
        title : "Alex Del Piero",
        immagine : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kFNeQc1eO3aUgSqAM4KvbQW3P43tHmCwrA&usqp=CAU",
        regolaImg : "dimensioni",
        buttonText : "Clicca per far esultare Del Piero"
    },
    methods: {
        changeImage: function(){
            if ( this.immagine === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kFNeQc1eO3aUgSqAM4KvbQW3P43tHmCwrA&usqp=CAU" ){
                this.immagine = "https://i.makeagif.com/media/10-17-2015/b1CKzq.gif";
            } else {
                this.immagine = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kFNeQc1eO3aUgSqAM4KvbQW3P43tHmCwrA&usqp=CAU";
            }

            if ( this.buttonText === "Clicca per far esultare Del Piero"){
                this.buttonText = "Gooooooaaaaaaaaaaalll"
            } else {
                this.buttonText = "Clicca per far esultare Del Piero"
            }
        } 
    }

})
