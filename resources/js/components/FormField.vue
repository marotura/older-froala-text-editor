<template>
    <div>
        <froala
            id="edit"
            :tag="'textarea'"
            :config="config"
            v-model="value"
        ></froala>
    </div>
</template>

<script>
import FroalaEditor from "froala-editor";
import { FormField, HandlesValidationErrors } from "laravel-nova";
//Import Froala Editor
import "froala-editor/js/plugins.pkgd.min.js";
//Import third party plugins
import "froala-editor/js/third_party/embedly.min";
import "froala-editor/js/third_party/font_awesome.min";
import "froala-editor/js/third_party/image_tui.min";
// Import Froala Editor css files.
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ["resourceName", "resourceId", "field"],

    watch: {
        "field.value": {
            immediate: true,
            handler(newValue) {
                const normalized = newValue || "";
                if (this.value !== normalized) {
                    this.value = normalized;
                }
            },
        },
    },

    computed: {
        config() {
            // Define default configuration
            const defaultConfig = {
                attribution: false,
                key: this.field?.apiKey,
                language: this.field?.language || "en",
                charCounterCount: false,
                wordCounterCount: true,
                spellcheck: false,
                heightMin: 200,
                paragraphFormatSelection: true,
                paragraphDefaultSelection: "Normal",
                multiLine: true,
                enter: FroalaEditor.ENTER_P,
                cleanReduntantStyleOnGet: true,
                clearFormatOnEnterNewLine: false,
                listAdvancedTypes: false,
                linkConvertEmailAddress: true,
                linkEditButtons: ["linkOpen", "linkEdit", "linkRemove"],
                toolbarSticky: false,
                wordPasteModal: false,
                wordPasteKeepFormatting: false,
                importFromWordEnableImportOnDrop: true,
                // pastePlain: true,

                htmlAllowedTags: [
                    "p",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "strong",
                    "em",
                    "u",
                    "a",
                    "ul",
                    "ol",
                    "li",
                    "br",
                    "hr",
                    "table",
                    "thead",
                    "tbody",
                    "tr",
                    "th",
                    "td",
                    "img",
                    "blockquote",
                    "code",
                    "cite",
                    "link",
                    "textarea",
                ],

                htmlAllowedAttrs: [
                    "accesskey",
                    "align",
                    "alt",
                    "autofocus",
                    "aria-.*",
                    "cellpadding",
                    "cellspacing",
                    "cite",
                    "class",
                    "cols",
                    "colspan",
                    "content",
                    "contextmenu",
                    "coords",
                    "data",
                    "data-.*",
                    "datetime",
                    "default",
                    "dir",
                    "dirname",
                    "disabled",
                    "download",
                    "for",
                    "headers",
                    "height",
                    "hidden",
                    "high",
                    "href",
                    "hreflang",
                    "icon",
                    "id",
                    "itemprop",
                    "label",
                    "lang",
                    "language",
                    "list",
                    "low",
                    "max",
                    "maxlength",
                    "media",
                    "min",
                    "name",
                    "open",
                    "optimum",
                    "ping",
                    "placeholder",
                    "pubdate",
                    "readonly",
                    "rel",
                    "reversed",
                    "rows",
                    "rowspan",
                    "shape",
                    "size",
                    "sizes",
                    "span",
                    "src",
                    "srcdoc",
                    "srclang",
                    "srcset",
                    "summary",
                    "spellcheck",
                    "style",
                    "tabindex",
                    "target",
                    "title",
                    "type",
                    "value",
                    "valign",
                    "width",
                    "wrap",
                ],

                pasteDeniedTags: [
                    "script",
                    "style",
                    "meta",
                    "link",
                    "iframe",
                    "object",
                    "embed",
                    "input",
                    "button",
                    "select",
                    "option",
                    "textarea",
                    "applet",
                    "frame",
                    "frameset",
                    "noscript",
                    //"a",
                    "svg",
                    "math",
                    "form",
                    "base",
                    "body",
                    "head",
                    "video",
                    "audio",
                    "track",
                    "source",
                ],

                pasteDeniedAttrs: [
                    "accesskey",
                    "accept",
                    "accept-charset",
                    "action",
                    "allowfullscreen",
                    "allowtransparency",
                    "autofocus",
                    "async",
                    "autocomplete",
                    "autoplay",
                    "autosave",
                    "background",
                    "bgcolor",
                    "border",
                    "charset",
                    "checked",
                    "cite",
                    "color",
                    "class",
                    "contenteditable",
                    "controls",
                    "defer",
                    "draggable",
                    "dropzone",
                    "enctype",
                    "form",
                    "formaction",
                    "frameborder",
                    "http-equiv",
                    "icon",
                    "ismap",
                    "keytype",
                    "kind",
                    "loop",
                    "low",
                    "max",
                    "maxlength",
                    "media",
                    "min",
                    "method",
                    "mozallowfullscreen",
                    "multiple",
                    "muted",
                    "novalidate",
                    "pattern",
                    "playsinline",
                    "preload",
                    "poster",
                    "radiogroup",
                    "required",
                    "sandbox",
                    "scope",
                    "scoped",
                    "seamless",
                    "scrolling",
                    "selected",
                    "sizes",
                    "start",
                    "step",
                    "style",
                    "summary",
                    "spellcheck",
                    "tabindex",
                    "type",
                    "data",
                    "data-.*",
                    "data-pasted",
                    "translate",
                    "usemap",
                    "value",
                    "valign",
                    "webkitallowfullscreen",
                    "width",
                    "wrap",
                    "onload",
                    "onerror",
                    "onclick",
                    "onmouseover",
                ],

                wordDeniedAttrs: [
                    "accesskey",
                    "accept",
                    "accept-charset",
                    "action",
                    "allowfullscreen",
                    "allowtransparency",
                    "autofocus",
                    "async",
                    "autocomplete",
                    "autoplay",
                    "autosave",
                    "background",
                    "bgcolor",
                    "border",
                    "charset",
                    "checked",
                    "cite",
                    "color",
                    "class",
                    "contenteditable",
                    "controls",
                    "defer",
                    "draggable",
                    "dropzone",
                    "enctype",
                    "form",
                    "formaction",
                    "frameborder",
                    "http-equiv",
                    "icon",
                    "ismap",
                    "keytype",
                    "kind",
                    "loop",
                    "low",
                    "max",
                    "maxlength",
                    "media",
                    "min",
                    "method",
                    "mozallowfullscreen",
                    "multiple",
                    "muted",
                    "novalidate",
                    "pattern",
                    "playsinline",
                    "preload",
                    "poster",
                    "radiogroup",
                    "required",
                    "sandbox",
                    "scope",
                    "scoped",
                    "seamless",
                    "scrolling",
                    "selected",
                    "sizes",
                    "start",
                    "step",
                    "style",
                    "summary",
                    "spellcheck",
                    "tabindex",
                    "type",
                    "data",
                    "data-.*",
                    "data-pasted",
                    "translate",
                    "usemap",
                    "value",
                    "valign",
                    "webkitallowfullscreen",
                    "width",
                    "wrap",
                    "onmouseover",
                ],

                pasteAllowedStyleProps: [
                    "font-size",
                    "font-style", //italic, etc.
                    "font-weight", //bold, etc.
                    "text-decoration", //underline, line-through, etc.
                    "text-transform", //Capitalize, uppercase, lowercase
                    "text-indent", //indentation
                    "text-align", //left, center, right, justify
                ],

                htmlDoNotWrapTags: ["br"],

                quickInsertButtons: ["image", "table", "ul", "ol", "hr"],

                toolbarButtons: {
                    moreText: {
                        buttons: ["bold", "italic", "underline"],
                        buttonsVisible: 3,
                    },
                    moreParagraph: {
                        buttons: ["paragraphFormat", "formatUL", "formatOL"],
                        buttonsVisible: 3,
                    },
                    moreRich: {
                        buttons: [
                            "insertLink",
                            "insertTable",
                            "specialCharacters",
                        ],
                        buttonsVisible: 3,
                    },
                    moreMisc: {
                        buttons: [
                            "undo",
                            "redo",
                            "fullscreen",
                            "html",
                            "help",
                        ],
                        buttonsVisible: 5,
                    },
                },

                toolbarButtonsXS: {
                    moreText: {
                        buttons: ["bold", "italic", "underline"],
                        buttonsVisible: 2,
                    },
                    moreParagraph: {
                        buttons: ["paragraphFormat", "formatOL", "formatUL"],
                        buttonsVisible: 2,
                    },
                    moreRich: {
                        buttons: ["insertLink", "insertTable"],
                        buttonsVisible: 1,
                    },
                },

                events: {
                    initialized: function () {},
                },
            };

            // Merge field options with defaults, giving priority to field options
            return Object.assign({}, defaultConfig, this.field?.options || {});
        },
    },

    mounted() {},

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || "";
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            const value = this.value || "";
            formData.append(this.fieldAttribute, value);
        },
    },
};
</script>
<style>
.fr-box {
    margin: 8px;
}

.fr-view h1 {
    display: block !important;
    color: #333;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: bold;
    line-height: 1.2;
}

.fr-dropdown-list h1 {
    display: block !important;
}

.fr-view h2 {
    display: block !important;
    color: #333;
    font-size: clamp(1.75rem, 4.5vw, 2.5rem);
    font-weight: bold;
    line-height: 1.3;
}

.fr-view h3 {
    display: block !important;
    color: #333;
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: bold;
    line-height: 1.4;
}

.fr-view h4 {
    display: block !important;
    color: #333;
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
    font-weight: bold;
    line-height: 1.5;
}

.fr-view h5 {
    display: block !important;
    color: #333;
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: bold;
    line-height: 1.6;
}

.dark .fr-view h1,
.dark .fr-view h2,
.dark .fr-view h3,
.dark .fr-view h4,
.dark .fr-view h5 {
    color: #e2e8f0; /* slate-200, for dark mode */
}

.dark .fr-view a {
    color: #60a5fa;
    cursor: pointer;
    text-decoration: underline;
}

.dark .fr-view a:visited {
    color: #c084fc;
}

.dark .fr-view a:hover {
    color: #f87171;
}

.fr-view a {
    color: #0000ee;
    cursor: pointer;
    text-decoration: underline;
}

.fr-view a:visited {
    color: #551a8b;
}

.fr-view a:hover {
    color: #ff0000;
}

.fr-view ul,
.fr-view ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

.fr-view ul {
    list-style: disc;
}

.fr-view ol {
    list-style: decimal;
}

.fr-popup .fr-layer-content {
    max-height: 65vh;
    overflow-y: auto;
}

.fr-view p {
    margin: 0 0 1em 0;
    line-height: 1.6;
}
</style>
