<template>
  <div class="card" :class="[step ? 'step-mode' : 'info-mode', 'variant-' + variant]">
    <div v-if="step" class="step-badge">{{ step }}</div>
    <div class="card-content">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  variant?: 'blue' | 'green' | 'amber' | 'purple' | 'slate'
  step?: number | string
}

withDefaults(defineProps<Props>(), {
  variant: 'blue'
})
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem 1.4rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 18px rgba(0,0,0,0.08);
}

/* ---- Info mode: accent left border ---- */
.info-mode {
  border-left: 4px solid;
  display: block;
}

/* ---- Step mode: numbered circle + flex ---- */
.step-mode {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-badge {
  flex-shrink: 0;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.4rem 0;
  color: #1e293b;
}

.card-body {
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.7;
}

/* ---- Color variants ---- */
.variant-blue.info-mode  { border-left-color: #3b82f6; background: linear-gradient(135deg, #eff6ff 0%, #fff 100%); }
.variant-blue.info-mode .card-title  { color: #2563eb; }

.variant-green.info-mode { border-left-color: #10b981; background: linear-gradient(135deg, #ecfdf5 0%, #fff 100%); }
.variant-green.info-mode .card-title { color: #059669; }

.variant-amber.info-mode { border-left-color: #f59e0b; background: linear-gradient(135deg, #fffbeb 0%, #fff 100%); }
.variant-amber.info-mode .card-title { color: #d97706; }

.variant-purple.info-mode { border-left-color: #8b5cf6; background: linear-gradient(135deg, #f5f3ff 0%, #fff 100%); }
.variant-purple.info-mode .card-title { color: #7c3aed; }

.variant-slate.info-mode { border-left-color: #64748b; background: linear-gradient(135deg, #f8fafc 0%, #fff 100%); }
.variant-slate.info-mode .card-title { color: #475569; }
</style>
