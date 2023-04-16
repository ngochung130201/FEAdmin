jQuery(window).load(function() {
	

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
       var roxyFileman = '/fileman/index.html?integration=tinymce4';
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

   

   
});


