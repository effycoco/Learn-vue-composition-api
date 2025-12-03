<script setup>
import WikiClone from './projects/WikiClone.vue';
import GithubUsersSearch from './projects/GithubUsersSearch.vue';
import DadJokes from './projects/DadJokes.vue';
import ProgressSteps from './projects/ProgressSteps.vue';
import PasswordGenerator from './projects/PasswordGenerator.vue';
import FormValidation from './projects/FormValidation.vue';
import AccordionComponent from './projects/AccordionComponent.vue';
import Calculator from './projects/SimpleCalculator.vue';
import RandomQuoteGenerator from './projects/RandomQuoteGenerator.vue';
import TodoList from './projects/TodoList.vue';
import GetDataWithAxios from './components/UseAPIs/GetDataWithAxios.vue';
import GetDataWithFetch from './components/UseAPIs/GetDataWithFetch.vue';
import Tabs from './components/DynamicCompo/MultiTabs.vue';
import CustomDir from './components/CustomDirectives/CustomDir.vue';
import MouseComponent from './components/Composable/MouseComponent.vue';
import MouseTracker from './components/Composable/MouseTracker.vue';
import CounterCompo from './components/Composable/CounterCompo.vue';
import AnotherCounter from './components/Composable/AnotherCounter.vue';
import ToggleFriends from './components/AsyncCompo/ToggleFriends.vue';
import TemplateRef from './components/TemplateRef/TemplateRef.vue';
import WatcherCompo from './components/Watchers/WatcherCompo.vue';
import LifecycleHooks from './components/LifecycleHooks/LifecycleHooks.vue';
import ParentProvide from './components/ProvideInject/ParentProvide.vue';
import SlotComponent from './components/Slots/SlotComponent.vue';
import ComponentEvent from './components/ComponentEvent/ChildEmitEvent.vue';
import PropsParent from './components/Props/PropsParent.vue';
import EventHandle from './components/EventHandlers/EventHandle.vue';
import ListRendering from './components/ListRendering/ListRendering.vue';
import ComputedProperties from './components/ComputedProperty/ComputedProperties.vue';
import ReactiveData from './components/Reactivity/ReactiveData.vue';
import FirstCompo from './components/Basic/FirstCompo.vue';

import { ref } from 'vue';

const isMounted = ref(true);
let count = ref(0);
function formHandler(username, email, pwd) {
  console.log('userInfo: ', username, email, pwd);
}
</script>

<template>
  <WikiClone />
  <div class="container">
    <GithubUsersSearch />
    <DadJokes />
    <ProgressSteps />
    <PasswordGenerator />
    <FormValidation />
    <AccordionComponent />
    <Calculator />
    <RandomQuoteGenerator />
    <TodoList />
  </div>
  <GetDataWithAxios />
  <GetDataWithFetch />
  <Tabs />
  <CustomDir />
  <MouseComponent />
  <MouseTracker />
  <CounterCompo />
  <AnotherCounter />
  <ToggleFriends />
  <TemplateRef />
  <WatcherCompo />
  <LifecycleHooks v-if="isMounted" />
  <button @click="isMounted = !isMounted">{{ isMounted ? 'Unmount' : 'Mount' }}</button>
  <ParentProvide />
  <h1>Slot | Fallback for slot | Named Slots | Default Slot</h1>
  <SlotComponent>
    <template #default>
      <!-- <p>Default Slot. Content from Parent to child</p> -->
    </template>
    <template v-slot:one>
      <p>
        <i>One Slot:The content Parent Passed to slot child</i>
      </p>
    </template>
    <template #two>
      <h3>For The Name Two Slot</h3>
    </template>
  </SlotComponent>
  <h1>Event Emits / Component Event</h1>
  <p>组件实例提供了一个自定义事件系统。父组件可以通过</p>
  <h2>Count: {{ count }}</h2>
  <ComponentEvent @userInfo="formHandler" />
  <h1>Props</h1>
  <PropsParent />
  <h1>Event Handlers</h1>
  <EventHandle />
  <h1>Reactivity & Reactive</h1>
  <ReactiveData />
  <h1>Computed Properties</h1>
  <ComputedProperties />
  <h1>List Rendering</h1>
  <ListRendering />
  <h1>Basic Start</h1>
  <FirstCompo />
  <h1>Todo List</h1>
</template>

<style>
body {
  font-family: sans-serif;
}
</style>
