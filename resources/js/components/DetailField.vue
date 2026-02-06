<template>
    <div class="older-froala-detail fr-view" v-html="displayValue"></div>
</template>

<script>
export default {
    props: ["index", "resource", "resourceName", "resourceId", "field"],
    computed: {
        displayValue() {
            const value = this.field?.value || "";
            return value.replace(/<p><br><\/p>/gi, "<br>");
        },
    },
};
</script>

<style scoped>
.older-froala-detail {
    padding-top: 10px;
}

.older-froala-detail br {
    display: block;
    margin-bottom: 0.5em;
    content: "";
}

.older-froala-detail blockquote,
.older-froala-detail dd,
.older-froala-detail dl,
.older-froala-detail figure,
.older-froala-detail h1,
.older-froala-detail h2,
.older-froala-detail h3,
.older-froala-detail h4,
.older-froala-detail h5,
.older-froala-detail h6,
.older-froala-detail p,
.older-froala-detail pre {
    margin: revert;
}

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
