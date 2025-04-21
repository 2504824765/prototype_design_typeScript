<template>
    <div class="p-6 space-y-6">
      <el-card>
        <h2 class="text-xl font-bold mb-4">📅 今日学习计划</h2>
        <el-progress :percentage="taskProgress" status="success" />
        <ul class="list-disc pl-6 mt-4">
          <li>完成 200 行 CRUD 代码</li>
          <li>阅读线程安全相关文档</li>
          <li>完成 3 道高频考点题</li>
        </ul>
      </el-card>
  
      <el-card>
        <h2 class="text-xl font-bold mb-4">🧠 技能图谱</h2>
        <v-chart class="h-80" :option="radarOption" autoresize />
      </el-card>
  
      <el-card>
        <h2 class="text-xl font-bold mb-4">🤖 AI 推荐练习</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in aiRecommendations" :key="index">
            <el-card shadow="hover" class="mb-4">
              <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              <p class="text-sm text-gray-600">{{ item.desc }}</p>
              <el-button class="mt-2" type="primary" size="small" @click="toPractice(item.link)">去练习</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import VChart from 'vue-echarts'
  import 'echarts/lib/chart/radar'
  
  const taskProgress = ref(70)
  
  const radarOption = {
    tooltip: {},
    radar: {
      indicator: [
        { name: '并发编程', max: 100 },
        { name: '数据结构', max: 100 },
        { name: '网络协议', max: 100 },
        { name: '数据库', max: 100 },
        { name: '算法分析', max: 100 }
      ]
    },
    series: [{
      name: '技能掌握情况',
      type: 'radar',
      data: [
        {
          value: [60, 85, 70, 50, 90],
          name: '当前水平'
        }
      ]
    }]
  }
  
  const aiRecommendations = ref([
    {
      title: '线程安全精讲',
      desc: '深入理解 synchronized 与 Lock 使用场景',
      link: '/practice/thread-safety'
    },
    {
      title: '高频 CRUD 题库',
      desc: '面向对象 + 数据库综合练习题',
      link: '/practice/crud'
    },
    {
      title: '企业 JD 匹配练习',
      desc: '基于你技能图谱的个性化模拟项目',
      link: '/practice/jd-matching'
    }
  ])
  
  const toPractice = (link) => {
    window.location.href = link
  }
  </script>
  
  <style scoped>
  .v-chart {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  </style>