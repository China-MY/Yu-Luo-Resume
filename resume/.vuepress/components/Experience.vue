<script setup lang="ts">
import StudyIcon from "./icons/StudyIcon.vue";
import WorkIcon from "./icons/WorkIcon.vue";
export interface ExperienceItem {
  place?: string;
  title?: string;
  time: string;
  type?: "study" | "work";
  logo?: string;
  description?: string;
  content?: string;
}

defineProps<{ item: ExperienceItem }>();
</script>

<template>
  <div class="vp-experience">
    <div class="vp-experience-inner">
      <!-- Glitch border effect -->
      <div class="cyber-border-glow"></div>

      <div class="vp-experience-header">
        <img
          v-if="item.logo"
          class="vp-experience-logo"
          :src="item.logo"
          alt=""
        />
        <div class="vp-experience-badge">
          <div
            :class="[
              'vp-experience-badge-icon',
              item.type === 'study' ? 'badge-study' : 'badge-work',
            ]"
          >
            <StudyIcon v-if="item.type === 'study'" />
            <WorkIcon v-else-if="item.type === 'work'" />
          </div>
          <div
            :class="[
              'vp-experience-badge-body',
              item.type === 'study' ? 'badge-study' : 'badge-work',
            ]"
          >
            {{ item.time }}
          </div>
        </div>
      </div>
      <h5 v-if="item.place" class="vp-experience-item" v-html="item.place" />
      <h5 v-if="item.title" class="vp-experience-item" v-html="item.title" />
      <p v-if="item.description" class="vp-experience-description">
        {{ item.description }}
      </p>
      <div v-else class="vp-experience-description" v-html="item.content" />
    </div>
  </div>
</template>

<style lang="scss">
.vp-experience {
  position: relative;
  padding: 2px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(0, 240, 255, 0.3),
    rgba(255, 0, 255, 0.3)
  );
  transition: all 0.4s ease;

  &:hover {
    background: linear-gradient(
      135deg,
      rgba(0, 240, 255, 0.6),
      rgba(255, 0, 255, 0.6)
    );
    box-shadow: 0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(255, 0, 255, 0.2);
    transform: translateY(-4px);
  }
}

.vp-experience-inner {
  position: relative;
  padding: 24px;
  border-radius: 11px;
  background: rgba(12, 12, 30, 0.92);
  backdrop-filter: blur(8px);
  overflow: hidden;
}

/* Subtle scan line inside card */
.vp-experience-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--cyber-cyan, #00f0ff),
    var(--cyber-magenta, #ff00ff),
    transparent
  );
  opacity: 0.6;
  animation: scan-line 3s linear infinite;
}

.vp-experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.vp-experience-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0.25rem;
  border: 1px solid rgba(0, 240, 255, 0.3);
  background: rgba(0, 240, 255, 0.08);
}

.vp-experience-badge {
  display: flex;
  align-items: center;
}

.vp-experience-badge-icon {
  width: 22px;
  height: 22px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  font-weight: 600;
  z-index: 1;

  .icon {
    width: 22px;
    height: 22px;
  }

  &.badge-study {
    background: var(--cyber-cyan, #00f0ff);
    box-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
  }

  &.badge-work {
    background: var(--cyber-magenta, #ff00ff);
    box-shadow: 0 0 8px rgba(255, 0, 255, 0.5);
  }
}

.vp-experience-badge-body {
  flex: 1;
  padding: 6px 12px 6px 16px;
  font-size: 12px;
  margin: 0 0 0 -10px;
  border-radius: 0 8px 8px 0;
  font-family: 'Fira Code', monospace;
  letter-spacing: 0.05em;

  &.badge-study {
    background: rgba(0, 240, 255, 0.2);
    color: var(--cyber-cyan, #00f0ff);
    border: 1px solid rgba(0, 240, 255, 0.3);
    border-left: none;
  }

  &.badge-work {
    background: rgba(255, 0, 255, 0.2);
    color: var(--cyber-magenta, #ff00ff);
    border: 1px solid rgba(255, 0, 255, 0.3);
    border-left: none;
  }
}

.vp-experience-item {
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 15px;
  color: var(--cyber-text, #e0e0ff) !important;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.03em;
}

.vp-experience-description {
  font-style: italic;
  font-size: 15px;
  color: var(--cyber-text-dim, #8888bb);
  line-height: 1.7;
}
</style>
