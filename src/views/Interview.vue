<template>
    <div class="p-6 space-y-6">
      <el-card>
        <h2 class="text-xl font-bold mb-4">🎤 AI 模拟面试</h2>
        <div class="space-y-4">
          <el-input
            type="textarea"
            v-model="question"
            rows="2"
            placeholder="请输入你想练习的面试题，或点击下面按钮随机生成"
          />
          <el-button type="primary" @click="generateQuestion">随机生成面试题</el-button>
          <div v-if="question" class="mt-4">
            <h3 class="text-lg font-semibold">题目：</h3>
            <p class="text-gray-800">{{ question }}</p>
            <el-input
              type="textarea"
              v-model="answer"
              rows="6"
              placeholder="请输入你的回答..."
              class="mt-2"
            />
            <el-button class="mt-2" type="success" @click="evaluateAnswer">提交评估</el-button>
          </div>
        </div>
      </el-card>
  
      <el-card v-if="evaluation" class="border-green-500">
        <h2 class="text-xl font-bold mb-4">📊 评估报告</h2>
        <p><strong>评分：</strong>{{ evaluation.score }} 分</p>
        <p><strong>建议：</strong>{{ evaluation.advice }}</p>
        <p><strong>推荐题目：</strong></p>
        <ul class="list-disc pl-6">
          <li v-for="(tip, index) in evaluation.recommended" :key="index">{{ tip }}</li>
        </ul>
      </el-card>
  
      <el-card>
        <h2 class="text-xl font-bold mb-4">📄 简历优化工具</h2>
        <p class="mb-2">请输入你的简历关键内容，我们将分析匹配 JD 标签</p>
        <el-input
          type="textarea"
          v-model="resume"
          rows="5"
          placeholder="请输入简历中的技术描述..."
        />
        <el-button class="mt-2" type="primary" @click="optimizeResume">优化简历</el-button>
        <div v-if="resumeTips.length" class="mt-4">
          <h3 class="text-lg font-semibold">优化建议：</h3>
          <ul class="list-disc pl-6">
            <li v-for="(tip, index) in resumeTips" :key="index">{{ tip }}</li>
          </ul>
        </div>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const question = ref('')
  const answer = ref('')
  const evaluation = ref(null)
  const resume = ref('')
  const resumeTips = ref([])
  
  const mockQuestions = [
    '请解释什么是 Redis 缓存穿透？',
    '如何避免数据库中的幻读现象？',
    '说说你对微服务架构中服务注册与发现的理解？'
  ]
  
  const generateQuestion = () => {
    const idx = Math.floor(Math.random() * mockQuestions.length)
    question.value = mockQuestions[idx]
    answer.value = ''
    evaluation.value = null
  }
  
  const evaluateAnswer = () => {
    evaluation.value = {
      score: Math.floor(Math.random() * 40) + 60,
      advice: '建议在回答中加入更多实战项目案例，增强可信度。',
      recommended: ['多线程基础题', '分布式系统面试题', '数据库事务题']
    }
  }
  
  const optimizeResume = () => {
    resumeTips.value = [
      '添加“掌握分布式事务机制”等关键词以匹配企业 JD。',
      '建议使用 STAR 法则描述项目经历。',
      '突出技术栈中与 JD 高匹配的技能，例如 Redis、Spring Boot。'
    ]
  }
  </script>
  
  <style scoped>
  textarea {
    width: 100%;
  }
  </style>