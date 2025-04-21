<template>
    <div class="p-6 space-y-6">
      <!-- 学习小组 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">👥 学习小组</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(group, index) in studyGroups" :key="index">
            <el-card shadow="hover" class="mb-4">
              <h3 class="text-lg font-semibold">{{ group.name }}</h3>
              <p class="text-sm text-gray-600">{{ group.description }}</p>
              <el-button class="mt-2" type="primary" size="small" @click="joinGroup(group.id)">加入小组</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
  
      <!-- 问答论坛 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">💬 问答论坛</h2>
        <el-row :gutter="20">
          <el-col :span="12" v-for="(question, index) in forumQuestions" :key="index">
            <el-card shadow="hover" class="mb-4">
              <h3 class="text-lg font-semibold">{{ question.title }}</h3>
              <p class="text-sm text-gray-600">{{ question.desc }}</p>
              <el-button class="mt-2" type="primary" size="small" @click="viewQuestion(question.id)">查看问题</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
  
      <!-- 开源项目入口 -->
      <el-card>
        <h2 class="text-xl font-bold mb-4">🌐 开源项目入口</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(project, index) in openSourceProjects" :key="index">
            <el-card shadow="hover" class="mb-4">
              <h3 class="text-lg font-semibold">{{ project.name }}</h3>
              <p class="text-sm text-gray-600">{{ project.description }}</p>
              <el-button class="mt-2" type="primary" size="small" @click="joinProject(project.link)">加入项目</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const studyGroups = ref([
    { id: 1, name: '前端学习小组', description: '一起学习前端技术，做项目练手' },
    { id: 2, name: '数据分析小组', description: '学习数据分析、机器学习的基础与进阶' },
    { id: 3, name: '算法与竞赛小组', description: '参加算法竞赛，提升解决问题的能力' },
  ])
  
  const forumQuestions = ref([
    { id: 1, title: '如何理解闭包？', desc: '闭包是 JavaScript 中一个非常常见的概念，很多人都无法理解闭包的内部机制' },
    { id: 2, title: 'Vue 3 中的响应式系统如何工作？', desc: 'Vue 3 采用 Proxy 来实现响应式系统，但很多人对其底层机制并不清楚' },
    { id: 3, title: '如何优化 SQL 查询？', desc: 'SQL 查询性能优化是后台开发中非常常见的问题，如何在查询复杂数据时提升效率？' },
  ])
  
  const openSourceProjects = ref([
    { name: 'VuePress', description: 'VuePress 是一个 Vue 驱动的静态网站生成器', link: 'https://github.com/vuejs/vuepress' },
    { name: 'Element Plus', description: 'Element Plus 是一套基于 Vue 3 的桌面端 UI 库', link: 'https://github.com/element-plus/element-plus' },
    { name: 'GitHub Projects', description: 'GitHub 上的项目集，适合开发者贡献开源代码', link: 'https://github.com' },
  ])
  
  const joinGroup = (groupId) => {
    // 跳转到对应的小组页面，或者加入小组的逻辑
    console.log(`加入小组: ${groupId}`)
  }
  
  const viewQuestion = (questionId) => {
    // 跳转到对应的问题详情页，或者回答问题的逻辑
    console.log(`查看问题: ${questionId}`)
  }
  
  const joinProject = (projectLink) => {
    // 跳转到对应的开源项目页面
    window.open(projectLink, '_blank')
  }
  </script>
  
  <style scoped>
  .el-card {
    border-radius: 8px;
  }
  
  .el-button {
    width: 100%;
  }
  
  .el-row {
    margin-bottom: 20px;
  }
  
  .el-col {
    display: flex;
    justify-content: center;
  }
  
  .el-card h3 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .el-card p {
    font-size: 14px;
    color: #555;
  }
  
  .el-card .el-button {
    margin-top: 10px;
  }
  </style>
  