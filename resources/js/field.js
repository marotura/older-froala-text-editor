import DetailField from "./components/DetailField";
import FormField from "./components/FormField";
import IndexField from "./components/IndexField";

// Import Froala Editor
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

Nova.booting((Vue, router, store) => {
    // Manually register Froala component for Vue 2
    // Based on vue-froala-wysiwyg implementation
    Vue.component("froala", {
        props: {
            tag: {
                type: String,
                default: "div",
            },
            value: String,
            config: Object,
            onManualControllerReady: Function,
        },
        data() {
            return {
                currentValue: "",
            };
        },
        watch: {
            value: function (newValue) {
                if (this.currentValue !== newValue) {
                    this.currentValue = newValue;
                    if (this.editor && this.editor.html) {
                        this.editor.html.set(newValue || "");
                    }
                }
            },
        },
        render: function (h) {
            if (this.tag === "textarea") {
                return h(this.tag, {
                    domProps: { value: this.currentValue },
                });
            }

            return h(this.tag, [this.currentValue]);
        },
        mounted: function () {
            const FroalaEditor = require("froala-editor");
            const initialValue = this.value || "";
            this.currentValue = initialValue;

            const originalInitialized = this.config?.events?.initialized;

            const config = Object.assign({}, this.config, {
                events: Object.assign({}, this.config?.events || {}, {
                    initialized: function () {
                        if (initialValue) {
                            this.html.set(initialValue);
                        }

                        if (typeof originalInitialized === "function") {
                            originalInitialized.call(this);
                        }
                    },
                    contentChanged: () => {
                        const newValue = this.editor.html.get();
                        this.currentValue = newValue;
                        this.$emit("input", newValue);
                    },
                }),
            });

            this.editor = new FroalaEditor(this.$el, config);

            if (this.onManualControllerReady) {
                this.onManualControllerReady(this.editor);
            }
        },
        beforeDestroy: function () {
            if (this.editor) {
                this.editor.destroy();
            }
        },
    });

    Vue.component("index-older-froala-text-editor", IndexField);
    Vue.component("detail-older-froala-text-editor", DetailField);
    Vue.component("form-older-froala-text-editor", FormField);
});
