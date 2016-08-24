angular.module('leagueApp').filter('itemFilter', function () {
    return function (search, tag) {
        var newSearch =  [];
        /*checks if items has tags
        if it does and that selected tag is all - displays all items
        otherwise displays items based on selected tag*/
        for (var i = 0; i < search.length; i++) {
            if (search[i].tags !== undefined && tag==='all') {
                newSearch.push(search[i]);
            }else if(search[i].tags !== undefined && tag !=='all'){
                for (var j = 0; j < search[i].tags.length; j++) {
                    if (search[i].tags[j] === tag){
                        newSearch.push(search[i]);
                    }
                }
            }
        }
        return newSearch;
    }
});


