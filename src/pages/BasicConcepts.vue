<script setup>
import FirstCompo from '@/components/Basic/FirstCompo.vue';
import EventHandle from '@/components/EventHandlers/EventHandle.vue';
import ReactiveData from '@/components/Reactivity/ReactiveData.vue';
import ComputedProperties from '@/components/ComputedProperty/ComputedProperties.vue';
import ListRendering from '@/components/ListRendering/ListRendering.vue';
import PropsParent from '@/components/Props/PropsParent.vue';
import ComponentEvent from '@/components/ComponentEvent/ChildEmitEvent.vue';
import TrySlot from '@/components/Slots/TrySlot.vue';
import ParentProvide from '@/components/ProvideInject/ParentProvide.vue';
import UseLifecycleHooks from '@/components/LifecycleHooks/UseLifecycleHooks.vue';
import WatcherCompo from '@/components/Watchers/WatcherCompo.vue';
import TemplateRef from '@/components/TemplateRef/TemplateRef.vue';
import ComposableParent from '@/components/Composable/ComposableParent.vue';
import CustomDir from '@/components/CustomDirectives/CustomDir.vue';
import ToggleFriends from '@/components/AsyncCompo/ToggleFriends.vue';
import Tabs from '@/components/DynamicCompo/MultiTabs.vue';
import DataFetching from '@/components/UseAPIs/DataFetching.vue';

function formHandler(username, email, pwd) {
  alert('userInfo: ' + username + email + pwd);
}
</script>
<template>
  <FirstCompo />
  <EventHandle />
  <ReactiveData />
  <ComputedProperties />
  <ListRendering />
  <PropsParent />
  <ComponentEvent @userInfo="formHandler" />
  <TrySlot />
  <ParentProvide />
  <UseLifecycleHooks />
  <WatcherCompo />
  <TemplateRef />
  <ToggleFriends />
  <ComposableParent />
  <CustomDir />
  <Tabs />
  <DataFetching />
</template>
<style scoped>
.card {
  margin: 30px auto;
}
</style>
