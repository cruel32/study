var gutil = require('gulp-util');
var assign = require('object-assign');
var through = require('through2');
var path = require('path');
var browserify = require('browserify');
var Readable = require('stream').Readable || require('readable-stream');

const PLUGIN_NAME = require('./package.json').name;

// plugin level function (dealing with files)
module.exports = function gulpAngular2(options, data) {
  var opts = {
    type: 'es6',
    browserifyConfig: {
      extensions: ['.js', '.es6', '.json', '.jsx', '.ts'],
      debug: true
    },
    babelConfig: {
      extensions: ['.js', '.es6', '.json', '.jsx'],
      presets: ['es2017', 'angular2']
    },
    typescriptConfig: {
      target: "es5",
      module: "commonjs",
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      sourceMap: true,
      noEmitHelpers: true
    },
    stringifyConfig: {
      appliesTo: {
        includeExtensions: ['.html', '.tpl']
      }
    }
  };

  data = data || {};
  opts = assign(opts, options);

  function arrayStream(items) {
    var index = 0;
    var readable = new Readable({
      objectMode: true
    });
    readable._read = function () {
      if (index < items.length) {
        readable.push(items[index]);
        index++;
      } else {
        readable.push(null);
      }
    };
    return readable;
  }

  function gulpAngular2PluginError(originalError) {
    var message, opts;

    if ('string' === typeof originalError) {
      message = originalError;
    } else {
      // Use annotated message of ParseError if available.
      // https://github.com/substack/node-syntax-error
      message = originalError.annotated || originalError.message;
      // Copy original properties that PluginError uses.
      opts = {
        name: originalError.name,
        stack: originalError.stack,
        fileName: originalError.fileName,
        lineNumber: originalError.lineNumber
      };
    }

    return new gutil.PluginError(PLUGIN_NAME, message, opts);
  }

  function transform(file, enc, cb) {
    var self = this,
        bundler;

    if (file.isStream()) {
      self.emit('error', gulpAngular2PluginError('Streaming not supported'));
      return cb();
    }
    if (!file.contents.length) {
      file.path = gutil.replaceExtension(file.path, '.js');
      return cb(gulpAngular2PluginError('File is empty'), file);
    }

    if (file.isNull()) {
      data.entries = file.path;
    }

    if (file.isBuffer()) {
      data.entries = arrayStream([file.contents]);
    }

    data.basedir = path.dirname(file.path);

    if (path.extname(file.path) === '.ts') {
      opts.type = "ts";
    }

    if ((opts.type === "typescript") || (opts.type === "ts")) {
      if (!file.contents.length) {
        file.path = gutil.replaceExtension(file.path, '.js');
        return file;
      }

      bundler = browserify(data, opts.browserifyConfig)
        .transform('tsify', opts.typescriptConfig)
        .transform('stringify', opts.stringifyConfig);
    } else {
      if (!file.contents.length) {
        return file;
      }

      bundler = browserify(data, opts.browserifyConfig)
        .transform('babelify', opts.babelConfig)
        .transform('stringify', opts.stringifyConfig);
    }

    bundler.on('error', function (err) {
      self.emit('error', gulpAngular2PluginError(err));
      cb();
    });

    self.emit('prebundle', bundler);

    bundler.bundle(function (err, src) {
      if (err) {
        self.emit('error', gulpAngular2PluginError(err));
      } else {
        self.emit('postbundle', src);

        file.contents = new Buffer(src);
        self.push(file);
      }

      cb();
    });
  }

  return through.obj(transform);
};
