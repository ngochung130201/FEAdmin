(function () {
    'use strict';
    init();
    function init() {
        menus();
    }

    function menus() {
        if ($("#Items").length && $("#Items").val().length > 0 && $("#Items").val() != "[]") {
            var objects = JSON.parse($("#Items").val());
            console.log(objects);
            $("#menu-instructions").html("");
            var items = objects[0];
            var render = "";
            if (items.length) {
                $.each(items, function (ind, item) {
                    if (item.length) {
                        render += "<ol class='dd-list'>";
                        $.each(item, function (index, value) {
                            if (value.length) {
                                render += "<ol class='dd-list'>";
                                $.each(value, function (i, v) {
                                    render += "<li class='dd-item' id='index-" + ind.toString() + index.toString() + (i + 1).toString() + "'>";
                                    render += "<div class='block-web'>";
                                    render += "<div class='header'>";
                                    render += "<div class='dd-handle'>";
                                    render += "<i class='fas fa-arrows-alt'></i> " + v.name;
                                    render += "</div>";
                                    render += "<div class='actions'>";
                                    render += "<a>" + v.type + "</a>";
                                    render += "<a data-target='#menu-item-" + ind.toString() + index.toString() + (i + 1).toString() + "' data-toggle='collapse'><i class='fa fa-chevron-down'></i></a>";
                                    render += "<a class='close-down remove' data-index='" + ind.toString() + index.toString() + (i + 1).toString() + "'><i class='fa fa-times'></i></a>";
                                    render += "</div>";
                                    render += "</div>";
                                    render += "<div id='menu-item-" + ind.toString() + index.toString() + (i + 1).toString() + "' class='collapse'>";
                                    render += "<div class='porlets-content'>";
                                    render += "<input type='hidden' name='item-type' value='" + v.type + "'/>";
                                    render += "<p>Tiêu đề</p>";
                                    render += "<p><input type='text' class='form-control input-md' name='item-text' placeholder='Tiêu đề' value='" + v.name + "'/></p>";
                                    render += "<p>Liên kết</p>";
                                    render += "<p><input type='text' class='form-control input-md' name='item-url' placeholder='http://' value='" + v.url + "'/></p>";
                                    render += "</div>";
                                    render += "</div>";
                                    render += "</div>";
                                    render += "</li>";
                                });
                                render += "</ol>";
                                render += "</li>";
                            }
                            else {
                                render += "<li class='dd-item' id='index-" + ind.toString() + (index + 1).toString() + "'>";
                                render += "<div class='block-web'>";
                                render += "<div class='header'>";
                                render += "<div class='dd-handle'>";
                                render += "<i class='fas fa-arrows-alt'></i> " + value.name;
                                render += "</div>";
                                render += "<div class='actions'>";
                                render += "<a>" + value.type + "</a>";
                                render += "<a data-target='#menu-item-" + ind.toString() + (index + 1).toString() + "' data-toggle='collapse'><i class='fa fa-chevron-down'></i></a>";
                                render += "<a class='close-down remove' data-index='" + ind.toString() + (index + 1).toString() + "'><i class='fa fa-times'></i></a>";
                                render += "</div>";
                                render += "</div>";
                                render += "<div id='menu-item-" + ind.toString() + (index + 1).toString() + "' class='collapse'>";
                                render += "<div class='porlets-content'>";
                                render += "<input type='hidden' name='item-type' value='" + value.type + "'/>";
                                render += "<p>Tiêu đề</p>";
                                render += "<p><input type='text' class='form-control input-md' name='item-text' placeholder='Tiêu đề' value='" + value.name + "'/></p>";
                                render += "<p>Liên kết</p>";
                                render += "<p><input type='text' class='form-control input-md' name='item-url' placeholder='http://' value='" + value.url + "'/></p>";
                                render += "</div>";
                                render += "</div>";
                                render += "</div>";
                                if (item[index + 1] != null) {
                                    if (item[index + 1].length == 0) {
                                        render += "</li>";
                                    }
                                }
                                else {
                                    if (index = item.length - 1) {
                                        render += "</li>";
                                    }
                                }
                            }
                        });
                        render += "</ol>";
                        render += "</li>";
                    }
                    else {
                        render += "<li class='dd-item' id='index-" + ind.toString() + "'>";
                        render += "<div class='block-web'>";
                        render += "<div class='header'>";
                        render += "<div class='dd-handle'>";
                        render += "<i class='fas fa-arrows-alt'></i> " + item.name;
                        render += "</div>";
                        render += "<div class='actions'>";
                        render += "<a>" + item.type + "</a>";
                        render += "<a data-target='#menu-item-" + ind.toString() + "' data-toggle='collapse'><i class='fa fa-chevron-down'></i></a>";
                        render += "<a class='close-down remove' data-index='" + ind.toString() + "'><i class='fa fa-times'></i></a>";
                        render += "</div>";
                        render += "</div>";
                        render += "<div id='menu-item-" + ind.toString() + "' class='collapse'>";
                        render += "<div class='porlets-content'>";
                        render += "<input type='hidden' name='item-type' value='" + item.type + "'/>";
                        render += "<p>Tiêu đề</p>";
                        render += "<p><input type='text' class='form-control input-md' name='item-text' placeholder='Tiêu đề' value='" + item.name + "'/></p>";
                        render += "<p>Liên kết</p>";
                        render += "<p><input type='text' class='form-control input-md' name='item-url' placeholder='http://' value='" + item.url + "'/></p>";
                        render += "</div>";
                        render += "</div>";
                        render += "</div>";
                        if (items[ind + 1] != null) {
                            if (items[ind + 1].length == 0) {
                                render += "</li>";
                            }
                        }
                        else {
                            if (ind = items.length - 1) {
                                render += "</li>";
                            }
                        }
                    }
                });
            }
            $("#menu-instructions").append(render);
        }

        $("#submit-custom-link").click(function () {
            var count = $("#menu-instructions li").length;
            if ($("#custom-menu-item-name").val() != "" && $("#custom-menu-item-url").val() != "") {
                var html = "";
                html += "<li class='dd-item' id='index-" + (count + 1).toString() + "'>";
                html += "<div class='block-web'>";
                html += "<div class='header'>";
                html += "<div class='dd-handle'>";
                html += "<i class='fas fa-arrows-alt'></i> " + $("#custom-menu-item-name").val();
                html += "</div>";
                html += "<div class='actions'>";
                html += "<a>Tùy chọn</a>";
                html += "<a data-target='#menu-item-" + (count + 1).toString() + "' data-toggle='collapse'><i class='fa fa-chevron-down'></i></a>";
                html += "<a class='close-down remove' data-index='" + (count + 1).toString() + "'><i class='fa fa-times'></i></a>";
                html += "</div>";
                html += "</div>";
                html += "<div id='menu-item-" + (count + 1).toString() + "' class='collapse'>";
                html += "<div class='porlets-content'>";
                html += "<input type='hidden' name='item-type' value='Tùy chọn'/>";
                html += "<p>Tiêu đề</p>";
                html += "<p><input type='text' class='form-control input-md' name='item-text' placeholder='Tiêu đề' value='" + $("#custom-menu-item-name").val() + "'/></p>";
                html += "<p>Liên kết</p>";
                html += "<p><input type='text' class='form-control input-md' name='item-url' placeholder='http://' value='" + $("#custom-menu-item-url").val() + "'/></p>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                html += "</li>";

                $("#menu-instructions").append(html);
            }
        });

        $("#submit-page-link").click(function () {
            $('.page-link input:checked').each(function () {
                var count = $("#menu-instructions li").length;
                var html = "";
                html += "<li class='dd-item' id='index-" + (count + 1).toString() + "'>";
                html += "<div class='block-web'>";
                html += "<div class='header'>";
                html += "<div class='dd-handle'>";
                html += "<i class='fas fa-arrows-alt'></i> " + $(this).attr("data-text");
                html += "</div>";
                html += "<div class='actions'>";
                html += "<a>Trang nội dung</a>";
                html += "<a data-target='#menu-item-" + (count + 1).toString() + "' data-toggle='collapse'><i class='fa fa-chevron-down'></i></a>";
                html += "<a class='close-down remove' data-index='" + (count + 1).toString() + "'><i class='fa fa-times'></i></a>";
                html += "</div>";
                html += "</div>";
                html += "<div id='menu-item-" + (count + 1).toString() + "' class='collapse'>";
                html += "<div class='porlets-content'>";
                html += "<input type='hidden' name='item-type' value='Trang nội dung'/>";
                html += "<p>Tiêu đề</p>";
                html += "<p><input type='text' class='form-control input-md' name='item-text' placeholder='Tiêu đề' value='" + $(this).attr("data-text") + "'/></p>";
                html += "<p>Liên kết</p>";
                html += "<p><input type='text' class='form-control input-md' name='item-url' placeholder='http://' value='" + $(this).attr("data-url") + "'/></p>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                html += "</li>";
                $("#menu-instructions").append(html);
                $(this).attr('checked', false);
            });
        });

        $("#submit-cat-link").click(function () {
            $('.cat-link input:checked').each(function () {
                var count = $("#menu-instructions li").length;
                var html = "";
                html += "<li class='dd-item' id='index-" + (count + 1).toString() + "'>";
                html += "<div class='block-web'>";
                html += "<div class='header'>";
                html += "<div class='dd-handle'>";
                html += "<i class='fas fa-arrows-alt'></i> " + $(this).attr("data-text");
                html += "</div>";
                html += "<div class='actions'>";
                html += "<a>Danh mục</a>";
                html += "<a data-target='#menu-item-" + (count + 1).toString() + "' data-toggle='collapse'><i class='fa fa-chevron-down'></i></a>";
                html += "<a class='close-down remove' data-index='" + (count + 1).toString() + "'><i class='fa fa-times'></i></a>";
                html += "</div>";
                html += "</div>";
                html += "<div id='menu-item-" + (count + 1).toString() + "' class='collapse'>";
                html += "<div class='porlets-content'>";
                html += "<input type='hidden' name='item-type' value='Danh mục'/>";
                html += "<p>Tiêu đề</p>";
                html += "<p><input type='text' class='form-control input-md' name='item-text' placeholder='Tiêu đề' value='" + $(this).attr("data-text") + "'/></p>";
                html += "<p>Liên kết</p>";
                html += "<p><input type='text' class='form-control input-md' name='item-url' placeholder='http://' value='" + $(this).attr("data-url") + "'/></p>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                html += "</li>";
                $("#menu-instructions").append(html);
                $(this).attr('checked', false);
            });
        });

        $("body").on("click", ".remove", function () {
            var index = $(this).attr("data-index");
            $('#index-' + index).remove();
        });

        $('#nestable').nestable({
            expandBtnHTML: '',
            collapseBtnHTML: '',
            group: 1,
            noDragClass: 'btn'
        });

        $("body").on('click', '#edit-menu', function (e) {
            var items = "";
            var objects = [];
            var rootElements = $("#menu-instructions").children('li');
            if (rootElements.length > 0) {
                var menuArr = [];
                rootElements.each(function () {
                    var rootMenu = $(this);
                    var index = rootMenu.attr("id").replace("index-", "");
                    var root_name = rootMenu.find("#menu-item-" + index).find("input[name='item-text']").val();
                    var root_url = rootMenu.find("#menu-item-" + index).find("input[name='item-url']").val();
                    var root_type = rootMenu.find("#menu-item-" + index).find("input[name='item-type']").val();

                    menuArr.push({
                        name: root_name,
                        url: root_url,
                        type: root_type
                    });

                    var tagOLSub = rootMenu.children('ol').length;
                    if (tagOLSub > 0) {
                        var subElement = rootMenu.find('ol:first').children('li');
                        if (subElement.length > 0) {
                            var subArr = [];
                            subElement.each(function () {
                                var subMenu = $(this);
                                index = subMenu.attr("id").replace("index-", "");
                                root_name = subMenu.find("#menu-item-" + index).find("input[name='item-text']").val();
                                root_url = subMenu.find("#menu-item-" + index).find("input[name='item-url']").val();
                                root_type = subMenu.find("#menu-item-" + index).find("input[name='item-type']").val();

                                subArr.push({
                                    name: root_name,
                                    url: root_url,
                                    type: root_type
                                });

                                var tagOLChild = subMenu.children('ol').length;
                                if (tagOLChild > 0) {
                                    var childElements = subMenu.find('ol:first').children('li');
                                    if (childElements.length > 0) {
                                        var childArr = [];
                                        childElements.each(function () {
                                            var childMenu = $(this);
                                            index = childMenu.attr("id").replace("index-", "");
                                            root_name = childMenu.find("#menu-item-" + index).find("input[name='item-text']").val();
                                            root_url = childMenu.find("#menu-item-" + index).find("input[name='item-url']").val();
                                            root_type = childMenu.find("#menu-item-" + index).find("input[name='item-type']").val();

                                            childArr.push({
                                                name: root_name,
                                                url: root_url,
                                                type: root_type
                                            });
                                        });
                                        subArr.push(childArr);
                                    }
                                }
                            });
                            menuArr.push(subArr);
                        }
                    }
                });
                objects.push(menuArr);
            }
            items = JSON.stringify(objects);
            var param = { ID: $("#ID").val(), Title: $("#Title").val(), Slug: $("#Slug").val(), Items: items };
            $.ajax({
                type: "POST",
                url: "/Admin/Menus/Edit",
                contentType: "application/x-www-form-urlencoded",
                data: { menus: JSON.stringify(param)} ,
                success: function (data) {
                    window.location.reload();
                },
                error: function (xhr, textStatus, errorThrown) {
                },
            });
        });
    }

    
})();