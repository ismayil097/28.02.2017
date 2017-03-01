function chess(){
    document.write("<div class='chess'>");
        for(i=0;i<4;i++){
            document.write('<div class="row">');
            for(j=0;j<4;j++){
                document.write('<div class="white"></div>')
                document.write('<div class="black"></div>')
            }
            document.write('</div>');
            document.write('<div class="row">');
            for(h=0;h<4;h++){
                document.write('<div class="black"></div>')
                document.write('<div class="white"></div>')
            }
            document.write('</div>');
        }
    document.write("</div>");
}
chess();
