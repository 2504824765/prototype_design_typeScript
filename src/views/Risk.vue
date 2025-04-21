<template>
    <div class="p-6 space-y-6">
      <!-- 技术雷达 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">🛡️ 技术雷达</h2>
        <el-table :data="techRadar" style="width: 100%">
          <el-table-column prop="tech" label="技术名称" />
          <el-table-column prop="risk" label="风险等级" />
          <el-table-column prop="alternative" label="替代方案" />
        </el-table>
      </el-card>
  
      <!-- 行业趋势分析 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">📈 行业趋势分析</h2>
        <v-chart class="h-80" :option="trendOption" autoresize />
      </el-card>
  
      <!-- 故障模拟沙盒 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">🧪 故障模拟沙盒</h2>
        <el-form :model="faultForm" label-width="100px">
          <el-form-item label="故障类型">
            <el-select v-model="faultForm.type" placeholder="请选择故障类型">
              <el-option label="线程死锁" value="deadlock" />
              <el-option label="数据库连接泄漏" value="db_leak" />
              <el-option label="内存溢出" value="oom" />
            </el-select>
          </el-form-item>
          <el-form-item label="注入级别">
            <el-slider v-model="faultForm.level" :max="10" />
          </el-form-item>
          <el-button type="primary" @click="injectFault">注入故障</el-button>
        </el-form>
      </el-card>
  
      <!-- 合规性检查 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">✅ 合规性检查</h2>
        <el-tag
          v-for="(item, index) in complianceChecks"
          :key="index"
          :type="item.pass ? 'success' : 'danger'"
          class="mr-2 mb-2"
        >
          {{ item.desc }}
        </el-tag>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import VChart from 'vue-echarts'
  import * as echarts from 'echarts/core'
  import { LineChart } from 'echarts/charts'
  import { TooltipComponent, LegendComponent } from 'echarts/components'
  import { CanvasRenderer } from 'echarts/renderers'
  import { ElMessage } from 'element-plus'  // 导入 ElMessage
  
  // 注册所需的组件和图表类型
  echarts.use([LineChart, TooltipComponent, LegendComponent, CanvasRenderer])
  
  const techRadar = ref([
    { tech: 'Spring Cloud Alibaba', risk: '中', alternative: 'Spring Boot + Nacos 独立部署' },
    { tech: 'Fastjson 1.x', risk: '高', alternative: 'Jackson 或 Fastjson 2.x' },
    { tech: '自研 RPC 框架', risk: '高', alternative: 'gRPC 或 Dubbo3' },
  ])
  
  const trendOption = {
    tooltip: {},
    legend: { data: ['采纳率'] },
    xAxis: { type: 'category', data: ['2019', '2020', '2021', '2022', '2023'] },
    yAxis: {},
    series: [
      {
        name: '采纳率',
        type: 'line',
        data: [20, 35, 50, 65, 80],
      },
    ],
  }
  
  const faultForm = ref({
    type: '',
    level: 5,
  })
  
  const injectFault = () => {
    ElMessage.success(`已注入 ${faultForm.value.type} 级别 ${faultForm.value.level} 的故障`)  // 这里调用 ElMessage
  }
  
  const complianceChecks = ref([
    { desc: 'POJO 字段初始化规范 ✅', pass: true },
    { desc: '日志记录完整性 ❌', pass: false },
    { desc: 'SQL 注入风险检测 ✅', pass: true },
    { desc: '敏感信息脱敏处理 ❌', pass: false },
  ])
  </script>
  
  
  <style scoped>
  .v-chart {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  </style>