function ajaxUploads(uploadPhoto, spUpload, showPic) {
    var fileNum = "more";
    new AjaxUpload(uploadPhoto, {
        action: 'image.do?action=fileUpload',
        name: 'file',
        responseType: 'json',
        onSubmit: function (file, ext) {
            if (ext && /^(jpg|png|jpeg|gif|bmp)$/i.test(ext)) {
                $('#' + spUpload).html('正在上传中... ');
            } else {
                alert('只允许上传图片格式的文件，如jpg,png,jpeg,gif,bmp等格式！');
                return false;
            }
        },
        onComplete: function (file, response) {
            $('#' + spUpload).empty();
            alert(response);
            var st = response;
            if (st.Code == 0) {
                $('#' + spUpload).html("文件上传成功！");
                $("#" + showPic).attr("src", st.Message);
                $("#img").val(st.Message);
            }
            else {
                alert(st.Message);
            }
        }
    });
}

function uploadslogo(uploadPhoto, spUpload, showPic) {
    var fileNum = "more";
    new AjaxUpload(uploadPhoto, {
        action: '/pt/uplogo',
        name: 'imgFile',
        responseType: 'json',
        onSubmit: function (file, ext) {
            if (ext && /^(jpg|png|jpeg|gif|bmp)$/i.test(ext)) {
                $('#' + spUpload).html('正在上传中... ');
            } else {
                alert('只允许上传图片格式的文件，如jpg,png,jpeg,gif,bmp等格式！');
                return false;
            }
        },
        onComplete: function (file, response) {
            $('#' + spUpload).empty();
            var st;
            st = response;
            if (st.Code == 0) {
                $('#' + spUpload).html("文件上传成功！");
                $("#" + showPic).attr("src", st.Message);
                $("#img").val(st.Message);
            }
            else {
                alert(st.Message);
            }
        }
    });
}

function skinupload(uploadPhoto, spUpload, showPic, url, type) {
    var fileNum = "more";
    new AjaxUpload(uploadPhoto, {
        action: '/skin/UpSkinImg?type=' + type,
        name: 'imgFile',
        responseType: 'json',
        onSubmit: function (file, ext) {
            if (ext && /^(jpg|png|jpeg|gif|bmp|zip)$/i.test(ext)) {
                $('#' + spUpload).html('正在上传中... ');
            } else {
                alert('只允许上传图片格式的文件，如jpg,png,jpeg,gif,bmp等格式！');
                return false;
            }
        },
        onComplete: function (file, response) {
            $('#' + spUpload).empty();
            var st;
            st = response;
            if (st.Code == 0) {
                $('#' + spUpload).html("文件上传成功！");
                if(type=='img'){
                    $("#" + showPic).attr("src", st.Message);
                }
                $("#" + url).val(st.Message);
            }
            else {
                alert(st.Message);
            }
        }
    });
}