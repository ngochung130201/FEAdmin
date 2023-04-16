/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

$(document).ready(function () {
    // tinyMCE Editor
    tinyMCE.init({
        selector: ".tinymce",
        height: 200,
        entity_encoding: "raw",
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "save table contextmenu directionality emoticons template paste textcolor"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons | ButtonImage | BoxHighlight",
        rel_list: [
            { title: 'None', value: '' },
            { title: 'No Follow', value: 'nofollow' },
            { title: 'No Opener', value: 'noopener' },
            { title: 'No Follow, No Opener', value: 'nofollow noopener' }
        ],
        style_formats: [
            {
                title: 'Headers', items: [
                    { title: 'Header 1', format: 'h1' },
                    { title: 'Header 2', format: 'h2' },
                    { title: 'Header 3', format: 'h3' },
                    { title: 'Header 4', format: 'h4' },
                    { title: 'Header 5', format: 'h5' },
                    { title: 'Header 6', format: 'h6' }
                ]
            },
            {
                title: 'Inline', items: [
                    { title: 'Bold', icon: 'bold', format: 'bold' },
                    { title: 'Italic', icon: 'italic', format: 'italic' },
                    { title: 'Underline', icon: 'underline', format: 'underline' },
                    { title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough' },
                    { title: 'Superscript', icon: 'superscript', format: 'superscript' },
                    { title: 'Subscript', icon: 'subscript', format: 'subscript' },
                    { title: 'Code', icon: 'code', format: 'code' }
                ]
            },
            {
                title: 'Blocks', items: [
                    { title: 'Paragraph', format: 'p' },
                    { title: 'Blockquote', format: 'blockquote' },
                    { title: 'Div', format: 'div' },
                    { title: 'Pre', format: 'pre' }
                ]
            },
            {
                title: 'Alignment', items: [
                    { title: 'Left', icon: 'alignleft', format: 'alignleft' },
                    { title: 'Center', icon: 'aligncenter', format: 'aligncenter' },
                    { title: 'Right', icon: 'alignright', format: 'alignright' },
                    { title: 'Justify', icon: 'alignjustify', format: 'alignjustify' }
                ]
            },
            { title: 'Text orange', inline: 'span', classes: 'text-orange' },
            { title: 'Text blue', inline: 'span', classes: 'text-blue' },
            { title: 'Text Green', inline: 'span', classes: 'text-green' },
            { title: 'Bullet', selector: 'ul', classes: 'bullet' },
            { title: '2 hình 1 hàng', selector: 'p', classes: 'image-inline-2' },
            { title: '3 hình 1 hàng', selector: 'p', classes: 'image-inline-3' }
        ],
        setup: function (editor) {
            editor.addButton('ButtonImage', {
                type: 'menubutton',
                text: 'Button Image',
                icon: false,
                menu: [{
                    text: 'Button Image 1',
                    onclick: function () {
                        editor.insertContent('<div class="image-button"><div class="row"><div class="col-md-5 image-button-img"><img src="~/Content/Frontend/images/image-button1.jpg" alt="imagebutton" /></div><div class="col-md-7 image-button-content"><p>Viết text ở đây</p><div class="btn-image-button">Nhập link ở đây</div></div></div></div>');
                    }
                }, {
                    text: 'Button Image 2',
                    onclick: function () {
                        editor.insertContent('<div class="image-button2"><div class="image-button2-img"><img src="~/Content/Frontend/images/image-button2.jpg" alt="image-button2" /><div class="image-button2-background"><p>Text trên hình</p></div></div><div class="image-button2-content"><p>Nhập text ở đây</p><div class="btn-image-button">Nhập link ở đây</div></div></div>');
                    }
                }]
            });
            editor.addButton('BoxHighlight', {
                type: 'menubutton',
                text: 'Box nổi bật',
                icon: false,
                menu: [{
                    text: 'Box nổi bật 1',
                    onclick: function () {
                        editor.insertContent('<blockquote>Viết text ở đây</blockquote>');
                    }
                }, {
                    text: 'Box nổi bật 2',
                    onclick: function () {
                        editor.insertContent('<blockquote class="blockquote-2">Viết text ở đây</blockquote>');
                    }
                }, {
                    text: 'Box nổi bật 3',
                    onclick: function () {
                        editor.insertContent('<blockquote class="blockquote-3">Viết text ở đây</blockquote>');
                    }
                }, {
                    text: 'Box nổi bật 4',
                    onclick: function () {
                        editor.insertContent('<blockquote class="blockquote-4">Viết text ở đây</blockquote>');
                    }
                }]
            });
        },
        file_browser_callback: RoxyFileBrowser
    });

    function RoxyFileBrowser(field_name, url, type, win) {
        var roxyFileman = '/lib/fileman/index.html?integration=tinymce4';
        if (roxyFileman.indexOf("?") < 0) {
            roxyFileman += "?type=" + type;
        }
        else {
            roxyFileman += "&type=" + type;
        }
        roxyFileman += '&input=' + field_name + '&value=' + win.document.getElementById(field_name).value;
        if (tinyMCE.activeEditor.settings.language) {
            roxyFileman += '&langCode=' + tinyMCE.activeEditor.settings.language;
        }
        tinyMCE.activeEditor.windowManager.open({
            file: roxyFileman,
            title: 'Quản lý file',
            width: 850,
            height: 450,
            resizable: "yes",
            plugins: "media",
            inline: "yes",

            close_previous: "no"
        }, {
            window: win,
            input: field_name
        });
        return false;
    }
    $('.summernote').summernote();
    $(".input-validation").show().delay(5000).fadeOut();
    // ajax crud for laravel
    $.ajaxSetup({ cache: false });
    $("a[data-modal]").on("click", function (e) {
        $('.modal-dialog').load(this.href, function () {
            $('#modelUpdate').modal({
                keyboard: true,
                backdrop: 'static'
            }, 'show');
            bindForm(this);
        });
        return false;
    });

    $(".delete-link").click(function (e) {
        e.preventDefault();
        var $modal = $('#modelUpdate');
        var $modalDialog = $('.modal-dialog');
        var href = $(this).prop('href');
        var option = { backdrop: 'static' };
        $modalDialog.load(href, function () {
            $modal.modal(option, 'show');
        });
    });

    $("input[id*='Upload']").change(function () {
        previewImage(this);
    });

    //selected change post form
    $('.search-form select').on('change', function () {
        var $form = $(this).closest('form');
        $form.submit();
    });

    //check all checkboxes in tabel
    $("#ckkAll").click(function () {
        $('.chk-item').prop('checked', this.checked);
    });

    // update multiplate recoreds --> open dialog confirmation
    $('.delete-all').on('click', function (e) {
        var url = $(this).attr('data-url');
        var confirm = "<div class='modal-content'><div class='modal-body'><button type='button' class='close' data-dismiss='modal'><span>×</span></button><div class='bootbox-body'><input type='hidden' id='dataUrl' value='" + url + "'><p>Bạn chắc chắn muốn xóa các mục đã chọn?</p></div></div><div class='modal-footer'><button class='btn btn-flat btn-xs btn-default float-right rounded-0' data-dismiss='modal' type='button'><i class='fas fa-undo'></i> Hủy</button><button type='submit' class='btn btn-flat btn-xs btn-danger float-right rounded-0 confirm-delete'><i class='fas fa-check'></i> Xóa</button></div></div>";
        $('.modal-dialog').html(confirm);
        $('#modelUpdate').modal({
            keyboard: true,
            backdrop: 'static'
        }, 'show');
    });

    $('.updated-multiple').on('click', function (e) {
        var url = $(this).attr('data-url');
        var type = $(this).attr('data-type');
        var confirm = "<div class='modal-content'><div class='modal-body'><button type='button' class='close' data-dismiss='modal'><span>×</span></button><div class='bootbox-body'><input type='hidden' id='dataType' value='" + type + "'><input type='hidden' id='dataUrl' value='" + url + "'><p>Bạn có chắc chắc cập nhật các mục đã chọn?</p></div></div><div class='modal-footer'><button class='btn btn-flat btn-xs btn-default float-right rounded-0' data-dismiss='modal' type='button'><i class='fas fa-undo'></i> Hủy</button><button type='submit' class='btn btn-flat btn-xs btn-primary float-right rounded-0 confirm-change'><i class='fas fa-check'></i> Cập nhật</button></div></div>";
        $('.modal-dialog').html(confirm);
        $('#modelUpdate').modal({
            keyboard: true,
            backdrop: 'static'
        }, 'show');
    });

    // update all records
    //$("body").on("click", "button.confirm-change", function(e) {
    //    var allVals = [];
    //    $(".chk-item:checked").each(function() {
    //        allVals.push($(this).val());
    //    });

    //    if (allVals.length > 0) {
    //        var selectedValues = allVals.join(",");
    //        $.ajax({
    //            url: $("#dataUrl").val(),
    //            type: 'POST',
    //            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    //            data: { ids: selectedValues, type: $("#dataType").val() },
    //            success: function(data) {
    //                location.reload();
    //            },
    //            error: function(data) {
    //                iziToast.error({
    //                    title: 'Lỗi',
    //                    message: 'Có lỗi xảy ra. Vui lòng thử lại',
    //                    position: 'topRight'
    //                });
    //            }
    //        });
    //    }
    //});
    $("body").on("click", "button.confirm-change", function (e) {
        var dataPost = "";
        var ckhItem = new Array();
        $(".chk-item:checked").each(function () {
            ckhItem.push($(this).val());
        });
        if (ckhItem.length === 0) {
            iziToast.error({
                title: 'Lỗi',
                message: 'Chưa chọn mục cần cập nhật',
                position: 'topRight'
            });
        } else {
            dataPost = { ckhItem: ckhItem, type: $("#dataType").val() };
            $.ajax({
                type: "post",
                url: $("#dataUrl").val(),
                data: dataPost,
                dataType: "json",
                success: function (data) {
                    location.reload();
                },
                error: function (data) {
                    iziToast.error({
                        title: 'Lỗi',
                        message: 'Có lỗi xảy ra. Vui lòng thử lại',
                        position: 'topRight'
                    });
                }
            });
        }
    });

    // delete all records
    //$("body").on("click", "button.confirm-delete", function(e) {
    //    var allVals = [];
    //    $(".chk-item:checked").each(function() {
    //        allVals.push($(this).val());
    //    });

    //    if (allVals.length > 0) {
    //        var selectedValues = allVals.join(",");
    //        $.ajax({
    //            url: $("#dataUrl").val(),
    //            type: 'DELETE',
    //            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    //            data: 'ids=' + selectedValues,
    //            success: function(data) {
    //                location.reload();
    //            },
    //            error: function(data) {
    //                iziToast.error({
    //                    title: 'Lỗi',
    //                    message: 'Có lỗi xảy ra. Vui lòng thử lại',
    //                    position: 'topRight'
    //                });
    //            }
    //        });
    //    }
    //});
    //Delete all - new
    $("body").on("click", "button.confirm-delete", function (e) {
        var dataPost = "";
        var ckhItem = new Array();
        $(".chk-item:checked").each(function () {
            ckhItem.push($(this).val());
        });
        if (ckhItem.length === 0) {
            iziToast.error({
                title: 'Lỗi',
                message: 'Chưa chọn mục cần xóa',
                position: 'topRight'
            });
        } else {
            dataPost = { ckhItem: ckhItem };
            $.ajax({
                type: "post",
                url: $("#dataUrl").val(),
                data: dataPost,
                dataType: "json",
                success: function (data) {
                    location.reload();
                },
                error: function (data) {
                    iziToast.error({
                        title: 'Lỗi',
                        message: 'Có lỗi xảy ra. Vui lòng thử lại',
                        position: 'topRight'
                    });
                }
            });
        }
    });

    $('#modelUpdate').on('shown.bs.modal', function () {
        $(".needs-validation").submit(function () {
            var form = $(this);
            if (form[0].checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.addClass('was-validated');
        });
    });
    $('#translate_title').on('keyup change', function (e) {
        $('#translate_urlredirect').val(ChangeToSlug($('#translate_title').val()));
    })
});
var slug = function (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ẢÁĂÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİỊŇÑÓƠÖÒÔÕØŘŔŠŞŤÚƯŮÜÙÛỤÝŸŽảáăäâàãåčçćďéěëèêẽĕȇğíìîïıňñóơöòôõøðřŕšşťúưůüùûýÿžþÞĐđßÆa·/_,:;ỐỒỔỘỖỚỜỞỢỠẮẰẲẶẴẤẦẨẪẬẾỀỂỄỆốồổộỗớờởợỡắằẳặẵấầẩẫậếềểễệỲỶỸỴỳỷỹỵ";
    var to = "AAAAAAAACCCDEEEEEEEEGIIIIIINNOOOOOOORRSSTUUUUUUUYYZaaaaaaaacccdeeeeeeeegiiiiinnoooooooorrsstuuuuuuyyzbBDdBAa------OOOOOOOOOOAAAAAAAAAAEEEEEooooooooooaaaaaaaaaaeeeeeYYYYyyyy";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
};

function ChangeToSlug(title) {
    var slug;

    //Lấy text từ thẻ input title 
    //title = document.getElementById("title").value;

    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    //document.getElementById('slug').value = slug;
    return slug;
}

function previewImage(input) {
    var id = input.id.replace('Upload', 'Preview');
    var btn = document.getElementById('remove-img');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#' + id).css('background-image', 'url(' + e.target.result + ')');
            $('#' + id).hide();
            $('#' + id).fadeIn(650);
            btn.setAttribute("style", 'display:block !important');
        }

        reader.readAsDataURL(input.files[0]);
    }

}

function bindForm(dialog) {
    $('form', dialog).submit(function () {
        $.ajax({
            url: this.action,
            type: this.method,
            data: $(this).serialize(),
            success: function (result) {
                if (result.success) {
                    $('#modelUpdate').modal('hide');
                    location.reload();
                } else {
                    if (result.errors) {
                        setTimeout(function () {
                            $('#modelUpdate').modal('show');
                            iziToast.error({
                                title: 'Lỗi!',
                                message: result.message || 'Có lỗi xảy ra. Vui lòng thử lại',
                                position: 'topRight'
                            });
                        }, 500);
                    } else {
                        $('.modal-dialog').html(result);
                        bindForm();
                    }
                }
            }
        });
        return false;
    });
}

//function remove() {
//    //alert("ok");
//    var imgpath = "/media/no_image.png";
//    $('#avatarPreview').removeAttr('style');
//    $('#avatarPreview').css('background-image', 'url(' + imgpath + ')');
//}
function remove() {
    var el = document.getElementById('avatarPreview');
    var btn = document.getElementById('remove-img');
    el.setAttribute("style", 'background-image:url("/media/no_image.png")');
    btn.setAttribute("style", 'display:none !important');
}
function filtersearch(click) {
    const form = document.getElementById('Timkiem');
    form.submit();
}

