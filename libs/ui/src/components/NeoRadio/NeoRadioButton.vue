<template>
  <div class="control neo-radio-button" :class="{ 'is-expanded': expanded }">
    <label
      ref="label"
      class="button"
      :class="labelClass"
      :disabled="disabled"
      @click="focus">
      <slot />
      <input
        ref="input"
        v-model="computedValue"
        type="radio"
        :disabled="disabled"
        :required="required"
        :name="name"
        :value="nativeValue"
        @click.stop
        @focus="isFocused = true"
        @blur="isFocused = false" />
    </label>
  </div>
</template>

<script lang="ts">
import CheckRadioMixin from '@oruga-ui/oruga/src/utils/CheckRadioMixin'

export default {
  name: 'NeoRadioButton',
  mixins: [CheckRadioMixin],
  props: {
    type: {
      type: String,
      default: 'is-primary',
    },
    expanded: Boolean,
  },
  data() {
    return {
      isFocused: false,
    }
  },
  computed: {
    isSelected() {
      return this.newValue === this.nativeValue
    },
    labelClass() {
      return [
        this.isSelected ? this.type : null,
        this.size,
        {
          'is-selected': this.isSelected,
          'is-disabled': this.disabled,
          'is-focused': this.isFocused,
        },
      ]
    },
  },
}
</script>

<style lang="scss">
@import '../../scss/_theme.scss';

.neo-radio-button {
  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;

    &.button {
      @include ktheme() {
        border-color: theme('k-primary');
        border-right: none;
        border-bottom: none;
        border-left: none;
      }
    }

    &.is-selected {
      @include ktheme() {
        background-color: theme('k-primary');
      }
    }
  }
}
</style>