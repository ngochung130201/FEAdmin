$(window).on('load', function () {
    
    var init = {
        getFileImage: getFileImageFn,
        
    }

    init.getFileImage();

    function getFileImageFn() {
        if ($('#upload-banner').length) {
            if ($('#fileNameBanner').length) {
                var preview;
                var title = "";
                if ($('#fileNameBanner').val() != "") {
                    preview = $('#hdPathBanner').val() + $('#fileNameBanner').val() 
                    title = $('#fileNameBanner').val()
                }
                else {
                    preview = "/Media/no_image.png";
                }
                $("#upload-banner").fileinput({
                    showCaption: false,
                    showUpload: false,
                    showClose: false,
                    initialPreview: ['<img src="' + preview + '" class="kv-preview-data file-preview-image" alt="' + title + '" title="' + title + '">']
                });
            }
            else {
                $("#upload-banner").fileinput({
                    showCaption: false,
                    showUpload: false,
                    showClose: false,
                    browseOnZoneClick: true
                });
            }
        }
        if ($('#upload-banner-2').length) {
            if ($('#fileNameBanner-2').length) {
                var preview;
                var title = "";
                if ($('#fileNameBanner-2').val() != "") {
                    preview = $('#hdPathBanner-2').val() + $('#fileNameBanner-2').val()
                    title = $('#fileNameBanner-2').val()
                }
                else {
                    preview = "/Media/no_image.png";
                }
                $("#upload-banner-2").fileinput({
                    showCaption: false,
                    showUpload: false,
                    showClose: false,
                    initialPreview: ['<img src="' + preview + '" class="kv-preview-data file-preview-image" alt="' + title + '" title="' + title + '">']
                });
            }
            else {
                $("#upload-banner-2").fileinput({
                    showCaption: false,
                    showUpload: false,
                    showClose: false,
                    browseOnZoneClick: true
                });
            }
        }
    }
});