<template>
  <div class="system-skin">
    <t-dropdown trigger="click">
      <t-button theme="default" shape="square" variant="text">
        <component :is="currentIcon" />
      </t-button>
      <t-dropdown-menu>
        <t-dropdown-item v-for="(icon, name) in themeIcons" :key="name" :value="name" @click="setTheme(name)">
          <div class="skin-item">
            <component :is="icon" size="large" />
            <span class="skin-title">{{ $t(`pages.skin.${name}`) }}</span>
          </div>
        </t-dropdown-item>
      </t-dropdown-menu>
    </t-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ContrastIcon, ModeDarkIcon, ModeLightIcon } from 'tdesign-icons-vue-next';
import { computed } from 'vue';

import { useSettingStore } from '@/store';
import { putSetting } from '@/api/setting';

const theme = computed(() => {
  return storeSetting.getStateMode;
});

const storeSetting = useSettingStore();

const themeIcons = {
  light: ModeLightIcon,
  dark: ModeDarkIcon,
  auto: ContrastIcon
};

const currentIcon = computed(() => themeIcons[theme.value]);

const setTheme = async (theme: 'light' | 'dark' | 'auto') => {
  await putSetting({ key: "theme", doc: theme });
  storeSetting.updateConfig({ mode: theme });
};
</script>

<style lang="less" scoped>
.skin-item {
  display: flex;
  flex-direction: row;
  align-items: center;

  .skin-title {
    margin-left: 5px;
  }
}
</style>
