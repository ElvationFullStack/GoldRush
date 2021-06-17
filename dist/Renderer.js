class Renderer{
    constructor(){
        this.source_board = $('#board-template').html();
        this.template_board= Handlebars.compile(this.source_board);
        this.source_score = $('#scores-template').html();
        this.template_score= Handlebars.compile(this.source_score);
    }
    renderBoard(board){
        console.log(board)
        this.board = $("#root")
        const newHTML = this.template_board({ rows:board });
        this.board.empty().append(newHTML);
    }
    renderScore(players){
        this.score = $("#scores")
        console.log(players)
        const newHTML = this.template_score({ players:players });
        this.score.empty().append(newHTML);
    }

}
