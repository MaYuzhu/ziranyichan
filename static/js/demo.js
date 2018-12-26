jQuery(function () {
    var $ = jQuery,
        //根容器
        $wrap = $('#uploader'),

        // 文件容器
        $queue = $('<ul class="filelist"></ul>').appendTo($wrap.find('.queueList')),

        // 状态栏，包括进度和控制按钮
        $statusBar = $wrap.find('.statusBar').show(),

        // 文件总体选择信息
        $info = $statusBar.find('.info'),

        // 上传按钮
        $upload = $wrap.find('.uploadBtn'),

        // 没选择文件之前的内容
        $placeHolder = $wrap.find('.placeholder'),

        // 总体进度条
        $progress = $statusBar.find('.progress').hide(),

        // 添加的文件数量
        fileCount = 0,

        // 添加的文件总大小
        fileSize = 0,

        // 可能有pedding, ready, uploading, confirm, done.
        state = 'pedding',

        // 所有文件的进度信息，key为file id
        percentages = {},

        // 所有文件的md5值，key为file id
        md5s = {},

        //API接口地址
        baseUrl = "http://192.168.20.18:8080",

        supportTransition = (function () {
            var s = document.createElement('p').style,
                r = 'transition' in s ||
                    'WebkitTransition' in s ||
                    'MozTransition' in s ||
                    'msTransition' in s ||
                    'OTransition' in s;
            s = null;
            return r;
        })(),

        // WebUploader实例
        uploader;

    if (!WebUploader.Uploader.support()) {
        alert('Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
        throw new Error('WebUploader does not support the browser you are using.');
    }

    WebUploader.Uploader.register({
        'before-send': 'beforeSend'
    }, {
        beforeSend: function (block) {
            var data = {};
            data.md5 = md5s[block.file.id];
            data.chunks = block.chunks;
            data.chunk = block.chunk;

            var deferred = WebUploader.Deferred();
            $.ajax({
                type: 'POST',
                url: baseUrl + '/file/check',
                data: data,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                traditional: true,
                crossDomain: true,
                success: function (json) {
                    if (json.body.has_file) {
                        deferred.reject();
                        console.log("跳过分片[" + block.chunk);
                    } else {
                        console.log("上传分片[" + block.chunk);
                        deferred.resolve()
                    }
                },
                error: function () {
                    console.log('error')
                }
            });
            return deferred.promise();
        }
    });

    // 实例化
    uploader = WebUploader.create({
        pick: {
            id: '#filePicker',
            label: '选择文件'
        },
        dnd: '#uploader .queueList',
        paste: document.body,
        resize: false,

        // swf文件路径
        swf: '/web-upload/webuploader/Uploader.swf',

        disableGlobalDnd: true,

        chunked: true,
        chunkSize: 3 * 1024 * 1024,
        chunkRetry: 3,
        server: baseUrl + '/file/upload',
        fileNumLimit: 300,
        fileSizeLimit: 4000 * 1024 * 1024,     // 4G
        fileSingleSizeLimit: 1000 * 1024 * 1024, // 1G
        duplicate: true
    });

    uploader.onUploadProgress = function (file, percentage) {
        var $li = $('#' + file.id), $percent = $li.find('.progress span');

        $percent.css('width', percentage * 100 + '%');
        percentages[file.id][1] = percentage;
        updateTotalProgress();
    };

    uploader.onFileQueued = function (file) {
        fileCount++;
        fileSize += file.size;

        if (fileCount === 1) {
            $placeHolder.addClass('element-invisible');
            $statusBar.show();
        }

        addFile(file);
        setState('ready');
        updateTotalProgress();
        md5Compute(file);
    };

    uploader.onFileDequeued = function (file) {
        fileCount--;
        fileSize -= file.size;

        if (!fileCount) {
            setState('pedding');
        }

        removeFile(file);
        updateTotalProgress();

    };

    uploader.on('all', function (type) {
        var stats;
        switch (type) {
            case 'uploadFinished':
                setState('confirm');
                break;

            case 'startUpload':
                setState('uploading');
                break;

            case 'stopUpload':
                setState('paused');
                break;
        }
    });

    uploader.onError = function (code) {
        alert('Eroor: ' + code);
    };

    $upload.on('click', function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }

        if (state === 'ready') {
            uploader.upload();
        } else if (state === 'paused') {
            uploader.upload();
        } else if (state === 'uploading') {
            uploader.stop();
        }
    });

    $info.on('click', '.retry', function () {
        uploader.retry();
    });

    $info.on('click', '.ignore', function () {
        alert('todo');
    });

    $upload.addClass('state-' + state);
    updateTotalProgress();

    uploader.on('uploadStart', function (file) {
        var data = {};
        data.md5 = md5s[file.id];

        $.ajax({
            type: 'POST',
            url: baseUrl + '/file/check',
            data: data,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            traditional: true,
            crossDomain: true,
            success: function (json) {
                if (json.body.has_file) {
                    uploader.skipFile(file);
                }
            },
            error: function () {
                console.log('error')
            }
        });
    });

    uploader.on('uploadBeforeSend', function (object, data, headers) {
        data.md5 = md5s[data.id];
    });

    uploader.on('uploadComplete', function (file) {
        var data = {};
        data.md5 = md5s[file.id];

        $.ajax({
            type: 'POST',
            url: baseUrl + '/file/check',
            data: data,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            traditional: true,
            crossDomain: true,
            success: function (json) {
                console.log(json);
            },
            error: function () {
                console.log('error')
            }
        });
    });

    function addFile(file) {
        var $li = $('<li id="' + file.id + '" class="item">' +
            '<p class="title">' + file.name + '</p>' +
            '<p class="progress"><span></span></p>' +
            '<p class="md5Progress">验证文件<span></span></p>' +
            '</li>'),

            $btns = $('<div class="file-panel">' + '<span class="cancel">删除</span>').appendTo($li),
            $prgress = $li.find('p.progress span'),
            $info = $('<p class="error"></p>'),

            showError = function (code) {
                switch (code) {
                    case 'exceed_size':
                        text = '文件大小超出';
                        break;

                    case 'interrupt':
                        text = '上传暂停';
                        break;

                    default:
                        text = '上传失败，请重试';
                        break;
                }

                $info.text(text).appendTo($li);
            };

        if (file.getStatus() === 'invalid') {
            showError(file.statusText);
        } else {
            percentages[file.id] = [file.size, 0];
            file.rotation = 0;
        }

        file.on('statuschange', function (cur, prev) {
            if (prev === 'progress') {
                $prgress.hide().width(0);
            } else if (prev === 'queued') {
                $li.off('mouseenter mouseleave');
                $btns.remove();
            }

            // 成功
            if (cur === 'error' || cur === 'invalid') {
                console.log(file.statusText);
                showError(file.statusText);
                percentages[file.id][1] = 1;
            } else if (cur === 'interrupt') {
                showError('interrupt');
            } else if (cur === 'queued') {
                percentages[file.id][1] = 0;
            } else if (cur === 'progress') {
                $info.remove();
                $prgress.css('display', 'block');
            } else if (cur === 'complete') {
                $li.append('<span class="success"></span>');
            }

            $li.removeClass('state-' + prev).addClass('state-' + cur);
        });

        $btns.on('click', 'span', function () {
            var index = $(this).index(), deg;

            switch (index) {
                case 0:
                    uploader.removeFile(file);
                    return;
            }
        });
        $li.appendTo($queue);
    }

    // 负责view的销毁
    function removeFile(file) {
        var $li = $('#' + file.id);

        delete percentages[file.id];
        updateTotalProgress();
        $li.off().find('.file-panel').off().end().remove();
    }

    function updateTotalProgress() {
        var loaded = 0,
            total = 0,
            spans = $progress.children(),
            percent;

        $.each(percentages, function (k, v) {
            total += v[0];
            loaded += v[0] * v[1];
        });

        percent = total ? loaded / total : 0;

        spans.eq(0).text(Math.round(percent * 100) + '%');
        spans.eq(1).css('width', Math.round(percent * 100) + '%');
        updateStatus();
    }

    function updateStatus() {
        var text = '', stats;

        if (state === 'ready') {
            text = '选中' + fileCount + '文件，共' + WebUploader.formatSize(fileSize) + '。';
        } else if (state === 'confirm') {
            stats = uploader.getStats();
            if (stats.uploadFailNum) {
                text = '已成功上传' + stats.successNum + '文件，' + stats.uploadFailNum + '文件上传失败，<a class="retry" href="#">重新上传</a>失败文件或<a class="ignore" href="#">忽略</a>'
            }

        } else {
            stats = uploader.getStats();
            text = '共' + fileCount + '个（' + WebUploader.formatSize(fileSize) + '），已上传' + stats.successNum + '个';

            if (stats.uploadFailNum) {
                text += '，失败' + stats.uploadFailNum + '个';
            }
        }

        $info.html(text);
    }

    function setState(val) {
        var file, stats;

        if (val === state) {
            return;
        }

        $upload.removeClass('state-' + state);
        $upload.addClass('state-' + val);
        state = val;

        switch (state) {
            case 'pedding':
                $placeHolder.removeClass('element-invisible');
                $queue.parent().removeClass('filled');
                $queue.hide();
                $statusBar.addClass('element-invisible');
                uploader.refresh();
                break;

            case 'ready':
                $placeHolder.addClass('element-invisible');
                $('#filePicker').removeClass('element-invisible');
                $queue.parent().addClass('filled');
                $queue.show();
                $statusBar.removeClass('element-invisible');
                uploader.refresh();
                break;

            case 'uploading':
                $('#filePicker').addClass('element-invisible');
                $progress.show();
                $upload.text('暂停上传');
                break;

            case 'paused':
                $progress.show();
                $upload.text('继续上传');
                break;

            case 'confirm':
                $progress.hide();
                $upload.text('开始上传').addClass('disabled');

                stats = uploader.getStats();
                if (stats.successNum && !stats.uploadFailNum) {
                    setState('finish');
                    return;
                }
                break;
            case 'finish':
                stats = uploader.getStats();
                if (stats.successNum) {
                    alert('上传成功');
                } else {
                    // 没有成功的文件，重设
                    state = 'done';
                    location.reload();
                }
                break;
        }

        updateStatus();
    }

    function md5Compute(file) {
        $upload.addClass('disabled');
        md5s[file.id] = '';

        uploader.md5File(file)

        // 及时显示进度
            .progress(function (percentage) {
                var p = (percentage * 100).toFixed(0);
                $('#' + file.id + ' .md5Progress span').text(p + "%");
            })

            // 完成
            .then(function (val) {
                md5s[file.id] = val;
                $upload.removeClass('disabled');
            });
    }
});
