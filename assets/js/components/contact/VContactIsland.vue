<script lang="ts">
    import imageUrl from '@img/contactIsland.jpg'
    import Vue from 'vue';
    import Component from "vue-class-component";

    @Component({
        props: {
            noIslandWasOpen: Boolean
        },
        data() {
            const svgProperties = {
                width: 742,
                height: 745
            };

            return {
                imageUrl,
                svgProperties,
                svgViewBox: `0 0 ${svgProperties.width} ${svgProperties.height}`,
                svgEnableBackground: `new 0 0 ${svgProperties.width} ${svgProperties.height}`
            }
        },
        watch: {
            noIslandWasOpen(noIslandWasOpen: boolean): void {
                if(noIslandWasOpen) {
                    this.active = false;
                }
            }
        }
    })
    export default class VContactIsland extends Vue {
        public hover: boolean = false;
        private active: boolean = false;
        private noIslandWasOpen: boolean;

        public onClickIsland(event): void {
            this.hover = false;
            if(!this.noIslandWasOpen) {
                return;
            }
            event.stopPropagation();

            this.active = !this.active;
            this.$emit(this.active ? 'islandOpen' : 'islandClose');
        }
    }
</script>

<template>
    <div class="island" :class="{'hover': hover, 'active': active}">
        <div class="island__section">
            <h2>{{ $t('contact.title') }}</h2>
            <p>{{ $t('contact.punchline') }}</p>
            <p>
                {{ $t('contact.contact') }}
                <a data-clickable href="mailto:contact@xavierchevalier.com">contact@xavierchevalier.com</a>
            </p>
        </div>

        <div class="island__info">
            <span class="island__info__text">{{ $t('contact.title') }}</span>
        </div>
        <svg class="island__svg" xmlns="http://www.w3.org/2000/svg"
             x="0px" y="0px" :viewBox="svgViewBox"
             :enable-background="svgEnableBackground"
             version="1.1">
            <defs>
                <pattern id="i3" patternUnits="userSpaceOnUse"
                         :width="svgProperties.width"
                         :height="svgProperties.height">
                    <image :xlink:href="imageUrl" x="0px" y="0px"></image>
                </pattern>
            </defs>
            <router-link fill-rule="evenodd" clip-rule="evenodd"
                         fill="url(#i3)" stroke="#7B6753" stroke-width="3"
                         stroke-miterlimit="10"
                         data-clickable
                         tag="path"
                         :to="{name: 'home'}"
                         @click.native="onClickIsland"
                         @mouseenter.native="hover = true"
                         @mouseleave.native="hover = false"
                         d="M1 410v-1c3.401-2.942 6.658-6.077 10.249-8.768 3.077-2.307 3.459-4.812 2.283-8.256-2.045-5.987-3.726-12.099-5.636-18.133-.941-2.975-.653-4.513 3.074-3.594 3.224.794 6.678.808 9.793 1.864 8.486 2.878 15.614 1.572 22.298-4.78 12.733-12.102 28.915-18.339 45.006-24.135 12.964-4.669 26.556-7.586 39.851-11.346 17.995-5.088 17.961-5.078 33.038 6.137 2.775 2.065 4.47 3.842 1.479 7.114-1.894 2.073-1.38 3.3 1.745 3.635 6.638.712 13.402.177 19.918 1.188 12.998 2.016 22.833-5.1 30.664-12.635 17.614-16.951 33.711-35.508 50-53.792 5.792-6.502 11.997-12.852 15.109-21.474 11.326-31.375 19.709-63.636 29.222-95.557.329-1.104.025-2.732 1.703-3.182 1.684 1.181 2.124 3.048 2.924 4.651 3.798 7.601 7.502 15.249 11.301 22.85.544 1.088.736 2.951 2.472 2.6 1.217-.246 1.308-1.819 1.595-2.923 1.671-6.426 2.997-12.955 8.495-17.592 6.651-5.61 9.929-13.111 11.831-21.444 1.184-5.189 2.982-10.237 4.432-15.369 1.993-7.054 1.963-7.069 8.988-6.467 2.651.227 5.32.363 7.943.777 2.764.437 4.589-.787 5.697-3.039.947-1.923 1.578-4.021 2.188-6.089 6.627-22.518 13.345-45.011 19.724-67.6 1.288-4.563 3.482-6.325 8.074-5.979 3.646.274 7.35-.216 10.99.085 4.252.351 6.726-1.469 8.797-5.04 5.099-8.789 10.482-17.414 15.84-26.05.883-1.423 1.293-3.508 4.19-3.702l11.412 94.875c.993-1.295 1.446-2.639 1.689-4.019a9667.208 9667.208 0 0 0 7.468-42.808c1.062-6.189 1.083-6.413 6.742-4.186 3.936 1.549 5.567.882 6.438-3.504C483.499 35.838 487.313 18.432 491 1h1c1.429 7.346 2.898 14.684 4.26 22.042.358 1.938 1.085 3.262 3.249 2.708 6.073-1.555 12.513-1.906 17.832-5.9 5.193-3.899 10.582-7.538 15.862-11.322 2.266-1.624 3.833-2.041 4.141 1.618 1.627 19.393 3.333 38.78 5.009 58.169 1.347 15.576 2.708 31.152 4.012 46.732.205 2.455 1.459 3.966 3.802 3.564 7.154-1.229 10.54 3.413 14.674 8.037 11.775 13.174 19.758 28.023 23.958 45.273 3.773 15.5 10.637 30.204 13.54 45.928 5.314 28.777 9.914 57.687 14.818 86.54 1.373 8.077 1.496 8.217 7.77 3.238 3.037-2.41 5.231-3.331 7.264.896 1.558 3.241 2.739 1.85 3.864-.442a663.174 663.174 0 0 1 7.655-15.155c.556-1.062.695-2.949 2.453-2.65 1.439.245 1.071 1.865 1.31 2.938 1.333 6.008 2.462 12.068 3.984 18.027 3.038 11.892 3.099 24.846 13.432 34.092 3.085 2.76 5.313 5.379 9.721 3.774 1.194-.435 2.471-.225 3.193.792 3.064 4.315 6.82 2.897 10.669 1.513 4.854-1.748 9.747-3.392 14.62-5.089 11.265-3.926 21.075-10.675 31.468-16.288 3.23-1.746 4.783-1.66 4.812 2.58.034 4.992.569 9.978.753 14.971.979 26.63 1.885 53.264 2.918 79.892.101 2.579-.859 4.496-2.354 6.344a17903.8 17903.8 0 0 1-12.892 15.914c-10.068 12.417-20.139 24.832-30.206 37.249-.725.894-1.321 2.224-2.604 2.069-1.84-.222-1.328-2.084-1.621-3.233-.943-3.703-1.862-7.43-2.444-11.201-.53-3.433-1.869-4.654-5.378-3.41-4.702 1.668-9.515 3.029-14.295 4.47-2.205.665-3.57 2.059-4.771 4.041-3.234 5.336-4.956 10.405.006 15.786 2.146 2.327 1.585 4.538-1.547 5.814-1.23.502-2.376 1.208-3.588 1.761-30.153 13.758-60.323 27.482-90.452 41.295-3.312 1.518-6.472 2.021-10.129 1.374-4.731-.839-9.587-.993-14.394-1.394-2.368-.197-4.066.461-4.98 3.056-10.243 29.046-20.75 57.999-30.761 87.124-2.491 7.246-6.278 13.062-12.21 17.719-2.207 1.731-4.845 3.291-5.85 6.036-2.492 6.809-6.687 12.65-10.318 18.804-6.266 10.612-11.799 21.832-19.333 31.474-7.97 10.2-15.12 20.6-20.045 32.546-.573 1.391-.888 3.182-3.526 3.986l-16.494-69.776-.89.049-16.785 65.617-1.479-.037-17.59-47.404c-2.794 5.077-4.373 10.087-5.941 15.102-.946 3.024-2.179 3.445-4.105.627-2.254-3.3-4.654-6.501-7.013-9.728-3.32-4.543-3.992-4.689-6.554.492-3.075 6.221-7.719 9.969-14.123 12.481-4.02 1.578-6.18 1.084-8.753-2.289-5.916-7.753-12.247-15.189-18.512-22.881-1.563 1.558-1.548 3.065-1.824 4.522-2.936 15.526-5.922 31.043-8.891 46.563-.245 1.278-.084 2.882-1.697 3.262-.436.103-1.371-.861-1.701-1.523-5.787-11.594-13.423-22.246-17.079-34.929-8.672-30.087-17.548-60.114-26.392-90.151-3.743-12.714-4.652-13.262-16.122-7.9-4.448 2.079-5.69.607-6.68-3.511-4.511-18.767-10.065-37.328-13.588-56.271-2.406-12.94-8.398-21.492-20.504-26.024a1.817 1.817 0 0 1-.435-.246c-2.723-2.031-4.668-1.666-6.318 1.527-2.291 4.435-5.138 8.587-7.354 13.055-1.8 3.629-3.898 4.127-7.56 2.609-28.921-11.984-57.902-23.827-86.896-35.638-2.625-1.069-4.395-2.68-5.771-5.144-4.307-7.709-8.864-15.277-13.191-22.975-1.504-2.675-3.319-4.842-5.918-6.566-8.882-5.897-17.62-12.012-26.474-17.951-1.633-1.096-3.469-2.094-5.354-2.577-12.82-3.287-24.777-8.567-36.271-15.057-2.361-1.332-3.25-2.88-3.32-5.502-.151-5.645.501-11.334-.772-16.928z"></router-link>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
    @import "ContactIsland";
</style>
