<template>
    <p
        v-if="hasSlotData"
        :class="$style['c-errorMessage']"
        :data-test-id="dataTestId">
        <danger-icon :class="$style['c-errorMessage-icon']" />
        <span
            data-test-id="content"
            role="alert"
            :class="$style['c-errorMessage-content']">
            <slot />
        </span>
    </p>
</template>

<script>
import { DangerIcon } from '@justeat/f-vue-icons';

export default {
    name: 'ErrorMessage',
    components: {
        DangerIcon
    },
    props: {
        dataTestId: {
            type: String,
            default: 'error-message-component'
        }
    },
    computed: {
        hasSlotData () {
            return !!this.$slots.default;
        }
    }
};
</script>

<style lang="scss" module>
.c-errorMessage {
    position: relative;
    color: $color-content-error;
    @include font-size();
    margin-top: spacing();
}

.c-errorMessage-content {
    display: block;
    overflow: hidden;
    margin-left: spacing(x3);
}

.c-errorMessage-icon {
    position: absolute;
    width: 16px;
    margin-top: 2px;
}
</style>
