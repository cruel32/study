let through = require('through2'),
    path = require('path'),
	gutil = require('gulp-util'),
	consolidate = require('consolidate'),
	_ = require('lodash'),
	Stream = require('stream');

const PLUGIN_NAME = 'gulp-sitemap-generator';

module.exports = function(options) {
    let config = Object.assign({
        'path':`./source/map.html`,
        'targetPath' : `./build/map.html`,
        'href' : `/`, //필수 옵션
    },options),
    outputFile,
    stream
    sitemaps=[];

    return through.obj(function(file, encoding, callback) {
        let filepath = file.path,
            cwd = file.cwd,
            relative = path.relative(cwd, filepath);

        console.log('file.base : ', file.base);
        console.log('filepath : ', filepath);
        console.log('cwd : ', cwd);
        console.log('relative : ', relative);
        
        sitemaps.push({
            filepath : filepath,
            cwd : cwd,
            relative : relative
        })

        // Happy streaming
        stream = Stream.PassThrough({
            objectMode: true
        });

        // Create output file
		if (!outputFile) {
			outputFile = new gutil.File({
				base: file.base,
				cwd: file.cwd,
				path: path.join(file.base, config.targetPath),
				contents: file.isBuffer() ? new Buffer(0) : new Stream.PassThrough()
			});
		}
        
        consolidate['lodash'](config.path, {
            'sitemaps':sitemaps
        }, function(err, html) {
            if (err) {
                throw new gutil.PluginError(PLUGIN_NAME, 'Error in template: ' + err.message);
            }
            content = Buffer(html);
            if (outputFile.isBuffer()) {
                outputFile.contents = content;
            } else {
                outputFile.contents.write(content);
                outputFile.contents.end();
            }
            stream.push(outputFile);
        });

       
        console.log("stream : ", stream);
        console.log("sitemaps : ", sitemaps);
        // console.log("this : ", this);
		callback();
    });
};