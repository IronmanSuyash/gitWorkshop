$.get(
    "https://raw.githubusercontent.com/TIEDC/gitWorkshop/master/README.md",
    function(file) {
        var census_md = file.split("### Census")[1].split("\n");
        census_md.map((user) => {
            if(user == ""){
                return;
            }
            var name = user.substring(user.lastIndexOf("[")+1, user.lastIndexOf("]"));
            var url = user.substring(user.lastIndexOf("(")+1, user.lastIndexOf(")"));
            $("#census-list").append("<li class='census-item'><a href="+url+">"+name+"</a></li>");
        });
        var census_count = census_md.length - 1;
        $("#census-count").html(census_count+" Participants:");
    }
);
