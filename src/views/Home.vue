<template>
    <div class="p-6">
      <h1 class="text-2xl mb-4">角色切换</h1>
      <el-radio-group v-model="store.role" size="large">
        <el-radio-button label="student">学生</el-radio-button>
        <el-radio-button label="teacher">教师</el-radio-button>
        <el-radio-button label="company">企业</el-radio-button>
        <el-radio-button label="community">社区</el-radio-button>
        <el-radio-button label="profile">个人中心</el-radio-button> <!-- 新增 -->
      </el-radio-group>
  
      <div class="mt-6">
        <h2 class="text-xl mb-2">快速入口</h2>
  
        <!-- 学生视图 -->
        <el-button v-if="store.role==='student'" @click="$router.push('/student-plan')">学习计划</el-button>
        <el-button v-if="store.role==='student'" @click="$router.push('/code-ide')">代码练习</el-button>
        <el-button v-if="store.role==='student'" @click="$router.push('/interview')">模拟面试</el-button>
  
        <!-- 教师视图 -->
        <el-button v-if="store.role==='teacher'" @click="$router.push('/teaching')">课程管理</el-button>
  
        <!-- 企业视图 -->
        <el-button v-if="store.role==='company'" @click="$router.push('/risk')">风险控制</el-button>
  
        <!-- 社区 -->
        <el-button v-if="store.role==='community'" @click="$router.push('/community')">进入社区</el-button>
  
        <!-- 个人中心 -->
        <el-button v-if="store.role==='profile'" @click="$router.push('/profile')">查看个人信息</el-button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '../store'
  const store = useUserStore()
  </script>
  