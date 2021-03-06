function Graphisize(className) {
    var static_image = $("." + className);
    var w = window.innerWidth;
    static_image.one("load", function(event) {
        var picWidth = $(this).width();
        $(this).css({
            "padding-bottom": "10px",
            "border-bottom": "3px solid #888",
            "padding-top": "10px",
            "border-top": "2px dotted #ccc"
        });
        if (picWidth > 750) {
            $(this).css("width", "100%");
        }
        if (w <= 1200 && picWidth > 750) {
            var url = $(this).attr("src");
            $(this).on("click", function() {
                window.open(url);
            }).css("cursor", "pointer");
            $(".enlarge").css({
                "font-family": "McClatchy Sans",
                "float": "right",
                display: "block",
                background: "black",
                color: "#fff",
                width: "20px",
                padding: "2.5px",
                "text-align": "center",
                "border-radius": "20%",
                opacity: "0.6",
                top: "40px",
                position: "relative",
                cursor: "pointer"
            }).on("click", function(event) {
                window.open(url);
            }).html("+");
        }
        function oneColumn(windowWidth) {
            var sib = static_image.siblings();
            sib.attr("class", "enlarge-" + className).hide();
            if (windowWidth >= 767) {
                static_image.css({
                    width: "200px",
                    "float": "left",
                    "margin-top": "10px",
                    "margin-right": "2em",
                    "margin-bottom": "2em",
                    "margin-left": "0px"
                });
            } else if (windowWidth < 767) {
                static_image.css({
                    width: "200px",
                    "float": "none",
                    display: "block",
                    "margin-top": "0px",
                    "margin-right": "auto",
                    "margin-bottom": "2em",
                    "margin-left": "auto"
                });
            }
        }
        function twoColumn(windowWidth) {
            var sib = static_image.siblings();
            sib.attr("class", "enlarge-" + className).hide();
            if (windowWidth > 1200) {
                static_image.css({
                    width: "400px",
                    "float": "left",
                    margin: "10px 2em 2em 0px"
                });
            } else if (windowWidth > 991 && windowWidth <= 1200) {
                static_image.css({
                    width: "400px",
                    "float": "none",
                    display: "block",
                    "margin-top": "10px",
                    "margin-right": "auto",
                    "margin-bottom": "2em",
                    "margin-left": "auto"
                });
            } else if (windowWidth <= 767 && windowWidth >= 450) {
                static_image.css({
                    width: "400px",
                    "float": "none",
                    display: "block",
                    "margin-top": "10px",
                    "margin-right": "auto",
                    "margin-bottom": "2em",
                    "margin-left": "auto"
                });
            } else {
                static_image.css({
                    width: "100%",
                    "float": "none",
                    display: "block",
                    "margin-top": "0px",
                    "margin-right": "0px",
                    "margin-bottom": "2em",
                    "margin-left": "0px"
                });
            }
        }
        function threeColumn(windowWidth) {
            static_image.attr("target", "_blank").css({
                width: "100%",
                "margin-top": "10px",
                "margin-right": "0px",
                "margin-bottom": "2em",
                "margin-left": "0px"
            });
            var url = static_image.attr("src");
            if (windowWidth <= 1200 && windowWidth > 767 || windowWidth < 693) {
                $(".enlarge").show();
            } else {
                $(".enlarge").hide();
            }
        }
        function init(w) {
            if (picWidth <= 450) {
                oneColumn(w);
            } else if (picWidth > 450 && picWidth <= 750) {
                twoColumn(w);
            } else if (picWidth > 750) {
                threeColumn(w);
            }
        }
        init(w);
        $(window).on("resize", function(event) {
            var resize_width = window.innerWidth;
            init(resize_width);
        });
    }).each(function() {
        if (this.complete) $(this).load();
    });
}