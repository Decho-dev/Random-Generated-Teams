$(document).ready(function() {
    $('button').click(function() {
        $('ol').empty()
        let player = $('#player').val()
        let arr = player.split(', ')
        let teamOne = [];
        let teamTwo = [];
        for (const iterator of arr) {
            if (getRandomInt(2) == 1) {
                if (teamOne.length >= arr.length / 2) {
                    teamTwo.push(iterator)
                }else{
                    teamOne.push(iterator)
                }
            }else{
                if (teamTwo.length >= arr.length / 2) {
                    teamOne.push(iterator)
                }else{
                    teamTwo.push(iterator)
                }
            }
        }
        for (const player of teamOne) {
            let li = $('<li>').text(player);
            $('#firstTeam').append(li)
        }
        for (const player of teamTwo) {
            let li = $('<li>').text(player);
            $('#secondTeam').append(li)
        }
        $('#player').val('');
    })

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
})