<template lang="html">
    <div class="settings-class">
        <div class="inner">
            
            <div class="sett-pageZoom">
                <span>Page zoom</span>
                <!-- <input type="range"> -->
                <input-range :min="0" :max="1" :step="0.1"></input-range>
            </div>

            <div class="sett-TitlebarStyle">
                <span>Title bar style</span>

                <select>
                    <option value="Disable titlebar">Disable titlebar</option>
                    <option value="How system">How system</option>
                    <option value="Custom">Custom</option>
                </select>
            </div>

            <div class="sett-color-backgroud">
                <span>Color Theme</span>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000" @input="bgColor_change($event)">
            </div>
            <div class="sett-opacity">
                <span>Glass effect</span>
                <input type="number" name="" id="inp-number-id" max="1" min="0" value="0.75" step="0.1" @input="glassEffect_change($event)">
            </div>
            
            <div class="btn-save-settings">
                <button @click="save_setting"> save </button>
            </div>

        </div>
    </div>
</template>
<script setup>
import inputRange from './UI/inputRange.vue';
import themeController from '@/controllers/theme_controller';


function glassEffect_change(e) {
    document.body.style.setProperty('--glass-effect', e.target.value);
    themeController.change_glassEffect.call(themeController, e.target.value);
}

function bgColor_change(e){
    const docWindowComp = document.querySelector('.settings-class');
    if(docWindowComp) {
        docWindowComp.style.backgroundColor = e.target.value;
        themeController.change_bgColor.call(themeController, e.target.value);
    }
}

function save_setting() {
    localStorage.setItem('user_theme', JSON.stringify(themeController));
}

</script>
<style lang="scss" scoped>
.settings-class {
    // --op: 0.3;
    // --bg: #a11b1b;
    position: absolute;
    left: 0;
    width: 50%;
    height: 30%;
    // background: rgba($color: var(--bgColor), $alpha: var(--glass-effect));
    // background: rgba($bgColor, $op);
    background-color: rgba($bg, $op);
    // background: rgba($color: $color, var(--glass-effect));
    // background: rgba(0, 0, 0, var(--op.));
    // background: rgba($color: #000000, $alpha: 1.0);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    box-shadow: 10px 15px 34px rgba(0, 0, 0, .5);
    z-index: 100;
    color: white;

    .inner {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        opacity: 1;
        // align-items: center;

        .sett-pageZoom {
            width: 100%;
            height: auto;
            padding: 10px;
            display: flex;
            align-items: center;

            
        }
        .sett-TitlebarStyle {
            width: 100%;
            height: auto;
            padding: 10px;
            display: flex;
            align-items: center;

            select {
                margin-left: auto;
            }
        }

        .sett-opacity {
            width: 100%;
            height: auto;
            padding: 10px;
            display: flex;
            align-items: center;

            input {
                margin-left: auto;
            }
        }

        .sett-color-backgroud{ 
            width: 100%;
            height: auto;
            padding: 10px;
            display: flex;
            align-items: center;

            input {
                margin-left: auto;
            }
        }

        .btn-save-settings {
            width: 100%;
            height: auto;
            padding: 10px;
            display: flex;
            align-items: center;
            margin-top: auto;

            button {
                margin-left: auto;

            }
        }
    }
}

</style>