<script>
import FroalaEditor from 'froala-editor';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/zh_cn';
export default {
  name: 'froala',
  props: ['tag', 'value', 'options', 'onManualControllerReady'],
  watch: {
    value() {
      this.model = this.value;
      this.updateValue();
    }
  },
  render(createElement) {
    return createElement(this.currentTag, [this.$slots.default]);
  },
  created() {
    this.currentTag = this.tag || this.currentTag;
    this.model = this.value;
  },
  mounted() {
    if (this.SPECIAL_TAGS.indexOf(this.currentTag) != -1) this.hasSpecialTag = true;
    if (this.onManualControllerReady) this.generateManualController();
    else this.createEditor();
  },
  beforeDestroy() {
    this.destroyEditor();
  },
  data() {
    return {
      initEvents: [],
      currentTag: 'div',
      _editor: null,
      currentConfig: null,
      defaultConfig: {
        immediateVueModelUpdate: false,
        vueIgnoreAttrs: null
      },
      editorInitialized: false,
      SPECIAL_TAGS: ['img', 'button', 'input', 'a'],
      INNER_HTML_ATTR: 'innerHTML',
      hasSpecialTag: false,
      model: null,
      oldModel: null,
      config: Object.assign(
        {
          language: 'zh_cn',
          placeholderText: '在这里编辑您的内容！',
          dragInline: false,
          heightMin: 280,
          toolbarBottom: true,
          toolbarButtons: {
            moreText: {
              buttons: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                'fontFamily',
                'fontSize',
                'textColor',
                'backgroundColor',
                'inlineClass',
                'inlineStyle',
                'clearFormatting'
              ]
            },
            moreParagraph: {
              buttons: [
                'alignLeft',
                'alignCenter',
                'formatOLSimple',
                'alignRight',
                'alignJustify',
                'formatOL',
                'formatUL',
                'paragraphFormat',
                'paragraphStyle',
                'lineHeight',
                'outdent',
                'indent',
                'quote'
              ]
            },
            moreRich: {
              buttons: [
                // "insertVideo",  视频     //  "insertFile", 文件
                'insertLink',
                'insertImage',
                'insertTable',
                'emoticons',
                'fontAwesome',
                'specialCharacters',
                'embedly',
                'insertHR'
              ]
            },
            moreMisc: {
              buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
              align: 'right',
              buttonsVisible: 2
            }
          }
        },
        this.options || {}
      )
    };
  },
  methods: {
    updateValue() {
      if (JSON.stringify(this.oldModel) == JSON.stringify(this.model)) return;
      this.setContent();
    },
    createEditor() {
      if (this.editorInitialized) return;
      this.currentConfig = this.config || this.defaultConfig;
      this.setContent(true);
      this.registerEvents();
      this.initListeners();
      this._editor = new FroalaEditor(this.$el, this.currentConfig);
      this.editorInitialized = true;
    },
    setContent(firstTime) {
      if (!this.editorInitialized && !firstTime) return;
      if (this.model || this.model == '') {
        this.oldModel = this.model;
        if (this.hasSpecialTag) this.setSpecialTagContent();
        else this.setNormalTagContent(firstTime);
      }
    },
    setNormalTagContent(firstTime) {
      var self = this;
      function htmlSet() {
        self._editor.html.set(self.model || '');
        self._editor.undo.saveStep();
        self._editor.undo.reset();
      }
      if (firstTime)
        this.registerEvent('initialized', function() {
          htmlSet();
        });
      else htmlSet();
    },
    setSpecialTagContent() {
      var tags = this.model;
      if (tags) {
        for (var attr in tags) {
          if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) this.$el.setAttribute(attr, tags[attr]);
        }
        if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) this.$el.innerHTML = tags[this.INNER_HTML_ATTR];
      }
    },
    destroyEditor() {
      if (this._editor) {
        this._editor.destroy();
        this.editorInitialized = false;
        this._editor = null;
      }
    },
    getEditor() {
      return this._editor;
    },
    generateManualController() {
      var controls = {
        initialize: this.createEditor,
        destroy: this.destroyEditor,
        getEditor: this.getEditor
      };
      this.onManualControllerReady(controls);
    },
    updateModel() {
      var modelContent = '';
      if (this.hasSpecialTag) {
        var attributeNodes = this.$el[0].attributes;
        var attrs = {};
        for (var i = 0; i < attributeNodes.length; i++) {
          var attrName = attributeNodes[i].name;
          if (this.currentConfig.vueIgnoreAttrs && this.currentConfig.vueIgnoreAttrs.indexOf(attrName) != -1) continue;

          attrs[attrName] = attributeNodes[i].value;
        }
        if (this.$el[0].innerHTML) attrs[this.INNER_HTML_ATTR] = this.$el[0].innerHTML;
        modelContent = attrs;
      } else {
        var returnedHtml = this._editor.html.get();
        if (typeof returnedHtml === 'string') modelContent = returnedHtml;
      }
      this.oldModel = modelContent;
      this.$emit('input', modelContent);
    },
    initListeners() {
      var self = this;
      this.registerEvent('initialized', function() {
        if (self._editor.events) {
          self._editor.events.on('contentChanged', function() {
            self.updateModel();
          });
          if (self.currentConfig.immediateVueModelUpdate)
            self._editor.events.on('keyup', function() {
              self.updateModel();
            });
        }
      });
    },
    registerEvent(eventName, callback) {
      if (!eventName || !callback) return;
      if (eventName == 'initialized') this.initEvents.push(callback);
      else {
        if (!this.currentConfig.events) this.currentConfig.events = {};
        this.currentConfig.events[eventName] = callback;
      }
    },
    registerEvents() {
      this.registerInitialized();
      var events = this.currentConfig.events;
      if (!events) return;
      for (var event in events) {
        if (events.hasOwnProperty(event) && event != 'initialized') this.registerEvent(event, events[event]);
      }
    },
    registerInitialized() {
      if (!this.currentConfig.events) this.currentConfig.events = {};
      if (this.currentConfig.events.initialized) this.registerEvent('initialized', this.currentConfig.events.initialized);
      this.currentConfig.events.initialized = () => {
        for (var i = 0; i < this.initEvents.length; i++) {
          this.initEvents[i].call(this._editor);
        }
      };
    }
  }
};
</script>

<style>
.fr-box.fr-ltr.fr-basic {
  margin: 24px;
  position: relative;
  background-color: #fff;
}
.second-toolbar > #logo {
  position: relative;
  z-index: -100;
  left: -1000px;
}
.second-toolbar > .fr-counter {
  position: absolute;
  left: 0;
}
.show-placeholder > div {
  left: -100000px;
}
</style>