<template>
    <div class="p-6 space-y-6">
      <el-card>
        <h2 class="text-xl font-bold mb-4">🧪 在线代码练习</h2>
        <monaco-editor
          v-model="code"
          language="java"
          height="400"
          theme="vs-dark"
          class="rounded border border-gray-300"
        />
        <div class="flex justify-between items-center mt-4">
          <el-button type="primary" @click="runCode">运行代码</el-button>
          <el-tag type="danger" v-if="error">{{ error }}</el-tag>
        </div>
      </el-card>
  
      <el-card>
        <h2 class="text-xl font-bold mb-4">📚 理论与案例资源</h2>
        <ul class="list-disc pl-6 space-y-1 text-gray-700">
          <li>布隆过滤器原理</li>
          <li>电商库存超卖解决方案</li>
          <li>Java线程池配置实战</li>
        </ul>
      </el-card>
  
      <el-card>
        <h2 class="text-xl font-bold mb-4">🧪 企业沙盒任务</h2>
        <p class="text-sm text-gray-600 mb-2">模拟真实故障环境：</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>数据库连接泄漏</li>
          <li>线程死锁调试</li>
          <li>服务异常降级</li>
        </ul>
        <el-button class="mt-4" type="success" size="small">进入沙盒环境</el-button>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MonacoEditor from 'monaco-editor-vue3'
  
  const code = ref(`public class Main {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }`)
  
  const error = ref('')
  
  const runCode = () => {
    // 模拟运行逻辑，这里可接入后端执行服务
    if (code.value.includes('null')) {
      error.value = '⚠️ 检测到可能的空指针风险'
    } else {
      error.value = ''
      alert('✅ 代码运行成功')
    }
  }
  </script>
  
  <style scoped>
  .monaco-editor {
    border-radius: 8px;
  }
  </style>